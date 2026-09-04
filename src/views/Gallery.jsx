// views/Gallery.jsx
// Gallery — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const GALLERY_ITEMS = [
  { id: 1, label: 'Torta de Bodas',        emoji: '🎂', span: 'row-span-2' },
  { id: 2, label: 'Macarons Coloridos',    emoji: '🫐', span: '' },
  { id: 3, label: 'Croissants al Horno',   emoji: '🥐', span: '' },
  { id: 4, label: 'Escaparate de Postres', emoji: '🍮', span: 'row-span-2' },
  { id: 5, label: 'Pan de Masa Madre',     emoji: '🍞', span: '' },
  { id: 6, label: 'Éclairs de Chocolate',  emoji: '🍫', span: '' },
  { id: 7, label: 'Torta Red Velvet',      emoji: '🍰', span: '' },
  { id: 8, label: 'Nuestro Local',         emoji: '🏪', span: '' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 relative backdrop-blur-md" style={{ background: 'rgba(218,224,238, 0.85)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Galería"
          subtitle="Una muestra de nuestras creaciones artesanales y el ambiente de nuestro local."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-48 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className={`${item.span} flex flex-col items-center justify-center cursor-pointer overflow-hidden group rounded-2xl border-2 border-dashed transition-colors`}
              style={{
                background: 'linear-gradient(135deg, #8F9AB6 0%, #4A5F8C 100%)',
                borderColor: '#4A5F8C',
                minHeight: '12rem',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#0E1C49')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#4A5F8C')}
            >
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </span>
              <span className="mt-3 text-xs font-medium tracking-wide uppercase text-center px-2" style={{ color: '#DAE0EE' }}>
                Imagen —<br />{item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm mt-8"
          style={{ color: '#4A5F8C' }}
        >
          Síguenos en Instagram{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors"
            style={{ color: '#0E1C49' }}
          >
            @lune.pasteleria
          </a>{' '}
          para ver más creaciones 🍰
        </motion.p>
      </div>
    </section>
  )
}
