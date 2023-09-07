<template>
  <v-row class="justify-center mt-6 text-center">
    <v-col
      cols="11"
      md="6"
    >
      <h3 class="text-center h3-emo">
       Видео
      </h3>
    </v-col>
  </v-row>
  <v-row class="justify-center mt-6 text-center">
    <v-col
      cols="11"
      md="6"
    >
      <v-responsive>
        <iframe width="1000" height="400" src="https://www.youtube.com/watch?v=gro_LHR05L8"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </v-responsive>
    </v-col>
  </v-row>
  <v-row class="justify-center mt-6 text-center">
    <v-col cols="11" md="6">
      <v-responsive>
        <iframe
          width="1000"
          height="400"
          src="https://www.youtube.com/embed/gro_LHR05L8?autoplay=1&rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </v-responsive>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: 'videoPlayer'
}
</script>

<style scoped>

</style>
