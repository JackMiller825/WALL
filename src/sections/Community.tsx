import { communityDestination, httpsUrl, site } from '../config/site.ts'
import { ActionLink } from '../components/ActionLink.tsx'

const scene = '/assets/supplemental/sections/community-dock-scene.png'
const officialCommunity = httpsUrl(site.telegramUrl) ?? httpsUrl(site.xUrl)

export function Community() {
  return (
    <section className="community" id="community" aria-labelledby="community-title">
      <div className="section-inner community-layout">
        <div className="community-copy">
          <h2 id="community-title">COMMUNITY</h2>
          <p>
            Same waves. Stronger together.
            <br />
            Join the Whale Street crew and be part of the journey.
          </p>
          {officialCommunity ? (
            <ActionLink href={communityDestination()} className="btn btn-gold" track="community">
              JOIN COMMUNITY
            </ActionLink>
          ) : (
            <div className="pending-action">
              <ActionLink href={null} className="btn btn-gold" pendingLabel="">
                JOIN COMMUNITY
              </ActionLink>
              <p className="pending-caption">Coming soon</p>
            </div>
          )}
        </div>
        <figure className="community-art">
          <img
            src={scene}
            alt="BullWhale crew on a moonlit dock around an open chest of gold coins, with a crowned captain, an astronaut, a street dancer, and a scientist."
            width={1672}
            height={941}
          />
        </figure>
      </div>
    </section>
  )
}
