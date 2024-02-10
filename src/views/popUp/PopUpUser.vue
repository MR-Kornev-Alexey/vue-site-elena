<template>
  <div class="v-pop-collection">
    <div
      :aria-hidden="modalToggle"
      :class="{'vuexplosive-modal-hidden': !active, 'vuexplosive-modal-visible': active}"
      @keydown.esc="active = false"
      class="vuexplosive-modal"
      role="dialog"
      tabindex="-1"
    >
      <transition name="scale">
        <div class="vuexplosive-modal-container" v-if="active">
          <div class="vuexplosive-modal-inner-block" v-if="!showTable">
            <img
              :src="require('@/assets/img/giphy.gif')"
               height="400" alt="pic" width="400"
            >
            <p style="color: white; font-size: 40px">
              Загрузка
            </p>
          </div>
<!--          ==================================================-->
          <div class="vuexplosive-modal-inner " v-if="showTable">
            <div>
              <svg-icon type="mdi" :path="path6" :size="44" style="color: white" @click="modalToggle"></svg-icon>
            </div>
            <div class="vuexplosive-modal-header d-flex justify-center py-4">
              <h3>
                {{ userMail }} | {{ nameUser }}
              </h3>
            </div>

            <div class="vuexplosive-modal-content text-center pb-6" style="overflow: auto;">
              <h4>
                Доступ к курсам
              </h4>
              <div v-for="(item,key) in courses" :key="key">
                <div class="d-inline-flex justify-center" style="width: 96%">
                  <div class="size-20-left"  :class="[colorLight(key), cursorOpen(item.open) ]"
                       @click="openNextWindow(item.index,item.open)">
                    {{ item.title }}
                  </div>
                  <div class="size-20" :class="[colorLight(key), changeClass(item.index)]">
                    <span >
                         {{ checkAccess(item.index) }}
