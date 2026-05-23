import { motion } from 'framer-motion'
import { ADDRESS, HOURS, WAZE_URL } from '../config/constants'
import { HeroDecor } from './SectionDecor'

export default function Hero({ onCtaClick }) {
  return (
    <section id="hero" className="relative min-h-screen px-5 pt-24 pb-10 flex flex-col overflow-hidden section-hero bg-mesh">
      <HeroDecor />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <span className="absolute top-[5px] right-3 text-[9px] text-white/30">בס״ד</span>

      <div className="flex-1 flex flex-col items-center justify-center mt-6">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-center text-beige leading-snug mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          לפני שאת קובעת תור,{' '}
          <span className="text-gold">תראי את זה</span>
        </motion.h1>


        <motion.div
          className="w-full max-w-lg aspect-video rounded-lg border border-gold/30 bg-bg-primary flex items-center justify-center mb-8 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="text-beige/40 text-sm text-center p-4">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            סרטון יעלה כאן
          </div>
        </motion.div>

        <motion.button
          onClick={onCtaClick}
          className="w-full max-w-sm py-4 rounded-full bg-gold text-bg-primary font-bold text-lg cursor-pointer animate-pulse-gold hover:scale-[1.03] active:scale-[0.97] transition-transform mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          whileTap={{ scale: 0.97 }}
        >
          בואי נקבע לך תור
        </motion.button>

        {/* Social proof */}
        <motion.p
          className="text-beige/50 text-xs text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          עשרות לקוחות קבועות בבאר שבע
        </motion.p>

        {/* Address + hours */}
        <motion.div
          className="text-center text-beige/50 text-sm space-y-1 border-t border-gold/10 pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
