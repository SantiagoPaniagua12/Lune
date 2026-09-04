import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Inicio',      href: '#hero' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Menú',        href: '#menu' },
  { label: 'Galería',     href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      
      // Auto detectar link activo según el scroll
      const sections = ['#hero', '#nosotros', '#menu', '#galeria', '#testimonios', '#contacto']
      for (const s of sections) {
        const el = document.querySelector(s)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveLink(s)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setActiveLink(href)
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const topOffset = 70
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled ? 'rgba(0,1,32,0.92)' : 'rgba(0,1,32,0.4)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(218,224,238,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,1,32,0.5)' : 'none',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        
        {/* Logo oficial responsive */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="flex items-center group focus:outline-none"
        >
          <div className="relative flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 p-1 backdrop-blur-sm shadow-md ring-1 ring-white/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Lune Alta Pastelería"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span
                className="font-serif text-xl sm:text-2xl font-bold tracking-wide leading-none"
                style={{ color: '#DAE0EE' }}
              >
                Lune
              </span>
              <span
                className="text-[8px] sm:text-[10px] font-sans tracking-[0.22em] uppercase font-semibold mt-0.5 sm:mt-1 leading-none"
                style={{ color: '#8F9AB6' }}
              >
                Alta Pastelería
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-xs lg:text-sm font-medium relative pb-0.5 transition-colors"
              style={{
                color: activeLink === l.href ? '#DAE0EE' : '#8F9AB6',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#DAE0EE')}
              onMouseLeave={e => (e.currentTarget.style.color = activeLink === l.href ? '#DAE0EE' : '#8F9AB6')}
            >
              {l.label}
              {activeLink === l.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: '#4A5F8C' }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contacto"
          onClick={(e) => handleClick(e, '#contacto')}
          className="hidden md:inline-flex items-center gap-1 px-4 lg:px-5 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all shadow hover:shadow-lg"
          style={{ background: '#4A5F8C', color: '#DAE0EE' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#0E1C49')}
          onMouseLeave={e => (e.currentTarget.style.background = '#4A5F8C')}
        >
          Hacer pedido ✦
        </a>

        {/* Botón Hamburguesa Mobile optimizado */}
        <button
          className="md:hidden p-2.5 rounded-xl border transition-colors flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          style={{
            borderColor: 'rgba(218,224,238,0.2)',
            background: menuOpen ? 'rgba(74,95,140,0.3)' : 'rgba(0,1,32,0.6)',
            color: '#DAE0EE',
          }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu deslizable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t backdrop-blur-2xl shadow-2xl"
            style={{
              background: 'rgba(0,1,32,0.98)',
              borderColor: 'rgba(218,224,238,0.15)',
            }}
          >
            <nav className="flex flex-col px-6 py-5 gap-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className={`text-base font-medium py-2.5 px-3 rounded-xl transition-all flex items-center justify-between ${
                    activeLink === l.href
                      ? 'bg-slate-800/60 font-semibold'
                      : 'hover:bg-slate-900/50'
                  }`}
                  style={{
                    color: activeLink === l.href ? '#DAE0EE' : '#8F9AB6',
                  }}
                >
                  <span>{l.label}</span>
                  {activeLink === l.href && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  )}
                </a>
              ))}
              
              <div className="pt-3 mt-1 border-t border-slate-800">
                <a
                  href="#contacto"
                  onClick={(e) => handleClick(e, '#contacto')}
                  className="w-full text-center py-3 rounded-xl font-bold text-sm transition-colors shadow-lg block"
                  style={{ background: '#4A5F8C', color: '#DAE0EE' }}
                >
                  Hacer pedido ✦
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
