<template>
  <div class="profile-mod">
    <v-row class="justify-center flex-column" >
      <v-col md="auto" class="mx-auto">
          <h4 class="d-flex title-user align-self-center mx-auto text-center" >
            Курс по эмоциональному  развитию<br>( {{currenEmoDayNew}} день )
          </h4>
        </v-col>
      </v-row>
    <popUpWaitingEmo :visible="dialog"  />
    </div>
</template>

<script>
import popUpWaitingEmo from './popUp/PopUpWaitingEmo'
export default {
  name: 'SpeakHeader',
  components: {
    popUpWaitingEmo
  },
  computed: {
    currenEmoDayNew () {
      return this.$store.state.emoCourse.currenEmoDay
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
      const data = {
        user: this.currentUser,
        day: index + 1
      }
      this.$store.dispatch('speakCourse/SET_NUMBER_DAY', data)
    }
  },
  data: () => ({
    dataUseFromApi: [],
    imageUrl: require('@/assets/img/speakImg/w-1-3-5-7.jpg'),
    this_day: null,
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
