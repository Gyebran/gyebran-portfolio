import React from 'react'
import { GraduationCap, Layers, Sparkles, Infinity as InfinityIcon } from 'lucide-react'
import TiltedCard from './TiltedCard'
import DecryptedText from './DecryptedText'
import { profile } from '../data/portfolio'
import './About.css'

const About = () => (
  <section id="about" className="about-section" aria-labelledby="about-title">
    <div className="about-container">
      <div className="about-left">
        <TiltedCard
          imageSrc={profile.avatar}
          altText={`${profile.name} profile portrait`}
          captionText={`${profile.shortName} — Full-Stack Developer`}
          containerHeight="500px"
          containerWidth="400px"
          imageHeight="500px"
          imageWidth="400px"
          rotateAmplitude={10}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          overlayContent={<h2 className="tilted-card-demo-text">{profile.name}</h2>}
        />
      </div>

      <div className="about-right">
        <DecryptedText
          text="My Profile"
          animateOn="view"
          speed={70}
          maxIterations={16}
          revealDirection="start"
          sequential
          className="text-neon-orange font-bold tracking-widest uppercase"
          encryptedClassName="text-gray-600"
          parentClassName="about-eyebrow"
        />
        <h2 id="about-title" className="sr-only">About {profile.name}</h2>
        <h3 className="about-subheadline">Code, systems thinking, and practical digital products.</h3>
        <p className="about-bio">{profile.summary}</p>

        <div className="about-grid">
          <article className="about-card"><GraduationCap className="about-icon" size={30} /><h4>Information Systems</h4><p>Telkom University</p></article>
          <article className="about-card"><Layers className="about-icon" size={30} /><h4>Full-Stack Development</h4><p>Frontend, backend, APIs & databases</p></article>
          <article className="about-card"><Sparkles className="about-icon" size={30} /><h4>AI Integration</h4><p>AI-assisted application workflows</p></article>
          <article className="about-card"><InfinityIcon className="about-icon" size={30} /><h4>Adaptive Stack</h4><p>Tools selected around the problem</p></article>
        </div>
      </div>
    </div>
  </section>
)

export default About
