import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Loader } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Scene from './Scene'
import StaggeredMenu from './components/StaggeredMenu'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import TheArsenal from './components/TheArsenal'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'
import { navigation, profile, socials } from './data/portfolio'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  useGSAP(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=80%',
          pin: true,
          scrub: true,
        },
      })

      tl.fromTo(textRef.current, { y: '12vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' })
    })

    return () => media.revert()
  }, { scope: containerRef })

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ParticlesBackground />

      <StaggeredMenu
        isFixed
        items={navigation}
        socialItems={socials}
        colors={['#0F172A', '#1E293B', '#334155']}
        accentColor="#FF8C00"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#FF8C00"
      />

      <Loader />

      <main id="main-content">
        <section
          ref={containerRef}
          className="pin-container"
          aria-labelledby="hero-title"
          style={{ width: '100%', minHeight: '100dvh', position: 'relative', overflow: 'hidden' }}
        >
          <div className="hero-container" aria-hidden="true">
            <Canvas
              dpr={[1, 1.35]}
              camera={{ position: [0, 0, 8], fov: 35 }}
              gl={{ antialias: false, stencil: false, alpha: true, powerPreference: 'high-performance' }}
              style={{ width: '100%', height: '100%' }}
            >
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
              <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={0.3} mipmapBlur intensity={1.15} radius={0.45} />
                <Vignette eskil={false} offset={0.12} darkness={0.95} />
              </EffectComposer>
            </Canvas>
          </div>

          <div className="hero-copy" ref={textRef}>
            <p className="hero-kicker">PORTFOLIO · 2026</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-headline">{profile.headline}</p>
            <div className="hero-actions">
              <button type="button" className="button-primary" onClick={scrollToProjects}>View Projects</button>
              <a className="button-secondary" href={`mailto:${profile.email}`}>Contact Me</a>
              <a className="button-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <About />
        <Experience />
        <Projects />
        <Certificates />
        <TheArsenal />
        <Contact />
      </main>
    </>
  )
}

export default App
