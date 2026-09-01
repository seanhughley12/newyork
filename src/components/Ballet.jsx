import { ballet, images } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SectionHeader, SmartImage, Stamp } from './UI'

export default function Ballet() {
  const [watch, set] = useStore((s) => s.balletWatch)
  const setItem = (k, v) => set((s) => ({ ...s, balletWatch: { ...s.balletWatch, [k]: v } }))

  return (
    <section id="ballet" className="section section-full" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <SmartImage src={images.ballet} alt="A ballerina on stage in soft light" style={{ width: '100%', height: '100%', objectFit: 'cover' }} fallback="var(--navy)" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,58,0.5), rgba(11,31,58,0.9))' }} />
      </div>

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', color: 'var(--cream)' }}>
        <Reveal>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Stamp kind="booked">Booked</Stamp>
            <span className="pill-note" style={{ background: 'rgba(255,255,255,0.14)', color: 'var(--cream)' }}>Saturday evening</span>
          </div>
          <SectionHeader onDark eyebrow="Saturday Night" title="American Ballet Theatre" lead="One of the great ballet companies in the world — and we have tickets. Let the day end beautifully." />
          {ballet.performanceTbd ? (
            <div style={{ marginBottom: '1.6rem' }}><span className="pill-note" style={{ background: 'rgba(255,255,255,0.14)', color: 'var(--cream)' }}>Performance name, theater + seats coming from the tickets</span></div>
          ) : (
            <div style={{ marginBottom: '1.6rem', opacity: 0.85 }}>{ballet.performanceName} · {ballet.theater} · {ballet.time}</div>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius)', padding: '1.4rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--taxi)' }}>🩰 Watch for… (fill in during the show, from memory after)</h3>
            <div className="grid grid-2" style={{ marginTop: '1rem' }}>
              {ballet.watchFor.map((w) => (
                <div key={w}>
                  <label style={{ color: 'rgba(255,255,255,0.8)' }}>{w}</label>
                  <input type="text" value={watch[w] || ''} onChange={(e) => setItem(w, e.target.value)} placeholder="…" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ marginTop: '1.6rem', textAlign: 'center', opacity: 0.8, fontStyle: 'italic' }}>
            No mandatory sightseeing afterward. The day can simply end beautifully.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
