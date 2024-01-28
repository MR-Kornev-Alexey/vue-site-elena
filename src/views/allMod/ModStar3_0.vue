<template>
  <div class="container">
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <h4 class="title-user">
           Растим Звезду 3.0
          </h4>
        </v-col>
      </v-row>
    </div>
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <v-btn
            variant="text"
            class="btn-mod"
            @click="sendLetter=!sendLetter"
          >
            Написать письмо
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          {{message}}
        </v-col>
      </v-row>
    </div>
    <transition name="fade" >
      <v-row class="d-flex justify-center windowOpen" v-if="sendLetter" style="border: 2px solid #3a5493">
        <v-col cols="11"
               md="8"
               align-self="center"
               style="margin: auto "
               class="text-center justify-center"
               :key="render"
        >
           <h3>Отправить всем письмо</h3>
            <div class="d-flex" style="flex-direction: column">
              <div class="d-flex-column  justify-center">
                <v-textarea label="введите текст" v-model="textArea"></v-textarea>
              <v-btn
                variant="text"
                class="btn-mod"
                @click="sendingLetter"
              >
               отправить
              </v-btn>

            </div>
          </div>
        </v-col>
      </v-row>
    </transition>
    <div>
      <div class="profile-mod table-mod">
        <v-row class="justify-center d-flex">
          <v-col cols="12" class="justify-center d-flex" style="flex-direction: column">
            <div class="d-inline-flex all-size-font justify-center" style="width: 100%; margin: auto">
              <div class="size-5-left table-mod">
                №№
              </div>
              <div class="size-20-name table-mod">
                Имя пользователя
              </div>
              <div class="size-10-bd table-mod">
                ДР ребенка
              </div>
              <div class="size-20 table-mod">
                Имя ребенка
              </div>
              <div class="size-25 table-mod">
                E-mail
              </div>
              <div class="size-5 table-mod">
                <svg-icon type="mdi" :path="path6" :size="24"></svg-icon>
              </div>
<!--              <div class="size-10 table-mod">-->
<!--                HelenBot-->
<!--              </div>-->
            </div>
            <div v-for="(item, key) in allUserStar" :key="key">
              <div class="d-inline-flex all-size all-size-font justify-center" style="width: 100%; margin: auto">
                <div class="size-5-left table-mod" :class="colorLight(key)">
                  {{ key + 1 }}
                </div>
                <div class="size-20-name table-mod" :class="colorLight(key)"
                     @click="openUser({ email: item.email, name: item.name })">
                  {{ item.name }}
                </div>
                <div class="size-10-bd table-mod" :class="colorLight(key)">
                  {{ item.birthdayBaby }}
                </div>
                <div class="size-20 table-mod" :class="colorLight(key)">
                  {{ item.babyName }}
                </div>
                <div class="size-25-last table-mod" :class="colorLight(key)">
                  {{ item.email }}
                </div>
                <div class="size-5 table-mod" :class="colorLight(key)" @click="openUser({ email: item.email, name: item.name })">
                  <svg-icon type="mdi" :path="path6" :size="24"></svg-icon>
                </div>
<!--                <div class="size-10 table-mod" :class="colorLight(key)"-->
<!--                     @click="sendMessageForUser({ email: item.email, name: item.name , chatId: item.chatId})">-->
<!--                  <svg-icon type="mdi" :path="msg" :size="24"></svg-icon>-->
<!--                </div>-->
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <PopSendMessageHelenBot :visible="showPopUpSend" :userMail="openUserMail" :datUser="datUser" :nameUser="nameUser"
                            :chatIdUser="chatIdUser" ref="SendOneComponent"/>
    <PopUpUser :visible="showPopUp" :userMail="openUserMail" :datUser="datUser" :nameUser="nameUser"
               ref="childComponent"/>
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
    sendLetter: false,
    textArea: null,
    render: 0,
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
    allUserStar: [],
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
    sendingLetter () {
      if (this.textArea === null) {
        alert('введите текст')
      } else {
        const data = {
          sendingLetter: this.textArea,
          mail: this.currentUser.email
        }
        this.$store.dispatch('auth/star3SendingLetter', data).then(
          (res) => {
            this.message = res.msg
            setTimeout(async () => {
              if (res.check) {
                this.textArea = ''
                this.sendLetter = !this.sendLetter
                this.message = ''
              }
            }, 10000)
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
    allUsers () {
      let item
      for (item in this.$store.state.auth.allUsers) {
        this.allUserStar.push(item)
      }
    },
    cursorOpen (index) {
      if (index) {
        return 'cursorPointer'
      } else {
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
      const data = {
        index: index,
        mail: this.userMail
      }
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
    getStar3DataFromTelegram (user) {
      this.loading = true
      this.$store.dispatch('auth/UsersStar3Telegram', user).then(
        (res) => {
          this.allUserStar = res
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
    }
  },
  mounted () {
    this.getStar3DataFromTelegram(this.currentUser.email)
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>
