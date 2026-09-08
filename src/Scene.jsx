import React, { Suspense, useMemo, useRef } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { Text, Float, Stars, useTexture, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { profile } from './data/portfolio'

const FadeMaterial = shaderMaterial(
  { map: null },
  `varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
  `uniform sampler2D map; varying vec2 vUv; void main(){vec4 texColor=texture2D(map,vUv); float fade=smoothstep(0.0,0.2,vUv.y); gl_FragColor=vec4(texColor.rgb,texColor.a*fade);}`,
)

extend({ FadeMaterial })

export default function Scene() {
  const { mouse, viewport, size } = useThree()
  const textGroup = useRef()
  const isMobile = size.width < 768
  const reduceMotion = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])

  useFrame(() => {
    if (!textGroup.current || reduceMotion) return
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    textGroup.current.position.x = THREE.MathUtils.lerp(textGroup.current.position.x, -x * 0.04, 0.08)
    textGroup.current.position.y = THREE.MathUtils.lerp(textGroup.current.position.y, -y * 0.04, 0.08)
  })

  return (
    <>
      <ambientLight intensity={1.7} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#FF8C00" />
      {!isMobile && <pointLight position={[-5, 0, 5]} intensity={1.6} color="white" />}

      <Stars radius={90} depth={45} count={reduceMotion ? 700 : isMobile ? 1600 : 3500} factor={isMobile ? 3 : 4} saturation={0} fade speed={reduceMotion ? 0 : 0.6} />

      <mesh position={[0, 2, -5]}>
        <circleGeometry args={[6, isMobile ? 32 : 48]} />
        <meshBasicMaterial color="#FF4500" transparent opacity={0.12} />
      </mesh>

      <Float speed={reduceMotion ? 0 : 1.6} rotationIntensity={reduceMotion ? 0 : 0.06} floatIntensity={reduceMotion ? 0 : 0.14}>
        <group ref={textGroup} position={[0, isMobile ? 0.65 : 0, -1]}>
          <Text
            font="https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.0.8/files/montserrat-latin-800-normal.woff"
            fontSize={isMobile ? 1.25 : 2.2}
            lineHeight={0.8}
            letterSpacing={-0.05}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.015}
            outlineColor="#333"
          >
            GYEBRAN
            <meshStandardMaterial color="white" toneMapped={false} emissive="white" emissiveIntensity={0.08} />
          </Text>
        </group>
      </Float>

      <Suspense fallback={null}>
        <HeroItem mouse={mouse} isMobile={isMobile} reduceMotion={reduceMotion} />
      </Suspense>
    </>
  )
}

function HeroItem({ mouse, isMobile, reduceMotion }) {
  const heroGroup = useRef()
  const texture = useTexture(profile.avatar)
  const aspect = texture.image.width / texture.image.height
  const height = isMobile ? 2.45 : 3.2
  const width = height * aspect

  useFrame((state) => {
    if (!heroGroup.current || reduceMotion) return
    const x = (mouse.x * state.viewport.width) / 2
    const y = (mouse.y * state.viewport.height) / 2
    heroGroup.current.position.x = THREE.MathUtils.lerp(heroGroup.current.position.x, x * 0.055, 0.08)
    heroGroup.current.position.y = THREE.MathUtils.lerp(heroGroup.current.position.y, y * 0.055 + (isMobile ? 0.15 : -0.3), 0.08)
    heroGroup.current.rotation.y = THREE.MathUtils.lerp(heroGroup.current.rotation.y, mouse.x * 0.07, 0.08)
  })

  return (
    <Float speed={reduceMotion ? 0 : 2} rotationIntensity={reduceMotion ? 0 : 0.1} floatIntensity={reduceMotion ? 0 : 0.3} floatingRange={[-0.08, 0.08]}>
      <group ref={heroGroup} position={[0, isMobile ? 0.15 : -0.3, 1.5]}>
        <mesh scale={[width, height, 1]}>
          <planeGeometry />
          <fadeMaterial map={texture} transparent side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}
