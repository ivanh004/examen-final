import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ProductoPage from '../features/producto/pages/ProductoPage'
import ProductoDetalle from '../features/producto/pages/ProductoDetalle'
import UsuarioPage from '../features/usuarios/pages/UsuarioPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <ProductoPage />
        </MainLayout>
      } />
      <Route path="/productos" element={
        <MainLayout>
          <ProductoPage />
        </MainLayout>
      } />
      <Route path="/producto/:id" element={
        <MainLayout>
          <ProductoDetalle />
        </MainLayout>
      } />
      <Route path="/usuarios" element={
        <MainLayout>
          <UsuarioPage />
        </MainLayout>
      } />
    </Routes>
  )
}

export default AppRoutes