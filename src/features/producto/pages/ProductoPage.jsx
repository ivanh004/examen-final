import { useState, useEffect } from 'react'
import { getProductos } from '../service/productoService'
import ProductoCard from '../components/ProductoCard'
import './ProductoPage.css'

function ProductoPage() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      const data = await getProductos()
      setProductos(data)
      setLoading(false)
    }
    cargar()
  }, [])

  return (
    <div className="producto-page">
      <h1>Products Available</h1>
      {loading ? (
        <p className="loading">Cargando productos...</p>
      ) : (
        <div className="productos-grid">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductoPage