import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiSend, FiCheck } from 'react-icons/fi'
import styles from './Contact.module.css'

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const info = [
  { icon: FiPhone, label: 'Phone', value: '0908 638 2191', href: 'tel:09086382191' },
  { icon: FiMail, label: 'Email', value: 'stellr.grafix@gmail.com', href: 'mailto:stellr.grafix@gmail.com' },
  { icon: FiMapPin, label: 'Address', value: '987 Ilang-ilang Street, Barrio Concepcion Tala, Caloocan, Philippines, 1427', href: null },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        service: form.service,
        message: form.message,
        to_name: 'stellr.grafix',
      }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Ready to start your project? Reach out and we'll get back to you fast.</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div className={styles.left} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className={styles.infoList}>
              {info.map(item => (
                <div key={item.label} className={styles.infoItem}>
                  <div className={styles.infoIcon}><item.icon size={18} /></div>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} className={styles.infoValue}>{item.value}</a>
                      : <span className={styles.infoValue}>{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socials}>
              <p className={styles.socialsLabel}>Follow us</p>
              <div className={styles.socialBtns}>
                <a href="https://www.facebook.com/StellrGrafix" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                  <FiFacebook size={18} /> Facebook
                </a>
                <a href="https://www.instagram.com/stellrgrafix" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} style={{ color: 'var(--secondary)', borderColor: 'rgba(0,187,255,0.3)' }}>
                  <FiInstagram size={18} /> Instagram
                </a>
              </div>
            </div>

            <div className={styles.mapPlaceholder}>
              <FiMapPin size={24} style={{ color: 'var(--primary)' }} />
              <div>
                <div className={styles.mapTitle}>Caloocan City</div>
                <div className={styles.mapSub}>Metro Manila, Philippines</div>
              </div>
              <a
                href="https://maps.app.goo.gl/2pz31qFiWoidgP4D6"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                View on Maps →
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.right} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Send a Message</h3>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Your Name</label>
                  <input className={styles.input} type="text" name="name" placeholder="Juan dela Cruz" value={form.name} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address</label>
                  <input className={styles.input} type="email" name="email" placeholder="juan@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Service Needed</label>
                <select className={styles.input} name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service...</option>
                  <option>Graphic Design</option>
                  <option>Tarpaulin Printing</option>
                  <option>Business Cards</option>
                  <option>Flyers & Brochures</option>
                  <option>Invitations</option>
                  <option>Stickers & Labels</option>
                  <option>Large Format Printing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Tell us about your project..." rows={5} value={form.message} onChange={handleChange} required />
              </div>

              <button
                type="submit"
                className={`${styles.submitBtn} ${status === 'success' ? styles.success : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'idle' && <><FiSend size={16} /> Send Message</>}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && <><FiCheck size={16} /> Message Sent!</>}
                {status === 'error' && 'Failed — Try Again'}
              </button>

              {status === 'error' && (
                <p className={styles.errorMsg}>Something went wrong. Please email us directly at stellr.grafix@gmail.com</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
