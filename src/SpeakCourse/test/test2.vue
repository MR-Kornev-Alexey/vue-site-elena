<template>
  <v-container fluid id="first-quiz">
    <v-row class="row-blue d-flex justify-center text-center mt-4">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Влияние беременности, родов и послеродового периода  на речевое развитие</h2>
      </v-col>

    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="counter === 1">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left p-quiz-text">
          <p>
            Проблемы во время  беременности,  родов и послеродовом периоде оказывают влияние на речевое развитие малыша.
         </p>
          <p>
            Предлагаю пройти данный тест для определения возможных рисков.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="!messageApi">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <h4 class="text-left p-quiz-text"><p><strong><i>{{nextQuestion}}</i></strong></p></h4>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="messageApi">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
        style="flex-direction: column"
      >
        <h4 class="text-center">Результаты тестирования</h4>
        <div class="text-left result-test" v-html="messageApi">
        </div>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" >
      <v-col
        cols="11" md="3"
        class="d-flex justify-center" style="flex-direction: column" v-if="!messageApi"
      >
        <div
          v-for="n in answers"
          :key="n.id"
          class="mb-6 d-flex justify-center pt-3 mx-auto"
          @click="selectRadio(n.id, n.counter)"
          :class="classObject(n.id)"
        >
          <p class="align-self-center d-flex">
            {{ n.text }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" >
      <v-col
        cols="11" md="auto"
        class="d-flex justify-center" style="flex-direction: column"
      >
        <v-btn
          class="btn-dream-small-blue mx-auto" :disabled="!access" @click="nextPageGPT" v-if="!messageApi"
        >
          дальше
        </v-btn>
        <div class="text-red" style="height: 16px; font-size: 12px">
          {{message}}
        </div>
      </v-col>
      <!--      social &#45;&#45; {{social}}-->
    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="counter === 1">
      <v-col
        cols="11" md="auto"
        class="d-flex justify-center"
      >
        <label class="checkbox">
          <input type="checkbox" v-model="access" hide-details/>
          <span> Я соглашаюсь с обработкой персональных данных</span>
        </label>
      </v-col>
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
    nextQuestion: 'Протекала ли ваша беременность спокойно и без значительных осложнений? Если во время беременности вы находились на стационарном лечении, получали под контролем узких специалистов лечение, выберите вариант “НЕТ”',
    showResult: false,
    questions: [
      '',
      'Протекала ли ваша беременность спокойно и без значительных осложнений? Если во время беременности вы находились на стационарном лечении, получали под контролем узких специалистов лечение, выберите вариант “НЕТ”',
      'Принимали ли вы ДЛИТЕЛЬНО во время беременности какие-либо препараты или добавки?',
      'Вела ли ваша беременность врач-гинеколог и проводились ли регулярные ультразвуковые исследования? Если вы не сдавали анализы, не проходили обследования или не стояли на учете по беременности, выберите вариант “НЕТ”',
      'Ваш малыш родился на 38 - 41 неделе беременности? В других случаях, если ребенок родился ранее 38 и позднее 41 недели беременности, - выберите ответ “НЕТ”',
      'Ваши роды проходили естественным путем? В случаях: -  кесарево сечение, роды с хирургическим вмешательством, тяжелые осложненные роды, - выберите ответ “”НЕТ”',
      'Ваш малыш родился здоровым и НЕ был носителем каких-либо инфекций или вирусов?',
      'В роддоме ваш ребенок НЕ находился в реанимации и НЕ был переведен на этап выхаживания новорожденных. В противном случае, то-есть когда малыш в период новорожденности по тем или иным причинам находился в отделении реанимации или на этапе выхаживания новорожденных, выберите ответ “НЕТ”',
      'Вы были выписаны из родильного отделения в обычные сроки? Если по тем или иным причинам (здоровье мамы или новорожденного малыша) Вы были вынуждены провести в родильном отделении больше времени, выберите ответ “НЕТ”',
      'Период новорожденности протекал без особенностей? Если в этот период вы находились на стационарном лечении или неоднократно обращались к различным специалистам, получали лечение, выберите вариант “НЕТ”',
      'Первый год жизни малыша протекал без особенностей? Если в течении года ребенок находился на стационарном лечении, был под наблюдением узкого специалиста, получал курсовое лечение, выберите вариант “НЕТ”'
    ],
    printResult: [
      '<p>Течение беременности и родов вряд ли были легкими. Возможно, ваш ребенок нуждается в дополнительной поддержке и стимуляции для развития речи. Следуйте рекомендованным упражнениям этого курса, но помните, что лучше проводить несколько коротких занятий, чем одно длительное. Пожалуйста, уделите больше внимания нейролингвистическим упражнениям.</p>\n' +
      '<p>Внимательно изучите видеоматериалы по этой теме и выполняйте упражнения из данного раздела как можно чаще. Если после 3-4 недель по завершению курса вы не заметите значительного прогресса в речевом развитии ребенка, обязательно обратитесь за медицинской помощью.</p>',

      '<p>Ваша беременность и роды протекали не идеально и возможны некоторые задержки в развитии речи у ребенка, связанные с течением беременности и родов. Постарайтесь помочь малышу, выполняя предложенные домашние задания из всех групп. Будьте внимательны и прекращайте занятие при первых признаках усталости. </p>\n' +
      '<p>Введите в свой режим обязательное выполнение хотя бы одного упражнения из группы "Нейролингвистика" каждый день (внимательно прослушайте видеоматериалы на эту тему). Эти упражнения могут значительно помочь в развитии речи в вашем случае. Продолжайте активно общаться с ребенком, играть, читать книги и стимулировать его интерес к окружающему миру.</p>',

      '<p>Вероятно, течение беременности, родов и послеродового периода не привело к задержке речевого развития. В таких случаях малыши обычно демонстрируют хорошее развитие речи. Однако помните, что скорость речевого развития будет зависеть от ваших совместных усилий, степени речевой активности, развития моторики и других факторов.</p>\n' +
      '<p> Выполняйте предложенные домашние задания несколько раз в день, прекращая при первых признаках усталости или потере интереса. Имейте в виду, что ваша эмоциональная вовлеченность способна положительно повлиять на скорость усвоения знаний.</p>'
    ],
    order: [
      '0-4 балла',
      'от 5 до 7 баллов:',
      'от 8  до 10 баллов'
    ]
  }),
  methods: {
    selectRadio (id, counter) {
      this.activeX = id
      this.radios = counter
    },
    classObject (id) {
      if (id === this.activeX) {
        return 'radioBtnActive'
      } else {
        return 'radioBtn'
      }
    },
    showResultSite (data) {
      if (data <= 4) {
        this.messageApi = this.printResult[0]
      } else if (data > 4 && data <= 7) {
        this.messageApi = this.printResult[1]
      } else {
        this.messageApi = this.printResult[2]
      }
    },
    nextPageGPT () {
      this.message = ''

      if (this.activeX === -1) {
        this.message = 'Выберите один из вариантов'
      } else {
        this.message = ''
        this.result = this.result + this.radios
        this.counter++
        this.nextQuestion = this.questions[this.counter]
        this.activeX = -1

        if (this.counter > 10) {
          this.showResultSite(this.result + this.radios)
        }
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
