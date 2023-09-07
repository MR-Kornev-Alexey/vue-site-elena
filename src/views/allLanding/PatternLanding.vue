<template>
  <v-container fluid class="main-home">
    <v-row>
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6">
        <h2 class="h2-lending mx-auto" style="">{{ dataFromLending.title }}</h2>
        <p class="p-lending" v-html=" dataFromLending.subTitle"></p>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center first-main-landing">
      <v-col
        cols="10"
        class="justify-center text-center main-container">
        <img :src="require('@/assets/img/landing/main-img-1.png')" alt="main" class="main-img-landing">
        <div class="justify-center text-center ">
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center" style="position: relative">
      <v-col cols="12" style="z-index: 210">
        <img :src="require('@/assets/img/landing/frame.svg')" alt="main" class="first-frame-landing">
      </v-col>
      <v-col cols="10" style="z-index: 211">
        <h2 class="h2-lending mx-auto">Вы получите:</h2>
        <v-row >
          <v-col v-for="(item, key) in dataFromLending.imgDescription" :key="key" cols="12" sm="12" md="6" lg="6"
                 class="d-flex text-center" :class="[key % 2 !== 0 ? 'justify-start' : 'justify-end']">
            <v-card color="transparent" theme="light" class="d-flex landing-card-description">
              <div class="d-flex align-items-center">
                <img :src="require(`@/assets/img/landing/${item}`)" alt="" class="img-description"/>
                <div class="text-left landing-card-div-description">
                  <p>
                    {{ dataFromLending.descriptionSub[key] }}
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center text-center mt-6">
      <v-col cols="12" md="7" class="d-flex-column justify-center" style="position: relative">
        <div class="title-second">
          <h2 class="h2-lending" style="text-align: center">Состав курса:</h2>
        </div>
        <div v-for="(item, key) in dataFromLending.descriptionSecond" :key="key"
             class="d-flex text-left justify-md-end justify-lg-end justify-sm-center">
          <div class="d-flex landing-second-description">
            <div class="d-flex align-items-center letter-second">
              0{{ key + 1 }}
            </div>
            <div class="text-left landing-card-div-description align-self-center" v-html="dataFromLending.descriptionSecond[key]">
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5" class="d-flex align-self-center justify-center ">
        <img :src="require('@/assets/img/landing/phone-dev.png')" alt="phone" class="img-phone">
      </v-col>
    </v-row>
    <SelectAnswers />
    <carouselFeedback/>
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../Footer'
import SelectAnswers from '@/views/allLanding/selectAnswers'
import carouselFeedback from '@/views/allLanding/carouselFeedback'

export default {
  name: 'patternLanding',
  components: {
    SelectAnswers,
    carouselFeedback,
    Footer
  },
  computed: {
    dataFromLending () {
      return this.$store.state.auth.listOfLanding[this.$store.state.auth.numberOfLanding]
    }
  }
}
</script>

<style scoped>

</style>
