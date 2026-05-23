import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function WaveDivider() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <div ref={ref} className="relative py-10 flex items-center justify-center" style={{ background: 'transparent' }}>
      <motion.div
        className="h-px w-32 bg-gold"
        style={{ opacity, scaleX }}
      />
    </div>
  )
}
