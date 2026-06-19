import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Portfolio.module.css'

const categories = ['All', 'Design', 'Print', 'Branding']

const items = [
  { id: 1, title: 'Brand Identity', cat: 'Branding', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80' },
  { id: 2, title: 'Event Tarpaulin', cat: 'Print', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 3, title: 'Business Cards', cat: 'Print', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80' },
  { id: 4, title: 'Social Media Kit', cat: 'Design', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80' },
  { id: 5, title: 'Logo Design', cat: 'Branding', img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80' },
  { id: 6, title: 'Flyer Design', cat: 'Design', img: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&q=80' },
  { id: 7, title: 'Product Labels', cat: 'Print', img: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=600&q=80' },
  { id: 8, title: 'Birthday Invite', cat: 'Design', img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80' },
  { id: 9, title: 'Banner Design', cat: 'Print', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80' },
]

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? items : items.filter(i => i.cat === active)

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">A glimpse of what we've created for our clients across different industries.</p>
        </motion.div>

        <motion.div className={styles.filters} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.item}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              layout
            >
              <div className={styles.imgWrap}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className={styles.overlay}>
                  <span className={styles.overlayTag}>{item.cat}</span>
                  <span className={styles.overlayTitle}>{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className={styles.cta} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
          <a href="#contact" className="btn-primary">Start Your Project →</a>
        </motion.div>
      </div>
    </section>
  )
}
