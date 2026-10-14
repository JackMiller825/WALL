import { useEffect, useId, useRef, useState } from 'react'
import { characters, type Character } from '../data/characters.ts'

export function CharacterGallery() {
  const [selected, setSelected] = useState<Character | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selected && !dialog.open) dialog.showModal()
    if (!selected && dialog.open) dialog.close()
  }, [selected])

  return (
    <>
      <ul className="crew-grid">
        {characters.map((character) => (
          <li key={character.id}>
            <button
              type="button"
              className="crew-card"
              onClick={() => setSelected(character)}
              aria-haspopup="dialog"
              aria-label={`Enlarge ${character.name}`}
            >
              <img src={`/assets/characters/${character.file}`} alt={character.alt} width={1254} height={1254} />
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={titleId}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <>
            <button type="button" className="lightbox-close" onClick={() => dialogRef.current?.close()}>
              Close
            </button>
            <img src={`/assets/characters/${selected.file}`} alt={selected.alt} />
            <p id={titleId}>{selected.name}</p>
          </>
        )}
      </dialog>
    </>
  )
}
