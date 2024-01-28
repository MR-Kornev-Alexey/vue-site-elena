<template>
  <div class="container">
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <h4 class="title-user">
           Просмотр ДЗ пользователей
          </h4>
        </v-col>
      </v-row>
    </div>
    <div>
      <div class="profile-mod">
        <v-row class="justify-center d-flex">
          <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
            <div class="d-inline-flex all-size-font justify-center" style="width: 100%; margin: auto">
              <div class="size-5-left">
                №№
              </div>
              <div class="size-20-name">
                Имя пользователя
              </div>
              <div class="size-10-bd">
                ДР
              </div>
              <div class="size-20">
                Имя ребенка
              </div>
              <div class="size-10">
                Неделя
              </div>
              <div class="size-5">
                <svg-icon type="mdi" :path="pencil" :size="24"></svg-icon>
              </div>
            </div>
            <div v-for="(item, key) in allUsers" :key="key" >
              <div class="d-inline-flex all-size all-size-font justify-center" style="width: 100%; margin: auto" @click="openUser({ email: item.mail, week: item.week, name: item.name })">
                <div class="size-5-left" :class="colorLight(key)">
                  {{key + 1 }}
                </div>
                <div class="size-20-name" :class="colorLight(key)">
                  {{item.name}}
                </div>
                <div class="size-10-bd" :class="colorLight(key)">
                  {{item.birthdayBaby}}
                </div>
                <div class="size-20" :class="colorLight(key)">
                  {{item.babyName}}
                </div>
                <div class="size-10" :class="colorLight(key)">
                  {{item.week}}
                </div>
                <div class="size-5" :class="colorLight(key)">
                  <svg-icon type="mdi" :path="path6" :size="24"></svg-icon>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
<!--      <strong>allUsers:</strong>-->
<!--      {{ allUsers }}-->
    </div>
    <PopUpHW  :visible="showPopUp" :userMail="openUserMail" :nameUser="nameUser" :weekUser="weekUser" ref="childComponent"/>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiNoteEditOutline, mdiAccountEdit } from '@mdi/js'
import PopUpHW from '../popUp/PopUpHW'

export default {
  name: 'v-ModAllUsers',
  components: {
    SvgIcon,
    PopUpHW
  },
  data: () => ({
    showLogo: false,
    isScrolling: false,
    pencil: mdiNoteEditOutline,
    path6: mdiAccountEdit,
    showPopUp: false,
    openUserMail: '',
    dataUser: '',
    nameUser: '',
    weekUser: ''
  }),
  methods: {
    getAllDataFromHW (user) {
      this.loading = true
      this.$store.dispatch('auth/getAllFromHW', user).then(
        (res) => {
          this.dataUser = res
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
    colorLight (key) {
      return key % 2 === 1 ? 'colorLight' : 'colorLight'
    },
    openUser (data) {
      this.showPopUp = !this.showPopUp
      this.openUserMail = data.email
      this.nameUser = data.name
      this.weekUser = data.week
      this.$refs.childComponent.clearAll()
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    allUsers () {
      return this.$store.state.auth.allHW
    }
  },
  mounted () {
    this.getAllDataFromHW(this.currentUser.email)
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>
