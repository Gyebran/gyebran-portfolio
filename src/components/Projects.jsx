import { motion } from 'framer-motion'
import { ExternalLink, Github, LockKeyhole } from 'lucide-react'
import { projects } from '../data/portfolio'

const Projects = () => (
  <section id="projects" className="portfolio-section" aria-labelledby="projects-title">
    <div className="section-shell">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="section-kicker">SELECTED WORK</p>
        <h2 id="projects-title">Projects</h2>
        <p>Real projects, real stacks, and links you can inspect.</p>
      </motion.div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article key={project.id} className={`project-card ${project.featured ? 'project-card-featured' : ''}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.05 }} viewport={{ once: true }}>
            {project.image ? <img src={project.image} alt={`${project.title} interface preview`} className="project-image" loading="lazy" /> : <div className="project-placeholder" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>}
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-list" aria-label={`${project.title} technology stack`}>
                {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
              <div className="project-links">
                {project.repo ? <a href={project.repo} target="_blank" rel="noopener noreferrer"><Github size={17} /> {project.repoLabel}</a> : <span className="project-private"><LockKeyhole size={17} /> {project.repoLabel}</span>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={17} /> Live Demo</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
