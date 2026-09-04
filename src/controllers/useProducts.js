// controllers/useProducts.js
// Hook para obtener, filtrar y gestionar los productos desde el modelo.

import { useState, useMemo } from 'react'
import { productsData } from '../models/productsData'

export function useProducts() {
  const [activeCategory, setActiveCategory] = useState('postres')

  const categories = useMemo(() => {
    return [...new Set(productsData.map((p) => p.categoria))]
  }, [])

  const products = useMemo(() => {
    return productsData.filter((p) => p.categoria === activeCategory)
  }, [activeCategory])

  const featuredProducts = useMemo(
    () => productsData.filter((p) => p.destacado),
    []
  )

  return { products, categories, activeCategory, setActiveCategory, featuredProducts }
}

export default useProducts
