<template>
  <div class="pb-16">
    <SpeakHeader/>
    <v-row class="justify-center mt-6 text-center">
      <v-col
        cols="11"
        md="6"
      >
        <h4 class="text-center">
          Теория
        </h4>
        <p>
          как устроен и работает ваш малыш
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-6 text-left" v-if="fixDayVuex === 7 || fixDayVuex === 14 ||  fixDayVuex === 21 || fixDayVuex === 28 ">
      <v-col
        cols="11"
        md="6"
      >
        <p>
          Уважаемые участники, </p>
        <p>Cегодня мы не предоставляем теоретические ролики, но это не означает, что ваши возможности ограничены.
          Вместо этого, мы призываем вас воспользоваться доступными ресурсами, чтобы получить новые знания и углубить
          свои навыки. Вы можете обратиться к предыдущим видео, которые были представлены ранее, и пересмотреть их для
          восприятия и закрепления материала.
        </p>
        <p>Повторение является важным аспектом обучения, и это даст вам
          возможность освежить свою память и углубить понимание темы. Кроме того, вместо теоретических видео, мы
          предлагаем вам практические задания, которые вы можете выполнять с вашим малышом.
         </p>
         <p>Это великолепный
          способ применить полученные знания на практике и развить навыки вашего ребенка. Вы можете проводить уроки,
          задавать вопросы, поощрять творческий подход и прокачивать различные навыки
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center flex-column" v-for="(item, key) in dataCurrentDay " :key="key">
      <v-col
        class="mx-auto"
        cols="11"
        md="6"
      >
        <img class="img-video" :src="require('@/assets/img/video.png')" @click="openVideo(item)">
      </v-col>
    </v-row>
    <!--    {{dataCurrentDay}}-->
    <PopUpVideo :visible="show" :inLink="link"/>
    <SpeakFooter/>
  </div>
</template>

<script>
import SpeakHeader from './SpeakHeader'
import SpeakFooter from './SpeakFooter'
import PopUpVideo from '@/views/popUp/PopUpVideo'

export default {
  name: 'SpeakVideo',
  components: {
    SpeakHeader,
    SpeakFooter,
    PopUpVideo
  },
  computed: {
    dataCurrentDay () {
      return this.$store.state.speakCourse.dataOfSend.videoLink
    },
    fixDayVuex () {
      return this.$store.state.speakCourse.fixDay
    }
  },
  methods: {
    openVideo (video) {
      console.log(video)
      this.show = !this.show
      this.link = 'https://www.youtube.com/embed/' + video + '?rel=0'
    }
  },
  data: () => ({
    dataUseFromApi: [],
    show: false,
    link: ''
  })
}
</script>

<style lang="scss" scoped>
.all-screen {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  padding: 0;
}

.selector {
  flex: 1;
}
</style>
