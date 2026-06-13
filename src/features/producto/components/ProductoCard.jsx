import { useNavigate } from 'react-router-dom'
import './ProductoCard.css'

function ProductoCard({ producto }) {
  const navigate = useNavigate()

  const imagen = producto.images?.[0]?.replace(/["\[\]]/g, '') || 'https://via.placeholder.com/300'

  return (
    <div 
      className="producto-card" 
      onClick={() => navigate(`/producto/${producto.id}`)}
      title={`${producto.title}\n${producto.description}`}
    >
      <img
        src={imagen}
        alt={producto.title}
        draggable="false"
        onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
      />
      <div className="producto-card-body">
        <h3>{producto.title}</h3>
        <p>{producto.description?.slice(0, 80)}...</p>
        <span className="precio">${producto.price}</span>
      </div>
    </div>
  )
}

export default ProductoCard