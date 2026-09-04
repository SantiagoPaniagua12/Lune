// views/ContactSection.jsx
// ContactSection — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { useContactForm } from '../controllers/useContactForm'

const INFO = [
  { icon: '📍', label: 'Dirección', value: 'Calle Moral 225 (Cercado), Arequipa.' },
  { icon: '📞', label: 'Teléfono', value: '+51 955 931 868' },
  { icon: '📧', label: 'Email', value: 'hola@lunepasteleria.pe' },
  { icon: '🕐', label: 'Horario', value: 'Lun-Jue 8 am - 9 pm\nVie - Sáb 8 am - 9:30 pm' },
]

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  border: '1px solid #8F9AB6',
  background: '#DAE0EE',
  color: '#000120',
  outline: 'none',
  fontSize: '0.95rem',
}

const inputErrorStyle = { ...inputStyle, borderColor: '#c0392b' }

export default function ContactSection() {
  const { formData, errors, status, handleChange, handleSubmit, reset } = useContactForm()

  return (
    <section id="contacto" className="py-24 relative backdrop-blur-md" style={{ background: 'rgba(218,224,238, 0.88)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Contáctanos"
          subtitle="¿Tienes una idea en mente? Escríbenos y hacemos que se convierta en realidad."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 border shadow-sm"
            style={{ background: '#fff', borderColor: '#8F9AB6' }}
          >
            {status === 'success' ? (
              <div className="text-center py-8">
                <span className="text-6xl">🎉</span>
                <h3 className="font-serif text-2xl font-bold mt-4 mb-2" style={{ color: '#000120' }}>
                  ¡Mensaje enviado!
                </h3>
                <p className="mb-6" style={{ color: '#4A5F8C' }}>
                  Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
                <button
                  onClick={reset}
                  className="px-6 py-2.5 rounded-full font-semibold transition-colors"
                  style={{ background: '#4A5F8C', color: '#DAE0EE' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#0E1C49')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#4A5F8C')}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="font-serif text-xl font-bold mb-1" style={{ color: '#000120' }}>
                  Envíanos un mensaje
                </h3>

                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#0E1C49' }} htmlFor="nombre">
                    Nombre *
                  </label>
                  <input
                    id="nombre" name="nombre" type="text"
                    value={formData.nombre} onChange={handleChange}
                    placeholder="Tu nombre completo"
                    style={errors.nombre ? inputErrorStyle : inputStyle}
                  />
                  {errors.nombre && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>{errors.nombre}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#0E1C49' }} htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email" name="email" type="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="tu@email.com"
                    style={errors.email ? inputErrorStyle : inputStyle}
                  />
                  {errors.email && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>{errors.email}</p>}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#0E1C49' }} htmlFor="telefono">
                    Teléfono
                  </label>
                  <input
                    id="telefono" name="telefono" type="tel"
                    value={formData.telefono} onChange={handleChange}
                    placeholder="+51 999 999 999"
                    style={inputStyle}
                  />
                </div>

                {/* Tipo solicitud */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#0E1C49' }} htmlFor="tipoSolicitud">
                    Tipo de solicitud
                  </label>
                  <select
                    id="tipoSolicitud" name="tipoSolicitud"
                    value={formData.tipoSolicitud} onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="consulta">Consulta general</option>
                    <option value="personalizado">Pedido personalizado</option>
                    <option value="evento">Solicitar Reserva</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#0E1C49' }} htmlFor="mensaje">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje" name="mensaje" rows={4}
                    value={formData.mensaje} onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas..."
                    style={{ ...(errors.mensaje ? inputErrorStyle : inputStyle), resize: 'none' }}
                  />
                  {errors.mensaje && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>{errors.mensaje}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl font-semibold transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: '#4A5F8C', color: '#DAE0EE' }}
                  onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#0E1C49' }}
                  onMouseLeave={e => (e.currentTarget.style.background = '#4A5F8C')}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje ✦'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info del local */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {INFO.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl p-5 shadow-sm border"
                style={{ background: '#fff', borderColor: '#8F9AB6' }}
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#4A5F8C' }}>
                    {item.label}
                  </p>
                  <p className="whitespace-pre-line" style={{ color: '#0E1C49' }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Mapa placeholder */}
            <div
              className="w-full h-56 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed"
              style={{ background: 'linear-gradient(135deg, #8F9AB6 0%, #4A5F8C 100%)', borderColor: '#4A5F8C' }}
            >
              <span className="text-4xl">🗺️</span>
              <span className="text-sm font-medium mt-2 uppercase tracking-wide" style={{ color: '#DAE0EE' }}>
                Imagen — Mapa de ubicación
              </span>
              <a
                href="https://www.google.com/maps/place/lune+alta+pasteleria/data=!4m2!3m1!1s0x91424bcb244267cb:0x37fdd941dd01876e?sa=X&ved=1t:242&ictx=111"
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-xs font-semibold hover:underline"
                style={{ color: '#DAE0EE' }}
              >
                Ver en Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
