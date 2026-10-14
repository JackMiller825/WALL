import { httpsUrl, navItems, site } from '../config/site.ts'
import { ActionLink } from './ActionLink.tsx'

const logo = '/assets/footer/whale-street-logo.png'

const socials = [
  { name: 'Telegram', href: httpsUrl(site.telegramUrl), icon: '/assets/footer/telegram.svg', track: 'telegram' as const },
  { name: 'X', href: httpsUrl(site.xUrl), icon: '/assets/footer/x.svg', track: 'x' as const },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
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
                  <img src={social.icon} alt="" width={18} height={18} />
                  <span className="sr-only">{social.name}</span>
                </ActionLink>
              ) : (
                <button type="button" className="social-link is-pending" disabled>
                  <img src={social.icon} alt="" width={18} height={18} />
                  <span className="sr-only">{social.name}, Link coming soon</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-signature">
        <img src="/assets/footer/footer-wave-rule.svg" alt="" width={1200} height={44} />
        <p>WHALE STREET · $WALL</p>
      </div>
    </footer>
  )
}
