<template>
  <div class="v-pop-collection" >
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
          <div class="vuexplosive-modal-inner ">
            <div>
              <svg-icon type="mdi" :path="path6" :size="44" style="color: white" @click="modalToggle"></svg-icon>
            </div>
            <div class="vuexplosive-modal-header d-flex justify-center py-4">
              <v-container>
                <v-row class="justify-center d-flex">
                  <v-col cols="11" class="d-flex justify-center">
                    <h3>
                      {{ userMail }} | {{nameUser}}
                    </h3>
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
                    <v-btn class="btn-mod" @click="sendMessageHelenBot()">
                      <div>
                        Отправить
                      </div>
                    </v-btn>
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
                            <h4 style="color: #b93151">У вас пустое письмо. Пожалуйста, заполните его.</h4>
                          </div>
                        </v-col>
                      </v-row>
                    </transition>
                  </v-col>
                </v-row>
              </v-container>
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
import { mdiClose, mdiVideoBox } from '@mdi/js'

export default {
  name: 'PopSendMessageHelenBot.vue',
  computed: {
    numbers: Array.from({ length: 23 }, (_, i) => i + 6)
  },
  props: {
    visible: {
      default: false
    },
    userMail: {
      default: ''
    },
    datUser: {
      default: ''
    },
    nameUser: {
      default: ''
    },
    weekUser: {
      default: ''
    },
    chatIdUser: {
      default: ''
    }
  },
  components: {
    SvgIcon
  },
  data: function () {
    return {
      active: false,
      show: false,
      messageArea: '',
      path6: mdiClose,
      edit: mdiVideoBox,
      newDatUser: null,
      resultLink: null,
      indexHomeWorks: null,
      windowsVideo: false,
      windowsText: false,
      indexVideo: null,
      contentNo: false,
      link: 'Ссылки не найдены',
      selectedNumber: null,
      number: 0,
      render: 0,
      loading: false,
      message: '',
      result: ''
    }
  },
  mounted () {
    this.messageArea = ''
    this.contentNo = false
    this.result = ''
  },
  created () {
    this.messageArea = ''
    this.contentNo = false
    this.result = ''
  },
  methods: {
    clearAll () {
      this.messageArea = ''
      this.contentNo = false
      this.result = ''
    },
    sendMessageHelenBot () {
      if (this.messageArea === '') {
        this.contentNo = true
      } else {
        this.contentNo = false
        const data = { chatId: this.chatIdUser, name: this.nameUser, msg: this.messageArea }
        // alert(this.idUser)
        this.$store.dispatch('auth/sendMessageOneHelenBot', data).then(
          (res) => {
            this.result = res
            this.messageArea = ''
            this.contentNo = false
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
    },
    modalToggle () {
      this.active = !this.active
    }
  },
  watch: {
    visible (oldVal, newVal) {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
.paginationSelect {
  color: #fff7fd;
  font-size: 22px;
  margin: 12px 0;
}

.vuexplosive-modal {
  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
  "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
  sans-serif;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
}

.vuexplosive-modal-container {
  background-color: transparent;
  width: 90%;
  height: 90%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  border-radius: 5px;
}

.vuexplosive-modal-header {
  width: 96%;
  background-color: #b6d0ff;
}

.vuexplosive-modal-inner {
  background-color: transparent;
  height: 600px;
}

.vuexplosive-modal-close {
  font-size: 18px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.vuexplosive-modal-content {
  width: 86%;
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
