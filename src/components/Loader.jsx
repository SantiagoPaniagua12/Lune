// components/Loader.jsx
// Loader animado — paleta #4A5F8C

import { motion } from 'framer-motion'

export default function Loader({ text = 'Cargando...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ background: '#4A5F8C' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
      <p className="text-sm" style={{ color: '#8F9AB6' }}>{text}</p>
    </div>
  )
}
