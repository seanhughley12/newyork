import { useState } from 'react'
import { dreamCategories } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SectionHeader } from './UI'

const catColor = {
  Food: 'var(--taxi-deep)', Fashion: 'var(--blush-deep)', Broadway: 'var(--red)',
  Ballet: 'var(--blush-deep)', NYC: 'var(--teal)', Other: 'var(--muted)',
}

export default function DreamBoard() {
  const [dreams, set] = useStore((s) => s.dreams)
  const [form, setForm] = useState({ title: '', link: '', why: '', category: 'NYC' })

  const add = () => {
    if (!form.title.trim()) return
    const item = { ...form, id: Date.now() }
    set((s) => ({ ...s, dreams: [item, ...s.dreams] }))
    setForm({ title: '', link: '', why: '', category: 'NYC' })
  }
  const remove = (id) => set((s) => ({ ...s, dreams: s.dreams.filter((d) => d.id !== id) }))

  return (
    <section id="dreams" className="section">
      <Reveal>
        <SectionHeader
          eyebrow="Dream Board"
          title="Save anything that makes you excited."
          lead="Find a video, a bakery, an outfit, a spot you want to see? Pin it here. It&rsquo;s your travel scrapbook, saved right on this device."
        />
      </Reveal>

      <div className="grid grid-2" style={{ alignItems: 'start' }}>
        <Reveal>
          <div className="card" style={{ padding: '1.4rem' }}>
            <label>Title</label>
            <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="What is it?" />
            <div style={{ marginTop: '0.8rem' }}>
              <label>Link (optional)</label>
              <input type="text" value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="https://…" />
            </div>
            <div style={{ marginTop: '0.8rem' }}>
              <label>Why I saved it</label>
              <input type="text" value={form.why} onChange={(e) => setForm({ ...form, why: e.target.value })} placeholder="because…" />
            </div>
            <div style={{ marginTop: '0.8rem' }}>
              <label>Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {dreamCategories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '1.1rem', width: '100%' }} onClick={add}>+ Pin it to the board</button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {dreams.length === 0 ? (
              <div className="card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>📌</div>
                Nothing pinned yet. The first idea goes here.
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                {dreams.map((d) => (
                  <div key={d.id} className="card" style={{ padding: '1rem 1.1rem', display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: catColor[d.category] || 'var(--muted)', marginTop: 6, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 800, color: 'var(--navy)' }}>{d.title}</div>
                      {d.why && <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 2 }}>{d.why}</div>}
                      {d.link && <a href={d.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 600, wordBreak: 'break-all' }}>Open link ↗</a>}
                      <div style={{ marginTop: 4 }}><span style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: catColor[d.category] }}>{d.category}</span></div>
                    </div>
                    <button onClick={() => remove(d.id)} aria-label="Remove" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: '1.1rem' }}>✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
