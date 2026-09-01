import { motion } from 'framer-motion'

// Fades + lifts a section into view as you scroll.
export function Reveal({ children, delay = 0, y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Stamp({ kind = 'booked', children }) {
  const cls = { booked: 'stamp-booked', pick: 'stamp-pick', challenge: 'stamp-challenge' }[kind] || 'stamp-booked'
  return <span className={`stamp ${cls}`}>{children}</span>
}

export function SectionHeader({ eyebrow, title, lead, onDark = false }) {
  return (
    <header style={{ marginBottom: 'clamp(1.6rem, 4vw, 2.6rem)' }}>
      {eyebrow && <div className={`eyebrow ${onDark ? 'on-dark' : ''}`}>{eyebrow}</div>}
      <h2 className="h-title" style={onDark ? { color: 'var(--cream)' } : undefined}>{title}</h2>
      {lead && <p className={`lead ${onDark ? 'on-dark' : ''}`}>{lead}</p>}
    </header>
  )
}

// Image with graceful loading + a colored fallback if it fails.
export function SmartImage({ src, alt, style, className, fallback = 'var(--cream-2)' }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      style={{ background: fallback, ...style }}
      onError={(e) => {
        e.currentTarget.style.opacity = '0'
      }}
    />
  )
}
