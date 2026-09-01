import { transport } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SectionHeader, Stamp } from './UI'

export default function Transport() {
  const [stamps, set] = useStore((s) => s.transportStamps)
  const toggle = (id) => set((s) => ({ ...s, transportStamps: { ...s.transportStamps, [id]: !s.transportStamps[id] } }))
  const done = Object.values(stamps).filter(Boolean).length

  return (
    <section id="transport" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="The NYC Transportation Challenge"
          title="Collect all four ways to move."
          lead="Getting around is part of the adventure. Ride each one at least once and stamp it. Yes — the yellow taxi is officially on the list."
        />
      </Reveal>

      <Reveal>
        <div className="pill-note" style={{ marginBottom: '1.4rem', background: done === 4 ? 'var(--teal)' : 'var(--cream-2)', color: done === 4 ? '#fff' : 'var(--muted)' }}>
          {done} of 4 collected {done === 4 ? '• Challenge complete! 🏆' : ''}
        </div>
      </Reveal>

      <div className="grid grid-4">
        {transport.map((t, i) => {
          const on = !!stamps[t.id]
          return (
            <Reveal key={t.id} delay={i * 0.06}>
              <button
                onClick={() => toggle(t.id)}
                className="card"
                style={{
                  textAlign: 'left', cursor: 'pointer', border: on ? '2px solid var(--taxi-deep)' : '2px solid transparent',
                  padding: '1.3rem', width: '100%', height: '100%', background: on ? 'linear-gradient(160deg, #fff, var(--taxi) 320%)' : '#fff',
                  display: 'flex', flexDirection: 'column', gap: '0.5rem', minHeight: 180,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '2.2rem' }}>{t.icon}</span>
                  {on && <Stamp kind="challenge">Rode it!</Stamp>}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem', color: 'var(--navy)' }}>{t.mode}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{t.copy}</div>
                <div style={{ marginTop: 'auto', fontSize: '0.8rem', fontWeight: 700, color: on ? 'var(--taxi-deep)' : 'var(--teal)' }}>
                  {on ? '✓ Stamped' : 'Tap to stamp'}
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
