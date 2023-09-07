<template>
  <div>
   <DreamHeader/>
   <v-row  class="justify-center mt-6">
      <v-col
        cols="11"
        md="6"
        >
        <h3 class="text-center pb-4">
          Вас приветствует Web-приложение, готовое помочь в решении Ваших проблем со сном ребенка.
        </h3>
        <p>
          Внимательно ознакомьтесь с данной инструкцией.
          Выберите одну из предложенных 4 методик для КРАТКОГО ознакомления. Если методика Вас заинтересовала, нажмите
          кнопку “Дальше” и, перейдя к подробному видео,
          ознакомьтесь с методикой. Для работы по этой методике нажмите кнопку “ Этапы работы” и начните работать.
          Если вы понимаете, что эта методика Вам не подходит, вернитесь на шаг назад через кнопку ”Назад” и выберите
          другой вариант
        </p>
        <p>
          <b>Внимание!</b> Разделы по работе с дневными снами, ранними пробуждениями, пролонгацией дневных снов,
          ритуалами, ночными кормлениями
          и т.д. расположены в разделе "Этапы работы" в каждой из методик.
          Перед началом работы походите по вкладкам меню, для лучшей ориентации.
        </p>
      </v-col>

    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="11"
        md="6"
      >  <router-link to="/mainPageOfDream" class="nav-link">
        <v-btn class="btn-dream-next mx-auto">
           Старт
        </v-btn>
      </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DreamHeader from './DreamHeader'
export default {
  name: 'v-main-page-dream-intro',
  components: {
    DreamHeader
  },
  methods: {
    goToMethod (data) {
      this.$store.dispatch('newDream/SET_NUMBER_METHOD', data)
    }
  },
  data: () => ({
    startIntro: true
  })
}
</script>
