import { hamilton, images } from '../data/trip'
import { Reveal, SectionHeader, SmartImage, Stamp } from './UI'

export default function Hamilton() {
  return (
    <section id="hamilton" className="section section-full" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <SmartImage src={images.broadway} alt="Broadway theater marquee lights at night" style={{ width: '100%', height: '100%', objectFit: 'cover' }} fallback="var(--navy)" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,58,0.86), rgba(11,31,58,0.94))' }} />
      </div>

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', color: 'var(--cream)' }}>
        <Reveal>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Stamp kind="booked">Booked</Stamp>
            <span className="pill-note" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}>{hamilton.when}</span>
          </div>
          <SectionHeader onDark eyebrow="Friday Night on Broadway" title="Hamilton" lead={hamilton.kidExplainer} />
          <div style={{ marginTop: '-0.8rem', marginBottom: '2rem', opacity: 0.75, fontSize: '0.9rem' }}>
            {hamilton.venue} • {hamilton.address}
          </div>
        </Reveal>

        <div className="grid grid-2">
          <Reveal>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius)', padding: '1.4rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--taxi)' }}>🎧 Songs to know before we go</h3>
              <p style={{ opacity: 0.65, fontSize: '0.82rem', marginTop: 2 }}>Give them a listen so the theater feels like a sing-along.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0', display: 'grid', gap: '0.6rem' }}>
                {hamilton.songs.map((s) => (
                  <li key={s} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', fontSize: '1rem' }}>
                    <span style={{ color: 'var(--taxi)' }}>♪</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--taxi)', marginBottom: '0.9rem' }}>👀 What to look for</h3>
              <div className="grid grid-2">
                {hamilton.watchFor.map((w) => (
                  <div key={w.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-sm)', padding: '0.9rem 1rem' }}>
                    <div style={{ fontWeight: 800 }}>{w.title}</div>
                    <div style={{ opacity: 0.75, fontSize: '0.82rem', marginTop: 3 }}>{w.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p style={{ marginTop: '1.8rem', textAlign: 'center', opacity: 0.75, fontStyle: 'italic' }}>
            After the show? Nothing required. Maybe dessert, maybe a slow walk through the theater lights. That&rsquo;s plenty.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
