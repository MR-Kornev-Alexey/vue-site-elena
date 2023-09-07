<template>
  <div class="bottom-toolbar d-flex justify-space-around">
    <div class="d-flex align-self-center">
      <router-link :to="'/speakPageIntro'">
        <svg-icon class="svgIcon" type="mdi" :path="home" size="32px"></svg-icon>
      </router-link>
    </div>
    <div class="d-flex align-self-center">
      <v-row justify="center">
        <v-dialog
          v-model="dialogBig"
          transition="dialog-bottom-transition"
          width="90%"
        >
          <template v-slot:activator="{ props }">
            <svg-icon v-bind="props" class="svgIcon" type="mdi" :path="earth" size="30px"></svg-icon>
          </template>
          <div class="text-center justify-center flex-column">
            <v-img
              :src="planetImg"
              style="width: 1000px"
              class="mx-auto"
            >
            </v-img>
            <div class="text-center mt-4">
              <v-btn class=""
                     @click="dialogBig = false"
                     style="border-radius: 16px"
              >
                <p>
                  Закрыть
                </p>
              </v-btn>
            </div>
          </div>
        </v-dialog>
      </v-row>
    </div>
    <div class="d-flex align-self-center">
      <v-dialog
        transition="dialog-top-transition"
        width="330px"
      >
        <template v-slot:activator="{ props }">
          <svg-icon  v-bind="props" class="svgIcon" type="mdi" :path="calendar"  size="28px"></svg-icon>
<!--          <v-btn-->
<!--            color="primary"-->
<!--            v-bind="props"-->
<!--          >From the top</v-btn>-->
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar style="color: whitesmoke"
              color="#4464A3"
              title="изменить день"
            ></v-toolbar>
            <v-card-text>
              <v-menu
                transition="scale-transition"
              >
                <template v-slot:activator="{ props }">
                  <div class="text-center">
                    <v-btn
                      class="btn-dream-small-blue"
                      v-bind="props"
                      style="width: 200px"
                    >
                      {{fixDayVuex}} день
                    </v-btn>
                  </div>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(item, i) in openDate"
                    :key="i"
                  >
                    <v-list-item-title @click="changeDay(i)" style="cursor: pointer">{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="isActive.value = false"
              >Закрыть</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMenu, mdiHomeOutline, mdiEarth, mdiCalendarMonth } from '@mdi/js'
export default {
  name: 'SpeakFooter',
  components: {
    SvgIcon
  },
  data: () => ({
    menu: mdiMenu,
    home: mdiHomeOutline,
    earth: mdiEarth,
    calendar: mdiCalendarMonth,
    dialogBig: false
  }),
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    planetImg () {
      const img = this.$store.state.speakCourse.dataOfSend.map
      return require(`@/assets/img/speakImg/${img}`)
    },
    currentDayVuex () {
      return this.$store.state.speakCourse.currenDay
    },
    fixDayVuex () {
      return this.$store.state.speakCourse.fixDay
    },
    openDate () {
      const array = []
      for (let i = 0; i < Number(this.currentDayVuex); i++) {
        const element = { title: 'день ' + `${i + 1}` }
        array.push(element)
      }
      return array
    }
  },
  methods: {
    changeDay (index) {
      // alert(index)
      const data = {
        user: this.currentUser,
        day: index + 1
      }
      this.$store.dispatch('speakCourse/SET_NUMBER_DAY', data)
      // window.location.reload()
    }
  }
}
</script>
