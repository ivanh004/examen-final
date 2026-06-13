import axios from 'axios'

const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const getProductos = async () => {
  const response = await axios.get(`${BASE_URL}/products?limit=20`)
  return response.data
}

export const getProductoById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`)
  return response.data
}