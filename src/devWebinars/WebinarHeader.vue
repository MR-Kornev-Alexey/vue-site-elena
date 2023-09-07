<template>
  <div class="profile-mod" style="position: relative">
    <v-row class="justify-center d-flex" style="flex-direction: column">
      <v-col cols="11" class="d-flex justify-center " style="margin: auto">
        <h4 class="d-flex title-user align-self-center" >
          Вебинары по развитию ребенка
        </h4>
      </v-col>
    </v-row>
    <PopUpWaiting  :visible="dialog" />
  </div>
</template>

<script>
import PopUpWaiting from './popUp/PopUpWaiting'
export default {
  name: 'WebinarHeader',
  data: () => ({
    dialog: false
  }
  ),
  components: {
    PopUpWaiting
  },
  computed: {
    currentMethod () {
      return this.$store.state.newDream.numberMethod
    },
    sizeOfIcon () {
      if (window.innerWidth > 414) {
        return 50
      } else {
        return 30
      }
    }
  },
  mounted () {
    this.dialog = !this.dialog
  }
}
</script>

<style scoped>

</style>
