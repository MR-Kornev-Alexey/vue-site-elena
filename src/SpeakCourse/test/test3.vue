<template>
  <v-container fluid id="first-quiz">
    <v-row class="row-blue d-flex justify-center text-center mt-4">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Мини-диагностика</h2>
      </v-col>

    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="counter === 1">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left p-quiz-text">
          <p>Предлагаю вам самостоятельно провести мини-диагностику возможных затруднений в движениях мышц, участвующих в речевой артикуляции. Данный тест не имеет цели постановки диагноза, однако позволит вам обратить внимание на особенности работы этих мышц.</p>
          <p>Для проведения теста вам понадобятся:</p>
          <ol>
            <li aria-level="1">Малыш.</li>
            <li aria-level="1">Удобное большое зеркало.</li>
            <li aria-level="1">Отличное игривое настроение.</li>
            <li aria-level="1">Креативность и умение включать ребенка в процесс.</li>
          </ol>
          <p>Предупреждаю, придется много кривляться и строить рожи.</p>
          <p>Включите малыша в игру и, стоя перед зеркалом, выполните следующие упражнения:</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="!messageApi">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <h4 class="text-left p-quiz-text" ><p><strong><i v-html="nextQuestion"></i></strong></p></h4>
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
    <v-row class="row-light d-flex justify-center text-center py-4" >
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
          {{message}}
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
    nextQuestion: '<ul>\n' +
      '<li aria-level="1">Для выявления подвижности губ:&nbsp;</li>\n' +
      '<ul>\n' +
      '<li aria-level="2">вытянуть губы вперед и отвести их уголки в стороны;&nbsp;</li>\n' +
      '<li aria-level="2">поднять верхнюю губу, опустить нижнюю, облизнуть их;&nbsp;</li>\n' +
      '<li aria-level="2">усиленно выдыхая, вызвать вибрацию губ;&nbsp;</li>\n' +
      '<li aria-level="2">надуть щеки &ndash; втянуть их.</li>\n' +
      '</ul>\n' +
      '</ul>',
    showResult: false,
    questions: [
      '',
      '<ul>\n' +
      '<li aria-level="1">Для выявления подвижности губ:&nbsp;</li>\n' +
      '<ul>\n' +
      '<li aria-level="2">вытянуть губы вперед и отвести их уголки в стороны;&nbsp;</li>\n' +
      '<li aria-level="2">поднять верхнюю губу, опустить нижнюю, облизнуть их;&nbsp;</li>\n' +
      '<li aria-level="2">усиленно выдыхая, вызвать вибрацию губ;&nbsp;</li>\n' +
      '<li aria-level="2">надуть щеки &ndash; втянуть их.</li>\n' +
      '</ul>\n' +
      '</ul>',

      '<ul>\n' +
      '<li aria-level="1">Для выявления подвижности языка следующие упражнения:&nbsp;</li>\n' +
      '<ul>\n' +
      '<li aria-level="2">сделать язык сначала узким, а потом широким;&nbsp;</li>\n' +
      '<li aria-level="2">поднять кончик языка вверх и опустить вниз;&nbsp;</li>\n' +
      '<li aria-level="2">двигать языком из стороны в сторону как "маятником".</li>\n' +
      '</ul>\n' +
      '</ul>',

      '<ul>\n' +
      '<li aria-level="1">Для выявления подвижности нижней челюсти следующие упражнения:&nbsp;</li>\n' +
      '<ul>\n' +
      '<li aria-level="2">открыть широко рот, опустив челюсть вниз;</li>\n' +
      '<li aria-level="2">утрированно широко открывать и закрывать рот, работая нижней челюстью;</li>\n' +
      '<li aria-level="2">выдвинуть вперед/назад.</li>\n' +
      '</ul>\n' +
      '</ul>'
    ],
    printResult: [
      '<p>Не стремитесь выполнить все за один раз. Намного эффективнее взять только одно движение и отработать его, наблюдая, как малыш справляется, а затем перейти к следующему. Возможно, вашему ребенку потребуется увидеть несколько разных вариантов, чтобы включиться в игру.</p>\n' +
      '<p>Например, чтобы проверить подвижность мышц языка, предложите ему использовать язык как маятник. Покажите это движение, и если не получаете отклика, переключитесь на то, как собачка виляет хвостиком, используя язык. Подключите звуки по смыслу и эмоционально выполняйте задание. Если и в этот раз ничего не получится, не отчаивайтесь, а вернитесь к упражнениям через несколько дней и повторите игру. Скорее всего, вашему ребенку потребуется больше времени, чтобы понять, как правильно управлять этой мышцей и достичь нужного движения.</p>\n' +
      '<p><strong><em>В данном тесте нет расшифровки результатов. Он показывает, на какую подвижность и работу мышц стоит обратить более пристальное внимание. Этот тест можно использовать как отдельное упражнение для развития и закрепления навыков управления определенными мышцами, которые участвуют в речеобразовании.</em></strong></p>\n' +
      '<p>Сохраняйте структуру текста, исправляйте грамматические и стилистические ошибки, чтобы сделать его более читабельным.</p>'
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
    p,li {
      font-size: 16px;
      color: #2F3550;
    }
  }
}
@media (max-width: 480px) {
  .p-quiz-text {
    p,li {
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
    p,li {
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
