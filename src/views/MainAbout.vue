<template>
  <div id="mainAdvice" class="pt-4">
    <v-row class="d-flex justify-center">
      <v-col cols="11" md="4"
             class="first-about-block"
      >
        <div class="first-about-round-1"/>
        <div class="first-about-round-2"/>
      </v-col>
      <v-col cols="11" md="6" class="first-right-block">
        <div class="d-flex align-self-center" style="flex-direction: column">
          <h4 class="p-sub">
            Я рада приветствовать вас на своей странице профиля. Меня зовут Корнева Елена Викторовна, и я являюсь мамой
            трех успешных
            сыновей, высококвалифицированным врачом-педиатром с дипломом MBA и сертифицированным экспертом по
            современным
            методам развития мозга, получившим свой сертификат в Массачусетском университете.
          </h4>
          <h4 class="p-sub">
            Сегодня я также продолжаю свое образование в области семейной психологии, чтобы еще более полно и глубоко
            понимать потребности родителей и детей в вопросах развития и воспитания.
          </h4>
          <h4 class="p-sub">
            Мои методы основаны на научных исследованиях и личном опыте работы с тысячами детей и их родителей. Я верю,
            что каждый ребенок уникален и заслуживает индивидуального подхода, чтобы раскрыть свой потенциал и достичь
            успеха.
          </h4>
          <h4 class="p-sub">
            Я также разработала уникальные приложения и чат-боты, которые помогают родителям отслеживать развитие своих
            детей и получать рекомендации по уходу и развитию.
          </h4>
          <h4 class="p-sub">
            Присоединяйтесь к моим более чем 500 000 подписчикам в социальных сетях, чтобы получать эксклюзивный контент
            и
            советы по развитию детей от рождения до трех лет. Я всегда готова помочь вам и вашему ребенку, чтобы вы
            достигли наилучших результатов!</h4>
        </div>
      </v-col>
    </v-row>
    <v-row class="row-badge d-flex justify-center text-center">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Чем я могу помочь?</h2>
      </v-col>

    </v-row>
    <v-row class="d-flex justify-center row-help">
      <v-col cols="11" md="8">
        <h4 class="p-sub">
          Как специалист, я понимаю, что родители часто сталкиваются с недостатком информации, страхами и сомнениями в
          своих способностях воспитывать и ухаживать за своим малышом. Поэтому моя задача - помочь Вам в решении этих
          проблем.
        </h4>
        <h4 class="p-sub">
          <strong>
            <svg-icon type="mdi" :path="path"></svg-icon>
            Комфортное материнство</strong> - это важная составляющая воспитания здорового ребенка. Как мама, Вы знаете,
          что бывают моменты, когда чувства, эмоции и физические нагрузки могут стать препятствием для комфортного
          материнства. Я могу помочь Вам управлять своими эмоциями и найти решения для облегчения физических нагрузок,
          чтобы Вы могли наслаждаться своим материнством на все 100%.
        </h4>
        <h4 class="p-sub">
          <strong>
            <svg-icon type="mdi" :path="baby"></svg-icon>
            Здоровье малыша</strong> - это еще один ключевой аспект родительства. Как специалист, я помогу Вам следить
          за здоровьем
          малыша и объясню, какие симптомы следует обращать внимание и когда стоит обращаться за медицинской помощью. Я
          также могу дать рекомендации по питанию, гигиене и режиму дня, чтобы помочь малышу расти здоровым и
          счастливым.
        </h4>
        <h4 class="p-sub">
          <strong>
            <svg-icon type="mdi" :path="school"></svg-icon>
            Умный ребенок </strong> это желание каждого родителя. Я готова помочь составить индивидуальный план развития
          ребенка,
          который учитывает его природные качества, особенности семьи и общественную среду, в которой он растет. Этот
          план будет включать в себя рекомендации по развитию когнитивных и социально-эмоциональных навыков, а также по
          подготовке ребенка к школе.
        </h4>
        <h4 class="p-sub">
          В целом, моя цель - помочь Вам стать уверенными и успешными родителями, которые могут обеспечить своим малышам
          гармоничное и здоровое развитие. Я готова предоставить Вам необходимые знания и поддержку на каждом этапе
          родительства, чтобы Вы могли принимать обоснованные решения, повышать свою компетентность и наслаждаться
          процессом воспитания своих детей. Не стесняйтесь обращаться ко мне за помощью и советами - я всегда готова
          поделиться своим опытом и знаниями, чтобы помочь Вам достичь успеха в родительстве.
        </h4>
      </v-col>
    </v-row>
    <v-row class="row-blue d-flex justify-center text-center">
      <v-col
        cols="11" md="8"
      >
        <h2 class="h2-title">Мои университеты</h2>
      </v-col>

    </v-row>
    <v-row class="row-light d-flex justify-center text-center py-4">
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left education">
          <h2 class="h2-title">Образование</h2>
          <p class="p-sub">
            Хабаровский Государственный Медицинский институт (факультет педиатрии, 1991)
          </p>
          <p class="p-sub">
            Мастер делового администрирования (МВА) (г. Москва, 2011)
          </p>
          <p class="p-sub">
            Повышение квалификации по педиатрии (г. Санкт-Петербург, 2021)
          </p>
          <p class="p-sub">
            "Семейный психолог" (г. Москва, 2023)
          </p>
        </div>
      </v-col>
      <v-col
        cols="11" md="5"
        class="d-flex justify-center"
      >
        <div class="text-left education">
          <h2 class="h2-title">Дипломы</h2>
          <p class="p-sub">
            Диплом самейного психолога. Выдан АНО ДПО "НАДПО" (г. Москва, 2023)

          </p>
          <p class="p-sub">
            Диплом о профессиональной переподготовке (педиатрия). Выдан АНО ДПО "Университет повышения квалификации и
            профессиональной переподготовки" (г. Санкт-Петербург, 2021).
          </p>
          <p class="p-sub">
            Сертификат ВОЗ. "Диагностика, лечение и профилактика заболеваний органов дыхания детского возраста" ( 2020)
          </p>
          <p class="p-sub">
            Диплом MBA (МГУ, г. Москва , 2011)
          </p>
          <p class="p-sub">
            Диплом врача - педиатра (ХГМУ, Хабаровск, 1991)
          </p>
        </div>
      </v-col>

    </v-row>
    <v-row class="d-flex justify-center pb-4">
      <v-col cols="11" md="10" class="d-flex justify-center text-center">
        <v-carousel hide-delimiters >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMotherNurse, mdiBaby, mdiSchoolOutline } from '@mdi/js'

