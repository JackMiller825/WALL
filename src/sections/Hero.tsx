import { communityDestination } from '../config/site.ts'
import { ActionLink } from '../components/ActionLink.tsx'

const banner = '/assets/brand/whale-street-banner-3x1.png'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="home-title">
      <div className="hero-art">
        <img
          src={banner}
          alt="Whale Street $WALL. A blue BullWhale with gold horns and a cream belly rides a glittering ocean wave at sunset."
          width={2172}
          height={724}
        />
        <div className="hero-actions">
          <h1 id="home-title">
            <span className="sr-only">Whale Street $WALL. </span>
            <span>BIG DREAMS</span>
            <span className="hero-kicker-rule" aria-hidden="true" />
            <span>BIGGER WAVES</span>
          </h1>
          <div className="hero-buttons">
            <ActionLink href={communityDestination()} className="btn btn-gold" track="community">
              JOIN COMMUNITY
            </ActionLink>
            <ActionLink href="#crew" className="btn btn-outline" track="crew">
              MEET THE CREW
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
