import useScrollPosition from '../hooks/useScrollPosition'

export default function FloatingWhatsApp({ onClick }) {
  const showButton = useScrollPosition(200)

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-3 left-4 right-4 z-50 py-3 rounded-full glass text-beige/90 font-bold text-sm cursor-pointer max-w-xs mx-auto flex items-center justify-center hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 ${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      לחצי כאן ונקבע לך תור
    </button>
  )
}
