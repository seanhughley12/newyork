import { resetStore } from '../hooks/useStore'
import { trip } from '../data/trip'

export default function Footer() {
  const onReset = () => {
    if (confirm('Clear all your picks, scores, and dream board? This cannot be undone.')) resetStore()
  }
  return (
    <footer className="on-navy" style={{ padding: '3rem clamp(1.1rem,5vw,4rem)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.8rem', color: 'var(--cream)' }}>
        {trip.city}. {trip.month}.
      </div>
      <p style={{ opacity: 0.7, maxWidth: '38ch', margin: '0.6rem auto 1.4rem' }}>
        {trip.philosophy[0]} {trip.philosophy[1]} Just you and Dad, and a whole city to wander.
      </p>
      <button onClick={onReset} className="btn btn-ghost" style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.25)' }}>
        Start my planning over
      </button>
      <div style={{ marginTop: '1.8rem', fontSize: '0.75rem', opacity: 0.45 }}>Made with love for Olivia 🗽</div>
    </footer>
  )
}
