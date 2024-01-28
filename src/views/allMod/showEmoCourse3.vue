<template>
  <div class="container">
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center flex-column text-center" >
          <h4 class="title-user mx-auto">
           Курс по эмоциональному развитию 3.0
          </h4>
       </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center flex-column text-center" >
      <v-btn
        class="btn-dream-back  mx-auto" @click="convertUsersToList()"
      >Конвертировать для рассылки
      </v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center flex-column text-center" >
          <v-btn
            class="btn-dream-back  mx-auto" @click="addUsersToList()"
          >Добавить нового участника
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
      <v-col cols="auto">
          <v-dialog
            transition="dialog-top-transition"
            width="60%"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                class="btn-dream-back "
                v-bind="props"
              >Отправить сообшение всем</v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar
                  color="#4464A3"
                  title="Отправить сообшение"
                  style="color: whitesmoke"
                ></v-toolbar>
                <v-card-text>
                  <v-textarea
                    clearable
                    clear-icon="mdi-close-circle"
                    label="Введите сообщение"
                    v-model="messageArea"
                  ></v-textarea>
                  <i style="font-size: 12px" >
                    {{message}}
                  </i>
                </v-card-text>
                <v-card-actions class="justify-sm-space-between">
                  <v-btn
                    color="#018786"
                    style="border-radius: 16px; padding: 0 10px"
                    @click="sendMessageFoAll()"
                   >Отправить</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    variant="text"
                    @click="isActive.value = false"
                    style="border-radius: 16px; padding: 0 10px"
                  >Закрыть</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex mt-6">
        <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column; padding: 0; margin: 0" >
          <div class="d-inline-flex all-size-font justify-center">
            <div class="size-5-left">
              №№
            </div>
            <div class="size-20-name " >
              Имя пользователя
            </div>
            <div class="size-15" >
              Email
            </div>
            <div class="size-15">
              chatId
            </div>
            <div class="size-5">
               день
            </div>
            <div class="size-5" >
             старт/стоп
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex ">
        <v-col cols="12"  class="justify-center  d-flex" style="flex-direction: column; padding: 0; margin: 0" v-for="(item, key) in allEmoUsers" :key="key">
          <div class="d-inline-flex all-size-font justify-center" >
            <div class="size-5-left" :class="colorLight(key)">
            {{key + 1}}
            </div>
            <div class="size-20-name" :class="colorLight(key)">
              {{item.first_name_telegram }} /{{item.real_name_telegram }}
            </div>
            <div class="size-15" :class="colorLight(key)">
              {{item.email_telegram }}
            </div>
            <div class="size-15" :class="colorLight(key)">
              {{item.chatId}}
            </div>
            <div class="size-5 " :class="colorLight(key)" style="text-align: center">
              {{item.index_send}}
            </div>
            <div class="size-5" :class="colorLight(key)" @click="changeAccess(item.email_telegram)" >
                <svg-icon type="mdi" :path="open"  style="color: darkgreen" v-if="item.send_3"></svg-icon>
                <svg-icon type="mdi" :path="close"  style="color: #b93151" v-if="!item.send_3"></svg-icon>
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="auto"
        >
          <v-card>
            <v-card-text>
              <div class="d-inline-flex all-size-font justify-center" style="width: 100%; margin: auto">
                <div class="size-20 mx-6">
                  <h4>
                    {{oneUser.real_name_telegram}}
                  </h4>
                </div>
                <div class="size-20-name mx-6">
                  <h4>
                    {{oneUser.email_telegram}}
                  </h4>
                </div>
                <div class="size-20 mx-6" >
                  <h4>
                    {{oneUser.createdAt}}
                  </h4>
                </div>
              </div>
              {{oneUser}}
            </v-card-text>
            <v-card-actions>
              <v-btn color="#4464A3" block @click="dialog = false">Закрыть</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
<!--    {{allEmoUsers}}-->
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClockStart, mdiCloseOutline, mdiOpenInNew } from '@mdi/js'
export default {
  name: 'showSpeakCourse',
  components: {
    SvgIcon
  },
  data: function () {
    return {
      loading: false,
      message: '',
      dialog: false,
      messageArea: '',
      allUsers: [],
      allEmoUsers: [],
      oneUser: '',
      start: mdiClockStart,
      close: mdiCloseOutline,
      open: mdiOpenInNew
    }
  },
  methods: {
    sendMessageFoAll () {
      this.message = ''
      if (this.messageArea === '') {
        this.message = 'чего-то надо написать'
      } else {
        const data = { admin: this.currentUser, msg: this.messageArea }
        this.$store.dispatch('auth/sendAllEmo3Users', data).then(
          (res) => {
            this.message = res
            this.messageArea = ''
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
    addUsersToList () {
      this.loading = true
      this.$store.dispatch('auth/addUsersToListEmo3', this.currentUser).then(
        (res) => {
          this.allEmoUsers = res
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
    convertUsersToList () {
      this.loading = true
      this.$store.dispatch('auth/convertUsersToListEmo3', this.currentUser).then(
        (res) => {
          this.allEmoUsers = res
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
    getAllUsersFromEmo () {
      this.loading = true
      this.$store.dispatch('auth/getAllUsersEmo3', this.currentUser).then(
        (res) => {
          this.allEmoUsers = res
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
    changeAccess (email) {
      const data = {
        admin: this.currentUser,
        email: email
      }
      this.$store.dispatch('auth/changeEmo3AccessToOneUser', data).then(
        (res) => {
          this.allEmoUsers = res
          window.location.reload()
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
    startCourse (chatId) {
      const data = {
        admin: this.currentUser,
        chatId: chatId
      }
      this.$store.dispatch('auth/setSpeakStartToOneUser', data).then(
        (res) => {
          this.allEmoUsers = res
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
    openDialog (id) {
      this.dialog = !this.dialog
      const data = {
        admin: this.currentUser.email,
        chatId: id
      }
      this.$store.dispatch('auth/getOneUsersBotHw', data).then(
        (res) => {
          this.oneUser = res
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
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.push('/login')
    } else {
      this.getAllUsersFromEmo(this.currentUser.email)
    }
  }
}
</script>

<style scoped>

</style>
