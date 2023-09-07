<template>
  <v-row class="row-courses-second d-flex justify-center text-center">

    <v-col
      cols="12"
      md="6"
      class="d-flex item1"
    >
      <div class="title-course-second-block align-self-center  margin-16">
        <h3>
          Консультирую по следующим вопросам:
        </h3>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="path"></svg-icon>
              Атопический дерматит</strong>
          </div>
          <p class="pl-6 text-left">
            Проявляется в виде зуда, покраснения и сухости кожи. Разберем природу пояления АД, дам советы по
            уходу за кожей ребенка и рекомендации по выбору средств для уменьшения симптомов
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="path"></svg-icon>
              Проблемы ЖКТ в первые месяцы</strong>
          </div>
          <p class="pl-6 text-left">
            Молодых мамам, которые сталкиваются с рядом проблем в первые месяцы жизни ребенка,
            таких как колики, газы, запоры, дисбактериоз, лактазная недостаточность. Выдам рекомендации по дальнейшим
            действиям родителей
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="path"></svg-icon>
              Аллергический дерматит, аллергия, непереносимость БКМ</strong>
          </div>
          <p class="pl-6 text-left">
            Вопросы, связанные с аллергическими реакциями детского организма и проблемами при введении прикорма деткам,
            подверженным аллергией.
            Предоставлю рекомендации, которые помогут Вам действовать при введении новых продуктов
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="path"></svg-icon>
              Принятие материнства</strong>
          </div>
          <p class="pl-6 text-left">
            Помощь женщинам, готовящимся стать матерью и разбор по всем вопросах, связанных с этим периодом. Включает в
            себя физическое здоровье матери, питание, уход за собой и подготовку к родам
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="path"></svg-icon>
              Развитие ребенка </strong>
          </div>
          <p class="pl-6 text-left">
            Три направления развития: физическая активность, речевое и эмоциональное развитие. Тестирование ребенка и
            выдача рекомендаций согласно возрасту и степени развития ребенка.
          </p>
        </div>
        <v-row class="d-flex justify-space-around text-center pb--12" style="margin: auto">
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
        <div class="adv-block-round-new1"/>
        <div class="adv-block-round-new2"/>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="second-block-second item2"
    >
    </v-col>

  </v-row>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMedicationOutline } from '@mdi/js'

export default {
  name: 'advice-second-block',
  components: {
    SvgIcon
  },
  data () {
    return {
      path: mdiMedicationOutline
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
}

.second-block-second {
  height: 650px;
  background-image: url("@/assets/img/mother-online.png");
  background-position: center center;
  background-size: 86%;
  position: relative;
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

.adv-block-round-new1 {
  width: 80px;
  height: 80px;
  background-color: #d06fa1;
  position: absolute;
  top: 10px;
  right: -84px;
  border-radius: 50%;
  z-index: 22;
}

.adv-block-round-new2 {
  width: 110px;
  height: 110px;
  position: absolute;
  bottom: -31px;
  left: 26px;
  border-radius: 50%;
  border: 4px solid #3d498c;
  z-index: 22;
}

.advice-size {
  strong {
    font-size: 18px;
  }
  p {
    font-size: 16px;
  }
}
@media screen and (max-width: 1280px) {
  .advice-size {
    strong {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .advice-size {
    strong {
      font-size: 14px;
    }
    p {
      font-size: 13px;
    }
  }
  .adv-block-round-new2 {
    bottom: -47px;
    left: -18px;
  }
}

@media screen and (max-width: 768px) {
  .second-block-second {
    margin-top: 12px;
    height: 560px;
    background-size: 67%;
  }
  .item1 {
    order: 2; /* Порядок элемента при мобильной версии */
  }
  .item2 {
    order: 1; /* Порядок элемента при мобильной версии */
  }
  .adv-block-round-new1 {
    width: 80px;
    height: 80px;
    top: -96px;
    right: 67px;
  }
  .adv-block-round-new2 {
    bottom: -60px;
    left: 72px;
  }
}

@media screen and (max-width: 600px) {
  .second-block-second {
    margin-top: 12px;
    height: 440px;
    background-size: 67%;
  }
}

@media screen and (max-width: 480px) {
  .second-block-second {
    margin-top: 12px;
    height: 440px;
    background-size: 83%;
  }
  .adv-block-round-new2 {
    bottom: -80px;
    left: -1px;
  }
}

@media screen and (max-width: 390px) {
  .advice-size {
    padding: 0 10px;
    strong {
      font-size: 13px;
    }
    p {
      font-size: 12px;
    }
  }
  .h4-sub {
  font-size: 16px;
  }
  .second-block-second {
    margin-top: 12px;
    height: 395px;
    background-size: 89%;
  }
  .adv-block-round-new2 {
    width: 76px;
    height: 76px;
    bottom: -80px;
    left: -1px;
  }
}

@media screen and (max-width: 320px) {
  .second-block-second {
    margin-top: 12px;
    height: 313px;
    background-size: 89%;
  }
  .adv-block-round-new1 {
    width: 50px;
    height: 50px;
    top: -55px;
    right: 8px;
  }
  .first-advice-block-round-1 {
    width: 60px !important;
    height: 60px !important;
    top: 12px !important;
    right: 24px !important;
  }
}
</style>
