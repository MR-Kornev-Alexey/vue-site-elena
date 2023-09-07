<template>
  <v-container :key="render">
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <h4 class="title-user">
            Просмотр и изменение даты окончания рассылки ДЗ
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" >
        <v-col cols="11" class="d-flex justify-center">
          <v-btn style="height: 32px" @click="clearAllItemInMain()">
           Обнулить рассылку в главной таблице
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" v-if="!button">
        <v-col cols="11" class="d-flex justify-center">
        <v-btn style="height: 32px" @click="noShowItem()">
         Убрать отключенные аккаунты
        </v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" v-if="button">
        <v-col cols="11" class="d-flex justify-center">
          <v-btn style="height: 32px" @click="showItem()">
            Включить отключенные аккаунты
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column" >
          <div class="d-inline-flex justify-center table-sendHW">
            <div class="size-3-left">
              №№
            </div>
            <div class="size-15">
              Имя пользователя
            </div>
            <div class="size-10-bd">
              ДР ребенка
            </div>
            <div class="size-12">
              Имя ребенка
            </div>
            <div class="size-12">
              Неделя
            </div>
            <div class="size-15">
              E-mail
            </div>
            <div class="size-12">
              Начало рассылки
            </div>
            <div class="size-12">
              Окончание рассылки
            </div>
            <div class="size-5">
              <svg-icon type="mdi" :path="pencil" :size="24"></svg-icon>
            </div>
            <div class="size-5">
              <svg-icon type="mdi" :path="path6" :size="24"></svg-icon>
            </div>
            <div class="size-5">
              <svg-icon type="mdi" :path="close" :size="24"></svg-icon>
            </div>
          </div>
          <div v-for="(item, key) in allUserOfSent" :key="key" >
            <div class="d-inline-flex justify-center table-sendHW" v-if="showFlagSend(item.send)">
              <div class="size-3-left" :class="colorLight(key)">
                {{key + 1}}
              </div>
              <div class="size-15" :class="colorLight(key)">
                {{item.name}}
              </div>
              <div class="size-10-bd" :class="colorLight(key)">
                {{item.birthdayBaby}}
              </div>
              <div class="size-12" :class="colorLight(key)">
                {{item.babyName}}
              </div>
              <div class="size-12" :class="colorLight(key)" @click="changeOfWeek(item)" style="cursor: pointer">
                {{item.week}}
              </div>
              <div class="size-15" :class="colorLight(key)" >
                {{item.email}}
              </div>
              <div class="size-12" :class="colorLight(key)">
                {{ convertTime(item.start) }}
              </div>
              <div class="size-12" :class="colorLight(key)">
                {{ convertTime(item.end) }}
              </div>
              <div class="size-5" :class="colorLight(key)" @click="sendMessage(item)">
                <svg-icon type="mdi" :path="pencil" :size="24" :style="selectColor(item.send)"></svg-icon>
              </div>
              <div class="size-5" :class="colorLight(key)" @click="changeOfWeek(item)">
                <svg-icon type="mdi" :path="path6" :size="24" :style="selectColor(item.send)"></svg-icon>
              </div>
              <div class="size-5" :class="colorLight(key)" @click="closeOfSending(item.chatId)">
                <svg-icon type="mdi" :path="close" :size="24" :style="selectColor(item.send)"></svg-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <PopSendMessageForOne :visible="showUp" :userMail="openUserMail" :nameUser="nameUser" :weekUser="weekUser" :idUser="idUser"/>
    <PopChangeWeekOfSend :visible="showWeek" :userMail="openUserMail" :nameUser="nameUser" :weekUser="weekUser" :idUser="idUser"/>
  </v-container>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCloseOctagonOutline, mdiEmailFastOutline, mdiTimerPlusOutline } from '@mdi/js'
import PopSendMessageForOne from '../popUp/PopSendMessageForOne'
import PopChangeWeekOfSend from '../popUp/PopChangeWeekOfSend'

export default {
  name: 'showEndingAllUsersOfSending',
  components: {
    SvgIcon,
    PopSendMessageForOne,
    PopChangeWeekOfSend
  },
  data: () => ({
    pencil: mdiEmailFastOutline,
    path6: mdiTimerPlusOutline,
    close: mdiCloseOctagonOutline,
    showUp: false,
    showWeek: false,
    button: false,
    loading: false,
    message: '',
    pattern: 'Уважаемая Юлия \n' +
      'Вот и прошло три месяца отправки Домашних заданий на ваш Телеграмм канал. Надеемся, что Вам все нравится.\n' +
      'Прошу Вас сообщить будете ли продлевать услугу и на сколько месяцев\n' +
      'С уважением Алексей\n' +
      'P.S. Отвечать лучше в телеграмме в Службу поддержки https://t.me/mrk_service',
    flagSend: true,
    openUserMail: '',
    nameUser: '',
    idUser: '',
    weekUser: '',
    months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    allUserOfSent: [],
    result: '',
    render: 0
  }),
  methods: {
    changeOfWeek (id) {
      this.showWeek = !this.showWeek
      this.idUser = id.chatId
      this.openUserMail = id.email
      this.nameUser = id.name
      this.weekUser = id.week
    },
    sendMessage (id) {
      this.showUp = !this.showUp
      this.idUser = id.chatId
      this.openUserMail = id.email
      this.nameUser = id.name
      this.weekUser = id.week
    },
    closeOfSending (id) {
      // alert(id)
      const data = { chatId: id }
      // alert(this.idUser)
      this.$store.dispatch('auth/changeStatusOfSending', data).then(
        (res) => {
          this.render++
          this.allUserOfSent = res
          location.reload()
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
    showFlagSend (send) {
      if (!send) {
        return this.flagSend
      } else {
        return true
      }
    },
    selectColor (send) {
      if (send) {
        return { color: '#239457' }
      } else {
        return { color: '#b93151' }
      }
    },
    clearAllItemInMain () {
      this.$store.dispatch('auth/clearAllItemInMainApi').then(
        (res) => {
          this.render++
          this.allUserOfSent = res
          location.reload()
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
    noShowItem () {
      this.button = !this.button
      this.flagSend = !this.flagSend
    },
    showItem () {
      this.button = !this.button
      this.flagSend = !this.flagSend
    },
    colorLight (key) {
      return key % 2 === 1 ? '' : 'colorLight'
    },
    convertTime (dateString) {
      // return date
      const date = new Date(dateString)
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear().toString().slice(-2)
      return `${day} ${this.months[month]} ${year} года`
    },
    getAllDataFromHW (user) {
      this.loading = true
      this.$store.dispatch('auth/getAllFromHW', user).then(
        (res) => {
          this.allUserOfSent = res
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
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    allUsers () {
      return this.allUserOfSent
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

<style scoped>

</style>
