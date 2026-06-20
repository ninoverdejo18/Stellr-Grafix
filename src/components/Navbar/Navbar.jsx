import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFacebook, FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={close}>
          <img
            src="/favicon1.svg"
            alt="Stellr Grafix"
            className={styles.logoImage}
          />

          <span className={styles.logoText}>
            Stellr
            <span className={styles.logoDot}> </span>
            <span className={styles.logoGray}>Grafix</span>
          </span>
        </a>

        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            href="https://www.facebook.com/StellrGrafix"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fbBtn}
          >
            <FiFacebook size={16} />
            Facebook
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map(link => (
                <li key={link.label}>
<a
  href={link.href}
  className={styles.mobileLink}
  onClick={(e) => {
    e.preventDefault()

    const target = document.querySelector(link.href)

    close()

    setTimeout(() => {
      target?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }}
>
  {link.label}
</a>
                </li>
              ))}

              <li>
                <a
                  href="https://www.facebook.com/StellrGrafix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileFb}
                  onClick={close}
                >
                  <FiFacebook size={16} />
                  Facebook Page
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}