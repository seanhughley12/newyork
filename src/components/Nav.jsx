import { useEffect, useState } from 'react'

const links = [
  { href: '#glance', label: 'Weekend' },
  { href: '#omakase', label: 'Omakase' },
  { href: '#liberty', label: 'Liberty' },
  { href: '#hamilton', label: 'Hamilton' },
  { href: '#saturday', label: 'Saturday' },
  { href: '#bakeries', label: 'Bakeries' },
  { href: '#fashion', label: 'Fashion' },
  { href: '#ballet', label: 'Ballet' },
  { href: '#transport', label: 'Getting Around' },
  { href: '#planner', label: 'Your Turn' },
  { href: '#dreams', label: 'Dream Board' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: solid ? 'rgba(250,246,238,0.92)' : 'transparent',
        backdropFilter: solid ? 'blur(10px)' : 'none',
        boxShadow: solid ? '0 2px 20px rgba(11,31,58,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0.8rem clamp(1.1rem,5vw,4rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', color: solid ? 'var(--navy)' : 'var(--cream)' }}>
          NYC ’26 🗽
        </a>

        <div className="nav-desktop" style={{ display: 'none', gap: '1.2rem', alignItems: 'center' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600, color: solid ? 'var(--navy)' : 'var(--cream)', opacity: 0.9 }}>
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="nav-toggle"
          aria-label="Menu"
          style={{ background: solid ? 'var(--navy)' : 'rgba(255,255,255,0.18)', color: 'var(--cream)', border: 'none', borderRadius: 12, padding: '0.55rem 0.9rem', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div style={{ background: 'var(--navy)', padding: '0.5rem clamp(1.1rem,5vw,4rem) 1.4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ textDecoration: 'none', color: 'var(--cream)', padding: '0.7rem 0.5rem', fontWeight: 600, fontSize: '0.95rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`@media (min-width: 1024px){ .nav-desktop{ display:flex !important; } .nav-toggle{ display:none !important; } }`}</style>
    </nav>
  )
}
