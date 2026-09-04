// views/About.jsx
// About — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

const VALUES = [
  { icon: '🌾', title: 'Ingredientes Naturales', desc: 'Solo usamos materias primas de primera selección, sin conservantes ni aditivos artificiales.' },
  { icon: '🤝', title: 'Hecho a Mano',           desc: 'Cada pieza es elaborada manualmente por nuestro equipo con técnicas tradicionales francesas.' },
  { icon: '❤️',  title: 'Con Amor',              desc: 'La pasión por la repostería se siente en cada bocado. Horneamos con dedicación cada día.' },
  { icon: '✨',  title: 'Alta Calidad',           desc: 'Chocolate belga, vainilla Bourbon, mantequilla francesa. Los mejores insumos del mundo.' },
]

export default function About() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const topOffset = 70
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <section id="nosotros" className="py-16 sm:py-24 relative backdrop-blur-md" style={{ background: 'rgba(218,224,238, 0.90)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Nuestra Historia"
          subtitle="Llevamos alta repostería artesanal a cada mesa con recetas elaboradas con pasión y técnica."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 sm:mb-20">
          {/* Card de imagen / Taller */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="w-full aspect-square md:aspect-[4/5] rounded-3xl flex flex-col items-center justify-center border-2 border-dashed relative overflow-hidden p-6 sm:p-8 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(143,154,182,0.4) 0%, rgba(74,95,140,0.3) 100%)', borderColor: '#4A5F8C' }}
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/95 p-2 sm:p-3 shadow-xl ring-4 ring-white/50 mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Lune Alta Pastelería"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-base sm:text-lg font-serif font-bold tracking-wide" style={{ color: '#0E1C49' }}>
                Lune • Taller Artesanal
              </span>
              <span className="text-[11px] sm:text-xs tracking-wider uppercase mt-1 font-medium" style={{ color: '#4A5F8C' }}>
                Tradición & Alta Repostería
              </span>
            </div>
            
            {/* Badge flotante */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center text-center shadow-xl border border-white/20"
              style={{ background: '#0E1C49', color: '#DAE0EE' }}
            >
              <span className="text-xl sm:text-2xl font-bold leading-none">4+</span>
              <span className="text-[10px] sm:text-xs leading-tight mt-0.5">años de<br />sabor</span>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 sm:mb-5" style={{ color: '#000120' }}>
              Un sueño convertido en pasión artesanal
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: '#0E1C49' }}>
              Lune nació del sueño de fusionar la alta repostería francesa clásica con el alma,
              dedicación e insumos peruanos de máxima calidad. Cada creación es tratada con cuidado
              milimétrico para despertar emociones en cada bocado.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ color: '#4A5F8C' }}>
              Hoy, nuestro taller artesanal produce más de 50 piezas distintas cada día,
              desde croissants hojaldrados con fermentación lenta hasta tortas de celebración personalizadas.
            </p>
            <div className="w-full sm:w-auto">
              <Button onClick={() => scrollTo('#contacto')} className="w-full sm:w-auto">
                Encarga tu torta ✦
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Valores Grid Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-5 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ background: '#fff', border: '1px solid #8F9AB6' }}
            >
              <span className="text-3xl sm:text-4xl">{v.icon}</span>
              <h4 className="font-semibold mt-3 mb-2 text-sm sm:text-base" style={{ color: '#000120' }}>{v.title}</h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4A5F8C' }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
