import { motion } from 'framer-motion'
import { SERVICES, CERTIFICATE_URL } from '../config/constants'
import GoldDivider from './GoldDivider'
import AboutMe from './AboutMe'
import { ServicesDecor } from './SectionDecor'

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-12 section-services bg-mesh">
      <ServicesDecor />
      <GoldDivider />

      <motion.h2
        className="text-xl font-bold text-gold text-center mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        המחירים שלי
      </motion.h2>
      <motion.p
        className="text-beige/60 text-center text-sm mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.2 }}
      >
        בלי הפתעות בסוף, מה שכתוב זה מה שמשלמים
      </motion.p>

      <div className="max-w-sm mx-auto space-y-3">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
              service.highlighted
                ? 'border-2 border-gold bg-gold/5 shadow-[0_0_15px_rgba(201,168,76,0.1)]'
                : 'border border-beige/10 hover:border-beige/20'
            }`}
          >
            <span className={`text-sm ${service.highlighted ? 'font-bold text-white' : 'text-beige/80'}`}>
              {service.name}
            </span>
            <span className={`font-bold whitespace-nowrap mr-3 ${
              service.highlighted ? 'text-gold text-lg' : 'text-beige'
            }`}>
              {service.price}₪
            </span>
          </div>
        ))}
      </div>

      <AboutMe />

      {/* Certificate */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-3"
        initial={{ opacity: 0, rotate: 2 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="text-beige/80 text-sm font-bold">ההסמכה המקצועית שלי:</span>
        <img
          src={CERTIFICATE_URL}
          alt="תעודת הסמכה מקצועית"
          className="w-56 md:w-72 object-contain rounded-lg border border-gold/30"
        />
      </motion.div>
    </section>
  )
}
