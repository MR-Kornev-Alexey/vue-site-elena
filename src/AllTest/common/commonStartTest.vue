<template>
  <div>
    <v-row class="justify-center d-flex" v-if="dataOfTableUser.data.baby_name_telegram !== null">
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
            {{ currentMonth }}
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
    <v-row class="justify-center d-flex"
           v-if="dataOfTableUser.data.baby_week < 37&&dataOfTableUser.data.baby_week !== null">
      <v-col cols="11" md="6" class="d-flex">
        <h4 class="d-inline-flex small-profile">
          <div class="profile-bold">
            Малыш родился на {{ babyWeekCalc }} неделе
          </div>
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex" v-if="dataOfTableUser.data.baby_week === null">
      <v-col cols="11" md="6" class="">
        <p>К сожалению, не введена неделя, когда родился Ваш ребенок. </p>
        <p> Прошу вас выбрать иконку
          <svg-icon class="svgIcon" type="mdi" :path="baby" size="28px"></svg-icon>
          справа вверху и ввести данные
        </p>
      </v-col>
    </v-row>
    <div v-if="calcFactOld === 0">
      <v-row class="justify-center d-flex" v-if="currentMonth === 0">
        <v-col cols="11" md="6" class="d-flex">
          <p class="">
            К сожалению, данный тест не применим к новорожденным (возраст 0 месяцев). Вместо этого вы можете смотреть
            полезные видеоматериалы из наших рассылок, выполнять домашние задания, а также скачать и распечатать
            руководство для мам (возраст 0 месяцев) и ознакомиться с дополнительными материалами.
          </p>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" v-else>
        <v-col cols="11" md="6" class="d-flex">
          <p class="">
            К сожалению, при фактическом возрасте 1 месяц данный тест не применим, если ребенок вынашивался меньше 37
            недель
            (расчетный возраст 0 месяцев). Вместо этого вы можете смотреть полезные видеоматериалы из наших рассылок,
            выполнять домашние задания, а также скачать и распечатать руководство для мам (возраст 0 месяцев) и
            ознакомиться с дополнительными материалами.
          </p>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <div v-if="babyCorrect">
        <v-row class="justify-center d-flex text-center">
          <v-col cols="11" class="d-flex justify-center" style="flex-direction: column">
            <div class="text-center">
              <v-btn class="btn-green" @click="$emit('startTestPsy', currentMonth)">
                Старт для {{ currentMonth }} мес
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex">
          <v-col cols="11" md="6" class="d-flex">
            <p class="">
              В данный момент фактический возраст ребенка составляет <strong>{{ showMonth(currentMonth) }}</strong>.
              При вынашивании ребенка <strong>{{ showWeek(dataOfTableUser.data.baby_week) }}</strong> учитывается коррекция возраста.
              Расчетный возраст в этом случае будет составлять <strong>{{ showMonth(calcFactOld) }}</strong>.
              <br>
              Если результаты теста по фактическому возрасту <strong> ( {{ currentMonth }} ) </strong> не удовлетворяют
              вашим ожиданиям или вызывают вопросы, рекомендуется также пройти тест по расчетному возрасту <strong> (
              {{ calcFactOld }} )</strong> ребенка,
              который может дать более полное представление о развитии ребенка.
            </p>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex text-center pb-md-6 mb-sm-6">
          <v-col cols="11" class="d-flex justify-center" style="flex-direction: column">
            <div class="text-center">
              <v-btn class="btn-green" @click="$emit('startTestPsy', calcFactOld)">
                Старт для {{ calcFactOld }} мес
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row class="justify-center d-flex text-center pb-sm-4">
          <v-col cols="11" class="d-flex justify-center" style="flex-direction: column">
            <div class="text-center">
              <v-btn class="btn-green" @click="$emit('startTestPsy', currentMonth)">
                Старт для {{ currentMonth }} мес
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiBaby } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  name: 'commonStartTest',
  components: {
    SvgIcon
  },
  data: () => ({
    baby: mdiBaby,
    babyCorrect: false,
    calcFactOld: null
  }),
  methods: {
    showMonth (month) {
      if (month === 1) {
        return month + ' месяц'
      } else if (month === 2 || month === 3 || month === 4) {
        return month + ' месяца'
      } else {
        return month + ' месяцев'
      }
    },
    showWeek (week) {
      return week + ' недель'
    },
    calculateCorrectionAndMonth (month, week) {
      this.babyCorrect = false
      this.calcFactOld = month
      if (month >= 8 || week > 36) {
        this.babyCorrect = false
      } else if (month === 0 && week <= 36) {
        this.babyCorrect = false
        this.calcFactOld = month
      } else if (month < 8 && week <= 36) {
        this.babyCorrect = true
        this.calcFactOld = month - 1
      } else if (month === 1 && week <= 36) {
        this.babyCorrect = false
        this.calcFactOld = 0
      }
    }
  },
  mounted () {
    this.calculateCorrectionAndMonth(this.currentMonth, this.dataOfTableUser.data.baby_week)
  },
  computed: {
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    dataOfTableUser () {
      return this.$store.state.auth.userTableNew
    },
    babyWeekCalc () {
      if (this.dataOfTableUser.data.baby_week !== null) {
        return this.dataOfTableUser.data.baby_week
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
