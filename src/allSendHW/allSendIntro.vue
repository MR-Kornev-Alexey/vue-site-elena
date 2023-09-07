<template>
  <div class="all-screen mx-auto">
   <sendHWHeader />
    <div v-if="telegramUser.data.assess_homeworks">
      <div v-if="currentMonth <= 12">
        <v-row class="justify-center text-center pt-6">
          <v-col
            cols="11"
            md="6"
          >
            <router-link :to="'/developTest'">
              <v-btn class="btn-dream-next mx-auto">
                <p>
                  Тесты от 0 до 12 месяцев
                </p>
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row class="justify-center text-center">
        <v-col
          cols="11"
          md="6"
        >
          <router-link :to="'/commonOfGuides'">
            <v-btn class="btn-dream-next mx-auto">
              Гайды от 1 до 12 месяцев
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
      </div>
      <div v-else>
        <v-row class="justify-center text-center">
          <v-col
            cols="11"
            md="6"
          >
            <router-link :to="'#'">
              <v-btn class="btn-dream-next mx-auto">
                <p>
                  Тесты от 1 года до 3 лет
                </p>
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row class="justify-center text-center">
          <v-col
            cols="11"
            md="6"
          >
            <router-link :to="'#'">
              <v-btn class="btn-dream-next mx-auto"  style="text-decoration: none">
                Дополнительные материалы
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else>
      <v-row class="d-flex justify-center text-center">
        <v-col cols="11"  md="6">
          <H3  style="color: #2F3550">Доступ к ДЗ закрыт</H3>
          <p class="mb-6" style="color: #2F3550">
            Обратитесь, пожалуйста в
          </p>
          <a href="https://t.me/mrk_service">
          <v-btn class="btn-dream-next ">
           Службу Поддержки
          </v-btn>
          </a>
        </v-col>
      </v-row>
    </div>
<!--    {{telegramUser}}-->
    <Footer class="footer-down"/>
  </div>
</template>

<script>
import sendHWHeader from './sendHWHeader'
import Footer from '../views/Footer'

export default {
  name: 'allSendIntro',
  components: {
    sendHWHeader,
    Footer
  },
  data: () => ({
    checkTelegram: null,
    dialog: false
  }),
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    telegramUser () {
      return this.$store.state.auth.telegramUser
    },
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    }
  },
  mounted () {
    this.dialog = !this.dialog
  }
  // Двигательная активность
}
</script>

<style scoped>

</style>
