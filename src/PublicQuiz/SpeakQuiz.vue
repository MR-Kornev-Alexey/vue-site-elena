<template>
  <div class="pb-16">
    <v-row class="row-blue d-flex justify-center text-center">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title-quiz">Развитие речи Вашей крохи </h2>
      </v-col>

    </v-row>
    <v-row class=" d-flex justify-center text-center py-4" v-if="counter === 1">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left p-quiz-text" style="color: #0c1236;">
          <p class="">
            <strong style="color: #0c1236;">
              Добрый день
            </strong>
          </p>
          <p class="" style="color: #0c1236;">
            Данное анкетирование - анонимное. Я не сохраняю и не использую ваши данные - все ответы остаются
            конфиденциальными.
            <br/>Однако, они помогут мне лучше понять ситуацию и предоставить Вам соответствующую информацию.
          </p>
          <p class="mt-2" style="color: #0c1236;">
            Пожалуйста, ответьте на несколько простых вопросов:
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-center text-center py-4" v-if="counter < 16">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <h3 class="h3-quiz"><span>({{ counter }} из 15) </span> &nbsp;&nbsp;{{ questions[counter] }}</h3>
      </v-col>
    </v-row>
    <div v-for="questionNumber in 12"
         :key="questionNumber">
      <v-row
        class=" d-flex justify-center text-center"
        v-if="counter === questionNumber"
      >
        <v-col
          cols="11" md="4"
          class="d-flex justify-center" style="flex-direction: column"
        >
          <div
            v-for="variant in Object.values(questionsVariants)[questionNumber - 1 ]"
            :key="variant"
            class="mb-4 d-flex justify-center pt-3 mx-auto"
            @click="selectRadio(variant)"
            :class="classObject(variant)"
          >
            <p class="align-self-center d-flex">
              {{ variant }}
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-row class=" d-flex justify-center text-center py-4" v-if="add12">
      <v-col
        cols="11" md="5"
        class="d-flex-column justify-center"
      >
        <v-textarea
          counter
          label="Text"
          :rules="rules"
          v-model="resultAdd12"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-center text-center py-4" v-if="counter === 13">
      <v-col
        cols="11" md="5"
        class="d-flex-column justify-center"
      >
        <v-textarea
          counter
          label="Text"
          :rules="rules"
          v-model="resultAdd13"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-center text-center py-4" v-if="counter === 14">
      <v-col
        cols="11" md="5"
        class="d-flex-column justify-center"
      >
        <v-textarea
          counter
          label="Text"
          :rules="rules"
          v-model="resultAdd14"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-center text-center py-4" v-if="counter === 15">
      <v-col
        cols="11" md="5"
        class="d-flex-column justify-center"
      >
        <v-textarea
          counter
          label="Text"
          :rules="rules"
          v-model="resultAdd15"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-center text-center py-4 mt-16" v-if="counter === 16">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left p-quiz-text" style="color: #0c1236;">
          <p class="">
            <strong style="color: #0c1236;">
              Спасибо за заполненную анкету
            </strong>
          </p>
            Перейдя по <a href="https://youtu.be/Z71hCygXrEM" target="_blank" style="text-decoration: none; color: #0c1236;  font-weight: bold" >
            <svg-icon type="mdi" :path="path" style="color: #0c1236; " ></svg-icon>
            ссылке
          </a>, вы получаете видеолекцию в подврок.
        </div>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-center text-center pb-8" v-if="counter !== 16">
      <v-col
        cols="11" md="auto"
        class="d-flex justify-center mx-auto" style="flex-direction: column"
      >
        <v-btn
          class="btn-dream-small-blue mx-auto" @click="nextPage" style="color: white"
        >
          дальше
        </v-btn>
        <div class="text-red" style="height: 16px; font-size: 12px">
          {{ message }}
        </div>
      </v-col>
    </v-row>
<!--    {{ results }}-->
    <Footer class="footer-down"/>
  </div>
</template>

<script>
import Footer from '../views/Footer'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLinkVariant } from '@mdi/js'

