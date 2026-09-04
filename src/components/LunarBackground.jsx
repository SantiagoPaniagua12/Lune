import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import RealisticMoon from './RealisticMoon'

// Las 9 fases exactas de la referencia fotográfica del usuario
export const LUNAR_PHASES = [
  { name: 'Luna Llena', illumination: '100%', progress: 0.00, type: 'Plenitud total' },
  { name: 'Gibosa Menguante', illumination: '85%', progress: 0.125, type: 'Disminución' },
  { name: 'Cuarto Menguante', illumination: '50%', progress: 0.25, type: 'Media luna izquierda' },
  { name: 'Menguante Cóncava', illumination: '20%', progress: 0.375, type: 'Fina curva izquierda' },
  { name: 'Luna Nueva', illumination: '0%', progress: 0.50, type: 'Oscuridad cósmica' },
  { name: 'Creciente Cóncava', illumination: '20%', progress: 0.625, type: 'Fina curva derecha' },
  { name: 'Cuarto Creciente', illumination: '50%', progress: 0.75, type: 'Media luna derecha' },
  { name: 'Gibosa Creciente', illumination: '85%', progress: 0.875, type: 'Aumento' },
  { name: 'Luna Llena', illumination: '100%', progress: 1.00, type: 'Ciclo completo' },
]

export default function LunarBackground() {
  const [scrollProgress, setScrollProgress] = useState(0)

  // Medir el scroll global de la página
  const { scrollYProgress } = useScroll()
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  })

  useEffect(() => {
    const unsubscribe = smoothScroll.on('change', (latest) => {
      setScrollProgress(Math.max(0, Math.min(1, latest)))
    })
    return () => unsubscribe()
  }, [smoothScroll])

  const phaseIndex = Math.min(
    LUNAR_PHASES.length - 1,
    Math.floor(scrollProgress * (LUNAR_PHASES.length - 0.001))
  )
  const currentPhase = LUNAR_PHASES[phaseIndex] || LUNAR_PHASES[0]

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #0E1C49 0%, #000120 70%, #000010 100%)',
      }}
    >
      {/* Campo de estrellas fijas y titilantes */}
      <div className="absolute inset-0">
        {Array.from({ length: 45 }).map((_, i) => {
          const top = `${(i * 17.3 + 7) % 100}%`
          const left = `${(i * 29.1 + 13) % 100}%`
          const size = (i % 3) + 1.2
          const duration = 2.5 + (i % 4)
          const delay = (i % 6) * 0.5

          return (
            <div
              key={i}
              className="absolute rounded-full bg-white transition-opacity"
              style={{
                top,
                left,
                width: size,
                height: size,
                opacity: (i % 3 === 0 ? 0.75 : 0.28) + 0.2 * Math.sin(i),
                boxShadow: size > 2 ? '0 0 8px rgba(218,224,238,0.9)' : 'none',
                animation: `pulse ${duration}s infinite ease-in-out ${delay}s`,
              }}
            />
          )
        })}
      </div>

      {/* Resplandor cósmico / Nebulosa azul de fondo */}
      <div
        className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(74,95,140,0.22) 0%, rgba(14,28,73,0.12) 50%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />

      {/* LUNA DE FONDO DINÁMICA: Cambia de fase conforme scrolleas */}
      <div
        className="absolute top-[6%] sm:top-[8%] md:top-[12%] right-[3%] sm:right-[6%] md:right-[10%] transition-all duration-300 pointer-events-none"
        style={{
          transform: `translateY(${scrollProgress * 30}px)`,
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex flex-col items-center"
        >
          {/* Contenedor responsive de la luna */}
          <div className="w-36 h-36 xs:w-44 xs:h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] transition-all">
            <RealisticMoon
              phaseProgress={scrollProgress}
              size="100%"
              glow={true}
              showAura={true}
              className="w-full h-full"
            />
          </div>


        </motion.div>
      </div>

      {/* Cuadrícula sutil */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(218,224,238,0.4)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
