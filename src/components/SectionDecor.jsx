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

function Lipstick({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 30 80" className={className} {...fade(delay)}>
      <path d="M10 4 L20 4 L22 22 L8 22 Z" fill="currentColor" />
      <rect x="6" y="22" width="18" height="6" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="8" y="28" width="14" height="44" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <line x1="10" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="0.4" />
    </motion.svg>
  )
}

function Perfume({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 50 80" className={className} {...fade(delay)}>
      <rect x="20" y="4" width="10" height="10" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="22" y="14" width="6" height="6" fill="currentColor" opacity="0.4" />
      <path d="M14 20 L36 20 L40 28 L40 70 Q40 76 34 76 L16 76 Q10 76 10 70 L10 28 Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="25" cy="48" rx="8" ry="6" fill="currentColor" opacity="0.25" />
    </motion.svg>
  )
}

function MakeupBrush({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 20 90" className={className} {...fade(delay)}>
      <path d="M10 2 Q4 14 6 26 L14 26 Q16 14 10 2z" fill="currentColor" opacity="0.55" />
      <rect x="6" y="26" width="8" height="6" fill="currentColor" />
      <rect x="6" y="32" width="8" height="50" rx="1" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="10" cy="86" r="2" fill="currentColor" opacity="0.6" />
    </motion.svg>
  )
}

function Lashes({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 80 40" className={className} {...fade(delay)}>
      <path d="M5 28 Q40 8 75 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="15" y1="22" x2="13" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="25" y1="17" x2="24" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="35" y1="14" x2="35" y2="0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="45" y1="14" x2="45" y2="0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="55" y1="17" x2="56" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="65" y1="22" x2="67" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </motion.svg>
  )
}

function Compact({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 70 70" className={className} {...fade(delay)}>
      <circle cx="35" cy="35" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="35" cy="35" r="22" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="35" cy="35" r="14" fill="currentColor" opacity="0.3" />
      <circle cx="35" cy="6" r="3" fill="currentColor" opacity="0.6" />
    </motion.svg>
  )
}

function Pearls({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 140 30" className={className} preserveAspectRatio="none" {...fade(delay)}>
      <path d="M5 15 Q35 5 70 15 T135 15" fill="none" stroke="currentColor" strokeWidth="0.4" />
      {[10, 25, 42, 60, 78, 96, 113, 128].map((cx, i) => (
        <circle key={i} cx={cx} cy={15 + (i % 2 === 0 ? 0 : 1)} r="3" fill="currentColor" opacity={i % 2 === 0 ? 0.6 : 0.4} />
      ))}
    </motion.svg>
  )
}

function Heart({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 40 36" className={className} {...fade(delay)}>
      <path d="M20 32 L6 18 Q-2 10 6 4 Q14 0 20 8 Q26 0 34 4 Q42 10 34 18 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </motion.svg>
  )
}

function ButterflyAbstract({ className, delay = 0 }) {
  return (
    <motion.svg viewBox="0 0 60 50" className={className} {...fade(delay)}>
      <path d="M30 10 Q15 0 6 10 Q0 20 8 28 Q18 32 30 22z" fill="currentColor" opacity="0.45" />
      <path d="M30 10 Q45 0 54 10 Q60 20 52 28 Q42 32 30 22z" fill="currentColor" opacity="0.45" />
      <path d="M30 22 Q12 30 8 42 Q14 46 22 42 Q28 36 30 28z" fill="currentColor" opacity="0.35" />
      <path d="M30 22 Q48 30 52 42 Q46 46 38 42 Q32 36 30 28z" fill="currentColor" opacity="0.35" />
      <line x1="30" y1="8" x2="30" y2="44" stroke="currentColor" strokeWidth="0.8" />
    </motion.svg>
  )
}

