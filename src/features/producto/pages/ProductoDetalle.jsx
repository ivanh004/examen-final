import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductoById } from '../service/productoService'
import './ProductoDetalle.css'

function ProductoDetalle() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [imagenActual, setImagenActual] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      const data = await getProductoById(id)
      setProducto(data)
      const primeraImagen = data.images?.[0]?.replace(/["\[\]]/g, '')
      setImagenActual(primeraImagen)
      setLoading(false)
    }
    cargar()
  }, [id])

  if (loading) return <p className="loading">Cargando producto...</p>
  if (!producto) return <p>Producto no encontrado</p>

  const imagenes = producto.images?.map(img => img.replace(/["\[\]]/g, '')) || []

  return (
    <div className="detalle-page">
      <div className="detalle-container">

        {/* GALERIA MINIATURAS */}
        <div className="galeria-miniaturas">
          {imagenes.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`imagen ${index + 1}`}
              className={imagenActual === img ? 'miniatura activa' : 'miniatura'}
              onClick={() => setImagenActual(img)}
              onError={(e) => e.target.src = 'https://via.placeholder.com/100'}
            />
          ))}
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="imagen-principal">
          <img
            src={imagenActual}
            alt={producto.title}
            onError={(e) => e.target.src = 'https://via.placeholder.com/400'}
          />
        </div>

        {/* INFO PRODUCTO */}
        <div className="detalle-info">
          <p className="detalle-nuevo">Nuevo</p>
          <h1 className="detalle-titulo">{producto.title}</h1>
          <span className="detalle-categoria">{producto.category?.name}</span>
          <p className="detalle-precio">${producto.price}</p>
          <p className="detalle-envio">Envío gratis</p>
          <div className="detalle-acerca">
            <h3>Acerca de este producto</h3>
            <p>{producto.description}</p>
          </div>
          <button className="btn-comprar">COMPRAR AHORA</button>
          <button className="btn-carrito">AGREGAR AL CARRITO</button>
        </div>

      </div>

      {/* DESCRIPCION ABAJO */}
      <div className="detalle-descripcion">
        <h2>Descripción</h2>
        <p>{producto.description}</p>
      </div>

    </div>
  )
}

export default ProductoDetalle