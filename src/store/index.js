import { createStore } from 'vuex'
import { auth } from './auth.module'
import { newDream } from '@/store/newDream.module'
import { speakCourse } from '@/store/speakCourse.module'
import { emoCourse } from '@/store/emoCourse.module'
import { allTest } from '@/store/allTestes.module'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    newDream,
    speakCourse,
    emoCourse,
    allTest
  }
})