export function HeroDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Lipstick className="absolute top-28 left-[6%] w-7 text-pink-400/25 rotate-[-15deg]" delay={0.3} />
      <Lashes className="absolute top-32 right-[8%] w-14 text-purple-400/22" delay={0.4} />
      <Perfume className="absolute bottom-36 left-[6%] w-10 text-pink-300/22 rotate-[8deg]" delay={0.7} />
      <Petal className="absolute top-[50%] left-[18%] w-8 text-pink-300/22 rotate-[-20deg]" delay={0.5} />
      <Drop className="absolute top-[60%] right-[15%] w-6 text-purple-300/25" delay={0.6} />
      <Sparkle className="absolute top-20 right-[28%] w-5 text-gold/22" delay={0.2} />
      <Sparkle className="absolute bottom-44 right-[20%] w-4 text-pink-300/25" delay={0.6} />
      <Sparkle className="absolute top-[55%] left-[5%] w-3 text-gold/25" delay={0.4} />
      <Heart className="absolute top-[42%] right-[6%] w-7 text-pink-400/22 rotate-[15deg]" delay={0.5} />
      <Heart className="absolute bottom-24 left-[28%] w-5 text-pink-400/18 rotate-[-20deg]" delay={0.7} />
      <Pearls className="absolute top-[68%] left-0 w-56 text-purple-300/18" delay={0.8} />
      <Flower className="absolute bottom-16 right-[3%] w-10 text-pink-300/20" delay={0.9} />
      <Flower className="absolute top-[20%] right-[42%] w-7 text-purple-300/15" delay={0.4} />
      <Ring className="absolute top-[28%] left-[3%] w-20 text-gold/15" delay={0.6} />
      <Ring className="absolute bottom-[18%] right-[40%] w-16 text-purple-300/12" delay={0.8} />
      <BrushStroke className="absolute top-[80%] right-0 w-40 h-8 text-purple-300/18" delay={0.9} />
      <BrushStroke className="absolute top-[18%] left-0 w-32 h-6 text-pink-300/15" delay={0.5} />
      <Compact className="absolute top-[38%] left-[35%] w-9 text-purple-300/14" delay={0.5} />
      <ButterflyAbstract className="absolute top-[85%] left-[15%] w-11 text-pink-300/16" delay={0.9} />
      <MakeupBrush className="absolute top-[30%] right-[3%] w-5 text-pink-400/20 rotate-[20deg]" delay={0.4} />
      <Leaf className="absolute bottom-52 right-[28%] w-7 text-purple-300/15 rotate-[20deg]" delay={0.6} />
      <NailAlmond className="absolute top-[72%] right-[35%] w-5 text-pink-300/18 rotate-[8deg]" delay={0.7} />
      <Dots className="absolute top-[15%] right-[15%] w-20 text-gold/15" delay={0.3} count={4} />
    </div>
  )
}

export function WorksDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <NailAlmond className="absolute top-12 right-[5%] w-7 text-pink-400/22 rotate-[12deg]" />
      <NailAlmond className="absolute top-[80%] left-[3%] w-6 text-purple-400/18 rotate-[-22deg]" delay={0.5} />
      <MakeupBrush className="absolute top-20 left-[4%] w-6 text-purple-400/22 rotate-[-12deg]" delay={0.3} />
      <MakeupBrush className="absolute bottom-32 right-[28%] w-5 text-pink-400/20 rotate-[18deg]" delay={0.6} />
      <Drop className="absolute top-[30%] left-[14%] w-5 text-pink-300/25 rotate-[-10deg]" delay={0.2} />
      <Drop className="absolute bottom-[20%] right-[8%] w-6 text-purple-300/22" delay={0.5} />
      <Lashes className="absolute top-[42%] right-[6%] w-12 text-pink-400/22" delay={0.4} />
      <Lashes className="absolute bottom-[40%] left-[12%] w-11 text-purple-400/18" delay={0.6} />
      <Petal className="absolute bottom-24 right-[10%] w-8 text-purple-300/22 rotate-[25deg]" delay={0.4} />
      <Petal className="absolute top-[55%] right-[28%] w-7 text-pink-300/20 rotate-[-18deg]" delay={0.5} />
      <Compact className="absolute top-[60%] left-[5%] w-12 text-pink-300/16" delay={0.5} />
      <Compact className="absolute bottom-12 left-[28%] w-9 text-purple-300/14" delay={0.7} />
      <BrushStroke className="absolute top-[20%] right-0 w-40 h-8 text-purple-300/16" delay={0.3} />
      <BrushStroke className="absolute bottom-[55%] left-0 w-44 h-8 text-pink-300/14" delay={0.5} />
      <Sparkle className="absolute top-28 left-[28%] w-5 text-gold/22" delay={0.3} />
      <Sparkle className="absolute top-[65%] right-[22%] w-4 text-pink-400/22" delay={0.5} />
      <Sparkle className="absolute bottom-20 left-[20%] w-3 text-gold/22" delay={0.7} />
      <Heart className="absolute bottom-40 left-[8%] w-6 text-pink-400/18 rotate-[-12deg]" delay={0.6} />
      <Heart className="absolute top-[35%] right-[40%] w-5 text-pink-400/15 rotate-[15deg]" delay={0.4} />
      <Dots className="absolute bottom-12 right-[18%] w-24 text-gold/16" delay={0.4} />
      <Dots className="absolute top-[10%] left-[35%] w-20 text-purple-300/14" delay={0.3} count={4} />
      <Ring className="absolute top-[70%] right-[3%] w-14 text-purple-300/14" delay={0.6} />
      <Ring className="absolute bottom-[10%] left-0 w-16 text-pink-300/12" delay={0.7} />
      <Pearls className="absolute bottom-[35%] left-0 w-40 text-pink-300/16" delay={0.7} />
      <Pearls className="absolute top-[88%] right-0 w-36 text-purple-300/14" delay={0.8} />
      <Flower className="absolute top-[48%] left-[42%] w-7 text-purple-300/14" delay={0.5} />
      <ButterflyAbstract className="absolute bottom-[8%] right-[35%] w-10 text-pink-300/16" delay={0.8} />
      <Lipstick className="absolute top-[18%] left-[18%] w-5 text-pink-400/18 rotate-[-15deg]" delay={0.4} />
      <Perfume className="absolute bottom-[60%] right-[18%] w-7 text-purple-400/15 rotate-[-8deg]" delay={0.6} />
      <Mirror className="absolute top-[35%] left-[35%] w-9 text-pink-300/14 rotate-[6deg]" delay={0.5} />
      <Leaf className="absolute bottom-[50%] right-[42%] w-7 text-purple-300/15 rotate-[-25deg]" delay={0.6} />
    </div>
  )
}

