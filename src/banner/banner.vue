<template>
  <div v-if="shouldShowBanner" >
    <!-- Содержимое вашего баннера -->
    <v-img
      cover
      src="@/assets/img/black-friday.png"
      class="banner-img">
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'v-banner',
  data () {
    return {
      shouldShowBanner: true
    }
  },
  methods: {
    handleScroll () {
      // Проверяем, находится ли скролл на третьем экране и ниже
      console.log('handleScroll is called')
      const scrollPosition = window.scrollY
      const screenHeight = window.innerHeight
      const bannerTriggerPosition = screenHeight * 2

      this.shouldShowBanner = scrollPosition >= bannerTriggerPosition
    }
  }
}
</script>

<style scoped>

.banner-img {
  position: fixed !important;
  top: 50% !important;
  right: 6px !important;
  width: 50px;
  height: 50px;
}
</style>
