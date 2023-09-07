<template>
  <div class="" style="color: #172669;">
    <testHeader :title="titleOut" :showBaby="correctBabyInHeader" :mainLink="mainLink" />
    <v-row class="justify-center d-flex pt-6" v-if="dataOfTableUser.data.baby_name_telegram !== null">
      <v-col cols="11" md="6" class="d-flex ">
        <h4 class="d-inline-flex">
          <div class="profile-bold">
            Имя вашего ребенка:
          </div>
          <div class="ml-4 profile-bold">
            {{ dataOfTableUser.data.baby_name_telegram }}
          </div>
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex pt-6" v-if="dataOfTableUser.data.baby_name_telegram === null">
      <v-col cols="11" md="6" class="">
        <p>К сожалению, не введено имя Вашей крохи. </p>
        <p> Прошу вас выбрать иконку
          <svg-icon class="svgIcon" type="mdi" :path="baby" size="28px"></svg-icon>
          справа вверху и ввести данные
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex" v-if="dataOfTableUser.data.birthday_telegram !== null">
      <v-col cols="11" md="6" class="d-flex">
        <h4 class="d-inline-flex profile-bold">
              Возраст тестирования - {{ currentMonth }} мес.
        </h4>
      </v-col>
    </v-row>

    <v-row class="justify-center d-flex" v-if="dataOfTableUser.data.birthday_telegram === null">
      <v-col cols="11" md="6" class="">
        <p>К сожалению, не введен день рождения Вашей крохи. </p>
        <p> Прошу вас выбрать иконку
          <svg-icon class="svgIcon" type="mdi" :path="baby" size="28px"></svg-icon>
          справа вверху и ввести данные
        </p>
      </v-col>
    </v-row>
    <div v-if="currentMonth === 0">
      <v-row class="justify-center d-flex">
        <v-col cols="11" md="6" class="d-flex">
          <div class="test-add-title">
            К сожалению, данный тест не применим к новорожденным (возраст 0 месяцев). Вместо этого вы можете смотреть
            полезные видеоматериалы из наших рассылок, выполнять домашние задания, а также скачать и распечатать
            руководство для мам (возраст 0 месяцев) и ознакомиться с дополнительными материалами.
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-else>

    <v-row class="justify-center d-flex" v-if="dataOfTableUser.data.birthday_telegram !== null">
      <v-col cols="11" md="6" class="d-flex">
        <div class="test-add-title" style="color: #2F3550;">
          Хотя каждый ребенок развивается по-своему и индивидуально и со своей скоростью, однако неспособность достичь определенных навыков может сигнализировать о проблемах со здоровьем, требующих особого внимания. Если вы заметили какие-либо из следующих настораживающих признаков у вашего ребенка в этом возрасте, обсудите их с педиатром
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex " v-if="!cardDoctor">
      <v-col cols="11" md="6" class="d-flex ">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold text-italic" style="color: #2F3550;">
            Пожалуйста, ответьте на вопрос: "Ваш ребенок..."
          </div>
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex " v-if="cardDoctor">
      <v-col cols="11" md="6" class="d-flex ">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold text-italic">
            Результат тестирования
          </div>
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex" v-if="!cardDoctor">
      <v-col cols="11" md="6" class="d-flex " style="color: #2F3550;">
        <p v-html="selectQuestion" style="color: #2F3550;">
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex" v-if="cardDoctor">
      <v-col cols="11" md="6" class="d-flex">
        <div class="test-add-title">
          {{cardDoctor}}
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex pt-2" v-if="!cardDoctor">
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
    <v-row class="justify-center d-flex " v-if="!cardDoctor">
      <v-col cols="11" md="6" class="d-flex justify-end">
        <button class="radioBtnGreen" @click="nextQuestion">
          <p>дальше</p>
        </button>
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
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import testHeader from '@/AllTest/TestHeader'
import Footer from '@/views/Footer'
import { mdiBaby } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import quizForDoctor from '@/lib/goToDoctor'

export default {
  name: 'goToDoctor',
  components: {
    testHeader,
    SvgIcon,
    Footer
  },
  methods: {
    calcDoctorText () {
      const percent = this.arrayResultTestAll
      // alert('test - 3: ' + percent)
      let sum = 0
      for (let i = 0; i < percent.length; i++) {
        sum += parseInt(percent[i])
      }
      if (sum > 0) {
        this.cardDoctor = this.theAnswers[1]
      } else {
        this.cardDoctor = this.theAnswers[0]
      }
    },
    calcArrayLength () {
      return quizForDoctor[this.currentMonth].length
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
          this.calcDoctorText()
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
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    dataOfTableUser () {
      return this.$store.state.auth.userTableNew
    },
    selectQuestion () {
      return quizForDoctor[this.currentMonth][this.counter].text
    }
  },
  data: () => ({
    titleOut: 'Когда идти к доктору',
    mainLink: '/developTest',
    babyCorrect: false,
    counter: 0,
    activeX: -1,
    radios: null,
    correctBabyInHeader: true,
    checkWeek: null,
    calcMonth: null,
    babyMonthsCalcNew: null,
    baby: mdiBaby,
    renderActive: true,
    showHelp: false,
    textHelp: null,
    arrayResultTestAll: [],
    cardDoctor: null,
    theAnswers: [
      'Ваш малыш развивается соответственно возрасту. Обязательно используйте рекомендации всех разделов для грамотного дальнейшего развития.',
      'Пожалуйста, пройдите повторно данный тест. При получении данного результата - обязательно обратитесь к врачу'
    ],
    questionsAll: [
      {
        id: 0,
        text: 'Этого нет'
      },
      {
        id: 1,
        text: 'Да, это так'
      }
    ]
  }),
  mounted () {
    this.cardDoctor = null
    if (this.currentMonth > 12) {
      this.$router.push('/developTestFrom12To36')
    }
  }
}
</script>

<style scoped>

</style>
