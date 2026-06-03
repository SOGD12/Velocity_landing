import { whatsappLink } from '../utils/whatsapp'

function Pricing() {
  return (
    <section className="pricing" id="shop">
      <div className="price">$156.900</div>
      <div className="offer">Oferta por tiempo limitado</div>
      <div className="divider"></div>
      <div className="quote">"La prima dura un día, tu visión todos los días."</div>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Comprar combo
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </section>
  )
}

export default Pricing
