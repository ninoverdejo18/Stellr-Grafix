import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiPenTool,
  FiPrinter,
  FiCreditCard,
  FiFileText,
  FiGift,
  FiTag,
  FiMaximize2,
} from 'react-icons/fi'
import styles from './Services.module.css'

const services = [
  {
    icon: FiPenTool,
    title: 'Graphic Design',
    desc: 'Creative designs for branding, social media, marketing materials, and custom projects.',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    color: 'var(--primary)',
    bg: 'var(--primary-dim)',
  },

  {
    icon: FiPrinter,
    title: 'Tarpaulin Printing',
    desc: 'High-quality tarpaulins for events, promotions, businesses, and special occasions.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    color: 'var(--secondary)',
    bg: 'var(--secondary-dim)',
  },

  {
    icon: FiTag,
    title: 'Stickers & Labels',
    desc: 'Custom stickers, product labels, waterproof decals, and promotional materials.',
    img: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&q=80',
    color: '#FF6B6B',
    bg: 'rgba(255,107,107,0.12)',
  },

  {
    icon: FiCreditCard,
    title: 'Rush ID & ID Cards',
    desc: 'Rush ID pictures, PVC ID cards, company IDs, and school identification cards.',
    img: 'https://images.unsplash.com/photo-1573496773905-f5b17e717f05?w=800&q=80',
    color: '#FFD93D',
    bg: 'rgba(255,217,61,0.12)',
  },

  {
    icon: FiFileText,
    title: 'Document Services',
    desc: 'Printout, photocopy, scanning, lamination, ring binding, filing, and document preparation.',
    img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
    color: '#C77DFF',
    bg: 'rgba(199,125,255,0.12)',
  },

  {
    icon: FiGift,
    title: 'Customized Giveaways',
    desc: 'Personalized mugs, acrylic products, giveaways, souvenirs, and promotional items.',
    img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
    color: 'var(--primary)',
    bg: 'var(--primary-dim)',
  },

  {
    icon: FiMaximize2,
    title: 'Signages & Large Format Printing',
    desc: 'Signages, roll-up banners, sintra boards, wall décor, and large promotional displays.',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    color: 'var(--secondary)',
    bg: 'var(--secondary-dim)',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Services We Offer</h2>
          <p className="section-subtitle">
            Professional design, printing, and branding solutions tailored for
            businesses, organizations, and individuals.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.07,
              }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.imageWrap}>
                <img
                  src={s.img}
                  alt={s.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              <div
                className={styles.iconWrap}
                style={{
                  background: s.bg,
                  color: s.color,
                }}
              >
                <s.icon size={22} />
              </div>

              <h3 className={styles.cardTitle}>{s.title}</h3>

              <p className={styles.cardDesc}>
                {s.desc}
              </p>

              <a
                href="#contact"
                className={styles.cardLink}
                style={{ color: s.color }}
              >
                Get a Quote →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}