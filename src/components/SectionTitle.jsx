// components/SectionTitle.jsx
// Título de sección — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <h2
        className="text-3xl md:text-4xl font-bold font-serif mb-3"
        style={{ color: light ? '#DAE0EE' : '#000120' }}
      >
        {title}
      </h2>
      <div className="flex items-center gap-3 justify-center">
        <span className="h-px w-10" style={{ background: '#4A5F8C' }} />
        <span style={{ color: '#4A5F8C' }} className="text-lg">✦</span>
        <span className="h-px w-10" style={{ background: '#4A5F8C' }} />
      </div>
      {subtitle && (
        <p
          className="mt-4 text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: light ? '#8F9AB6' : '#4A5F8C' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
