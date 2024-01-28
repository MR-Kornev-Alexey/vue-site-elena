<template>
  <v-row class="row-advice d-flex justify-center text-center margin-16">
<!--    <v-col-->
<!--      cols="12"-->
<!--      md="4"-->
<!--      class="first-advice-block mb-3"-->
<!--      style="padding-bottom: 0 !important;"-->
<!--    >-->
<!--      <div class="first-advice-block-round-1"/>-->
<!--    </v-col>-->
    <v-col
      cols="12"
      md="6"
      class="d-flex mb-3"
      style="padding-bottom: 0 !important;"
    >
      <div class="title-course-second-block align-self-center margin-16">
        <h3>
          В стоимость онлайн консультации входит:
        </h3>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="path"></svg-icon>
              Предварительный анализ документов</strong>
          </div>
          <p class="pl-6 text-left">
            Перед консультацией вы можете отправить мне все необходимые документы - результаты анализов, выписки из
            медицинских карт и т.д. - чтобы я могла ознакомиться с ними заранее и предоставить более квалифицированные
            рекомендации на консультации
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="chat"></svg-icon>
              Консультация в формате видеочата </strong>
          </div>
          <p class="pl-6 text-left">
            Консультация проводится в режиме видеочата через Zoom.
            Длительность консультации составляет до 90 минут, что позволяет мне внимательно выслушать вас,
            задать необходимые вопросы и дать подробные рекомендации по волнующим вас вопросам
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="edit"></svg-icon>
              Выдача рекомендаций по итогам консультации</strong>
          </div>
          <p class="pl-6 text-left">
            По итогам консультации выдаются  вам рекомендации, основанные на проведенном анализе и обсуждении с
            вами проблемы. Это могут быть рекомендации по развитию ребенка, вашим действиям по уреплению здоровья, как физического , так и эмоционального
          </p>
        </div>

        <v-row class="d-flex justify-space-around text-center pb--12" style="margin: auto">
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center"
          >
            <a href="https://wa.me/4917625187846?text=Заказ консультации" class="a-btn"><v-btn class="btn-pay">
              Заказать
            </v-btn>
            </a>
          </v-col>

        </v-row>

      </div>
    </v-col>

  </v-row>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFileDocumentMultipleOutline, mdiLaptopAccount, mdiFileDocumentEditOutline } from '@mdi/js'

export default {
  name: 'advice-first-advice-block',
  components: {
    SvgIcon
  },
  data () {
    return {
      path: mdiFileDocumentMultipleOutline,
      chat: mdiLaptopAccount,
      edit: mdiFileDocumentEditOutline
    }
  }
}
</script>

<style lang="scss">
.a-btn {
  text-decoration: none;
}
.row-advice {
  background-color: #b6d0ff;
}

.margin-16 {
  margin-top: 0;
}

.first-advice-block {
  height: 500px;
  background-image: url("@/assets/img/course/for-courses-11.png");
  background-position: center left;
  background-size: 100%;
  position: relative;
}

.bg-img {
  background-image: url("@/assets/img/figure-3.png");
  background-position: center right;
  background-size: 60%;
}

.btn-pay {
  width: 240px;
  background-color: #FF7835;
  border-radius: 16px;
  padding: 12px;
  -webkit-box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);
  -moz-box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);
  box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);

  .v-btn__content {
    color: #0e0e0e;
  }
}

.btn-two {
  padding: 0 12px;
}

.title-advice-block {
  color: #2F3550;

  ul {
    list-style-type: none;
  }

  padding: 0 12px;

  .h4-title {
    text-transform: uppercase;
  }
}

.first-advice-block-round-1 {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 41px;
  right: -6px;
  border-radius: 50%;
  background-color: #ff7835;
}

@media screen and (max-width: 1024px) {
  .title-advice-block {
    font-size: 15px;
    padding: 0 12px;

    h3 {
      text-transform: uppercase;
    }
  }
  .first-advice-block-round-1 {
    width: 80px;
    height: 80px;
    top: 39px;
    right: 44px;
  }
}

@media screen and (max-width: 768px) {
  .margin-16 {
    margin-top: 16px;
  }
  .adv-block-round-new1 {
    width: 80px;
    height: 80px;
    background-color: #d06fa1;
    position: absolute;
    top: -66px;
    right: 0px;
    border-radius: 50%;
    z-index: 22;
  }
  .adv-block-round-new2 {
    bottom: -25px;
    left: 31px;
  }
}

@media screen and (max-width: 390px) {
  .first-advice-block {
    height: 370px;
    background-size: 78%;
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
  .first-advice-block {
    height: 280px;
  }
}

</style>
