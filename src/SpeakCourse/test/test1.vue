<template>
  <v-container fluid id="first-quiz">
    <v-row class="row-blue d-flex justify-center text-center mt-4">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Оцените  речевое развитие ребенка</h2>
      </v-col>

    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4" v-if="counter === 1">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left p-quiz-text">
          <p class="">
            <strong>
              Добрый день
            </strong>
          </p>
          <p class="">
            Для первичной оценки речевого развития ребенка предлагаю пройти небольшой тест, ответив на вопросы.
         </p>
          <p class="">
           <strong>ВНИМАНИЕ! </strong>Данный тест субъективный и не может полностью  и всесторонне оценить речевое развитие ребенка.
            Для полного понимания особенностей речевого развития Вам будут предложены и другие тесты.
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
        text: 'Всегда',
        counter: 1
      },
      {
        id: 1,
        text: 'Иногда',
        counter: 0.5
      },
      {
        id: 2,
        text: 'Никогда',
        counter: 0
      }
    ],
    message: '',
    radios: 0,
    counter: 1,
    messageApi: '',
    nextQuestion: 'Ребенок отзывается на свое имя',
    showResult: false,
    questions: [
      '',
      'Ребенок отзывается на свое имя',
      'Знает имена людей из ближнего круга и находит их глазами (указывает жестом)',
      'Может показать по Вашей просьбе носик, ротик, глазки, ручки (на маме, на кукле, на себе, в зеркале). ' +
      'Если у вас есть сомнения проведите игру "Покажи части тела": Просите малыша показать разные части своего тела или тела других людей. ' +
      'Называйте части тела, такие как носик, ротик, глазки, ручки, и попросите малыша указать на них или показать их жестом. ' +
      'Вы также можете использовать куклу или зеркало для этой игры.',
      'На просьбу “Дай…(кубик, ложку, соску) правильно находит предмет среди прочих и протягивает Вам. В случае сомнений проведите игру "Дай предмет": Попросите малыша дать вам определенный предмет, такой как кубик, ложку или соску. ' +
      'Разложите несколько предметов перед ним и попросите выбрать и передать вам нужный предмет. Поощряйте малыша, когда он правильно находит и передает предмет.',
      'Понимает и реагирует на слово “нельзя” (норма, в том числе, если иногда злится и преодолевает ваш запрет). Необходимо учесть правильное реагирование на слово "нельзя": Например: В процессе игры или исследования окружающего мира,Вы  используйте слово ' +
      '"нельзя" в отношении определенных действий, которые малышу не следует делать. Обратите внимание, как он реагирует на это слово и преодолевает ваш запрет.',
      'Выполняет простые и понятные просьбы (принеси маме мячик, пойдем кушать, выбирай книжку возьми на столе ложку и т.д.). Понаблюдайте, как малыш реагирует на ваши просьбы и старается ли их выполнить. Похвалите его, если он успешно выполняет задание.',
      'Находит по вашей просьбе названный предмет. Если вы никогда не предлагали ребенку найти предмет, проведите игру  "Найди предмет": Покажите малышу предмет, например, мячик, и назовите его. Затем спрячьте мячик под одну из нескольких пустых коробок или среди игрушек. Попросите малыша найти мячик. Похвалите малыша и порадуйтесь найденному мячику мячик.'
    ],
    printResult: [
      '<p>Ребенок пока еще недостаточно понимает и владеет речью. Вы и так это понимаете и именно поэтому пришли на курс. Постарайтесь выполнять все домашние задания этого курса. Помните что несколько коротких занятий в течении дня намного эффективнее, чем одно длинное. Включите варианты работы с речьи из видео, рекомендаций и домашних заданий в повседневные, домашние дела. Проводите во время сбора на прогулку, за завтраком и обедом, во время игры и купания.</p>\n' +
        '<p>И еще:</p>\n' +
        '<ul>\n' +
        '<li aria-level="3">Установите более активную коммуникацию с ребенком, обращая больше внимания на его речевые и языковые навыки. Эмоционально поддерживайте и радуйтесь даже мелкой победе</li>\n' +
        '<li aria-level="3">Постоянно общаясь называйте предметы, описывайте происходящее вокруг используя лайфхаки (ритм, эмоции, тембр голоса - будет в видеокурсе).</li>\n' +
        '<li aria-level="3">Используйте простые слова и предложения и многократно повторяйте их для укрепления понимания, но произнося по разному. Изменяйте протяженность слогов, тяните отдельные буквы, переходите с обычной речи на шепот.</li>\n' +
        '<li aria-level="3">Поощряйте и поддерживайте любые попытки коммуникации, даже если ребенок использует только жесты или звуки.</li>\n' +
        '</ul>\n' +
        '<p>Если вашему малышу более 12 месяцев, пройдите повторно это тестирования по окончанию речевого курса и в случае такого же результата, обязательно обратитесь к вашему врачу</p>',
      '<p>У Вашего малыша наблюдается удовлетворительный уровень развития речи. Однако, есть некоторые аспекты, над которыми стоит поработать. Активно включайтесь в процесс развития ребенка, но помните, что сделано отлично, враг хорошо. Между делом проводите 5-7 коротких речевых занятий, которые можно вплести в рутинные домашние дела. Иногда такой подход может оказаться более эффективным, чем одно большое специально подготовленное занятие.</p>\n' +
      '<p>Дополнительно рекомендую:</p>\n' +
      '<ul>\n' +
      '<li aria-level="1">Выполняйте все предложенные домашние задания и рекомендации из обучающих видео, поддерживая ЭМОЦИОНАЛЬНОЕ вовлечение.</li>\n' +
      '<li aria-level="1">Продолжайте активно общаться с ребенком, стимулируя его речевое развитие с помощью различных ИНТОНАЦИЙ вашего ГОЛОСА. Например, начинайте фразу обычным голосом, а заканчивайте шепотом. При чтении книг или рассказывании сказок/стишков изменяйте тембр и протяженность голоса, растягивая отдельные буквы или слоги.</li>\n' +
      '<li aria-level="1">Постоянно расширяйте словарный запас ребенка, называя предметы, описывая действия и используя новые слова. При этом учтите особенности развития мозга ребенка данного возраста, о которых подробнее буду рассказывать в видео. Например, повторяя название предмета несколько раз в такт своей речи, постучите особым РИТМОМ. В другой ситуации, перед тем как назвать предмет или действие, используйте загадочный голос и спросите: "Ты видишь...?" или "Ты слышишь...?"</li>\n' +
      '<li aria-level="1">Задавайте вопросы, чтобы поощрять ребенка коммуницировать с вами. И не забывайте, что лучше это делать эмоционально, играя с голосом.</li>\n' +
      '<li aria-level="1">Читайте книги и рассказывайте истории, чтобы развивать языковые навыки и понимание рассказанного. Однако, во время чтения делайте паузы, чтобы задать ВОПРОСЫ. Каким должен быть ваш голос в такие моменты? Я думаю, вы поняли, что ваш голос должен быть необычным и разным для привлечения внимания ребенка. Используйте нестандартные интонации, меняйте тембр и громкость голоса в зависимости от ситуации. При задании вопросов делайте это с эмоциональным настроем, чтобы поддерживать взаимодействие с ребенком.</li>\n' +
      '<li aria-level="1">Помимо этого, помните, что самым важным является ваша оценочная деятельность. Радуйтесь даже незначительным успехам, но ИСКРЕННЕ от все души.</li>\n' +
      '<li aria-level="1">Не забывайте, что каждый ребенок развивается индивидуально, поэтому важно адаптировать свои подходы под его потребности и интересы. Играйтесь, экспериментируйте и создавайте положительную и стимулирующую обстановку для развития речи вашего малыша.</li>\n' +
      '</ul>',
      '<p>У вашего малыша достаточно высокий уровень развития речи. Однако не упустите это время и активно включайтесь в процесс.</p>\n' +
      '<p>Рекомендую следующее:</p>\n' +
      '<ul>\n' +
      '<li aria-level="1">Продолжайте поддерживать и стимулировать развитие речи ребенка, используя разнообразные подходы. Немного ТЕАТРАЛИЗАЦИИ и дополнительная ЭМОЦИОНАЛЬНОСТЬ принесет больше пользы.</li>\n' +
      '<li aria-level="1">Сделайте свою ПОВСЕДНЕВНУЮ речь более сложной и насыщенной.&nbsp;</li>\n' +
      '<li aria-level="1">Вам, возможно, даже неизвестны все возможности вашего ГОЛОСА. Пришло время использовать их:</li>\n' +
      '<ul>\n' +
      '<li aria-level="2">Повышайте и понижайте голос.</li>\n' +
      '<li aria-level="2">Тяните отдельные слоги и буквы.</li>\n' +
      '<li aria-level="2">Поменяйте шепот громкой речью и наоборот.</li>\n' +
      '<li aria-level="2">Попробуйте пропевать отдельные слоги и слова.</li>\n' +
      '<li aria-level="2">Не забывайте делать паузы в неожиданных местах.</li>\n' +
      '</ul>\n' +
      '<li aria-level="1">Расширяйте словарный запас ребенка, вводите новые понятия и термины. Помните, что формирование пассивного словаря происходит значительно быстрее в НОВЫХ местах и при эмоциональном подъеме.</li>\n' +
      '<li aria-level="1">Задавайте более СЛОЖНЫЕ вопросы, чтобы развивать критическое мышление и умение выражать свои мысли. Не считайте, что это еще рано. Начните делать, даже если вам кажется, что малыш еще не все понимает.</li>\n' +
      '<li aria-level="1">Поощряйте ребенка участвовать в разговорах и играх, которые развивают коммуникативные навыки. Делайте это ненавязчиво, с помощью эмоционального вовлечения.</li>\n' +
      '<li aria-level="1">А ежедневные домашние задания, лайфхаки и теория помогут Вам в этом</li>\n' +
      '</ul>'
    ],
    order: [
      '0-3 балла',
      'от 3,5 до 5,5 баллов:',
      'от 5,5  до 7 баллов'
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
      if (data <= 3) {
        this.messageApi = this.printResult[0]
      } else if (data > 3 && data <= 5.5) {
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

        if (this.counter > 7) {
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
