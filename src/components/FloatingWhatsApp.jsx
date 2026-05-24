import useScrollPosition from '../hooks/useScrollPosition'

export default function FloatingWhatsApp({ onClick }) {
  const showButton = useScrollPosition(600)

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-4 left-4 right-4 z-50 py-4 min-h-[56px] rounded-full glass-btn text-white font-bold text-lg cursor-pointer max-w-lg mx-auto flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.97] transition-all duration-400 ${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      לחצי כאן ונקבע לך תור
    </button>
  )
}
