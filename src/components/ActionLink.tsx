import type { MouseEvent, ReactNode } from 'react'
import { trackCta, type Cta } from '../analytics/tracker.ts'

type ActionLinkProps = {
  href: string | null
  className?: string
  children: ReactNode
  track?: Cta
  pendingLabel?: string
}

export function ActionLink({
  href,
  className = 'btn',
  children,
  track,
  pendingLabel = 'Coming soon',
}: ActionLinkProps) {
  if (!href) {
    return (
      <button type="button" className={`${className} is-pending`} disabled>
        {children}
        {pendingLabel ? <span className="pending-note">{pendingLabel}</span> : null}
      </button>
    )
  }

  const external = /^https:\/\//i.test(href)
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (track) trackCta(track)
    if (!external && href.startsWith('#')) {
      const target = document.getElementById(href.slice(1))
      if (!target) return
      event.preventDefault()
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      history.pushState(null, '', href)
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    }
  }

  return (
    <a
      className={className}
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
