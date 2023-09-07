<template>
  <v-row class="d-flex justify-center text-center" style="margin: 0; padding: 0; ">
    <v-col
      cols="12"
      md="6"
      class="d-flex-column justify-center text-center"
    >
      <h2 class="h2-lending">Отзывы о курсе </h2>
      <div>
        <p class="text-common">
          Более 150 мам уже успешно прошли речевой интенсив: 100% участников, выполнивших <strong>все задания</strong>, получили видимый
          результат
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row class="d-flex justify-center">
    <v-col cols="11" md="8" class="d-flex-column  justify-center text-center">
      <Carousel>
        <Slide v-for="(slide, key) in items" :key="key">
          <div class="carousel__item">
            <v-img :src="require(`@/assets/img/feedBack/${slide}`)" :alt="slide"></v-img>
          </div>
        </Slide>

        <template #addons>
          <Navigation/>
          <Pagination/>
        </template>
      </Carousel>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'basic-carousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data () {
    return {
      items: ['feed_spk12.png', 'feed_spk1.png', 'feed_spk2.png', 'feed_spk3.png', 'feed_spk4.png', 'feed_spk5.png', 'feed_spk6.png', 'feed_spk7.png', 'feed_spk8.png', 'feed_spk9.png', 'feed_spk10.png', 'feed_spk11.png']
    }
  }
})
</script>

<style lang="scss" scoped>
.carousel__item {
  height: 600px;
  min-height: 200px;
  width: 350px;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

ol, ul {
  padding-left: 0;
}

@media (max-width: 600px) {
  .carousel__prev, .carousel__next {
    top: 99% !important;
  }
}

@media (max-width: 414px) {
  .carousel__item {
    height: 500px;
    min-height: 200px;
    width: 330px;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 320px) {
  ol, ul {
    padding-left: 0;
  }

  .carousel__item {
    height: 400px;
    min-height: 200px;
    width: 300px;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
