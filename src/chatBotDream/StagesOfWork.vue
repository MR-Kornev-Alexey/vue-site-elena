<template>
  <v-container>
    <DreamHeader/>
    <transition name="fade">
      <div v-if="!showNext" class="mt-6">
        <v-row class="justify-center text-center" v-for="(item, key) in currentStages[4]" :key="key" >
          <v-col
            cols="12"
            md="auto"
          >
            <v-btn class="btn-dream" @click="isPrepare(item)">
              <p>
                {{ item.title }}
              </p>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-6">
          <v-col cols="11" md="6" class="d-flex justify-center">
            <router-link to="/firstDreamPage" class="nav-link">
              <v-btn class="btn-dream-back">
                Назад
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-6">
          <v-col cols="11" md="6" class="d-flex justify-center">
            <v-btn  class="btn-dream-next" @click="nextToggle()">
              Дальше
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </transition>
    <div v-if="showNext" class="mt-6">
      <v-row class="justify-center text-center" >
        <v-col
          cols="12"
          md="auto"
        >
          <v-btn class="btn-dream" @click="showRituals = !showRituals">
            <p>
             Ритуалы
            </p>
          </v-btn>
        </v-col>
      </v-row>
      <transition name="fade">
        <v-row class="d-flex justify-center" v-if="showRituals">
          <v-col             cols="12"
                             md="auto"
                             class="justify-center text-center">

            <div
              v-for="(n,key) in currentStages[3]"
              :key="key"
              @click="selectRituals(n)"
            >
              <v-btn class="btn-small" >
                <p>
                  {{ n.title }}
                </p>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </transition>
      <v-row class="justify-center text-center" >
        <v-col
          cols="12"
          md="auto"
        >
          <v-btn class="btn-dream" @click="dreamOfDayNew()">
            <p>
              Дневной сон
            </p>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center text-center" >
        <v-col
          cols="12"
          md="auto"
        >
          <v-btn class="btn-dream" @click="showNight = !showNight">
            <p>
              Ночной сон
            </p>
          </v-btn>
        </v-col>
      </v-row>
      <transition name="fade">
        <v-row class="d-flex justify-center" v-if="showNight">
          <v-col             cols="12"
                             md="auto"
                             class="justify-center text-center">

            <div
              v-for="(n,key) in listNightTitle"
              :key="key"
              @click="selectNight(key)"
            >
              <v-btn class="btn-small" >
                <p>
                  {{ n }}
                </p>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </transition>
      <v-row class="justify-center text-center" >
        <v-col
          cols="12"
          md="auto"
        >
          <v-btn class="btn-dream" >
            <p>
              <a :href="calcPrint" style="color: #333333; text-transform: uppercase; text-decoration: none;font-size: 15px;">Скачать гайд</a>
            </p>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center mt-6">
        <v-col cols="11" md="6" class="d-flex justify-center">
               <v-btn  class="btn-dream-back"  @click="nextToggle()">
              Назад
            </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-row class="justify-center text-center">
      <v-col
        cols="12"
        md="auto"
      >

      </v-col>
    </v-row>
<!--    {{this.currentStages[1][currentMethod]}}-->
    <popUpVideo :visible="showVideo" :inLink="linkVideo" :inTitle="titleVideo" videoId="videoId"/>
  </v-container>
</template>

<script>
import DreamHeader from './DreamHeader'
import popUpVideo from './popUp/popUpVideo'
export default {
  name: 'stagesOfWork',
  components: {
    DreamHeader,
    popUpVideo
  },
  data: () => ({
    listNightTitle: ['1 - й день', '2 - й и последующие дни', 'Первые результаты'],
    showNext: false,
    showVideo: false,
    showRituals: false,
    showNight: false,
    linkVideo: '',
    titleVideo: ''
  }),
  computed: {
    calcPrint () {
      return this.currentStages[0][this.currentMethod]
    },
    currentUser () {
      return this.$store.state.auth.user
    },
    currentMethod () {
      return this.$store.state.newDream.numberMethod
    },
    currentStages () {
      return this.$store.state.newDream.allStages
    }
  },
  methods: {
    selectNight (index) {
      this.showVideo = !this.showVideo
      this.titleVideo = this.currentStages[1][this.currentMethod][index].title
      this.linkVideo = 'https://www.youtube.com/embed/' + this.currentStages[1][this.currentMethod][index].video + '?rel=0'
    },
    dreamOfDayNew () {
      this.showVideo = !this.showVideo
      this.titleVideo = this.currentStages[2][this.currentMethod].title
      this.linkVideo = 'https://www.youtube.com/embed/' + this.currentStages[2][this.currentMethod].video + '?rel=0'
    },
    selectRituals (index) {
      this.showVideo = !this.showVideo
      this.titleVideo = index.title
      this.linkVideo = 'https://www.youtube.com/embed/' + index.video + '?rel=0'
    },
    nextToggle () {
      this.showNext = !this.showNext
    },
    isPrepare (index) {
      this.showVideo = !this.showVideo
      this.titleVideo = index.title
      this.linkVideo = 'https://www.youtube.com/embed/' + index.video + '?rel=0'
    }
  }
}
</script>

<style scoped>

</style>
