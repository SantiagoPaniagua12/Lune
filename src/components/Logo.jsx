import React from 'react'

/**
 * Logo
 * Componente oficial de la identidad visual de "Lune - Alta Pastelería"
 * 
 * @param {'badge' | 'light' | 'clean' | 'dark'} variant
 * @param {'sm' | 'md' | 'lg' | 'xl'} size
 * @param {string} className
 * @param {boolean} showText
 */
export default function Logo({
  variant = 'badge',
  size = 'md',
  className = '',
  showText = true,
  onClick,
}) {
  const sizeMap = {
    sm: { img: 'h-8 w-8', text: 'text-lg', sub: 'text-[9px]' },
    md: { img: 'h-11 w-11', text: 'text-2xl', sub: 'text-[10px]' },
    lg: { img: 'h-16 w-16', text: 'text-3xl', sub: 'text-xs' },
    xl: { img: 'h-24 w-24', text: 'text-4xl', sub: 'text-sm' },
  }

  const s = sizeMap[size] || sizeMap.md

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
    >
      {/* Contenedor del Logo emblema */}
      <div
        className={`relative flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 ${s.img} ${
          variant === 'badge'
            ? 'p-1 bg-white shadow-lg ring-1 ring-slate-300/40'
            : variant === 'light'
            ? 'p-1 bg-white/95 backdrop-blur-md shadow-md ring-1 ring-white/30'
            : 'p-0.5'
        }`}
        style={
          variant === 'badge' || variant === 'light'
            ? {
                boxShadow: '0 4px 15px rgba(0, 1, 32, 0.25), 0 0 10px rgba(218, 224, 238, 0.3)',
              }
            : {}
        }
      >
        <img
          src="/logo.png"
          alt="Lune Alta Pastelería Logo"
          className="w-full h-full object-contain rounded-full"
          loading="eager"
        />
      </div>

      {/* Tipografía de acompañamiento elegante */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span
              className={`font-serif font-bold tracking-wide leading-none ${s.text}`}
              style={{ color: '#DAE0EE' }}
            >
              Lune
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
          </div>
          <span
            className={`font-sans uppercase tracking-[0.25em] font-semibold mt-0.5 leading-none ${s.sub}`}
            style={{ color: '#8F9AB6' }}
          >
            Alta Pastelería
          </span>
        </div>
      )}
    </div>
  )
}
