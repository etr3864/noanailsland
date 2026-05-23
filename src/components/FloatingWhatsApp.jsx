import { motion, AnimatePresence } from 'framer-motion'
import useScrollPosition from '../hooks/useScrollPosition'

export default function FloatingWhatsApp({ onClick }) {
  const showButton = useScrollPosition(600)

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={onClick}
          className="fixed bottom-4 left-4 right-4 z-50 py-4 min-h-[56px] rounded-full bg-whatsapp text-white font-bold text-lg shadow-lg cursor-pointer max-w-lg mx-auto flex items-center justify-center gap-2 animate-pulse-green hover:scale-[1.02] hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span>בואי נקבע לך תור 💅</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
