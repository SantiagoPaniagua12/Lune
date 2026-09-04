// views/Menu.jsx
// Menu — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ProductCard from './ProductCard'
import { useProducts } from '../controllers/useProducts'

const CATEGORY_LABELS = {
  tortas: '🎂 Tortas',
  postres: '🍮 Postres',
  bolleria: '🥐 Bollería',
  especiales: '✨ Especiales',
  desayunos: '🍳 Desayunos',
  bebidas_frias: '🥤 Bebidas Frías',
  cocteles: '🍸 Cocteles',
  kombuchas: '🥂 Kombuchas',
  bebidas_calientes: '☕ Bebidas Calientes',
}

export default function Menu() {
  const { products, categories, activeCategory, setActiveCategory } = useProducts()

  return (
    <section id="menu" className="py-24 relative backdrop-blur-md" style={{ background: 'rgba(255,255,255, 0.88)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Nuestro Menú"
          subtitle="Elaborados diariamente con ingredientes frescos y técnica artesanal."
        />

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: '#4A5F8C', color: '#DAE0EE', transform: 'scale(1.05)', boxShadow: '0 4px 12px rgba(74,95,140,0.35)' }
                  : { background: '#DAE0EE', color: '#0E1C49' }
              }
              onMouseEnter={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.background = '#8F9AB6'
                  e.currentTarget.style.color = '#000120'
                }
              }}
              onMouseLeave={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.background = '#DAE0EE'
                  e.currentTarget.style.color = '#0E1C49'
                }
              }}
            >
              {CATEGORY_LABELS[cat] ?? cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {products.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-8 md:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, #000120 0%, #0E1C49 100%)' }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3" style={{ color: '#DAE0EE' }}>
            ¿Quieres algo especial?
          </h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: '#8F9AB6' }}>
            Diseñamos tortas y postres personalizados para bodas, cumpleaños y eventos especiales.
            Cuéntanos tu idea.
          </p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-bold px-8 py-3 rounded-full transition-colors shadow-lg"
            style={{ background: '#4A5F8C', color: '#DAE0EE' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#8F9AB6')}
            onMouseLeave={e => (e.currentTarget.style.background = '#4A5F8C')}
          >
            Solicitar pedido personalizado
          </button>
        </motion.div>
      </div>
    </section>
  )
}
