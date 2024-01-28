<template>
  <v-row class="row-courses-fifth d-flex justify-center text-center" style="overflow: hidden">
    <v-col
      cols="12"
      md="4"
      class="first-block-fifth row-common justify-center d-flex"
    >
      <img  :src="require('@/assets/img/arrows/arrow-4.png')"
            alt="arrows" class="arrow-course">
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="d-flex"
    >
      <div class="title-course-block align-self-center margin-16">
        <h3 class="h3-course-card">
       Тайна подгузника
      </h3>
        <div class="course-card-description text-left">
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс поможет родителям осознать, что проблемы ЖКТ у малыша - это нормальные физиологические процессы,
            свойственные данному возрасту
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс позволит родителям правильно ориентироваться в изменяющихся проблемах ЖКТ, а также принимать
            грамотные решения при изменении состояния ребенка
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс поможет избежать ненужных медикаментов и анализов, которые могут быть вредными для малыша.
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс предоставляет видеоролики, тексты, контрольные тесты и рекомендации по каждой теме, что позволяет
            удобно и эффективно усваивать информацию
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс предоставляет также гайд по пробиотикам и пребиотикам, помогающий выбрать лекарственные средства для
            малыша
          </p>
        </div>
        <v-row class="d-flex justify-space-around text-center pb--12" style="margin: auto">
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center"
          >
            <a href="https://diaper.kornevgmbh.com/" target="_blank">
              <v-btn class="btn-pay">
                Подробнее
              </v-btn></a>
          </v-col>
        </v-row>
        <div class="fifth-block-round-1"/>
    </div>
    </v-col>

  </v-row>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheckboxMarkedOutline } from '@mdi/js'
export default {
  name: 'course-fifth-block',
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
.row-courses-fifth {
  position: relative;
  margin-top: 0 !important;
  background-color: #EFF7FF;
}
.first-block-fifth {
  background-image: url("@/assets/img/course/for-courses-1.png");
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
.fifth-block-round-1 {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -24px;
  right: 146px;
  border-radius: 50%;
  background-color: #ff7835;
}
@media screen and (max-width: 1024px) {
  .fifth-block-round-1 {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -37px;
    right: 76px;
    border-radius: 50%;
    background-color: #ff7835;
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
  .fifth-block-round-1 {
    width: 80px;
    height: 80px;
    top: -35px;
    right: -14px;
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
