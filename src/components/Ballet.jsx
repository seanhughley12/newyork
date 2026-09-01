import { motion } from 'framer-motion'
import { ballet, images } from '../data/trip'
import { useStore } from '../hooks/useStore'
import { Reveal, SmartImage, Stamp } from './UI'

export default function Ballet() {
  const [watch, set] = useStore((s) => s.balletWatch)
  const setItem = (k, v) => set((s) => ({ ...s, balletWatch: { ...s.balletWatch, [k]: v } }))

  return (
    <section id="ballet" className="section-full" style={{ background: 'var(--navy)', color: 'var(--cream)' }}>
      {/* Grand full-bleed opener */}
      <div style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <motion.div initial={{ scale: 1.12 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'absolute', inset: 0 }}>
          <SmartImage src={images.balletHall} alt="An ornate theater interior with a red velvet curtain and golden balconies" style={{ width: '100%', height: '100%', objectFit: 'cover' }} fallback="var(--navy)" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.35) 45%, rgba(11,31,58,0.96) 100%)' }} />
        </motion.div>

        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(2rem,6vw,4rem) clamp(1.1rem,5vw,4rem)', width: '100%' }}>
          <Reveal>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
              <Stamp kind="booked">Booked</Stamp>
              <span className="pill-note" style={{ background: 'rgba(255,255,255,0.14)', color: 'var(--cream)' }}>Saturday evening • the grand finale</span>
            </div>
            <div className="eyebrow on-dark">The Main Event</div>
            <h2 style={{ fontSize: 'clamp(2.6rem, 9vw, 6rem)', letterSpacing: '-0.02em', color: 'var(--cream)', lineHeight: 0.98 }}>
              American<br />Ballet Theatre
            </h2>
            <p style={{ fontSize: 'clamp(1.05rem, 2.6vw, 1.4rem)', maxWidth: '40ch', lineHeight: 1.4, opacity: 0.92, marginTop: '1rem' }}>
              {ballet.intro}
            </p>
            {ballet.performanceTbd ? (
              <div style={{ marginTop: '1.4rem' }}><span className="pill-note" style={{ background: 'rgba(255,255,255,0.14)', color: 'var(--cream)' }}>🎟️ Dad will add the performance, theater, and seats from the tickets</span></div>
            ) : (
              <div style={{ marginTop: '1.4rem', fontSize: '1.1rem', opacity: 0.9 }}>{ballet.performanceName} · {ballet.theater} · {ballet.time}</div>
            )}
          </Reveal>
        </div>
      </div>

      {/* Body */}
      <div className="section" style={{ paddingTop: 'clamp(2.5rem,6vw,4rem)' }}>
        {/* Why it's special */}
        <div className="grid grid-4" style={{ marginBottom: 'clamp(2rem,5vw,3.4rem)' }}>
          {ballet.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius)', padding: '1.3rem', height: '100%' }}>
                <div style={{ fontSize: '1.8rem' }}>{f.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--taxi)', marginTop: 6 }}>{f.label}</div>
                <div style={{ opacity: 0.82, fontSize: '0.88rem', marginTop: 4, lineHeight: 1.45 }}>{f.text}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-2" style={{ alignItems: 'stretch' }}>
          {/* Image accent */}
          <Reveal>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '100%', minHeight: 320 }}>
              <SmartImage src={images.ballet} alt="A ballet dancer mid-movement in soft light" style={{ width: '100%', height: '100%', objectFit: 'cover' }} fallback="var(--navy-2)" />
            </div>
          </Reveal>

          {/* Watch-for mini game */}
          <Reveal delay={0.1}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius)', padding: '1.5rem', height: '100%' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--taxi)' }}>🩰 Your ballet mission</h3>
              <p style={{ opacity: 0.75, fontSize: '0.9rem', marginTop: 4, marginBottom: '1.1rem' }}>Watch for these during the show. Fill them in afterward, from memory, so you keep the night forever.</p>
              <div style={{ display: 'grid', gap: '0.9rem' }}>
                {ballet.watchFor.map((w) => (
                  <div key={w}>
                    <label style={{ color: 'rgba(255,255,255,0.85)' }}>{w}</label>
                    <input type="text" value={watch[w] || ''} onChange={(e) => setItem(w, e.target.value)} placeholder="…" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <p style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.8, fontStyle: 'italic', fontSize: '1.05rem' }}>
            No mandatory sightseeing afterward. The day can simply end beautifully.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
