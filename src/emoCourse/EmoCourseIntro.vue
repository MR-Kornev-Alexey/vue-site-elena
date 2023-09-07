<template>
  <div class="pb-16">
    <EmoHeader/>
    <v-row class="justify-center mt-6 text-center">
      <v-col
        cols="11"
        md="6"
      >
        <h3 class="text-center h3-emo" style="text-transform: uppercase">
          блок: {{emoDataFromApi[0].block}}
        </h3>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-6 text-center">
      <v-col
        cols="11"
        md="6"
      >
        <h4 class="text-center h3-emo">
         видео
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-6 text-center">
      <v-col
        cols="11"
        md="4"
        v-for="(item, key) in arrayVideo" :key="key"
      >
        <h4 class="text-center">
          {{item.title}} <br>
          {{item.subTitle}}
        </h4>
        <img class="img-video" :src="require('@/assets/img/emo/video.png')" @click="openVideo(item.videoId, item.subTitle)">
        <h5 class="text-center mt-1">
          ( длительность {{item.time}} минут )
        </h5>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-6 text-center" v-if="checkText" >
      <v-col
        cols="11"
        md="6"
      >
        <h4 class="text-center h3-emo">
          Инструкция
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-6 text-center">
      <v-col
        cols="11"
        md="6"
        v-for="(item, key) in arrayText" :key="key"
      >
        <h4 class="text-center">
          {{item.title}} : {{item.subTitle}}
        </h4>
        <div class="text-left" v-html="item.link">
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-6 text-center" v-if="checkPDF">
      <v-col
        cols="11"
        md="6"
      >
        <h4 class="text-center h3-emo">
         Памятки
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-6 text-center">
      <v-col
        cols="11"
        md="6"
        v-for="(item, key) in arrayPdf" :key="key"
      >
        <h4 class="text-center">
         {{item.title}}
        </h4>
        <a :href="item.link" target="_blank">
          <img class="img-guide" :src="require('@/assets/img/emo/guide.png')" >
        </a>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center pb-4" v-if="currenEmoDayNew === 37">
      <v-col
        cols="11"
        md="6"
      >
        <v-btn class="btn-dream-blue mx-auto" @click="reStartCourse()">
          Начать заново
        </v-btn>
      </v-col>
    </v-row>
<!--    {{emoDataFromApi}}-->
    <popUpVideo :visible="showVideo" :inLink="linkVideo" :inTitle="titleVideo" videoId="videoId"/>
     <EmoFooter/>
  </div>
</template>

<script>
import EmoHeader from './EmoHeader'
import EmoFooter from './EmoFooter'
import popUpVideo from '@/chatBotDream/popUp/popUpVideo.vue'

export default {
  name: 'v-main-page-dream-intro',
  components: {
    EmoHeader,
    EmoFooter,
    popUpVideo
  },
  computed: {
    checkText () {
      const dataFromApi = this.$store.state.emoCourse.dataFromApi

      if (Array.isArray(dataFromApi) && dataFromApi.length > 0) {
        return dataFromApi.some(function (item) {
          return item.attribute === 'text'
        })
      }
      return false
    },
    checkPDF () {
      const dataFromApi = this.$store.state.emoCourse.dataFromApi

      if (Array.isArray(dataFromApi) && dataFromApi.length > 0) {
        return dataFromApi.some(function (item) {
          return item.attribute === 'pdf'
        })
      }
      return false
    },
    arrayVideo () {
      return this.$store.state.emoCourse.dataFromApi.filter(function (item) {
        return item.attribute === 'video'
      })
    },
    arrayPdf () {
      return this.$store.state.emoCourse.dataFromApi.filter(function (item) {
        return item.attribute === 'pdf'
      })
    },
    arrayText () {
      return this.$store.state.emoCourse.dataFromApi.filter(function (item) {
        return item.attribute === 'text'
      })
    },
    currentUser () {
      return this.$store.state.auth.user
    },
    emoDataFromApi () {
      return this.$store.state.emoCourse.dataFromApi
    },
    currenEmoDayNew () {
      return this.$store.state.emoCourse.currenEmoDay
    },
    dataCurrentDay () {
      return this.$store.state.speakCourse.dataOfSend
    },
    fixDayVuex () {
      return this.$store.state.speakCourse.fixDay
    }
  },
  data: () => ({
    dataUseFromApi: [],
    showVideo: false,
    linkVideo: null,
    titleVideo: null,
    videoId: null
  }),
  methods: {
    openVideo (id, title) {
      console.log(id)
      this.showVideo = !this.showVideo
      this.videoId = id
      this.titleVideo = title
      this.linkVideo = 'https://www.youtube.com/embed/' + id + '?rel=0'
    },
    reStartCourse () {
      const data = this.currentUser
      this.$store.dispatch('speakCourse/reStart', data).then(
        (res) => {
          if (res === 'notFound') {
            this.message = 'Пользователь не найден'
          }
          if (res === 'notDreamAccess') {
            this.message = 'Доступ к курсу закрыт'
          }
        },
        (error) => {
          this.loading = false
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    }
  }
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