export function ServicesDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Mirror className="absolute top-16 left-[4%] w-14 text-pink-300/20 rotate-[-8deg]" delay={0.2} />
      <Mirror className="absolute bottom-20 right-[5%] w-11 text-purple-300/16 rotate-[8deg]" delay={0.6} />
      <Lipstick className="absolute top-[28%] right-[5%] w-7 text-purple-400/22 rotate-[18deg]" delay={0.3} />
      <Lipstick className="absolute bottom-[35%] left-[3%] w-6 text-pink-400/20 rotate-[-22deg]" delay={0.6} />
      <Perfume className="absolute bottom-28 right-[8%] w-9 text-pink-400/20 rotate-[-6deg]" delay={0.5} />
      <Perfume className="absolute top-[45%] left-[3%] w-8 text-purple-400/18 rotate-[10deg]" delay={0.4} />
      <ButterflyAbstract className="absolute top-[45%] right-[12%] w-12 text-purple-300/22" delay={0.4} />
      <ButterflyAbstract className="absolute bottom-[12%] left-[12%] w-10 text-pink-300/18" delay={0.7} />
      <Petal className="absolute top-[55%] left-[16%] w-8 text-pink-300/22 rotate-[20deg]" delay={0.3} />
      <Petal className="absolute top-[20%] left-[35%] w-7 text-purple-300/18 rotate-[-15deg]" delay={0.4} />
      <Petal className="absolute bottom-[60%] right-[28%] w-6 text-pink-300/18 rotate-[10deg]" delay={0.5} />
      <Drop className="absolute bottom-32 left-[12%] w-5 text-pink-400/22" delay={0.5} />
      <Drop className="absolute top-[35%] right-[20%] w-5 text-purple-300/22" delay={0.4} />
      <Drop className="absolute top-[80%] right-[40%] w-4 text-pink-400/20" delay={0.7} />
      <Lashes className="absolute top-12 right-[30%] w-12 text-purple-400/18" delay={0.4} />
      <Lashes className="absolute bottom-[50%] left-[6%] w-11 text-pink-400/16" delay={0.6} />
      <Sparkle className="absolute top-[35%] left-[20%] w-5 text-gold/22" delay={0.4} />
      <Sparkle className="absolute bottom-20 right-[18%] w-4 text-pink-400/22" delay={0.6} />
      <Sparkle className="absolute top-[68%] right-[8%] w-3 text-gold/22" delay={0.5} />
      <Sparkle className="absolute top-20 left-[8%] w-3 text-purple-400/22" delay={0.3} />
      <BrushStroke className="absolute bottom-[40%] left-0 w-full h-10 text-purple-300/14" delay={0.5} />
      <BrushStroke className="absolute top-[12%] right-0 w-44 h-8 text-pink-300/15" delay={0.3} />
      <Flower className="absolute bottom-44 left-[5%] w-9 text-pink-300/18" delay={0.7} />
      <Flower className="absolute top-[60%] right-[35%] w-8 text-purple-300/15" delay={0.5} />
      <Pearls className="absolute top-[78%] right-0 w-44 text-purple-300/16" delay={0.6} />
      <Pearls className="absolute top-[28%] left-0 w-40 text-pink-300/14" delay={0.5} />
      <Heart className="absolute top-24 left-[28%] w-5 text-pink-400/22 rotate-[-15deg]" delay={0.5} />
      <Heart className="absolute bottom-[28%] right-[42%] w-6 text-pink-400/18 rotate-[18deg]" delay={0.6} />
      <Compact className="absolute bottom-12 left-[20%] w-10 text-purple-300/15" delay={0.7} />
      <Compact className="absolute top-[18%] right-[18%] w-9 text-pink-300/14" delay={0.4} />
      <NailAlmond className="absolute bottom-40 right-[15%] w-6 text-pink-200/16 rotate-[-12deg]" delay={0.4} />
      <NailAlmond className="absolute top-[72%] left-[28%] w-5 text-purple-300/15 rotate-[15deg]" delay={0.6} />
      <MakeupBrush className="absolute top-[50%] right-[42%] w-5 text-purple-400/18 rotate-[12deg]" delay={0.5} />
      <Ring className="absolute bottom-[8%] right-[8%] w-14 text-gold/12" delay={0.7} />
      <Ring className="absolute top-[5%] left-[42%] w-12 text-purple-300/12" delay={0.3} />
      <Leaf className="absolute bottom-[20%] left-[35%] w-7 text-pink-300/14 rotate-[20deg]" delay={0.7} />
      <Dots className="absolute top-[42%] left-[40%] w-20 text-gold/15" delay={0.4} count={4} />
    </div>
  )
}

