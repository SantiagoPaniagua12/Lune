import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RealisticMoon from './RealisticMoon'
import { LUNAR_PHASES } from './LunarBackground'

/**
 * FloatingMoonTracker
 * Widget flotante que muestra la fase lunar activa en tiempo real según el scroll de la web
 */
export default function FloatingMoonTracker() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalScroll))
        setScrollProgress(progress)
      }
      setVisible(window.scrollY > 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const phaseIndex = Math.min(
    LUNAR_PHASES.length - 1,
    Math.floor(scrollProgress * (LUNAR_PHASES.length - 0.001))
  )
  const currentPhase = LUNAR_PHASES[phaseIndex] || LUNAR_PHASES[0]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip expansible */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:flex flex-col items-end px-3 py-1.5 rounded-xl backdrop-blur-md border shadow-xl"
                style={{
                  background: 'rgba(0,1,32,0.92)',
                  borderColor: 'rgba(218,224,238,0.25)',
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold" style={{ color: '#DAE0EE' }}>
                    {currentPhase.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded font-mono" style={{ background: '#4A5F8C', color: '#DAE0EE' }}>
                    {currentPhase.illumination}
                  </span>
                </div>
                <span className="text-[10px]" style={{ color: '#8F9AB6' }}>
                  Scroll {Math.round(scrollProgress * 100)}% • Clic para volver arriba
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón flotante con la luna reactiva */}
          <button
            onClick={scrollToTop}
            className="group relative w-14 h-14 rounded-full flex items-center justify-center p-1 backdrop-blur-md border transition-all duration-300 hover:scale-110 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(14,28,73,0.9) 0%, rgba(0,1,32,0.95) 100%)',
              borderColor: 'rgba(218,224,238,0.3)',
              boxShadow: '0 8px 30px rgba(0,1,32,0.7), 0 0 15px rgba(74,95,140,0.35)',
            }}
            aria-label="Volver arriba"
            title={`Fase lunar: ${currentPhase.name} (${currentPhase.illumination})`}
          >
            <RealisticMoon
              phaseProgress={scrollProgress}
              size={42}
              glow={true}
              showAura={false}
            />

            {/* Borde circular que avanza con el scroll */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="rgba(218,224,238,0.15)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="#DAE0EE"
                strokeWidth="2.5"
                strokeDasharray="163"
                strokeDashoffset={163 - (163 * scrollProgress)}
                strokeLinecap="round"
                fill="none"
                style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
