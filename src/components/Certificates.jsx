import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { GlowingEffect } from './GlowingEffect'
import { certificates } from '../data/portfolio'
import './Certificates.css'

const Certificates = () => {
  const carouselRef = useRef(null)
  const scroll = (direction) => carouselRef.current?.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' })

  return (
    <section id="certificates" className="certificates-section" aria-labelledby="certificates-title">
      <div className="certificates-container">
        <motion.h2 id="certificates-title" className="certificates-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Certifications & Achievement</motion.h2>
        <p className="certificates-intro">Selected credentials and achievements that support my technical and product-building journey.</p>
        <div className="carousel-wrapper">
          <button className="carousel-control-btn prev" onClick={() => scroll('left')} aria-label="Previous certificates"><ChevronLeft size={24} /></button>
          <div className="certificates-carousel" ref={carouselRef}>
            {certificates.map((cert, index) => (
              <motion.article key={cert.id} className="cert-card-wrapper" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.06 }} viewport={{ once: true }}>
                <GlowingEffect disabled={false} spread={40} glow proximity={80} borderWidth={2} />
                <div className="cert-card-content">
                  {cert.image ? (
                    <div className="cert-card-image-wrapper"><img src={cert.image} alt={`${cert.title} certificate`} className="cert-card-image" loading="lazy" /></div>
                  ) : (
                    <div className="cert-card-placeholder" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
                  )}
                  <div className="cert-card-body"><h3 className="cert-card-title">{cert.title}</h3><p className="cert-card-description">{cert.description}</p></div>
                </div>
              </motion.article>
            ))}
          </div>
          <button className="carousel-control-btn next" onClick={() => scroll('right')} aria-label="Next certificates"><ChevronRight size={24} /></button>
        </div>
      </div>
    </section>
  )
}

export default Certificates
