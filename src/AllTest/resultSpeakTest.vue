<template>
  <div class="" style="color: #172669;">
    <testHeader :title="titleOut" :showBaby="correctBabyInHeader" :showAsk="showAsk" :mainLink="mainLink" />
    <div v-if="checkTest">
      <v-row class="justify-center d-flex mt-6">
        <v-col cols="11" md="6" class="d-flex ">
          <h4 class="d-inline-flex small-profile">
            <div class="profile-bold ">
              Результаты тестирования для {{ numberMonthForTest }} мес.
            </div>
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex ">
        <v-col cols="11" md="6" class="">
          <p>
            Вам предлагаются {{ firstTestOut }} блока по степени сложности.
          </p>
          <p>
            По результатам тестирования <span style="color: #FF7835">выделен оранжевым</span> рекомендованный гайд
          </p>
          <p>Так как каждый ребенок развивается индивидуально, а тест не может охватить все тонкости, то
            Вы можете просмотреть все гайды и выбрать походящий. </p>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex ">
        <v-col cols="11" md="6" class="flex-column justify-center text-center" v-if="+numberMonthForTest !== 1 && +numberMonthForTest !== 12">
          <div v-for="(n,i) in pattern" :key="i">
            <a :href="aLinkPdf(i + 1)" target="_blank">
            <button class="radioBtnGreen my-2"  :class="classObject(n)">
              <p>гайд {{ i + 1 }}</p>
            </button>
              </a>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex " v-if="+numberMonthForTest === 1">
        <v-col cols="11" md="6" class="flex-column justify-center text-center">
          <div v-for="(n,i) in pattern1" :key="i">
            <a :href="aLinkPdf1(i)" target="_blank">
            <button class="radioBtnGreen my-2"  :class="classObject(n)">
              <p>гайд {{ i + 1 }}</p>
            </button> </a>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex " v-if="+numberMonthForTest === 12">
        <v-col cols="11" md="6" class="flex-column justify-center text-center">
          <div v-for="(n,i) in pattern1" :key="i">
            <a :href="aLinkPdf12(i)" target="_blank">
              <button class="radioBtnGreen my-2"  :class="classObject(n)">
                <p>гайд {{ i + 1 }}</p>
              </button> </a>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-row class="justify-center d-flex mt-6" v-if="!checkTest">
      <v-col cols="11" md="6" class="text-center">
        <p>
          У вас еще нет результатов
        </p>
        <p>
          Перейдите на главную
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex text-center" v-if="!checkTest">
      <v-col cols="11" class="d-flex justify-center" style="flex-direction: column">
        <div class="text-center">
          <router-link :to="'/speakTestGlobal'">
            <v-btn class="btn-green" >
              На главную
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
    <Footer class="footer-down"/>
  </div>
</template>

<script>
import testHeader from '@/AllTest/TestHeader'
import Footer from '@/views/Footer'

export default {
  name: 'resultSpeakTest',
  mounted () {
    if (this.currentMonth > 12) {
      this.$router.push('/speakTestMore12')
    }
    if (this.checkTest) {
      // this.$router.push('/speakTestGlobal')
      this.calcAllTest()
    }
  },
  methods: {
    calcLink (link) {
      return this.cardAll[link]
    },
    classObject (id) {
      if (id) {
        return 'radioBtn'
      } else {
        return 'radioBtnGreen'
      }
    },
    aLinkPdf12 (link) {
      const url = this.matrixTestAll[this.numberMonthForTest - 1][link]
      return 'http://116.202.181.94/pdf/speak_' + url + '.pdf'
    },
    aLinkPdf1 (link) {
      const url = this.matrixTestAll[this.numberMonthForTest - 1][link]
      return 'http://116.202.181.94/pdf/speak_' + url + '.pdf'
    },
    aLinkPdf (link) {
      const url = this.matrixTestAll[this.numberMonthForTest - 1][link - 1]
      return 'http://116.202.181.94/pdf/speak_' + url + '.pdf'
    },
    calcIndexPercent (sum) {
      if (+this.numberMonthForTest === 1 || +this.numberMonthForTest === 12) {
        if (sum <= 33) {
          return 0
        } else if (sum > 33 && sum <= 66) {
          return 1
        } else {
          return 2
        }
      } else {
        if (sum <= 25) {
          return 0
        } else if (sum > 25 && sum <= 50) {
          return 1
        } else if (sum > 50 && sum <= 75) {
          return 2
        } else {
          return 3
        }
      }
    },
    calcAllTest () {
      const percent = this.resultSpeakTest
      let sum = 0
      for (let i = 0; i < percent.length; i++) {
        if (+percent[i] === 2) {
          percent[i] = 0
        }
        sum += parseInt(percent[i])
      }
      sum = ((sum * 100) / percent.length).toFixed(2)
      this.recIndex = this.calcIndexPercent(sum)
      if (+this.numberMonthForTest === 1 || +this.numberMonthForTest === 12) {
        this.pattern1[this.recIndex] = true
      } else {
        this.pattern[this.recIndex] = true
      }
      this.cardAll = this.matrixTestAll[this.numberMonthForTest - 1]
    }
  },
  components: {
    testHeader,
    Footer
  },
  computed: {
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    firstTestOut () {
      if (+this.numberMonthForTest === 1 || +this.numberMonthForTest === 12) {
        return 3
      } else {
        return 4
      }
    },
    selectTestOut () {
      if (+this.numberMonthForTest === 1) {
        return this.recIndex
      } else {
        return this.recIndex + 1
      }
    },
    checkTest () {
      return this.$store.state.allTest.speakMonthOfTest
    },
    numberMonthForTest () {
      if (!this.$store.state.allTest.speakMonthOfTest[1]) {
        return null
      } else {
        return this.$store.state.allTest.speakMonthOfTest[1]
      }
    },
    resultSpeakTest () {
      if (!this.$store.state.allTest.speakMonthOfTest[2]) {
        return null
      } else {
        return this.$store.state.allTest.speakMonthOfTest[2]
      }
    }
  },
  data: () => ({
    titleOut: 'Речевое развитие',
    mainLink: '/speakTestGlobal',
    showAsk: true,
    correctBabyInHeader: false,
    recIndex: null,
    cardAll: null,
    pattern: [false, false, false, false],
    pattern1: [false, false, false],
    matrixTestAll: [
      ['1_2', '1_3', '2_2'],
      ['1_3', '2_2', '2_3', '3_2'],
      ['2_3', '3_2', '3_3', '4_2'],
      ['3_3', '4_2', '4_3', '5_2'],
      ['4_3', '5_2', '5_3', '6_2'],
      ['5_3', '6_2', '6_3', '7_2'],
      ['6_3', '7_2', '7_3', '8_2'],
      ['7_3', '8_2', '8_3', '9_2'],
      ['8_3', '9_2', '9_3', '10_2'],
      ['9_3', '10_2', '10_3', '11_2'],
      ['10_3', '11_2', '11_3', '12_2'],
      ['11_3', '12_2', '12_3']
    ]
  })
}
</script>

<style scoped>

</style>
