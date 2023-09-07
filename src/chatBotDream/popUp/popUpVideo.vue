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
          <div class="vuexplosive-modal-inner ">
            <div style="width: 90%;margin:auto" class="">
              <svg-icon type="mdi" :path="close"  color="white" size="42px" @click="modalToggle"></svg-icon>
            </div>
            <div class="vuexplosive-modal-header d-flex justify-space-around">
              <div>
                <v-flex class="title-new text-white"  style="font-size: 20px">
                  {{inTitle}}
                </v-flex>
              </div>

            </div>

            <div class="vuexplosive-modal-content text-center">

              <div  class="justify-center ">
                <iframe
                  width="90%"
                  title="YouTube video player"
                  :height="heightVideo"
                  :src="inLink"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

            </div>

          </div>
        </div>
      </transition>

      <div @click="modalToggle"  class="vuexplosive-modal-bg">

      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWindowClose } from '@mdi/js'

export default {
  name: 'VuexplosiveModal',
  computed: {
    heightVideo () {
      if (this.windowHeight < 600) {
        return 400
      } else if (this.windowHeight < 900) {
        return 500
      } else {
        return 660
      }
    },
    setLink () {
      return this.inLink
      // return 'https://www.youtube.com/embed/nsHPtpOEdhQ?rel=0'
    }
  },
  components: {
    SvgIcon
  },
  props: {
    visible: {
      default: false
    },
    inTitle: {
      default: 'Видео'
    },
    videoId: {
      default: null
    },
    inLink: {
      default: null
    }
  },
  data: function () {
    return {
      active: false,
      show: false,
      renderAddInn: 0,
      explosionGifUrl: '',
      explosionGifUrlBlob: '',
      windowWidth: null,
      windowHeight: null,
      close: mdiWindowClose
    }
  },
  created () {
    fetch(this.explosionGifUrl)
      .then(response => response.blob())
      .then(images => {
        this.explosionGifUrlBlob = URL.createObjectURL(images)
      })
    window.addEventListener('resize', this.updateWidth)
    window.addEventListener('resize', this.updateHeight)
    this.updateWidth()
    this.updateHeight()
  },
  methods: {
    updateWidth () {
      this.windowWidth = window.innerWidth
    },
    updateHeight () {
      this.windowHeight = window.innerHeight
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

<style scoped>
.paginationSelect{
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
}
.vuexplosive-modal-inner{
  background-color: transparent;
}
.vuexplosive-modal-close {
  font-size: 18px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.vuexplosive-modal-content {
  font-size: 18px;
  color: #333;
}
.vuexplosive-modal-bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
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
