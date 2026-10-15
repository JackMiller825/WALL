import { useEffect, useState } from 'react'
import { characters } from '../data/characters.ts'
import '../styles/entrance.css'

const effects = [
  'zoom',
  'left',
  'right',
  'drop',
  'rise',
  'spin',
  'flip-y',
  'flip-x',
  'blur',
  'bounce',
  'diagonal',
  'slash',
  'pop',
  'wipe',
  'swing',
  'shrink',
  'glide',
  'finale',
] as const

function holdFor(index: number): number {
  if (index <= 0) return 1000
  if (index === 1) return 900
  if (index === 2) return 800
  return 300
}

type CrewEntranceProps = {
  onDone: () => void
}

export function CrewEntrance({ onDone }: CrewEntranceProps) {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const character = characters[Math.min(index, characters.length - 1)]
  const effect = effects[Math.min(index, effects.length - 1)]

  useEffect(() => {
    for (const member of characters) {
      const image = new Image()
      image.src = `/assets/characters/${member.file}`
    }
  }, [])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    if (leaving) {
      const timer = window.setTimeout(onDone, 480)
      return () => window.clearTimeout(timer)
    }
    const timer = window.setTimeout(() => {
      if (index >= characters.length - 1) setLeaving(true)
      else setIndex((current) => current + 1)
    }, holdFor(index))
    return () => window.clearTimeout(timer)
  }, [index, leaving, onDone])

  return (
    <div className={leaving ? 'crew-entrance is-leaving' : 'crew-entrance'} role="dialog" aria-modal="true" aria-label="Meet the crew">
      <p className="crew-entrance-kicker">18 BULLWHALES</p>
      <figure key={`${character.id}-${effect}`} className={`crew-entrance-stage is-${effect}`} style={{ animationDuration: `${holdFor(index)}ms` }}>
        <img src={`/assets/characters/${character.file}`} alt={character.alt} width={1254} height={1254} />
        <figcaption>{character.name}</figcaption>
      </figure>
      <p className="crew-entrance-count" aria-live="polite">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span className="crew-entrance-bar" aria-hidden="true">
          <span style={{ width: `${((index + 1) / characters.length) * 100}%` }} />
        </span>
        <span>18</span>
      </p>
      <button className="crew-entrance-skip" type="button" onClick={() => setLeaving(true)}>
        Skip
      </button>
    </div>
  )
}
