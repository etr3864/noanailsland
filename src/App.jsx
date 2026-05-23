import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { WHATSAPP_URL } from './config/constants'

const openWhatsApp = () => window.open(WHATSAPP_URL, '_blank')

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero onCtaClick={openWhatsApp} />
        <Works />
        <Services />
        <Testimonials />
        <Location />
      </main>
      <FloatingWhatsApp onClick={openWhatsApp} />
    </>
  )
}
