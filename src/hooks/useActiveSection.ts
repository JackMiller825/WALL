import { useEffect, useState } from 'react'
import { navItems, type SectionId } from '../config/site.ts'

function sectionFromHash(): SectionId {
  const hash = window.location.hash.replace('#', '')
  const match = navItems.find((item) => item.id === hash)
  return match?.id ?? 'home'
}

export function useActiveSection(): SectionId {
  const [activeId, setActiveId] = useState<SectionId>(sectionFromHash)

  useEffect(() => {
    const onHashChange = () => setActiveId(sectionFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const id = visible?.target.id
        if (id && navItems.some((item) => item.id === id)) setActiveId(id as SectionId)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('wall-section', { detail: activeId }))
  }, [activeId])

  return activeId
}
