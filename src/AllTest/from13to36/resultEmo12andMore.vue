<template>
<div>
  <testHeader :title="titleOut" :showBaby="correctBabyInHeader" :mainLink="mainLink" :subTitle="subTitle" />
  <Footer class="footer-down"/>
  <div v-if="checkMoveTest">
  <v-row class="justify-center d-flex mt-6">
    <v-col cols="11" md="6" class="d-flex ">
      <h4 class="d-inline-flex small-profile">
        <div class="profile-bold ">
          Результаты тестирования для {{ numberMonthForTest }} мес.
        </div>
      </h4>
    </v-col>
  </v-row>
    <v-row class="justify-center d-flex mt-6">
      <v-col cols="11" md="6" class="d-flex " style="color: #2F3550">
       <p v-html="resultIfTest">
       </p>
      </v-col>
    </v-row>
  </div>
  <v-row class="justify-center d-flex mt-6" v-if="!checkMoveTest">
    <v-col cols="11" md="6" class="text-center">
      <p>
        У вас еще нет результатов
      </p>
      <p>
        Перейдите на главную
      </p>
    </v-col>
  </v-row>
  <v-row class="justify-center d-flex text-center" v-if="!checkMoveTest">
    <v-col cols="11" class="d-flex justify-center" style="flex-direction: column">
      <div class="text-center">
        <router-link :to="'/speakTestMore12'">
          <v-btn class="btn-green" >
            На главную
          </v-btn>
        </router-link>
      </div>
    </v-col>
  </v-row>
</div>
</template>

<script>
import testHeader from '@/AllTest/TestHeader'
import Footer from '@/views/Footer'
import resultTestAll from '../../lib/answersFor12andMore'

export default {
  name: 'resultEmo12andMore',
  mounted () {
    if (this.currentMonth <= 12) {
      this.$router.push('/emoTestGlobal')
    }
  },
  computed: {
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    resultIfTest () {
      const percent = this.resultMoveTest
      let sumNew = 0
      for (let i = 0; i < percent.length; i++) {
        if (+percent[i] === 2) {
          percent[i] = 1
        }
        sumNew += parseInt(percent[i])
      }
      sumNew = sumNew * 100 / percent.length
      if (sumNew >= 0 && sumNew <= 25) {
        return resultTestAll.theAnswersGame[2]
      } else if (sumNew > 25 && sumNew <= 75) {
        return resultTestAll.theAnswersGame[1]
      } else {
        return resultTestAll.theAnswersGame[0]
      }
    },
    numberMonthForTest () {
      return this.$store.state.auth.currentMonthNew
    },
    resultMoveTest () {
      return this.$store.state.allTest.emoMonthOfTest[2]
    },
    checkMoveTest () {
      const moveMonthOfTest = this.$store.state.allTest.emoMonthOfTest
      return !!moveMonthOfTest
    }
  },
  components: {
    testHeader,
    Footer
  },
  data: () => ({
    titleOut: 'Игры, обучение, мышление',
    subTitle: 'от 1 до  3 лет',
    mainLink: '/emoTest12More',
    babyCorrect: false,
    correctBabyInHeader: false
  }
  )
}
</script>

<style scoped>

</style>
