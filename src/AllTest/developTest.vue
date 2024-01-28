<template>
  <div class="all-screen mx-auto">
    <testHeader :title="titleOut" />

    <v-row class="justify-center text-center pt-6">
      <v-col
        cols="11"
        md="6"
      >
        <router-link :to="'/moveTest'">
          <v-btn class="btn-dream-next mx-auto">
            <p>
             Двигательная активность
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
        <router-link :to="'/speakTestGlobal'">
          <v-btn class="btn-dream-next mx-auto">
            <p>
              Речевое развитие
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
        <router-link :to="'/emoTestGlobal'">
          <v-btn class="btn-dream-next mx-auto"  style="text-decoration: none">
            Эмоциональное развитие
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center ">
      <v-col
        cols="11"
        md="6"
      >
        <router-link :to="'/psychophysicalTest'">
          <v-btn class="btn-dream-next mx-auto">
           Психо - физическое развитие
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="11"
        md="6"
      >
        <router-link :to="'/goToDoctor'">
          <v-btn class="btn-dream-next mx-auto">
            Когда идем к доктору
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center mb-6">
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
    <Footer :class="footerClass"/>
  </div>
</template>

<script>
import Footer from '../views/Footer'
import testHeader from '@/AllTest/TestHeader'
export default {
  name: 'developTest',
  components: {
    testHeader,
    Footer
  },
  data: () => ({
    titleOut: 'Выберите тест',
    footerClass: 'footer-down'
  }),
  computed: {
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    }
  },
  methods: {
    checkScreenWidth () {
      if (window.innerWidth <= 480) {
        this.footerClass = 'footer'
      } else {
        this.footerClass = 'footer-down'
      }
    }
  },
  mounted () {
    if (this.currentMonth > 12) {
      this.$router.push('/developTestFrom12To36')
    }
    this.checkScreenWidth()
    window.addEventListener('resize', this.checkScreenWidth)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.checkScreenWidth)
  }
}
</script>

<style scoped>

</style>
