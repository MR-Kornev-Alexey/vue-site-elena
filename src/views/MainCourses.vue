<template>
  <div id="mainCourses" class="pt-4">
    <v-row class="justify-center text-center first-main-course"
    style="position: relative;">

      <v-col
        cols="9"
        class="justify-center text-center"
      >  <img
        :src="require('@/assets/img/kid.png')"
        class="main-course-img"
      >
        <div class="first-main-course">
          <div class="main-course-round-1"/>
          <div class="main-course-round-2"/>
          <div class="main-course-round-3"/>
        </div>
      </v-col>
    </v-row>
    <v-row class="row-courses d-flex justify-center text-center">
      <v-col
        cols="12"
      >
        <h2 class="h2-title">Онлайн курсы и приложения для родителей</h2>
      </v-col>
    </v-row>
    <CourseFirstBlock />
<!--    <CourseSecondBlock />-->
<!--    <CourseThirdBlock />-->
<!--    <CourseFourthBlock />-->
    <CourseFifthBlock />
    <CourseSixthBlock />
    <Footer />
  </div>
</template>

<script>
import CourseFirstBlock from './blocks/CourseFirstBlock'
// import CourseSecondBlock from './blocks/CourseSecondBlock'
// import CourseThirdBlock from './blocks/CourseThirdBlock'
// import CourseFourthBlock from './blocks/CourseFourthBlock'
import CourseFifthBlock from './blocks/CourseFifthBlock'
import CourseSixthBlock from './blocks/CourseSixthBlock'
import Footer from './Footer'

export default {
  name: 'v-MainCourses',
  components: {
    CourseFirstBlock,
    // CourseSecondBlock,
    // CourseThirdBlock,
    // CourseFourthBlock,
    CourseFifthBlock,
    CourseSixthBlock,
    Footer
  }
}
</script>

<style lang="scss">
#mainCourses {
  background-color: #f1c7bc;
  .v-row {
     margin: 0!important;
  }
}
.first-main-course {
  min-height: 650px;
  background-image: url("@/assets/img/course/round-8.png");
  background-position: top 80px center;
  background-size: 41%;
  position: relative;
}
.main-course-img {
  position: absolute;
  z-index: 12;
  height: 694px;
  bottom: -53px;
  right: 514px;
}

.main-course-round-1 {
  width: 160px;
  height: 160px;
  background-color: #3d498c;
  position: absolute;
  bottom: 14px;
  left: 217px;
  border-radius: 50%;
}
.main-course-round-2 {
  width: 100px;
  height: 100px;
  background-color: #FFEAB1 ;
  position: absolute;
  bottom: 14px;
  right: 217px;
  border-radius: 50%;
}
.main-course-round-3 {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 19px;
  right: 396px;
  border-radius: 50%;
  border: 4px solid #ff7835;
}
@media screen and (max-width: 1600px) {
  .main-course-img {
    bottom: -10px;
    right: 446px;
  }
  .main-course-round-2 {
    bottom: 41px;
    right: 252px;
  }
  .main-course-round-1 {
    z-index: 20;
    bottom: 14px;
    left: 217px;
  }
}
@media screen and (max-width: 1280px) {
  .first-main-course {
    min-height: 550px;
    background-position: top 80px center;
    background-size: 41%;
  }
  .main-course-img {
    height: 576px;
    bottom: -10px;
    right: 369px;
  }
  .main-course-round-3 {
    top: 19px;
    right: 205px;
  }
  .main-course-round-1 {
    z-index: 20;
    bottom: -7px;
    left: 128px;
  }
  .main-course-round-2 {
    bottom: 226px;
    right: 302px;
  }
}
@media screen and (max-width: 1024px) {
  .first-main-course {
    min-height: 450px;
    background-position: top 80px center;
    background-size: 46%;
  }
  .main-course-img {
    height: 576px;
    bottom: -10px;
    right: 369px;
  }
  .main-course-img {
    height: 473px;
    bottom: -10px;
    right: 282px;
  }
  .main-course-round-1 {
    z-index: 20;
    bottom: -7px;
    left: 16px;
  }
  .main-course-round-2 {
    bottom: 135px;
    right: 126px;
  }
  .main-course-round-3 {
    top: 1px;
    right: 115px;
  }
}
@media screen and (max-width: 768px) {
  .first-main-course {
    min-height: 411px;
    background-position: top 80px center;
    background-size: 51%;
  }
  .main-course-img {
    height: 488px;
    bottom: -45px;
    right: 131px;
  }
  .main-course-round-1 {
    z-index: 5;
    bottom: -20px;
    left: -79px;
  }
  .main-course-round-3 {
    top: 4px;
    right: 7px;
  }
  .main-course-round-2 {
    height: 70px;
    width: 70px;
    bottom: 184px;
    right: 146px;
  }
}
@media screen and (max-width: 600px) {
  .first-main-course {
    min-height: 411px;
    background-position: top 80px center;
    background-size: 71%;
  }
  .main-course-img {
    height: 446px;
    bottom: -10px;
    right: 84px;
  }
  .main-course-round-1 {
    z-index: 12;
    bottom: -20px;
    left: -54px;
    height: 90px;
    width: 90px;
  }
  .main-course-round-3 {
    top: 4px;
    right: -25px;
  }
  .main-course-round-2 {
    height: 70px;
    width: 70px;
    bottom: 184px;
    right: 146px;
  }
}
@media screen and (max-width: 480px) {
  .first-main-course {
    min-height: 411px;
    background-position: top 80px center;
    background-size: 86%;
  }
  .main-course-img {
    height: 446px;
    bottom: -10px;
    right: 27px;
  }
  .main-course-round-1 {
    z-index: 12;
    bottom: -20px;
    left: -54px;
    height: 90px;
    width: 90px;
  }
  .main-course-round-3 {
    top: 4px;
    right: -25px;
  }
  .main-course-round-2 {
    height: 70px;
    width: 70px;
    bottom: 166px;
    right: 35px;
  }
}
@media screen and (max-width: 390px) {
  .first-main-course {
    min-height: 404px;
    background-position: top 107px center;
    background-size: 89%;
  }
  .main-course-img {
    height: 381px;
    bottom: -10px;
    right: 17px;
  }
  .main-course-round-3 {
    top: 4px;
    right: -25px;
    height: 90px;
    width: 90px;
  }
  .main-course-round-1 {
    z-index: 12;
    bottom: -20px;
    left: 131px;
    height: 90px;
    width: 90px;
  }
  .main-course-round-2 {
    height: 70px;
    width: 70px;
    bottom: 166px;
    right: 35px;
  }
}
@media screen and (max-width: 320px) {
  .first-main-course {
    min-height: 297px;
    background-position: top 80px center;
    background-size: 80%;
  }
  .main-course-img {
    height: 308px;
    bottom: -5px;
    right: 16px;
  }
  .main-course-round-3 {
    top: 4px;
    right: -25px;
    height: 90px;
    width: 90px;
  }
  .main-course-round-1 {
    z-index: 12;
    bottom: -20px;
    left: 131px;
    height: 50px;
    width: 50px;
  }
  .main-course-round-2 {
    height: 70px;
    width: 70px;
    bottom: 166px;
    right: 35px;
  }
}
</style>
