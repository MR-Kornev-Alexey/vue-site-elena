import EmoService from '../services/emo.service'

const user = JSON.parse(localStorage.getItem('user'))
const telegramUser = JSON.parse(localStorage.getItem('telegramUser'))
const currenEmoDay = null
const dataFromApi = ''
const fixEmoDay = null
const initialState = user
  ? {
      status: { loggedIn: true },
      user,
      telegramUser,
      currenEmoDay,
      fixEmoDay,
      dataFromApi
    }
  : {
      status: { loggedIn: false },
      user: null,
      telegramUser: null,
      currenEmoDay: null,
      fixEmoDay: null,
      dataFromApi: ''
    }

export const emoCourse = {
  namespaced: true,
  state: initialState,
  actions: {
    SET_NUMBER_DAY ({ commit }, data) {
      return EmoService.getChoiceDayFromApi(data).then(
        res => {
          commit('setDaySuccess', data.day)
          commit('setDaysDataSuccess', res)
          return Promise.resolve(res)
        },
        error => {
          commit('getDayFailure')
          return Promise.reject(error)
        }
      )
    },
    reStart ({ commit }, data) {
      return EmoService.reStartApi(data).then(
        res => {
          commit('setDaySuccess', data.day)
          commit('setDaysDataSuccess', res)
          return Promise.resolve(res)
        },
        error => {
          commit('getDayFailure')
          return Promise.reject(error)
        }
      )
    },
    getCurrentDay ({ commit }, data) {
      return EmoService.getCurrentEmoDayFromApi(data).then(
        res => {
          commit('getDaySuccess', res)
          return Promise.resolve(res)
        },
        error => {
          commit('getDayFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    setDaySuccess (state, index) {
      state.fixDay = index
    },
    setDaysDataSuccess (state, data) {
      state.dataOfSend = data
    },
    getDaySuccess (state, user) {
      state.currenEmoDay = user.dayEmo
      state.dataFromApi = user.daysContent
    },
    getDayFailure (state) {
      state.currenDay = null
    }
  }
}
