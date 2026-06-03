import { useEffect, useState } from 'react'

const sections = [
  { id: 'lenses', label: 'Características' },
  { id: 'performance', label: 'Rendimiento' },
  { id: 'technology', label: 'Tecnología' }
]

function Header() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <a href="#top" className="logo" onClick={(e) => handleClick(e, 'top')}>
        <span className="logo-icon"></span>
        VELOCITY
      </a>
      <nav className="nav">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={active === id ? 'active' : ''}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          href="#shop"
          className="btn-shop"
          onClick={(e) => handleClick(e, 'shop')}
        >
          Comprar Ahora
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={active === id ? 'active' : ''}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
