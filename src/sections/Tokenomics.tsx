import { tokenomics } from '../config/site.ts'

export function Tokenomics() {
  return (
    <section className="token" id="token" aria-labelledby="token-title">
      <div className="section-inner">
        <h2 id="token-title">TOKENOMICS</h2>
        <ul className="token-grid">
          {tokenomics.map((fact) => (
            <li key={fact.id} className="token-card">
              <img src={fact.icon} alt="" width={88} height={88} />
              <p className="token-value">{fact.value}</p>
              <p className="token-label">{fact.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
