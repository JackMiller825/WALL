import { ActionLink } from '../components/ActionLink.tsx'

const scene = '/assets/story/story-ship-scene.png'
const ornament = '/assets/story/story-title-ornament.svg'

export function Story() {
  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="section-inner story-layout">
        <div className="story-copy">
          <h2 id="story-title">OUR STORY</h2>
          <img className="story-ornament" src={ornament} alt="" width={600} height={44} />
          <p>
            Whale Street is a community of dreamers, degens and doers, riding the waves together. From the ocean
            to the streets, $WALL is more than a meme coin — it’s a movement for bigger dreams and a brighter
            tomorrow.
          </p>
          <ActionLink href="#community" className="btn btn-gold" track="community">
            JOIN THE JOURNEY
          </ActionLink>
        </div>
      </div>
      <img
        className="story-scene"
        src={scene}
        alt="BullWhale captain in a navy coat looks through a telescope from the bow of a wooden ship at sunset."
        width={1536}
        height={1024}
      />
    </section>
  )
}
