'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const WaveLoader = () => {
  const loaderRef = useRef(null)
  const overlayRef = useRef(null)
  const pathsRef = useRef([])
  const logoRef = useRef(null)

  useEffect(() => {
    const numPoints = 10
    const numPaths = 3
    const delayPointsMax = 0.5
    const delayPerPath = 0.3
    const duration = 1.2 // total 3s with all delays

    const pointsDelay = []
    const allPoints = []

    for (let i = 0; i < numPaths; i++) {
      const points = []
      for (let j = 0; j < numPoints; j++) {
        points.push(100)
      }
      allPoints.push(points)
    }

    const render = () => {
      for (let i = 0; i < numPaths; i++) {
        const path = pathsRef.current[i]
        const points = allPoints[i]

        let d = `M 0 ${points[0]} C`
        for (let j = 0; j < numPoints - 1; j++) {
          const p = ((j + 1) / (numPoints - 1)) * 100
          const curveIntensity = 0.8
          const cp = p - (1 / (numPoints - 1)) * 100 / 2 * curveIntensity
          d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`
        }
        d += ` V 100 H 0 Z`
        path.setAttribute('d', d)
      }
    }

    const animateIn = () => {
      const tl = gsap.timeline({ onUpdate: render })

      // Logo fade + scale
      tl.to(logoRef.current, {
        opacity: 0,
        scale: 1.2,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.6,
      })

      // Wave animation
      for (let i = 0; i < numPoints; i++) {
        pointsDelay[i] = Math.random() * delayPointsMax
      }

      for (let i = 0; i < numPaths; i++) {
        const points = allPoints[i]
        const pathDelay = delayPerPath * i

        for (let j = 0; j < numPoints; j++) {
          const delay = pointsDelay[j]
          tl.to(points, { [j]: 0 }, pathDelay + delay)
        }
      }

      // Fade out loader
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.out',
        delay: 0.3,
        onComplete: () => {
          if (loaderRef.current) loaderRef.current.style.display = 'none'
        },
      })
    }

    animateIn()
  }, [])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Center Logo */}
      <div ref={logoRef} className="relative z-20">
        <Image
          src="/images/logo.png"
          alt="MoltenX"
          width={160}
          height={26}
          className="h-5 w-auto lg:h-[26px] lg:w-[160px] 3xl:h-8 3xl:w-[196px]"
        />
      </div>

      {/* Lava Wave SVG */}
      <svg
        ref={overlayRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* All gradients use your new theme: molten orange to yellow */}
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00c99b" />
            <stop offset="100%" stopColor="#ff0ea1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#110046" />
            <stop offset="100%" stopColor="#32004a" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8F3C00" />
            <stop offset="100%" stopColor="#FDF83A" />
          </linearGradient>
        </defs>

        {[1, 2, 3].map((_, i) => (
          <path
            key={i}
            ref={(el) => {
              if (el) pathsRef.current[i] = el
            }}
            fill={`url(#gradient${i + 1})`}
            className="shape-overlays__path"
          />
        ))}
      </svg>
    </div>
  )
}

export default WaveLoader
