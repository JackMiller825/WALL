import { lazy, Suspense, useEffect, useState } from 'react'
import { startPublicAnalytics } from './analytics/tracker.ts'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { isDashboardLocation } from './dashboard/path.ts'
import { useActiveSection } from './hooks/useActiveSection.ts'
import { Community } from './sections/Community.tsx'
import { Crew } from './sections/Crew.tsx'
import { Hero } from './sections/Hero.tsx'
import { HowToJoin } from './sections/HowToJoin.tsx'
import { Story } from './sections/Story.tsx'
import { Tokenomics } from './sections/Tokenomics.tsx'
import { WaveDivider } from './components/WaveDivider.tsx'

const Dashboard = lazy(() => import('./dashboard/Dashboard.tsx'))

export function App() {
  const [dashboard, setDashboard] = useState(() => isDashboardLocation())
  const activeId = useActiveSection()

  useEffect(() => {
    const sync = () => setDashboard(isDashboardLocation())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  useEffect(() => {
    if (!dashboard) return
    const previousTitle = document.title
    document.title = 'Private Visitor Dashboard'
    const meta = document.querySelector('meta[name="robots"]')
    if (meta) {
      const previous = meta.getAttribute('content')
      meta.setAttribute('content', 'noindex, nofollow')
      return () => {
        if (previous) meta.setAttribute('content', previous)
        document.title = previousTitle
      }
    }
    const created = document.createElement('meta')
    created.name = 'robots'
    created.content = 'noindex, nofollow'
    document.head.appendChild(created)
    return () => {
      created.remove()
      document.title = previousTitle
    }
  }, [dashboard])

  useEffect(() => {
    if (dashboard) return
    return startPublicAnalytics()
  }, [dashboard])

  if (dashboard) {
    return (
      <Suspense fallback={<main className="dash"><p>Loading dashboard…</p></main>}>
        <Dashboard />
      </Suspense>
    )
  }

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Header activeId={activeId} />
      <main>
        <Hero />
        <Crew />
        <Story />
        <div className="ocean-run">
          <WaveDivider />
          <Tokenomics />
          <HowToJoin />
          <WaveDivider className="wave-divider-before-community" />
          <Community />
        </div>
      </main>
      <Footer />
    </>
  )
}
