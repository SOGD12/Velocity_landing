const features = [
  {
    title: 'Sol Intenso',
    desc: 'Lente espejo azul',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    title: 'Cambios de Luz',
    desc: 'Fotocromática',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Entrenamientos',
    desc: 'Espejo multicolor',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M7 22l3-7 2 2 2-4 3 9" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <section className="section features" id="lenses">
      <div className="container">
        <div className="features-header">
          <span className="eyebrow">Tres lentes, un solo combo</span>
          <h2>
            Estilos para <span className="accent">cada momento</span>
          </h2>
          <p>
            Cada Combo Sport está diseñado para un escenario
            específico: sol de mediodía, cambios de luz y entrenamientos
            de alta intensidad. Cambia de modelo según lo que exija tu
            deporte.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
