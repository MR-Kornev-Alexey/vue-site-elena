import DreamService from '../services/dream.service'

const user = JSON.parse(localStorage.getItem('user'))
const telegramUser = JSON.parse(localStorage.getItem('telegramUser'))
const numberMethod = ''
const allMethods = ''
const allStages = ''
const initialState = user
  ? {
      status: { loggedIn: true },
      user,
      telegramUser,
      numberMethod,
      allMethods,
      allStages
    }
  : {
      status: { loggedIn: false },
      user: null,
      telegramUser: null,
      numberMethod: null,
      allMethods: '',
      allStages: ''
    }

export const newDream = {
  namespaced: true,
  state: initialState,
  actions: {
    SET_NUMBER_METHOD ({ commit }, data) {
      return DreamService.changeMethodFromApi(data).then(
        res => {
          commit('SET_NUMBER', res.method_of_dream)
          return Promise.resolve(user)
        },
        error => {
          commit('getMethodFailure')
          return Promise.reject(error)
        }
      )
    },
    GET_METHOD_FROM_API ({ commit }, data) {
      return DreamService.getMethodFromApi(data).then(
        user => {
          commit('getMethodSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('getMethodFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    SET_NUMBER (state, data) {
      state.numberMethod = data
    },
    getMethodSuccess (state, user) {
      state.allMethods = user.data
      state.numberMethod = user.method.method_of_dream
      state.allStages = user.stages
    },
    getMethodFailure (state) {
      state.allMethods = ''
      state.numberMethod = ''
      state.allStages = ''
    }
  }
}
