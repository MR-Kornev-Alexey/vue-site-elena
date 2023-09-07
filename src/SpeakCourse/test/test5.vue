<template>
  <v-container fluid id="first-quiz">
    <v-row class="row-blue d-flex justify-center text-center mt-4">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Словарный запас ребенка</h2>
      </v-col>

    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="counter === 1">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left p-quiz-text">
          <p>
            Сегодня еще один несложный тест. Вашей задачей будет оценить словарный запас малыша. Я рекомендую провести
            это тестирование в течение нескольких дней, поэтому берите только одну группу слов и только потом переходите
            к следующей.
          </p>
          <p>
            Сегодня мы проведем оценку по двум самым важным группам слов для Вашего возраста. При желании вы можете
            самостоятельно продолжить тестирование с другими группами слов.
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
    nextQuestion: '<p>Группа 1: Словарный запас имен существительных.</p>\n' +
      '<p>Во время игры попросите малыша показать, где на кукле/мишке/папе:</p>\n' +
      '<ul>\n' +
      '<li aria-level="1">ротик</li>\n' +
      '<li aria-level="1">глазки</li>\n' +
      '<li aria-level="1">ручки</li>\n' +
      '<li aria-level="1">ножки/лапки</li>\n' +
      '<li aria-level="1">ушки</li>\n' +
      '<li aria-level="1">щечки</li>\n' +
      '<li aria-level="1">бровки</li>\n' +
      '<li aria-level="1">хвостик</li>\n' +
      '<li aria-level="1">волосики/шерстка и так далее.</li>\n' +
      '</ul>\n' +
      '<p>Во время чтения предложите малышу показать, где на картинке:</p>\n' +
      '<ul>\n' +
      '<li aria-level="1">кошечка/собачка</li>\n' +
      '<li aria-level="1">дом/гараж</li>\n' +
      '<li aria-level="1">дерево/цветок</li>\n' +
      '<li aria-level="1">чашка/ложка</li>\n' +
      '<li aria-level="1">дед/бабка</li>\n' +
      '<li aria-level="1">девочка/мальчик</li>\n' +
      '</ul>\n' +
      '<p>Принцип понятен, не так ли?</p>\n' +
      '<p>Когда вы называете имена существительные, обратите внимание на реакцию ребенка. Желательно называть около 10 слов одновременно. ' +
      'Оцените, сколько из этих 10 слов знакомы ребенку, и затем переходите к следующей группе.</p>',
    showResult: false,
    questions: [
      '',
      '<p>Группа 1: Словарный запас имен существительных.</p>\n' +
      '<p>Во время игры попросите малыша показать, где на кукле/мишке/папе:</p>\n' +
      '<ul>\n' +
      '<li aria-level="1">ротик</li>\n' +
      '<li aria-level="1">глазки</li>\n' +
      '<li aria-level="1">ручки</li>\n' +
      '<li aria-level="1">ножки/лапки</li>\n' +
      '<li aria-level="1">ушки</li>\n' +
      '<li aria-level="1">щечки</li>\n' +
      '<li aria-level="1">бровки</li>\n' +
      '<li aria-level="1">хвостик</li>\n' +
      '<li aria-level="1">волосики/шерстка и так далее.</li>\n' +
      '</ul>\n' +
      '<p>Во время чтения предложите малышу показать, где на картинке:</p>\n' +
      '<ul>\n' +
      '<li aria-level="1">кошечка/собачка</li>\n' +
      '<li aria-level="1">дом/гараж</li>\n' +
      '<li aria-level="1">дерево/цветок</li>\n' +
      '<li aria-level="1">чашка/ложка</li>\n' +
      '<li aria-level="1">дед/бабка</li>\n' +
      '<li aria-level="1">девочка/мальчик</li>\n' +
      '</ul>\n' +
      '<p>Принцип понятен, не так ли?</p>\n' +
      '<p>Когда вы называете имена существительные, обратите внимание на реакцию ребенка. Желательно называть около 10 слов одновременно. ' +
      'Оцените, сколько из этих 10 слов знакомы ребенку, и затем переходите к следующей группе.</p>',

      '<p>Группа 2: Словарный запас глаголов:</p>\n' +
      '<p>Здесь немного посложнее. Во время прогулки задаем вопросы:</p>\n' +
      '<ul>\n' +
      '<li aria-level="1">Кто прыгает?</li>\n' +
      '<li aria-level="1">Кто бегает?</li>\n' +
      '<li aria-level="1">Кто сидит?</li>\n' +
      '<li aria-level="1">Кто плачет?</li>\n' +
      '<li aria-level="1">Кто катается?</li>\n' +
      '<li aria-level="1">Кто смеется и так далее.</li>\n' +
      '</ul>\n' +
      '<p>При рассмотрении книжки - спрашиваем:</p>\n' +
      '<ul>\n' +
      '<li aria-level="1">Кто рисует?</li>\n' +
      '<li aria-level="1">Кто несет?</li>\n' +
      '<li aria-level="1">Кто умывается?</li>\n' +
      '<li aria-level="1">Кто стирает?</li>\n' +
      '<li aria-level="1">Кто печет?</li>\n' +
      '<li aria-level="1">Кто кормит и так далее.</li>\n' +
      '</ul>\n' +
      '<p>Задавайте вопросы без дополнительных подсказок. Например, вопрос "Кто катается на качеле?" содержит подсказку.</p>'
    ],
    printResult: [
      '<p>Важно отметить, что это тестирование не может быть объективным, так как заданные слова могут быть как знакомыми, так и незнакомыми малышу. Даже если 50% имен существительных и 30% глаголов знакомы ребенку, это уже отличный результат.</p>\n' +
      '<p>Не расстраивайтесь, если ваш малыш пока еще знает мало слов из определенной группы. Наша задача заключается в выявлении слабых мест и сосредоточении на развитии речи именно в этом направлении.</p>'
    ]
  }),
  methods: {
    nextPageGPT () {
      this.message = ''
      this.counter++
      this.nextQuestion = this.questions[this.counter]
      if (this.counter > 2) {
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
