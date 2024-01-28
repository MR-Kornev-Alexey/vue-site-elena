<template>
  <v-row class="row-first-courses d-flex justify-center text-center">
    <v-col
      cols="12"
      md="4"
      class="first-block row-common d-flex justify-center"
    >
      <img  :src="require('@/assets/img/arrows/arrow-1.png')"
           alt="arrows" class="arrow-course">
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="d-flex"
    >
      <div class="title-course-block align-self-center">
        <h3 class="h3-course-card">
          Чат-бот по сну
        </h3>
        <div class="course-card-description text-left">
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Чат-бот поможет Вам избавиться от недосыпа и вернуть здоровый сон всей семье
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Чат-бот содержит четыре основные методики самостоятельного засыпания, что позволит выбрать наиболее
            подходящую для конкретной ситуации и достичь быстрых результатов
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Чат-бот поможет решить многие распространенные проблемы со сном, такие как ранние пробуждения, бесконечные
            ночные кормления и т.д
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Чат-бот поможет избавиться от долгих укладываний и бесконечных укачиваний, что позволит освободить больше
            времени на свои дела и отдых
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Чат-бот не только помогает решить текущие проблемы со сном, но и обучает навыкам самостоятельного
            засыпания, которые будут полезны в будущем
          </p>
        </div>
        <v-row class="d-flex justify-space-around text-center pb--12" style="margin: auto">
          <v-col
            cols="12"
            md="auto"
            class="d-flex justify-center"
          >
            <a href="https://landing-dream.kornevgmbh.com/" target="_blank">
            <v-btn class="btn-pay">
              Подробнее
            </v-btn></a>
          </v-col>
        </v-row>
        <div class="first-block-round-1"/>
    </div>
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

.row-first-courses {
  background-color: #c8cac9;
  color: #2F3550;
}
p {
  padding: 0 !important;
  margin: 0 !important;
}
.margin-16 {
  margin-top: 0 !important;
}

.first-block {
  background-image: url("@/assets/img/course/for-courses-3.png");
}
.bg-img {
  background-image: url("@/assets/img/figure-3.png");
  background-position: center right;
  background-size: 60%;
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
.first-block-round-1 {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 31px;
  right: 126px;
  border-radius: 50%;
  background-color: #ff7835;
}
@media screen and (max-width: 1024px) {
  .first-block-round-1 {
    width: 80px;
    height: 80px;
    top: -37px;
    right: 44px;
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
@media screen and (max-width: 600px) {
  .margin-16 {
    margin-top: 16px;
  }
  .fifth-block-round-1 {
    width: 70px;
    height: 70px;
    top: -35px;
    right: 59px;
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
