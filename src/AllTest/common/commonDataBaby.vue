<template>
<div>
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
</div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBaby } from '@mdi/js'

export default {
  name: 'commonDataBaby',
  computed: {
    dataOfTableUser () {
      return this.$store.state.auth.userTableNew
    },
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    }
  },
  components: {
    SvgIcon
  },
  data: () => ({
    baby: mdiBaby
  })
}
</script>

<style scoped>

</style>
