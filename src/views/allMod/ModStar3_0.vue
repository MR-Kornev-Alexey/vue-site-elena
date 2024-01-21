<template>
  <div class="container">
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <h4 class="title-user">
            Просмотр и изменение доступа к курсам
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
                ДР ребенка
              </div>
              <div class="size-20">
                Имя ребенка
              </div>
              <div class="size-25">
               E-mail
              </div>
              <div class="size-5">
                <svg-icon type="mdi" :path="path6" :size="24"></svg-icon>
              </div>
              <div class="size-10">
               HelenBot
              </div>
            </div>
            <div v-for="(item, key) in allUsers" :key="key" >
              <div class="d-inline-flex all-size all-size-font justify-center" style="width: 100%; margin: auto">
                <div class="size-5-left" :class="colorLight(key)">
                  {{key + 1 }}
                </div>
                <div class="size-20-name" :class="colorLight(key)" @click="openUser({ email: item.email, name: item.name })">
                  {{item.name}}
                </div>
                <div class="size-10-bd" :class="colorLight(key)">
                  {{item.birthdayBaby}}
                </div>
                <div class="size-20" :class="colorLight(key)">
                  {{item.babyName}}
                </div>
                <div class="size-25-last" :class="colorLight(key)">
                  {{item.email}}
                </div>
                <div class="size-5" :class="colorLight(key)" @click="openUser({ email: item.email, name: item.name })">
                  <svg-icon type="mdi" :path="path6" :size="24"></svg-icon>
                </div>
                <div class="size-10" :class="colorLight(key)" @click="sendMessageForUser({ email: item.email, name: item.name , chatId: item.chatId})">
                  <svg-icon type="mdi" :path="msg" :size="24"></svg-icon>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <PopSendMessageHelenBot  :visible="showPopUpSend" :userMail="openUserMail" :datUser="datUser" :nameUser="nameUser" :chatIdUser="chatIdUser" ref="SendOneComponent"/>
    <PopUpUser  :visible="showPopUp" :userMail="openUserMail" :datUser="datUser" :nameUser="nameUser" ref="childComponent"/>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiNoteEditOutline, mdiAccountEdit, mdiMessageReplyTextOutline } from '@mdi/js'
import PopUpUser from '../popUp/PopUpUser'
import PopSendMessageHelenBot from '../popUp/PopSendMessageHelenBot'

export default {
  name: 'v-ModAllUsers',
  components: {
    SvgIcon,
    PopUpUser,
    PopSendMessageHelenBot
  },
  data: () => ({
    dialog: false,
    dialog2: false,
    dialog3: false,
    showLogo: false,
    isScrolling: false,
    pencil: mdiNoteEditOutline,
    path6: mdiAccountEdit,
    msg: mdiMessageReplyTextOutline,
    showPopUp: false,
    showPopUpSend: false,
    openUserMail: '',
    openUserName: '',
    datUser: '',
    nameUser: '',
    chatIdUser: '',
    loading: false,
    message: '',
    courses: [
      {
        title: 'Общий доступ',
        index: 'access_all',
        open: false
      },
      {
        title: 'ЧАТБОТ по сну',
        index: 'access_dream',
        open: false
      },
      {
        title: 'Рассылка ДЗ',
        index: 'assess_homeworks',
        open: true
      },
      {
        title: 'Вебинары по развитию',
        index: 'access_webinars',
        open: true
      },
      {
        title: 'Курс по эмоциям',
        index: 'access_speak',
        open: true
      },
      {
        title: 'Курс по речевому развитию',
        index: 'access_emo',
        open: true
      },
      {
        title: 'Участник интенсива',
        index: 'access_intensive',
        open: true
      }
    ]
  }),
  methods: {
    cursorOpen (index) {
      if (index) { return 'cursorPointer' } else {
        return ''
      }
    },
    openNextWindow (index, open) {
      if (open) {
        // alert(index)
      }
    },
    changeClass (index) {
      if (this.newDatUser[index]) {
        return 'colorGreen'
      } else {
        return 'colorRed'
      }
    },
    checkAccess (index) {
      if (this.newDatUser[index]) {
        return 'Открыт'
      } else {
        return 'Закрыт'
      }
    },
    changeAccess (index) {
      const data = { index: index, mail: this.userMail }
      this.$store.dispatch('auth/changeAccess', data).then(
        (res) => {
          this.newDatUser = res
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
    sendMessageForUser (data) {
      this.showPopUpSend = !this.showPopUpSend
      this.openUserMail = data.email
      this.openUserName = data.name
      this.chatIdUser = data.chatId
      this.nameUser = data.name
      this.$refs.SendOneComponent.clearAll()
    },
    getAllDataFromTelegram (user) {
      this.loading = true
      this.$store.dispatch('auth/allUsersTelegram', user).then(
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
    colorLight (key) {
      return key % 2 === 1 ? '' : 'colorLight'
    },
    openUser (data) {
      // alert(data)
      this.showPopUp = !this.showPopUp
      this.openUserMail = data.email
      this.openUserName = data.name
      this.nameUser = data.name
      this.$refs.childComponent.getUserTelegram(data.email)
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    allUsers () {
      return this.$store.state.auth.allUsers
    }
  },
  mounted () {
    this.getAllDataFromTelegram(this.currentUser.email)
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>
