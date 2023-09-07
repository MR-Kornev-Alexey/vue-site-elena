<template>
  <v-row class="row-courses-sixth d-flex justify-center text-center">

    <v-col
      cols="12"
      md="6"
      class="d-flex item1"
    >
      <div class="title-course-second-block align-self-center  margin-16">
        <h3 class="h3-course-card">
       Срыгивание и рвота на первых месяцах жизни
      </h3>
        <div class="course-card-description text-left">
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс расскажет вам об особенностях возникновения различных срыгиваний у вашего ребенка, что поможет
            понять, что происходит с малышом и как правильно реагировать на срыгивания.
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс поможет избавиться от родительских страхов и сомнений, связанных с тем, что "с моим ребенком что-то
            не так".
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс научит грамотно действовать при срыгивании, что позволит убедиться в безопасности малыша и
            предотвратить возможные проблемы.
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс дает глубокое понимание механизма срыгивания, что поможет вам определить, когда следует обратиться за
            медицинской помощью и когда можно обойтись без нее.
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс поможет Вам протестировать ребенка и позволит эффективно применять полученные знания.
          </p>
        </div>
        <v-row class="d-flex justify-space-around text-center pb--12" style="margin: auto">
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center"
          >
            <a href="http://elenakorneva.ru/vimit-main-page" target="_blank">
              <v-btn class="btn-pay">
                Подробнее
              </v-btn></a>
          </v-col>
        </v-row>
        <div class="sixth-block-round-2"/>
        <div class="sixth-block-round-3"/>
    </div>
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="sixth-block row-common item2 d-flex justify-center"
    >
      <img  :src="require('@/assets/img/arrows/arrow-1.png')"
            alt="arrows" class="arrow-course">
    </v-col>

  </v-row>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheckboxMarkedOutline } from '@mdi/js'
export default {
  name: 'course-sixth-block',
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
.row-courses-sixth {
  background-color: #ffc5ac;
  margin: 0 !important;
  padding: 0;
  position: relative;
}
.sixth-block {
  background-image: url("@/assets/img/course/for-courses-6.png");
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
.sixth-block-round-2 {
  width: 100px;
  height: 100px;
  background-color: #3d498c;
  position: absolute;
  top: -20px;
  right: -177px;
  border-radius: 50%;
}
.sixth-block-round-3 {
  width: 110px;
  height: 110px;
  position: absolute;
  bottom: -69px;
  left: -59px;
  border-radius: 50%;
  border: 4px solid #ff7835;
  z-index: 22;
}

@media screen and (max-width: 1024px) {
  .sixth-block-round-2 {
    width: 100px;
    height: 100px;
    top: -60px;
    right: -95px;
  }
  .fourth-block-round-3 {
    width: 120px;
    height: 120px;
    position: absolute;
    bottom: -62px;
    left: -113px;
    border-radius: 50%;
    border: 4px solid #d06fa1;
    z-index: 22;
  }
}
@media screen and (max-width: 768px) {
  .pb--12{
    padding-bottom: 12px;
  }
  .sixth-block-round-2 {
    width: 86px;
    height: 86px;
    top: -86px;
    right: 98px;
    z-index: 22;
  }
  .sixth-block-round-3 {
    width: 80px;
    height: 80px;
    bottom: 30px;
    left: 19px;
  }
}
@media screen and (max-width: 600px) {
  .sixth-block-round-2 {
    top: -81px;
    right: 56px;
  }
}
@media screen and (max-width: 480px) {
  .sixth-block-round-2 {
    width: 66px;
    height: 66px;
    top: -54px;
    right: 3px;
  }
  .sixth-block-round-3 {
    width: 80px;
    height: 80px;
    bottom: -81px;
    left: 19px;
  }
}
@media screen and (max-width: 390px) {
  .sixth-block {
    height: 324px;
  }
  .sixth-block-round-2 {
    width: 46px;
    height: 46px;
    top: -54px;
    right: 3px;
  }
  .sixth-block-round-3 {
    width: 60px;
    height: 60px;
    bottom: -43px;
    left: -6px;
}
  .row-common {
    height: 266px;
    background-size: 90%;
  }
  p {
    font-size: 12px;
  }
}
@media screen and (max-width: 320px) {
p {
  font-size: 12px;
}
  .sixth-block {
    height: 300px;
  }
  .sixth-block-round-2 {
    width: 46px;
    height: 46px;
    top: -49px;
    right: 3px;
  }
  .sixth-block-round-3 {
    width: 60px;
    height: 60px;
    bottom: -43px;
    left: -6px;
  }
  .row-common {
    height: 227px;
    background-size: 90%;
  }
}
</style>
