import { useEffect, useState } from 'react'

const sports = [
  {
    name: 'Ciclismo',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6l-3.5 8M9 17.5l3.5-8M12 6h4l3 5.5M6 17.5L9 8h6" />
      </svg>
    ),
  },
  {
    name: 'Running',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="4" r="2" />
        <path d="M4 22l4-7 4 2 2-4 4 4 3-2" />
        <path d="M9 9l3-2 3 3" />
      </svg>
    ),
  },
  {
    name: 'Motociclismo',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="17" r="3" />
        <circle cx="19" cy="17" r="3" />
        <path d="M14 17H8l3-7h4l2 4h2" />
        <path d="M11 10V6h2" />
      </svg>
    ),
  },
  {
    name: 'Deportes al Aire Libre',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22l8-12 4 6 8-10" />
        <path d="M2 22h20" />
      </svg>
    ),
  },
]

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Carretera al amanecer',
    desc: 'Ciclistas en ruta de montaña con luz baja.',
  },
  // {
   
  //   image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  //   title: 'Enfoque en cada repetición',
  //   desc: 'Un espacio adaptado para tu rutina diaria, combinando comodidad y rendimiento en cada entrenamiento.',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  //   title: 'Ruta en moto',
  //   desc: 'Viento en contra y exposición total al sol.',
  // },
  {
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Cumbre a 3.000 m',
    desc: 'Alta montaña con UV extremo y nieve.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Costa y playa',
    desc: 'Reflectancia del agua y brisa marina.',
  },
  {
    image: '/img/running.jpg',
    title: 'Running urbano',
    desc: 'Corredores en ciudad con cambios constantes de luz entre edificios.',
  },
]

function Carousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [paused])

  const go = (i) => setIndex(((i % slides.length) + slides.length) % slides.length)
  const prev = () => go(index - 1)
  const next = () => go(index + 1)

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div className="carousel-slide" key={i}>
              <img src={s.image} alt={s.title} loading="lazy" />
              <div className="carousel-caption">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="carousel-btn next" onClick={next} aria-label="Siguiente">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function Sports() {
  return (
    <section className="section sports" id="sports">
      <div className="container">
        <div className="sports-header">
          <span className="eyebrow">Diseñadas para cada aventura</span>
          <h2>
            Llévalas a <span className="accent">donde sea</span>
          </h2>
          <p>
            Las VELOCITY Combo Prima están diseñadas para acompañarte en cada
            disciplina. Desde la ruta más exigente en carretera hasta la
            cumbre más alta, su lente fotocromática, el tratamiento
            anti-viento y el agarre ergonómico se adaptan al ritmo de tu
            deporte para que nada te distraiga del camino.
          </p>
        </div>

        <div className="sports-grid">
          {sports.map((s, i) => (
            <div className="sport-card" key={i}>
              <span className="icon">{s.icon}</span>
              <h4>{s.name}</h4>
            </div>
          ))}
        </div>

        <div className="carousel-wrap">
          <div className="carousel-heading">
            <h3>Escenarios reales, rendimiento real</h3>
            <p>
              Conoce los entornos donde el combo prima marca la diferencia.
              Desliza y descubre por qué atletas de todo el mundo confían en
              VELOCITY.
            </p>
          </div>
          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Sports
