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
              <h3>
                Пользователь: {{ userMail }} | {{nameUser}} | {{weekUser}} неделя
              </h3>
            </div>

            <div class="vuexplosive-modal-content text-center pb-8">
              <div v-for="(item,key) in courses" :key="key">
                <div class="d-inline-flex justify-center" style="width: 96%">
                  <div class="size-20-left" :class="colorLight(key)">
                    {{ item.title }}
                  </div>
                  <div class="size-20" :class="colorLight(key)" style="cursor: pointer">
                    <svg-icon type="mdi" :path="edit" :size="20"  @click="openVideo(item.index)"></svg-icon>
                  </div>
                </div>
              </div>
              <v-row class="d-flex justify-center mt-4" >
                <v-col cols="11"  md="4">
                  <div class="py-4 px-4">
                    <h4>
                       другой вариант
                    </h4>
                      <v-text-field
                        type="number"
                        step="any"
                        min="0"
                        ref="input"
                        :rules="[numberRule]"
                        v-model.number="number"
                      ></v-text-field>
                  </div>
                  <v-btn class="btn-pay"  @click="openVideo(number)">
                       Выбрать
                  </v-btn>
                </v-col>
              </v-row>
              <div :key="render" >
                <v-row class="HW-windows-beige" v-if="windowsVideo" >
                  <v-col cols="11" >
                    <div class="py-4 px-4">
                      <div>
                        <strong>Индекс задания:</strong> {{ indexHomeWorks }} | {{indexVideo}}
                      </div>
                      <div class="text-left">
                        <a :href="resultLink" class="a-btn" target="_blank">
                          Перейдите по ссылке </a>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row class="HW-windows" v-if="windowsText">
                  <v-col cols="11" >
                    <div class="py-4 px-4">
                      <div>
                        <strong>Индекс задания:</strong> {{ indexHomeWorks }}  | {{indexVideo}}
                      </div>
                      <div class="text-left">
                        {{resultLink}}
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
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
import homeworks from '../../lib/send_0_104'

export default {
  name: 'popUp HW',
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
    }
  },
  components: {
    SvgIcon
  },
  data: function () {
    return {
      active: false,
      show: false,
      path6: mdiClose,
      edit: mdiVideoBox,
      newDatUser: null,
      resultLink: null,
      indexHomeWorks: null,
      windowsVideo: false,
      windowsText: false,
      indexVideo: null,
      link: 'Ссылки не найдены',
      selectedNumber: null,
      number: 0,
      render: 0,
      numberRule: val => {
        if (val < 0) return 'Введите положительное число '
        return true
      },
      courses: [
        {
          title: 'Последнее ДЗ',
          index: 0
        },
        {
          title: 'Последнее ДЗ минус 1',
          index: 1
        },
        {
          title: 'Последнее ДЗ минус 2',
          index: 2
        },
        {
          title: 'Последнее ДЗ минус 3',
          index: 3
        },
        {
          title: 'Последнее ДЗ минус 4',
          index: 4
        },
        {
          title: 'Последнее ДЗ минус 5',
          index: 5
        }
      ]
    }
  },
  created () {
  },
  methods: {
    clearAll () {
      this.newDatUser = null
      this.resultLink = null
      this.indexHomeWorks = null
      this.windowsVideo = this.windowsText = this.indexVideo = false
    },
    calculateAllIndexOfLink (fullWeek) {
      const today = new Date()
      const dayOfWeek = today.getUTCDay()
      // console.log("dayOfWeek ----- ", dayOfWeek )
      let indexLink = null
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        indexLink = (fullWeek <= 9 ? '0' + fullWeek : fullWeek) + '-01'
      } else if (dayOfWeek <= 5) {
        indexLink = (fullWeek <= 9 ? '0' + fullWeek : fullWeek) + '-0' + dayOfWeek
      }
      // console.log("indexLink --- ", indexLink)
      return indexLink
    },
    modalToggle () {
      this.active = !this.active
    },
    checkKind (myString) {
      if (myString.includes('https://youtu.be')) {
        this.windowsText = false
        this.windowsVideo = true
      } else {
        this.windowsText = true
        this.windowsVideo = false
      }
    },
    openVideo (index) {
      if (this.number > 20) {
        index = this.number = 20
      }
      this.resultLink = null
      this.indexVideo = null
      this.windowsText = false
      this.windowsVideo = false
      const indexWeek = this.calculateAllIndexOfLink(this.weekUser)
      const object = homeworks.find(obj => obj.id === indexWeek)
      const indexToday = homeworks.indexOf(object)
      this.indexHomeWorks = homeworks[indexToday - index].id
      this.indexVideo = homeworks[indexToday - index].index
      this.resultLink = homeworks[indexToday - index].link
      this.render++
      this.checkKind(homeworks[indexToday - index].link)
    },
    colorLight (key) {
      return key % 2 === 1 ? '' : 'colorLight'
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
