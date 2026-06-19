import { motion } from 'framer-motion'
import { FiArrowRight, FiFacebook } from 'react-icons/fi'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
})

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>
      
      <div className={`container ${styles.content}`}>
        <motion.div className={styles.badge} {...fadeUp(0)}>
          <span className={styles.badgeDot} />
          We are accepting clients — North Caloocan City & nearby areas
        </motion.div>

        <motion.h1 className={styles.headline} {...fadeUp(0.1)}>
          Creative Designs<br />
          <span className={styles.accent}>Professional</span> Prints<br />
          Lasting Impressions
        </motion.h1>
        <motion.p className={styles.sub} {...fadeUp(0.2)}>
          We help businesses, professionals, and organizations across Caloocan and Metro Manila transform their ideas into impactful visual solutions—from creative graphic design and branding to premium-quality print materials that leave a lasting impression.
        </motion.p>
        <motion.div className={styles.stats} {...fadeUp(0.4)}>
          {[
            { num: '500+', label: 'Projects Done' },
            { num: '200+', label: 'Happy Clients' },
            { num: '5★', label: 'Avg. Rating' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>
              <br></br>
                <motion.div className={styles.ctas} {...fadeUp(0.3)}>
          <a href="#portfolio" className="btn-primary">
            View Works <FiArrowRight />
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
