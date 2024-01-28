<template>
  <v-container fluid class="main-home">
    <v-row class="justify-center text-center">
      <v-col
        cols="12"
        md="7"
        style="position: relative;"
        class="justify-center text-center d-flex col-hero"
      >
        <v-row class="justify-center text-center">
          <v-col
            cols="3"
            class="right-arrow">
            <div>
              <img
                :src="require('@/assets/img/figure-5.png')"
                class="left-cone" alt="pic"
              >
            </div>
          </v-col>
          <v-col
            cols="10"
            style="position: relative;"
            class="justify-center text-center d-flex col-hero">
            <div class="block-title align-self-center justify-center">
              <h1 class="main-title">Елена Корнева</h1>
              <h3 class="main-h3">
                ваш эксперт в развитии малыша
              </h3>
              <div class="sub-title">
                <div class="element-subtitle">
                  <svg-icon type="mdi" :path="check" size="20"></svg-icon>
                  Педиатр, семейный психолог, эксперт по развитию детей
                </div>
                <div class="element-subtitle">
                  <svg-icon type="mdi" :path="check" size="20"></svg-icon>
                  Более 3000 результативных кейсов
                </div>
                <div class="element-subtitle">
                  <svg-icon type="mdi" :path="check" size="20"></svg-icon>
                  Автор и разработчик легендарных курсов и чат-ботов
                </div>
                <div class="element-subtitle">
                  <svg-icon type="mdi" :path="check" size="20"></svg-icon>
                  Бизнес-леди и мама трех успешных сыновей
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

      </v-col>
      <v-col
        cols="12"
        md="5"
        class="justify-center first-one"
      >
        <div class="round-6"/>
      </v-col>
    </v-row>
    <v-row class="row-light d-flex justify-center text-center ">
      <v-col
        cols="11"
        md="auto"
        class="justify-center d-flex text-center" style="flex-direction: column"
      >
        <h2 class="h2-title-home">Я могу Вам помочь</h2>
      </v-col>
    </v-row>
    <Courses/>
<!--    <courseSlider />-->
<!--    <v-row class="d-flex justify-center text-center" style="background-color: #b6d0ff">-->
<!--      <v-col-->
<!--        cols="11"-->
<!--        md="auto"-->
<!--        class="justify-center d-flex text-center" style="flex-direction: column"-->
<!--      >-->
<!--        <h2 class="h2-title-home" style="color: #304672">Как вырастить яркую личность</h2>-->
<!--        <v-img-->
<!--          aspect-ratio="16/9"-->
<!--          cover-->
<!--          src="@/assets/img/motherhood-1080.png"-->
<!--         class="banner-img"></v-img>-->
<!--       <v-img href="@/assets/img/motherhood-1080.png" alt="banner" width="600px" />-->

<!--        <p class="text-common mt-4" style="color: #304672">-->
<!--          бесплатный стартовый курс по материнству от Елены Корневой-->
<!--        </p>-->
<!--        <div class="my-4">-->
<!--          <a href="https://t.me/HelenEventBot?start=start" class="a-btn"><v-btn class="btn-advice mt-4">-->
<!--            Открыть-->
<!--          </v-btn></a>-->
<!--        </div>-->
<!--      </v-col>-->
<!--    </v-row>-->
    <Advice/>
<!--    <MobileBanner @click="goToBF"/>-->
<!--    <FiveOfReasons/>-->
    <Footer/>
  </v-container>
</template>

<script>
import Courses from './Courses'
import Advice from './Advice'
// import FiveOfReasons from '@/views/fiveOfReasons'
import Footer from './Footer'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiStarCheckOutline, mdiArrowDownThick, mdiCurrencyRub } from '@mdi/js'
// import MobileBanner from '../banner/banner'
// import courseSlider from '../common/coursesSlider'

