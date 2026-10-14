import { ActionLink } from '../components/ActionLink.tsx'

const ocean = '/assets/hero/home-hero-ocean-background.png'
const surf = '/assets/hero/home-hero-wave-foreground.png'
const mascot = '/assets/brand/whale-street-mascot.png'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="home-title">
      <div className="hero-stage">
        <img className="hero-bg" src={ocean} alt="" width={2172} height={724} />
        <img className="hero-accent hero-bubbles" src="/assets/hero/accents/bubble-cluster.png" alt="" width={48} height={48} />
        <img className="hero-accent hero-starfish" src="/assets/hero/accents/starfish.png" alt="" width={42} height={42} />
        <div className="hero-copy">
          <h1 id="home-title">
            <span className="hero-name">WHALE STREET</span>
            <span className="hero-ticker">$WALL</span>
          </h1>
          <p className="hero-slogan">
            <span>BIG DREAMS</span>
            <span>BIGGER WAVES</span>
          </p>
          <div className="hero-buttons">
            <ActionLink href="#community" className="btn btn-gold" track="community">
              <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 11.5 21 3l-7.2 18-2.3-7.2L3 11.5Z" fill="currentColor" />
              </svg>
              JOIN COMMUNITY
            </ActionLink>
            <ActionLink href="#crew" className="btn btn-outline" track="crew">
              MEET THE CREW
              <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9.5 12 15.5 18 9.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ActionLink>
          </div>
        </div>
        <img
          className="hero-mascot"
          src={mascot}
          alt="Smiling blue BullWhale with gold horns and a cream belly."
          width={1254}
          height={1254}
        />
        <img className="hero-surf" src={surf} alt="" width={2172} height={724} />
      </div>
    </section>
  )
}
