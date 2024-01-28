<template>
<div style="color: #172669">
  <testHeader :title="titleOut" :showBaby="correctBabyInHeader" :mainLink="mainLink" />
  <!--блок тестирования финал-->
  <div v-if="blockTest">
    <v-row class="justify-center d-flex mt-4">
      <v-col cols="11" md="6" class="d-flex ">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold ">
            Возраст тестирования - {{ numberMonthForTest }} мес.
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
            v-for="n in questions"
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
import testHeader from '@/AllTest/TestHeader'
import Footer from '@/views/Footer'
import quizPsy from '@/lib/psychophysical'

export default {
  name: 'psychophysicalTestSecond',
  computed: {
    numberMonthForTest () {
      return this.$store.state.allTest.psychoMonthOfTest[1]
    },
    selectQuestion () {
      return quizPsy[this.numberMonthForTest][this.counter].text
    }
  },
  components: {
    testHeader,
    Footer
  },
  methods: {
    calcArrayLength () {
      return quizPsy[this.numberMonthForTest].length
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
          this.$router.push('/resultPSFTest')
          this.$store.dispatch('allTest/getMonthOfPsychophysical', ['psycho', this.numberMonthForTest, this.arrayResultTestAll])
          // alert(this.arrayResultTestAll)
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
  data: () => ({
    titleOut: 'Психо - физическое развитие',
    mainLink: '/psychophysicalTest',
    blockTest: true,
    correctBabyInHeader: false,
    counter: 0,
    renderActive: 0,
    activeX: -1,
    radios: null,
    textHelp: null,
    showHelp: false,
    arrayResultTestAll: [],
    questions: [
      {
        id: 2,
        text: 'Сомневаюсь ответить'
      },
      {
        id: 0,
        text: 'Нет,не может'
      },
      {
        id: 1,
        text: 'Да, может'
      }
    ]
  }
  )
}
</script>

<style scoped>

</style>
