<template>
  <v-row class="d-flex justify-center text-center" style="margin: 0; padding: 0; " >
    <v-col
      cols="12"
      md="6"
      class="d-flex-column justify-center text-center"
    >
      <h2 class="h2-lending">Курс стартует 17 июля 2023 года</h2>
      <p class="p-lending">до начала осталось:</p>
    </v-col>
  </v-row>
  <v-row class="d-flex justify-center text-center" style="margin: 0; padding: 0; " >
    <v-col
      cols="11"
      md="8"
      class="d-flex justify-space-around "
    >
      <v-card class="opacity_bg mx-auto card-counter" >
        <v-card-text class="card-text-counter">
          <p class="text-center font-weight-regular">
            {{ days % 365  }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block text color="deep-purple accent-4">
            дней
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- ---------------- -->
      <v-card class="opacity_bg mx-auto card-counter" >
        <v-card-text class="card-text-counter">
          <p class="text-center font-weight-regular">
            {{ hours % 24 }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block text color="deep-purple accent-4">
            часов
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- ---------------- -->
      <v-card class="opacity_bg mx-auto card-counter" >
        <v-card-text class="card-text-counter">
          <p class="text-center font-weight-regular">
            {{ minutes % 60 }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block text color="deep-purple accent-4">
            минут
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- ---------------- -->
      <v-card class="opacity_bg mx-auto card-counter" >
        <v-card-text class="card-text-counter">
          <p class="text-center font-weight-regular">
            {{ seconds % 60 }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block text color="deep-purple accent-4">
            СЕКУНД
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'CounterCards',
  setup () {
    const years = ref(0)
    const days = ref(0)
    const hours = ref(0)
    const minutes = ref(0)
    const seconds = ref(0)
    const lunchDate = new Date('17 July 2023')

    setInterval(() => {
      const currentDate = new Date()
      const lunchTime = lunchDate - currentDate

      seconds.value = parseInt(lunchTime / 1000)
      minutes.value = parseInt(seconds.value / 60)
      hours.value = parseInt(minutes.value / 60)
      days.value = parseInt(hours.value / 24)
      years.value = parseInt(days.value / 365)
    }, 1000)

    return { years, days, hours, minutes, seconds }
  }

}
</script>

<style>
.opacity_bg{
  background: rgba(255, 255, 255, 0.7);
}

</style>
