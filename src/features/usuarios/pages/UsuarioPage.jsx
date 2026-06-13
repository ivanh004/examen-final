import { useState, useEffect } from 'react'
import { getUsuarios } from '../service/usuarioService'
import UsuarioCard from '../components/UsuarioCard'
import './UsuarioPage.css'

function UsuarioPage() {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      const data = await getUsuarios()
      setUsuarios(data)
      setLoading(false)
    }
    cargar()
  }, [])

  return (
    <div className="usuario-page">
      <h1>Users Available</h1>
      {loading ? (
        <p className="loading">Cargando usuarios...</p>
      ) : (
        <div className="usuarios-grid">
          {usuarios.map((usuario) => (
            <UsuarioCard key={usuario.id} usuario={usuario} />
          ))}
        </div>
      )}
    </div>
  )
}

export default UsuarioPage