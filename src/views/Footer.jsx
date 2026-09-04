// views/Footer.jsx
// Footer — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion } from 'framer-motion'

const SOCIAL = [
  { label: 'Instagram', icon: '📸', href: 'https://instagram.com' },
  { label: 'Facebook',  icon: '👤', href: 'https://facebook.com' },
  { label: 'TikTok',    icon: '🎵', href: 'https://tiktok.com' },
  { label: 'WhatsApp',  icon: '💬', href: 'https://wa.me/5154123456' },
]

const NAV_LINKS = [
  { label: 'Inicio',      href: '#hero' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Menú',        href: '#menu' },
  { label: 'Galería',     href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto',    href: '#contacto' },
]

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#000120', color: '#8F9AB6' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/95 p-1 backdrop-blur-sm shadow-md ring-1 ring-white/30 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Lune Alta Pastelería"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold leading-none" style={{ color: '#DAE0EE' }}>
                  Lune
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold mt-1" style={{ color: '#8F9AB6' }}>
                  Alta Pastelería
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#8F9AB6' }}>
              Repostería artesanal con técnica francesa y alma arequipeña.
              Elaboramos cada pieza con los mejores ingredientes y mucho amor.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors"
                  style={{ background: '#0E1C49' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#4A5F8C')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#0E1C49')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-5 font-semibold" style={{ color: '#DAE0EE' }}>
              Navegación
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm transition-colors"
                    style={{ color: '#8F9AB6' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4A5F8C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8F9AB6')}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-5 font-semibold" style={{ color: '#DAE0EE' }}>
              Contáctanos
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Av. Ejército 123, Cayma, Arequipa</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:+5154123456"
                  className="transition-colors"
                  style={{ color: '#8F9AB6' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4A5F8C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#8F9AB6')}
                >
                  +51 54 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:hola@lunepasteleria.pe"
                  className="transition-colors"
                  style={{ color: '#8F9AB6' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4A5F8C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#8F9AB6')}
                >
                  hola@lunepasteleria.pe
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Lun–Sáb 8 am – 8 pm | Dom 9 am – 2 pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: '#0E1C49' }}
        >
          <p className="text-sm" style={{ color: '#4A5F8C' }}>
            © {year} Lune Pastelería Artesanal. Todos los derechos reservados.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo('#hero')}
            className="text-xs flex items-center gap-1.5 transition-colors"
            style={{ color: '#8F9AB6' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#DAE0EE')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8F9AB6')}
          >
            Volver arriba ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
