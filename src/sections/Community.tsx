import { httpsUrl, site } from '../config/site.ts'
import { ActionLink } from '../components/ActionLink.tsx'

const officialTelegram = httpsUrl(site.telegramUrl)

export function Community() {
  return (
    <section className="community" id="community" aria-labelledby="community-title">
      <div className="section-inner community-layout">
        <div className="community-copy">
          <div className="section-heading">
            <h2 id="community-title">COMMUNITY</h2>
            <img
              className="title-flourish"
              src="/assets/community/community-title-flourish.svg"
              alt=""
              width={800}
              height={100}
            />
          </div>
          <p className="community-tagline">Same waves. Stronger together.</p>
          <p className="community-support">Join the Whale Street crew and be part of the journey.</p>
          {officialTelegram ? (
            <ActionLink href={officialTelegram} className="btn btn-gold community-cta" track="community">
              <img src="/assets/community/telegram.svg" alt="" width={18} height={18} />
              JOIN COMMUNITY
            </ActionLink>
          ) : (
            <div className="pending-action">
              <ActionLink href={null} className="btn btn-gold community-cta" pendingLabel="">
                JOIN COMMUNITY
              </ActionLink>
              <p className="pending-caption">COMING SOON</p>
            </div>
          )}
        </div>
      </div>
      <img
        className="community-treasure"
        src="/assets/community/community-reef-treasure-overlay.png"
        alt="Open treasure chest of gold coins beside a flag bearing a smiling BullWhale, set among coral."
        width={2172}
        height={724}
      />
    </section>
  )
}
