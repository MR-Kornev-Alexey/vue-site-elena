<template>
  <div>
   <WebinarHeader/>
   <v-row  class="justify-center mt-6">
      <v-col
        cols="11"
        md="6"
        >
        <h3 class="text-center pb-4">
          Вас приветствует Web-приложение, готовое помочь в развитии Вашего ребенка.
        </h3>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="11"
        md="6"
        v-for="(item,key) in dataFromApi" :key="key"
      >
        <v-btn class="btn-dream-next mx-auto" @click="choiceWebinar(item.link)">
           {{item.label}}
        </v-btn>
      </v-col>
    </v-row>
    <popUpVideo :visible="showVideo" :inLink="linkVideo" :inTitle="titleVideo" videoId="videoId"/>
  </div>
</template>

<script>
import WebinarHeader from './WebinarHeader'
import popUpVideo from '../chatBotDream/popUp/popUpVideo'

export default {
  name: 'v-main-page-webinar-intro',
  components: {
    WebinarHeader,
    popUpVideo
  },
  computed: {
    dataFromApi () {
      return this.$store.state.allTest.dataWebinar
    }
  },
  methods: {
    choiceWebinar (data) {
      this.showVideo = !this.showVideo
      this.linkVideo = 'https://www.youtube.com/embed/' + data + '?rel=0'
    }
  },
  data: () => ({
    startIntro: true,
    showVideo: false,
    linkVideo: null,
    titleVideo: 'Вебинар'
  })
}
</script>
