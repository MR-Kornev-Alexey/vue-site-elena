<template>
  <v-row class="d-flex justify-center text-center" style="margin: 0; padding: 0; ">
    <v-col
      cols="12"
      md="6"
      class="d-flex-column justify-center text-center"
    >
      <h2 class="h2-lending">Готовимся к старту!</h2>
      <div>
        <p class="text-common">
           открыта предзапись
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row class="d-flex justify-center">
    <v-col cols="11" md="8" class="d-flex-column  justify-center text-center carousel-wrapper">
      <Carousel :autoplay="8000" :transition="500">
        <Slide v-for="(item, key) in allCourses" :key="key" style="position: relative">
          <div style="position: relative">
            <v-card
              class="mx-auto cards-user-course"
            >
              <v-img
                :src="choiceImg(item.img)"
                height="200px"
                cover
              ></v-img>

              <v-card-title class="my-card-title" v-html="item.title">
              </v-card-title>

              <v-card-subtitle
                style="min-height: 40px; text-align: left">
                <div v-html="item.subTitle" class="sub-title-all">
                </div>
              </v-card-subtitle>
              <v-card-actions>
                <v-dialog
                  transition="dialog-top-transition"
                  width="auto"
                >
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="#018786"
                      v-bind="props"
                    >Подробно
                    </v-btn>
                    <v-spacer></v-spacer>
                    <a :href="item.linkToTilda" target="_blank">
                      <v-btn
                        color="orange-lighten-2"
                        variant="text"
                      >
                        Перейти
                      </v-btn>
                    </a>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-toolbar
                        color="#018786"
                        :title="item.greenTitle"
                        style="color: whitesmoke"
                      ></v-toolbar>
                      <v-card-text>
                        <div class="" v-html="item.description"></div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <a :href="item.linkToTilda" target="_blank" class="a-linking"   style="text-decoration: none">
                          <v-btn
                            color="orange-lighten-2"
                            variant="text"
                            style="text-decoration: none"
                            class="reset-next"
                          >
                            Перейти
                          </v-btn>
                        </a>
                        <v-spacer></v-spacer>
                        <v-btn
                          variant="text"
                          color="#018786"
                          @click="isActive.value = false"
                        >Закрыть
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-card-actions>
            </v-card>
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
  name: 'course-carousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  methods: {
    findObjectByIndex (array, index) {
      const foundObject = array.find(obj => obj.index === index)
      if (foundObject) {
        return foundObject
      } else {
        // Если объект не найден, можно вернуть пустой объект или выбросить ошибку
        return false // Вернуть пустой объект
        // throw new Error('Object not found'); // Выбросить ошибку
      }
    },
    choiceImg (array) {
      return require('@/assets/img/newIcons/' + array[Number(this.$store.state.auth.numberOfOrder)])
    }
  },
  computed: {
    allCourses () {
      const arrayOut = []
      const newOrder = this.$store.state.auth.orderOfShow[0]
      const courses = this.$store.state.auth.courses
      for (let i = 0; i < newOrder.length; i++) {
        if (newOrder[i] !== 5) {
          const element = this.findObjectByIndex(courses, newOrder[i])
          if (element) {
            arrayOut.push(element)
          }
        }
      }
      return arrayOut
    }
  },
  data () {
    return {
      items: ['feed_spk12.png', 'feed_spk1.png', 'feed_spk2.png', 'feed_spk3.png', 'feed_spk4.png', 'feed_spk5.png', 'feed_spk6.png', 'feed_spk7.png', 'feed_spk8.png', 'feed_spk9.png', 'feed_spk10.png', 'feed_spk11.png']
    }
  }
})
</script>

<style lang="scss" >
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
  .carousel__prev {
    top: 46% !important;
    border: 5px solid #fae05c;
    left: -30px;
  }
 .carousel__next {
    top: 46% !important;
    border: 5px solid #fae05c;
   right: -30px;
  }
}
@media (max-width: 540px) {
  .carousel__prev {
    top: 46% !important;
    border: 5px solid #fae05c;
    left: 5px;
  }
  .carousel__next {
    top: 46% !important;
    border: 5px solid #fae05c;
    right: 5px;
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