<!--                      {{ item.open }}-->
                    </span>
                  </div>
                  <div class="size-20" :class="colorLight(key)" style="cursor: pointer">
                    <svg-icon type="mdi" :path="edit" :size="20" @click="changeAccess(item.index)"></svg-icon>
                  </div>
                </div>
              </div>
              <div>
                <div class="d-inline-flex justify-center colorLight" style="width: 96%" @click="changeAccess30(newDatUser.chatId)">
                  <div class="size-20-left" style="border-top: 2px solid #113a70;cursor: pointer;" :class="changeClass('access_emo_3')">
                     Включить в эмоции 3.0
                  </div>
                  <div class="size-20" style="border-top: 2px solid #113a70" :class="changeClass('access_emo_3')">
                    {{checkAccessEmo3_0('access_emo_3') }}
                  </div>
                  <div class="size-20"  style="cursor: pointer; border-top: 2px solid #113a70" >
                    <svg-icon type="mdi" :path="edit" :size="20" ></svg-icon>
                  </div>
                </div>
              </div>
              <div>
                <div class="d-inline-flex justify-center" style="width: 96%">
                  <div class="size-20-left" style="border-top: 2px solid #113a70;cursor: pointer;" @click="openFirstStartWin()">
                      Первый старт ДЗ
                  </div>
                  <div class="size-20" style="border-top: 2px solid #113a70">
                        Открыть
                  </div>
                  <div class="size-20"  style="cursor: pointer; border-top: 2px solid #113a70" >
                    <svg-icon type="mdi" :path="edit" :size="20" @click="openFirstStartWin()"></svg-icon>
                  </div>
                </div>
              </div>
              <div>
                <div class="d-inline-flex justify-center colorLight" style="width: 96%">
                  <div class="size-20-left" style="border-top: 2px solid #113a70;cursor: pointer;" @click="changeWeekHW()">
                    Смена недели
                  </div>
                  <div class="size-20" style="border-top: 2px solid #113a70">
                    Открыть
                  </div>
                  <div class="size-20"  style="cursor: pointer; border-top: 2px solid #113a70" >
                    <svg-icon type="mdi" :path="edit" :size="20" @click="changeWeekHW()"></svg-icon>
                  </div>
                </div>
              </div>
              <div>
                <div class="d-inline-flex justify-center" style="width: 96%">
                  <div class="size-20-left" style="border-top: 2px solid #113a70;cursor: pointer;" @click="openCorrectWindow()">
                    Корректировка дня недели после рестарта
                  </div>
                  <div class="size-20" style="border-top: 2px solid #113a70">
                    Открыть
                  </div>
                  <div class="size-20"  style="cursor: pointer; border-top: 2px solid #113a70" >
                    <svg-icon type="mdi" :path="edit" :size="20" @click="openCorrectWindow()"></svg-icon>
                  </div>
                </div>
              </div>
              <div>
                {{ newDatUser }}<br><br>
                   Данные из рассылки ДЗ <br><br>
                {{ intensiveDataUser }}
              </div>
              <transition name="fade">
                <v-row class="d-flex justify-center windowOpen" v-if="webinar">
                  <v-col cols="11"
                         md="8"
                         align-self="center"
                         style="margin: auto "
                         class="text-center justify-center"
                         :key="render"
                  >
                    <div v-if="webinar">
                      {{ newDatUser.choice_webinar }}<br>
                      <h3>Вебинары по развитию</h3>
                      <div>
                        <div v-for="item in checkedRadioWebinar" :key="item.value" class="d-inline-flex">
                          <div class="webinar-item" @click="changeItem(item.value)">
                            <div class="checkWeb" :class="showCheck(item.show)"></div>
                            <div style="padding-left: 6px">{{ item.text }}</div>
                          </div>
                        </div>
                      </div>
                      <v-btn
                        variant="text"
                        @click="saveDataWebinar()"
                        class="btn-mod"
                      >
                        Изменить
                      </v-btn>
                      <p> Зеленый - вебинар открыт</p>
                      <p> Красный - вебинар закрыт </p>
                    </div>
                  </v-col>
                </v-row>
              </transition>
              <transition name="fade">
                <v-row class="d-flex justify-center windowOpen" v-if="homeworksNo">
                  <v-col cols="11"
                         md="8"
                         align-self="center"
                         style="margin: auto "
                         class="text-center justify-center"
                         :key="render"
                  >
                    <div>
                      <h4>Доступ к ДЗ закрыт</h4>
                    </div>
                  </v-col>
                </v-row>
              </transition>
              <transition name="fade">
                <v-row class="d-flex justify-center windowOpen" v-if="homeworks">
                  <v-col cols="11"
                         md="8"
                         align-self="center"
                         style="margin: auto "
                         class="text-center justify-center"
                         :key="render"
                  >
                    <div>
                      <h3>Рассылка ДЗ</h3>
                      <div class="d-flex" style="flex-direction: column">
                        <div class="d-inline-flex justify-center">
                          <div style="margin-right: 6px" >
                            Начало рассылки
                          </div>
                          <div >
                            {{intensiveDataUser.createdAt}}
                          </div>
                        </div>
                        <div class="d-inline-flex justify-center">
                          <div style="margin-right: 6px">
                            Конец рассылки
                          </div>
                          <div>
                            {{intensiveDataUser.endingSend}}
                          </div>
                        </div>
                        <div>
                          <label for="tentacles" style="margin-right: 20px">Добавить месяцы (1-24):</label>

                          <input type="number"  name="tentacles" v-model="inputMonths"
                                 min="1" max="24" >
                        </div>
                        <v-btn
                          variant="text"
                          @click="setNewMonths()"
                          class="btn-mod"
                        >
                          Добавить
                        </v-btn>
                        <v-btn
                          variant="text"
                          @click="reduceNewMonths()"
                          class="btn-mod"
                        >
                          Уменьшить
                        </v-btn>

                      </div>
                    </div>
                  </v-col>
                </v-row>
              </transition>
              <transition name="fade">
                <v-row class="d-flex justify-center windowOpen" v-if="winCorrect">
                  <v-col cols="11"
                         md="8"
                         align-self="center"
                         style="margin: auto "
                         class="text-center justify-center"
                         :key="render"
                  >
                    <div>
                      <h3>Корректировка к реальной неделе </h3>
                     <div>Неделя, указанная  в базе </div>
                      {{intensiveDataUser.index_week}}
                     <v-btn
                          variant="text"
                          @click="correctWeekNW()"
                          class="btn-mod"
                        >
                          Изменить
                        </v-btn>
                      </div>
                </v-col>
                </v-row>
              </transition>
              <transition name="fade">
                <v-row class="d-flex justify-center windowOpen" v-if="firstStartWindow">
                  <v-col cols="11"
                         md="8"
                         align-self="center"
                         style="margin: auto "
                         class="text-center justify-center"
                         :key="render"
                  >
                    <div>
                      <h3>Первый шаг ДЗ</h3>
                      <div class="d-flex" style="flex-direction: column">
                        <div class="d-inline-flex justify-center">
                          <div style="margin-right: 6px" >
                            Начало рассылки
                          </div>
                          <div >
                            {{newDatUser.createdAt}}
                          </div>
                        </div>
                        <div>
                          <label for="tentacles" style="margin-right: 20px">Добавить месяцы (1-24):</label>

                          <input type="number"  name="tentacles" v-model="inputFirstMonths"
                                 min="1" max="24" >
                        </div>
                        <v-btn
                          variant="text"
                          @click="firstStartNW()"
                          class="btn-mod"
                        >
                          Стартовать
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </transition>
              <transition name="fade">
                <v-row class="d-flex justify-center windowOpen" v-if="changeWeekWin">
                  <v-col cols="11"
                         md="8"
                         align-self="center"
                         style="margin: auto "
                         class="text-center justify-center"
                         :key="render"
                  >
                    <div>
                      <h3>Изменить неделю</h3>
                      <div class="d-flex" style="flex-direction: column">
                        <div class="d-inline-flex justify-center">
                          <div style="margin-right: 6px" >
                            Действующая неделя
                          </div>
                          <div >
                            {{intensiveDataUser.index_week}}
                          </div>
                        </div>
                        <div>
                          <label for="tentacles" style="margin-right: 20px">Изменить (-6 до +6):</label>

                          <input type="number"  name="tentacles" v-model="inputWeek"
                                 min="-6" max="6" >
                        </div>
                        <v-btn
                          variant="text"
                          @click="changeInputWeek()"
                          class="btn-mod"
                        >
                          Изменить
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </transition>
            </div>
          </div>
        </div>
      </transition>

      <div @click="modalToggle" class="vuexplosive-modal-bg">

      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose, mdiAccountEdit } from '@mdi/js'
