import { useState } from 'react'
import { bakeries, plannerPrompts, fashion } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SectionHeader } from './UI'

function Row({ label, value, ok }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '0.7rem 0', borderBottom: '1px solid rgba(11,31,58,0.08)' }}>
      <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{label}</span>
      <span style={{ fontWeight: 700, color: ok ? 'var(--teal)' : 'var(--muted)', textAlign: 'right', fontSize: '0.9rem' }}>{value}</span>
    </div>
  )
}

export default function Planner() {
  const [store, set] = useStore((s) => s)
  const [burst, setBurst] = useState(false)

  const picks = bakeries.filter((b) => store.bakeryPicks[b.id]).map((b) => b.name.split(' ')[0])
  const teaLabel = { yes: 'Yes please', maybe: 'Maybe', skip: 'Skip it' }[store.teaVote] || 'Not yet'
  const fashionLabel = { fit: 'FIT', mood: 'Mood', both: 'Both' }[store.fashionChoice] || 'Not yet'

  const setPrompt = (id, v) => set((s) => ({ ...s, planner: { ...s.planner, [id]: v } }))

  const celebrate = () => {
    setBurst(true)
    setTimeout(() => setBurst(false), 1500)
  }

  const decisionsMade =
    picks.length + (store.teaVote ? 1 : 0) + (store.fashionChoice ? 1 : 0) +
    Object.values(store.planner).filter(Boolean).length

  return (
    <section id="planner" className="section section-full on-navy">
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
        <Reveal>
          <SectionHeader onDark eyebrow="Your Turn, Planner" title="You&rsquo;re running this trip too." lead="Everything you tapped around the site shows up here. Fill the rest in whenever the ideas hit you. It all saves automatically on this device." />
        </Reveal>

        <div className="grid grid-2">
          {/* Live decision summary */}
          <Reveal>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius)', padding: '1.4rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--taxi)', marginBottom: '0.6rem' }}>What you&rsquo;ve decided so far</h3>
              <Row label="Top bakeries" value={picks.length ? picks.join(', ') : 'Pick 3–4 above'} ok={picks.length >= 3 && picks.length <= 4} />
              <Row label="Afternoon tea" value={teaLabel} ok={!!store.teaVote} />
              <Row label="Fashion stop" value={fashionLabel} ok={!!store.fashionChoice} />
              <Row label="Ways to travel stamped" value={`${Object.values(store.transportStamps).filter(Boolean).length} / 4`} ok={Object.values(store.transportStamps).filter(Boolean).length === 4} />
              <Row label="Omakase foods you'd try" value={`${Object.values(store.omakaseVotes).filter((v) => v === 'yes').length}`} ok={Object.values(store.omakaseVotes).some((v) => v === 'yes')} />
              <div style={{ marginTop: '1.2rem' }}>
                <button className="btn btn-taxi" onClick={celebrate} style={{ width: '100%' }}>
                  I&rsquo;ve made {decisionsMade} {decisionsMade === 1 ? 'choice' : 'choices'} so far. Celebrate! 🎉
                </button>
              </div>
            </div>
          </Reveal>

          {/* Open-ended prompts */}
          <Reveal delay={0.1}>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {plannerPrompts.map((p) => (
                <div key={p.id}>
                  <label style={{ color: 'rgba(255,255,255,0.85)' }}>{p.q}</label>
                  <input type="text" value={store.planner[p.id] || ''} onChange={(e) => setPrompt(p.id, e.target.value)} placeholder="type your answer…" />
                </div>
              ))}
              <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                Reminder: {fashion.note}
              </p>
            </div>
          </Reveal>
        </div>

        {burst && <Confetti />}
      </div>
    </section>
  )
}

function Confetti() {
  const bits = Array.from({ length: 60 })
  const colors = ['#ffcf33', '#2f9c95', '#e79aa5', '#c8102e', '#faf6ee']
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 5 }}>
      {bits.map((_, i) => {
        const left = Math.random() * 100
        const delay = Math.random() * 0.3
        const dur = 1 + Math.random()
        const size = 6 + Math.random() * 8
        const color = colors[i % colors.length]
        return (
          <span
            key={i}
            style={{
              position: 'absolute', top: '-20px', left: `${left}%`, width: size, height: size,
              background: color, borderRadius: 2, animation: `fall ${dur}s ${delay}s ease-in forwards`,
            }}
          />
        )
      })}
      <style>{`@keyframes fall { to { transform: translateY(120vh) rotate(540deg); opacity: 0; } }`}</style>
    </div>
  )
}
