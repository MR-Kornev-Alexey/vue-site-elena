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
    <v-dialog
      v-model="showHelp"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <p v-html="textHelp"></p>
        </v-card-text>

        <v-card-text class="d-flex justify-center text-center">
          <p>Если необходима коррекция, то прошу вас выбрать иконку
            <svg-icon class="svgIcon" type="mdi" :path="baby" size="28px"></svg-icon>
            справа вверху и ввести вес ребенка в настоящее время.
          </p>
        </v-card-text>
        <div class="form-group text-center my-4">
          <button class="btn btn-rec-green" @click="weightRight">
            закрыть
          </button>
        </div>
      </v-card>
    </v-dialog>
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
    baby: mdiBaby,
    showHelp: false,
    textHelp: null
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
      this.$router.push('/psychophysicalTestSecond')
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
        this.dataOfTableUser.weight_now,
        null
      ).checkWeight()
      return mainResult
    },
    checkGrowthTable () {
      return new MainCheck(
        null,
        null,
        this.genderFromApi,
        this.currentMonth,
        null,
        null
      ).checkGrowth()
    },
    weightRight () {
      this.showHelp = false
      this.showWeight = this.dataOfTableUser.weight_now !== null
    },
    checkWeight () {
      this.showWeight = this.dataOfTableUser.weight_now !== null
      const result = this.checkWeightTable()
      // alert(result)
      if (this.dataOfTableUser.weight_now < +result[0] * 1000) {
        // alert(result[0])
        this.textHelp = 'Введенный Вами вес ребенка в настоящее время ниже нормы для ребенка вашего возраста.'
        this.showHelp = true
      } else if (this.dataOfTableUser.weight_now > +result[8] * 1000) {
        this.textHelp = 'Введенный Вами вес ребенка в настоящее время выше нормы для ребенка вашего возраста.'
        this.showHelp = true
      }
    },
    checkGrowth () {
      this.showGrowth = this.dataOfTableUser.growth_now !== null
      const result = this.checkGrowthTable()
      // alert(result)
      if (this.dataOfTableUser.growth_now < +result[0]) {
        // alert(result[0])
        this.textHelp = 'Введенный Вами рост ребенка в настоящее время ниже нормы для ребенка вашего возраста'
        this.showHelp = true
      } else if (this.dataOfTableUser.growth_now > +result[8]) {
        this.textHelp = 'Введенный Вами рост ребенка в настоящее время выше нормы для ребенка вашего возраста'
        this.showHelp = true
        // alert(result[8])
      }
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

<style lang="scss" scoped>
.btn-rec-green {
  width: 220px;
  background-color: #156434;
  color: whitesmoke;
  border-radius: 16px;
  padding: 7px;
  text-transform: uppercase;
  font-size: 14px;

.v-btn__content {
  color: whitesmoke
}
}
.btn-rec-orange {
  width: 220px;
  background-color: #ff7835;
  color: #2F3550;
  border-radius: 16px;
  padding: 7px ;
  text-transform: uppercase;
  font-size: 14px;
  .v-btn__content {
    color: whitesmoke
  }
  margin-bottom: 12px;
}

</style>
