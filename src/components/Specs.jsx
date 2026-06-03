const specs = [
  {
    title: 'Protección UV400',
    desc: '100% contra rayos UVA y UVB.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Acabados Premium',
    desc: 'Calidad premium en cada detalle.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Marca Grabada al Láser',
    desc: 'Diseño exclusivo y duradero.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Resistencia Máxima',
    desc: 'Diseñadas para tu ritmo.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

function Specs() {
  return (
    <section className="section specs" id="performance">
      <div className="container">
        <div className="specs-header">
          <span className="eyebrow">Ingeniería que se siente</span>
          <h2>
            Calidad <span className="accent">sin compromisos</span>
          </h2>
          <p>
            Cada componente del Combo Prima fue seleccionado para
            soportar el ritmo de tu deporte, desde la protección de las
            lentes hasta los acabados de la montura.
          </p>
        </div>
        <div className="specs-grid">
          {specs.map((s, i) => (
            <div className="spec-item" key={i}>
              <div className="spec-icon">{s.icon}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specs
