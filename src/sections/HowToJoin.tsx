import { httpsUrl, site } from '../config/site.ts'

const steps = [
  {
    title: 'GET A WALLET',
    body: 'Set up a self-custody wallet and keep the recovery phrase offline.',
    pending: httpsUrl(site.walletGuideUrl) === null,
    note: 'Official wallet link pending',
    icon: 'wallet',
  },
  {
    title: 'GET SOME CRYPTO',
    body: 'Add the network token you will need for a swap. The chain is not confirmed yet.',
    pending: site.chain === null,
    note: 'Chain pending',
    icon: 'coins',
  },
  {
    title: 'SWAP FOR $WALL',
    body: 'Use the official swap only after the contract is published. Trading is not live.',
    pending: httpsUrl(site.swapUrl) === null || site.contractAddress === null,
    note: 'Contract and swap pending',
    icon: 'swap',
  },
  {
    title: 'JOIN THE CREW',
    body: 'Come aboard through the confirmed community links when they are published.',
    pending: httpsUrl(site.telegramUrl) === null && httpsUrl(site.xUrl) === null && httpsUrl(site.discordUrl) === null,
    note: 'Community links pending',
    icon: 'crew',
  },
] as const

export function HowToJoin() {
  return (
    <section className="join" id="join" aria-labelledby="join-title">
      <div className="section-inner">
        <h2 id="join-title">HOW TO JOIN</h2>
        <ol className="join-steps">
          {steps.map((step, index) => (
            <li key={step.title} className="join-step">
              <span className="step-number" aria-hidden="true">
                {index + 1}
              </span>
              <StepIcon name={step.icon} />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.pending && <p className="step-pending">{step.note}</p>}
            </li>
          ))}
        </ol>
        <p className="join-note">Chain, wallet, exchange, and contract details stay pending until they are confirmed.</p>
      </div>
    </section>
  )
}

function StepIcon({ name }: { name: (typeof steps)[number]['icon'] }) {
  if (name === 'coins') {
    return (
      <svg className="step-icon" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="26" cy="34" r="12" fill="#7fd4ea" />
        <circle cx="38" cy="28" r="12" fill="#d7f4ff" />
      </svg>
    )
  }
  if (name === 'swap') {
    return (
      <svg className="step-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 26h28l-8-8M46 38H18l8 8" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'crew') {
    return (
      <svg className="step-icon" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="24" r="8" fill="#f0c14a" />
        <path d="M16 48c2-10 8-14 16-14s14 4 16 14" fill="#7fd4ea" />
      </svg>
    )
  }
  return (
    <svg className="step-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="22" width="36" height="26" rx="4" fill="#7fd4ea" />
      <path d="M14 30h36M24 22v-4a8 8 0 0 1 16 0v4" fill="none" stroke="#fff" strokeWidth="3" />
    </svg>
  )
}
