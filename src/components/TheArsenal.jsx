import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const TheArsenal = () => (
  <section id="arsenal" className="portfolio-section arsenal-section" aria-labelledby="arsenal-title">
    <div className="section-shell">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="section-kicker">TECH STACK</p>
        <h2 id="arsenal-title">The Arsenal</h2>
        <p>Tools I have used across web, backend, database, deployment, and interactive projects.</p>
      </motion.div>
      <div className="arsenal-grid">
        {skills.map((tool, index) => (
          <motion.div key={tool.name} className="arsenal-item" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.035 }} viewport={{ once: true }}>
            <img src={tool.icon} alt="" loading="lazy" />
            <span>{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default TheArsenal
