import './UsuarioCard.css'

function UsuarioCard({ usuario }) {
  const iniciales = usuario.name?.slice(0, 1).toUpperCase() || 'U'

  return (
    <div className="usuario-card">
      <div className="usuario-avatar">
        {usuario.avatar && !usuario.avatar.includes('api.lorem') ? (
          <img
            src={usuario.avatar}
            alt={usuario.name}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentNode.style.backgroundColor = '#1565C0'
              e.target.parentNode.innerHTML = `<span style="color:white;font-size:20px;font-weight:700">${iniciales}</span>`
            }}
          />
        ) : (
          <span className="usuario-iniciales">{iniciales}</span>
        )}
      </div>
      <div className="usuario-info">
        <h3>{usuario.name}</h3>
        <p>{usuario.email}</p>
      </div>
    </div>
  )
}

export default UsuarioCard