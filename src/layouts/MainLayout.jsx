import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MainLayout.css'

function MainLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <div className="layout">

      {/* NAVBAR */}
      <div className="navbar">
        <button className="menu-btn" onClick={() => setDrawerOpen(!drawerOpen)}>
          ☰
        </button>
        <span className="navbar-title">0192281 - Hector Ivan Abril Herrera</span>
      </div>

      <div className="layout-body">

        {/* DRAWER */}
        {drawerOpen && (
          <div className="drawer">
            <div className="drawer-item" onClick={() => navigate('/productos')}>
              <span>🛍️</span> Product
            </div>
            <div className="drawer-item" onClick={() => navigate('/usuarios')}>
              <span>👤</span> Users
            </div>
          </div>
        )}

        {/* CONTENIDO */}
        <div className="main-content">
          {children}
        </div>

      </div>
    </div>
  )
}

export default MainLayout