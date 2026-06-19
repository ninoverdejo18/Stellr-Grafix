import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiTarget, FiEye, FiStar, FiZap, FiShield, FiHeart } from 'react-icons/fi'
import styles from './About.module.css'

const reasons = [
  {
    icon: FiShield,
    title: 'BIR Registered',
    desc: 'A legitimate and registered business committed to professional and reliable service.'
  },
  {
    icon: FiStar,
    title: 'PhilGEPS Registered',
    desc: 'Qualified to serve government agencies and public sector projects through PhilGEPS.'
  },
  {
    icon: FiZap,
    title: 'Fast Turnaround',
    desc: 'Rush orders? No problem. We deliver quality prints on time, every time.'
  },
  {
    icon: FiHeart,
    title: 'Customer-Focused',
    desc: 'We work closely with every client to ensure satisfaction from design to final print.'
  },
  {
    icon: FiShield,
    title: 'Premium Quality',
    desc: 'Using professional-grade materials and equipment for vibrant, long-lasting results.'
  }
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <FadeIn>
              <p className="section-label">About Us</p>
              <h2 className="section-title">Built in Caloocan.<br />Made for Everyone.</h2>
              <p className={styles.desc}>
We proudly serve clients in North Caloocan City and nearby areas, helping businesses, professionals, and organizations bring their ideas to life through creative graphic design, branding, and premium-quality printing services.

As a locally owned business, we take pride in handling our work in-house—from design and production to quality control—allowing us to maintain high standards, reliable turnaround times, and personalized service while creating materials that strengthen brands, capture attention, and leave lasting impressions.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className={styles.cards}>
                <div className={styles.mvCard}>
                  <div className={styles.mvIcon}><FiTarget /></div>
                  <div>
                    <h4>Mission</h4>
                    <p>To provide affordable, high-quality design and printing services that help local businesses and individuals stand out.</p>
                  </div>
                </div>
                <div className={styles.mvCard}>
                  <div className={styles.mvIcon} style={{ background: 'var(--secondary-dim)', color: 'var(--secondary)' }}><FiEye /></div>
                  <div>
                    <h4>Vision</h4>
                    <p>To be the most trusted creative partner in Caloocan — known for quality, speed, and client satisfaction.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className={styles.right}>
            <FadeIn delay={0.15}>
              <p className="section-label">Why Choose Us</p>
              <div className={styles.reasons}>
                {reasons.map((r, i) => (
                  <div key={r.title} className={styles.reason}>
                    <div className={styles.reasonIcon}><r.icon size={20} /></div>
                    <div>
                      <h4>{r.title}</h4>
                      <p>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className={styles.glassBox}>
                <div className={styles.glassRow}>
                  <span className={styles.glassNum}>3+</span>
                  <span className={styles.glassLabel}>Years in Business</span>
                </div>
                <div className={styles.glassDivider} />
                <div className={styles.glassRow}>
                  <span className={styles.glassNum}>27</span>
                  <span className={styles.glassLabel}>Services Offered</span>
                </div>
                <div className={styles.glassDivider} />
                <div className={styles.glassRow}>
                  <FiStar style={{ color: '#FFD700' }} size={20} />
                  <span className={styles.glassLabel}>Top Rated in Caloocan</span>
                </div>
                
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
