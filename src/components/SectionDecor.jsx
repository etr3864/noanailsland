import { motion } from 'framer-motion'

function NailAlmond({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 40 70"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      <path
        d="M20 2c8 0 15 8 15 22 0 18-7 40-15 44C12 64 5 42 5 24 5 10 12 2 20 2z"
        fill="currentColor"
      />
    </motion.svg>
  )
}

function NailStiletto({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 30 80"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      <path
        d="M15 2c6 0 12 6 12 18 0 12-3 28-7 40-2 6-4 14-5 18-1-4-3-12-5-18C6 48 3 32 3 20 3 8 9 2 15 2z"
        fill="currentColor"
      />
    </motion.svg>
  )
}

function NailCoffin({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 36 72"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      <path
        d="M5 2h26c2 0 3 2 3 4v30c0 8-4 18-8 26-2 4-4 8-8 10-4-2-6-6-8-10-4-8-8-18-8-26V6c0-2 1-4 3-4z"
        fill="currentColor"
      />
    </motion.svg>
  )
}

function NailOval({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 38 68"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      <ellipse cx="19" cy="34" rx="16" ry="32" fill="currentColor" />
    </motion.svg>
  )
}

function NailSquare({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 36 65"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      <path
        d="M4 2h28c1 0 2 1 2 2v40c0 4-1 8-3 12l-6 7h-14l-6-7c-2-4-3-8-3-12V4c0-1 1-2 2-2z"
        fill="currentColor"
      />
    </motion.svg>
  )
}

function FlowLine({ className, delay = 0, variant = 0 }) {
  const paths = [
    "M0 50 C40 20, 80 80, 120 40 S180 60, 200 30",
    "M0 30 C50 60, 100 10, 150 50 S190 20, 200 45",
    "M0 60 C30 30, 90 70, 130 25 S170 55, 200 40",
  ]
  return (
    <motion.svg
      viewBox="0 0 200 100"
      className={className}
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay }}
    >
      <path
        d={paths[variant % 3]}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </motion.svg>
  )
}

function Ring({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 80 80"
      className={className}
      initial={{ opacity: 0, rotate: -20 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    >
      <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" />
    </motion.svg>
  )
}

function Sparkle({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <path
        d="M20 4 L22 16 L34 18 L22 20 L20 34 L18 20 L4 18 L18 16 Z"
        fill="currentColor"
      />
    </motion.svg>
  )
}

function Dots({ className, delay = 0, count = 5 }) {
  return (
    <motion.svg
      viewBox="0 0 120 40"
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {[...Array(count)].map((_, i) => (
        <circle
          key={i}
          cx={12 + i * 22}
          cy={20 + Math.sin(i * 1.4) * 10}
          r={1.5 + (i % 2)}
          fill="currentColor"
        />
      ))}
    </motion.svg>
  )
}


export function HeroDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <NailAlmond className="absolute top-20 left-[8%] w-8 text-gold/[0.07] rotate-[-15deg]" delay={2} />
      <NailStiletto className="absolute top-32 right-[5%] w-5 text-beige/[0.06] rotate-[20deg]" delay={2.1} />
      <NailCoffin className="absolute top-[55%] left-[4%] w-6 text-gold/[0.05] rotate-[-25deg]" delay={2.3} />
      <NailOval className="absolute bottom-36 right-[10%] w-7 text-beige/[0.05] rotate-[12deg]" delay={2.4} />
      <Ring className="absolute bottom-28 left-[12%] w-24 text-gold/[0.06]" delay={2.4} />
      <Sparkle className="absolute top-28 right-[20%] w-6 text-gold/[0.09]" delay={2.2} />
      <Sparkle className="absolute bottom-40 left-[25%] w-4 text-beige/[0.06]" delay={2.5} />
      <FlowLine className="absolute top-[65%] left-0 w-full h-16 text-gold/[0.04]" delay={1.8} />
      <FlowLine className="absolute top-[25%] left-0 w-2/3 h-12 text-beige/[0.03]" delay={2} variant={1} />
      <NailSquare className="absolute bottom-16 right-[3%] w-6 text-gold/[0.05] rotate-[8deg]" delay={2.6} />
    </div>
  )
}

