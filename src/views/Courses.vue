<template>
  <div class="position-course " id="courses">
    <v-row class="justify-center d-flex">
      <v-col cols="11" md="auto" class="d-flex justify-center" v-for="(item, key) in allCourses" :key="key">
        <div style="position: relative">
          <v-card
            class="mx-auto cards-user"
          >
            <v-img
              :src="choiceImg(item.img)"
              height="200px"
              cover
            ></v-img>

            <v-card-title class="my-card-title">
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle
              style="min-height: 40px">
              <div v-html="item.subTitle">
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
                      :title="item.title"
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
      </v-col>
    </v-row>
    <v-row class="">
      <v-col cols="11" md="9" class="mx-auto">
        <!--        {{allCourses}}-->
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import listOfCourse from '../lib/listOfCourse'

export default {
  name: 'v-courses',
  data () {
    return {
      size: 18
    }
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
      const newOrder = this.$store.state.auth.orderOfShow[1]
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
    },
    numberOfOrder () {
      return Number(this.$store.state.auth.numberOfOrder)
    }
  }
}
</script>

<style lang="scss">
.card-description {
  font-size: 14px;

  li {
    padding-bottom: 6px;
  }

  p {
    font-size: 14px;
    padding-bottom: 6px;
    margin: 0;
  }
}

.position-course {
  position: relative;
}

.parent {
  z-index: 10;
  position: absolute;
  bottom: -30px;
  left: 108px;
}

.round-size {
  width: 300px;
  height: 300px;
  border: 5px solid #ff7835;
}

.course-round-m {
  border-radius: 50%;
  margin-right: 40px;
}

.course-round-5 {
  border-radius: 50%;
}

.course-round-6 {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #8672a4;
  border: 5px solid #8672a4;
  top: 92px;
  left: 130px;
  z-index: 22;
}

.course-round-7 {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ffeab1;
  border: 5px solid #ffeab1;
  top: 153px;
  left: 100px;
  z-index: 11;
}

.row-courses-advice {
  background-color: #b6d0ff;
  margin: 0 !important;
  padding: 0;
  position: relative;
}

.row-courses {
  margin-top: 12px;
}

.h2-title {
  text-transform: uppercase;
  font-weight: 600;
  color: #2F3550;
  padding: 24px 0;
  margin: auto;
}

.h2-title-second {
  text-transform: uppercase;
  font-weight: 600;
  color: #2F3550;
  margin: auto;
}

.h4-sub {
  width: 90%;
  color: #2F3550;
}

.color-course {
  background-color: white;

}

.v-btn--size-default {
  --v-btn-height: 52px;
}

.btn-common {
  position: absolute;
  left: 40px;
  bottom: 40px;
  width: 240px;
  background-color: #4464a3;
  border-radius: 16px;
  padding: 12px;
  -webkit-box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);
  -moz-box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);
  box-shadow: 6px 4px 1px -2px rgb(0 0 0 / 32%);

  .v-btn__content {
    color: white;
  }
}

ul {
  padding: 2px !important;
}

.h3-course {
  min-height: 66px;
}

@media screen and (max-width: 1600px) {
  .parent {
    bottom: -36px;
    left: -48px;
  }
  .course-round-6 {
    top: 54px;
    left: 249px;
  }
}

@media screen and (max-width: 1280px) {

  .course-round-6 {
    top: 50px;
    left: 64px;
  }
  .course-round-7 {
    top: 34px;
    left: 110px;
  }
  .parent {
    bottom: -36px;
    left: 38px;
  }
  .round-size {
    width: 200px;
    height: 200px;
    border: 4px solid #ff7835;
  }
}

@media screen and (max-width: 1024px) {
  .h3-course {
    min-height: 48px;
  }
  .round-size {
    width: 150px;
    height: 150px;
    border: 4px solid #ff7835;
  }
  .course-round-m {
    margin-right: 30px;
  }
  .parent {
    bottom: -36px;
    left: 58px;
  }
  .course-round-6 {
    top: 10px;
    left: -3px;
  }
  .course-round-7 {
    top: 83px;
    left: -22px;
  }

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 13px;
  }
}

@media screen and (max-width: 768px) {
  ul {
    padding: 0;
  }
  .course-round-6 {
    height: 60px;
    width: 60px;
    top: 85px;
    left: 91px;
  }
  .course-round-7 {
    height: 80px;
    width: 80px;
    top: 83px;
    left: 44px;
  }
  .round-size {
    width: 120px;
    height: 120px;
    border: 4px solid #ff7835;
  }
  .course-round-m {
    margin-right: 20px;
  }
  .parent {
    bottom: -36px;
    left: 28px;
  }
}

@media screen and (max-width: 600px) {

  .parent {
    bottom: -36px;
    left: -62px;
  }
  .course-round-7 {
    top: 118px;
    left: -23px;
  }
  .course-round-6 {
    top: 84px;
    left: 19px;
  }
}

@media screen and (max-width: 480px) {
  .card-description {
    font-size: 12px;

    p {
      font-size: 12px;
      padding-bottom: 2px;
      margin: 0;
    }
  }

  ul {
    padding: 0;
  }
  .course-round-7 {
    top: 118px;
    left: -23px;
  }
  .course-round-6 {
    top: 87px;
    left: 15px;
  }

}

@media screen and (max-width: 390px) {
  .round-6 {
    left: 47px;
    top: 13px;
  }
  .title-advice-block {
    font-size: 12px;
    padding: 1px 12px;
  }
  .course-round-6 {
    top: 99px;
    left: 20px;
  }
}

@media screen and (max-width: 320px) {

  .first-advice-block-round-1 {
    width: 60px !important;
    height: 60px !important;
    top: -33px !important;
    right: 49px !important;
  }
  .card-description {
    font-size: 11px;

    p {
      font-size: 11px;
      padding-bottom: 2px;
      margin: 0;
    }
  }
  ul {
    padding: 2px;
  }
  .course-round-6 {
    top: 107px;
    left: 21px;
  }
  .v-btn--size-default {
    --v-btn-height: 42px;
  }
  .btn-common {
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 120px;
    background-color: #4464a3;
    border-radius: 16px;
    padding: 6px;

    .v-btn__content {
      color: white;
    }
  }
}
</style>
