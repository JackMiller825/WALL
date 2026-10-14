import { displayOrPending, site } from '../config/site.ts'

const facts = [
  { label: 'Token Name', value: site.name, icon: 'coins' },
  { label: 'Ticker', value: site.ticker, icon: 'ticker' },
  { label: 'Contract', value: displayOrPending(site.contractAddress), icon: 'contract' },
  { label: 'Supply', value: displayOrPending(site.totalSupply), icon: 'supply' },
] as const

export function TokenInfo() {
  return (
    <section className="token" id="token" aria-labelledby="token-title">
      <div className="section-inner">
        <h2 id="token-title">TOKEN INFO</h2>
        <ul className="token-grid">
          {facts.map((fact) => (
            <li key={fact.label} className="token-card">
              <FactIcon name={fact.icon} />
              <p className="token-label">{fact.label}</p>
              <p className="token-value">{fact.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FactIcon({ name }: { name: (typeof facts)[number]['icon'] }) {
  if (name === 'ticker') {
    return (
      <svg className="fact-icon" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="22" fill="#f0c14a" />
        <text x="32" y="38" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1a1408">
          $
        </text>
      </svg>
    )
  }
  if (name === 'contract') {
    return (
      <svg className="fact-icon" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="16" y="10" width="32" height="44" rx="4" fill="#fff" stroke="#1a6ea8" strokeWidth="3" />
        <path d="M24 24h16M24 32h16M24 40h10" stroke="#1a6ea8" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'supply') {
    return (
      <svg className="fact-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 8 50 18v16c0 12-8 20-18 24C22 54 14 46 14 34V18Z" fill="#2bb8c4" />
        <path d="M32 20v24M24 32h16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg className="fact-icon" viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="24" cy="40" rx="12" ry="8" fill="#e39b16" />
      <ellipse cx="36" cy="32" rx="12" ry="8" fill="#f0c14a" />
      <ellipse cx="28" cy="24" rx="12" ry="8" fill="#ffe08a" />
    </svg>
  )
}
