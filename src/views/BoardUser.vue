<template>
  <div >
    <v-row class="justify-center d-flex" style="background-color: #3d498c">
      <v-col cols="11" class="d-flex justify-center text-center">
        <h4 class="title-user text-white">
          Личный кабинет   {{ currentUser.email  }}
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex mt-6">
      <v-col cols="11" class="d-flex justify-center">
        <router-link :to="'/profile'">
          <v-btn class="btn-green mx-auto">
            Ваш профиль
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
        <v-row class="justify-center d-flex mt-6">
          <v-col cols="11" class="d-flex justify-center">
            <h4 class="title-user">
             Открытые приложения
            </h4>
          </v-col>
        </v-row>
    <v-row class="justify-center d-flex mt-6" v-if="yesAccessNew.length === 0">
      <v-col cols="11" class="d-flex justify-center">
        <h3 >
         К сожалению, у вас нет открытых приложений
        </h3>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex pb-4" >
      <v-col cols="11" md="auto" class="d-flex justify-center" v-for="(item, key) in yesAccessNew" :key="key">
        <div style="position: relative" >
          <v-card
            class="mx-auto cards-user"
          >
            <v-img
              :src="choiceImg(item.index)"
              height="200px"
              cover
            ></v-img>

            <v-card-title class="my-card-title">
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle
              style = "min-height: 40px">
              <div v-html="item.subTitle">
              </div>
            </v-card-subtitle>
            <v-card-actions>
              <v-dialog
                transition="dialog-top-transition"
                width="auto"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="#018786"
                    v-bind="props"
                  >Подробно</v-btn>
                  <v-spacer></v-spacer><a :href="item.linkIn" style="text-decoration: none">
                  <v-btn
                    color="orange-lighten-2"
                    variant="text"
                  >
                    Перейти
                  </v-btn> </a>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar
                      color="#018786"
                      :title="item.title"
                      style="color: whitesmoke"
                    ></v-toolbar>
                    <v-card-text>
                      <div class="" v-html="item.description"></div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn
                        variant="text"
                        color="#018786"
                        @click="isActive.value = false"
                      >Закрыть</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <div style="background-color: #8cb4fc" class="pb-8 pt-3">
        <v-row class="justify-center d-flex">
          <v-col cols="11" class="d-flex justify-center">
            <h4 class="title-user">
             Доступные для покупки
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" >
          <v-col cols="11" md="auto" class="d-flex justify-center" v-for="(item, key) in noAccessNew" :key="key">
            <div style="position: relative" >
              <v-card
                class="mx-auto cards-user"
              >
                <v-img
                  :src="choiceImg(item.index)"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title class="my-card-title">
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle
                  style = "min-height: 40px">
                  <div v-html="item.subTitle">
                  </div>
                </v-card-subtitle>
                <v-card-actions>
                  <v-dialog
                    transition="dialog-top-transition"
                    width="auto"
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                        color="#018786"
                        v-bind="props"
                      >Подробно</v-btn>
                      <v-spacer></v-spacer><a :href="item.linkToTilda" target="_blank"  style="text-decoration: none">
                      <v-btn
                        color="orange-lighten-2"
                        variant="text"
                        style="text-decoration: none"
                      >
                        Перейти
                      </v-btn> </a>
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card>
                        <v-toolbar
                          color="#018786"
                          :title="item.title"
                          style="color: whitesmoke"
                        ></v-toolbar>
                        <v-card-text>
                          <div class="" v-html="item.description"></div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn
                            variant="text"
                            color="#018786"
                            @click="isActive.value = false"
                          >Закрыть</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </v-row>
       </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/views/Footer'
export default {
  name: 'v-profile',
  components: {
    Footer
  },
  data: () => ({
    show: false,
    showDescription: false,
    noAccessNew: [],
    yesAccessNew: []
  }),
  methods: {
    getDataFromTelegram (user) {
      this.loading = true
      this.$store.dispatch('auth/loginTelegram', user).then(
        () => {
          // this.$router.push('/profile')
        },
        (error) => {
          this.loading = false
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    },
    choiceImg (index) {
      const img = this.findObjectByIndex(this.$store.state.auth.courses, index)
      const setImg = img.img[this.$store.state.auth.numberOfOrder]
      // alert(setImg)
      return require('@/assets/img/newIcons/' + setImg)
    },
    findObjectByIndex (array, index) {
      const foundObject = array.find(obj => obj.index === index)
      if (foundObject) {
        return foundObject
      } else {
        // Если объект не найден, можно вернуть пустой объект или выбросить ошибку
        return false // Вернуть пустой объект
        // throw new Error('Object not found'); // Выбросить ошибку
      }
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    telegramUser () {
      return this.$store.state.auth.telegramUser
    },
    courseForIntensive () {
      const arrayOut = []
      const courses = this.$store.state.auth.courses
      const element = this.findObjectByIndex(courses, 5)
      if (element) {
        arrayOut.push(element)
      }
      return arrayOut
    },
    allCourses () {
      const arrayOut = []
      const newOrder = this.$store.state.auth.orderOfShow[1]
      const courses = this.$store.state.auth.courses
      for (let i = 0; i < newOrder.length; i++) {
        const element = this.findObjectByIndex(courses, newOrder[i])
        if (element) {
          arrayOut.push(element)
        }
      }
      return arrayOut
    }
  },
  mounted () {
    const courseData = [
      { access: 'access_emo', yesAccess: 'yesAccessNew', noAccess: 'noAccessNew', index: 3 },
      { access: 'assess_homeworks', yesAccess: 'yesAccessNew', noAccess: 'noAccessNew', index: 4 },
      { access: 'access_speak', yesAccess: 'yesAccessNew', noAccess: 'noAccessNew', index: 10 },
      { access: 'access_diaper', yesAccess: 'yesAccessNew', noAccess: 'noAccessNew', index: 6 },
      { access: 'access_regurgitation', yesAccess: 'yesAccessNew', noAccess: 'noAccessNew', index: 7 },
      { access: 'access_webinars', yesAccess: 'yesAccessNew', noAccess: 'noAccessNew', index: 8 },
      { access: 'access_dream', yesAccess: 'yesAccessNew', noAccess: 'noAccessNew', index: 9 },
      { access: 'access_webinars_new', yesAccess: 'yesAccessNew', noAccess: 'noAccessNew', index: 11 }
    ]
    for (const course of courseData) {
      if (this.telegramUser.data[course.access]) {
        const yesElement = this.findObjectByIndex(this.allCourses, course.index)
        if (yesElement) {
          this[course.yesAccess].push(yesElement)
        }
      } else {
        const noElement = this.findObjectByIndex(this.allCourses, course.index)
        if (noElement) {
          this[course.noAccess].push(noElement)
        }
      }
    }
    this.getDataFromTelegram(this.currentUser.email)
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss">
.my-card-description {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
}
.my-card-description .v-card-text {
  padding: 20px;
}
.my-card-description:hover {
  visibility: visible;
  opacity: 1;
}
</style>
