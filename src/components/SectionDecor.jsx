import { motion } from 'framer-motion'

const fade = (delay) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.2, delay },
})

function Petal({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 40 60" className={className} {...fade(delay)}>
      <path d="M20 2 C30 10 36 25 36 38 C36 50 28 58 20 58 C12 58 4 50 4 38 C4 25 10 10 20 2z" fill="currentColor" />
    </motion.svg>
  )
}

function Leaf({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 50 80" className={className} {...fade(delay)}>
      <path d="M25 4 C40 20 45 45 38 62 C34 72 28 78 25 78 C22 78 16 72 12 62 C5 45 10 20 25 4z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M25 15 L25 70" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </motion.svg>
  )
}

function Mirror({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 60 90" className={className} {...fade(delay)}>
      <ellipse cx="30" cy="32" rx="22" ry="26" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <rect x="27" y="58" width="6" height="20" rx="3" fill="currentColor" opacity="0.5" />
    </motion.svg>
  )
}

function Drop({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 30 45" className={className} {...fade(delay)}>
      <path d="M15 3 C15 3 27 18 27 28 C27 35 21 42 15 42 C9 42 3 35 3 28 C3 18 15 3 15 3z" fill="currentColor" />
    </motion.svg>
  )
}

function BrushStroke({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 200 40" className={className} preserveAspectRatio="none" {...fade(delay)}>
      <path d="M5 20 C30 8 60 32 100 18 S160 28 195 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </motion.svg>
  )
}

function Sparkle({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 40 40" className={className} {...fade(delay)}>
      <path d="M20 4 L22 16 L34 18 L22 20 L20 34 L18 20 L4 18 L18 16 Z" fill="currentColor" />
    </motion.svg>
  )
}

function Ring({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 80 80" className={className} {...fade(delay)}>
      <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" />
    </motion.svg>
  )
}

function NailAlmond({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 40 70" className={className} {...fade(delay)}>
      <path d="M20 2c8 0 15 8 15 22 0 18-7 40-15 44C12 64 5 42 5 24 5 10 12 2 20 2z" fill="currentColor" />
    </motion.svg>
  )
}

function Flower({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 60 60" className={className} {...fade(delay)}>
      <ellipse cx="30" cy="18" rx="7" ry="12" fill="currentColor" opacity="0.7" />
      <ellipse cx="30" cy="42" rx="7" ry="12" fill="currentColor" opacity="0.7" />
      <ellipse cx="18" cy="30" rx="12" ry="7" fill="currentColor" opacity="0.7" />
      <ellipse cx="42" cy="30" rx="12" ry="7" fill="currentColor" opacity="0.7" />
      <circle cx="30" cy="30" r="5" fill="currentColor" />
    </motion.svg>
  )
}

function Dots({ className, delay = 0, count = 5 }) {
  return (
    <motion.svg viewBox="0 0 120 40" className={className} {...fade(delay)}>
      {[...Array(count)].map((_, i) => (
        <circle key={i} cx={12 + i * 22} cy={20 + Math.sin(i * 1.4) * 10} r={1.5 + (i % 2)} fill="currentColor" />
      ))}
    </motion.svg>
  )
}

export function HeroDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Petal className="absolute top-24 left-[6%] w-8 text-pink-300/20 rotate-[-20deg]" delay={0.3} />
      <Leaf className="absolute top-[45%] right-[4%] w-10 text-purple-300/15 rotate-[15deg]" delay={0.5} />
      <Mirror className="absolute bottom-32 left-[10%] w-12 text-gold/10" delay={0.7} />
      <Drop className="absolute top-32 right-[18%] w-5 text-pink-200/25" delay={0.4} />
      <Sparkle className="absolute top-20 right-[25%] w-5 text-gold/15" delay={0.2} />
      <Sparkle className="absolute bottom-40 left-[20%] w-4 text-purple-200/20" delay={0.6} />
      <BrushStroke className="absolute top-[60%] left-0 w-48 h-8 text-pink-200/15" delay={0.8} />
      <Flower className="absolute bottom-20 right-[8%] w-10 text-purple-200/12" delay={0.9} />
      <Ring className="absolute top-[30%] left-[3%] w-20 text-gold/8" delay={0.6} />
    </div>
  )
}

