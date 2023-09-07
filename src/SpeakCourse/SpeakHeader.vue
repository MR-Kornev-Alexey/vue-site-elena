<template>
  <div class="profile-mod">
    <v-row class="justify-center flex-column" v-if="fixDayVuex !== 'noob' ">
      <v-col md="auto" class="mx-auto">
          <h4 class="d-flex title-user align-self-center mx-auto text-center" >
            доРечевой интенсив ( {{fixDayVuex}} день )
          </h4>
        </v-col>
      </v-row>
    <v-row class="justify-center flex-column" v-if="fixDayVuex === 'noob' ">
      <v-col md="auto" class="mx-auto">
        <h4 class="d-flex title-user align-self-center mx-auto text-center" >
          Курс по речевому развитию ( старт 17 июля )
        </h4>
      </v-col>
    </v-row>
    <popUpWaitingSpeak :visible="dialog"  />
    </div>
</template>

<script>
import popUpWaitingSpeak from '@/SpeakCourse/popUp/PopUpWaitingSpeak'
import { mdiHomeOutline, mdiEarth } from '@mdi/js'
export default {
  name: 'SpeakHeader',
  components: {
    popUpWaitingSpeak
  },
  computed: {
    planetImg () {
      const img = this.$store.state.speakCourse.dataOfSend.map
      return require(`@/assets/img/speakImg/${img}`)
    },
    currentUser () {
      return this.$store.state.auth.user
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
    },
    sizeOfIcon () {
      if (window.innerWidth > 414) {
        return 50
      } else {
        return 30
      }
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
  },
  data: () => ({
    dataUseFromApi: [],
    imageUrl: require('@/assets/img/speakImg/w-1-3-5-7.jpg'),
    this_day: null,
    home: mdiHomeOutline,
    earth: mdiEarth,
    dialog: false,
    dialogBig: false,
    notifications: false,
    sound: true,
    widgets: false
  }),
  mounted () {
    this.dialog = !this.dialog
  }
}
</script>

<style scoped lang="scss">
.v-row {
 margin: 0;
}
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}

</style>
