import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Courses from '../views/MainCourses'
import Advice from '../views/MainAdvice'
import About from '../views/MainAbout'
import Terms from '../Legal/Terms'
import Privacy from '../Legal/Privacy'
// lazy-loaded
const Profile = () => import('../views/Profile.vue')
const BoardAdmin = () => import('../views/BoardAdmin.vue')
const BoardModerator = () => import('../views/BoardModerator.vue')
const BoardUser = () => import('../views/BoardUser.vue')
const AllUser = () => import('../views/allMod/ModAllUsers')
const Star30 = () => import('../views/allMod/ModStar3_0')
const Star10 = () => import('../views/allMod/ModStar1_0')
const CardOfOne = () => import('../views/oneUser/cardOfOneUser')
const ShowHW = () => import('../views/allMod/ModHomeworks')
const allUsersInfo = () => import('../views/allMod/SendUsersInfo')
const showEndingAllUsersOfSending = () => import('../views/allMod/showEndingAllUsersOfSending')
const showAllForBot = () => import('../views/allMod/showAllForBotHW')
const showSpeakCourse = () => import('../views/allMod/showSpeakCourse')
const showEmoCourse = () => import('../views/allMod/showEmoCourse')
const showEmoCourse3 = () => import('../views/allMod/showEmoCourse3')
const PatternLanding = () => import('../views/allLanding/PatternLanding')
const speakLanding = () => import('../views/allLanding/landingSorry')
const SpeakLandingSpecial = () => import('../views/allLanding/PatternLandingSpeak')

