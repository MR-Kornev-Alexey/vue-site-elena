<template>
  <v-container>
    <DreamHeader/>
    <transition name="fade">
    <div v-if="!showNext">
    <v-row class="justify-center mt-6">
      <v-col cols="11" md="6"
      >
        <h3 class="text-center pb-4">
          {{ allMethods[currentMethod].title }}
        </h3>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-6">
      <v-col cols="11" md="6"
      >
        <p v-html="allMethods[currentMethod].text">
        </p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-6">
      <v-col cols="11" md="6" class="d-flex justify-center">
      <router-link to="/mainPageOfDream" class="nav-link">
        <v-btn  class="btn-dream-back">
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
    <transition name="fade">
    <div  v-if="showNext" >
      <v-row class="justify-center text-center mt-6">
        <v-col
          cols="12"
          md="auto"
        >
          <iframe
            :width="widthVideo"
            title="YouTube video player"
            :height="heightVideo"
            :src="allMethods[currentMethod].video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
      <v-row class="justify-center text-center">
        <v-col
          cols="12"
          md="auto"
        >
          <router-link to="/stagesOfWork" class="nav-link">
            <v-btn class="btn-dream-next mx-auto">
              Этапы работы
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
      <v-row class="justify-center text-center">
        <v-col
          cols="12"
          md="auto"
        >
          <v-btn class="btn-dream-back" @click="nextToggle()" >
            <p>
              Назад
            </p>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    </transition>
  </v-container>
</template>

<script>
import DreamHeader from './DreamHeader'
export default {
  name: 'firstDreamPage',
  components: {
    DreamHeader
  },
  created () {
    window.addEventListener('resize', this.updateWidth)
    window.addEventListener('resize', this.updateHeight)
    this.updateWidth()
    this.updateHeight()
  },
  data: () => ({
    methodInfo: '',
    loading: false,
    message: '',
    showNext: false,
    windowWidth: null,
    windowHeight: null
  }),
  methods: {
    nextToggle () {
      this.showNext = !this.showNext
    },
    heightVideoCalc () {
      if (this.windowHeight < 600) {
        return 480
      } else if (this.windowHeight < 900) {
        return 500
      } else {
        return 660
      }
    },
    updateWidth () {
      this.windowWidth = window.innerWidth
    },
    updateHeight () {
      this.windowHeight = window.innerHeight
    }
  },
  computed: {
    widthVideo () {
      if (this.windowWidth > 600) {
        return this.heightVideoCalc() * 3 / 4
      } else {
        return this.heightVideoCalc() * 8 / 16
      }
    },
    heightVideo () {
      if (this.windowHeight < 600) {
        return 480
      } else if (this.windowHeight < 900) {
        return 500
      } else {
        return 660
      }
    },
    currentMethod () {
      return this.$store.state.newDream.numberMethod
    },
    allMethods () {
      return this.$store.state.newDream.allMethods
    },
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    this.methodInfo = ''
    if (this.currentMethod === '' || this.currentMethod === null) {
      this.$router.push('/mainPageOfDream')
    }
  }
}
</script>

<style scoped>

</style>
