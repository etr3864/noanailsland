import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_URL, WEBHOOK_URL } from '../config/constants'

export default function ContactSheet({ open, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sending, setSending] = useState(false)

  const isValid = name.trim().length >= 2 && /^0\d{8,9}$/.test(phone.replace(/[-\s]/g, ''))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValid || sending) return

    setSending(true)

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.replace(/[-\s]/g, ''),
          timestamp: new Date().toISOString(),
        }),
      })
    } catch {
      // webhook failure shouldn't block the user
    }

    window.open(WHATSAPP_URL, '_blank')
    setSending(false)
    onClose()
    setName('')
    setPhone('')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[70] bg-[#222] rounded-t-2xl px-6 pt-6 pb-8 max-w-lg mx-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          >
            <div className="w-10 h-1 bg-beige/20 rounded-full mx-auto mb-5" />

            <p className="text-beige text-center text-sm mb-5 leading-relaxed">
              התורים אצלי נתפסים מהר 🙈
              <br />
              <span className="text-beige/70">
                השאירי פרטים ואני אשריין לך מקום ברגע שמתפנה
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="השם שלך"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-beige/10 border border-beige/20 rounded-xl px-4 py-3 text-beige placeholder:text-beige/40 outline-none focus:border-gold transition-colors"
                autoComplete="name"
              />
              <input
                type="tel"
                placeholder="מספר טלפון"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-beige/10 border border-beige/20 rounded-xl px-4 py-3 text-beige placeholder:text-beige/40 outline-none focus:border-gold transition-colors text-left dir-ltr"
                dir="ltr"
                autoComplete="tel"
              />
              <button
                type="submit"
                disabled={!isValid || sending}
                className="w-full py-4 rounded-full bg-whatsapp text-white font-bold text-base disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.396 0-4.612-.756-6.432-2.039l-.37-.27-2.645.887.887-2.645-.27-.37A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                {sending ? 'שולח...' : 'שלחי וכתבי לי'}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