export function WorksDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <NailAlmond className="absolute top-12 right-[6%] w-7 text-gold/[0.06] rotate-[10deg]" />
      <NailStiletto className="absolute top-[40%] left-[3%] w-5 text-beige/[0.05] rotate-[-18deg]" delay={0.2} />
      <NailSquare className="absolute bottom-24 right-[4%] w-6 text-gold/[0.05] rotate-[5deg]" delay={0.4} />
      <NailOval className="absolute bottom-12 left-[8%] w-5 text-gold/[0.04] rotate-[30deg]" delay={0.5} />
      <Dots className="absolute bottom-20 left-[15%] w-28 text-gold/[0.08]" delay={0.3} />
      <Sparkle className="absolute top-24 left-[15%] w-5 text-gold/[0.07]" delay={0.3} />
      <Sparkle className="absolute top-[60%] right-[12%] w-4 text-beige/[0.06]" delay={0.6} />
      <FlowLine className="absolute top-[30%] right-0 w-48 h-12 text-beige/[0.04]" delay={0.5} />
      <FlowLine className="absolute bottom-[20%] left-0 w-56 h-14 text-gold/[0.03]" delay={0.7} variant={2} />
      <Ring className="absolute top-[70%] right-[5%] w-16 text-gold/[0.04]" delay={0.6} />
    </div>
  )
}

export function ServicesDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Ring className="absolute top-16 left-[5%] w-20 text-gold/[0.05]" delay={0.2} />
      <NailCoffin className="absolute bottom-16 right-[8%] w-8 text-gold/[0.06] rotate-[-10deg]" delay={0.4} />
      <NailAlmond className="absolute top-[35%] right-[3%] w-6 text-beige/[0.05] rotate-[15deg]" delay={0.3} />
      <NailStiletto className="absolute top-20 right-[18%] w-5 text-gold/[0.04] rotate-[-30deg]" delay={0.5} />
      <NailOval className="absolute bottom-32 left-[6%] w-5 text-beige/[0.04] rotate-[20deg]" delay={0.6} />
      <Sparkle className="absolute top-12 right-[10%] w-5 text-gold/[0.07]" delay={0.3} />
      <Sparkle className="absolute bottom-20 left-[18%] w-4 text-gold/[0.06]" delay={0.7} />
      <Dots className="absolute top-[55%] left-[2%] w-24 text-gold/[0.06]" delay={0.5} count={4} />
      <FlowLine className="absolute bottom-[40%] left-0 w-full h-20 text-beige/[0.03]" delay={0.6} />
      <FlowLine className="absolute top-[20%] right-0 w-40 h-10 text-gold/[0.04]" delay={0.4} variant={1} />
    </div>
  )
}

export function TestimonialsDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Dots className="absolute top-10 right-[15%] w-24 text-gold/[0.07]" />
      <NailAlmond className="absolute bottom-10 left-[10%] w-6 text-beige/[0.05] rotate-[25deg]" delay={0.3} />
      <NailSquare className="absolute top-[30%] left-[4%] w-5 text-gold/[0.05] rotate-[-12deg]" delay={0.4} />
      <NailStiletto className="absolute top-16 left-[22%] w-4 text-gold/[0.04] rotate-[18deg]" delay={0.2} />
      <NailCoffin className="absolute bottom-[35%] right-[6%] w-6 text-beige/[0.04] rotate-[-8deg]" delay={0.5} />
      <Ring className="absolute top-[50%] right-[3%] w-16 text-gold/[0.04]" delay={0.5} />
      <Sparkle className="absolute top-8 left-[8%] w-5 text-gold/[0.06]" delay={0.2} />
      <Sparkle className="absolute bottom-16 right-[20%] w-4 text-beige/[0.05]" delay={0.6} />
      <FlowLine className="absolute top-[70%] left-0 w-full h-12 text-gold/[0.03]" delay={0.4} variant={2} />
      <NailOval className="absolute top-8 right-[2%] w-6 text-gold/[0.04] rotate-[-15deg]" delay={0.4} />
    </div>
  )
}

export function LocationDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FlowLine className="absolute top-[20%] left-0 w-full h-14 text-gold/[0.04]" />
      <FlowLine className="absolute bottom-[30%] right-0 w-48 h-12 text-beige/[0.03]" delay={0.3} variant={1} />
      <NailAlmond className="absolute top-8 left-[8%] w-7 text-gold/[0.06] rotate-[-20deg]" delay={0.2} />
      <NailStiletto className="absolute top-[45%] right-[4%] w-5 text-beige/[0.05] rotate-[15deg]" delay={0.3} />
      <NailOval className="absolute bottom-28 left-[5%] w-6 text-gold/[0.05] rotate-[10deg]" delay={0.5} />
      <NailCoffin className="absolute top-20 right-[15%] w-5 text-gold/[0.04] rotate-[-22deg]" delay={0.4} />
      <Dots className="absolute bottom-16 right-[12%] w-20 text-gold/[0.06]" delay={0.4} count={4} />
      <Sparkle className="absolute top-[60%] left-[12%] w-5 text-gold/[0.06]" delay={0.5} />
      <Ring className="absolute bottom-36 right-[8%] w-14 text-gold/[0.04]" delay={0.6} />
    </div>
  )
}
