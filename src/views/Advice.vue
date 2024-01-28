<template>
  <div id="advice" >
    <v-row class="justify-center text-center" style="margin-top: 0 !important">
      <v-col
        cols="12"
        md="4"
        class="justify-center text-center"
        style="padding-top: 0 !important"
      >
        <div class="first-advice">
          <div class="round-advice-main"/>
          <img
            :src="require('@/assets/img/lena-front.png')"
            class="front-img"
          >
          <div class="advice-round-1"/>
<!--          <div class="advice-round-2"/>-->
          <div class="advice-round-3"/>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="8"
        class="justify-center text-center d-flex "
        style="padding-top: 0 !important"
      >
        <div class="main-right-advice d-flex justify-center">
          <div class="title-advice-block align-self-center margin-16 text-center d-flex" style="flex-direction: column">
            <h2 class="h2-title-home ">Онлайн консультация</h2>
            <div class="advice-size-main-page">
              <p>
                <svg-icon type="mdi" :path="check" :size="20"></svg-icon>
                Вы получите экспертные советы от профессионала с более чем 30 - летним опытом развитии детей.
                Это поможет вам понять, как правильно развивать ребенка и предотвратить проблемы в будущем
              </p>
              <p>
                <svg-icon type="mdi" :path="check" :size="20"></svg-icon>
                Если у вас возникли медицинские проблемы с вашим ребенком, которые вы не понимаете, то вы
                получите помощь от опытного педиатра и семейного психолога. Это даст вам четкий план действий, что делать дальше
              </p>
              <p>
                <svg-icon type="mdi" :path="check" :size="20"></svg-icon>
                Онлайн консультация безопасна для вас и вашего ребенка, особенно во время пандемий.
                Вы получите помощь, не выходя из дома, избежав контакт с другими людьми и снизите риск заболевания
              </p>
              <p>
                <svg-icon type="mdi" :path="check" :size="20"></svg-icon>
                Онлайн консультация экономит  время и деньги, поскольку не тратится время на поездки и нет оплаты за дорогостоящие консультации в офисе специалиста
              </p>
              <p>
                <svg-icon type="mdi" :path="check" :size="20"></svg-icon>
                Онлайн консультация доступна всем родителям, независимо от места жительства.
                Это позволяет получать помощь и знания всем, кто заинтересован в здоровье и  развитии своего малыша
              </p>
            </div>
            <div class="my-4">
              <a href="/advice" class="a-btn"><v-btn class="btn-advice mt-4">
                Подробнее
              </v-btn></a>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheckCircleOutline } from '@mdi/js'

export default {
  name: 'v-advice',
  components: {
    SvgIcon
  },
  data () {
    return {
      content: '',
      check: mdiCheckCircleOutline
    }
  }
}
</script>

<style lang="scss">
#advice {
  background-color: #ffc5ac;
  margin: 0!important;
  padding: 0!important;
}
.advice-size-main-page {
  font-size: 18px;
  text-align: left;
  padding: 8px;
}

.btn-advice {
  width: 240px;
  background-color: #304672;
  border-radius: 16px;
  padding: 12px 24px;

  .v-btn__content {
    color: white;
  }
}
.btn-tariff {
  width: 200px;
  background-color: #4464a3;
  border-radius: 16px;
  padding: 12px 24px;

  .v-btn__content {
    color: white;
  }
}

.advice-round-2 {
  width: 160px;
  height: 160px;
  background-color: #8672a4;
  position: absolute;
  bottom: -26px;
  left: -42px;
  z-index: 22;
  border-radius: 50%;
}

.advice-round-1 {
  width: 70px;
  height: 70px;
  background-color: #d06fa1;
  position: absolute;
  top: 135px;
  right: 9px;
  z-index: 21;
  border-radius: 50%;
}

.advice-round-3 {
  width: 100px;
  height: 100px;
  background-color: #ff7835;
  position: absolute;
  top: 28px;
  left: 23px;
  z-index: 21;
  border-radius: 50%;
}

.first-advice {
  min-height: 500px;
  position: relative;
  overflow: hidden;
}

.round-advice-main {
  width: 560px;
  height: 560px;
  background-color: #4464a3;
  position: absolute;
  left: -132px;
  bottom: -107px;
  border-radius: 50%;
}

.front-img {
  height: 500px;
  position: absolute;
  bottom: -10px;
  left: 53px;
  transform: scaleX(-1);
}

