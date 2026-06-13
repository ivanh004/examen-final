import UsuarioCard from '../components/UsuarioCard'
import './UsuarioPage.css'

const usuarios = [
  {
    id: 1,
    name: 'Jhon',
    email: 'john@mail.com',
    avatar: 'https://i.imgur.com/LDOO4Qs.jpg'
  },
  {
    id: 2,
    name: 'Maria',
    email: 'maria@mail.com',
    avatar: 'https://i.imgur.com/DTfowdu.jpg'
  },
  {
    id: 3,
    name: 'Admin',
    email: 'admin@mail.com',
    avatar: 'https://i.imgur.com/yhW6Yw1.jpg'
  },
  {
    id: 4,
    name: 'beko',
    email: 'beko@gmail.com',
    avatar: null
  },
  {
    id: 5,
    name: 'Fay3b',
    email: 'verlin.hawell84@gmail.com',
    avatar: null
  },
  {
    id: 6,
    name: 'Hazem',
    email: 'hazeddm777@gmail.com',
    avatar: null
  },
  {
    id: 7,
    name: 'Mohamed',
    email: 'mohamed@gmail.com',
    avatar: null
  }
]

function UsuarioPage() {
  return (
    <div className="usuario-page">
      <h1>Users Available</h1>
      <div className="usuarios-grid">
        {usuarios.map((usuario) => (
          <UsuarioCard key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </div>
  )
}

export default UsuarioPage