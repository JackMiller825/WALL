import { httpsUrl, navItems, site } from '../config/site.ts'
import { ActionLink } from './ActionLink.tsx'

const logo = '/assets/brand/whale-street-logo.png'

const socials = [
  { name: 'Telegram', href: httpsUrl(site.telegramUrl), track: 'telegram' as const },
  { name: 'X', href: httpsUrl(site.xUrl), track: 'x' as const },
  { name: 'Discord', href: httpsUrl(site.discordUrl), track: 'discord' as const },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logo} alt="" width={1254} height={1254} />
        <div>
          <p className="footer-name">Whale Street</p>
          <p className="footer-ticker">{site.ticker}</p>
        </div>
      </div>
      <nav aria-label="Footer">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="social-list" aria-label="Social links">
        {socials.map((social) => (
          <li key={social.name}>
            {social.href ? (
              <ActionLink href={social.href} className="social-link" track={social.track}>
                <SocialIcon name={social.name} />
                <span className="sr-only">{social.name}</span>
              </ActionLink>
            ) : (
              <button type="button" className="social-link is-pending" disabled>
                <SocialIcon name={social.name} />
                <span className="sr-only">{social.name}, coming soon</span>
              </button>
            )}
          </li>
        ))}
      </ul>
      <p className="footer-mark">WHALE STREET · {site.ticker}</p>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'X') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M14.7 10.3 22 2h-2.2l-6.3 7.2L8.2 2H2l7.7 11.1L2 22h2.2l7-8 5.6 8H22l-7.3-11.7Zm-2.5 2.8-.8-1.1L5 3.5h2.8l5.2 7.4.8 1.1 6.7 9.5h-2.8l-5.5-7.9Z" />
      </svg>
    )
  }
  if (name === 'Discord') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.6 5.2A16 16 0 0 0 14.8 4l-.4.8a13.5 13.5 0 0 1 3.4 1.3 15 15 0 0 0-13.6 0A12 12 0 0 1 7.6 4.8L7.2 4a16 16 0 0 0-3.8 1.2C1.2 8.7.5 12.1.7 15.5a16.4 16.4 0 0 0 5 2.5l.8-1.3a10.7 10.7 0 0 1-1.6-.8l.4-.3c3.2 1.5 6.7 1.5 9.8 0l.4.3c-.5.3-1 .6-1.6.8l.8 1.3a16.4 16.4 0 0 0 5-2.5c.4-4-.6-7.4-2.1-10.3ZM8.7 14.2c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.5 4.6 2.8 11.3c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.1.9.7.9.4 0 .6-.2.8-.4l2.6-2.5 5.4 4c1 .6 1.7.3 2-.9l3.4-16c.4-1.4-.5-2-1.6-1.4ZM8.8 14.2l8.9-5.6c.4-.3.8-.1.5.2l-7.6 6.9-.3 3.2-1.5-4.7Z"
      />
    </svg>
  )
}
