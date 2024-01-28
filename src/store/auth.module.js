import AuthService from '../services/auth.service'
import listOfCourse from '../lib/listOfCourse'
import orderOfBaby from '../lib/orderOfBaby'
import listOfLandingGet from '../lib/listOfLanding'

const user = JSON.parse(localStorage.getItem('user'))
const telegramUser = JSON.parse(localStorage.getItem('telegramUser'))
const currentMonthNew = JSON.parse(localStorage.getItem('currentMonthNew'))
const allUsers = null
const userOne = null
const allHW = null
const userAccess = null
const allDataOneUser = null
const userIntensive = null
const resultOfSend = null
const allHelen = null
const oneHelen = null
const numberOfOrder = 1
const numberOfLanding = 4
const courses = listOfCourse
const orderOfShow = orderOfBaby
const listOfLanding = listOfLandingGet
const apiCoursesContent = ''
const allSpeak = null
const allEmo = null
const quiz = null
const allSpeakInfo = null
const loggedBot = false
const userTableNew = JSON.parse(localStorage.getItem('telegramUserTable'))
const userStar3 = null
const userStar1 = null
const allUsersMotherHood = null
const checkEmail = null
const initialState = user
  ? {
      status: { loggedIn: true },
      user,
      telegramUser,
      allUsers,
      userOne,
      allHW,
      userAccess,
      allDataOneUser,
      userIntensive,
      resultOfSend,
      allHelen,
      oneHelen,
      courses,
      orderOfShow,
      numberOfOrder,
      apiCoursesContent,
      listOfLanding,
      numberOfLanding,
      allSpeak,
      allEmo,
      quiz,
      allSpeakInfo,
      loggedBot,
      userTableNew,
      currentMonthNew,
      allUsersMotherHood,
      userStar3,
      userStar1,
      checkEmail
    }
  : {
      status: { loggedIn: false },
      user: null,
      telegramUser: null,
      allUsers: null,
      userOne: null,
      allHW: null,
      userAccess: null,
      allDataOneUser: null,
      userIntensive: null,
      resultOfSend: null,
      allHelen: null,
      oneHelen: null,
      courses: listOfCourse,
      orderOfShow: orderOfBaby,
      listOfLanding: listOfLandingGet,
      numberOfOrder: 1,
      numberOfLanding: 4,
      apiCoursesContent: '',
      allSpeak: null,
      allEmo: null,
      quiz: '',
      allSpeakInfo: null,
      loggedBot: false,
      userTableNew: null,
      currentMonthNew: null,
      allUsersMotherHood: null,
      userStar3: null,
      userStar1: null,
      checkEmail: null
    }
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    setCurrentMonth ({ commit }, month) {
      commit('setCurrentMonthSuccess', month)
      localStorage.setItem('currentMonthNew', JSON.stringify(month))
    },
    changePeriod ({ commit }, data) {
      commit('changePeriodSuccess', data)
    },
    clearAllItemInMainApi ({ commit }, data) {
      return AuthService.clearAllItemInMainDBApi(data).then(
        user => {
          commit('userIntensiveSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userIntensiveFailure')
          return Promise.reject(error)
        }
      )
    },
    changeStatusOfSending ({ commit }, data) {
      return AuthService.changeStatusOfSendingIntensive(data).then(
        user => {
          commit('userIntensiveSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userIntensiveFailure')
          return Promise.reject(error)
        }
      )
    },
    saveAllToApi ({ commit }, data) {
      return AuthService.saveAllToApiOut(data).then(
        user => {
          commit('quizSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('quizFailure')
          return Promise.reject(error)
        }
      )
    },
    sendMessageOneHelenBot ({ commit }, data) {
      return AuthService.sendMessageOneHelenBotNoSpam(data).then(
        user => {
          commit('userOneSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userOneFailure')
          return Promise.reject(error)
        }
      )
    },
    sendMessageOneIntensive ({ commit }, data) {
      return AuthService.sendMessageOneIntensiveNoSpam(data).then(
        user => {
          commit('userIntensiveSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userIntensiveFailure')
          return Promise.reject(error)
        }
      )
    },
    sendAllUsersNoSpam ({ commit }, data) {
      return AuthService.sendAllUsersButNoSpam(data).then(
        user => {
          commit('sendAllUsersSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('sendAllUsersFailure')
          return Promise.reject(error)
        }
      )
    },
    changeWebinar ({ commit }, data) {
      return AuthService.changeWebinarAccess(data).then(
        user => {
          commit('userAccessSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userAccessFailure')
          return Promise.reject(error)
        }
      )
    },
    changeInputWeek ({ commit }, data) {
      return AuthService.changeInputWeekHW(data).then(
        user => {
          commit('userIntensiveSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userIntensiveFailure')
          return Promise.reject(error)
        }
      )
    },
    changeTimes ({ commit }, data) {
      return AuthService.changeTimes(data).then(
        user => {
          commit('userIntensiveSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userIntensiveFailure')
          return Promise.reject(error)
        }
      )
    },
    addEndOfSendHW ({ commit }, data) {
      return AuthService.changeEndOfSendHW(data).then(
        user => {
          commit('userIntensiveSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userIntensiveFailure')
          return Promise.reject(error)
        }
      )
    },
    star3SendingLetter ({ commit }, data) {
      return AuthService.star3SendingLetter(data).then(
        user => {
          commit('sendAllUsersSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('sendAllUsersFailure')
          return Promise.reject(error)
        }
      )
    },
    changeAccess ({ commit }, data) {
      return AuthService.changeOneAccess(data).then(
        user => {
          commit('userAccessSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userAccessFailure')
          return Promise.reject(error)
        }
      )
    },
    correctWeekNW ({ commit }, mail) {
      return AuthService.correctWeekNW(mail).then(
        user => {
          commit('userOneSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userOneFailure')
          return Promise.reject(error)
        }
      )
    },
    firstStartHW ({ commit }, mail) {
      return AuthService.firstStartHW(mail).then(
        user => {
          commit('userOneSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userOneFailure')
          return Promise.reject(error)
        }
      )
    },
    userTelegram ({ commit }, mail) {
      return AuthService.userOneTelegram(mail).then(
        user => {
          commit('userOneSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userOneFailure')
          return Promise.reject(error)
        }
      )
    },
    userIntensive ({ commit }, mail) {
      return AuthService.userOneIntensive(mail).then(
        user => {
          commit('userIntensiveSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('userIntensiveFailure')
          return Promise.reject(error)
        }
      )
    },
    getAllFromHW ({ commit }, user) {
      return AuthService.allHW(user).then(
        user => {
          commit('allHWSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allHWFailure')
          return Promise.reject(error)
        }
      )
    },
    getOneUsersBotHw ({ commit }, user) {
      return AuthService.oneUserFromBotHw(user).then(
        user => {
          commit('oneHelenSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('oneHelenFailure')
          return Promise.reject(error)
        }
      )
    },
    getAllUsersEmo ({ commit }, user) {
      return AuthService.getAllUsersEmoCourse(user).then(
        user => {
          commit('allEmoSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allEmoFailure')
          return Promise.reject(error)
        }
      )
    },
    getAllUsersEmo3 ({ commit }, user) {
      return AuthService.getAllUsersEmoCourse3(user).then(
        user => {
          commit('allEmoSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allEmoFailure')
          return Promise.reject(error)
        }
      )
    },
    getAllUsersSpeak ({ commit }, user) {
      return AuthService.getAllUsersSpeakCourse(user).then(
        user => {
          commit('allSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    allUsersMotherHood ({ commit }, user) {
      return AuthService.allUsersMotherHoodFromApi(user).then(
        user => {
          commit('allUsersMotherHoodSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allUsersMotherHoodFailure')
          return Promise.reject(error)
        }
      )
    },
    changeEmo3AccessToOneUser ({ commit }, user) {
      return AuthService.changeAccessToOneUserEmo3(user).then(
        user => {
          commit('allSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    changeAccessToOneUser ({ commit }, user) {
      return AuthService.changeAccessToOneUserSpeak(user).then(
        user => {
          commit('allSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    setSpeakStartToOneUser ({ commit }, user) {
      return AuthService.startToOneUserSpeak(user).then(
        user => {
          commit('allSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    sendAllEmo3Users ({ commit }, user) {
      return AuthService.sendAllEmo3UsersNoSpam(user).then(
        user => {
          commit('allInfoSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allInfoSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    sendAllSpeaksUsers ({ commit }, user) {
      return AuthService.sendAllSpeaksUsersNoSpam(user).then(
        user => {
          commit('allInfoSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allInfoSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    convertUsersToListEmo ({ commit }, user) {
      return AuthService.convertUsersToEmo(user).then(
        user => {
          commit('allSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    addUsersToListEmo3 ({ commit }, user) {
      return AuthService.convertUsersToEmo3(user).then(
        user => {
          commit('allSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    convertUsersToListEmo3 ({ commit }, user) {
      return AuthService.convertUsersToEmo3(user).then(
        user => {
          commit('allSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    convertUsersToListSpeak ({ commit }, user) {
      return AuthService.convertUsersToSpeak(user).then(
        user => {
          commit('allSpeakSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allSpeakFailure')
          return Promise.reject(error)
        }
      )
    },
    allUsersBotHw ({ commit }, user) {
      return AuthService.allUsersFromBotHw(user).then(
        user => {
          commit('allHelenSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allHelenFailure')
          return Promise.reject(error)
        }
      )
    },
    allUsersTelegram ({ commit }, user) {
      return AuthService.allTelegram(user).then(
        user => {
          commit('allUsersSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('allUsersFailure')
          return Promise.reject(error)
        }
      )
    },
    UsersStar1Telegram ({ commit }, user) {
      return AuthService.star1Telegram(user).then(
        user => {
          commit('star1Success', user)
          return Promise.resolve(user)
        },
        error => {
          commit('star1Failure')
          return Promise.reject(error)
        }
      )
    },
    UsersStar3Telegram ({ commit }, user) {
      return AuthService.star3Telegram(user).then(
        user => {
          commit('star3Success', user)
          return Promise.resolve(user)
        },
        error => {
          commit('star3Failure')
          return Promise.reject(error)
        }
      )
    },
    oneUserTelegram ({ commit }, mail) {
      return AuthService.getOneTelegram(mail).then(
        user => {
          commit('oneUsersSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('oneUsersFailure')
          return Promise.reject(error)
        }
      )
    },
    botRegisterGrowth ({ commit }, data) {
      return AuthService.botRegisterGrowth(data).then(
        res => {
          commit('loginUserTableSuccess', res)
          localStorage.setItem('telegramUserTable', JSON.stringify(res.data))
          return Promise.resolve(res)
        },
        error => {
          commit('loginUserTableFailure')
          return Promise.reject(error)
        }
      )
    },
    botRegisterWeight ({ commit }, data) {
      return AuthService.botRegisterWeight(data).then(
        res => {
          commit('loginUserTableSuccess', res)
          localStorage.setItem('telegramUserTable', JSON.stringify(res.data))
          return Promise.resolve(res)
        },
        error => {
          commit('loginUserTableFailure')
          return Promise.reject(error)
        }
      )
    },
    botRegisterWeek ({ commit }, data) {
      return AuthService.botRegisterWeek(data).then(
        res => {
          commit('loginUserTableSuccess', res)
          localStorage.setItem('telegramUserTable', JSON.stringify(res.data))
          return Promise.resolve(res)
        },
        error => {
          commit('loginUserTableFailure')
          return Promise.reject(error)
        }
      )
    },
    botRegisterGender ({ commit }, data) {
      return AuthService.botRegisterGender(data).then(
        res => {
          commit('loginUserTableSuccess', res)
          localStorage.setItem('telegramUserTable', JSON.stringify(res.data))
          return Promise.resolve(res)
        },
        error => {
          commit('loginUserTableFailure')
          return Promise.reject(error)
        }
      )
    },
    botRegisterGeo ({ commit }, data) {
      return AuthService.botRegisterGeo(data).then(
        res => {
          commit('loginTelegramSuccess', res)
          localStorage.setItem('telegramUserTable', JSON.stringify(res.data))
          return Promise.resolve(res)
        },
        error => {
          commit('loginTelegramFailure')
          return Promise.reject(error)
        }
      )
    },
    botRegisterBDay ({ commit }, data) {
      return AuthService.botRegisterBDay(data).then(
        res => {
          commit('loginUserTableSuccess', res)
          localStorage.setItem('telegramUserTable', JSON.stringify(res.data))
          return Promise.resolve(res)
        },
        error => {
          commit('loginTelegramFailure')
          return Promise.reject(error)
        }
      )
    },
    botRegisterBabyName ({ commit }, data) {
      return AuthService.botRegisterBabyName(data).then(
        res => {
          commit('loginUserTableSuccess', res)
          localStorage.setItem('telegramUserTable', JSON.stringify(res.data))
          return Promise.resolve(res)
        },
        error => {
          commit('loginTelegramFailure')
          return Promise.reject(error)
        }
      )
    },
    botRegisterUserName ({ commit }, data) {
      return AuthService.botRegisterUserName(data).then(
        res => {
          console.log(res)
          commit('loginUserTableSuccess', res.user)
          return Promise.resolve(res)
        },
        error => {
          commit('loginUserTableSuccess')
          return Promise.reject(error)
        }
      )
    },
    botRegisterName ({ commit }, data) {
      return AuthService.botRegisterName(data).then(
        res => {
          commit('loginTelegramSuccess', res)
          return Promise.resolve(res)
        },
        error => {
          commit('loginTelegramFailure')
          return Promise.reject(error)
        }
      )
    },
    loginUserTable ({ commit }, user) {
      return AuthService.loginUserTable(user).then(
        res => {
          commit('loginUserTableSuccess', res)
          return Promise.resolve(res)
        },
        error => {
          commit('loginUserTableFailure')
          return Promise.reject(error)
        }
      )
    },
    loginTelegram ({ commit }, user) {
      return AuthService.loginTelegram(user).then(
        res => {
          commit('loginTelegramSuccess', res)
          return Promise.resolve(res)
        },
        error => {
          commit('loginTelegramFailure')
          return Promise.reject(error)
        }
      )
    },
    login ({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
    logout ({ commit }) {
      AuthService.logout()
      commit('logout')
    },
    checkEmailRegister ({ commit }, user) {
      return AuthService.checkEmailRegisterOnApi(user).then(
        response => {
          commit('checkEmailSuccess')
          // console.log(response.data)
          return Promise.resolve(response)
        },
        error => {
          commit('checkEmailFailure')
          return Promise.reject(error)
        }
      )
    },
    register ({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('registerFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    coursesContentSuccess (state, data) {
      state.apiCoursesContent = data
    },
    coursesContentFailure (state) {
      state.apiCoursesContent = null
    },
    setCurrentMonthSuccess (state, month) {
      state.currentMonthNew = month
    },
    changePeriodSuccess (state, index) {
      state.numberOfOrder = index
    },
    oneHelenSuccess (state, user) {
      state.oneHelen = user
    },
    oneHelenFailure (state) {
      state.oneHelen = null
    },
    allInfoSpeakSuccess (state, user) {
      state.allSpeakInfo = user
    },
    allInfoSpeakFailure (state) {
      state.allSpeakInfo = null
    },
    allEmoSuccess (state, user) {
      state.allEmo = user
    },
    allEmoFailure (state) {
      state.allEmo = null
    },
    allUsersMotherHoodSuccess (state, user) {
      state.allUsersMotherHood = user
    },
    allUsersMotherHoodFailure (state) {
      state.allUsersMotherHood = null
    },
    allSpeakSuccess (state, user) {
      state.allSpeak = user
    },
    allSpeakFailure (state) {
      state.allSpeak = null
    },
    allHelenSuccess (state, user) {
      state.allHelen = user
    },
    allHelenFailure (state) {
      state.allHelen = null
    },
    sendAllUsersSuccess (state, user) {
      state.resultOfSend = user
    },
    sendAllUsersFailure (state) {
      state.resultOfSend = null
    },
    userAccessSuccess (state, user) {
      state.userAccess = user
    },
    userIntensiveSuccess (state, user) {
      state.userIntensive = user
    },
    userIntensiveFailure (state) {
      state.userIntensive = null
    },
    quizSuccess (state, data) {
      state.quiz = data
    },
    quizFailure (state) {
      state.quiz = null
    },
    userOneSuccess (state, user) {
      state.userOne = user
    },
    allHWSuccess (state, user) {
      state.allHW = user
    },
    loginSuccess (state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    star3Success (state, user) {
      state.userStar3 = user
    },
    star3Failure (state) {
      state.userStar3 = null
    },
    star1Success (state, user) {
      state.userStar1 = user
    },
    star1Failure (state) {
      state.userStar1 = null
    },
    oneUsersSuccess (state, user) {
      state.allDataOneUser = user
    },
    allUsersSuccess (state, user) {
      state.allUsers = user
    },
    loginUserTableSuccess (state, user) {
      state.userTableNew = user
    },
    loginUserTableFailure (state) {
      state.userTableNew = null
    },
    loginTelegramSuccess (state, user) {
      state.telegramUser = user
    },
    loginTelegramFailure (state) {
      state.telegramUser = null
    },
    userOneFailure (state) {
      state.userOne = null
    },
    userAccessFailure (state) {
      state.userAccess = null
    },
    allHWFailure (state) {
      state.allHW = null
    },
    allUsersFailure (state) {
      state.allUsers = null
    },
    oneUsersFailure (state) {
      state.allDataOneUser = null
    },
    loginFailure (state) {
      state.user = null
    },
    logout (state) {
      state.status.loggedIn = false
      state.user = null
    },
    checkEmailSuccess (state) {
      state.checkEmail = true
    },
    checkEmailFailure (state) {
      state.checkEmail = false
    },
    registerSuccess (state) {
      state.status.loggedIn = false
    },
    registerFailure (state) {
      state.status.loggedIn = false
    }
  }
}
