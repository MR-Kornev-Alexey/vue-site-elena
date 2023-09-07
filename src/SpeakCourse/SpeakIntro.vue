<template>
  <div class="pb-16">
    <SpeakHeader/>
    <v-row class="justify-center mt-6 text-center" v-if="fixDayVuex !== 'noob' ">
      <v-col
        cols="11"
        md="6"
      >
        <h4 class="text-center">
          Выберите раздел
        </h4>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="fixDayVuex === 1 || fixDayVuex === 2 || fixDayVuex === 'noob' ">
         <v-col cols="auto">
          <v-dialog
            transition="dialog-top-transition"
            width="auto"
          >
            <template v-slot:activator="{ props }">
              <v-btn class="btn-dream-next mx-auto mt-6"   v-bind="props">
                <p>
                  Стартовое задание
                </p>
              </v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar
                  color="#4464A3"
                  style="color: whitesmoke"
                  title="Входное тестовое задание"
                ></v-toolbar>
                <v-card-text class="vCardText">
                  <p>Для оценки речевого прогресса вашего малыша предлагаем выполнить <strong>ВХОДНОЕ ТЕСТОВОЕ задание</strong>. Пожалуйста, обратите внимание, что видео, которое вам необходимо записать, служит для контроля изменений в речевом развитии как у ребенка, так и у вас. Это записанное видео остается у вас и будет полезным для дальнейшей оценки через 30 дней речевого интенсива. Данное видео никуда не надо отправлять, с ним работаете только Вы.&nbsp;</p>
                  <p><strong>Цель:</strong> Оценить текущий уровень речевого развития вашего ребенка.</p>
                  <p><strong>Итак:</strong></p><br>
                  <p>- Подготовьте видеокамеру или используйте устройство с возможностью записи видео, чтобы снять обычное общение с вашим ребенком.</p>
                  <p>- Выберите время, когда ребенок находится в максимальной активности и настроен на общение.</p>
                  <p>- Во время записи видео ведите себя обыденно, будто камера отсутствует, чтобы создать естественную обстановку для ребенка.</p>
                  <p>- В течение 1-2 часов взаимодействуйте с ребенком, играйте, разговаривайте и задавайте ему вопросы.</p>
                  <p>- Попробуйте охватить разные ситуации, такие как игры с игрушками, чтение книг, еда, прогулка и т.д.</p>
                  <p>- Проанализируйте записанное видео и сделайте выводы о текущем уровне речевого развития вашего ребенка.</p>
                  <p>- Сравните результаты оценки с тем, что было записано до начала работы с речью.</p> <br>
                  <p><strong><em>Помните, что каждый ребенок развивается индивидуально, и эта оценка является лишь одним из инструментов для определения текущего состояния речевого развития. </em></strong></p>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn
                    variant="text"
                    @click="isActive.value = false"
                  >Закрыть</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    <v-row class="justify-center mt-6 text-left" v-if="fixDayVuex === 'noob' ">
      <v-col
        cols="11"
        md="6"
      >
        <p>Приветствуем вас и ваших малышей на нашем "доРечевом 30-дневном интенсиве &laquo;От звука к слову&raquo;"! Мы очень рады, что вы решили присоединиться к нам.</p>
        <p>Наш старт назначен на <strong>понедельник, 17 июля,</strong> и мы не можем дождаться начала нашего путешествия.</p>
        <p>В течение этого интенсива мы сосредоточимся на развитии речи вашего ребенка, особенно на формировании звуковой основы и развитии структур мозга, которые отвечают за процесс образования речи. Наша программа разработана таким образом, чтобы максимально эффективно использовать возможности вашего ребенка и помочь ему освоить навыки коммуникации.</p>
        <p>Ваш ребенок будет иметь возможность учиться в индивидуальной и групповой формате, общаться с другими детьми и получать поддержку от опытных кураторов. Мы будем использовать разнообразные методы и игры, которые способствуют развитию речи и позволят вашему ребенку активно участвовать в процессе обучения.</p>
        <p>Если у вас возникнут вопросы или потребуется дополнительная помощь, наша команда поддержки всегда готова помочь. Не стесняйтесь обращаться к нам, мы всегда готовы ответить на ваши вопросы и помочь вам во время этого путешествия "От звука к слову".</p>
        <p>Мы искренне верим, что наш интенсив будет не только полезным для развития речи вашего ребенка, но и увлекательным приключением для всей семьи. Мы уверены, что ваш ребенок будет наслаждаться процессом обучения и достигнет отличных результатов.</p>
        <p>Еще раз благодарим вас за выбор нашего интенсива "От звука к слову". Мы готовы начать это увлекательное путешествие вместе с вами и вашим ребенком!</p>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="fixDayVuex === 30 || fixDayVuex === 31">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-top-transition"
          width="auto"
        >
          <template v-slot:activator="{ props }">
            <v-btn class="btn-dream-next mx-auto"   v-bind="props">
              <p>
                Финишное задание
              </p>
            </v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar
                color="#4464A3"
                style="color: whitesmoke"
                title="Завершающее  тестовое задание"
              ></v-toolbar>
              <v-card-text >
                <p>Вы помните о том видео которое вы записали вначале проекта? Пришло время оценить эффективность проделанной вами работы, но для этого вам потребуется снять еще одно видео.</p>
                <p>Цель:</p>
                <p>1. Оценить прогресс в развитии речи вашего ребенка после 30-дневного речевого интенсива.&nbsp;</p>
                <p>2. ВАЖНО! Оценить трансформацию Ваших родительских навыков в общении с малышом!</p>
                <p>Итак :</p>
                <p> &nbsp; - &nbsp; Подготовьте видеокамеру или используйте устройство с возможностью записи видео для контроля трансформации работы с речью.</p>
                <p>&nbsp; - &nbsp; Выберите время, когда ваш ребенок находится в максимальной активности и настроен на общение.</p>
                <p>&nbsp; - &nbsp; Во время записи видео ведите себя обыденно, будто камера отсутствует, чтобы создать естественную обстановку для ребенка.</p>
                <p>&nbsp; - &nbsp; Запишите обычное общение с вашим ребенком в течение 1-2 часов.</p>
                <p>&nbsp; - &nbsp; Взаимодействуйте с ребенком, играйте, разговаривайте и задавайте ему вопросы, как обычно делаете.</p>
                <p>&nbsp; - &nbsp; По завершении записи видео, сохраните его и проанализируйте следующие аспекты:</p>
                <p>&nbsp; - &nbsp; Оцените свой стиль общения с ребенком:</p>
                <p>&nbsp;&nbsp;&nbsp; * &nbsp; Обратите внимание на вашу ролевую позицию в диалоге.</p>
                <p>&nbsp;&nbsp;&nbsp; * &nbsp; Анализируйте используемые вами слова, выражения и фразы.</p>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  variant="text"
                  @click="isActive.value = false"
                >Закрыть</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center" v-if="fixDayVuex !== 'noob' ">
      <v-col
        cols="11"
        md="6"
      >
        <router-link :to="'/speakVideo'">
          <v-btn class="btn-dream-next mx-auto">
            <p>
              Теория
            </p>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center" v-if="fixDayVuex !== 'noob' ">
      <v-col
        cols="11"
        md="6"
      >
        <router-link :to="'/speakTest'">
          <v-btn class="btn-dream-next mx-auto">
            <p>
              Тестирование
            </p>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center" v-if="fixDayVuex !== 'noob' ">
      <v-col
        cols="11"
        md="6"
      >
        <router-link :to="'/speakHW'">
          <v-btn class="btn-dream-next mx-auto" style="text-decoration: none">
            Домашние задания
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center" v-if="fixDayVuex !== 'noob' ">
      <v-col
        cols="11"
        md="6"
      >
        <router-link :to="'/speakSound'">
          <v-btn class="btn-dream-next mx-auto">
            Неречевой слух
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center pb-4" v-if="fixDayVuex === 31">
      <v-col
        cols="11"
        md="6"
      >
        <v-btn class="btn-dream-blue mx-auto" @click="reStartCourse()">
          Начать заново
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center pb-4" v-if="fixDayVuex === 31">
      <v-col
        cols="11"
        md="6"
        class="d-flex-column justify-center text-center"
      >
        <h4 class="text-center h4-gift">
          Специальный подарок
        </h4>
        <a href="https://vk.com/music/playlist/710248785_1_26c64148f2c234ff36" target="_blank">
          <v-img :src="require('@/assets/img/speakImg/label.jpg')" alt="label" width="300px" class="mx-auto"/>
        </a>
      </v-col>
    </v-row>
    <SpeakFooter v-if="fixDayVuex !== 'noob' "/>
  </div>
</template>

<script>
import SpeakHeader from './SpeakHeader'
import SpeakFooter from './SpeakFooter'

export default {
  name: 'v-main-page-dream-intro',
  components: {
    SpeakHeader,
    SpeakFooter
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    dataCurrentDay () {
      return this.$store.state.speakCourse.dataOfSend
    },
    fixDayVuex () {
      return this.$store.state.speakCourse.fixDay
    }
  },
  data: () => ({
    dataUseFromApi: []
  }),
  methods: {
    reStartCourse () {
      const data = this.currentUser
      this.$store.dispatch('speakCourse/reStart', data).then(
        (res) => {
          if (res === 'notFound') {
            this.message = 'Пользователь не найден'
          }
          if (res === 'notDreamAccess') {
            this.message = 'Доступ к курсу закрыт'
          }
        },
        (error) => {
          this.loading = false
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.all-screen {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  padding: 0;
}

.selector {
  flex: 1;
}
</style>
