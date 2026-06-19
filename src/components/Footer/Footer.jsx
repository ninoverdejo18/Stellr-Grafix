import { FiFacebook, FiInstagram, FiMail, FiPhone } from 'react-icons/fi'
import styles from './Footer.module.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <div className={styles.logoMark}>S</div>
                <span className={styles.logoText}>
                  Stellr<span className={styles.dot}> </span><span className={styles.gray}>Grafix</span>
                </span>
              </div>
              <p className={styles.tagline}>
                Creative Designs. Professional Prints.<br />Lasting Impressions.
              </p>
              <div className={styles.socials}>
                <a href="https://www.facebook.com/StellrGrafix" target="_blank" rel="noopener noreferrer" className={styles.social}><FiFacebook size={18} /></a>
                <a href="https://www.instagram.com/stellrgrafix" target="_blank" rel="noopener noreferrer" className={styles.social}><FiInstagram size={18} /></a>
                <a href="mailto:stellr.grafix@gmail.com" className={styles.social}><FiMail size={18} /></a>
                <a href="tel:09086382191" className={styles.social}><FiPhone size={18} /></a>
              </div>
            </div>

            <div className={styles.nav}>
              <p className={styles.navTitle}>Quick Links</p>
              <ul className={styles.navList}>
                {links.map(l => (
                  <li key={l.label}><a href={l.href} className={styles.navLink}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div className={styles.contact}>
              <p className={styles.navTitle}>Contact</p>
              <div className={styles.contactList}>
                <a href="tel:09086382191" className={styles.contactItem}>
                  <FiPhone size={14} /> 0908 638 2191
                </a>
                <a href="mailto:stellr.grafix@gmail.com" className={styles.contactItem}>
                  <FiMail size={14} /> stellr.grafix@gmail.com
                </a>
                <span className={styles.contactItem} style={{ cursor: 'default' }}>
                  987 Ilang-ilang, Barangay 188, Caloocan, 1427 Metro Manila
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© 2024 Stellr Grafix — All rights reserved.</span>
            <span className={styles.poweredBy}>Powered by <span style={{ color: 'var(--primary)' }}>Niño</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