export function TestimonialsDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Petal className="absolute top-10 left-[8%] w-7 text-pink-400/22 rotate-[30deg]" />
      <Petal className="absolute bottom-32 right-[12%] w-8 text-purple-300/20 rotate-[-15deg]" delay={0.5} />
      <Heart className="absolute top-[18%] right-[12%] w-7 text-pink-400/22 rotate-[10deg]" delay={0.2} />
      <Heart className="absolute bottom-16 left-[8%] w-6 text-pink-400/18 rotate-[-15deg]" delay={0.6} />
      <Lashes className="absolute top-[32%] left-[5%] w-12 text-purple-400/22" delay={0.3} />
      <Lashes className="absolute bottom-[40%] right-[8%] w-11 text-pink-400/18" delay={0.5} />
      <Drop className="absolute top-[55%] right-[6%] w-5 text-pink-300/25" delay={0.3} />
      <Drop className="absolute top-[20%] left-[35%] w-4 text-purple-300/22" delay={0.4} />
      <ButterflyAbstract className="absolute bottom-20 right-[15%] w-12 text-pink-300/20" delay={0.5} />
      <ButterflyAbstract className="absolute top-[60%] left-[18%] w-10 text-purple-300/16" delay={0.6} />
      <MakeupBrush className="absolute top-12 right-[28%] w-6 text-purple-300/22 rotate-[15deg]" delay={0.4} />
      <MakeupBrush className="absolute bottom-[55%] right-[35%] w-5 text-pink-400/18 rotate-[-12deg]" delay={0.6} />
      <Lipstick className="absolute top-[42%] right-[22%] w-6 text-pink-400/20 rotate-[12deg]" delay={0.4} />
      <Perfume className="absolute bottom-12 left-[35%] w-8 text-purple-400/15 rotate-[6deg]" delay={0.7} />
      <Mirror className="absolute top-[12%] left-[20%] w-10 text-pink-300/15 rotate-[-8deg]" delay={0.3} />
      <Compact className="absolute bottom-[45%] left-[3%] w-9 text-purple-300/14" delay={0.5} />
      <Compact className="absolute top-[68%] right-[28%] w-8 text-pink-300/14" delay={0.6} />
      <Sparkle className="absolute top-20 right-[5%] w-5 text-gold/22" delay={0.2} />
      <Sparkle className="absolute bottom-32 left-[18%] w-4 text-pink-400/22" delay={0.4} />
      <Sparkle className="absolute top-[48%] left-[42%] w-3 text-gold/22" delay={0.5} />
      <BrushStroke className="absolute top-[70%] left-0 w-56 h-8 text-purple-300/16" delay={0.4} />
      <BrushStroke className="absolute top-[22%] right-0 w-40 h-7 text-pink-300/14" delay={0.3} />
      <Pearls className="absolute bottom-12 left-0 w-44 text-pink-300/16" delay={0.6} />
      <Pearls className="absolute top-[80%] right-0 w-40 text-purple-300/14" delay={0.7} />
      <Ring className="absolute top-[35%] left-[3%] w-16 text-purple-300/14" delay={0.5} />
      <Ring className="absolute bottom-[20%] right-[3%] w-14 text-pink-300/12" delay={0.6} />
      <Flower className="absolute bottom-[40%] right-[5%] w-9 text-pink-300/16" delay={0.6} />
      <Flower className="absolute top-[78%] left-[40%] w-7 text-purple-300/14" delay={0.7} />
      <NailAlmond className="absolute top-[5%] right-[40%] w-5 text-pink-300/16 rotate-[-15deg]" delay={0.3} />
      <Leaf className="absolute top-[28%] right-[42%] w-8 text-purple-300/14 rotate-[18deg]" delay={0.4} />
      <Dots className="absolute top-[55%] right-[40%] w-20 text-gold/14" delay={0.5} count={4} />
    </div>
  )
}

