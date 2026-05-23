import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { WHATSAPP_URL } from './config/constants'

const Works = lazy(() => import('./components/Works'))
const Services = lazy(() => import('./components/Services'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Location = lazy(() => import('./components/Location'))

const openWhatsApp = () => window.open(WHATSAPP_URL, '_blank')

function SectionPlaceholder() {
  return <div className="min-h-screen" />
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero onCtaClick={openWhatsApp} />
        <Suspense fallback={<SectionPlaceholder />}>
          <Works />
          <Services />
          <Testimonials />
          <Location />
        </Suspense>
      </main>
      <FloatingWhatsApp onClick={openWhatsApp} />
    </>
  )
}
