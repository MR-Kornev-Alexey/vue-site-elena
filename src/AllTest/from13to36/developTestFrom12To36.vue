<template>
  <div class="all-screen">
    <testHeader18 :title="titleOut" />
    <v-row class="justify-center text-center pt-6">
      <v-col
        cols="11"
        md="6"
        class="flex-column justify-center text-center"
      >
        <v-card
          class="mx-auto"
          variant="outlined"
          max-width="500"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-card-title">
                Движение<br>и физическое развитие
              </v-card-title>

              <v-card-subtitle style="color: #2F3550">{{selectTitle}}</v-card-subtitle>

              <v-card-actions>
                <router-link :to="'/moveTestMore12'" class="router-link">
                <v-btn
                  class="ms-2"
                          >
                  Перейти
                </v-btn>
                </router-link>
              </v-card-actions>
            </div>
            <v-avatar
              class="card-avatar-test"
              rounded="0"
            >
              <v-img :src="require('../../assets/img/forTast/chart-2.png')"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="11"
        md="6"
      >
        <v-card
          class="mx-auto"
          variant="outlined"
          max-width="500"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-card-title">
                Речь, эмоции,общение <br>&nbsp;
              </v-card-title>

              <v-card-subtitle style="color: #2F3550">{{selectTitle}}</v-card-subtitle>

              <v-card-actions>
                <router-link :to="'/speakTestMore12'" class="router-link">
                  <v-btn
                    class="ms-2"
                  >
                    Перейти
                  </v-btn>
                </router-link>
              </v-card-actions>
            </div>
            <v-avatar
              class="card-avatar-test"
              rounded="0"
            >
              <v-img :src="require('../../assets/img/forTast/chart-3.png')"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center pb-6">
      <v-col
        cols="11"
        md="6"
      >
        <v-card
          class="mx-auto"
          variant="outlined"
          max-width="500"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-card-title">
                Игры, обучение, мышление,<br>
                решение проблем
              </v-card-title>

              <v-card-subtitle style="color: #2F3550">{{selectTitle}}</v-card-subtitle>

              <v-card-actions>
                <router-link :to="'/emoTest12More'" class="router-link">
                  <v-btn
                    class="ms-2"
                  >
                    Перейти
                  </v-btn>
                </router-link>
              </v-card-actions>
            </div>

            <v-avatar
              class="card-avatar-test"
              rounded="0"
            >
              <v-img :src="require('../../assets/img/forTast/chart-1.png')"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from '../../views/Footer'
import testHeader18 from '@/AllTest/TestHeaderFrom12To36'
export default {
  name: 'developTest',
  components: {
    testHeader18,
    Footer
  },
  data: () => ({
    titleOut: 'Выберите тест'
  }),
  computed: {
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    selectTitle () {
      const ranges = [
        { min: 12, max: 15, value: 'от 12 до 15 месяцев' },
        { min: 16, max: 18, value: 'от 16 до 18 месяцев' },
        { min: 19, max: 24, value: 'от 19 до 24 месяцев' },
        { min: 25, max: 30, value: 'от 25 до 30 месяцев' }
      ]

      for (const range of ranges) {
        if (this.currentMonth >= range.min && this.currentMonth <= range.max) {
          return range.value
        }
      }

      return 'от 31 до 36 месяцев'
    }
  },
  mounted () {
    if (this.currentMonth <= 12) {
      this.$router.push('/developTest')
    }
  }
  // Двигательная активность
}
</script>

<style scoped lang="scss">
.v-card--variant-outlined {
  border: thin solid currentColor;
  border-radius: 16px;
}
.text-card-title {
  color: #2F3550;
  font-size: 18px;
}
.card-avatar-test {
  width: 130px;
  height: 130px;
  margin-right: 8px;
  margin-top: 6px;
}
@media screen and (max-width: 480px) {
  .text-card-title {
    font-size: 16px;
  }
  .card-avatar-test {
    width: 100px;
    height: 100px;
  }
}
@media screen and (max-width: 414px) {
  .card-avatar-test {
    width: 80px;
    height: 80px;
  }
  .text-card-title {
    font-size: 14px;
  }
}

@media screen and (max-width: 360px) {
  .card-avatar-test {
    width: 70px;
    height: 70px;
  }
  .text-card-title {
    font-size: 12px;
  }
}
@media screen and (max-width: 320px) {
  .card-avatar-test {
    width: 50px;
    height: 50px;
  }
  .text-card-title {
    font-size: 12px;
  }
}
</style>
