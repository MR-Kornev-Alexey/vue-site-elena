<template>
  <div class="pb-16">
    <EmoHeader/>
    <v-row class="row-blue d-flex justify-center text-center pt-4">
      <v-col
        cols="11" md="8"
      >
              <v-img
          :src="require('@/assets/img/emo/icon-emo.png')"
          style="max-height: 300px"
        >
          <div class="sorry">Сожалею</div>
        </v-img>

      </v-col>
    </v-row>
    <v-row class="row-blue d-flex justify-center text-center pt-4">
      <v-col
        cols="11" md="7"
      >
        <h3 class="">Новое Web - приложение по эмоциональному развитию на данном сайте пока в разработке.</h3>
        <p>На сегодняшний день работает только ежедневная рассылка</p>
        <p>&nbsp;</p>
        <p>Работающее Web - приложение можно найти на <strong>старом сайте.</strong></p>
        <v-row class="row-blue d-flex justify-center text-center pt-4">
          <v-col
            cols="11" md="7"
          >
            <a href="http://elenakorneva.ru/members/login" target="_blank">
              <v-btn class="btn-dream-next mx-auto">
                <p>
                  перейти
                </p>
              </v-btn>
            </a>
          </v-col>
        </v-row>
        <v-row class="row-blue d-flex justify-center text-center pt-4">
          <v-col
            cols="12" md="7"
          >
            <p >Если у вас на получается открыть Web - приложение, то прошу Вас обратиться в <strong>поддержку.</strong></p>
          </v-col>
        </v-row>

        <v-row class="row-blue d-flex justify-center text-center pt-4">
          <v-col
            cols="11" md="7"
          >
            <a href="https://t.me/mrk_service" target="_blank">
              <v-btn class="btn-dream-next mx-auto">
                <p>
                  обратиться
                </p>
              </v-btn>
            </a>
          </v-col>
        </v-row>
        <v-row class="row-blue d-flex justify-center text-center pt-4">
          <v-col
            cols="12" md="7"
          >
            <p >Также вы можете стартовать с ежедневной рассылкой заданий и теории</p>
          </v-col>
        </v-row>

        <v-row class="row-blue d-flex justify-center text-center pt-4">
          <v-col
            cols="11" md="7"
          >
              <v-btn class="btn-dream-next mx-auto" @click="reStartCourse">
                <p>
                 стартовать
                </p>
              </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
<!--    {{emoDataFromApi}}-->
   </div>
</template>

<script>
import EmoHeader from './EmoHeader'

export default {
  name: 'v-main-page-dream-intro',
  components: {
    EmoHeader
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
      this.$store.dispatch('emoCourse/reStart', data).then(
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

<style scoped lang="scss">
.sorry {
  color: #f11616;
  padding-top: 150px;
  justify-items: center;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
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
