import { tea, images } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SectionHeader, SmartImage } from './UI'

const OPTS = [
  { id: 'yes', label: 'Yes please', cls: 'is-yes' },
  { id: 'maybe', label: 'Maybe', cls: 'is-maybe' },
  { id: 'skip', label: 'Skip it', cls: 'is-no' },
]

export default function Tea() {
  const [vote, set] = useStore((s) => s.teaVote)
  const choose = (v) => set((s) => ({ ...s, teaVote: s.teaVote === v ? '' : v }))

  return (
    <section id="tea" className="section section-full" style={{ background: 'var(--blush)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <Reveal>
            <div>
              <SectionHeader eyebrow="Totally Optional" title="Afternoon tea?" lead="Saturday afternoon is protected breathing room. Tea only happens if it feels fun — not because a schedule says so." />
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: '0.4rem' }}>
                {OPTS.map((o) => (
                  <button key={o.id} className={`chip ${o.cls} ${vote === o.id ? 'is-active' : ''}`} onClick={() => choose(o.id)}>{o.label}</button>
                ))}
              </div>
              {tea.shortlist.length > 0 ? (
                <ul style={{ marginTop: '1.2rem', paddingLeft: '1.1rem' }}>
                  {tea.shortlist.map((t) => (
                    <li key={t.name}><strong>{t.name}</strong> {t.address && `· ${t.address}`}</li>
                  ))}
                </ul>
              ) : (
                <div style={{ marginTop: '1.2rem' }}><span className="pill-note">If we vote yes, Dad will add a few tea spots to choose from.</span></div>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <SmartImage src={images.tea} alt="A tiered tray of afternoon tea treats" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
