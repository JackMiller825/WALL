/**
 * Single source for token facts and external destinations.
 * Leave unknown values null. Do not invent a contract, supply, chain, or social URL.
 */
export const site = {
  name: 'Whale Street',
  ticker: '$WALL',
  siteUrl: 'https://whalestreet.site',
  contractAddress: null as string | null,
  totalSupply: null as string | null,
  chain: null as string | null,
  walletGuideUrl: null as string | null,
  swapUrl: null as string | null,
  telegramUrl: null as string | null,
  xUrl: null as string | null,
}

export const tokenomics = [
  { id: 'supply', label: 'Total Supply', value: '1B', icon: '/assets/tokenomics/icons/supply.svg' },
  { id: 'tax', label: 'Tax', value: '0%', icon: '/assets/tokenomics/icons/tax.svg' },
  { id: 'lp', label: 'LP', value: 'Burn', icon: '/assets/tokenomics/icons/lp-burn.svg' },
  { id: 'ownership', label: 'Ownership', value: 'Renounce', icon: '/assets/tokenomics/icons/ownership-renounced.svg' },
] as const

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'crew', label: 'Meet the Crew' },
  { id: 'story', label: 'Our Story' },
  { id: 'token', label: 'Tokenomics' },
  { id: 'join', label: 'How to Join' },
  { id: 'community', label: 'Community' },
] as const

export type SectionId = (typeof navItems)[number]['id']

export function httpsUrl(value: string | null): string | null {
  if (!value) return null
  try {
    const url = new URL(value.trim())
    if (url.protocol !== 'https:') return null
    return url.toString()
  } catch {
    return null
  }
}

export function displayOrPending(value: string | null): string {
  const trimmed = value?.trim()
  return trimmed ? trimmed : 'Coming soon'
}

/** Official community destination, or the on-page community section until one is set. */
export function communityDestination(): string {
  return httpsUrl(site.telegramUrl) ?? httpsUrl(site.xUrl) ?? '#community'
}