export default {
  name: 'v-mainAdvice',
  components: {
    SvgIcon,
    Footer
  },
  data () {
    return {
      path: mdiMotherNurse,
      baby: mdiBaby,
      school: mdiSchoolOutline,
      items: [
        {
          src: require('@/assets/img/diploma/diplom_4.png')
        },
        {
          src: require('@/assets/img/diploma/diplom_3.png')
        },
        {
          src: require('@/assets/img/diploma/diplom_6.png')
        },
        {
          src: require('@/assets/img/diploma/diplom_5.png')
        },
        {
          src: require('@/assets/img/diploma/diplom_1.png')
        },
        {
          src: require('@/assets/img/diploma/diplom_2.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#mainAdvice {
  background-color: #EFF7FF;
  color: #2F3550;
}
.v-window {
  height: 860px !important;
}
.first-about-block {
  min-height: 560px;
  background-image: url('@/assets/img/lena-profile-gray.png');
  background-position: center bottom;
  background-size: 70%;
  position: relative;
}

.row-help {
  min-height: 560px;
  background-image: url('@/assets/img/shadow-10.png');
  background-position: right bottom;
  background-size: 50%;
  position: relative;
  background-color: #ffc5ac;
}

.p-sub {
  font-size: 18px;
  padding: 6px 16px;
}

.row-blue {
  background-color: #3d498c;
  .h2-title {
    color: white;
  }
}

.row-light {
  background-color: #8cb4fc;
}
.first-about-round-1 {
  height: 90px;
  width: 90px;
  z-index: 20;
  bottom: -9px;
  left: 76px;
  background-color: #3d498c;
  position: absolute;
  border-radius: 50%;
}

.first-about-round-2 {
  height: 70px;
  width: 70px;
  top: 32px;
  left: 82px;
  z-index: 20;
  background-color: #ff7835;
  position: absolute;
  border-radius: 50%;
}

.first-right-block {
  position: relative;
  overflow: hidden;
  background-image: url('@/assets/img/figure-1.png');
  background-position: right;
  background-size: 40%;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1600px) {
  .v-window {
    height: 1000px !important;
  }
  .first-about-block {
    min-height: 560px;
    background-image: url('@/assets/img/lena-profile-gray.png');
    background-position: center bottom;
    background-size: 87%;
    position: relative;
  }
}

@media screen and (max-width: 1280px) {
  .first-about-block {
    min-height: 560px;
    background-image: url('@/assets/img/lena-profile-gray.png');
    background-position: center center;
    background-size: 95%;
    position: relative;
  }
  .first-right-block {
    background-position: right;
    background-size: 66%;
  }
  .first-about-round-2 {
    height: 70px;
    width: 70px;
    top: 14px;
    left: 25px;
  }
  .p-sub {
    font-size: 16px;
    padding: 6px 10px;
  }
}

@media screen and (max-width: 1024px) {
  .v-window {
    height: 586px !important;
  }
  .p-sub {
    font-size: 14px;
    padding: 4px 10px;
  }
  .first-about-block {
    min-height: 440px;
    background-position: center center;
    background-size: 95%;
    position: relative;
  }
}
@media screen and (max-width: 1024px) {
  .first-about-block {
    min-height: 843px;
    background-position: center center;
    background-size: 95%;
    position: relative;
  }
}

@media screen and (max-width: 768px) {
  .v-window {
    height: 660px !important;
  }
  .v-btn--icon.v-btn--density-default {
    width: calc(var(--v-btn-height) - 6px) !important;
    height: calc(var(--v-btn-height) - 6px) !important;
    color: #2F3550;
  }
  .p-sub {
    font-size: 14px;
    padding: 4px 10px;
  }
  .first-about-block {
    min-height: 694px;
    background-position: center bottom;
    background-size: 80%;
    position: relative;
  }
  .first-right-block {
    padding: 20px 8px;
    background-position: right;
    background-size: 33%;
  }
  .education {
    width: 90%;
  }
}

@media screen and (max-width: 600px) {
  .v-window {
    height: 400px !important;
  }
  .first-about-block {
    min-height: 554px;
    background-position: center bottom;
    background-size: 80%;
    position: relative;
  }
}

@media screen and (max-width: 480px) {
  .v-window {
    height: 250px !important;
  }
  .first-about-block {
    min-height: 444px;
    background-position: center bottom;
    background-size: 80%;
    position: relative;
  }
  .first-about-round-1 {
    height: 90px;
    width: 90px;
    bottom: -9px;
    left: 18px;
  }
  .first-right-block {
    padding: 20px 8px;
    background-position: right;
    background-size: 52%;
  }
}

@media screen and (max-width: 390px) {
  .v-window {
    height: 190px !important;
  }
  .h2-title {
    padding: 10px 0;
  }
  .first-about-block {
    min-height: 368px;
    background-position: center bottom;
    background-size: 80%;
    position: relative;
  }
  .first-about-round-1 {
    height: 90px;
    width: 90px;
    bottom: -9px;
    left: 18px;
  }
  .first-right-block {
    padding: 20px 8px;
    background-position: right;
    background-size: 52%;
  }
  .p-sub {
    font-size: 13px;
    padding: 4px 6px;
  }
}

@media screen and (max-width: 320px) {
  .v-window {
    height: 170px !important;
  }
  .h2-title {
    padding: 10px 0;
  }
  .first-about-block {
    min-height: 300px;
    background-position: center bottom;
    background-size: 80%;
    position: relative;
  }
  .first-about-round-1 {
    height: 70px;
    width: 70px;
    bottom: -9px;
    left: 18px;
  }
  .first-about-round-2 {
    height: 50px;
    width: 50px;
    top: 14px;
    left: 25px;
  }
  .first-right-block {
    padding: 20px 8px;
    background-position: right;
    background-size: 52%;
  }
}
</style>
