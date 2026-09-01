import { liberty, images } from '../data/trip'
import { Reveal, SectionHeader, SmartImage, Stamp } from './UI'

export default function Liberty() {
  return (
    <section id="liberty" className="section">
      <Reveal>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
          <Stamp kind="booked">Booked</Stamp>
          <span className="pill-note">Friday morning • Pedestal Reserve tickets</span>
        </div>
        <SectionHeader eyebrow="Friday Adventure" title="Meeting Lady Liberty" lead="This one is locked in with real Pedestal Reserve tickets, the kind that let you go up inside. Here&rsquo;s how the day goes." />
      </Reveal>

      <div className="grid grid-2" style={{ alignItems: 'stretch' }}>
        <Reveal>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '100%', minHeight: 320 }}>
            <SmartImage src={images.liberty} alt="The Statue of Liberty against a blue sky" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </Reveal>

        <div style={{ display: 'grid', gap: '0.9rem' }}>
          {liberty.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="card" style={{ padding: '1.1rem 1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'var(--teal)', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem' }}>{s.n}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--navy)' }}>{s.title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: 2 }}>{s.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <div style={{ marginTop: '1.6rem', background: 'var(--navy)', color: 'var(--cream)', borderRadius: 'var(--radius)', padding: '1.4rem 1.6rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.8rem' }}>💡</span>
          <div>
            <div style={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem', color: 'var(--taxi)' }}>Did you know?</div>
            <div style={{ fontSize: '1.05rem', marginTop: 4 }}>{liberty.fact}</div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
