import { HeroDecor } from './SectionDecor'
import { ADDRESS, HOURS, WAZE_URL } from '../config/constants'

export default function Hero({ onCtaClick }) {
  return (
    <section id="hero" className="relative min-h-screen px-5 pt-24 pb-10 flex flex-col overflow-hidden section-hero grain contour">
      <HeroDecor />
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
