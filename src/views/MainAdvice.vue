<template>
  <div id="mainAdvice" class="">
<!--    <v-row class="justify-center text-center">-->

<!--      <v-col-->
<!--        cols="10"-->
<!--        class="justify-center text-center first-main-advice">-->
<!--          <div class="main-advice-round-1"/>-->
<!--          <div class="main-advice-round-2"/>-->
<!--          <div class="main-advice-round-3"/>-->
<!--        <img src="">-->
<!--      </v-col>-->
<!--    </v-row>-->
    <v-row class="row-courses-advice d-flex justify-center text-center">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Онлайн консультация</h2>
        <h4 class="h4-sub">Это удобный и эффективный способ получить квалифицированную медицинскую помощь для вашего ребенка, не выходя из дома.</h4>
      </v-col>
    </v-row>
    <AdviceSecondBlock />
    <AdviceFirstBlock />
    <v-row class="row-badge d-flex justify-center text-center">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Стоимость консультации 6000 рублей</h2>
      </v-col>

    </v-row>
    <v-row class="d-flex row-badge justify-center text-center pb-6" >
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center"
      >
        <a href="https://wa.me/4917625187846?text=Заказ консультации" class="a-btn">
          <v-btn class="btn-pay">
            Заказать
          </v-btn>
        </a>
      </v-col>

    </v-row>
    <Footer />
  </div>
</template>

<script>
import AdviceFirstBlock from './blocks/AdviceFirstBlock'
import AdviceSecondBlock from './blocks/AdviceSecondBlock'
import Footer from './Footer'
export default {
  name: 'v-mainAdvice',
  components: {
    AdviceFirstBlock,
    AdviceSecondBlock,
    Footer
  }
}
</script>

