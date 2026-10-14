import { useEffect, useState } from 'react'
import { communityDestination, navItems, type SectionId } from '../config/site.ts'
import { ActionLink } from './ActionLink.tsx'

const logo = '/assets/brand/whale-street-logo.png'

type HeaderProps = {
  activeId: SectionId
}

export function Header({ activeId }: HeaderProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <img src={logo} alt="Whale Street $WALL" width={1254} height={1254} />
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span className="nav-toggle-icon" aria-hidden="true" />
      </button>
      <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ActionLink href={communityDestination()} className="btn btn-gold" track="community">
          JOIN NOW
        </ActionLink>
      </nav>
    </header>
  )
}
