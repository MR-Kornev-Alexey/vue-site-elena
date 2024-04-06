<template>
  <v-container fluid class="main-home">
    <v-row>
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6">
        <h2 class="h2-lending-new mx-auto" style="">{{ dataFromLending.title }}</h2>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center first-main-landing-spk">
      <v-col
        cols="10"
        class="justify-center text-center main-container">
        <img :src="require('@/assets/img/landing/little-girl-playing-the-xylophone.png')" alt="main"
               class="img-girls"/>
      </v-col>
    </v-row>
    <v-row style="z-index: 224">
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6" style="z-index: 300">
        <h3 class="h3-lending-new mx-auto">{{ dataFromLending.subTitle }}</h3>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="11" md="7" class="d-flex justify-center">
        <a href="/speakLandingSpecial#tariff" style="text-decoration: none">
          <v-btn class="btn-dream-landing" style="z-index: 300">
            Купить
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <v-row class="bg-row">
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6">
        <h2 class="h2-lending mx-auto">Этот интенсив для Вас, если:</h2>
      </v-col>
    </v-row>
    <v-row class="before768" style="z-index: 300; position: relative">
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6">
        <v-row class="d-flex justify-center">
          <v-col v-for="(item, key) in dataFromLending.imgDescription" :key="key" cols="12" sm="12" md="6" lg="6"
                 class="d-flex text-center" :class="[key % 2 !== 0 ? 'justify-start' : 'justify-end']">
            <div class="d-flex landing-card-description">
              <div class="d-flex align-items-center">
                <img :src="require(`@/assets/img/landing/speak/${item}`)" alt="" class="img-description"/>
                <div class="text-left">
                  <p class="text-common" v-html="dataFromLending.descriptionSub[key]"/>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="after768" style="z-index: 300; position: relative">
      <v-col cols="11"
             class="justify-center d-flex-column text-center mx-auto ">
        <v-row class="d-flex justify-center">
          <v-col v-for="(item, key) in dataFromLending.imgDescription" :key="key" cols="12" sm="12" md="6" lg="6"
                 class="d-flex text-center justify-center">
            <v-img :src="require(`@/assets/img/landing/cards/${dataFromLending.imgDescription4[key]}`)"
                   class="img-cards-first">
              <div class="text-common">
                <div v-html="dataFromLending.descriptionSub[key]"/>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-col>`
    </v-row>
<!--    <Counter/>-->
    <v-row class="d-flex justify-center">
      <v-col cols="11" md="7" class="d-flex justify-center">
        <a href="/speakLandingSpecial#tariff" style="text-decoration: none">
          <v-btn class="btn-dream-landing" style="z-index: 300">
            Купить
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center text-center" style="margin: 0; padding: 0; ">
      <v-col
        cols="12"
        md="6"
        class="d-flex-column justify-center text-center"
      >
        <h2 class="h2-lending">С какими проблемами поможет интенсив:</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6">
        <v-row class="d-flex justify-center">
          <v-col v-for="(item, key) in dataFromLending.descriptionSub2" :key="key" cols="12" sm="12" md="6" lg="6"
                 class="d-flex text-center">
            <v-card class="opacity_bg mx-auto v-card-sub-2">
              <v-img
                height="160"
                :src="require(`@/assets/img/landing/cards/pattern.png`)"
                class="d-flex justify-center text-center"
              >
                <v-card-text class="div-des text-common" v-html="item">
                </v-card-text>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center text-center mt-6 before768" id="before768">
      <v-col cols="12" md="7" class="d-flex-column justify-center" style="position: relative">
        <div class="title-second">
          <h2 class="h2-lending">Вы получаете:</h2>
        </div>

        <div v-for="(item, key) in dataFromLending.descriptionSecond" :key="key"
             class="d-flex text-left justify-md-end justify-lg-end justify-sm-center">
          <div class="d-flex landing-second-description">
            <div class="d-flex align-items-center letter-second">
              0{{ key + 1 }}
            </div>
            <div class="text-left text-common align-self-center pl-md-4"
                 v-html="dataFromLending.descriptionSecond[key]">
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="d-flex-column align-self-center justify-center ">
        <img :src="require('@/assets/img/landing/phone-spk.png')" alt="phone" class="img-phone">
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center text-center mt-6" id="after768">
      <v-col cols="12" md="7" class="d-flex-column justify-center text-center">
        <div class="d-flex title-second mx-auto text-center justify-center">
          <h2 class="h2-lending d-flex align-self-center text-center justify-center pl-1">Вы получаете:</h2>
        </div>

        <div v-for="(item, key) in dataFromLending.descriptionSecond" :key="key"
             class="d-flex text-left justify-md-end justify-lg-end justify-sm-center">
          <v-img :src="require(`@/assets/img/landing/cards/${dataFromLending.imgDescription3[key]}`)" class="img-cards">
            <div class="d-flex text-center align-self-center new-card-text justify-center"
                 v-html="dataFromLending.descriptionSecond[key]">
            </div>
          </v-img>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="d-flex-column align-self-center justify-center ">
        <img :src="require('@/assets/img/landing/phone-spk.png')" alt="phone" class="img-phone">
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center text-center " style="margin: 0; padding: 0">
      <v-col
        cols="12"
        class="d-flex justify-center text-center align-items-center"
      >
        <h2 class="h2-lending">"Живые" вебинары</h2>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center text-center " style="margin: 0; padding: 0">
      <v-col
        cols="12"
        md="8"
        class="d-flex justify-center align-items-start flex-column"
      >
        <div class="">
          <p class="element-webinar-lending"><strong>Между экранами и речью.</strong><br> Как минимизировать вред мультиков и смартфонов, сделав их помощниками в разитии речи</p>
        </div>
        <div class="my-4">
          <p class="element-webinar-lending"><strong>Если малыш с особенностями</strong><br> Эффективные алгоритмы работы при ЗРР и других проблемах здоровья и развития</p>
        </div>
        <div class="my-4">
          <p class="element-webinar-lending"><strong>Как разговорить молчуна и стимулировать "Капризулю"</strong><br>Запускаем речь без криков, стрессов и истерик</p>
        </div>
        <div class="">
          <p class="element-webinar-lending"><strong>Многоязычная семья с пеленок </strong><br>Когда начинать учить второй язык и  как действовоть в многоязычной среде</p>
        </div>
      </v-col>
    </v-row>
    <aboutLanding/>
    <SelectAnswers :numberLanding="2"/>
    <v-row class="d-flex justify-center">
      <v-col cols="11" md="7" class="d-flex justify-center">
        <a href="/speakLandingSpecial#tariff" style="text-decoration: none">
          <v-btn class="btn-dream-landing" style="z-index: 300">
            Купить
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <newSlider/>
    <AllTariffs :numberLanding="2" id="tariff"/>
    <v-row class="d-flex justify-center text-center " style="margin: 0; padding: 0">
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center text-center"
      >
        <h2 class="h2-lending">Если не можете оплатить</h2>
      </v-col>
    </v-row>
    <v-row class="d-flex-column justify-center">
      <v-col cols="11" md="7" class="d-flex justify-center">
        <a href="https://wa.me/4917625187846?text=Здравствуйте..." style="text-decoration: none" target="_blank">
          <v-btn class="btn-dream-landing text-center" style="z-index: 300">
            <img :src="require('@/assets/img/social/icon-8.png')" alt="whatsUpp" class="noMoneyIcon"> Написать
          </v-btn>
        </a>
      </v-col>
      <v-col cols="11" md="7" class="d-flex justify-center">
        <a href="https://t.me/mrk_service" style="text-decoration: none" target="_blank">
          <v-btn class="btn-landing-blue text-center" style="z-index: 300">
            <img :src="require('@/assets/img/social/icon-2.png')" alt="whatsUpp" class="noMoneyIcon"> Написать
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../Footer'
import SelectAnswers from '@/views/allLanding/selectAnswers'
import aboutLanding from '@/views/allLanding/AboutLanding'
import AllTariffs from '@/views/allLanding/AllTariffs'
// import Counter from './CountDown'
import newSlider from './newSlider'

export default {
  name: 'patternLanding',
  data: () => ({}),
  components: {
    SelectAnswers,
    aboutLanding,
    AllTariffs,
    // Counter,
    Footer,
    newSlider
  },
  computed: {
    dataFromLending () {
      return this.$store.state.auth.listOfLanding[4]
    },
    getBackgroundImageUrl (item) {
      return '@/assets/img/landing/' + item
    }
  }
}
</script>

<style scoped>
.background-image {
  position: relative;
  background-position: bottom center;
  background-size: cover;
}
</style>
