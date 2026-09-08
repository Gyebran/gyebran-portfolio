import { Mail, Github, MessageCircle, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

const Contact = () => (
  <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <div className="contact-shell">
      <p className="section-kicker">LET'S CONNECT</p>
      <h2 id="contact-title">Have a project, role, or opportunity in mind?</h2>
      <p>{profile.availability}</p>
      <div className="contact-actions">
        <a className="button-primary" href={`mailto:${profile.email}`}><Mail size={18} /> Email Me</a>
        <a className="button-secondary" href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp <ArrowUpRight size={16} /></a>
        <a className="button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={16} /></a>
      </div>
      <div className="contact-meta">
        <span>{profile.email}</span>
        <span>Bandung, Indonesia</span>
      </div>
    </div>
    <footer className="site-footer">
      <span>© 2026 {profile.name}</span>
      <span>Built with React, Three.js, GSAP & curiosity.</span>
    </footer>
  </section>
)

export default Contact
