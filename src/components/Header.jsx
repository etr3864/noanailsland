import { useState, useEffect, useCallback } from 'react'
import { LOGO_URL } from '../config/constants'
import useScrollPosition from '../hooks/useScrollPosition'

const NAV_ITEMS = [
  { label: 'בית', href: '#hero' },
  { label: 'עבודות', href: '#works' },
  { label: 'מחירון', href: '#services' },
  { label: 'ביקורות', href: '#testimonials' },
  { label: 'מיקום', href: '#location' },
]

function useActiveSection() {
  const [active, setActive] = useState('hero')

  const calcActive = useCallback(() => {
    const midpoint = window.innerHeight * 0.4
    let current = 'hero'

    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item.href.slice(1))
      if (!el) continue
      const rect = el.getBoundingClientRect()
      if (rect.top <= midpoint) current = item.href.slice(1)
    }

    setActive(current)
  }, [])

  useEffect(() => {
    calcActive()
    window.addEventListener('scroll', calcActive, { passive: true })
    return () => window.removeEventListener('scroll', calcActive)
  }, [calcActive])

  return active
}

export default function Header() {
  const scrolled = useScrollPosition(300)
  const activeSection = useActiveSection()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.slice(1))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`anim-header fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 border-b border-gold/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className={`max-w-lg mx-auto px-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'h-14' : 'h-20'
      }`}>
        <nav className="flex items-center gap-5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-bold transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-beige/70 hover:text-gold'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>
        <img
          src={LOGO_URL}
          alt="N.T"
          className={`object-contain transition-all duration-500 ${
            scrolled ? 'w-9 h-9' : 'w-14 h-14'
          }`}
        />
      </div>
    </header>
  )
}
