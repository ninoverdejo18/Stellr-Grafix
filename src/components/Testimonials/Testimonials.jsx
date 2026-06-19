import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import styles from './Testimonials.module.css'

const reviews = [
  { name: 'Maria Santos', role: 'Small Business Owner', avatar: 'MS', rating: 5, text: 'stellr.grafix designed our store signage and business cards. The quality is amazing and they delivered ahead of schedule. Will definitely order again!' },
  { name: 'Kevin Reyes', role: 'Event Organizer', avatar: 'KR', rating: 5, text: 'Ordered 10 tarpaulins for our company event and everything looked sharp and professional. Fast turnaround, great price. Highly recommended!' },
  { name: 'Jasmine Dela Cruz', role: 'Cake Business Owner', avatar: 'JD', rating: 5, text: 'They designed my product labels and stickers — so beautiful! My customers kept asking where I got them. 100% coming back for more orders.' },
  { name: 'Angelo Bautista', role: 'College Student', avatar: 'AB', rating: 5, text: 'Needed a last-minute tarpaulin for our school event. They pulled it off in just a few hours and the print quality was excellent. Thank you!' },
  { name: 'Lhea Mendoza', role: 'Bride', avatar: 'LM', rating: 5, text: 'Our wedding invitations were absolutely stunning. Every detail was perfect — exactly what I envisioned. stellr.grafix made our big day even more special.' },
  { name: 'Carlo Villanueva', role: 'Restaurant Owner', avatar: 'CV', rating: 5, text: 'From menu designs to wall graphics, they handled everything with professionalism. The team is communicative and responsive. Best design shop in Caloocan!' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">Client Love</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real feedback from real people who trusted us with their brand.</p>
        </motion.div>

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <motion.div key={r.name} className={styles.card}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}>
              <div className={styles.stars}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <FiStar key={j} className={styles.star} size={14} />
                ))}
              </div>
              <p className={styles.text}>{r.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.avatar}</div>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.role}>{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
