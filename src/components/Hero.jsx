import { useState, useEffect } from 'react'
import { ADDRESS, HOURS, WAZE_URL } from '../config/constants'

function DeferredDecor() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 1200)
    return () => clearTimeout(id)
  }, [])

  if (!show) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg viewBox="0 0 40 70" className="absolute top-20 left-[8%] w-8 text-gold/[0.07] rotate-[-15deg] opacity-0 animate-[hero-fade_1s_ease_forwards]">
        <path d="M20 2c8 0 15 8 15 22 0 18-7 40-15 44C12 64 5 42 5 24 5 10 12 2 20 2z" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 30 80" className="absolute top-32 right-[5%] w-5 text-beige/[0.06] rotate-[20deg] opacity-0 animate-[hero-fade_1s_ease_0.2s_forwards]">
        <path d="M15 2c6 0 12 6 12 18 0 12-3 28-7 40-2 6-4 14-5 18-1-4-3-12-5-18C6 48 3 32 3 20 3 8 9 2 15 2z" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 80 80" className="absolute bottom-28 left-[12%] w-24 text-gold/[0.06] opacity-0 animate-[hero-fade_1s_ease_0.4s_forwards]">
        <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </svg>
      <svg viewBox="0 0 40 40" className="absolute top-28 right-[20%] w-6 text-gold/[0.09] opacity-0 animate-[hero-fade_0.8s_ease_0.3s_forwards]">
        <path d="M20 4 L22 16 L34 18 L22 20 L20 34 L18 20 L4 18 L18 16 Z" fill="currentColor" />
      </svg>
    </div>
  )
}

export default function Hero({ onCtaClick }) {
  return (
    <section id="hero" className="relative min-h-screen px-5 pt-24 pb-10 flex flex-col overflow-hidden section-hero bg-mesh">
      <DeferredDecor />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />

      <span className="absolute top-[5px] right-3 text-[9px] text-beige/30">בס״ד</span>

      <div className="flex-1 flex flex-col items-center justify-center mt-6">
        <h1 className="anim-hero-title text-2xl md:text-3xl font-bold text-center text-beige leading-snug mb-2">
          לפני שאת קובעת תור,{' '}
          <span className="text-gold">תראי את זה</span>
        </h1>

        <div className="anim-hero-video w-full max-w-lg aspect-video rounded-xl glass flex items-center justify-center mb-8 overflow-hidden">
          <div className="text-beige/30 text-sm text-center p-4">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            סרטון יעלה כאן
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="anim-hero-cta w-full max-w-sm py-4 rounded-full glass-btn text-white font-bold text-lg cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-transform mb-5"
        >
          בואי נקבע לך תור
        </button>

        <p className="anim-hero-proof text-beige/50 text-xs text-center mb-6">
          עשרות לקוחות קבועות בבאר שבע
        </p>

        <div className="anim-hero-info text-center text-beige/50 text-sm space-y-1 border-t border-gold/10 pt-5">
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>{ADDRESS}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.41l3.3 3.3-1.42 1.42L11 13.59V7h2v5.41z" />
            </svg>
            <span>{HOURS}</span>
          </p>
          <a
            href={WAZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gold/70 underline underline-offset-2 text-xs mt-1"
          >
            נווטי בוויז
          </a>
        </div>
      </div>
    </section>
  )
}