export default {
  name: 'FirstQuiz',
  components: {
    Footer,
    SvgIcon
  },
  data: () => ({
    results: [],
    path: mdiLinkVariant,
    counter: 1,
    activeX: -1,
    rules: [v => v.length <= 250 || 'Max 250 characters'],
    add12: false,
    resultAdd12: '',
    resultAdd13: '',
    resultAdd14: '',
    resultAdd15: '',
    questionsVariants: {
      1: [
        '0 - 10 месяцев',
        '11 - 15 месяцев',
        '16 - 24 месяцев',
        '25 - 36 месяцев',
        'более 36 месяцев'
      ],
      2: [
        '5 слов или меньше',
        '6-10 слов',
        'больше 10 слов',
        'более 100 слов'
      ],
      3: [
        'Да, умеет',
        'Нет, не умеет',
        'Периодически получается'
      ],
      4: [
        'Да, понимает',
        'Нет, не понимает',
        'Иногда понимает'
      ],
      5: [
        'Очень часто',
        'Иногда',
        'Очень редко',
        'Никогда'
      ],
      6: [
        'Да, разговаривает активно',
        'Нет, практически не разговаривает',
        'Разговаривает только в очень ограниченном объеме'
      ],
      7: [
        'Да',
        'Нет',
        'Иногда'
      ],
      8: [
        'Да, активно использует жесты',
        'Нет, практически не использует жесты',
        'Использует жесты только в очень ограниченном объеме'
      ],
      9: [
        'Очень высокий',
        'Посредственный',
        'Недостаточный'
      ],
      10: [
        'Несколько небольших в течении дня',
        'Стараюсь периодически хотя бы пару раз в неделю',
        'Не провожу, так как не знаю как и что делать'
      ],
      11: [
        'Ребенок строит простые предложения из двух и более слов',
        'Ребенок проявляет интерес к новым словам и активно их запоминает',
        'Ребенок имитирует различные звуки и звуковые эффекты',
        'Ребенок пытается повторять сложные слова или фразы',
        'Ребенок сказал первое слово только после 12 месяцев возраста',
        'Ребенок понимает инструкции и указания'
      ],
      12: [
        'Книги и печатные материалы',
        'Онлайн-ресурсы и веб-сайты',
        'Консультации педагогов/логопедов',
        'Консультации врачей/педиатров',
        'Родительские форумы и сообщества',
        'Опыт других родителей',
        'Курсы или тренинги по развитию речи у детей',
        'Рекомендации от родственников или друзей',
        'Другие источники'
      ]
    },
    message: '',
    messageApi: '',
    nextQuestion: 'Укажите в каком возрастном диапазоне находится Ваш ребенок:',
    questions: [
      '',
      'Укажите в каком возрастном диапазоне находится Ваш ребенок:',
      'Сколько слов может произнести малыш (не обязательно четко и правильно)?', // 2
      'Умеет ли ребенок складывать простые предложения из двух слов (например, "мама дома")?',
      'Понимает ли малыш простые указания или вопросы (например, "покажи мне игрушку" или "где мама?")?',
      'Как часто, в течении дня, ребенок проявляет желание общаться и задавать вопросы?', // 5
      'Разговаривает ли малыш с другими детьми или взрослыми (включая простые фразы)?', // 6
      'Стремится ли ребенок повторять слова или фразы, услышанные от других людей?', // 7
      'Использует ли ваш малыш жесты (например, махание рукой для попрощаться или показывание на предметы) МНОГОКРАТНО в течении дня?', // 8
      'Оцените общий уровень речевого развития вашего ребенка', // 9
      'Как часто вы проводите речевые занятия с ребенком ', // 10
      'Ваши наблюдения за речевым развитием малыша (выберите все, что соответствует)', // 11,
      'Откуда вы черпаете сведения о том, как работать с речью ребенка? (Выберите все, что соответствует)', // 12
      'Если вы замечаете какие-либо проблемы в речевом развитии вашего малыша, пожалуйста, опишите их (отвечать необязательно)', // 13
      'Чтобы вы хотели узнать про речевое развитие ребенка - что по вашему мнению не хватает вам в работе с речью (отвечать необязательно)', // 14
      'Что Вас больше всего тревожит в речевом развитии малыша в данный момент(отвечать необязательно)' // 15
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
      this.$store.dispatch('auth/saveAllToApi', this.results).then(
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
      if (this.counter === 16) {
        console.log('finish')
      } else {
        this.add12 = false
        if (this.activeX === -1 && ![12, 13, 14, 15].includes(this.counter)) {
          this.message = 'Выберите один из вариантов'
          return
        }

        if (this.counter === 12) {
          if (this.activeX === 'Другие источники (укажите)') {
            this.add12 = true
            if (this.resultAdd12) {
              this.message = ''
              this.results.push(this.resultAdd12)
            } else {
              this.message = 'Укажите другой источник'
              return
            }
          } else {
            this.message = ''
            this.results.push(this.activeX)
          }
        } else {
          if (this.counter === 13 && this.activeX === -1) {
            this.results.push(this.resultAdd13)
          } else if (this.counter === 14 && this.activeX === -1) {
            this.results.push(this.resultAdd14)
          } else if (this.counter === 15 && this.activeX === -1) {
            this.results.push(this.resultAdd15)
            this.saveToApi()
          } else {
            this.results.push(this.activeX)
          }
        }

        this.counter++
        this.activeX = -1
        this.add12 = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.radioBtn {
  cursor: pointer;
  height: 60px;
  width: 300px;
  font-size: 14px;

  p {
    color: #0c1236;
  }
 background-color: #ffc5ac;
  padding: 6px;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 16px !important;
}

.radioBtnActive {
  padding: 10px;
  height: 60px;
  width: 300px;
  cursor: pointer;
  font-size: 14px;

  p {
    color: #eeeeee;
  }

  padding: 6px;
  line-height: 20px;
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
