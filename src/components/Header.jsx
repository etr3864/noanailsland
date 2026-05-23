import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => item.href.slice(1))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.2, rootMargin: '-30% 0px -40% 0px' }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return active
}

export default function Header() {
  const scrolled = useScrollPosition(300)
  const activeSection = useActiveSection()

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/70 backdrop-blur-md border-b border-gold/10 shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.4, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                className={`relative text-sm font-bold transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-beige/70 hover:text-gold'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
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
    </motion.header>
  )
}