export function LocationDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Mirror className="absolute top-10 right-[6%] w-12 text-purple-300/20 rotate-[5deg]" delay={0.2} />
      <Mirror className="absolute bottom-32 left-[28%] w-9 text-pink-300/15 rotate-[-10deg]" delay={0.7} />
      <Lipstick className="absolute top-[28%] left-[5%] w-7 text-pink-400/22 rotate-[-12deg]" delay={0.3} />
      <Lipstick className="absolute bottom-[18%] right-[28%] w-6 text-purple-400/18 rotate-[18deg]" delay={0.6} />
      <Petal className="absolute bottom-32 right-[8%] w-8 text-pink-400/22 rotate-[-15deg]" delay={0.4} />
      <Petal className="absolute top-[20%] right-[35%] w-7 text-purple-300/18 rotate-[20deg]" delay={0.4} />
      <Lashes className="absolute top-[52%] left-[8%] w-12 text-purple-400/22" delay={0.4} />
      <Lashes className="absolute bottom-[45%] right-[12%] w-11 text-pink-400/18" delay={0.5} />
      <Drop className="absolute top-[42%] right-[18%] w-5 text-pink-300/25" delay={0.3} />
      <Drop className="absolute bottom-20 left-[22%] w-4 text-purple-300/22" delay={0.6} />
      <Heart className="absolute top-[68%] right-[12%] w-6 text-pink-400/22 rotate-[12deg]" delay={0.5} />
      <Heart className="absolute top-[12%] left-[35%] w-5 text-pink-400/18 rotate-[-12deg]" delay={0.4} />
      <Sparkle className="absolute top-20 right-[22%] w-5 text-gold/22" delay={0.5} />
      <Sparkle className="absolute bottom-[55%] left-[18%] w-4 text-pink-400/22" delay={0.4} />
      <Sparkle className="absolute top-[80%] right-[40%] w-3 text-gold/20" delay={0.6} />
      <Flower className="absolute top-32 left-[20%] w-8 text-purple-300/18" delay={0.6} />
      <Flower className="absolute bottom-12 right-[22%] w-9 text-pink-300/16" delay={0.7} />
      <BrushStroke className="absolute top-[20%] right-0 w-44 h-8 text-pink-300/16" delay={0.3} />
      <BrushStroke className="absolute bottom-[35%] left-0 w-40 h-7 text-purple-300/14" delay={0.5} />
      <Pearls className="absolute bottom-[35%] left-0 w-44 text-purple-300/16" delay={0.6} />
      <Pearls className="absolute top-[72%] right-0 w-40 text-pink-300/14" delay={0.7} />
      <Compact className="absolute bottom-44 left-[5%] w-10 text-pink-300/16" delay={0.5} />
      <Compact className="absolute top-[42%] right-[5%] w-8 text-purple-300/14" delay={0.4} />
      <Perfume className="absolute bottom-[60%] right-[35%] w-7 text-pink-400/15 rotate-[8deg]" delay={0.5} />
      <ButterflyAbstract className="absolute top-[58%] right-[40%] w-10 text-purple-300/16" delay={0.5} />
      <MakeupBrush className="absolute top-[35%] left-[28%] w-5 text-pink-400/20 rotate-[15deg]" delay={0.4} />
      <NailAlmond className="absolute bottom-[12%] left-[8%] w-5 text-pink-300/16 rotate-[10deg]" delay={0.6} />
      <Leaf className="absolute top-[78%] left-[15%] w-7 text-purple-300/14 rotate-[-20deg]" delay={0.7} />
      <Ring className="absolute top-[5%] left-[3%] w-14 text-pink-300/12" delay={0.3} />
      <Ring className="absolute bottom-[8%] right-[3%] w-12 text-purple-300/12" delay={0.7} />
      <Dots className="absolute bottom-16 right-[15%] w-20 text-gold/16" delay={0.4} count={4} />
      <Dots className="absolute top-[55%] left-[40%] w-18 text-purple-300/14" delay={0.5} count={4} />
    </div>
  )
}
