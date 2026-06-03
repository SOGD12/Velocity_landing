const items = [
  '3 gafas deportivas',
  '1 estuche rígido de marca',
  '1 paño de limpieza premium',
]

function InTheBox() {
  return (
    <section className="section inthebox" id="Box">
      <div className="container">
        <div className="inthebox-card">
          <div className="inthebox-content">
            <h2>
              En el <span className="accent">Estuche</span>
            </h2>
            <ul className="box-list">
              {items.map((it, i) => (
                <li key={i}>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="box-image">
            <img
              src="/img/img1.jpeg"
              alt="Set de gafas deportivas con estuche"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InTheBox