// :class="{redBorder: selectedOs === 'linux'}"
export default {
  name: 'popUp result',
  props: {
    visible: {
      default: false
    },
    userMail: {
      default: ''
    },
    nameUser: {
      default: ''
    },
    weekUser: {
      default: ''
    }
  },
  components: {
    SvgIcon
  },
  data: function () {
    return {
      correctWeek: null,
      showTable: false,
      selectedWeb: [],
      active: false,
      show: false,
      showWindow: false,
      path6: mdiClose,
      edit: mdiAccountEdit,
      newDatUser: null,
      intensiveDataUser: null,
      webinar: false,
      homeworks: false,
      homeworksNo: false,
      firstStartWindow: false,
      winCorrect: false,
      inputMonths: 1,
      inputFirstMonths: 1,
      changeWeekWin: 1,
      render: 0,
      loading: false,
      message: '',
      selected: [],
      selectedOs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      inputWeek: 1,
      radioWebinar: [
        {
          text: '0 - 2 мес.',
          value: 0,
          show: false
        },
        {
          text: '3 - 4 мес.',
          value: 1,
          show: false
        },
        {
          text: '5 - 6 мес.',
          value: 2,
          show: false
        },
        {
          text: '7 - 8 мес.',
          value: 3,
          show: false
        },
        {
          text: '9 - 10 мес.',
          value: 4,
          show: false
        },
        {
          text: '11 - 13 мес.',
          value: 5,
          show: false
        },
        {
          text: '14 - 18 мес.',
          value: 6,
          show: false
        },
        {
          text: '19 - 24 мес.',
          value: 7,
          show: false
        },
        {
          text: '24 - 29 мес.',
          value: 8,
          show: false
        },
        {
          text: 'Новые методики',
          value: 9,
          show: false
        }
      ],
      courses: [
        {
          title: 'Общий доступ',
          index: 'access_all',
          open: false
        },
        {
          title: 'ЧАТБОТ по сну',
          index: 'access_dream',
          open: false
        },
        {
          title: 'Рассылка ДЗ',
          index: 'assess_homeworks',
          open: false
        },
        {
          title: 'Вебинары по развитию',
          index: 'access_webinars',
          open: false
        },
        {
          title: 'Курс по эмоциям',
          index: 'access_emo',
          open: false
        },
        {
          title: 'Курс по эмоциям 3.0',
          index: 'access_emo_3',
          open: false
        },
        {
          title: 'Курс по речевому развитию',
          index: 'access_speak',
          open: false
        },
        {
          title: 'Участник интенсива',
          index: 'access_intensive',
          open: false
        },
        {
          title: 'Растим Звезду 1-0',
          index: 'access_intensive_1_0',
          open: false
        },
        {
          title: 'Растим Звезду 3-0',
          index: 'access_intensive_3_0',
          open: false
        }
      ]
    }
  },
  created () {
  },
  methods: {
    saveDataWebinar () {
      const sendData = '[' + this.selected + ']'
      // alert(sendData)
      const data = {
        index: sendData,
        mail: this.userMail
      }
      this.$store.dispatch('auth/changeWebinar', data).then(
        (res) => {
          this.newDatUser = res
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
    },
    correctWeekNW () {
      const data = {
        admin: this.currentUser.email,
        mail: this.userMail
      }
      this.$store.dispatch('auth/correctWeekNW', data).then(
        (res) => {
          this.intensiveDataUser = res
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
    },
    firstStartNW () {
      // alert(this.inputMonths)
      const data = {
        index: this.inputFirstMonths,
        mail: this.userMail
      }
      this.$store.dispatch('auth/firstStartHW', data).then(
        (res) => {
          this.newDatUser = res
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
    },
    changeInputWeek () {
      // alert(this.inputWeek)
      const data = {
        index: this.inputWeek,
        mail: this.userMail
      }
      this.$store.dispatch('auth/changeInputWeek', data).then(
        (res) => {
          this.intensiveDataUser = res
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
    },
    reduceNewMonths () {
      const data = {
        index: -Math.abs(this.inputMonths),
        mail: this.userMail
      }
      this.$store.dispatch('auth/addEndOfSendHW', data).then(
        (res) => {
          this.intensiveDataUser = res
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
    },
    changeAccess30 (chatId) {
      // alert(chatId)
      const data = {
        chatId: chatId
      }
      this.$store.dispatch('auth/openAccessEmo30', data).then(
        (res) => {
          // this.intensiveDataUser = res
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
    },
    setNewMonths () {
      // alert(this.inputMonths)
      const data = {
        index: this.inputMonths,
        mail: this.userMail
      }
      this.$store.dispatch('auth/addEndOfSendHW', data).then(
        (res) => {
          this.intensiveDataUser = res
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
    },
    changeItem (index) {
      for (let i = 0; i < this.selected.length; i++) {
        if (i === index) {
          if (this.selected[i] === 0) {
            this.selected[i] = 1
          } else {
            this.selected[i] = 0
          }
        }
      }
      this.render++
    },
    showCheck (index) {
      return index ? 'bg-green' : 'bg-red'
    },
    clearAll () {
      this.selectedOs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.radioWebinar = [
        {
          text: '0 - 2 мес.',
          value: 0,
          show: false
        },
        {
          text: '3 - 4 мес.',
          value: 1,
          show: false
        },
        {
          text: '5 - 6 мес.',
          value: 2,
          show: false
        },
        {
          text: '7 - 8 мес.',
          value: 3,
          show: false
        },
        {
          text: '9 - 10 мес.',
          value: 4,
          show: false
        },
        {
          text: '11 - 13 мес.',
          value: 5,
          show: false
        },
        {
          text: '14 - 18 мес.',
          value: 6,
          show: false
        },
        {
          text: '19 - 24 мес.',
          value: 7,
          show: false
        },
        {
          text: '24 - 29 мес.',
          value: 8,
          show: false
        },
        {
          text: 'Новые методики',
          value: 9,
          show: false
        }
      ]
    },
    modalToggle () {
      this.active = !this.active
    },
    checkAccessEmo3_0 (index) {
      if (this.newDatUser[index]) {
        return 'Открыто'
      } else {
        return 'Закрыто'
      }
    },
    checkAccess (index) {
      if (this.newDatUser[index]) {
        return 'Открыт'
      } else {
        return 'Закрыт'
      }
    },
    changeWeekHW () {
      if (this.intensiveDataUser.index_week) {
        this.webinar = this.homeworksNo = this.homeworks = this.firstStartWindow = false
        this.changeWeekWin = !this.changeWeekWin
      }
    },
    openStar_3_0 () {
      alert('4444')
      const data = {
        index: 'access_intensive_3_0',
        mail: this.userMail
      }
      this.$store.dispatch('auth/changeWebinar', data).then(
        (res) => {
          this.newDatUser = res
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
    },
    openFirstStartWin () {
      this.webinar = this.homeworksNo = this.homeworks = this.changeWeekWin = false
      this.firstStartWindow = !this.firstStartWindow
    },
    openCorrectWindow () {
      this.webinar = this.homeworksNo = this.homeworks = this.changeWeekWin = this.firstStartWindow = false
      this.winCorrect = !this.winCorrect
    },
    changeClass (index) {
      if (this.newDatUser[index]) {
        return 'colorGreen'
      } else {
        return 'colorRed'
      }
    },
    getUserTelegram (mail) {
      this.selected = []
      this.homeworksNo = this.homeworksNo = this.firstStartWindow = this.webinar = this.changeWeekWin = false
      this.newDatUser = this.intensiveDataUser = null
      this.$store.dispatch('auth/userTelegram', mail).then(
        (res) => {
          if (res) {
            this.newDatUser = res
            const newStr = res.choice_webinar.replace(/\[|\]/g, '')
            const arr = newStr.split(',').map(Number)
            for (let i = 0; i < arr.length; i++) {
              if (Number(arr[i]) === 1) {
                this.selected.push(1)
              } else {
                this.selected.push(0)
              }
            }

            // Открывать таблицу только после получения данных и заполнения selected
            this.showTable = true
            this.active = !this.active
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
      this.$store.dispatch('auth/userIntensive', mail).then(
        (res) => {
          this.intensiveDataUser = res
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
    },
    changeAccess (index) {
      const data = {
        index: index,
        mail: this.userMail
      }
      console.log(data)
      this.$store.dispatch('auth/changeAccess', data).then(
        (res) => {
          this.newDatUser = res
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
    },
    colorLight (key) {
      return key % 2 === 1 ? '' : 'colorLight'
    },
    cursorOpen (index) {
      if (index) {
        return 'cursorPointer'
      } else {
        return ''
      }
    },
    openNextWindow (index, open) {
      if (open) {
        // alert(index)
        switch (index) {
          case 'access_webinars':
            this.homeworksNo = this.homeworksNo = this.firstStartWindow = false
            this.webinar = !this.webinar
            break
          case 'assess_homeworks':
            if (this.newDatUser.assess_homeworks) {
              this.webinar = this.homeworksNo = this.firstStartWindow = false
              this.homeworks = !this.homeworks
            } else {
              this.webinar = this.homeworks = this.firstStartWindow = false
              this.homeworksNo = !this.homeworksNo
            }
            break
          default:
            this.webinar = this.homeworksNo = this.homeworks = this.firstStartWindow = false
        }
      }
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    checkedRadioWebinar () {
      const arr = this.radioWebinar
      for (let i = 0; i < this.selected.length; i++) {
        if (Number(this.selected[i]) === 1) {
          arr[i].show = true
        } else {
          arr[i].show = false
        }
      }
      return arr
    }
  },
  watch: {
    visible (oldVal, newVal) {
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
.paginationSelect {
  color: #fff7fd;
  font-size: 22px;
  margin: 12px 0;
}

.cursorPointer {
  cursor: pointer;
}
.size-160 {
  width: 160px;
  padding: 6px;
}
.vuexplosive-modal {
  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
  "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
  sans-serif;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
}

.redBorder {
  border: 1px solid red;
}

.vuexplosive-modal-container {
  background-color: transparent;
  width: 90%;
  height: 90%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border-radius: 5px;
}

.vuexplosive-modal-header {
  width: 96%;
  background-color: #b6d0ff;
}

.vuexplosive-modal-inner {
  background-color: transparent;
}
.vuexplosive-modal-inner-block {
  background-color: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.vuexplosive-modal-close {
  font-size: 18px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.vuexplosive-modal-content {
  width: 96%;
  font-size: 18px;
  color: #333;
  background-color: #b6d0ff;
  height: 600px;
  overflow: auto;
}

.vuexplosive-modal-bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
}

.vuexplosive-modal-explosion-gif {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
  opacity: 1;
  width: 100%;
  max-width: 100%;
  height: auto;
}

.vuexplosive-modal-footer {
  margin-top: 20px;
}

.vuexplosive-modal-hidden {
  display: none;
}

.vuexplosive-modal-visible {
  display: block;
}

.scale-enter-active {
  animation: bounce-in 0.3s;
}

.scale-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
