import { communityDestination } from '../config/site.ts'
import { ActionLink } from '../components/ActionLink.tsx'

const mascot = '/assets/brand/whale-street-mascot.png'

export function Story() {
  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="section-inner story-layout">
        <div className="story-copy">
          <h2 id="story-title">OUR STORY</h2>
          <p>
            Whale Street is a community of dreamers, degens, and doers, riding the waves together. From the ocean
            to the streets, $WALL is more than a meme coin — it’s a movement for bigger dreams and a brighter
            tomorrow.
          </p>
          <ActionLink href={communityDestination()} className="btn btn-gold" track="community">
            JOIN THE JOURNEY
          </ActionLink>
        </div>
        <figure className="story-art">
          <img
            src={mascot}
            alt="The Whale Street BullWhale mascot, blue with a cream belly, gold horns, and a wide grin"
            width={1254}
            height={1254}
          />
        </figure>
      </div>
    </section>
  )
}
