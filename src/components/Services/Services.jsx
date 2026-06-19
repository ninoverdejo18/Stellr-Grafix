import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiPenTool, FiPrinter, FiCreditCard, FiFileText, FiGift, FiTag, FiMaximize2 } from 'react-icons/fi'
import styles from './Services.module.css'

const services = [
  { icon: FiPenTool, title: 'Graphic Design', desc: 'Logos, social media graphics, layouts, and brand identity — designed to stand out.', color: 'var(--primary)', bg: 'var(--primary-dim)' },
  { icon: FiPrinter, title: 'Tarpaulin Printing', desc: 'Vibrant, weather-resistant tarps for events, promotions, and storefronts.', color: 'var(--secondary)', bg: 'var(--secondary-dim)' },
  { icon: FiCreditCard, title: 'Business Cards', desc: 'Premium-feel business cards with custom finishes. First impressions that last.', color: '#FF6B6B', bg: 'rgba(255,107,107,0.12)' },
  { icon: FiFileText, title: 'Flyers & Brochures', desc: 'Eye-catching flyers and tri-fold brochures for events, promotions, and services.', color: '#FFD93D', bg: 'rgba(255,217,61,0.12)' },
  { icon: FiGift, title: 'Invitations', desc: 'Elegant printed invitations for weddings, debuts, birthdays, and corporate events.', color: '#C77DFF', bg: 'rgba(199,125,255,0.12)' },
  { icon: FiTag, title: 'Stickers & Labels', desc: 'Custom die-cut stickers, product labels, and waterproof vinyl decals.', color: 'var(--primary)', bg: 'var(--primary-dim)' },
  { icon: FiMaximize2, title: 'Large Format Printing', desc: 'Banners, posters, foam boards, and backdrops printed in stunning large scale.', color: 'var(--secondary)', bg: 'var(--secondary-dim)' },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Services We Offer</h2>
          <p className="section-subtitle">From your first logo to a full print run — we have every creative need covered.</p>
        </motion.div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.div key={s.title} className={styles.card}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }} whileHover={{ y: -4 }}>
              <div className={styles.iconWrap} style={{ background: s.bg, color: s.color }}>
                <s.icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <a href="#contact" className={styles.cardLink} style={{ color: s.color }}>Get a Quote →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
