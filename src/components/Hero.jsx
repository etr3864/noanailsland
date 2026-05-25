import { useRef, useState, useCallback } from 'react'
import { HeroDecor } from './SectionDecor'
import { ADDRESS, HOURS, WAZE_URL } from '../config/constants'

const HERO_VIDEO = 'https://res.cloudinary.com/daowx6msw/video/upload/v1779744674/hero_video_hq_izmiah.mp4'
const HERO_POSTER = 'https://res.cloudinary.com/daowx6msw/video/upload/so_0,w_720,q_auto,f_jpg/v1779744674/hero_video_hq_izmiah.jpg'

function VideoControls({ videoRef }) {
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      setPlaying(false)
    }
  }, [videoRef])

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }, [videoRef])

  const skip = useCallback((seconds) => {
    if (!videoRef.current) return
    videoRef.current.currentTime += seconds
  }, [videoRef])

  const goFullscreen = useCallback(() => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen()
    } else if (videoRef.current?.webkitEnterFullscreen) {
      videoRef.current.webkitEnterFullscreen()
    }
  }, [videoRef])

  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-black/20 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <button onClick={() => skip(-5)} className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white transition-colors" aria-label="5 שניות אחורה">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.5 3C17.15 3 21.08 6.03 22.44 10.22l-1.9.63C19.34 7.27 16.18 5 12.5 5 7.81 5 4.01 8.58 3.6 13H6l-4 4-4-4h2.6C1.01 7.48 6.24 3 12.5 3zM7 13h2v4H7v-4zm4-2h2v6h-2v-6zm4-1h2v7h-2V10z"/></svg>
        </button>
        <button onClick={togglePlay} className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white transition-colors" aria-label={playing ? 'עצירה' : 'הפעלה'}>
          {playing ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>
        <button onClick={() => skip(5)} className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white transition-colors" aria-label="5 שניות קדימה">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.5 3C6.85 3 2.92 6.03 1.56 10.22l1.9.63C4.66 7.27 7.82 5 11.5 5c4.69 0 8.49 3.58 8.9 8H18l4 4 4-4h-2.6C22.99 7.48 17.76 3 11.5 3zM17 13h-2v4h2v-4zm-4-2h-2v6h2v-6zm-4-1H7v7h2V10z"/></svg>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={toggleMute} className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white transition-colors" aria-label={muted ? 'הפעלת קול' : 'השתקה'}>
          {muted ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
          )}
        </button>
        <button onClick={goFullscreen} className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white transition-colors" aria-label="מסך מלא">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
        </button>
      </div>
    </div>
  )
}

export default function Hero({ onCtaClick }) {
  const videoRef = useRef(null)

  return (
    <section id="hero" className="relative min-h-screen px-5 pt-24 pb-10 flex flex-col overflow-hidden section-hero grain contour">
      <HeroDecor />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />

      <span className="absolute top-[5px] right-3 text-[9px] text-beige/30">בס״ד</span>

      <div className="flex-1 flex flex-col items-center justify-center mt-6">
        <h1 className="anim-hero-title text-2xl md:text-3xl font-bold text-center text-beige leading-snug mb-2">
          לפני שאת קובעת תור,{' '}
          <span className="text-gold">תראי את זה</span>
        </h1>

        <div className="anim-hero-video relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
          <video
            ref={videoRef}
            src={HERO_VIDEO}
            poster={HERO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <VideoControls videoRef={videoRef} />
        </div>

        <button
          onClick={onCtaClick}
          className="anim-hero-cta w-full max-w-sm py-4 rounded-full glass-btn text-white font-bold text-lg cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-transform mb-5"
        >
          בואי נקבע לך תור
        </button>

        <p className="anim-hero-proof text-beige/50 text-xs text-center mb-6">
          עשרות לקוחות קבועות בבאר שבע
        </p>

        <div className="anim-hero-info text-center text-beige/50 text-sm space-y-1 border-t border-gold/10 pt-5">
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>{ADDRESS}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.41l3.3 3.3-1.42 1.42L11 13.59V7h2v5.41z" />
            </svg>
            <span>{HOURS}</span>
          </p>
          <a
            href={WAZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gold/70 underline underline-offset-2 text-xs mt-1"
          >
            נווטי בוויז
          </a>
        </div>
      </div>
    </section>
  )
}
