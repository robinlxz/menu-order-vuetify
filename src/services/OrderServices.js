import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
})

export default {
  postOrder(orderObj) {
    return apiClient.post('/orders', orderObj)
  }
}
