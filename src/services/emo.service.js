import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://elenakorneva.site/api/auth/'
  : 'http://localhost:8080/api/auth/'

// const apiNew = process.env.NODE_ENV === 'production'
//   ? 'http://80.78.245.91/api/'
//   : 'http://localhost:3000/api/'

class EmoService {
  reStartApi (data) {
    return axios
      .post(API_URL + 'reStartDayForEmo', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  getCurrentEmoDayFromApi (data) {
    return axios
      .post(API_URL + 'getCurrentEmoDayFromApi', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  getChoiceDayFromApi (data) {
    return axios
      .post(API_URL + 'getChoiceDayFromApi', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }
}

export default new EmoService()
