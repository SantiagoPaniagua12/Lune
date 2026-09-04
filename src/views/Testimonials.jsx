// views/Testimonials.jsx
// Testimonials — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const TESTIMONIALS = [
  {
    id: 1,
    nombre: 'Valeria Quispe',
    rol: 'Clienta frecuente',
    texto:
      'La torta de bodas que encargué en Lune fue simplemente perfecta. Los invitados no podían creer que fuera artesanal, el nivel de detalle y el sabor son incomparables. ¡Ya encargué la torta de cumpleaños de mi hija!',
    rating: 5,
    avatar: '👩',
  },
  {
    id: 2,
    nombre: 'Marco Herrera',
    rol: 'Chef local',
    texto:
      'Como profesional de la gastronomía, puedo decir que los croissants de Lune están al nivel de los mejores de Europa. La masa madre es excepcional. Vengo cada sábado sin falta.',
    rating: 5,
    avatar: '👨‍🍳',
  },
  {
    id: 3,
    nombre: 'Sofía Mendoza',
    rol: 'Organizadora de eventos',
    texto:
      'Recomiendo Lune a todos mis clientes para bodas y eventos. Son extremadamente profesionales, cumplen con los tiempos y cada creación supera las expectativas. Los macarons son celestiales.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 4,
    nombre: 'Rodrigo Torres',
    rol: 'Cliente habitual',
    texto:
      'El tiramisú y los éclairs son mis favoritos. Se nota que usan ingredientes de calidad y que hay amor en cada preparación. El ambiente del local también es precioso.',
    rating: 5,
    avatar: '🧑',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIALS[current]

  return (
    <section id="testimonios" className="py-24 overflow-hidden relative backdrop-blur-md" style={{ background: 'rgba(255,255,255, 0.88)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="Más de 500 familias confían en Lune para sus momentos más especiales."
        />

        {/* Carrusel */}
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 md:p-12 text-center border"
              style={{ background: '#DAE0EE', borderColor: '#8F9AB6' }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-xl" style={{ color: '#4A5F8C' }}>★</span>
                ))}
              </div>

              <blockquote className="text-lg leading-relaxed italic mb-8" style={{ color: '#0E1C49' }}>
                "{t.texto}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl">{t.avatar}</span>
                <div className="text-left">
                  <p className="font-semibold" style={{ color: '#000120' }}>{t.nombre}</p>
                  <p className="text-sm" style={{ color: '#4A5F8C' }}>{t.rol}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all"
              style={{ borderColor: '#4A5F8C', color: '#4A5F8C' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4A5F8C'
                e.currentTarget.style.color = '#DAE0EE'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#4A5F8C'
              }}
            >
              ‹
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className="h-2.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '1.5rem' : '0.625rem',
                    background: i === current ? '#4A5F8C' : '#8F9AB6',
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all"
              style={{ borderColor: '#4A5F8C', color: '#4A5F8C' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4A5F8C'
                e.currentTarget.style.color = '#DAE0EE'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#4A5F8C'
              }}
            >
              ›
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto text-center"
        >
          {[
            { n: '500+', l: 'Clientes felices' },
            { n: '4.9',  l: 'Puntuación media' },
            { n: '98%',  l: 'Recomiendan Lune' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-bold" style={{ color: '#0E1C49' }}>{s.n}</div>
              <div className="text-sm mt-1" style={{ color: '#4A5F8C' }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
