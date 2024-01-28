<template>
  <div class="" style="color: #172669;">
    <testHeader :title="titleOut" :showBaby="correctBabyInHeader" :mainLink="mainLink" />
    <!--блок тестирования финал-->
    <div v-if="checkTest">
    <v-row class="justify-center d-flex mt-6">
      <v-col cols="11" md="6" class="d-flex ">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold">
            Результаты тестирования для {{ numberMonthForTest }} мес.
          </div>
        </h4>
      </v-col>
    </v-row>
      <v-row class="justify-center d-flex mt-6">
        <v-col cols="11" md="6" class="d-flex ">
            <p v-html="card" />
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
          <router-link :to="'/psychophysicalTest'">
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
import CalcPsycho from '@/lib/CalcPsyho'
import cardOfResult from '@/lib/cardOfResult'

export default {
  name: 'resultPSFTest',
  components: {
    testHeader,
    Footer
  },
  computed: {
    dataFromApi () {
      return this.$store.state.auth.userTableNew.data
    },
    genderFromApi () {
      return this.$store.state.auth.userTableNew.data.gender
    },
    checkTest () {
      const PSFMonthOfTest = this.$store.state.allTest.psychoMonthOfTest
      return !!PSFMonthOfTest
    },
    getValueFromEmoMonthOfTest () {
      const PSFMonthOfTest = this.$store.state.allTest.psychoMonthOfTest
      if (!PSFMonthOfTest) {
        return () => null
      } else {
        return index => PSFMonthOfTest[index]
      }
    },
    numberMonthForTest () {
      return this.getValueFromEmoMonthOfTest(1)
    }
  },
  mounted () {
    this.calcComplexTest()
  },
  methods: {
    calcIndexPercent (sum) {
      if (sum <= 25) {
        return 0
      } else if (sum > 25 && sum <= 50) {
        return 1
      } else if (sum > 50 && sum <= 75) {
        return 2
      } else {
        return 3
      }
    },
    calcIndexGrowth () {
      const check = new CalcPsycho(
        this.dataFromApi.gender,
        this.numberMonthForTest,
        this.dataFromApi.weight_now,
        this.dataFromApi.growth_now,
        this.percentIndex,
        null,
        null
      ).findIndex()
      const i = new CalcPsycho(
        this.dataFromApi.gender,
        this.numberMonthForTest,
        this.dataFromApi.weight_now,
        this.dataFromApi.growth_now,
        this.percentIndex,
        check.findGrowth[0],
        check.findWeight[0]
      ).calcBalls()
      this.card = cardOfResult[i]
    },
    calcComplexTest () {
      const percent = this.$store.state.allTest.psychoMonthOfTest[2]
      // alert(percent)
      let sum = 0
      for (let i = 0; i < percent.length; i++) {
        if (+percent[i] === 2) {
          percent[i] = 0
        }
        sum += parseInt(percent[i])
      }
      sum = ((sum * 100) / percent.length).toFixed(2)
      // alert(sum)
      this.percentIndex = this.calcIndexPercent(sum)
      this.calcIndexGrowth()
    }
  },
  data: () => ({
    titleOut: 'Психо - физическое развитие',
    mainLink: '/psychophysicalTest',
    correctBabyInHeader: false,
    percentIndex: null,
    card: null
  })
}
</script>

<style scoped>

</style>
