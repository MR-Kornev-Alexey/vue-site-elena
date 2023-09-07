<template>
  <div class="" style="color: #172669;">
    <testHeader :title="titleOut" :showBaby="correctBabyInHeader" :mainLink="mainLink" :subTitle="subTitle" />
    <div v-if="blockTest">
      <v-row class="justify-center d-flex mt-4">
        <v-col cols="11" md="6" class="d-flex ">
          <h4 class="d-inline-flex small-profile">
            <div class="profile-bold ">
              Возраст тестирования - {{ currentMonth }} мес.
            </div>
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex ">
        <v-col cols="11" md="6" class="d-flex ">
          <h4 class="d-inline-flex small-profile">
            <div class="profile-bold text-italic">
              Пожалуйста, ответьте на вопрос: "Ваш ребенок..."
            </div>
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" md="6" class="d-flex " style="color: #2F3550;">
          <p v-html="selectQuestion">
          </p>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex pt-2">
        <v-col cols="11" md="6" class="d-flex justify-center " style="color: #2F3550;">
          <div :key="renderActive">
            <div
              v-for="n in questionsAll"
              :key="n.id"
              @click="selectRadio(n.id)"
              class="mb-6 d-flex justify-center pt-3"
              :class="classObject(n.id)"
            >
              <p class="align-self-center d-flex">
                {{ n.text }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex ">
        <v-col cols="11" md="6" class="d-flex justify-end">
          <button class="radioBtnGreen" @click="nextQuestion">
            <p>дальше</p>
          </button>
        </v-col>
      </v-row>
    </div>
    <!--блок тестирования финал-->
    <v-row class="justify-center d-flex">
      <v-col cols="11" md="6" class="d-flex text-italic">
        <p>Помните, что все дети развиваются индивидуально</p>
      </v-col>
    </v-row>
    <v-dialog
      v-model="showHelp"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <p v-html="textHelp"></p>
        </v-card-text>
      </v-card>
    </v-dialog>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from '../../views/Footer'
import testHeader from '@/AllTest/TestHeader'
import quizForGame12 from '../../lib/quizForGame12'

export default {
  name: 'emoTestMore12',
  mounted () {
    if (this.currentMonth <= 12) {
      this.$router.push('/emoTestGlobal')
    }
  },
  components: {
    testHeader,
    Footer
  },
  methods: {
    calcArrayLength () {
      return quizForGame12[this.selectNumber].length
    },
    nextQuestion () {
      if (this.radios === null) {
        this.showHelp = !this.showHelp
        this.textHelp = 'Пожалуйста, выберите вариант'
      } else {
        this.counter++
        this.arrayResultTestAll.push(this.radios)
        if (this.counter < this.calcArrayLength()) {
          this.activeX = -1
          this.radios = null
        } else {
          this.$router.push('/resultEmo12andMore')
          this.$store.dispatch('allTest/getMonthOfEmoOfTest', ['emo', this.selectNumber, this.arrayResultTestAll])
        }
      }
    },
    selectRadio (id) {
      this.activeX = id
      this.radios = id
    },
    classObject (id) {
      if (id === this.activeX) {
        return 'radioBtnActive'
      } else {
        return 'radioBtn'
      }
    }
  },
  computed: {
    dataOfTableUser () {
      return this.$store.state.auth.userTableNew
    },
    numberMonthForTest () {
      return this.$store.state.auth.currentMonthNew
    },
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    selectNumber () {
      const ranges = [
        { min: 12, max: 15, value: 0 },
        { min: 16, max: 18, value: 1 },
        { min: 19, max: 24, value: 2 },
        { min: 25, max: 30, value: 3 }
      ]

      for (const range of ranges) {
        if (this.currentMonth >= range.min && this.currentMonth <= range.max) {
          return range.value
        }
      }

      return 4
    },
    selectQuestion () {
      if (!this.currentMonth) {
        return null
      } else {
        return quizForGame12[this.selectNumber][this.counter].text
      }
    }
  },
  data: () => ({
    titleOut: 'Игры, обучение, мышление',
    subTitle: 'от 1 до  3 лет',
    mainLink: '/emoTest12More',
    babyCorrect: false,
    correctBabyInHeader: false,
    checkWeek: null,
    calcMonth: null,
    counter: 0,
    activeX: -1,
    radios: null,
    renderActive: 0,
    textHelp: null,
    showHelp: false,
    blockTest: true,
    recIndex: null,
    arrayResultTestAll: [],
    pattern: [false, false, false, false],
    cardAll: null,
    questionsAll: [
      {
        id: 0,
        text: 'Не делает'
      },
      {
        id: 1,
        text: 'Иногда делает'
      },
      {
        id: 2,
        text: 'Всегда делает'
      }
    ],
    matrixTestAll: {
      1: ['0_3', '1_2', '1_3', '2_2'],
      2: ['1_3', '2_2', '2_3', '3_2'],
      3: ['2_3', '3_2', '3_3', '4_2'],
      4: ['3_3', '4_2', '4_3', '5_2'],
      5: ['4_3', '5_2', '5_3', '6_2'],
      6: ['5_3', '6_2', '6_3', '7_2'],
      7: ['6_3', '7_2', '7_3', '8_2'],
      8: ['7_3', '8_2', '8_3', '9_2'],
      9: ['8_3', '9_2', '9_3', '10_2'],
      10: ['9_3', '10_2', '10_3', '11_2'],
      11: ['10_3', '11_2', '11_3', '12_2'],
      12: ['11_3', '12_2', '12_3', '13_2']
    }
  })
}
</script>

<style scoped>

</style>
