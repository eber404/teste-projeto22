import axios from 'axios'

const ecommerceAPI = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 5000
})

export { ecommerceAPI }
