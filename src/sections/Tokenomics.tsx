import { tokenomics } from '../config/site.ts'

const flourish = '/assets/tokenomics/tokenomics-title-flourish.svg'

export function Tokenomics() {
  return (
    <section className="token" id="token" aria-labelledby="token-title">
      <div className="section-inner">
        <div className="section-heading">
          <h2 id="token-title">TOKENOMICS</h2>
          <img className="title-flourish" src={flourish} alt="" width={800} height={100} />
        </div>
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
