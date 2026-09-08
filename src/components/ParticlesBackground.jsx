import React, { useEffect, useState } from 'react'
import Particles from '../Particles'

const ParticlesBackground = () => {
  const [mode, setMode] = useState({ mobile: false, reduced: false })

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setMode({ mobile: mobileQuery.matches, reduced: motionQuery.matches })
    update()
    mobileQuery.addEventListener('change', update)
    motionQuery.addEventListener('change', update)
    return () => {
      mobileQuery.removeEventListener('change', update)
      motionQuery.removeEventListener('change', update)
    }
  }, [])

  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Particles
        particleCount={mode.reduced ? 35 : mode.mobile ? 80 : 160}
        particleSpread={10}
        speed={mode.reduced ? 0 : 0.08}
        particleColors={["#ffffff"]}
        moveParticlesOnHover={!mode.mobile && !mode.reduced}
        particleHoverFactor={0.65}
        alphaParticles={false}
        particleBaseSize={mode.mobile ? 80 : 100}
        sizeRandomness={1}
        cameraDistance={20}
        disableRotation={mode.reduced}
      />
    </div>
  )
}

export default ParticlesBackground
