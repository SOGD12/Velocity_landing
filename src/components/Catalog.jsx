import { useEffect, useState } from 'react'

const models = [
  {
    image: '/img/items/1.jpeg',
    name: 'Solar',
    tag: 'Sol Intenso',
    desc: 'Lente espejo azul con protección UV400 total.',
    color: '#3b82f6',
  },
  {
    image: '/img/items/2.jpeg',
    name: 'Fotón',
    tag: 'Ciclismo',
    desc: 'Se adapta a la luz en menos de 30 segundos.',
    color: '#8b5cf6',
  },
  {
    image: '/img/items/3.jpeg',
    name: 'Sprint',
    tag: 'Espejo Multicolor',
    desc: 'Acabado iridiscente para tus entrenamientos.',
    color: '#ec4899',
  },
  {
    image: '/img/items/4.jpeg',
    name: 'Cumbre',
    tag: 'Alta Montaña',
    desc: 'Edición especial con agarre ergonómico reforzado.',
    color: '#f59e0b',
  },
]

const COMBO_PRICE = '$156.900'

function Lightbox({ model, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={model.image} alt={model.name} />
        <div className="lightbox-info">
          <span className="lightbox-tag" style={{ color: model.color, borderColor: model.color }}>
            {model.tag}
          </span>
          <h3>{model.name}</h3>
          <p>{model.desc}</p>
          <span className="lightbox-price">{COMBO_PRICE}</span>
        </div>
      </div>
    </div>
  )
}

function Catalog() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section catalog" id="catalog">
      <div className="container">
        <div className="catalog-header">
          <span className="eyebrow">Colección Combo Prima</span>
          <h2>
            Combo <span className="accent">Sports</span>
          </h2>
          <p>
            Cada par del combo ha sido diseñado para un escenario
            específico. Elige tu favorito o llévalos todos con el
            descuento especial del Combo Prima. Todas vienen con Fotocromático, protección UV400 y un diseño que combina estilo 
          </p>
        </div>

        <div className="catalog-grid">
          {models.map((m, i) => (
            <article className="catalog-card" key={i}>
              <button
                className="catalog-image"
                style={{ '--tag-color': m.color }}
                onClick={() => setSelected(m)}
                aria-label={`Ver ${m.name} en grande`}
              >
                <img src={m.image} alt={`Modelo ${m.name}`} loading="lazy" />
                <span className="catalog-tag">{m.tag}</span>
                <span className="catalog-zoom" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </button>
              <div className="catalog-info">
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
                <span className="catalog-price">{COMBO_PRICE}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <Lightbox model={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

export default Catalog
