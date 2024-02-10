import axios from 'axios'

// const API_URL = 'http://localhost:8080/api/auth/'
const apiClient = axios.create({
  baseURL: 'https://elenakorneva.site/', // Или baseURL вашего сервера Express
  headers: {
    'Content-Type': 'application/json'
  }
})

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://elenakorneva.site/api/auth/'
  : 'http://localhost:8080/api/auth/'

const apiNew = process.env.NODE_ENV === 'production'
  ? 'http://80.78.245.91/api/'
  : 'http://localhost:3000/api/'

class AuthService {
  saveAllToApiOut (data) {
    return axios
      .post(API_URL + 'saveAllToApiOut', data)
      .then(response => {
        return response.data
      })
  }

  getAllCoursesContent () {
    return axios
      .post(API_URL + 'getAllCoursesContent')
      .then(response => {
        return response.data
      })
  }

  star3SendingLetter (data) {
    return axios
      .post(API_URL + 'star3SendingLetter', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  changeOneAccess (data) {
    return axios
      .post(API_URL + 'changeOneAccess', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  clearAllItemInMainDBApi (data) {
    return axios
      .post(API_URL + 'clearAllItemInMainDBApi', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  changeStatusOfSendingIntensive (data) {
    return axios
      .post(API_URL + 'changeStatusOfSendingIntensive', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  sendMessageOneIntensiveNoSpam (data) {
    return axios
      .post(API_URL + 'sendMessageOneIntensiveNoSpam', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  sendMessageOneHelenBotNoSpam (data) {
    return axios
      .post(apiNew + 'sendMessageOneHelenBotNoSpam', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  sendAllUsersButNoSpam (data) {
    return axios
      .post(apiNew + 'sendAllUsersButNoSpam', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  changeWebinarAccess (data) {
    return axios
      .post(API_URL + 'changeWebinarAccess', {
        user: data
      })
      .then(response => {
        return response.data
      })
  }

  correctWeekNW (user) {
    return axios
      .post(API_URL + 'correctWeekNW', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  firstStartHW (user) {
    return axios
      .post(API_URL + 'firstStartHW', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  userOneTelegram (user) {
    return axios
      .post(API_URL + 'signingUserOne', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  changeInputWeekHW (user) {
    return axios
      .post(API_URL + 'changeInputWeekHW', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  // changeTimes (user) {
  //   return axios
  //     .post(API_URL + 'changeTimes', {
  //       user: user
  //     })
  //     .then(response => {
  //       return response.data
  //     })
  // }

  openAccessEmo30 (user) {
    return axios
      .post(API_URL + 'openAccessEmo30', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  changeEndOfSendHW (user) {
    return axios
      .post(API_URL + 'changeEndOfSendHW', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  userOneIntensive (user) {
    return axios
      .post(API_URL + 'signingGetOneIntensive', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  allHW (user) {
    return axios
      .post(API_URL + 'signingAllHW', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  oneUserFromBotHw (user) {
    return axios
      .post(API_URL + 'oneUserFromBotHw', user)
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  getAllUsersEmoCourse (user) {
    return axios
      .post(API_URL + 'getAllUsersEmoCourse', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  getAllUsersEmoCourse3 (user) {
    return axios
      .post(API_URL + 'getAllUsersEmoCourse3', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  getAllUsersSpeakCourse (user) {
    return axios
      .post(API_URL + 'getAllUsersSpeakCourse', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  allUsersMotherHoodFromApi (user) {
    return axios
      .post(API_URL + 'allUsersMotherHoodFromApi', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  changeAccessToOneUserEmo3 (user) {
    return axios
      .post(API_URL + 'changeAccessToOneUserEmo3', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  changeAccessToOneUserSpeak (user) {
    return axios
      .post(API_URL + 'changeAccessToOneUserSpeak', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  startToOneUserSpeak (user) {
    return axios
      .post(API_URL + 'startToOneUserSpeak', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  sendAllEmo3UsersNoSpam (user) {
    return axios
      .post(API_URL + 'sendAllEmo3UsersNoSpam', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  sendAllSpeaksUsersNoSpam (user) {
    return axios
      .post(API_URL + 'sendAllSpeaksUsersNoSpam', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  convertUsersToEmo (user) {
    return axios
      .post(API_URL + 'convertUsersToEmo', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  addUsersToListEmo3 (user) {
    return axios
      .post(API_URL + 'addUsersToListEmo3', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  convertUsersToEmo3 (user) {
    return axios
      .post(API_URL + 'convertUsersToEmo3', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  convertUsersToSpeak (user) {
    return axios
      .post(API_URL + 'convertUsersToSpeak', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  checkEmailRegisterOnApi (user) {
    return axios
      .post(API_URL + 'checkEmailRegisterOnApi', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  allUsersFromBotHw (user) {
    return axios
      .post(API_URL + 'allUsersFromBotHw', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  allTelegram (user) {
    return axios
      .post(API_URL + 'signingAllTelegram', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  star3Telegram (user) {
    return axios
      .post(API_URL + 'signingGetStar3Telegram', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  star1Telegram (user) {
    return axios
      .post(API_URL + 'signingGetStar1Telegram', {
        user: user
      })
      .then(response => {
        return response.data
      })
  }

  getOneTelegram (user) {
    return axios
      .post(API_URL + 'signingGetOneTelegram', {
        user: user
      })
      .then(response => {
        // if (response.data) {
        //   localStorage.setItem('telegramUser', JSON.stringify(response.data))
        // }
        return response.data
      })
  }

  loginUserTable (user) {
    return axios
      .post(API_URL + 'signingUserTable', {
        user: user
      })
      .then(response => {
        // alert(response)
        if (response) {
          localStorage.setItem('telegramUserTable', JSON.stringify(response.data))
        }
        return response.data
      })
  }

  loginTelegram (user) {
    return axios
      .post(API_URL + 'signingTelegram', {
        user: user
      })
      .then(response => {
        // alert(response)
        if (response) {
          localStorage.setItem('telegramUser', JSON.stringify(response.data))
        }
        return response.data
      })
  }

  login (user) {
    return apiClient
      .post(API_URL + 'signing', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  }

  //
  // login (user) {
  //   return axios
  //     .post(API_URL + 'signing', {
  //       username: user.username,
  //       password: user.password
  //     })
  //     .then(response => {
  //       if (response.data.accessToken) {
  //         localStorage.setItem('user', JSON.stringify(response.data))
  //       }
  //       return response.data
  //     })
  // }

  logout () {
    localStorage.removeItem('user')
  }

  botRegisterGeo (data) {
    return axios.post(API_URL + 'botRegisterGeo', data)
  }

  botRegisterWeight (data) {
    return axios.post(API_URL + 'botRegisterWeight', data)
  }

  botRegisterGrowth (data) {
    return axios.post(API_URL + 'botRegisterGrowth', data)
  }

  botRegisterWeek (data) {
    return axios.post(API_URL + 'botRegisterWeek', data)
  }

  botRegisterGender (data) {
    return axios.post(API_URL + 'botRegisterGender', data)
  }

  botRegisterBDay (data) {
    return axios.post(API_URL + 'botRegisterBDay', data)
  }

  botRegisterBabyName (data) {
    return axios.post(API_URL + 'botRegisterBabyName', data)
  }

  botRegisterUserName (data) {
    return axios.post(API_URL + 'botRegisterUserName', data)
  }

  botRegisterName (data) {
    return axios.post(API_URL + 'botRegisterName', data)
  }

  register (user) {
    return axios.post(API_URL + 'signup', user)
  }
}

export default new AuthService()
