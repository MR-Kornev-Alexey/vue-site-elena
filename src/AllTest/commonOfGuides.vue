<template>
  <div>
    <testHeader :title="titleOut" :showBaby="correctBabyInHeader" :showAsk="showAsk" :mainLink="mainLink"/>
    <v-row class="justify-center d-flex pt-6" v-if="dataOfTableUser.data.baby_name_telegram !== null">
      <v-col cols="11" md="6" class="d-flex ">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold">
            Имя вашего ребенка:
          </div>
          <div class="ml-4">
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
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold">
            Полное количество месяцев:
          </div>
          <div class="ml-3">
            {{ babyMonthsCalc }}
          </div>
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
    <v-row class="justify-center d-flex ">
      <v-col cols="11" md="6" class="" style="color: #2F3550">
        <p>Каждый месяц мы предоставляем вам 4 уровня сложности, соответствующих разным потребностям.</p>
        <ol>
          <li>
            <p><strong>Стартовый уровень</strong> - создан для тех, кто только начинает свой путь в этом месяце. Это
              своего рода путеводитель из предыдущего месяца и возможность проверить, не упустили ли вы какие-то
              ключевые моменты в развитии вашего ребенка.</p>
          </li>
          <li>
            <p><strong>Базовый уровень</strong> - включает в себя основные умения, необходимые для данного возраста
              вашего ребенка. Этот уровень поможет вашему ребенку укрепить и развить фундаментальные навыки.</p>
          </li>
          <li>
            <p><strong>Усиленный уровень</strong> - здесь представлены более сложные упражнения и задания, специально
              разработанные для вашего возраста. Этот уровень подойдет тем, кто готов к более серьезным вызовам.</p>
          </li>
          <li>
            <p><strong>Продвинутый уровень</strong> - задания из следующего месяца, предназначенные для тех, кто уже
              легко справляется с заданиями текущего месяца. Этот уровень предоставляет ребенку возможность прокачать
              свои навыки и подготовиться к новым вызовам.</p>
          </li>
        </ol>
        <p>Мы стремимся обеспечить оптимальный опыт обучения для каждого ребенка, учитывая его индивидуальные
          потребности и уровень подготовки.</p>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex">
      <v-col cols="11" md="6" class="d-flex">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold">
            Выберите тематику
          </div>
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center d-flex">
      <v-col cols="11" md="6" class="justify-center text-left flex-column">
        <div v-for="(n,i) in questionsAll"
             :key="i">
          <div class="d-inline-flex text-left justify-start">
            <div class="mx-2"
                 @click="selectRadio(n.id)"
                 :class="classObject(n.id)">
            </div>
            <div class="choiceText">
              {{ n.text }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <transition name="fade">
      <v-row class="d-flex justify-center" v-if="show">
        <v-col cols="11"
               md="6"
               align-self="center"
               style="margin: auto "
               class="text-center"
        >
          <v-row class="justify-center d-flex">
            <v-col cols="11" md="6" class="d-flex">
              <h4 class="small-profile">
                <div class="profile-bold text-center">
                  Выберите гайд для {{ select }} месяцев
                </div>
              </h4>
            </v-col>
          </v-row>
          <v-row class="justify-center d-flex " v-if="select === 1">
            <v-col cols="11" md="6" class="flex-column justify-center text-center">
              <div v-for="(n,i) in pattern1" :key="i">
                <a :href="aLinkPDF(i + 1)" target="_blank">
                  <button class="radioBtnGreen my-2">
                    <p>{{ n }}</p>
                  </button>
                </a>
              </div>
            </v-col>
          </v-row>
          <v-row class="justify-center d-flex " v-if="select === 12">
            <v-col cols="11" md="6" class="flex-column justify-center text-center">
              <div v-for="(n,i) in pattern12" :key="i">
                <a :href="aLinkPDF(i + 1)" target="_blank">
                  <button class="radioBtnGreen my-2">
                    <p>{{ n }}</p>
                  </button>
                </a>
              </div>
            </v-col>
          </v-row>
          <v-row class="justify-center d-flex " v-if="select!==1&&select!==12">
            <v-col cols="11" md="6" class="flex-column justify-center text-center">
              <div v-for="(n,i) in pattern" :key="i">
                <a :href="aLinkPDF(i + 1)" target="_blank">
                  <button class="radioBtnGreen my-2">
                    <p>{{ n }}</p>
                  </button>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </transition>

    <v-row class="justify-center d-flex">
      <v-col cols="11" md="6" class="d-flex">
        <h4 class="small-profile">
          <div class="profile-bold text-center">
            Изменить месяц
          </div>
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex">
      <v-col cols="11" md="6" class="d-flex justify-center">
        <v-select
          v-model="select"
          :items="calcMonth"
          item-title="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
    <Footer class="footer"/>
  </div>
</template>

<script>
import testHeader from '@/AllTest/TestHeader'
import Footer from '@/views/Footer'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBaby } from '@mdi/js'

