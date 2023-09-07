<template>
  <v-row class="row-courses-second d-flex justify-center text-center ">

    <v-col
      cols="12"
      md="6"
      class="d-flex item1"
    >
      <div class="title-course-second-block align-self-center  margin-16">
        <h3 class="h3-course-card">
        Развитие детей от 0 до 12 месяцев
      </h3>
        <div class="course-card-description text-left">
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс предлагает индивидуальный подход к развитию ребенка, основанный на его фактическом возрасте, что
            позволяет достигать более эффективных результатов
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Web-приложение курса позволяет тестировать развитие ребенка каждый месяц и получать рекомендации на
            следующий месяц, что помогает отслеживать прогресс ребенка и адаптировать свои действия для наилучших
            результатов
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс предлагает программу на целый год самостоятельного развития, которая помогает родителям включиться в
            работу над развитием своего малыша
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс основан на физиологическом развитии ребенка - все упражнения сгруппированы по трем направлениям:
            физическое , речевое и эмоциональное развитие
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Ежедневная расссылка домашних заданий при покупке годового курса
          </p>
        </div>
        <v-row class="d-flex justify-space-around text-center pb--12" style="margin: auto">
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center"
          >
          <a href=" http://elenakorneva.ru/new_0_12" target="_blank">
              <v-btn class="btn-pay">
                Подробнее
              </v-btn></a>
          </v-col>
        </v-row>
        <div class="second-block-round-2"/>
        <div class="second-block-round-3"/>
    </div>
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="second-block-advice row-common item2 d-flex justify-center"
    >
      <img  :src="require('@/assets/img/arrows/arrow-3.png')"
            alt="arrows" class="arrow-course">
    </v-col>

  </v-row>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheckboxMarkedOutline } from '@mdi/js'
export default {
  name: 'course-first-block',
  components: {
    SvgIcon
  },
  data () {
    return {
      path: mdiCheckboxMarkedOutline,
      size: 18
    }
  }
}
</script>

<style lang="scss">
.row-courses-second {
  background-color: #b6d0ff;
  margin: 0 !important;
  padding: 0;
  position: relative;
  color: #2F3550;
}
.second-block-advice {
  background-image: url("@/assets/img/course/for-courses-9.png");
}
.btn-pay {
    width: 240px;
    background-color: #FF7835 ;
    border-radius: 16px;
    padding: 12px;
    -webkit-box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);
    -moz-box-shadow:6px 4px 1px -2px rgb(0 0 0 / 32%);
    box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);
    .v-btn__content{
      color: #0e0e0e;
    }
}
.second-block-round-2 {
  width: 100px;
  height: 100px;
  background-color: #d06fa1;
  position: absolute;
  top: -25px;
  right: -386px;
  border-radius: 50%;
}
.second-block-round-3 {
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: -120px;
  left: 26px;
  border-radius: 50%;
  border: 4px solid #3d498c;
  z-index: 22;
}

@media screen and (max-width: 1024px) {
  .second-block-round-2 {
    width: 100px;
    height: 100px;
    top: -55px;
    right: -364px;
  }
}
@media screen and (max-width: 768px) {
  .second-block-round-2 {
    width: 66px;
    height: 66px;
    top: -62px;
    right: 93px;
    z-index: 22;
  }
  .second-block-round-3 {
    width: 80px;
    height: 80px;
    bottom: 30px;
    left: 19px;
  }
}
@media screen and (max-width: 600px) {
  .second-block-round-2 {
    top: -81px;
    right: 56px;
  }
}
@media screen and (max-width: 480px) {
  .second-block-round-2 {
    width: 66px;
    height: 66px;
    top: -54px;
    right: 3px;
  }
  .second-block-round-3 {
    width: 80px;
    height: 80px;
    bottom: -81px;
    left: 19px;
  }
}
@media screen and (max-width: 390px) {
  .second-block {
    height: 324px;
  }
  .second-block-round-2 {
    width: 46px;
    height: 46px;
    top: -54px;
    right: 3px;
  }
}
@media screen and (max-width: 320px) {
  .second-block {
    height: 300px;
  }
  .second-block-round-2 {
    width: 46px;
    height: 46px;
    top: -49px;
    right: 3px;
  }
}
</style>
