import { fashion, images } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SectionHeader, SmartImage, Stamp } from './UI'

export default function Fashion() {
  const [choice, set] = useStore((s) => s.fashionChoice)
  const pick = (v) => set((s) => ({ ...s, fashionChoice: s.fashionChoice === v ? '' : v }))

  return (
    <section id="fashion" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="Saturday • The Creative Stop"
          title="Designer for a day."
          lead="You love making fashion more than shopping for it. So this stop is about ideas you can borrow for your own designs, not buying stuff."
        />
      </Reveal>

      <div className="grid grid-2" style={{ alignItems: 'stretch' }}>
        {/* FIT, primary */}
        <Reveal>
          <div className="card" style={{ height: '100%', border: choice === 'fit' || choice === 'both' ? '2px solid var(--teal)' : '2px solid transparent' }}>
            <div style={{ position: 'relative' }}>
              <SmartImage src={images.fashion} alt="Fashion sketches and fabric on a design table" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 10, left: 10 }}><Stamp kind="pick">The Plan</Stamp></div>
            </div>
            <div style={{ padding: '1.3rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--navy)' }}>{fashion.primary.name}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: '3px 0' }}>{fashion.primary.address} · Free admission</div>
              <div className="pill-note" style={{ marginTop: 6 }}>Exhibition: {fashion.primary.exhibition}</div>
              <div style={{ marginTop: '1rem', background: 'var(--cream-2)', borderRadius: 'var(--radius-sm)', padding: '0.9rem 1rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)' }}>🎯 Designer Mission</div>
                <div style={{ marginTop: 4, fontSize: '0.95rem' }}>{fashion.primary.mission}</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mood, bonus */}
        <Reveal delay={0.1}>
          <div className="card" style={{ height: '100%', border: choice === 'mood' || choice === 'both' ? '2px solid var(--taxi-deep)' : '2px solid transparent' }}>
            <div style={{ position: 'relative', aspectRatio: '16/10', background: 'linear-gradient(135deg, var(--blush), var(--taxi))', display: 'grid', placeItems: 'center' }}>
              <span style={{ fontSize: '3rem' }}>🧵</span>
              <div style={{ position: 'absolute', top: 10, left: 10 }}><Stamp kind="challenge">Bonus Only</Stamp></div>
            </div>
            <div style={{ padding: '1.3rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--navy)' }}>{fashion.bonus.name}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: '3px 0' }}>{fashion.bonus.address}</div>
              <div style={{ fontSize: '0.9rem', marginTop: 6 }}>{fashion.bonus.note}</div>
              <div style={{ marginTop: '1rem', background: 'var(--cream-2)', borderRadius: 'var(--radius-sm)', padding: '0.9rem 1rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--taxi-deep)' }}>🎯 Designer Mission</div>
                <div style={{ marginTop: 4, fontSize: '0.95rem' }}>{fashion.bonus.mission}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div style={{ marginTop: '1.8rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--red)', marginBottom: '0.3rem' }}>We do NOT have to do both.</div>
          <p style={{ color: 'var(--muted)', maxWidth: '46ch', margin: '0 auto 1.2rem' }}>{fashion.note}</p>
          <div style={{ display: 'inline-flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { id: 'fit', label: 'Just FIT' },
              { id: 'mood', label: 'Just Mood' },
              { id: 'both', label: 'Both, if we&rsquo;re up for it' },
            ].map((o) => (
              <button key={o.id} className={`chip ${choice === o.id ? 'is-active' : ''}`} onClick={() => pick(o.id)} dangerouslySetInnerHTML={{ __html: o.label }} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
