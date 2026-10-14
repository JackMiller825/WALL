import { CharacterGallery } from '../components/CharacterGallery.tsx'

export function Crew() {
  return (
    <section className="crew" id="crew" aria-labelledby="crew-title">
      <div className="section-inner">
        <p className="eyebrow">18 BullWhales · One big family</p>
        <h2 id="crew-title">MEET THE CREW</h2>
        <CharacterGallery />
      </div>
    </section>
  )
}
