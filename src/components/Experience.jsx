import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { experience } from '../data/portfolio'
import './Experience.css'

const Experience = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="experience-section" ref={containerRef} aria-labelledby="experience-title">
      <div className="experience-container">
        <motion.h2 id="experience-title" className="experience-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          Experience & Focus
        </motion.h2>

        <div className="timeline-wrapper-split">
          <div className="timeline-line-container" aria-hidden="true">
            <div className="timeline-line-base" />
            <motion.div className="timeline-line-active" style={{ scaleY, originY: 0 }} />
          </div>

          <div className="timeline-rows">
            {experience.map((item, index) => {
              const reverse = index % 2 !== 0
              return (
                <article key={`${item.role}-${index}`} className="timeline-row">
                  <div className={`timeline-col left ${reverse ? 'desc-col' : 'header-col'}`}>
                    <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }}>
                      {!reverse ? (
                        <div className="header-block"><h3 className="timeline-role">{item.role}</h3><p className="timeline-company">{item.organization}</p><span className="timeline-year">{item.period}</span></div>
                      ) : <p className="timeline-description">{item.description}</p>}
                    </motion.div>
                  </div>
                  <div className="timeline-center-node" aria-hidden="true"><div className="timeline-dot" /></div>
                  <div className={`timeline-col right ${reverse ? 'header-col' : 'desc-col'}`}>
                    <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }}>
                      {reverse ? (
                        <div className="header-block"><h3 className="timeline-role">{item.role}</h3><p className="timeline-company">{item.organization}</p><span className="timeline-year">{item.period}</span></div>
                      ) : <p className="timeline-description">{item.description}</p>}
                    </motion.div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
