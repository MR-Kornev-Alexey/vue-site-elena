<template>
  <div class="profile-mod" style="position: relative">
    <v-row class="justify-center d-flex" style="flex-direction: column">
      <v-col cols="11" class="d-flex justify-center " style="margin: auto">
        <h4 class="d-flex title-user align-self-center" >
          ЧАТБОТ по сну
        </h4>
      </v-col>
      <v-col cols="11" class="d-flex justify-center " style="margin: auto">
        <router-link to="/firstDreamPage" class="nav-link">
          <v-btn  class="btn-dream-small-blue">
            {{titles[currentMethod]}}
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <PopUpWaiting  :visible="dialog" />
    <router-link to="/addDreamPage" class="nav-link">
    <div class="add-items">
      <svg-icon type="mdi" :path="icon" :size="sizeOfIcon" ></svg-icon>
    </div>
    </router-link>
  </div>
</template>

<script>
import PopUpWaiting from './popUp/PopUpWaiting'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCommentQuestionOutline } from '@mdi/js'
export default {
  name: 'DreamHeader',
  data: () => ({
    dialog: false,
    titles: ['Методика исключения', 'Методика интервалов', 'Методика высиживания', 'Методика Фейдинга'],
    icon: mdiCommentQuestionOutline
  }
  ),
  components: {
    PopUpWaiting,
    SvgIcon
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
