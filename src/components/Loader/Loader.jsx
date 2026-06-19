import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Loader.module.css'

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2400)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.logoWrap}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.logoMark}>
          <span className={styles.s}>S</span>
        </div>
        <motion.div
          className={styles.wordmark}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className={styles.name}>Stellr</span>
          <span className={styles.dot}>  </span>
          <span className={styles.grafix}>Grafix</span>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.tagline}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
      </motion.div>

      <motion.div
        className={styles.bar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  )
}
