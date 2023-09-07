<template>
  <div class="container">
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <h4 class="title-user">
            Информационная рассылка HelenBot
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <v-select
            v-model="select"
             :items="items"
            item-title="state"
            item-value="abbr"
            label="Select"
            persistent-hint
            return-object
            single-line
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <v-textarea
            clearable
            clear-icon="mdi-close-circle"
            label="Введите сообщение"
            v-model="messageArea"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <v-btn class="btn-mod" @click="sendMessage()">
            <div>
              Отправить
            </div>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <transition name="fade">
            <v-row class="d-flex justify-center" v-if="gif">
              <v-col cols="11"
                     md="8"
                     align-self="center"
                     style="margin: auto "
                     class="text-center justify-center"
              >
                <div >
                  <img :src="require('../../assets/img/yvuu.gif')" alt="gif" >
                </div>
              </v-col>
            </v-row>
          </transition>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <transition name="fade">
            <v-row class="d-flex justify-center" v-if="result">
              <v-col cols="11"
                     md="8"
                     align-self="center"
                     style="margin: auto "
                     class="text-center justify-center"
              >
                <div>
                  <h4>{{result}}</h4>
                </div>
              </v-col>
            </v-row>
          </transition>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <transition name="fade">
            <v-row class="d-flex justify-center" v-if="contentNo">
              <v-col cols="11"
                     md="8"
                     align-self="center"
                     style="margin: auto "
                     class="text-center justify-center"
              >
                <div>
                  <h4 style="color: #b93151">У вас не заполнены все колонки. Пожалуйста, выберите</h4>
                </div>
              </v-col>
            </v-row>
          </transition>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendUsersInfo',
  data () {
    return {
      messageArea: '',
      contentNo: false,
      result: '',
      loading: false,
      message: '',
      gif: false,
      select: { state: 'Выберите группу', abbr: 'no' },
      items: [
        { state: 'Интенсив', abbr: 'access_intensive' },
        { state: 'Бот по сну', abbr: 'access_dream' },
        { state: 'Вебинары по развитию', abbr: 'access_webinars' },
        { state: 'Рассылка ДЗ', abbr: 'assess_homeworks' },
        { state: 'Речевое развитие', abbr: 'access_speak' },
        { state: 'Эмоциональное развитие', abbr: 'access_emo' },
        { state: 'Весь HelenBot', abbr: 'access_all' }
      ]
    }
  },
  methods: {
    sendMessage () {
      this.contentNo = this.gif = false
      this.result = ''
      if (this.select.abbr === 'no' || this.messageArea === '') {
        this.contentNo = true
      } else {
        // alert(this.select.abbr)
        this.gif = true
        const data = { index: this.select.abbr, msg: this.messageArea }
        this.$store.dispatch('auth/sendAllUsersNoSpam', data).then(
          (res) => {
            this.result = res
            this.gif = false
            this.messageArea = ''
            this.select = { state: 'Выберите группу', abbr: 'no' }
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
}
</script>

<style scoped>

</style>
