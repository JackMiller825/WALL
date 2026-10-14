import { communityDestination, httpsUrl, site } from '../config/site.ts'
import { ActionLink } from '../components/ActionLink.tsx'

const banner = '/assets/brand/whale-street-telegram-banner.png'
const officialCommunity = httpsUrl(site.telegramUrl) ?? httpsUrl(site.discordUrl) ?? httpsUrl(site.xUrl)

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
            <ActionLink href={null} className="btn btn-gold">
              JOIN COMMUNITY
            </ActionLink>
          )}
        </div>
        <figure className="community-art">
          <img
            src={banner}
            alt="Whale Street crew on a moonlit dock: the BullWhale captain points ahead, joined by an astronaut, a scientist, and a street dancer."
            width={1823}
            height={863}
          />
        </figure>
      </div>
    </section>
  )
}
