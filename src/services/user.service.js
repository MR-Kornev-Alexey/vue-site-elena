import axios from 'axios'
import authHeader from './auth-header'

// const API_URL = 'http://localhost:8080/api/test/'

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://elenakorneva.site/api/test/'
  : 'http://localhost:8080/api/test/'

class UserService {
  getPublicContent () {
    return axios.get(API_URL + 'all-new')
  }

  getUserBoard () {
    return axios.get(API_URL + 'user', { headers: authHeader() })
  }

  getModeratorBoard () {
    return axios.get(API_URL + 'mod', { headers: authHeader() })
  }

  getAdminBoard () {
    return axios.get(API_URL + 'admin', { headers: authHeader() })
  }
}

export default new UserService()
