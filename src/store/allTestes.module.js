import TestService from '@/services/test.service'

const user = JSON.parse(localStorage.getItem('user'))
const telegramUser = JSON.parse(localStorage.getItem('telegramUser'))
const dataWebinar = null
const monthMoveOfTest = JSON.parse(localStorage.getItem('moveTest'))
const speakMonthOfTest = JSON.parse(localStorage.getItem('speakGlobal'))
const emoMonthOfTest = JSON.parse(localStorage.getItem('emoGlobal'))
const psychoMonthOfTest = JSON.parse(localStorage.getItem('psychoGlobal'))
const checkPsy = false
const initialState = user
  ? {
      status: { loggedIn: true },
      user,
      telegramUser,
      dataWebinar,
      monthMoveOfTest,
      speakMonthOfTest,
      emoMonthOfTest,
      psychoMonthOfTest,
      checkPsy
    }
  : {
      status: { loggedIn: false },
      user: null,
      telegramUser: null,
      dataWebinar: null,
      monthMoveOfTest: null,
      speakMonthOfTest: null,
      emoMonthOfTest: null,
      psychoMonthOfTest: null,
      checkPsyL: false
    }

export const allTest = {
  namespaced: true,
  state: initialState,
  actions: {
    setPsy ({ commit }, data) {
      commit('SET_FLAG_PSY_MONTH', data)
    },
    getMonthOfPsychophysical ({ commit }, data) {
      commit('SET_PSYCHO_MONTH', data)
      localStorage.setItem('psychoGlobal', JSON.stringify(data))
    },
    getMonthOfEmoOfTest ({ commit }, data) {
      commit('SET_EMO_MONTH', data)
      localStorage.setItem('emoGlobal', JSON.stringify(data))
    },
    getMonthOfSpeakOfTest ({ commit }, data) {
      commit('SET_SPEAK_MONTH', data)
      localStorage.setItem('speakGlobal', JSON.stringify(data))
    },
    getMonthOfMoveTest ({ commit }, data) {
      commit('SET_MOVE_MONTH', data)
      localStorage.setItem('moveTest', JSON.stringify(data))
    },
    getBabyDataFromApi ({ commit }, data) {
      return TestService.getWebDataFromApi(data).then(
        res => {
          commit('SET_DATA', res)
          return Promise.resolve(res)
        },
        error => {
          commit('ERROR_DATA')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    SET_DATA (state, data) {
      state.dataWebinar = data
    },
    SET_FLAG_PSY_MONTH (state, data) {
      state.checkPsy = data
    },
    SET_PSYCHO_MONTH (state, data) {
      state.psychoMonthOfTest = data
    },
    SET_EMO_MONTH (state, data) {
      state.emoMonthOfTest = data
    },
    SET_SPEAK_MONTH (state, data) {
      state.speakMonthOfTest = data
    },
    SET_MOVE_MONTH (state, data) {
      state.monthMoveOfTest = data
    },
    ERROR_DATA (state) {
      state.dataWebinar = null
    }
  }
}
