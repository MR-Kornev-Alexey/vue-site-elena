<template>
  <v-row class="row-courses-third d-flex justify-center text-center " style="overflow: hidden">
    <v-col
      cols="12"
      md="4"
      class="first-block-third row-common d-flex justify-center">
    <img  :src="require('@/assets/img/arrows/arrow-1.png')"
          alt="arrows" class="arrow-course">
    >
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="d-flex"
    >
      <div class="title-course-block align-self-center margin-16">
        <h3 class="h3-course-card">
          Развитие детей от 1 года  до 3 лет
        </h3>
        <div class="course-card-description text-left">
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс предлагает индивидуальный подход к развитию ребенка, что приводит к более эффективным результатам
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс помогает улучшить речевое развитие ребенка и развивать навыки общения и словарный запас
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс помогает родителям управлять эмоциями и истериками ребенка, с помощью советов и рекомендаций
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс предлагает адаптивную программу до 3 лет, что помогает родителям проводить более качественно время с
            ребенком и облегчает процесс развития
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Ежедневная расссылка домашних заданий от 1 года до 2 лет при покупке полного курса
          </p>
        </div>
        <v-row class="d-flex justify-space-around text-center pb--12" style="margin: auto">
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center"
          >
            <a href="http://elenakorneva.ru/more_one_year" target="_blank">
              <v-btn class="btn-pay">
                Подробнее
              </v-btn></a>
          </v-col>
        </v-row>
        <div class="third-block-round-1"/>
    </div>
    </v-col>

  </v-row>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheckboxMarkedOutline } from '@mdi/js'
export default {
  name: 'course-third-block',
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
.margin-16 {
  margin-top: 0;
}
.row-courses-third {
  position: relative;
  margin-top: 0 !important;
  background-color: #EFF7FF;
}
.first-block-third {
  background-image: url("@/assets/img/course/for-courses-4.png");
}
.bg-img {
  background-image: url("@/assets/img/figure-3.png");
  background-position: center right;
  background-size: 60%;
}
.btn-green {
  width: 240px;
  background-color: #156434;
  color: white;
  border-radius: 16px;
  padding: 12px;
  -webkit-box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);
  -moz-box-shadow:6px 4px 1px -2px rgb(0 0 0 / 32%);
  box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);
  .v-btn__content{
    color: whitesmoke;
  }
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
.btn-two {
  padding: 0 12px;
}
.title-course-block {
 padding: 0 12px;
  h3 {
    text-transform: uppercase;
  }
}
.third-block-round-1 {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -24px;
  right: 146px;
  border-radius: 50%;
  background-color: #8672a4;
}
@media screen and (max-width: 1024px) {
  .first-block-round-1 {
    width: 80px;
    height: 80px;
    top: -37px;
    right: 44px;
  }
  .second-block-round-3 {
    width: 120px;
    height: 120px;
    position: absolute;
    bottom: -62px;
    left: -113px;
    border-radius: 50%;
    border: 4px solid #3d498c;
    z-index: 22;
  }
}
@media screen and (max-width: 768px) {
  .margin-16 {
    margin-top: 16px;
  }
  .first-block-round-1 {
    width: 80px;
    height: 80px;
    top: -37px;
    right: 148px;
  }
}
@media screen and (max-width: 480px) {
  .margin-16 {
    margin-top: 16px;
  }
  .third-block-round-1 {
    width: 80px;
    height: 80px;
    top: -24px;
    right: 39px;
  }
}

@media screen and (max-width: 390px) {
  .first-block {
    height: 324px;
  }
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
@media screen and (max-width: 320px) {
  .first-block {
    height: 280px;
  }
}

</style>
