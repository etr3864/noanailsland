import { useState, useRef } from 'react'

export default function BeforeAfterSlider({ beforeSrc, afterSrc, index }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updatePosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percent)
  }

  const handleStart = (e) => {
    isDragging.current = true
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    updatePosition(clientX)
  }

  const handleMove = (e) => {
    if (!isDragging.current) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    updatePosition(clientX)
  }

  const handleEnd = () => {
    isDragging.current = false
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] w-full rounded-lg border border-gold/30 overflow-hidden cursor-col-resize select-none touch-none"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {/* After (full background) */}
      <div className="absolute inset-0">
        {afterSrc ? (
          <img src={afterSrc} alt="אחרי" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gold/10 flex items-center justify-center text-beige/40 text-sm">
            אחרי {index + 1}
          </div>
        )}
      </div>

      {/* Before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        {beforeSrc ? (
          <img src={beforeSrc} alt="לפני" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-bg-primary flex items-center justify-center text-beige/40 text-sm border-r border-gold/20">
            לפני {index + 1}
          </div>
        )}
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-bg-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-2 right-2 text-xs bg-bg-primary/70 text-beige px-2 py-0.5 rounded">לפני</span>
      <span className="absolute top-2 left-2 text-xs bg-bg-primary/70 text-beige px-2 py-0.5 rounded">אחרי</span>
    </div>
  )
}