<style lang="scss">
#mainAdvice {
  background-color: #EFF7FF;
}
.first-main-advice {
  min-height: 640px;
  background-image: url('@/assets/img/lena-front-new.png');
  background-position: bottom center;
  background-size: 46%;
  position: relative;
}
.row-badge{
 background-color: #ffc5ac;
}
.main-advice-img {
  position: absolute;
  z-index: 12;
  height: 694px;
  bottom: -10px;
  right: 514px;
}
.main-advice-round-1 {
  width: 130px;
  height: 130px;
  background-color: #3d498c;
  position: absolute;
  bottom: 14px;
  left: 217px;
  border-radius: 50%;
}
.main-advice-round-2 {
  width: 100px;
  height: 100px;
  background-color: #FFEAB1 ;
  position: absolute;
  bottom: 14px;
  right: 217px;
  border-radius: 50%;
}
.main-advice-round-3 {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 19px;
  right: 396px;
  border-radius: 50%;
  border: 4px solid #ff7835;
}
@media screen and (max-width: 1600px) {
  .main-advice-img {
    bottom: -10px;
    right: 446px;
  }
  .main-advice-round-2 {
    bottom: 41px;
    right: 252px;
  }
  .main-advice-round-1 {
    z-index: 20;
    bottom: 14px;
    left: 217px;
  }
}
@media screen and (max-width: 1600px) {
  .first-main-advice {
    min-height: 544px;
    background-position: bottom center;
    background-size: 47%;
  }
}
@media screen and (max-width: 1280px) {
  .first-main-advice {
    min-height: 540px;
    background-position: bottom center;
    background-size: 57%;
  }
  .main-advice-img {
    height: 576px;
    bottom: -10px;
    right: 369px;
  }
  .main-advice-round-3 {
    top: 19px;
    right: 205px;
  }
  .main-advice-round-1 {
    z-index: 20;
    bottom: -7px;
    left: 128px;
  }
  .main-advice-round-2 {
    bottom: 348px;
    right: 302px;
  }
}
@media screen and (max-width: 1024px) {
  .first-main-advice {
    min-height: 466px;
    background-size: 62%;
  }
  .main-advice-img {
    height: 576px;
    bottom: -10px;
    right: 369px;
  }
  .main-advice-img {
    height: 473px;
    bottom: -10px;
    right: 282px;
  }
  .main-advice-round-1 {
    z-index: 20;
    bottom: -7px;
    left: 16px;
  }
  .main-advice-round-2 {
    bottom: 135px;
    right: 126px;
  }
  .main-advice-round-3 {
    top: 1px;
    right: 115px;
  }
}
@media screen and (max-width: 768px) {
  .first-main-advice {
    min-height: 519px;
    background-size: 90%;
  }
  .main-advice-img {
    height: 446px;
    bottom: -10px;
    right: 176px;
  }
  .main-advice-round-1 {
    z-index: 5;
    bottom: -20px;
    left: -22px;
  }
  .main-advice-round-3 {
    top: 4px;
    right: 7px;
  }
  .main-advice-round-2 {
    height: 70px;
    width: 70px;
    bottom: 332px;
    right: 82px;
  }
  .first-advice-block {
    height: 500px;
    background-position: center center;
    background-size: 84%;
    position: relative;
  }
}
@media screen and (max-width: 600px) {
  .first-main-advice {
    min-height: 466px;
    background-size: 90%;
  }
  .main-advice-img {
    height: 446px;
    bottom: -10px;
    right: 176px;
  }
  .main-advice-round-1 {
    height: 100px;
    width: 100px;
    z-index: 5;
    bottom: -20px;
    left: -22px;
  }
  .main-advice-round-3 {
    height: 90px;
    width: 90px;
    top: 4px;
    right: 7px;
  }
  .main-advice-round-2 {
    height: 70px;
    width: 70px;
    bottom: 332px;
    right: 82px;
  }
  .first-advice-block {
    height: 500px;
    background-position: center center;
    background-size: 84%;
    position: relative;
  }
}
@media screen and (max-width: 480px) {
  .first-main-advice {
    min-height: 366px;
    background-size: 100%;
  }
  .main-advice-img {
    height: 446px;
    bottom: -10px;
    right: 176px;
  }
  .main-advice-round-1 {
    height: 100px;
    width: 100px;
    z-index: 5;
    bottom: -20px;
    left: -22px;
  }
  .main-advice-round-3 {
    height: 90px;
    width: 90px;
    top: 4px;
    right: 7px;
  }
  .main-advice-round-2 {
    bottom: 258px;
    right: -20px;
  }
  .first-advice-block {
    height: 414px;
    background-size: 74%;
  }
}
@media screen and (max-width: 390px) {
  .first-main-advice {
    min-height: 280px;
    background-size: 100%;
  }
  .main-advice-img {
    height: 446px;
    bottom: -10px;
    right: 176px;
  }
  .main-advice-round-1 {
    height: 100px;
    width: 100px;
    z-index: 5;
    bottom: -20px;
    left: -22px;
  }
  .main-advice-round-3 {
    height: 90px;
    width: 90px;
    top: 4px;
    right: 7px;
  }
  .main-advice-round-2 {
    bottom: 258px;
    right: -20px;
  }
  .first-advice-block {
    height: 414px;
    background-size: 74%;
  }
}
@media screen and (max-width: 320px) {
  .first-main-advice {
    min-height: 251px;
    background-size: 100%;
  }
  .main-advice-img {
    height: 446px;
    bottom: -10px;
    right: 176px;
  }
  .main-advice-round-1 {
    height: 70px;
    width: 70px;
    z-index: 5;
    bottom: -8px;
    left: 4px;
  }
  .main-advice-round-3 {
    height: 40px;
    width: 40px;
    top: 4px;
    right: 7px;
    border: 2px solid #ff7835;
  }
  .main-advice-round-2 {
    bottom: 159px;
    right: 13px;
  }
  .first-advice-block {
    height: 251px;
    background-size: 85%;
  }
}
</style>
