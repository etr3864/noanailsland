import { motion } from 'framer-motion'

const PORTRAIT_URL = 'https://res.cloudinary.com/daowx6msw/image/upload/q_auto,f_auto,w_300/v1764095491/%D7%A0%D7%95%D7%A2%D7%95%D7%A9_dsqfyp.png'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function AboutMe() {
  return (
    <motion.div
      className="mt-12 mb-6 max-w-sm mx-auto flex flex-col items-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        className="w-44 h-44 rounded-full border-2 border-gold/30 mb-4 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={PORTRAIT_URL}
          alt="נועה תורגמן"
          className="w-full h-[130%] object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
      <h3 className="text-lg font-bold text-gold mb-2">נועה טורגמן</h3>
      <p className="text-beige/70 text-sm text-center leading-relaxed">
        היי, אני נועה, בת 22, אמא ונשואה באושר.
        <br />
        למדתי ציפורניים בצורה מקצועית ועכשיו גם לומדת טיפולי פנים.
        <br />
        אני אוהבת את מה שאני עושה ואת זה רואים בתוצאות.
        <br />
        אצלי כל לקוחה מקבלת יחס אישי, סבלנות, ותוצאה מושלמת.
      </p>
    </motion.div>
  )
}
