import { useState, useEffect } from 'react'

export default function useScrollPosition(threshold = 600) {
  const [pastThreshold, setPastThreshold] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setPastThreshold(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return pastThreshold
}
