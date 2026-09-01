import { bakeries, pastryPhotos } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SectionHeader, SmartImage, Stamp } from './UI'

function Score({ value, onChange, color }) {
  return (
    <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onChange(value === n ? 0 : n)}
          aria-label={`Score ${n}`}
          style={{
            width: 24, height: 24, borderRadius: 7, cursor: 'pointer', fontSize: '0.7rem', fontWeight: 700,
            border: '1px solid rgba(11,31,58,0.15)',
            background: value >= n ? color : '#fff',
            color: value >= n ? '#fff' : 'var(--muted)',
          }}
        >
          {n}
        </button>
      ))}
    </div>
  )
}

export default function Bakeries() {
  const [store, set] = useStore((s) => s)
  const picks = store.bakeryPicks
  const pastry = store.bakeryPastry
  const scorecard = store.scorecard
  const pickCount = Object.values(picks).filter(Boolean).length

  const toggle = (id) => set((s) => ({ ...s, bakeryPicks: { ...s.bakeryPicks, [id]: !s.bakeryPicks[id] } }))
  const setPastry = (id, v) => set((s) => ({ ...s, bakeryPastry: { ...s.bakeryPastry, [id]: v } }))
  const setScore = (id, field, v) =>
    set((s) => ({ ...s, scorecard: { ...s.scorecard, [id]: { ...s.scorecard[id], [field]: v } } }))

  const picked = bakeries.filter((b) => picks[b.id])

  return (
    <section id="bakeries" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="Saturday Morning • The Bakery Crawl"
          title="Build our bakery crawl."
          lead="These are the spots locals told Dad about, all near each other in the East Village. You don&rsquo;t pick all six. Choose your top 3 or 4 and we&rsquo;ll walk between them."
        />
      </Reveal>

      <Reveal>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.4rem' }}>
          <div className="pill-note" style={{ background: pickCount >= 3 && pickCount <= 4 ? 'var(--teal)' : 'var(--cream-2)', color: pickCount >= 3 && pickCount <= 4 ? '#fff' : 'var(--muted)' }}>
            {pickCount} picked {pickCount >= 3 && pickCount <= 4 ? '• perfect crawl 🎯' : '• aim for 3–4'}
          </div>
          <div style={{ fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.9rem' }}>
            &ldquo;One item. Share it. Score it. Move on.&rdquo; · &ldquo;Stop while it&rsquo;s still fun.&rdquo;
          </div>
        </div>
      </Reveal>

      <div className="grid grid-3">
        {bakeries.map((b, i) => {
          const on = !!picks[b.id]
          return (
            <Reveal key={b.id} delay={i * 0.05}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', border: on ? '2px solid var(--teal)' : '2px solid transparent' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--cream-2)', overflow: 'hidden' }}>
                  <SmartImage src={pastryPhotos[b.id]} alt={`Fresh pastries, representative photo for ${b.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} fallback="var(--blush)" />
                  <span style={{ position: 'absolute', bottom: 8, left: 8, fontSize: '0.62rem', color: '#fff', background: 'rgba(11,31,58,0.6)', padding: '2px 8px', borderRadius: 999 }}>stock photo</span>
                  {on && <div style={{ position: 'absolute', top: 8, right: 8 }}><Stamp kind="pick">Your Pick</Stamp></div>}
                </div>
                <div style={{ padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--navy)', lineHeight: 1.15 }}>{b.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: '3px 0 0.5rem' }}>{b.address}</div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--ink)', flex: 1 }}>{b.blurb}</div>

                  <button className="btn" style={{ marginTop: '0.9rem', width: '100%', background: on ? 'var(--teal)' : 'var(--cream-2)', color: on ? '#fff' : 'var(--navy)' }} onClick={() => toggle(b.id)}>
                    {on ? '✓ On our crawl' : 'I want this one'}
                  </button>

                  {on && (
                    <div style={{ marginTop: '0.8rem' }}>
                      <label>A pastry I want to try here</label>
                      <input type="text" value={pastry[b.id] || ''} onChange={(e) => setPastry(b.id, e.target.value)} placeholder="e.g. almond croissant" />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* Scorecard */}
      {picked.length > 0 && (
        <Reveal>
          <div style={{ marginTop: '2.6rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)' }}>📓 Our tasting scorecard</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>Fill this in while you&rsquo;re there. Two judges: you and Dad.</p>
            <div className="grid grid-2">
              {picked.map((b) => {
                const sc = scorecard[b.id] || {}
                return (
                  <div key={b.id} className="card" style={{ padding: '1.2rem' }}>
                    <div style={{ fontWeight: 800, color: 'var(--navy)', marginBottom: 4 }}>{b.name}</div>
                    {pastry[b.id] && <div style={{ fontSize: '0.82rem', color: 'var(--teal)', marginBottom: '0.8rem' }}>Trying: {pastry[b.id]}</div>}

                    <label>What we tried</label>
                    <input type="text" value={sc.tried || ''} onChange={(e) => setScore(b.id, 'tried', e.target.value)} placeholder="the actual thing we ordered" />

                    <div style={{ display: 'grid', gap: '0.7rem', marginTop: '0.9rem' }}>
                      <div><label>Taste (Olivia)</label><Score value={sc.oliviaScore || 0} onChange={(v) => setScore(b.id, 'oliviaScore', v)} color="var(--blush-deep)" /></div>
                      <div><label>Taste (Dad)</label><Score value={sc.dadScore || 0} onChange={(v) => setScore(b.id, 'dadScore', v)} color="var(--navy)" /></div>
                      <div><label>Looks</label><Score value={sc.looks || 0} onChange={(v) => setScore(b.id, 'looks', v)} color="var(--taxi-deep)" /></div>
                    </div>

                    <div style={{ marginTop: '0.9rem', display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)' }}>Come back?</span>
                      {['Yes!', 'Meh', 'No'].map((opt) => (
                        <button key={opt} className={`chip ${sc.again === opt ? 'is-active' : ''}`} style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem' }} onClick={() => setScore(b.id, 'again', sc.again === opt ? '' : opt)}>{opt}</button>
                      ))}
                    </div>

                    <div style={{ marginTop: '0.9rem' }}>
                      <label>Add a photo later / a note</label>
                      <input type="text" value={sc.note || ''} onChange={(e) => setScore(b.id, 'note', e.target.value)} placeholder="📷 remember this one because…" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  )
}