export default {
  name: 'v-home',
  components: {
    Courses,
    Advice,
    Footer,
    // FiveOfReasons,
    SvgIcon
  },
  data () {
    return {
      content: '',
      drawer: false,
      check: mdiStarCheckOutline,
      left: mdiArrowDownThick,
      right: mdiArrowDownThick,
      rub: mdiCurrencyRub,
      select: {
        state: 'от 4 до 10 месяцев️',
        abbr: '1'
      },
      items: [
        {
          state: 'от 0 до 3 месяцев️',
          abbr: '0'
        },
        {
          state: 'от 4 до 10 месяцев️',
          abbr: '1'
        },
        {
          state: 'старше 11 месяцев️',
          abbr: '2'
        }
      ]
    }
  },
  watch: {
    select (newValue) {
      this.handleChange(newValue)
    }
  },
  methods: {
    handleChange (index) {
      this.$store.dispatch('auth/changePeriod', index.abbr)
    },
    goToBF () {
      this.$router.push('#blackFriday')
    }
  },
  computed: {
    numberOfOrder () {
      return this.$store.state.auth.numberOfOrder
    }
  }
}
</script>
<style lang="scss">
.main-home {
  background-color: #ead7c8;
}
.banner-img {
  width: 900px;
  -webkit-box-shadow: -11px 8px 3px -1px rgba(0,0,0,0.17);
  -moz-box-shadow: -11px 8px 3px -1px rgba(0,0,0,0.17);
  box-shadow: -11px 8px 3px -1px rgba(0,0,0,0.17);
}
.banner-bf {
  width: 500px;
}
.col-hero {
  padding: 0;
  margin: 0;
}

.fa {
  margin-right: 6px;
}

.right-arrow {
  display: flex;
  align-items: center;
  justify-content: end;
}

.left-cone {
  height: 240px;
}

.block-title {
  color: #2F3550;
  z-index: 12;
}

.main-title {
  margin: 12px 0;
  font-size: 60px;
  line-height: 72px;
  text-align: center;
  font-family: 'Pattaya', sans-serif;
}

.main-h3 {
  font-size: 30px;
  padding: 12px 20px;
}

.first-one {
  min-height: 640px;
  background-image: url('@/assets/img/lena-avatar-jeans.png');
  background-position: center bottom;
  background-size: 76%;
  position: relative;
}

.main-fig-1 {
  position: absolute;
  z-index: 11;
  bottom: 237px;
  right: 40px;
  height: 388px;
}

.round-3 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  bottom: 264px;
  left: -16px;
  z-index: 10;
  border: 3px solid #8672a4;
}

.round-4 {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: 77px;
  right: -61px;
  z-index: 10;
  background-color: #8672a4;
}

.round-6 {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: -28px;
  left: 563px;
  z-index: 12;
  background-color: #4464a3;
}
.main-h3 {
  font-size: 30px;
  padding: 12px 20px;
  font-family: 'Pattaya', sans-serif;
}

@media screen and (max-width: 1600px) {
  .first-one {
    min-height: 593px;
    background-size: 86%;
    position: relative;
  }
  .main-h3 {
    font-size: 26px;
    padding: 16px;
    font-family: 'Pattaya', sans-serif;
  }
  .round-6 {
    width: 80px;
    height: 80px;
    top: -30px;
    left: 513px;
  }
  .main-course-img {
    bottom: -47px;
    right: 446px;
  }
}

@media screen and (max-width: 1280px) {
  .first-one {
    min-height: 554px;
    background-size: 100%;
  }
  .main-title {
    font-size: 56px;
    margin: 16px 0;
  }
  .main-h3 {
    font-size: 22px;
    padding: 16px;
    font-family: 'Pattaya', sans-serif;
  }
  .round-3 {
    right: -64px;
  }
  .round-6 {
    left: 396px;
  }
  .main-fig-1 {
    bottom: 237px;
    right: 10px;
  }
  .left-cone {
    left: 21px;
  }
  .main-img {
    height: 590px;
    right: 9px;
  }
}

