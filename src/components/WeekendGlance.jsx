import { days } from '../data/trip'
import { Reveal, SectionHeader } from './UI'

export default function WeekendGlance() {
  return (
    <section id="glance" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="The Weekend at a Glance"
          title="Four days. Lots of room to breathe."
          lead="Some of this is planned. The best parts might not be. See how Saturday is the biggest, quietest block? That space is on purpose."
        />
      </Reveal>

      <div className="grid grid-4">
        {days.map((d, i) => (
          <Reveal key={d.id} delay={i * 0.08}>
            <div
              className="card"
              style={{
                padding: '1.4rem 1.3rem',
                minHeight: d.open ? 320 : 240,
                display: 'flex',
                flexDirection: 'column',
                background: d.open ? 'linear-gradient(160deg, #fff 0%, var(--blush) 220%)' : '#fff',
                border: d.open ? '2px dashed var(--blush-deep)' : '2px solid transparent',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--navy)' }}>{d.day}</div>
              <div className="pill-note" style={{ marginTop: 8, alignSelf: 'flex-start' }}>{d.tag}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.1rem 0 0', display: 'grid', gap: '0.6rem' }}>
                {d.items.map((it) => (
                  <li key={it} style={{ display: 'flex', gap: '0.55rem', alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--ink)' }}>
                    <span style={{ color: 'var(--teal)', fontWeight: 800 }}>›</span> {it}
                  </li>
                ))}
              </ul>
              {d.open && (
                <div style={{ marginTop: 'auto', paddingTop: '1rem', fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--blush-deep)', fontWeight: 600 }}>
                  ✨ Big open space = free to wander
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
