<template>
<div style="margin: 0; padding: 0">
  <v-row class="row-advice d-flex justify-center text-center " style="margin: 0; padding: 0">
    <v-col
      cols="12"
      md="6"
      class="d-flex justify-center text-center"
    >
      <h2 class="h2-title-home ">5 причин для обращения</h2>
    </v-col>
  </v-row>
  <v-row class="row-advice d-flex justify-center" style="margin: 0; padding: 0">
    <v-col
      cols="12"
      md="4"
      class="five-reason-block mb-3"
    >
      <div class="five-reason-block-round"/>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="d-flex"
      style="margin: 0; padding: 0;"
    >
      <div class="title-course-second-block align-self-center margin-16">
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="check"></svg-icon>
              Комплексный подход к развитию детей</strong>
          </div>
          <p class="pl-6 text-left">
            Мои курсы и консультации помогают Вам понять, как развивать ребенка во всех аспектах - физически,
            умственно и эмоционально
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="check"></svg-icon>
              Профессиональное медицинское образование</strong>
          </div>
          <p class="pl-6 text-left">
            Дам вам рекомендации по здоровью вашего ребенка, а также помогу вам понять, какие медицинские проблемы
            могут возникнуть у вашего ребенка и как их предотвратить
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="check"></svg-icon>
              Бизнес-опыт</strong>
          </div>
          <p class="pl-6 text-left">
            Как бизнес-леди, дам вам советы по организации и управлению своими ресурсами - временем, деньгами и
            энергией, чтобы вы могли достичь максимального успеха в своей жизни и воспитании своих детей.
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="check"></svg-icon>
              Личный опыт </strong>
          </div>
          <p class="pl-6 text-left">
            Как мама трех успешных сыновей, поделюсь своим личным опытом и дам вам практические советы по воспитанию и
            развитию своих детей, чтобы вырастить всесторонне развитую личность.
          </p>
        </div>
        <div class="advice-size">
          <div class="text-left ">
            <strong>
              <svg-icon type="mdi" :path="check"></svg-icon>
              Доступность курсов</strong>
          </div>
          <p class="pl-6 text-left">
            Мои курсы и боты доступны онлайн, что означает, что вы можете изучать их в своем темпе, в удобное для вас
            время и из любой точки мира.
            Это особенно полезно для родителей, которые имеют ограниченное количество времени и не могут получать
            вебинары и консультации
          </p>
        </div>
        <div class="text-center my-4">
          <a href="/advice" class="a-btn">
            <v-btn class="btn-pay">
              Подробнее
            </v-btn>
          </a>
        </div>

      </div>
    </v-col>
  </v-row>
</div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheckCircleOutline } from '@mdi/js'
export default {
  name: 'fiveOfReasons',
  components: {
    SvgIcon
  },
  data () {
    return {
      content: '',
      check: mdiCheckCircleOutline
    }
  }
}
</script>

<style scoped>

</style>
