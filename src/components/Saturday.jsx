import { Reveal, SectionHeader } from './UI'

const blocks = [
  { label: 'Morning', title: 'Bakery walk', sub: 'East Village, one bite at a time', tone: 'var(--blush)' },
  { label: 'Late morning', title: 'One creative stop', sub: 'FIT (or Mood, if we feel it)', tone: 'var(--cream-2)' },
  { label: 'Afternoon', title: 'Big open space', open: true },
  { label: 'Maybe', title: 'Tea, if we feel like it', sub: 'Zero pressure', tone: 'var(--cream-2)' },
  { label: 'Evening', title: 'American Ballet Theatre', sub: 'The grand finale', tone: 'var(--blush)' },
]

const openIdeas = ['Walk through a park', 'Sketch outfit ideas', 'People-watch', 'Find a snack', 'Whatever we feel like']

export default function Saturday() {
  return (
    <section id="saturday" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="Saturday"
          title="Sweets, style, and ballet."
          lead="Bakeries in the morning, one creative stop, then the ballet at night. An open afternoon in the middle to do whatever sounds good."
        />
      </Reveal>

      <div style={{ display: 'grid', gap: '0.9rem' }}>
        {blocks.map((b, i) =>
          b.open ? (
            <Reveal key={b.title} delay={i * 0.07}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius)',
                  minHeight: 300,
                  padding: 'clamp(1.6rem, 4vw, 2.6rem)',
                  background:
                    'radial-gradient(circle at 20% 20%, rgba(244,201,207,0.55), transparent 55%), radial-gradient(circle at 85% 75%, rgba(47,156,149,0.18), transparent 50%), #fff',
                  border: '2px dashed var(--blush-deep)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  overflow: 'hidden',
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: 6 }}>🧭</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blush-deep)', fontWeight: 800 }}>Afternoon • open</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: 'var(--navy)', margin: '6px 0 4px' }}>
                  Free afternoon
                </div>
                <p style={{ color: 'var(--muted)', maxWidth: '34ch', margin: '0 auto 1.1rem' }}>
                  Nothing locked in yet. We&rsquo;ll do whatever sounds good when we get there.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {openIdeas.map((idea) => (
                    <span key={idea} style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(11,31,58,0.1)', padding: '0.4rem 0.8rem', borderRadius: 999 }}>
                      {idea}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal key={b.title} delay={i * 0.07}>
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  minHeight: 84,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.3rem',
                  background: b.tone,
                  border: '1px solid rgba(11,31,58,0.08)',
                }}
              >
                <div style={{ flexShrink: 0, minWidth: 92 }}>
                  <div style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>{b.label}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem', color: 'var(--navy)' }}>{b.title}</div>
                  {b.sub && <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 2 }}>{b.sub}</div>}
                </div>
              </div>
            </Reveal>
          )
        )}
      </div>
    </section>
  )
}
