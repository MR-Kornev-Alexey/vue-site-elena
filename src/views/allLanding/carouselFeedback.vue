<template>
<div>
  <v-row class="d-flex justify-center text-center" style="margin: 0; padding: 0; " >
    <v-col
      cols="12"
      md="6"
      class="d-flex-column justify-center text-center"
    >
      <h2 class="h2-lending">Отзывы о курсе </h2>
      <div>
        <p class="text-common">
          Более 50 мам уже успешно прошли речевой интенсив: 100% участников, выполнивших все задания, получили видимый результат
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row class="d-flex justify-center pb-4">
    <v-col cols="11" md="10" class="d-flex justify-center text-center">
      <v-carousel
        cycle
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(item,i) in items[numberLanding]"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</div>
</template>

<script>

export default {
  name: 'carouselFeedback',
  props: {
    numberLanding: {
      default: 1
    }
  },
  data () {
    return {
      items: [
        [],
        [
          {
            src: require('@/assets/img/feedBack/feedback1.jpg')
          },
          {
            src: require('@/assets/img/feedBack/feedback2.jpg')
          },
          {
            src: require('@/assets/img/feedBack/feedback3.jpg')
          },
          {
            src: require('@/assets/img/feedBack/feedback4.jpg')
          },
          {
            src: require('@/assets/img/feedBack/feedback5.jpg')
          },
          {
            src: require('@/assets/img/feedBack/feedback6.jpg')
          },
          {
            src: require('@/assets/img/feedBack/feedback7.jpg')
          },
          {
            src: require('@/assets/img/feedBack/feedback8.jpg')
          }
        ],
        [
          {
            src: require('@/assets/img/feedBack/feed_spk7.png')
          },
          {
            src: require('@/assets/img/feedBack/feed_spk1.png')
          },
          {
            src: require('@/assets/img/feedBack/feed_spk3.png')
          },
          {
            src: require('@/assets/img/feedBack/feed_spk4.png')
          },
          {
            src: require('@/assets/img/feedBack/feed_spk8.png')
          },
          {
            src: require('@/assets/img/feedBack/feed_spk6.png')
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>
.v-window {
  height: 2300px !important;
}
@media screen and (max-width: 1600px) {
  .v-window {
    height: 2000px !important;
  }
}
@media screen and (max-width: 1280px) {
  .v-window {
    height: 1200px !important;
  }
}
@media screen and (max-width: 1024px) {
  .v-window {
    height: 800px !important;
  }
}
@media screen and (max-width: 768px) {
  .v-window {
    height: 660px !important;
  }
}
@media screen and (max-width: 480px) {
  .v-window {
    height: 560px !important;
  }
}
@media screen and (max-width: 360px) {
  .v-window {
    height: 560px !important;
  }
}

</style>