export default {
  name: 'commonOfGuides',
  components: {
    testHeader,
    Footer,
    SvgIcon
  },
  data: () => ({
    select: null,
    show: false,
    months: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ],
    titleOut: 'Гайды для печати',
    correctBabyInHeader: false,
    activeX: -1,
    radios: null,
    showAsk: true,
    mainLink: '/developTest',
    textHelp: null,
    inline: null,
    pattern: ['Стартовый', 'Базовый', 'Усиленный', 'Продвинутый'],
    pattern1: ['Базовый', 'Усиленный', 'Продвинутый'],
    pattern12: ['Стартовый', 'Базовый', 'Усиленный'],
    questionsAll: [
      {
        id: 0,
        text: 'Двигательная активность',
        index: 'move_'
      },
      {
        id: 1,
        text: 'Речевое развитие',
        index: 'speak_'
      },
      {
        id: 2,
        text: 'Эмоциональное развитие',
        index: 'emo_'
      }
    ],
    showHelp: false,
    baby: mdiBaby,
    matrixTestAll: {
      1: ['1_2', '1_3', '2_2'],
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
      12: ['11_3', '12_2', '12_3']
    }
  }),
  methods: {
    selectRadio (id) {
      this.activeX = id
      this.radios = id
      this.show = true
    },
    classObject (id) {
      if (id === this.activeX) {
        return 'choiceRoundActive'
      } else {
        return 'choiceRound'
      }
    },
    aLinkPDF (link) {
      if (this.radios !== null) {
        const index = this.questionsAll[this.radios].index
        const url = this.matrixTestAll[this.select][link - 1]
        return 'http://116.202.181.94/pdf/' + index + url + '.pdf'
      } else {
        return '#'
      }
    },
    convertBirthdate (date) {
      const oldDay = Number(date.substring(0, 2))
      const oldMonth = Number(date.substring(3, 5))
      const oldYear = Number(date.substring(6))
      return new Date(oldYear, oldMonth - 1, oldDay)
    }
  },
  mounted () {
    this.select = this.babyMonthsCalc
  },
  computed: {
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    calcMonth () {
      const newMonts = this.months.filter(month => {
        return month >= this.currentMonth - 3 && month <= this.currentMonth + 1
      })
      return newMonts
    },
    babyMonthsCalc () {
      if (this.dataOfTableUser.data.birthday_telegram !== null) {
        const newBirthdate = this.convertBirthdate(this.dataOfTableUser.data.birthday_telegram)
        const today = new Date()
        let months = (today.getFullYear() - newBirthdate.getFullYear()) * 12 + today.getMonth() - newBirthdate.getMonth()
        if (today.getDate() < newBirthdate.getDate()) {
          const newFrom = new Date(today.getFullYear(), today.getMonth(), newBirthdate.getDate())
          if (today < newFrom && today.getMonth() === newFrom.getMonth() && today.getFullYear() % 4 !== 0) {
            months--
          }
        }
        return months
      } else {
        return null
      }
    },
    dataOfTableUser () {
      return this.$store.state.auth.userTableNew
    },
    firstTestOut () {
      if (+this.numberMonthForTest === 1) {
        return 3
      } else {
        return 4
      }
    }
  }
}
</script>

<style scoped>

</style>
