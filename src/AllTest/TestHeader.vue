<template>
  <div class="profile-mod">
    <v-row class="justify-center flex-column">
      <v-row class="flex-row mx-auto">
        <v-col md="auto" class="mx-auto justify-center text-center">
          <router-link :to="mainLink" @click="goBack">
            <svg-icon class="svgIcon" type="mdi" :path="back" size="34px" v-if="showBack" ></svg-icon>
          </router-link>
          <router-link :to="mainLink" >
            <svg-icon class="svgIcon" type="mdi" :path="home" size="40px" v-if="!showBack"></svg-icon>
          </router-link>
        </v-col>
        <v-col md="auto" class="flex-column justify-center text-center">
          <h4 class="d-flex title-user align-self-center mx-auto text-center">
            {{ title }}
          </h4>
          <p style="margin: auto; color: #2F3550">{{subTitle}}</p>
        </v-col>
        <v-col md="auto" class="mx-auto justify-center text-center">
          <v-row justify="center">
            <router-link :to="'/commonGuideForTest'">
              <svg-icon class="svgIcon" type="mdi" :path="ask" size="38px" v-if="showAsk"></svg-icon>
            </router-link>
            <v-dialog
              v-model="dialogBig"
              transition="dialog-bottom-transition"
              width="90%"
            >
              <template v-slot:activator="{ props }">
                <svg-icon v-bind="props" class="svgIcon" type="mdi" :path="baby" size="38px" v-if="showBaby"></svg-icon>
              </template>
              <div class="text-center justify-center flex-column">
                <dataOfBaby/>
                <div class="d-flex justify-center text-center mt-4">
                  <v-btn class=""
                         @click="dialogBig = false"
                         style="border-radius: 16px"
                  >
                    <p>
                      Закрыть
                    </p>
                  </v-btn>
                </div>
              </div>
            </v-dialog>
          </v-row>

        </v-col>
      </v-row>
    </v-row>
    <PopUpWaitingAllTests :visible="showWaiting"/>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHomeOutline, mdiBaby, mdiHeadQuestionOutline, mdiArrowLeftCircle } from '@mdi/js'
import dataOfBaby from '@/AllTest/dataOfBaby'
import PopUpWaitingAllTests from './popUp/PopUpWaitingAllTests'

export default {
  name: 'SpeakHeader',
  components: {
    SvgIcon,
    dataOfBaby,
    PopUpWaitingAllTests
  },
  props: {
    title: {
      default: 'Тестирование'
    },
    subTitle: {
      default: 'от нуля до 12 месяцев'
    },
    showBaby: {
      default: true
    },
    showAsk: {
      default: false
    },
    showBack: {
      default: false
    },
    mainLink: {
      default: '#'
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    telegramUser () {
      return this.$store.state.auth.telegramUser
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1) // Перейти назад в истории браузера
    },
    getDataFromUserTable (user) {
      this.$store.dispatch('auth/loginUserTable', user).then(
        (res) => {
          if (res) {
            this.userTable = res
            this.genderBaby = res.data.gender
            this.babyName = res.data.baby_name_telegram
            this.babyBirthday = res.data.birthday_telegram
            this.location = res.data.location
            this.weekBaby = res.data.baby_week
            this.weightNowBaby = res.data.weight_now
            this.growthNowBaby = res.data.growth_now
          }
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
    getDataFromTelegram (user) {
      this.$store.dispatch('auth/loginTelegram', user).then(
        (res) => {
          if (res) {
            this.fromServer = res
            this.showHelenBot = !res.find
            this.nameUser = res.data.real_name_telegram
          }
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
  data: () => ({
    dataUseFromApi: [],
    showWaiting: false,
    this_day: null,
    home: mdiHomeOutline,
    ask: mdiHeadQuestionOutline,
    baby: mdiBaby,
    back: mdiArrowLeftCircle,
    dialog: false,
    dialogBig: false,
    notifications: false,
    sound: true,
    widgets: false
  }),
  mounted () {
    this.dialog = !this.dialog
    this.showWaiting = !this.showWaiting
    // this.getDataFromUserTable(this.currentUser.email)
    this.getDataFromTelegram(this.currentUser.email)
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
.v-row {
  margin: 0;
}

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}

</style>
