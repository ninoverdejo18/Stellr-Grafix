import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import styles from './Testimonials.module.css'

const reviews = [
  {
    name: 'Maria Santos',
    role: 'May-ari ng Maliit na Negosyo',
    avatar: 'MS',
    rating: 5,
    text: 'Napakaganda ng pagkakagawa ng aming signage at business cards. Malinis ang design, mataas ang kalidad ng print, at mas maaga pa sa inaasahang oras ang delivery. Siguradong uulit kami ng order!'
  },
  {
    name: 'Kevin Reyes',
    role: 'Event Organizer',
    avatar: 'KR',
    rating: 5,
    text: 'Nagpagawa kami ng mga tarpaulin para sa company event at sobrang professional ng resulta. Malinaw ang print, mabilis ang serbisyo, at sulit sa presyo. Highly recommended!'
  },
  {
    name: 'Jasmine Dela Cruz',
    role: 'May-ari ng Cake Business',
    avatar: 'JD',
    rating: 5,
    text: 'Sobrang ganda ng design ng product labels at stickers ko. Marami sa mga customer ko ang nagtatanong kung saan ko ito ipinagawa. Talagang babalik ako para sa susunod na orders.'
  },
  {
    name: 'Angelo Bautista',
    role: 'Estudyante',
    avatar: 'AB',
    rating: 5,
    text: 'Kailangan namin ng tarpaulin nang biglaan para sa school event at agad nila itong nagawa. Maganda ang quality ng print at napakabilis ng serbisyo. Maraming salamat!'
  },
  {
    name: 'Lhea Mendoza',
    role: 'Bride',
    avatar: 'LM',
    rating: 5,
    text: 'Napakaganda ng aming wedding invitations. Eksaktong-eksakto sa gusto naming disenyo at napakaganda ng pagkakaprint. Mas naging espesyal ang aming kasal dahil sa kanilang mahusay na trabaho.'
  },
  {
    name: 'Carlo Villanueva',
    role: 'May-ari ng Restaurant',
    avatar: 'CV',
    rating: 5,
    text: 'Mula sa menu design hanggang sa mga wall graphics, maayos at propesyonal nilang naasikaso ang lahat. Madaling kausap at mabilis tumugon. Isa sa pinakamahusay na printing at design services na nasubukan namin.'
  },
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
