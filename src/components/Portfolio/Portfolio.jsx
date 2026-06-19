import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Portfolio.module.css'

const categories = ['All', 'Design', 'Print', 'Branding']

const items = [
  // PRINT
  { id: 1, title: 'Photo Tile Wall Display', cat: 'Print', img: '/images/portfolio/print.jpg' },
  { id: 2, title: 'Personalized Sintra Board', cat: 'Print', img: '/images/portfolio/print1.jpg' },
  { id: 3, title: 'Personalized Sintra Board', cat: 'Print', img: '/images/portfolio/print9.jpg' },
  { id: 4, title: 'Personalized Sintra Board', cat: 'Print', img: '/images/portfolio/print2.jpg' },
  { id: 5, title: 'Personalized Sintra Board', cat: 'Print', img: '/images/portfolio/print3.jpg' },
  { id: 6, title: 'Plaque Recognition', cat: 'Print', img: '/images/portfolio/print5.jpg' },
  { id: 7, title: 'Personalized Sintra Board', cat: 'Print', img: '/images/portfolio/print4.jpg' },
  { id: 8, title: 'Personalized Sintra Board', cat: 'Print', img: '/images/portfolio/print7.jpg' },
  { id: 9, title: 'Loyalty Card', cat: 'Print', img: '/images/portfolio/print6.jpg' },

  // BRANDING
  { id: 10, title: 'Logo Design', cat: 'Branding', img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80' },

  // DESIGN
  { id: 11, title: 'Social Media Kit', cat: 'Design', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80' },
  { id: 12, title: 'Flyer Design', cat: 'Design', img: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&q=80' },
]

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? items : items.filter(i => i.cat === active)

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Gallery</h2>
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
       <div
  className={styles.imgWrap}
  onClick={() => setSelectedImage(item)}
>
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
      {selectedImage && (
  <div
    className={styles.lightbox}
    onClick={() => setSelectedImage(null)}
  >
    <div
      className={styles.lightboxContent}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={styles.closeBtn}
        onClick={() => setSelectedImage(null)}
      >
        ×
      </button>

      <img
        src={selectedImage.img}
        alt={selectedImage.title}
        className={styles.lightboxImg}
      />

      <div className={styles.lightboxInfo}>
        <span>{selectedImage.cat}</span>
        <h3>{selectedImage.title}</h3>
      </div>
    </div>
  </div>
)}
    </section>
  )
}