const FullRegister = () => import('../views/FullRegister')
// webinar
const MainPageWebinar = () => import('../devWebinars/MainWebinarsIntro')
// dream
const MainPageIntro = () => import('../chatBotDream/MainPageIntro')
const MainPageOfDream = () => import('../chatBotDream/MainPageOfDream')
const firstDreamPage = () => import('../chatBotDream/firstDreamPage')
const stagesOfWork = () => import('../chatBotDream/StagesOfWork')
const addDreamPage = () => import('../chatBotDream/addDreamPage')
// Emo Page
const EmoPageIntro = () => import('../emoCourse/EmoCourseIntroTemp')
// speak
const SpeakPageIntro = () => import('../SpeakCourse/SpeakIntro')
const SpeakVideo = () => import('../SpeakCourse/SpeakVideo')
const SpeakHW = () => import('../SpeakCourse/SpeakHW')
const SpeakSound = () => import('../SpeakCourse/SpeakSound')
const SpeakTest = () => import('../SpeakCourse/SpeakTest')
const speakAdd = () => import('../SpeakCourse/addSpeakInfo')
const SpeakTestOne = () => import('../SpeakCourse/test/test1')
const SpeakTestTwo = () => import('../SpeakCourse/test/test2')
const SpeakTestThree = () => import('../SpeakCourse/test/test3')
const SpeakTestFour = () => import('../SpeakCourse/test/test4')
const SpeakTestFive = () => import('../SpeakCourse/test/test5')
const SpeakTipOne = () => import('../SpeakCourse/tips/SpeakTipOne')
// Quiz's
const FirstQuiz = () => import('../PublicQuiz/SpeakQuiz')
const PublicQuiz = () => import('../PublicQuiz/FirstQuizSorry')
const DevelopTest = () => import('../AllTest/developTest')
const MoveTest = () => import('../AllTest/moveTest')
const SpeakTestGlobal = () => import('../AllTest/speakTest')
const EmoTestGlobal = () => import('../AllTest/emoTestGlobal')
const MoveTestSecond = () => import('../AllTest/moveTestSecond')
const SpeakTestSecond = () => import('../AllTest/SpeakTestSecond')
const EmoTestSecond = () => import('../AllTest/emoTestSecond')
const ResultMoveTest = () => import('../AllTest/resultMoveTest')
const ResultSpeakTest = () => import('../AllTest/resultSpeakTest')
const ResultEmoTest = () => import('../AllTest/resultEmoTest')
const CommonOfGuides = () => import('../AllTest/commonOfGuides')
const InstructionCommon = () => import('../views/allLanding/InstructionCommon')
const CommonGuideForTest = () => import('../AllTest/commonGuideForTest')
const DevelopTestFrom12To36 = () => import('../AllTest/from13to36/developTestFrom12To36')
const moveTestMore12 = () => import('../AllTest/from13to36/moveTestMore12')
const resultMove12andMore = () => import('../AllTest/from13to36/resultMove12andMore')
const resultSpeak12andMore = () => import('../AllTest/from13to36/resultSpeak12andMore')
const resultEmo12andMore = () => import('../AllTest/from13to36/resultEmo12andMore')
const speakTestMore12 = () => import('../AllTest/from13to36/speakTestMore12')
const emoTest12More = () => import('../AllTest/from13to36/emoTestMore12')
const thePsychologistHimself = () => import('../AllTest/addTest/thePsychologistHimself')
const brainWork = () => import('../AllTest/addTest/brainWork')
const goToDoctor = () => import('../AllTest/goToDoctor/goToDoctor')
const psychophysicalTest = () => import('../AllTest/psychophysicalTest/psychophysicalTest')
const psychophysicalTestSecond = () => import('../AllTest/psychophysicalTest/psychophysicalTestSecond')
const resultPSFTest = () => import('../AllTest/psychophysicalTest/resultPSFTest')
const diaperMystery = () => import('../diaperMystery/diaperMystery')
const newCourse = () => import('../newCourse/newCourse')
// HW
const HWAddPay = () => import('../bills/HWAddPay')
const allSendIntro = () => import('../allSendHW/allSendIntro')
const showAllMotherHood = () => import('../views/allMod/showAllMotherHood')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/courses',
    component: Courses
  },
  {
    path: '/advice',
    component: Advice
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/terms',
    component: Terms
  },
  {
    path: '/privacy',
    component: Privacy
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: Profile
  },
  {
    path: '/firstQuiz',
    name: 'firstQuiz',
    // lazy-loaded
    component: FirstQuiz
  },
  {
    path: '/HWAddPay',
    name: 'HWAddPay',
    // lazy-loaded
    component: HWAddPay
  },
  {
    path: '/allSendIntro',
    name: 'allSendIntro',
    // lazy-loaded
    component: allSendIntro
  },
  {
    path: '/publicQuiz',
    name: 'PublicQuiz',
    // lazy-loaded
    component: PublicQuiz
  },
  {
    path: '/instructionCommon',
    name: 'instructionCommon',
    // lazy-loaded
    component: InstructionCommon
  },
  {
    path: '/commonGuideForTest',
    name: 'commonGuideForTest',
    // lazy-loaded
    component: CommonGuideForTest
  },
  {
    path: '/moveTest',
    name: 'moveTest',
    // lazy-loaded
    component: MoveTest
  },
  {
    path: '/emoTestGlobal',
    name: 'emoTestGlobal',
    // lazy-loaded
    component: EmoTestGlobal
  },
  {
    path: '/speakTestGlobal',
    name: 'speakTestGlobal',
    // lazy-loaded
    component: SpeakTestGlobal
  },
  {
    path: '/moveTestSecond',
    name: 'moveTestSecond',
    // lazy-loaded
    component: MoveTestSecond
  },
  {
    path: '/speakTestSecond',
    name: 'speakTestSecond',
    // lazy-loaded
    component: SpeakTestSecond
  },
  {
    path: '/emoTestSecond',
    name: 'emoTestSecond',
    // lazy-loaded
    component: EmoTestSecond
  },
  {
    path: '/resultSpeakTest',
    name: 'resultSpeakTest',
    // lazy-loaded
    component: ResultSpeakTest
  },
  {
    path: '/resultEmoTest',
    name: 'resultEmoTest',
    // lazy-loaded
    component: ResultEmoTest
  },
  {
    path: '/commonOfGuides',
    name: 'commonOfGuides',
    // lazy-loaded
    component: CommonOfGuides
  },
  {
    path: '/diaperMystery',
    name: 'diaperMystery',
    // lazy-loaded
    component: diaperMystery
  },
  {
    path: '/newCourse',
    name: 'newCourse',
    // lazy-loaded
    component: newCourse
  },
  {
    path: '/resultMoveTest',
    name: 'resultMoveTest',
    // lazy-loaded
    component: ResultMoveTest
  },
  {
    path: '/developTest',
    name: 'developTest',
    // lazy-loaded
    component: DevelopTest
  },
  {
    path: '/developTestFrom12To36',
    name: 'developTestFrom12To36',
    // lazy-loaded
    component: DevelopTestFrom12To36
  },
  {
    path: '/moveTestMore12',
    name: 'moveTestMore12',
    // lazy-loaded
    component: moveTestMore12
  },
  {
    path: '/speakTestMore12',
    name: 'speakTestMore12',
    // lazy-loaded
    component: speakTestMore12
  },
  {
    path: '/emoTest12More',
    name: 'emoTest12More',
    // lazy-loaded
    component: emoTest12More
  },
  {
    path: '/thePsychologistHimself',
    name: 'thePsychologistHimself',
    // lazy-loaded
    component: thePsychologistHimself
  },
  {
    path: '/brainWork',
    name: 'brainWork',
    // lazy-loaded
    component: brainWork
  },
  {
    path: '/goToDoctor',
    name: 'goToDoctor',
    // lazy-loaded
    component: goToDoctor
  },
  {
    path: '/psychophysicalTest',
    name: 'psychophysicalTest',
    // lazy-loaded
    component: psychophysicalTest
  },
  {
    path: '/psychophysicalTestSecond',
    name: 'psychophysicalTestSecond',
    // lazy-loaded
    component: psychophysicalTestSecond
  },
  {
    path: '/resultPSFTest',
    name: 'resultPSFTest',
    // lazy-loaded
    component: resultPSFTest
  },
  {
    path: '/resultMove12andMore',
    name: 'resultMove12andMore',
    // lazy-loaded
    component: resultMove12andMore
  },
  {
    path: '/resultSpeak12andMore',
    name: 'resultSpeak12andMore',
    // lazy-loaded
    component: resultSpeak12andMore
  },
  {
    path: '/resultEmo12andMore',
    name: 'resultEmo12andMore',
    // lazy-loaded
    component: resultEmo12andMore
  },
  {
    path: '/admin',
    name: 'admin',
    // lazy-loaded
    component: BoardAdmin
  },
  {
    path: '/mod',
    name: 'moderator',
    // lazy-loaded
    component: BoardModerator
  },
  {
    path: '/user',
    name: 'user',
    // lazy-loaded
    component: BoardUser
  },
  {
    path: '/star3_0',
    name: 'star3_0',
    // lazy-loaded
    component: Star30
  },
  {
    path: '/star1_0',
    name: 'star1_0',
    // lazy-loaded
    component: Star10
  },
  {
    path: '/allUsers',
    name: 'allUsers',
    // lazy-loaded
    component: AllUser
  },
  {
    path: '/showAllForBot',
    name: 'showAllForBot',
    // lazy-loaded
    component: showAllForBot
  },
  {
    path: '/showSpeakCourse',
    name: 'showSpeakCourse',
    // lazy-loaded
    component: showSpeakCourse
  },
  {
    path: '/showEmoCourse',
    name: 'showEmoCourse',
    // lazy-loaded
    component: showEmoCourse
  },
  {
    path: '/showEmoCourse3',
    name: 'showEmoCourse3',
    // lazy-loaded
    component: showEmoCourse3
  },
  {
    path: '/speakLanding',
    name: 'speakLanding',
    // lazy-loaded
    component: speakLanding
  },
  {
    path: '/speakLandingSpecial',
    name: 'speakLandingSpecial',
    // lazy-loaded
    component: SpeakLandingSpecial
  },
  {
    path: '/patternLanding',
    name: 'patternLanding',
    // lazy-loaded
    component: PatternLanding
  },
  {
    path: '/fullRegister',
    name: 'fullRegister',
    // lazy-loaded
    component: FullRegister
  },
  {
    path: '/speakAdd',
    name: 'speakAdd',
    // lazy-loaded
    component: speakAdd
  },
  {
    path: '/mainPageWebinar',
    name: 'mainPageWebinar',
    // lazy-loaded
    component: MainPageWebinar
  },
  {
    path: '/emoPageIntro',
    name: 'emoPageIntro',
    // lazy-loaded
    component: EmoPageIntro
  },
  {
    path: '/speakPageIntro',
    name: 'speakPageIntro',
    // lazy-loaded
    component: SpeakPageIntro
  },
  {
    path: '/speakVideo',
    name: 'speakVideo',
    // lazy-loaded
    component: SpeakVideo
  },
  {
    path: '/speakTest',
    name: 'speakTest',
    // lazy-loaded
    component: SpeakTest
  },
  {
    path: '/speakHW',
    name: 'speakHW',
    // lazy-loaded
    component: SpeakHW
  },
  {
    path: '/speakSound',
    name: 'speakSound',
    // lazy-loaded
    component: SpeakSound
  },
  {
    path: '/speakAddInfo/',
    name: 'speakAddInfo',
    children: [
      {
        path: 'tipOne',
        component: SpeakTipOne
      },
      {
        path: 'testTwo',
        component: SpeakTestTwo
      },
      {
        path: 'testThree',
        component: SpeakTestThree
      },
      {
        path: 'testFour',
        component: SpeakTestFour
      },
      {
        path: 'testFive',
        component: SpeakTestFive
      }
    ]
  },
  {
    path: '/mainPageIntro',
    name: 'mainPageIntro',
    // lazy-loaded
    component: MainPageIntro
  },
  {
    path: '/mainPageOfDream',
    name: 'mainPageOfDream',
    // lazy-loaded
    component: MainPageOfDream
  },
  {
    path: '/firstDreamPage',
    name: 'firstDreamPage',
    // lazy-loaded
    component: firstDreamPage
  },
  {
    path: '/stagesOfWork',
    name: 'stagesOfWork',
    // lazy-loaded
    component: stagesOfWork
  },
  {
    path: '/addDreamPage',
    name: 'addDreamPage',
    // lazy-loaded
    component: addDreamPage
  },
  {
    path: '/allUsersInfo',
    name: 'allUsersInfo',
    // lazy-loaded
    component: allUsersInfo
  },
  {
    path: '/showEndingAllUsersOfSending',
    name: 'showEndingAllUsersOfSending',
    // lazy-loaded
    component: showEndingAllUsersOfSending
  },
  {
    path: '/cardOfOne',
    name: 'cardOfOne',
    // lazy-loaded
    component: CardOfOne
  },
  {
    path: '/showHW',
    name: 'ShowHW',
    // lazy-loaded
    component: ShowHW
  },
  {
    path: '/showAllMotherHood',
    name: 'showAllMotherHood',
    // lazy-loaded
    component: showAllMotherHood
  },
  {
    path: '/test/',
    children: [
      {
        path: 'testOne',
        component: SpeakTestOne
      },
      {
        path: 'testTwo',
        component: SpeakTestTwo
      },
      {
        path: 'testThree',
        component: SpeakTestThree
      },
      {
        path: 'testFour',
        component: SpeakTestFour
      },
      {
        path: 'testFive',
        component: SpeakTestFive
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home', '/courses', '/advice', '/about', '/firstQuiz', '/patternLanding', '/publicQuiz', '/speakLanding', '/instructionCommon', '/speakLandingSpecial', '/HWAddPay', '/newCourse']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  //   trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/home')
  } else {
    next()
  }
})
export default router
