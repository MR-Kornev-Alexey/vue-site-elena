<template>
  <v-container fluid id="first-quiz">
    <v-row class="row-blue d-flex justify-center text-center mt-4">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Роль слуха в развитии речи</h2>
      </v-col>

    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="counter === 1">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left p-quiz-text">
          <p>
            Я думаю, нет необходимости объяснять роль слуха в развитии речи. Это одна из часто встречающихся, но не
            всегда очевидных проблем.
          </p>
          <p>
            Предлагаю вам самостоятельно провести небольшую диагностику для проверки состояния слуха у ребенка.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="!messageApi">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <h4 class="text-left p-quiz-text"><p><strong><i v-html="nextQuestion"></i></strong></p></h4>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="messageApi">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
        style="flex-direction: column"
      >
        <div class="text-left result-test" v-html="messageApi">
        </div>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4">
      <v-col
        cols="11" md="auto"
        class="d-flex justify-center" style="flex-direction: column"
      >
        <v-btn
          class="btn-dream-small-blue mx-auto" @click="nextPageGPT" v-if="!messageApi"
        >
          дальше
        </v-btn>
        <div class="text-red" style="height: 16px; font-size: 12px">
          {{ message }}
        </div>
      </v-col>
      <!--      social &#45;&#45; {{social}}-->
    </v-row>
    <!--    result - {{result}}  counter -&#45;&#45; {{counter}}-->
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../../views/Footer'

export default {
  name: 'FirstQuiz',
  components: {
    Footer
  },
  data: () => ({
    activeX: -1,
    result: 0,
    access: false,
    answers: [
      {
        id: 0,
        text: 'Да',
        counter: 1
      },
      {
        id: 1,
        text: 'Нет',
        counter: 0
      }
    ],
    message: '',
    radios: 0,
    counter: 1,
    messageApi: '',
    nextQuestion: '<p>Проверьте слуховую реакцию. ' +
      'Попросите ребенка выполнить задание, которое вы произнесете тихим голосом или шепотом. Например: "Покажи, где находится папин телефон" или "Дай мне мячик"</p>',
    showResult: false,
    questions: [
      '',
      '<p>Проверьте слуховую реакцию. Попросите ребенка выполнить задание, которое вы произнесете тихим голосом или шепотом. Например: "Покажи, где находится папин телефон" или "Дай мне мячик"</p>',

      '<p>Выявите, как ребенок реагирует на различные звуковые ситуации. Например, спросите: "Что гудит?" и наблюдайте, как ребенок поворачивается в сторону источника звука, например, гудящей машины. Или скажите: "Ты слышишь, как громко проехало?" и наблюдайте, как ребенок реагирует на звук проезжающего трамвая.</p>\n' +
      '<p>Можете также спросить: "Кто так весело смеется?" и посмотреть, как ребенок реагирует, обращая взгляд на смеющегося ребенка.</p>',

      '<p>Оцените слуховую память и понимание речи у детей старше 2 лет. Попросите ребенка выполнить различные задания в заданной последовательности. Например, скажите: "Дай мне кубик, а на столе возьми мяч" или "Поставь кружку на стол, а зайца посади на стул и подойди ко мне".</p>'
    ],
    printResult: [
      '<p>Этот тест не требует расшифровки и предназначен для оценки развития слуха. Если по каким-либо причинам вы не смогли провести тестирование, не расстраивайтесь и повторите его через несколько дней. ' +
      'Однако, если вы не видите адекватной реакции ребенка после нескольких повторений теста, обязательно обратитесь к врачу.</p>'
    ]
  }),
  methods: {
    nextPageGPT () {
      this.message = ''
      this.counter++
      this.nextQuestion = this.questions[this.counter]
      if (this.counter > 3) {
        this.messageApi = this.printResult
      }
    }
  }
}
</script>

<style scoped lang="scss">
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

@media (max-width: 768px) {
  .p-quiz-text {
    p, ul li {
      font-size: 16px;
      color: #2F3550;
    }
  }
}

@media (max-width: 600px) {
  .p-quiz-text {
    p, li {
      font-size: 16px;
      color: #2F3550;
    }
  }
}

@media (max-width: 480px) {
  .p-quiz-text {
    p, li {
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
    p, li {
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
