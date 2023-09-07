<template>
  <div class="pb-16">
   <SpeakHeader/>
   <v-row  class="justify-center mt-6 text-center">
      <v-col
        cols="11"
        md="6"
        >
        <h4 class="text-center">
             Практические задания
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center text-left flex-column pb-12" v-for="(item, key) in dataCurrentDay " :key="key">
      <v-col
        class="mx-auto"
        cols="11"
        md="6"
      > <h5>
        Задание № {{ key+1 }}
        </h5>
        <div v-html="item">
        </div>
      </v-col>
    </v-row>
<!--    {{dataCurrentDay}}-->
     <PopUpVideo :visible="show" :inLink="link" />
     <SpeakFooter />
     </div>
</template>

<script>
import SpeakHeader from './SpeakHeader'
import SpeakFooter from './SpeakFooter'
import PopUpVideo from '@/views/popUp/PopUpVideo'
export default {
  name: 'SpeakVideo',
  components: {
    SpeakHeader,
    PopUpVideo,
    SpeakFooter
  },
  computed: {
    dataCurrentDay () {
      return this.$store.state.speakCourse.dataOfSend.homework
    }
  },
  methods: {
    openVideo (video) {
      console.log(video)
      this.show = !this.show
      this.link = 'https://www.youtube.com/embed/' + video + '?rel=0'
    }
  },
  data: () => ({
    dataUseFromApi: [],
    show: false,
    link: ''
  })
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
