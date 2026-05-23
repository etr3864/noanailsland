import { useRef } from 'react'
import { motion } from 'framer-motion'
import GoldDivider from './GoldDivider'
import { TestimonialsDecor } from './SectionDecor'

const TESTIMONIAL_SCREENSHOTS = [null, null, null, null, null]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Testimonials() {
  const scrollRef = useRef(null)

  return (
    <section id="testimonials" className="relative py-12 section-testimonials">
      <TestimonialsDecor />
      <div className="px-5">
        <GoldDivider />
        <motion.h2
          className="text-xl font-bold text-gold text-center mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          מה כותבות לי אחרי טיפול
        </motion.h2>
        <motion.p
          className="text-beige/60 text-center text-sm mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          הודעות אמיתיות מלקוחות שלי
        </motion.p>
      </div>

      <motion.div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {TESTIMONIAL_SCREENSHOTS.map((src, i) => {
          const rotation = i % 2 === 0 ? 1.5 : -1.5
          return (
            <motion.div
              key={i}
              className="flex-shrink-0 w-64 h-80 rounded-lg bg-beige/5 border border-beige/10 snap-center overflow-hidden hover:rotate-0 hover:-translate-y-1 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotate: rotation,
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
              whileHover={{ rotate: 0, y: -4 }}
            >
              {src ? (
                <img src={src} alt={`ביקורת ${i + 1}`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-beige/30 text-sm gap-2">
                  <svg className="w-8 h-8 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                  סקרינשוט {i + 1}
                </div>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
