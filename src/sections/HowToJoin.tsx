const steps = [
  { title: 'GET A WALLET', icon: '/assets/join/icons/wallet.svg' },
  { title: 'GET SOME CRYPTO', icon: '/assets/join/icons/coins.svg' },
  { title: 'SWAP FOR $WALL', icon: '/assets/join/icons/swap.svg' },
  { title: 'JOIN THE CREW', icon: '/assets/join/icons/crew.svg' },
] as const

export function HowToJoin() {
  return (
    <section className="join" id="join" aria-labelledby="join-title">
      <div className="section-inner">
        <div className="section-heading">
          <h2 id="join-title">HOW TO JOIN</h2>
          <img
            className="title-flourish"
            src="/assets/join/how-to-join-title-flourish.svg"
            alt=""
            width={800}
            height={100}
          />
        </div>
        <ol className="join-steps">
          {steps.map((step, index) => (
            <li key={step.title} className="join-step">
              {index > 0 && (
                <img
                  className="step-arrow"
                  src="/assets/join/icons/arrow-right.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              )}
              <div className="join-card">
                <span className="step-number">{index + 1}</span>
                <img src={step.icon} alt="" width={72} height={72} />
                <h3>{step.title}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
