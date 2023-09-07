<template>
  <div>
  <testHeader :title="titleOut" :mainLink="mainLink" />
    <v-row class="justify-center d-flex pt-6" v-if="showWeight">
      <v-col cols="11" md="6" class="d-flex ">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold">
            Вес ребенка в настоящее время:
          </div>
          <div class="ml-4">
            {{ weightNowCalc }}
          </div>
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex mt-4" v-else>
      <v-col cols="11" md="6" >
        <p> Для тестирования необходим такой параметр, как вес ребенка в настоящее время. </p>
        <p> Прошу вас выбрать иконку
          <svg-icon class="svgIcon" type="mdi" :path="baby" size="28px"></svg-icon>
          справа вверху и ввести вес ребенка в настоящее время
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex" v-if="showGrowth">
      <v-col cols="11" md="6" class="d-flex ">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold">
            Рост ребенка в настоящее время:
          </div>
          <div class="ml-4">
            {{ growthNowCalc }}
          </div>
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex mt-4" v-else>
      <v-col cols="11" md="6" >
        <p> Для тестирования необходим такой параметр, как рост ребенка в настоящее время. </p>
        <p> Прошу вас выбрать иконку
          <svg-icon class="svgIcon" type="mdi" :path="baby" size="28px"></svg-icon>
          справа вверху и ввести рост ребенка в настоящее время
        </p>
      </v-col>
    </v-row>
    <commonStartTest @startTestPsy="startTest"/>
  <Footer :class="footerClass"/>
  </div>
</template>

<script>
import testHeader from '@/AllTest/TestHeader'
import Footer from '@/views/Footer'
import commonStartTest from '@/AllTest/common/commonStartTest'
import { mdiBaby } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import MainCheck from '@/lib/mainCheck'

export default {
  name: 'psychophysicalTest',
  components: {
    testHeader,
    SvgIcon,
    commonStartTest,
    Footer
  },
  data: () => ({
    titleOut: 'Психо - физическое развитие',
    footerClass: 'footer-down',
    mainLink: '/developTest',
    weightNowBaby: null,
    showWeight: false,
    showGrowth: false,
    baby: mdiBaby
  }),
  computed: {
    genderFromApi () {
      return this.$store.state.auth.userTableNew.data.gender
    },
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    dataOfTableUser () {
      return this.$store.state.auth.userTableNew.data
    },
    growthNowCalc () {
      if (this.dataOfTableUser.growth_now === null) {
        return 'данные не введены'
      } else {
        return this.dataOfTableUser.growth_now + ' см.'
      }
    },
    weightNowCalc () {
      if (this.dataOfTableUser.weight_now === null) {
        return 'данные не введены'
      } else {
        return this.dataOfTableUser.weight_now + ' грамм'
      }
    }
  },
  methods: {
    startTest (index) {
      this.$store.dispatch('allTest/getMonthOfPsychophysical', ['psycho', index, []])
      this.$router.push('/moveTestSecond')
    },
    checkScreenWidth () {
      if (window.innerWidth <= 480) {
        this.footerClass = 'footer'
      } else {
        this.footerClass = 'footer-down'
      }
    },
    checkWeightTable () {
      const mainResult = new MainCheck(
        null,
        null,
        this.genderFromApi,
        this.currentMonth,
        null,
        null
      ).checkWeight()
      return mainResult
    // const realData = Number(this.valueWeight / 1000)
    //   if (realData < Number(mainResult[0])) {
    //     return 'less'
    //     // return 'Вы ввели вес ребенка ' + this.valueWeight + ' грамм.<br> Это значение ниже нормы для выбранного возраста.<br> Проверьте правильность введенных данных'
    //   }
    //   if (realData > Number(mainResult[8])) {
    //     return 'more'
    //   }
    //   return 'normal'
    },
    checkWeight () {
      const result = this.checkWeightTable()
      alert(result)
      this.showWeight = this.dataOfTableUser.weight_now !== null
    },
    checkGrowth () {
      this.showGrowth = this.dataOfTableUser.growth_now !== null
    }
  },
  mounted () {
    if (this.currentMonth > 12) {
      this.$router.push('/developTestFrom12To36')
    }
    this.checkWeight()
    this.checkGrowth()
    this.$store.dispatch('allTest/setPsy', true)
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
