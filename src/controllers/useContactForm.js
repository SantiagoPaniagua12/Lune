// controllers/useContactForm.js
// Hook para manejar el estado y validación del formulario de contacto.

import { useState } from 'react'

const initialState = {
  nombre: '',
  email: '',
  telefono: '',
  tipoSolicitud: 'consulta',
  mensaje: '',
}

export function useContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors]     = useState({})
  const [status, setStatus]     = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const validate = () => {
    const newErrors = {}
    if (!formData.nombre.trim())  newErrors.nombre  = 'El nombre es requerido.'
    if (!formData.email.trim())   newErrors.email   = 'El email es requerido.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Ingresa un email válido.'
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido.'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setStatus('sending')
    // Simulación de envío
    setTimeout(() => {
      setStatus('success')
      setFormData(initialState)
    }, 1500)
  }

  const reset = () => {
    setStatus('idle')
    setErrors({})
    setFormData(initialState)
  }

  return { formData, errors, status, handleChange, handleSubmit, reset }
}

export default useContactForm
