import { CharacterGallery } from '../components/CharacterGallery.tsx'

export function Crew() {
  return (
    <section className="crew" id="crew" aria-labelledby="crew-title">
      <div className="section-inner">
        <div className="crew-frame">
          <header className="crew-heading">
            <h2 id="crew-title">MEET THE CREW</h2>
            <p className="eyebrow">18 BullWhales · One big family</p>
          </header>
          <CharacterGallery />
        </div>
      </div>
    </section>
  )
}
