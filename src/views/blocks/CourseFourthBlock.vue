<template>
  <v-row class="row-courses-fourth d-flex justify-center text-center" >

    <v-col
      cols="12"
      md="6"
      class="d-flex item1"
      style="margin: 0; padding: 0"
    >
      <div class="title-course-second-block align-self-center  margin-16">
        <h3 class="h3-course-card">
          Эмоциональное развитие детей от 6 до 18 месяцев
      </h3>
        <div class="course-card-description text-left">
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс поможет родителям научиться понимать как свои эмоции, так и эмоции ребенка, а также развивать у
            малыша навыки саморегуляции
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Практические задания помогут родителям научиться контролировать свои эмоции, что снизит вероятность их
            передачи на ребенка
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс расскажет о том, как изменяeтся поведение ребенка в зависимости от возраста, что поможет родителям
            эффективно взаимодейтсовоть с крохой
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс поможет родителям разобраться в причинах поведенческих проблем, таких как кусание, дергание за
            волосы, несоблюдение запретов и другие, и научит эффективным способам их решения
          </p>
          <p>
            <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
            Курс поможет родителям построить более гармоничные отношения с ребенком, снизить уровень стресса и
            повысить качество жизни всей семьи
          </p>
        </div>
        <v-row class="d-flex justify-space-around text-center pb--12" style="margin: auto">
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center"
          >
            <a href="http://elenakorneva.ru/emo-lending" target="_blank">
              <v-btn class="btn-pay">
                Подробнее
              </v-btn></a>
          </v-col>
        </v-row>
        <div class="fourth-block-round-2"/>
        <div class="fourth-block-round-3"/>
    </div>
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="fourth-block row-common item2 justify-center d-flex"
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
  name: 'course-fourth-block',
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
.row-courses-fourth {
  background-color: #FFEAB1;
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
}
.fourth-block {
  background-image: url("@/assets/img/course/for-courses-8.png");
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
.fourth-block-round-2 {
  width: 100px;
  height: 100px;
  background-color: #b6d0ff;
  position: absolute;
  top: -23px;
  right: -210px;
  border-radius: 50%;
}
.fourth-block-round-3 {
  width: 110px;
  height: 110px;
  position: absolute;
  bottom: -120px;
  left: 26px;
  border-radius: 50%;
  border: 4px solid #ffc5ac;
  z-index: 22;
}

@media screen and (max-width: 1024px) {
  .fourth-block-round-2 {
    width: 100px;
    height: 100px;
    top: -55px;
    right: -364px;
  }
}
@media screen and (max-width: 768px) {
  .fourth-block-round-2 {
    width: 66px;
    height: 66px;
    top: -55px;
    right: 115px;
    z-index: 22;
  }
  .fourth-block-round-3 {
    width: 80px;
    height: 80px;
    bottom: 30px;
    left: 19px;
  }
}
@media screen and (max-width: 600px) {
  .fourth-block-round-2 {
    top: -81px;
    right: 56px;
  }
}
@media screen and (max-width: 480px) {
  .fourth-block-round-2 {
    width: 66px;
    height: 66px;
    top: -54px;
    right: 3px;
  }
  .fourth-block-round-3 {
    width: 80px;
    height: 80px;
    bottom: -81px;
    left: 19px;
  }
}
@media screen and (max-width: 390px) {
  .fourth-block {
    height: 324px;
  }
  .fourth-block-round-2 {
    width: 46px;
    height: 46px;
    top: -54px;
    right: 3px;
  }
}
@media screen and (max-width: 320px) {
  .fourth-block {
    height: 300px;
  }
  .fourth-block-round-2 {
    width: 46px;
    height: 46px;
    top: -49px;
    right: 3px;
  }
}
</style>
