import { whatsappLink } from '../utils/whatsapp'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <span className="hero-eyebrow">Novedad · Combo Prima</span>
        <h1>
          <span className="accent">Combo Prima</span>
          <span className="white">Tu visión para el deporte</span>
        </h1>
        <p>
          3 gafas deportivas premium. <strong>Un solo combo.</strong>
        </p>
        <div className="hero-cta">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Comprar ahora
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#technology" className="btn-secondary">Ver tecnología</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
