// models/Product.js
// ─────────────────────────────────────────────────────────────
// Estructura / "tipo" de un producto de la pastelería.
//
// Responsabilidad:
//   - Definir la forma (shape) de un objeto Producto.
//   - Campos esperados: nombre, precio, imagen, categoría,
//     descripción y disponibilidad.
//   - Opcionalmente, una función factory o clase que cree
//     instancias de Producto con valores por defecto.
//
// ⚠️  NO contiene JSX, estilos ni lógica de presentación.
// ─────────────────────────────────────────────────────────────

/**
 * Crea un objeto Producto con valores por defecto.
 * TODO: Implementar la estructura real del producto.
 */
export function createProduct(overrides = {}) {
  return {
    id: '',
    nombre: '',
    precio: 0,
    imagen: '',
    categoria: '',
    descripcion: '',
    disponible: true,
    ...overrides,
  }
}

export default createProduct
