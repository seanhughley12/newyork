import { motion } from 'framer-motion'
import { trip, anchors } from '../data/trip'
import { images } from '../data/trip'
import { useCountdown } from '../hooks/useCountdown'
import { SmartImage, Stamp } from './UI'

function CountBox({ value, label }) {
  return (
    <div style={{ textAlign: 'center', minWidth: 62 }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(1.8rem, 6vw, 3rem)',
          color: 'var(--taxi)',
          lineHeight: 1,
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div style={{ fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7, marginTop: 6 }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const c = useCountdown(trip.startDate)

  return (
    <header style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <SmartImage
          src={images.heroSkyline}
          alt="New York City skyline at golden hour"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          fallback="var(--navy)"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(11,31,58,0.35) 0%, rgba(11,31,58,0.15) 40%, rgba(11,31,58,0.9) 100%)',
          }}
        />
      </motion.div>

      <div style={{ position: 'relative', width: '100%', maxWidth: 1180, margin: '0 auto', padding: 'clamp(2rem,6vw,4rem) clamp(1.1rem,5vw,4rem) clamp(2.4rem,5vw,3.5rem)', color: 'var(--cream)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
          <div className="eyebrow on-dark">{trip.travelerName} + Dad • {trip.month}</div>
          <h1 style={{ fontSize: 'clamp(3rem, 12vw, 8rem)', letterSpacing: '-0.02em', margin: '0.2rem 0 0.4rem', color: 'var(--cream)' }}>
            {trip.travelerName},<br />New York<br />Is Waiting.
          </h1>
          <p style={{ fontSize: 'clamp(1.05rem, 3vw, 1.5rem)', maxWidth: '30ch', lineHeight: 1.35, opacity: 0.92 }}>
            {trip.philosophy[0]} <br />
            <span style={{ opacity: 0.8, fontSize: '0.9em' }}>{trip.philosophy[1]}</span>
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          style={{ marginTop: '2rem', display: 'inline-flex', gap: 'clamp(0.6rem,2vw,1.4rem)', alignItems: 'center', background: 'rgba(11,31,58,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 20, padding: '1rem 1.4rem' }}
        >
          {c.valid && !c.done ? (
            <>
              <CountBox value={c.days} label="Days" />
              <CountBox value={c.hours} label="Hrs" />
              <CountBox value={c.mins} label="Min" />
              <CountBox value={c.secs} label="Sec" />
              <div style={{ maxWidth: 140, fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3, paddingLeft: 4 }}>
                until we land in the city
              </div>
            </>
          ) : c.done ? (
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--taxi)' }}>
              We&rsquo;re here. Let&rsquo;s go. 🗽
            </div>
          ) : (
            <div style={{ fontWeight: 600 }}>Dates landing soon ✨</div>
          )}
        </motion.div>

        {/* Booked anchors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-4"
          style={{ marginTop: '2.4rem' }}
        >
          {anchors.map((a) => (
            <a key={a.id} href={`#${a.id}`} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 18,
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <SmartImage src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} fallback="var(--navy-2)" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,58,0) 40%, rgba(11,31,58,0.92) 100%)' }} />
                <div style={{ position: 'absolute', top: 10, left: 10 }}>
                  <Stamp kind="booked">{a.stamp}</Stamp>
                </div>
                <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.15rem', color: 'var(--cream)', lineHeight: 1.05 }}>{a.title}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.85, color: 'var(--cream)', marginTop: 2 }}>{a.detail}</div>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </header>
  )
}
