<template>
  <div>
    <v-row class="d-flex justify-center text-center " style="margin: 0; padding: 0">
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center text-center"
      >
        <h2 class="h2-lending">Об авторе</h2>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center">
      <v-col md="6" cols="11" class="first-about-lending">

      </v-col>
      <v-col
        md="5"
        cols="11"
        style="position: relative;"
        class="justify-center text-center d-flex">
        <div class="block-title align-self-center justify-center">
          <div class="text-common">
            <div class="element-subtitle-lending">
              <svg-icon type="mdi" :path="check" size="20"></svg-icon>
              <strong>Эксперт</strong> по раннему развитию детей с более чем 1000 успешными кейсами. Обладает богатым
              опытом и знаниями в области стимулирования
              развития детей на самых ранних этапах.
            </div>
            <div class="element-subtitle-lending">
              <svg-icon type="mdi" :path="check" size="20"></svg-icon>
              <strong>Врач - педиатр</strong> с глубокими знаниями работы мозга и физиологии ребенка. Прекрасно понимает
              какие процессы происходят в мозге ребенка на ранних стадиях развития и как оптимизировать их для успешного
              обучения и речевого развития.
            </div>
            <div class="element-subtitle-lending">
              <svg-icon type="mdi" :path="check" size="20"></svg-icon>
              <strong>Семейный психолог,</strong> специализирующийся на работе с эмоциональными и психологическими
              аспектами материнства.
              Поддерживает и помогает родителям эффективно управлять стрессом, связанным с воспитанием детей, и
              создавать гармоничные отношения в семье
            </div>
            <div class="element-subtitle-lending">
              <svg-icon type="mdi" :path="check" size="20"></svg-icon>
              <strong>Разработчик</strong> чат-ботов и приложений, специализирующихся на материнстве и детстве.
              Использование инновационные технологии для создания удобных и интерактивных инструментов, которые помогут
              вам получить доступ к необходимой информации и поддержке в любое время.
            </div>
            <div class="element-subtitle-lending">
              <svg-icon type="mdi" :path="check" size="20"></svg-icon>
              <strong>Бизнес-леди</strong> и мама трех успешных сыновей. Прекрасно понимает требования современного
              родителя и умеет находить баланс между профессиональной деятельностью и заботой о детях. Опыт и знания
              помогут вам успешно сочетать материнство с вашими личными и профессиональными целями.
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiStarCheckOutline } from '@mdi/js'

export default {
  name: 'aboutLending',
  components: {
    SvgIcon
  },
  data: () => ({
    check: mdiStarCheckOutline
  })
}
</script>

<style lang="scss">
.footer {
  background-color: #8672a4;
  padding-top: 22px;
  max-height: 48px;
}

.all-rights {
  color: white;
  padding: 0;
  margin: 0;
  font-size: 12px;
}

.icons-img {
  height: 32px;
  margin: 0 3px;
}

.social-line {
  display: inline-block;
}

@media screen and (max-width: 320px) {
  .icons-img {
    height: 22px;
    margin: 0 3px;
  }
}

</style>
