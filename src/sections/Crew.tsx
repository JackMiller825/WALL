import { CharacterGallery } from '../components/CharacterGallery.tsx'

const titleWave = '/assets/crew/crew-title-wave-header.png'
const exitWave = '/assets/crew/transparent-wave-divider.png'

export function Crew() {
  return (
    <section className="crew" id="crew" aria-labelledby="crew-title">
      <img className="crew-accent crew-accent-star" src="/assets/crew/starfish.png" alt="" width={48} height={48} />
      <img className="crew-accent crew-accent-shell" src="/assets/crew/conch-shell.png" alt="" width={48} height={48} />
      <div className="section-inner">
        <header className="crew-heading">
          <img className="crew-title-wave" src={titleWave} alt="" width={2172} height={724} />
          <h2 id="crew-title">MEET THE CREW</h2>
          <p className="eyebrow">18 BULLWHALES. ONE BIG FAMILY.</p>
        </header>
        <div className="crew-frame">
          <CharacterGallery />
        </div>
      </div>
      <img className="crew-exit-wave" src={exitWave} alt="" width={2172} height={724} />
    </section>
  )
}
