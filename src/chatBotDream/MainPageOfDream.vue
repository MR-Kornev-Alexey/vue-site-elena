<template>
  <v-container>
    <DreamHeader/>
  <v-row class="justify-center text-center mt-6">
      <v-col
        cols="12"
        md="auto"
      >
       <h3>Выберите методику</h3>
      </v-col>
    </v-row>
  <v-row class="justify-center text-center">
      <v-col
        cols="12"
        md="auto"
        class="d-flex main-dream-column justify-center text-center"
      >
        <router-link to="/firstDreamPage" class="nav-link">
          <v-btn  @click="goToMethod(0)" class="btn-dream mx-auto">
            Методика исключения
          </v-btn>
        </router-link>
        <p v-if="currentMethod === 0">
           выбрана эта методика
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="12"
        md="auto"
        class="d-flex main-dream-column"
      >
        <router-link to="/firstDreamPage" class="nav-link">
          <v-btn  @click="goToMethod(1)" class="btn-dream mx-auto">
            Методика интервалов
          </v-btn>
        </router-link>
        <p v-if="currentMethod === 1">
          выбрана эта методика
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="12"
        md="auto"
        class="d-flex main-dream-column"
      >
        <router-link to="/firstDreamPage" class="nav-link">
          <v-btn  @click="goToMethod(2)" class="btn-dream mx-auto">
            Методика высиживания
          </v-btn>
        </router-link>
        <p v-if="currentMethod === 2">
          выбрана эта методика
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col
        cols="12"
        md="auto"
        class="d-flex main-dream-column"
      >
        <router-link to="/firstDreamPage" class="nav-link">
        <v-btn  @click="goToMethod(3)" class="btn-dream mx-auto">
           Методика Фейдинга
         </v-btn>
        </router-link>
        <p v-if="currentMethod === 3">
        выбрана эта методика
      </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DreamHeader from './DreamHeader'
export default {
  name: 'v-main-page',
  components: {
    DreamHeader
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    currentMethod () {
      return this.$store.state.newDream.numberMethod
    }
  },
  methods: {
    goToMethod (index) {
      const data = { user: this.currentUser, index: index }
      this.$store.dispatch('newDream/SET_NUMBER_METHOD', data)
    }
  },
  data: () => ({
    startIntro: true
  })
}
</script>
