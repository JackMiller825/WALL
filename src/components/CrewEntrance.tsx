import { useEffect, useRef, useState } from 'react'
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
  return 500
}

type CrewEntranceProps = {
  onDone: () => void
}

function portraitSrc(file: string): string {
  return `/assets/characters/${file}`
}

export function CrewEntrance({ onDone }: CrewEntranceProps) {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [loadedIds, setLoadedIds] = useState<string[]>([])
  const cacheRef = useRef<HTMLImageElement[]>([])
  const character = characters[Math.min(index, characters.length - 1)]
  const effect = effects[Math.min(index, effects.length - 1)]
  const ready = loadedIds.includes(character.id)
  const count = ready || index > 0 ? index + 1 : loadedIds.length

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    const markLoaded = (id: string) => {
      if (cancelled) return
      setLoadedIds((current) => (current.includes(id) ? current : [...current, id]))
    }
    const images = characters.map((member) => {
      const image = new Image()
      image.decoding = 'async'
      const finish = () => {
        if (image.naturalWidth <= 0) return
        const decoded = image.decode ? image.decode() : Promise.resolve()
        void decoded.then(() => markLoaded(member.id), () => markLoaded(member.id))
      }
      image.onload = finish
      image.onerror = () => {
        if (image.dataset.retry === '1') {
          markLoaded(member.id)
          return
        }
        image.dataset.retry = '1'
        image.src = portraitSrc(member.file)
      }
      image.src = portraitSrc(member.file)
      if (image.complete) finish()
      return image
    })
    cacheRef.current = images
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (leaving) {
      const timer = window.setTimeout(onDone, 480)
      return () => window.clearTimeout(timer)
    }
    if (!ready) return
    const timer = window.setTimeout(() => {
      if (index >= characters.length - 1) setLeaving(true)
      else setIndex((current) => current + 1)
    }, holdFor(index))
    return () => window.clearTimeout(timer)
  }, [index, leaving, onDone, ready])

  return (
    <div className={leaving ? 'crew-entrance is-leaving' : 'crew-entrance'} role="dialog" aria-modal="true" aria-label="Meet the crew">
      <p className="crew-entrance-kicker">18 BULLWHALES</p>
      {ready ? (
        <figure key={`${character.id}-${effect}`} className={`crew-entrance-stage is-${effect}`} style={{ animationDuration: `${holdFor(index)}ms` }}>
          <img src={portraitSrc(character.file)} alt={character.alt} width={1254} height={1254} decoding="sync" fetchPriority="high" />
          <figcaption>{character.name}</figcaption>
        </figure>
      ) : (
        <p className="crew-entrance-loading">Loading the crew</p>
      )}
      <p className="crew-entrance-count" aria-live="polite">
        <span>{String(count).padStart(2, '0')}</span>
        <span className="crew-entrance-bar" aria-hidden="true">
          <span style={{ width: `${(count / characters.length) * 100}%` }} />
        </span>
        <span>18</span>
      </p>
      <button className="crew-entrance-skip" type="button" onClick={() => setLeaving(true)}>
        Skip
      </button>
    </div>
  )
}
