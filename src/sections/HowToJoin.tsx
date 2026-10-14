import { httpsUrl, site } from '../config/site.ts'

const steps = [
  {
    title: 'GET A WALLET',
    body: 'Set up a self-custody wallet and keep the recovery phrase offline.',
    pending: httpsUrl(site.walletGuideUrl) === null,
    note: 'Wallet link pending',
    icon: '/assets/supplemental/icons/how-to-join/wallet.svg',
  },
  {
    title: 'GET SOME CRYPTO',
    body: 'Add the network token you will need for a swap. The chain is not confirmed yet.',
    pending: site.chain === null,
    note: 'Chain pending',
    icon: '/assets/supplemental/icons/how-to-join/coins.svg',
  },
  {
    title: 'SWAP FOR $WALL',
    body: 'Use the official swap only after the contract is published. Trading is not live.',
    pending: httpsUrl(site.swapUrl) === null || site.contractAddress === null,
    note: 'Swap pending',
    icon: '/assets/supplemental/icons/how-to-join/swap.svg',
  },
  {
    title: 'JOIN THE CREW',
    body: 'Come aboard through the confirmed community links when they are published.',
    pending: httpsUrl(site.telegramUrl) === null && httpsUrl(site.xUrl) === null,
    note: 'Community links pending',
    icon: '/assets/supplemental/icons/how-to-join/crew.svg',
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
              {index > 0 && (
                <img
                  className="step-arrow"
                  src="/assets/supplemental/icons/ui/arrow-right.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              )}
              <div className="join-card">
                <span className="step-number">{index + 1}</span>
                <img src={step.icon} alt="" width={72} height={72} />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.pending && <p className="step-pending">{step.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
