<template>
  <v-container fluid>
    <v-row class="justify-center text-center">
      <v-col
        cols="12"
        md="7"
        class="justify-center text-center d-flex"
      >
        <div class="block-title align-self-center justify-center">
          <h1 class="main-title">Оплата </h1>
          <h3 class="main-h3">
            рассылки домашних заданий (20% скидка)
          </h3>
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="11"
        md="7"
        class="justify-center text-center d-flex"
      >
        <v-card
          color="#FFC5AC"
          theme="light"
        >
          <v-card-title class="text-h5" style="color: #2F3550">
            1200 рублей
          </v-card-title>

          <v-card-subtitle style="color: #2F3550">Оплата за 1 месяц рассылки домашних заданий.</v-card-subtitle>

          <v-card-actions style="color: #2F3550">
            <a href="https://payform.ru/682FFE2/" target="_blank" class="a-pay">
            <v-btn variant="text" >
              Оплатить
            </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="11"
        md="7"
        class="justify-center text-center d-flex"
      >
        <v-card
          color="#FFC5AC"
          theme="light"
        >
          <v-card-title class="text-h5" style="color: #2F3550">
            3300 рублей
          </v-card-title>

          <v-card-subtitle style="color: #2F3550">Оплата за 3 месяца рассылки домашних заданий.</v-card-subtitle>

          <v-card-actions style="color: #2F3550">
            <a href="https://payform.ru/ah2FFGj/" target="_blank" class="a-pay">
                      <v-btn variant="text" >
                Оплатить
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="11"
        md="7"
        class="justify-center text-center d-flex"
      >
        <v-card
          color="#FFC5AC"
          theme="light"
        >
          <v-card-title class="text-h5" style="color: #2F3550">
            4800 рублей
          </v-card-title>

          <v-card-subtitle style="color: #2F3550">Оплата за 6 месяцев рассылки домашних заданий.</v-card-subtitle>

          <v-card-actions style="color: #2F3550" >
            <a href="https://payform.ru/dj2FFHW/" target="_blank" class="a-pay">
                       <v-btn variant="text">
                Оплатить
              </v-btn></a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <Footer class="footer-down"/>
  </v-container>
</template>

<script>
import Footer from '@/views/Footer'

export default {
  name: 'HWAddPay',
  components: {
    Footer
  },
  methods: {
    open1200 () {
      window.open('https://payform.ru/682FFE2/')
    },
    open3300 () {
      window.open('https://payform.ru/ah2FFGj/')
    },
    open4800 () {
      window.open('https://payform.ru/dj2FFHW/')
    }
  }
}
</script>

<style scoped lang="scss">
.a-pay {
  color: #2F3550;
  text-decoration: none;
}

</style>