export function WorksDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <NailAlmond className="absolute top-12 right-[5%] w-7 text-pink-300/15 rotate-[12deg]" />
      <Drop className="absolute top-[35%] left-[4%] w-5 text-purple-200/20 rotate-[-10deg]" delay={0.2} />
      <Petal className="absolute bottom-20 right-[8%] w-8 text-pink-200/18 rotate-[25deg]" delay={0.4} />
      <BrushStroke className="absolute top-[25%] right-0 w-40 h-8 text-purple-200/10" delay={0.3} />
      <Sparkle className="absolute top-20 left-[12%] w-5 text-gold/12" delay={0.3} />
      <Leaf className="absolute bottom-32 left-[6%] w-9 text-pink-300/12 rotate-[-15deg]" delay={0.5} />
      <Dots className="absolute bottom-12 right-[15%] w-24 text-gold/10" delay={0.4} />
      <Ring className="absolute top-[65%] left-[2%] w-14 text-purple-200/10" delay={0.6} />
    </div>
  )
}

export function ServicesDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Mirror className="absolute top-16 left-[4%] w-14 text-pink-200/15 rotate-[-8deg]" delay={0.2} />
      <Petal className="absolute top-[40%] right-[3%] w-7 text-purple-300/15 rotate-[20deg]" delay={0.3} />
      <Drop className="absolute bottom-24 left-[8%] w-5 text-pink-300/18" delay={0.5} />
      <Flower className="absolute top-12 right-[12%] w-9 text-purple-200/10" delay={0.4} />
      <Sparkle className="absolute bottom-16 right-[6%] w-5 text-gold/12" delay={0.6} />
      <BrushStroke className="absolute bottom-[35%] left-0 w-full h-10 text-pink-100/12" delay={0.5} />
      <Leaf className="absolute top-[60%] left-[3%] w-8 text-purple-200/12 rotate-[10deg]" delay={0.7} />
      <NailAlmond className="absolute bottom-40 right-[15%] w-6 text-pink-200/12 rotate-[-12deg]" delay={0.4} />
    </div>
  )
}

export function TestimonialsDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Petal className="absolute top-10 left-[8%] w-7 text-pink-300/18 rotate-[30deg]" />
      <Drop className="absolute top-[50%] right-[5%] w-5 text-purple-200/20" delay={0.3} />
      <Flower className="absolute bottom-16 left-[12%] w-10 text-pink-200/10" delay={0.5} />
      <Sparkle className="absolute top-16 right-[15%] w-5 text-gold/12" delay={0.2} />
      <BrushStroke className="absolute top-[70%] left-0 w-56 h-8 text-purple-200/10" delay={0.4} />
      <Ring className="absolute top-[30%] left-[3%] w-16 text-pink-200/10" delay={0.5} />
      <Leaf className="absolute bottom-24 right-[10%] w-8 text-purple-300/12 rotate-[-20deg]" delay={0.6} />
      <NailAlmond className="absolute top-8 right-[3%] w-5 text-pink-200/15 rotate-[8deg]" delay={0.3} />
    </div>
  )
}

export function LocationDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Mirror className="absolute top-10 right-[6%] w-12 text-purple-200/12 rotate-[5deg]" delay={0.2} />
      <Petal className="absolute bottom-20 left-[5%] w-8 text-pink-300/15 rotate-[-15deg]" delay={0.4} />
      <Drop className="absolute top-[40%] left-[8%] w-5 text-pink-200/20" delay={0.3} />
      <Sparkle className="absolute top-[55%] right-[10%] w-5 text-gold/12" delay={0.5} />
      <Flower className="absolute top-20 left-[15%] w-8 text-purple-200/10" delay={0.6} />
      <BrushStroke className="absolute top-[20%] right-0 w-44 h-8 text-pink-200/12" delay={0.3} />
      <Dots className="absolute bottom-12 right-[12%] w-20 text-gold/10" delay={0.4} count={4} />
      <Leaf className="absolute bottom-36 right-[3%] w-9 text-purple-300/10 rotate-[12deg]" delay={0.7} />
    </div>
  )
}
