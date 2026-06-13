import axios from 'axios'

const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const getUsuarios = async () => {
  const response = await axios.get(`${BASE_URL}/users?limit=20`)
  return response.data
}