import SpeakService from '../services/speak.service'

const user = JSON.parse(localStorage.getItem('user'))
const telegramUser = JSON.parse(localStorage.getItem('telegramUser'))
const currenDay = null
const dataOfSend = ''
const fixDay = null
const initialState = user
  ? {
      status: { loggedIn: true },
      user,
      telegramUser,
      currenDay,
      fixDay,
      dataOfSend
    }
  : {
      status: { loggedIn: false },
      user: null,
      telegramUser: null,
      currenDay: null,
      fixDay: null,
      dataOfSend: ''
    }

export const speakCourse = {
  namespaced: true,
  state: initialState,
  actions: {
    SET_NUMBER_DAY ({ commit }, data) {
      return SpeakService.getChoiceDayFromApi(data).then(
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
      return SpeakService.reStartApi(data).then(
        res => {
          commit('getDaySuccess', res)
          return Promise.resolve(res)
        },
        error => {
          commit('getDayFailure')
          return Promise.reject(error)
        }
      )
    },
    getCurrentDay ({ commit }, data) {
      return SpeakService.getCurrentDayFromApi(data).then(
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
      state.fixDay = user.currentDay
      state.dataOfSend = user.daysData
      state.currenDay = user.currentDay
    },
    getDayFailure (state) {
      state.currenDay = null
    }
  }
}
