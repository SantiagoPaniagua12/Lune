// views/ProductCard.jsx
// ProductCard — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion } from 'framer-motion'

const CATEGORY_EMOJI = {
  tortas: '🎂',
  postres: '🍮',
  panes: '🍞',
  galletas: '🍪',
}

export default function ProductCard({ product }) {
  const { nombre, precio, imagen, categoria, descripcion, disponible, destacado } = product
  const emoji = CATEGORY_EMOJI[categoria] || '🍰'

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
      style={{
        background: '#fff',
        border: '1px solid #DAE0EE',
        opacity: disponible ? 1 : 0.6,
        boxShadow: '0 1px 4px rgba(0,1,32,0.06)',
      }}
    >
      {/* Placeholder imagen */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover"
        />
        {destacado && (
          <span
            className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: '#4A5F8C', color: '#DAE0EE' }}
          >
            Destacado
          </span>
        )}
        {!disponible && (
          <span
            className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: '#0E1C49', color: '#8F9AB6' }}
          >
            Agotado
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-wider mb-1 capitalize" style={{ color: '#4A5F8C' }}>
          {categoria}
        </span>
        <h3 className="font-serif font-bold text-lg leading-snug mb-2" style={{ color: '#000120' }}>
          {nombre}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#4A5F8C' }}>
          {descripcion}
        </p>
        <div
          className="flex items-center justify-between mt-4 pt-4"
          style={{ borderTop: '1px solid #DAE0EE' }}
        >
          <span className="text-2xl font-bold" style={{ color: '#0E1C49' }}>
            S/. {precio.toFixed(2)}
          </span>
          {disponible ? (
            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              style={{ background: '#4A5F8C', color: '#DAE0EE' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0E1C49')}
              onMouseLeave={e => (e.currentTarget.style.background = '#4A5F8C')}
            >
              Pedir
            </button>
          ) : (
            <span className="text-sm" style={{ color: '#8F9AB6' }}>No disponible</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
