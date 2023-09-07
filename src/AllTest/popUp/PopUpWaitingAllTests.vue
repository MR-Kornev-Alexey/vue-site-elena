<template>
  <div class="v-pop-collection">
    <div
     :class="{'vuexplosive-modal-hidden': !active, 'vuexplosive-modal-visible': active}"
      @keydown.esc="active = false"
      class="vuexplosive-modal"
      role="dialog"
      tabindex="-1"
    >
      <transition name="scale">
        <div class="vuexplosive-modal-container" v-if="active">
          <div class="vuexplosive-modal-inner ">
            <div class="vuexplosive-modal-header d-flex justify-center text-center py-4" style="color: white">
              <v-container>
                <v-row class="d-flex justify-center" v-if="message">
                  <v-col cols="11" md="6">
                    <H3 v-html="message"></H3>
                    Обратитесь, пожалуйста в <br>
                    <v-btn class="btn-dream-info">
                      <a href="https://t.me/mrk_service">Службу Поддержки</a>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                  <v-col cols="11" md="6" alt="img">
                    <img :src="img">
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

export default {
  name: 'PopUpWaitingAllTests.vue',
  props: {
    visible: {
      default: false
    },
    userMail: {
      default: ''
    },
    idUser: {
      default: ''
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    dataUserTest () {
      return this.$store.state.auth.userTableNew
    }
  },
  mounted () {
    this.message = ''
    this.$store.dispatch('auth/loginUserTable', this.currentUser.email).then(
      (res) => {
        if (res === 'notFound') {
          this.message = 'Пользователь не найден'
        }
        if (res === 'notDreamAccess') {
          this.message = 'Доступ к тесту закрыт'
        } else {
          this.dataOfTableUser = res
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
  },
  data: function () {
    return {
      active: false,
      img: require('@/assets/img/loading.gif'),
      show: false,
      loading: false,
      message: '',
      dataOfTableUser: null
    }
  },
  created () {
    this.messageArea = ''
    this.contentNo = false
    this.result = ''
  },
  methods: {
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
.btn-dream-info {
  background-color: #ffc5ac;
  height: 60px;
  width: 280px;
  border-radius: 16px;
  border: 2px solid #11192c;
  line-height: 30px;

  a {
    text-decoration: none;
    color: #11192CFF;
  }
}

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
