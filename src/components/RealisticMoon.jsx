import React from 'react'

/**
 * RealisticMoon
 * Componente que renderiza una luna fotorrealista con texturas de cráteres,
 * mares lunares, resplandor atmosférico y sombra terminadora astronómica exacta.
 * 
 * @param {number} phaseProgress - Valor continuo de 0 a 1 (0: Llena, 0.25: Menguante, 0.5: Nueva, 0.75: Creciente, 1: Llena)
 * @param {number | string} size - Diámetro en píxeles o CSS size
 * @param {boolean} glow - Si debe mostrar resplandor lunar
 * @param {string} className - Clases adicionales
 */
export default function RealisticMoon({
  phaseProgress = 0,
  size = 260,
  glow = true,
  className = '',
  showAura = true,
}) {
  const norm = ((phaseProgress % 1) + 1) % 1

  const isFullish = norm < 0.04 || norm > 0.96
  const isNewish = norm > 0.46 && norm < 0.54

  // Radio r = 50, centro (50, 50)
  const r = 50
  const cx = 50
  const cy = 50

  const phi = norm * 2 * Math.PI
  const cosPhi = Math.cos(phi)
  const rxTerminator = Math.max(0.001, Math.abs(cosPhi) * r)

  let shadowPath = ''

  if (norm >= 0 && norm < 0.5) {
    if (cosPhi >= 0) {
      shadowPath = `M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} A ${rxTerminator} ${r} 0 0 1 ${cx} ${cy - r} Z`
    } else {
      shadowPath = `M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} A ${rxTerminator} ${r} 0 0 0 ${cx} ${cy - r} Z`
    }
  } else {
    if (cosPhi < 0) {
      shadowPath = `M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} A ${rxTerminator} ${r} 0 0 1 ${cx} ${cy - r} Z`
    } else {
      shadowPath = `M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} A ${rxTerminator} ${r} 0 0 0 ${cx} ${cy - r} Z`
    }
  }

  const glowOpacity = isNewish ? 0.08 : 0.25 + 0.45 * (0.5 + 0.5 * Math.cos(norm * 2 * Math.PI))
  const sizeStyle = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : {}

  return (
    <div
      className={`relative flex items-center justify-center select-none aspect-square ${className}`}
      style={sizeStyle}
    >
      {/* Resplandor atmosférico exterior (Aura lunar) */}
      {glow && showAura && (
        <div
          className="absolute inset-0 rounded-full transition-all duration-500 pointer-events-none"
          style={{
            transform: 'scale(1.28)',
            background: isNewish
              ? 'radial-gradient(circle, rgba(74,95,140,0.25) 0%, rgba(14,28,73,0.08) 50%, transparent 75%)'
              : 'radial-gradient(circle, rgba(218,224,238,0.42) 0%, rgba(143,154,182,0.25) 40%, rgba(14,28,73,0.1) 65%, transparent 80%)',
            filter: 'blur(20px)',
            opacity: glowOpacity,
          }}
        />
      )}

      {/* Corona resplandor secundario */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: isNewish
              ? '0 0 20px rgba(74,95,140,0.3), inset 0 0 12px rgba(14,28,73,0.8)'
              : '0 0 40px rgba(218,224,238,0.4), 0 0 16px rgba(245,240,225,0.6), inset 0 0 18px rgba(255,255,255,0.3)',
            opacity: Math.max(0.2, glowOpacity),
          }}
        />
      )}

      {/* SVG vector de la Luna con cráteres y sombra terminadora */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full rounded-full overflow-hidden shadow-2xl"
        style={{
          backgroundColor: '#040714',
        }}
      >
        <defs>
          <clipPath id="moon-sphere-clip">
            <circle cx="50" cy="50" r="49" />
          </clipPath>

          <radialGradient id="lunar-surface" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#faf6ec" />
            <stop offset="35%" stopColor="#e8dfce" />
            <stop offset="70%" stopColor="#d3c7b5" />
            <stop offset="95%" stopColor="#b5a894" />
            <stop offset="100%" stopColor="#8c806f" />
          </radialGradient>

          <radialGradient id="sphere-shading" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </radialGradient>

          <radialGradient id="shadow-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#080c1a" stopOpacity="0.97" />
            <stop offset="85%" stopColor="#04060f" stopOpacity="0.99" />
            <stop offset="100%" stopColor="#010207" stopOpacity="1" />
          </radialGradient>

          <filter id="terminator-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
          </filter>
        </defs>

        <g clipPath="url(#moon-sphere-clip)">
          {/* 1. Base iluminada */}
          <circle cx="50" cy="50" r="49" fill="url(#lunar-surface)" />

          {/* 2. Texturas de Mares Lunares */}
          <g opacity="0.42" fill="#7a7062">
            <path d="M 22 28 Q 30 18 42 22 Q 48 32 38 42 Q 24 45 20 35 Z" />
            <ellipse cx="36" cy="30" rx="11" ry="8" transform="rotate(-15 36 30)" />
            <ellipse cx="48" cy="26" rx="7" ry="5" />
            <ellipse cx="62" cy="32" rx="9" ry="7" transform="rotate(20 62 32)" />
            <ellipse cx="68" cy="44" rx="8" ry="7" transform="rotate(-10 68 44)" />
            <ellipse cx="76" cy="38" rx="5" ry="4" />
            <ellipse cx="80" cy="32" rx="5" ry="4" transform="rotate(-15 80 32)" />
            <ellipse cx="38" cy="64" rx="9" ry="7" transform="rotate(10 38 64)" />
            <ellipse cx="26" cy="58" rx="6" ry="5" />
            <ellipse cx="54" cy="62" rx="8" ry="6" transform="rotate(-25 54 62)" />
            <ellipse cx="72" cy="56" rx="7" ry="6" />
            <ellipse cx="62" cy="60" rx="5" ry="4" />
          </g>

          {/* 3. Cráteres detallados */}
          <g opacity="0.32">
            <circle cx="48" cy="78" r="3" fill="#fff" opacity="0.8" />
            <circle cx="48" cy="78" r="2" fill="#5c5346" />
            <line x1="48" y1="78" x2="30" y2="60" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
            <line x1="48" y1="78" x2="65" y2="62" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
            <line x1="48" y1="78" x2="42" y2="92" stroke="#fff" strokeWidth="0.4" opacity="0.4" />
            <line x1="48" y1="78" x2="20" y2="82" stroke="#fff" strokeWidth="0.4" opacity="0.4" />
            <line x1="48" y1="78" x2="72" y2="84" stroke="#fff" strokeWidth="0.4" opacity="0.4" />

            <circle cx="34" cy="42" r="3.5" fill="#f0eae0" />
            <circle cx="34" cy="42" r="2.2" fill="#665c4e" />

            <circle cx="22" cy="44" r="2.2" fill="#f0eae0" />
            <circle cx="22" cy="44" r="1.4" fill="#665c4e" />

            <circle cx="58" cy="22" r="1.8" fill="#5c5346" />
            <circle cx="68" cy="20" r="1.5" fill="#5c5346" />
            <circle cx="78" cy="50" r="2" fill="#5c5346" />
            <circle cx="32" cy="72" r="2" fill="#5c5346" />
            <circle cx="60" cy="74" r="2.4" fill="#5c5346" />
            <circle cx="50" cy="48" r="1.5" fill="#5c5346" />
            <circle cx="42" cy="52" r="1.2" fill="#5c5346" />
            <circle cx="52" cy="36" r="1.6" fill="#5c5346" />
            <circle cx="16" cy="48" r="1.8" fill="#5c5346" />
            <circle cx="84" cy="44" r="1.5" fill="#5c5346" />
          </g>

          {/* 4. Sombreado 3D de esfera */}
          <circle cx="50" cy="50" r="49" fill="url(#sphere-shading)" />

          {/* 5. Capa de Sombra Astronómica Terminadora */}
          {shadowPath && !isFullish && (
            <path
              d={shadowPath}
              fill="url(#shadow-gradient)"
              filter="url(#terminator-blur)"
            />
          )}

          {/* Si es Luna Nueva pura */}
          {isNewish && (
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="#080c1a"
              opacity="0.95"
            />
          )}

          {/* 6. Borde iluminado tenue */}
          <circle
            cx="50"
            cy="50"
            r="48.5"
            fill="none"
            stroke="rgba(218, 224, 238, 0.2)"
            strokeWidth="0.8"
          />
        </g>
      </svg>
    </div>
  )
}
