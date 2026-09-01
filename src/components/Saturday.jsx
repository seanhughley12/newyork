import { Reveal, SectionHeader } from './UI'

const blocks = [
  { label: 'Morning', title: 'Bakery walk', h: 120, tone: 'var(--blush)' },
  { label: 'Late morning', title: 'One creative stop', h: 120, tone: 'var(--cream-2)' },
  { label: 'Afternoon', title: 'Big open space', h: 260, tone: 'transparent', open: true },
  { label: 'Maybe', title: 'Tea — only if it fits', h: 100, tone: 'var(--cream-2)' },
  { label: 'Evening', title: 'American Ballet Theatre', h: 130, tone: 'var(--blush)' },
]

export default function Saturday() {
  return (
    <section id="saturday" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="Saturday • The Slower Day"
          title="The day we don&rsquo;t rush."
          lead="Saturday has a couple of special things and a whole lot of on-purpose nothing. The biggest block below is empty — because the best NYC moments usually are."
        />
      </Reveal>

      <div style={{ display: 'grid', gap: '0.9rem' }}>
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.07}>
            <div
              style={{
                borderRadius: 'var(--radius-sm)',
                minHeight: b.h,
                display: 'flex',
                alignItems: b.open ? 'center' : 'flex-start',
                justifyContent: b.open ? 'center' : 'flex-start',
                flexDirection: 'column',
                padding: '1.1rem 1.3rem',
                background: b.open ? 'linear-gradient(135deg, #fff, var(--blush) 200%)' : b.tone,
                border: b.open ? '2px dashed var(--blush-deep)' : '1px solid rgba(11,31,58,0.08)',
                textAlign: b.open ? 'center' : 'left',
              }}
            >
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>{b.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: b.open ? '1.9rem' : '1.25rem', color: 'var(--navy)', marginTop: 4 }}>{b.title}</div>
              {b.open && <div style={{ marginTop: 8, color: 'var(--blush-deep)', fontWeight: 600, fontStyle: 'italic' }}>Wander. Sit. Watch the city. No plan needed. ✨</div>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
