// views/Hero.jsx
// Hero — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const topOffset = 70
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24 pb-16 px-4 sm:px-6"
    >
      {/* Overlay glow sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 30% 40%, rgba(14,28,73,0.5) 0%, transparent 65%)',
        }}
      />

      {/* Floating circles decorativos */}
      {[
        { size: 'w-64 h-64 sm:w-96 sm:h-96', left: '60%', top: '5%', delay: 0 },
        { size: 'w-40 h-40 sm:w-56 sm:h-56', left: '-5%', top: '50%', delay: 0.3 },
      ].map((c, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full pointer-events-none ${c.size}`}
          style={{
            left: c.left,
            top: c.top,
            border: '1px solid rgba(218,224,238,0.1)',
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: c.delay }}
        />
      ))}

      {/* Content Responsive */}
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center w-full">
        {/* Emblema oficial del logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 sm:mb-6 p-1.5 sm:p-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-2xl ring-2 ring-slate-200/50 hover:scale-105 transition-transform"
        >
          <img
            src="/logo.png"
            alt="Lune Alta Pastelería"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm uppercase font-semibold mb-2 sm:mb-3"
          style={{ color: '#8F9AB6' }}
        >
          Alta Pastelería
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-4 sm:mb-6"
          style={{ color: '#DAE0EE' }}
        >
          Lune
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-sm sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10 px-2"
          style={{ color: '#8F9AB6' }}
        >
          Donde cada pieza es una obra de arte comestible. Repostería artesanal
          hecha con amor, ingredientes premium y la magia de la tradición arequipeña.
        </motion.p>

        {/* Botones de acción responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none px-4"
        >
          <button
            onClick={() => scrollTo('#menu')}
            className="inline-flex items-center justify-center font-bold rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg transition-all shadow-xl hover:scale-105 active:scale-95"
            style={{ background: '#DAE0EE', color: '#000120' }}
          >
            Ver Menú ✦
          </button>
          <button
            onClick={() => scrollTo('#contacto')}
            className="inline-flex items-center justify-center font-semibold rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg transition-all backdrop-blur-sm hover:scale-105 active:scale-95"
            style={{
              border: '2px solid rgba(218,224,238,0.4)',
              color: '#DAE0EE',
              background: 'rgba(0,1,32,0.4)',
            }}
          >
            Hacer Pedido
          </button>
        </motion.div>

        {/* Stats Grid Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-8 md:gap-12 w-full max-w-md mx-auto px-2"
          style={{ color: '#8F9AB6' }}
        >
          {[
            { num: '4+', label: 'Años de sabor' },
            { num: '200+', label: 'Recetas finas' },
            { num: '5★', label: 'Valoración' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: '#DAE0EE' }}>
                {s.num}
              </div>
              <div className="text-[10px] sm:text-xs mt-0.5 whitespace-nowrap">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div
          className="w-5 sm:w-6 h-8 sm:h-10 rounded-full flex items-start justify-center pt-1.5 sm:pt-2"
          style={{ border: '2px solid rgba(218,224,238,0.25)' }}
        >
          <div className="w-1 h-2 sm:h-3 rounded-full bg-slate-200/60" />
        </div>
      </motion.div>
    </section>
  )
}