@media screen and (max-width: 1024px) {
  .first-one {
    min-height: 462px;
    background-size: 102%;
  }
  .round-6 {
    width: 80px;
    height: 80px;
    top: -26px;
    left: 310px;
  }
  .main-title {
    font-size: 50px;
    margin: 4px 0;
  }
  .main-h3 {
    font-size: 20px;
    padding: 6px;
  }
  .main-fig-1 {
    bottom: 281px;
    right: 10px;
    height: 342px;
  }
  .left-cone {
    height: 160px;
  }
  .main-course-img {
    height: 473px;
    bottom: -40px;
    right: 317px;
  }
}

@media screen and (max-width: 768px) {
  .first-one {
    min-height: 756px;
    background-size: 95%;
  }
  .left-cone, .right-arrow {
    display: none;
  }
  .block-title {
    margin: 60px 0;
  }
  .main-title {
    font-size: 50px;
  }
  .main-img {
    height: 590px;
    right: 114px;
  }
  .round-4 {
    top: 106px;
    right: 20px;
  }
  .round-6 {
    left: 644px;
    top: 26px;
  }
  .round-3 {
    bottom: 165px;
    right: -59px;
    border: 3px solid #ffeab1;
  }
  .left-cone {
    height: 240px;
    position: absolute;
    bottom: 27px;
    left: 43px;
  }
  .navbar-brand {
    padding-left: 12px;
  }
  .navbar-collapse {
    padding-left: 12px;
  }

  .round-3 {
    bottom: 354px;
    right: 17px;
    height: 86px;
    width: 86px;
  }
  .round-4 {
    top: 7px;
    right: -15px;
    height: 66px;
    width: 66px;
  }
  .main-img {
    height: 590px;
    right: 117px;
  }
}

@media screen and (max-width: 600px) {
  .first-one {
    min-height: 591px;
    background-size: 95%;
  }
  .round-6 {
    left: 486px;
    top: -11px;
  }
}

@media screen and (max-width: 480px) {
  .first-advice-block {
    height: 352px;
    background-size: 74%;
  }
  .first-one {
    min-height: 382px;
    background-size: 88%;
  }
  .round-6 {
    display: none;
    left: 365px;
    top: -27px;
  }
  .main-title {
    font-size: 38px;
  }
  .first-advice-block {
    height: 414px;
    background-size: 87%;
  }
  .title-advice-block {
    font-size: 14px;
    padding: 0 12px;
  }
  .main-h3 {
    font-size: 18px;
    padding: 6px;
  }
  .block-title {
    margin: 40px 0;
  }
  .main-img {
    height: 560px;
    right: 7px;
  }
  .round-4 {
    top: 92px;
    right: -3px;
  }
  .main-fig-1 {
    bottom: 366px;
    right: -16px;
    height: 270px;
  }
  .main-fig-1 {
    bottom: 327px;
    right: -31px;
    height: 299px;
  }
  .first-one {
    border-radius: 80px;
  }
}

@media screen and (max-width: 390px) {
  .round-6 {
    height: 50px;
    width: 50px;
    left: 271px;
    top: -27px;
  }
  .first-one {
    min-height: 377px;
    background-size: 87%;
  }
  .main-title {
    font-size: 34px;
    line-height: 50px;
    margin: 0;
  }
  .element-subtitle {
    font-size: 12px;
  }
  .main-h3 {
    font-size: 16px;
    padding: 2px;
  }
  .first-advice-block {
    height: 286px;
    background-size: 91%;
  }
  .first-advice-block-round-1 {
    width: 50px;
    height: 50px;
    top: 39px;
    right: 44px;
  }
}

@media screen and (max-width: 320px) {
  .first-advice-block-round-1 {
    width: 50px;
    height: 50px;
    top: 39px;
    right: 44px;
  }
  .main-title {
    font-size: 31px;
  }
  .first-one {
    min-height: 303px;
    background-size: 85%;
  }
  .main-h3 {
    font-size: 16px;
    padding: 6px;
    font-family: 'Pattaya', sans-serif;
  }
  .first-advice-block {
    height: 265px;
    background-size: 85%;
  }
  .round-6 {
    height: 50px;
    width: 50px;
    left: 241px;
    top: -15px;
  }
}
</style>