.right-img {
  height: 700px;
  position: absolute;
  bottom: -100px;
  right: 0;
  z-index: 20;
}

.main-right-advice {
  position: relative;
  overflow: hidden;
  background-image: url("@/assets/img/figure-2.png");
  background-position: right;
  background-size: 60%;
}

.advice-description {
  margin-top: 20px;
  padding: 12px 20px;
  z-index: 22;

  p {
    padding: 20px;
    z-index: 22;
  }
}

@media screen and (max-width: 1600px) {
  .round-advice-main {
    width: 500px;
    height: 500px;
    left: -83px;
    bottom: -67px;
  }
  .advice-size-main-page {
    font-size: 16px;
    text-align: left;
    padding: 8px;
  }
}

@media screen and (max-width: 1280px) {
  .first-advice {
    min-height: 540px;
  }
  .round-advice-main {
    width: 460px;
    height: 460px;
    left: -64px;
    bottom: -73px;
  }
  .front-img {
    height: 500px;
    bottom: -10px;
    left: 22px;
  }
  .right-img {
    height: 600px;
    bottom: -50px;
    right: -94px;
  }
}

@media screen and (max-width: 1024px) {
  .main-right-advice {
    position: relative;
    overflow: hidden;
    background-image: url("@/assets/img/figure-2.png");
    background-position: right;
    background-size: 70%;
  }
  .advice-size-main-page {
    font-size: 14px;
    text-align: left;
    padding: 8px;
  }
  .advice-round-3 {
    top: -35px;
    left: -8px;
    z-index: 21;
  }
  .round-advice-main {
    left: -150px;
    bottom: -73px;
  }
  .front-img {
    height: 459px;
    bottom: -10px;
    left: -24px;
  }
  .advice-description {
    font-size: 14px;
    padding: 2px 10px;
    margin-left: 20px;
  }
  .right-img {
    height: 600px;
    bottom: -50px;
    right: -170px;
  }
}

@media screen and (max-width: 768px) {
  .advice-description {
    padding-bottom: 20px;
  }
  .round-advice-main {
    width: 520px;
    height: 520px;
    left: 92px;
    bottom: -73px;
  }
  .advice-round-2 {
    bottom: -30px;
    left: -22px;
  }
  .advice-round-1 {
    width: 90px;
    height: 90px;
    top: 46px;
    right: 64px;
  }
  .right-img {
    height: 600px;
    bottom: -50px;
    right: -170px;
  }
  .front-img {
    height: 490px;
    left: 187px;
  }
  .main-right-advice {
    position: relative;
    overflow: hidden;
    background-image: url("@/assets/img/figure-2.png");
    background-position: right;
    background-size: 40%;
  }
}

@media screen and (max-width: 600px) {
  .round-advice-main {
    left: 24px;
    bottom: -97px;
  }
  .advice-round-2 {
    bottom: -58px;
    left: -39px;
  }
  .advice-round-1 {
    top: 9px;
    right: 29px;
  }
  .right-img {
    height: 490px;
    left: 87px;
  }
  .front-img {
    height: 490px;
    bottom: -10px;
    left: 87px;
  }
}

@media screen and (max-width: 480px) {
  .round-advice-main {
    left: -35px;
    bottom: -94px;
  }
  .advice-round-1 {
    display: none;
    top: 9px;
    right: 2px;
  }
  .front-img {
    height: 490px;
    left: 56px;
  }
  .main-right-advice {
    background-size: 70%;
  }
}

@media screen and (max-width: 414px) {
  .round-advice-main {
    left: -35px;
    bottom: -94px;
  }
}
@media screen and (max-width: 390px) {
  .round-advice-main {
    left: -86px;
    bottom: -94px;
  }
  .advice-round-1 {
    top: 91px;
    right: -53px;
  }
  .round-5 {
    top: -17px;
    left: 74px;
  }
  round-6 {
    left: 47px;
    top: 12px;
  }
  .front-img {
    left: 16px;
  }
}

@media screen and (max-width: 320px) {

  .round-advice-main {
    left: -86px;
    bottom: -94px;
  }
  .advice-round-1 {
    top: 34px;
    right: -60px;
  }
  .front-img {
    height: 447px;
    left: -9px;
  }
  .main-right-advice {
    background-size: 120%;
  }
}
</style>
