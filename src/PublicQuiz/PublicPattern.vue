<template>
  <v-container fluid id="first-quiz">
    <v-row class="row-blue d-flex justify-center text-center mt-4">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Анктирование готовится</h2>
        <v-img
          :src="require('@/assets/img/emo/icon-emo.png')"
          style="max-height: 300px"
        >
          <div  class="sorry">Зайдите завтра </div>
        </v-img>

      </v-col>
    </v-row>
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../views/Footer'
export default {
  name: 'FirstQuiz',
  components: {
    Footer
  },
  data: () => ({
    activeX: -1,
    radios: null,
    questionsParents: [
      {
        id: 0,
        text: 'Папа'
      },
      {
        id: 1,
        text: 'Мама'
      }
    ],
    questions3: [
      {
        id: 0,
        text: 'Нет'
      },
      {
        id: 1,
        text: 'Да'
      }
    ],
    message: '',
    access: false,
    valid: true,
    name: '',
    phone: '',
    parents: '',
    babyOld: '',
    accessSocial: null,
    experience: null,
    equipment: '',
    oneMonth: null,
    diseases: '',
    notSpeak: '',
    email: null,
    counter: 1,
    messageApi: '',
    nextQuestion: 'Ваше имя',
    nameRules: [
      v => !!v || 'Прошу ввести имя'
    ],
    questions: [
      '',
      'Ваше имя',
      'Как с Вами я могу связаться? Введите номер телефона',
      'Вы хотите принять участие на стороне пап или мам?',
      'Какой возраст вашего ребенка?',
      'Вы и ваша вторая половина готовы дать письменное согласие на размещения ваших роликов на моих страничках в социальных сетях?',
      'Есть ли у вас опыт видеосъемки/блогерства?',
      'Есть ли минимальное оборудование для видеосъемки (например кольцевая лампа, обеспечивающая достаточный свет, хорошая камера на телефоне)?',
      'Готовы ли вы 30 дней (с 29 мая 2023 года) посвятить речевому проекту не покидая его, не уезжая в отпуск?',
      'Есть ли у вашего малыша серьезные заболевания, обострения которых может спровоцировать участие в проекте?',
      'Если ли у Вашего ребенка проблемы с речью, если да, укажите какие?',
      'Введите, пожалуйста, Ваш емейл'
    ]
  }),
  methods: {
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
    },
    saveToApi () {
      this.messageApi = ''
      const data = {
        name: this.name,
        phone: this.phone,
        parents: this.parents,
        babyOld: this.babyOld,
        accessSocial: this.accessSocial,
        experience: this.experience,
        equipment: this.equipment,
        oneMonth: this.oneMonth,
        diseases: this.diseases,
        notSpeak: this.notSpeak,
        email: this.email
      }
      this.$store.dispatch('auth/saveAllToApi', data).then(
        (res) => {
          if (res === 'found') {
            this.messageApi = 'Пользователь c таким email уже зарегистрирован'
          } else {
            this.messageApi = 'Спасибо за регистрацию'
          }
        },
        (error) => {
          this.loading = false
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    },
    nextPage () {
      this.message = ''
      switch (this.counter) {
        case 1:
          if (this.name.length === 0) {
            this.message = 'введите, пожалуйста, свое имя'
          } else {
            this.message = ''
            this.counter++
            this.nextQuestion = this.questions[this.counter]
          }
          break
        case 2: // phone
          if (this.phone.length === 0) {
            this.message = 'введите, пожалуйста, данные'
          } else {
            if (/^[\d+]+$/.test(this.phone)) {
              this.message = ''
              this.counter++
              this.nextQuestion = this.questions[this.counter]
            } else {
              this.message = 'Номер телефона неправильный, повторите ввод'
            }
          }
          break
        case 3:// parents
          if (this.activeX === -1) {
            this.message = 'Выберите один из вариантов'
          } else {
            this.message = ''
            this.parents = this.activeX
            this.counter++
            this.nextQuestion = this.questions[this.counter]
            this.activeX = -1
          }
          break
        case 4:
          if (this.babyOld.length === 0) {
            this.message = 'введите, пожалуйста, данные'
          } else {
            this.message = ''
            this.counter++
            this.nextQuestion = this.questions[this.counter]
          }
          break
        case 5:
          if (this.activeX === -1) {
            this.message = 'Выберите один из вариантов'
          } else {
            this.message = ''
            this.accessSocial = this.activeX
            this.counter++
            this.nextQuestion = this.questions[this.counter]
            this.activeX = -1
          }
          break
        case 6:
          if (this.activeX === -1) {
            this.message = 'Выберите один из вариантов'
          } else {
            this.message = ''
            this.experience = this.activeX
            this.counter++
            this.nextQuestion = this.questions[this.counter]
            this.activeX = -1
          }
          break
        case 7:
          if (this.equipment.length === 0) {
            this.message = 'введите, пожалуйста, данные'
          } else {
            this.message = ''
            this.counter++
            this.nextQuestion = this.questions[this.counter]
          }
          break
        case 8:
          if (this.activeX === -1) {
            this.message = 'Выберите один из вариантов'
          } else {
            this.message = ''
            this.oneMonth = this.activeX
            this.counter++
            this.nextQuestion = this.questions[this.counter]
            this.activeX = -1
          }
          break
        case 9:
          if (this.diseases.length === 0) {
            this.message = 'введите, пожалуйста, данные'
          } else {
            this.message = ''
            this.counter++
            this.nextQuestion = this.questions[this.counter]
          }
          break
        case 10:
          if (this.notSpeak.length === 0) {
            this.message = 'введите, пожалуйста, данные'
          } else {
            this.message = ''
            this.counter++
            this.nextQuestion = this.questions[this.counter]
          }
          break
        case 11:
          if (this.email.length === 0) {
            this.message = 'введите, пожалуйста, данные'
          } else {
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/// Регулярное выражение для проверки формата
            if (regex.test(this.email)) {
              this.message = ''
              this.counter++
              this.saveToApi()
            } else {
              this.message = 'Похоже, Вы ввели email неправильно'
            }
          }
          break
        default:
          this.counter = 1
          this.message = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sorry{
  color: #f11616;
  padding-top: 150px;
  justify-items: center;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
.radioBtn {
  cursor: pointer;
  height: 40px;
  width: 280px;
  p {
    color: #32A6FD;
  }
  padding: 10px;
  line-height: 10px;
  background-color: #eeeeee;
  box-sizing: border-box;
  border-radius: 16px !important;
}
.radioBtnActive {
  padding: 10px;
  height: 40px;
  width: 280px;
  cursor: pointer;
  p {
    color: #eeeeee;
  }
  background-color: #32A6FD;
  box-sizing: border-box;
  border-radius: 16px !important;
}
#first-quiz {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.v-row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: 0;
}
.p-quiz-text {
  p {
    font-size: 18px;
    color: #2F3550;
  }
}
.field-input {
  width: 96%
}
.selector {
  flex: 1;
}
.checkbox {
  display: inline-flex;
  cursor: pointer;
  position: relative;
  span {
    font-size: 16px;
    line-height: 10px;
    margin-left: 6px;
  }
}

.checkbox > span {
  color: #34495E;
  padding: 0.5rem 0.25rem;
}

.checkbox > input {
  height: 25px;
  width: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid #34495E;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  background-color: #32A6FD;
  cursor: pointer;
}

.checkbox > input:checked {
  border: 1px solid #32A6FD;
  background-color: #34495E;
}

.checkbox > input:checked + span::before {
  content: '\2713';
  display: block;
  text-align: center;
  color: #32A6FD;
  position: absolute;
  left: 0.7rem;
  top: 0.2rem;
}

.checkbox > input:active {
  border: 2px solid #34495E;
}
@media (max-width: 600px) {
  .p-quiz-text {
    p {
      font-size: 18px;
      color: #2F3550;
    }
  }
}
@media (max-width: 480px) {
  .p-quiz-text {
    p {
      font-size: 16px;
      color: #2F3550;
    }
  }
  .checkbox {
    span {
      font-size: 16px;
      line-height: 10px;
      margin-left: 6px;
    }
  }
}
@media (max-width: 390px) {
  .p-quiz-text {
    p {
      font-size: 14px;
      color: #2F3550;
    }
  }
  .checkbox {
    span {
      font-size: 14px;
      line-height: 14px;
      margin-left: 0;
    }
  }
}
</style>
