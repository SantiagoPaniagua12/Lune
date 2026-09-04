// components/Button.jsx
// Botón reutilizable — paleta #000120 | #0E1C49 | #4A5F8C | #DAE0EE | #8F9AB6

import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-[#4A5F8C] text-[#DAE0EE] hover:bg-[#0E1C49] focus:ring-[#4A5F8C] shadow-md hover:shadow-lg',
    secondary:
      'bg-[#DAE0EE] text-[#000120] hover:bg-[#8F9AB6] hover:text-[#000120] focus:ring-[#8F9AB6] border border-[#8F9AB6]',
    outline:
      'bg-transparent border-2 border-[#4A5F8C] text-[#4A5F8C] hover:bg-[#4A5F8C] hover:text-[#DAE0EE] focus:ring-[#4A5F8C]',
    ghost:
      'bg-transparent text-[#4A5F8C] hover:bg-[#DAE0EE]/30 focus:ring-[#4A5F8C]',
    dark:
      'bg-[#000120] text-[#DAE0EE] hover:bg-[#0E1C49] focus:ring-[#4A5F8C] shadow-md',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
