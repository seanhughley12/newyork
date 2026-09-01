import { omakase, images } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SectionHeader, SmartImage, Stamp } from './UI'

const OPTIONS = [
  { id: 'yes', label: "I\u2019d try it", cls: 'is-yes' },
  { id: 'maybe', label: 'Maybe', cls: 'is-maybe' },
  { id: 'no', label: 'Nope', cls: 'is-no' },
]

export default function Omakase() {
  const [votes, set] = useStore((s) => s.omakaseVotes)

  const vote = (food, choice) =>
    set((s) => ({ ...s, omakaseVotes: { ...s.omakaseVotes, [food]: s.omakaseVotes[food] === choice ? '' : choice } }))

  return (
    <section id="omakase" className="section on-navy section-full">
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Reveal>
          <SectionHeader onDark eyebrow="Thursday Dinner" title="Wait… what is omakase?" lead="It means &lsquo;I leave it up to you.&rsquo; Instead of picking one meal, the chef chooses a sequence of small Japanese courses and serves them to us one at a time." />
        </Reveal>

        <div className="grid grid-2" style={{ alignItems: 'center', marginBottom: '2.2rem' }}>
          <Reveal>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <SmartImage src={images.omakase} alt="A chef presenting a piece of nigiri sushi" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} fallback="var(--navy-2)" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                <Stamp kind="booked">Booked</Stamp>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.6rem' }}>{omakase.restaurantName}</span>
              </div>
              <p style={{ opacity: 0.85, lineHeight: 1.5 }}>
                Heads up: traditional sushi omakase often includes <strong>raw fish</strong> — but some bites are cooked or seared. You get to decide what you&rsquo;re up for.
              </p>
              {omakase.reservationTbd ? (
                <span className="pill-note" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}>Reservation details coming soon</span>
              ) : (
                <p style={{ opacity: 0.85 }}>{omakase.reservationTime} • {omakase.address}</p>
              )}
              {omakase.videoUrl ? (
                <a className="btn btn-taxi" href={omakase.videoUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 14, textDecoration: 'none' }}>▶ Watch before the trip</a>
              ) : (
                <div style={{ marginTop: 14 }}><span className="pill-note" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}>🎬 Dad will add a video to watch</span></div>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3 style={{ fontSize: '1.3rem', marginBottom: 4 }}>Which of these would you try?</h3>
          <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '1.2rem' }}>Tap your gut reaction. You can change your mind anytime.</p>
        </Reveal>

        <div className="grid grid-3">
          {omakase.foods.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-sm)', padding: '1.1rem' }}>
                <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>{f.name}</div>
                <div style={{ opacity: 0.7, fontSize: '0.82rem', margin: '2px 0 0.9rem' }}>{f.note}</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {OPTIONS.map((o) => (
                    <button key={o.id} className={`chip ${o.cls} ${votes[f.name] === o.id ? 'is-active' : ''}`} onClick={() => vote(f.name, o.id)}>
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
