import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BeforeAfterSlider from './BeforeAfterSlider'
import GoldDivider from './GoldDivider'
import { WorksDecor } from './SectionDecor'

const BEFORE_AFTER_PAIRS = [
  {
    before: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569228/WhatsApp_Image_2026-05-23_at_22.40.07_5_rpyb8w.jpg',
    after: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569228/WhatsApp_Image_2026-05-23_at_22.40.07_6_g0afal.jpg',
  },
  {
    before: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569229/WhatsApp_Image_2026-05-23_at_22.40.07_3_te8pkf.jpg',
    after: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569229/WhatsApp_Image_2026-05-23_at_22.40.07_u3mabr.jpg',
  },
  {
    before: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569229/WhatsApp_Image_2026-05-23_at_22.40.08_ermivz.jpg',
    after: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569227/WhatsApp_Image_2026-05-23_at_22.40.07_2_lllpdy.jpg',
  },
  {
    before: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569228/WhatsApp_Image_2026-05-23_at_22.40.08_2_shqed8.jpg',
    after: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569228/WhatsApp_Image_2026-05-23_at_22.40.08_1_vonfya.jpg',
  },
]

const GALLERY_ITEMS = [
  { type: 'video', src: 'https://res.cloudinary.com/daowx6msw/video/upload/q_auto,f_auto/v1779569232/WhatsApp_Video_2026-05-23_at_22.40.11_d1vser.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569230/WhatsApp_Image_2026-05-23_at_22.40.11_2_uejeek.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569229/WhatsApp_Image_2026-05-23_at_22.40.11_wpz4jt.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569229/WhatsApp_Image_2026-05-23_at_22.40.11_1_uptef4.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_400/v1779569227/WhatsApp_Image_2026-05-23_at_22.40.07_4_vjp46u.jpg' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function GalleryLightbox({ items, activeIndex, onClose, onNext, onPrev }) {
  const item = items[activeIndex]
  const touchStart = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNext()
      if (e.key === 'ArrowRight') onPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onNext, onPrev])

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (diff > 50) onNext()
    else if (diff < -50) onPrev()
    touchStart.current = null
  }

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 backdrop-blur-sm touch-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 left-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="max-w-[85vw] max-h-[80vh]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              className="max-w-full max-h-[80vh] rounded-lg"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <img
              src={item.src}
              alt="תמונה מוגדלת"
              className="max-w-full max-h-[80vh] rounded-lg border border-gold/20"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex ? 'bg-gold w-4' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Works() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const scrollRef = useRef(null)

  // Hint scroll — nudge once to show it's scrollable
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const timeout = setTimeout(() => {
      container.scrollTo({ left: 60, behavior: 'smooth' })
      setTimeout(() => {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      }, 600)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextItem = () => setLightboxIndex((i) => (i + 1) % GALLERY_ITEMS.length)
  const prevItem = () => setLightboxIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)

  return (
    <section id="works" className="relative px-5 py-12 section-works bg-dots">
      <WorksDecor />
      <GoldDivider />

      <motion.h2
        className="text-xl font-bold text-gold text-center mb-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        תראי מה יצא לי
      </motion.h2>
      <motion.p
        className="text-beige/60 text-center text-sm mb-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        גררי ותראי איך הגיעו ואיך יצאו
      </motion.p>

      <motion.div
        className="grid grid-cols-2 gap-3 max-w-lg mx-auto mb-12"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {BEFORE_AFTER_PAIRS.map((pair, i) => (
          <motion.div key={i} variants={fadeUp}>
            <BeforeAfterSlider
              beforeSrc={pair.before}
              afterSrc={pair.after}
              index={i}
            />
          </motion.div>
        ))}
      </motion.div>

      <GoldDivider />

      <motion.h2
        className="text-xl font-bold text-gold text-center mb-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        עוד קצת מהעבודות שלי
      </motion.h2>

      <motion.p
        className="text-beige/60 text-center text-sm mb-4 flex items-center justify-center gap-1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" />
        </svg>
        החליקי לעוד
      </motion.p>

      <motion.div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto max-w-lg mx-auto pb-3 snap-x snap-mandatory scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            className="relative flex-shrink-0 w-40 h-52 rounded-lg border border-gold/30 overflow-hidden cursor-pointer hover:border-gold hover:scale-105 transition-all duration-300 snap-center"
            variants={scaleIn}
            onClick={() => openLightbox(i)}
          >
            {item.type === 'video' ? (
              <>
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="none"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <img src={item.src} alt={`תוצאה ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            items={GALLERY_ITEMS}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextItem}
            onPrev={prevItem}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
