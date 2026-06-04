const reviews = [
  {
    name: 'Carlos M.',
    role: 'Ciclismo de ruta',
    rating: 5,
    text: 'Las uso para rodar 80 km los fines de semana. La fotocromática se adapta perfecto cuando entro a zonas de sombra en la montaña. Cero quejas.',
    date: 'Hace 2 semanas',
  },
  {
    name: 'Andrés P.',
    role: 'Motociclismo',
    rating: 5,
    text: 'El acabado es premium, parecen el doble de precio. El estuche rígido protege muy bien en la maleta. Ya se las recomendé a tres amigos del club.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Diana R.',
    role: 'Running urbano',
    rating: 5,
    text: 'Por fin unas gafas que sirven para correr entre edificios sin quedar ciega al salir a la calle. Se ajustan bien y no se deslizan con el sudor.',
    date: 'Hace 3 semanas',
  },
  {
    name: 'Felipe G.',
    role: 'Entrenamiento funcional',
    rating: 5,
    text: 'Tengo las tres y las voy rotando según el clima. El combo vale muchísimo la pena, cada una tiene su personalidad y todas se sienten de gama alta.',
    date: 'Hace 2 meses',
  },
  {
    name: 'Laura S.',
    role: 'Senderismo',
    rating: 5,
    text: 'Las llevé a alta montaña y la protección UV400 se nota muchísimo. Cero fatiga visual aunque esté todo el día bajo el sol.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Tomás V.',
    role: 'Triatlón',
    rating: 5,
    text: 'Excelente relación calidad-precio. He pagado el doble por marcas conocidas y no заметила la diferencia. Repetiría sin pensarlo.',
    date: 'Hace 3 semanas',
  },
]

function Stars({ count }) {
  return (
    <div className="review-stars" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <span className="eyebrow">Reseñas verificadas</span>
          <h2>
            Lo que dicen <span className="accent">quienes ya las usan</span>
          </h2>
          <p>
            Más de 1.200 deportistas en Colombia ya hacen parte del combo.
            Estas son algunas de sus experiencias reales.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <article className="review-card" key={i}>
              <Stars count={r.rating} />
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                {/* <div className="review-avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </div> */}
                <div className="review-meta">
                  <span className="review-name">{r.name}</span>
                  <span className="review-role">{r.role} · {r.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
