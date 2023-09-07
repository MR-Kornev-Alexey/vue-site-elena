<template>
  <div class="pb-16">
   <SpeakHeader/>
   <v-row  class="justify-center mt-6 text-center">
      <v-col
        cols="11"
        md="6"
        >
        <h4 class="text-center">
             Развитие неречевого слуха
        </h4>
       <p>
         из-за особенности здесь даются ссылки на ролики из Ютуба
       </p>
      </v-col>
    </v-row>
    <v-row  class="justify-center mt-6 text-center" v-if="thisCurrentDay === 1">
      <v-col
        cols="11"
        md="6"
      >
        <h4>
          В первый день видеоролика нет. <br>
          Вы можете ознакомится с инструкцией ниже
        </h4>
      </v-col>
    </v-row>
    <div v-if="thisCurrentDay > 1">
    <v-row class="justify-center text-center flex-column pb-4" v-for="(item, key) in dataCurrentDay " :key="key">
      <v-col
        class="mx-auto"
        cols="10"
        md="6"
      > <h5>
        Ссылка  № {{ key+1 }}
        </h5>
        <a :href="item" target="_blank">
          <img  class="img-video" :src="require('@/assets/img/video.png')" >
        </a>
      </v-col>
    </v-row>
    </div>
    <v-row justify="center" style="border: 3px solid #4464A3; width: 96% " class="mx-auto mb-4">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-top-transition"
          width="auto"
        >
          <template v-slot:activator="{ props }">
            <div class="text-center">
              <h4 class="pb-4">
                Как работать с неречевым слухом
              </h4>
              <v-btn
                class="btn-dream-next"
                v-bind="props"
              ><p>
                Прочитать
              </p>
              </v-btn>
            </div>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar
                color="#018786"
                style="color: whitesmoke"
                title="Инструкция"
              ></v-toolbar>
              <v-card-text>
                  <div class="text-left" >
                    <p>Неречевые звуки играют важную роль как в речевом развитии, так и в каждодневной жизни. Различение неречевых звуков помогает установить связь между органом слуха и органом речи, а также воспринимать их как сигналы, указывающие на приближение или удаление предметов или живых существ. Правильное определение направления, откуда идет звук, помогает ориентироваться в пространстве, определять свое местонахождение, направление движения, и это также важно для речевого развития.&nbsp;</p>
                    <p>В речевом развитии неречевой слух играет существенную роль, но малыш до сих пор может испытывать трудности не только в дифференциации звуков, но и в их осмыслении. Пришло время поработать в этом направлении.</p>
                    <p>На протяжении всего курса Вам будут приходить ссылки на звуковые ролики для тренировки неречевого слуха. В связи с последними событиями и авторскими правами в разных странах, самым удобным способом стало использование платформы YouTube.</p>
                    <p>Прошу вас не обращать внимание на названия роликов, они нужны лишь на один день для работы со слухом. Если по каким-либо причинам вам неудобны предоставленные звуки, вы можете найти другие похожие варианты.</p>
                    <p>Итак, вот как мы будем работать:</p>
                    <div style="font-weight: bold; padding-left: 30px; padding-top: 12px">
                      <ul class="ul-size">
                        <li aria-level="1" >Включите ролик на МИНИМАЛЬНОЙ громкости. Источник звука не должен быть виден (разместите телефон, например, на полке, шкафу или под кроватью).</li>
                        <li aria-level="1">Периодически привлекайте внимание малыша к определенным звукам. Например, скажите: "Ты слышишь этот колокольчик? А вот опять". Двигайтесь вместе с ребенком, то удаляясь, то приближаясь к источнику звука. Обратите внимание малыша на изменение тембра звука и другие характеристики.&nbsp;</li>
                        <li aria-level="1">Эмоционально поощряйте и восхищайтесь его успехами, говоря, например: "Ну надо же, ты услышал!&rdquo;</li>
                        <li aria-level="1">Включившись в процесс обязательно отмечать похожие звуки в повседневной жизни, например, во время прогулки или игры.</li>
                      </ul>
                    </div>
                    <p>В зависимости от места игровой локации вы будете получать различные звуки. Необязательно придерживаться определенного времени или продолжительности просмотра ролика. Например, если вы оставили гаджет на кухне, проходя мимо, удивитесь и скажите: "Ты слышишь?". Затем занимайтесь обычными делами.&nbsp;</p>
                    <p>Ожидается, что слуховое внимание к неречевым звукам у малыша начнет улучшатся примерно через 2-3 недели ежедневных занятий.</p>
                    <p>К сожалению, в представленных роликах может быть реклама, и если у вас нет премиум-аккаунта, вы можете реагировать на изменение звуковой последовательности вместе с малышом (и это тоже будет тренировать слуховое внимание).</p>
                    <p>Вы же понимаете, что проводя такие занятия в конечном итоге вы тренируете слуховую сосредоточенность, внимание к произносимым словам и звукам и более легкое восприятия разнообразия окружающей речи.</p>
                  </div>
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
    <SpeakFooter/>
  </div>
</template>

<script>
import SpeakHeader from './SpeakHeader'
import SpeakFooter from './SpeakFooter'
export default {
  name: 'SpeakSound',
  components: {
    SpeakHeader,
    SpeakFooter
  },
  computed: {
    thisCurrentDay () {
      return Number(this.$store.state.speakCourse.fixDay)
    },
    dataCurrentDay () {
      return this.$store.state.speakCourse.dataOfSend.soundHTML
    }
  },
  methods: {
  },
  data: () => ({
    dataUseFromApi: [],
    show: false,
    link: ''
  })
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .ul-size {
    padding-top: 12px;
    li {
      font-size: 12px;
    }
  }
}
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
