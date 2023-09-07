<template>
  <v-container>
    <SpeakHeader/>
    111666
    <Footer/>
  </v-container>
</template>

<script>
import SpeakHeader from './SpeakHeader'
import Footer from '../views/Footer'
export default {
  name: 'v-main-page-dream-intro',
  components: {
    SpeakHeader,
    Footer
  },
  methods: {
  },
  data: () => ({
    dataUseFromApi: []
  })
}
</script>

<style scoped>

</style>
