<template>
  <div class="footer d-flex  justify-space-around pt-2 pb-2">
    <router-link :to="'module'">
      <div class="text-center item-menu" @click="resetBlock()">
        <div>
          <img class="icon-menu" src="http://116.202.181.94/dev1_3/img/home-new.png" alt="Home">
        </div>
        <div class="footer-menu pt-1">
         Месяцы
        </div>
      </div>
    </router-link>
    <router-link :to="'/first-test'">
    <div class="text-center  item-menu" @click="resetBlock()">
      <div >
        <img class="icon-menu" src="http://116.202.181.94/dev1_3/img/test-new.png" alt="Video">
      </div>
      <div class="footer-menu pt-1">
        Тесты
      </div>
    </div>
    </router-link>
    <router-link :to="'/list'">
      <div class="text-center  item-menu" @click="resetBlock()">
        <div >
          <img class="icon-menu" src="http://116.202.181.94/dev1_3/img/menu-new.png" alt="Video">
        </div>
        <div class="footer-menu pt-1">
        Разделы
        </div>
      </div>
    </router-link>
    <router-link :to="'/guide'">
    <div class="text-center item-menu" @click="resetBlock()" >
      <div>
        <img class="icon-menu" src="http://116.202.181.94/dev1_3/video-new.png" alt="book">
      </div>
      <div class="footer-menu pt-1">
        Видео
      </div>
    </div>
    </router-link>
    <router-link :to="'/more'">
    <div class="text-center item-menu" @click="resetBlock()" >
      <div>
        <img class="icon-menu" src="http://116.202.181.94/dev1_3/img/more-new.png" alt="arrow">
      </div>
      <div class="footer-menu pt-1">
        Больше
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'v-footer',
  methods: {
    resetBlock () {
      // (для 0-4 мес)
      // const elem30 = document.getElementById('rec462426203')
      // elem30.styles.display = 'none'
      // const elem36 = document.getElementById('rec462426202')
      // elem36.styles.display = 'none'

      // (для 5-8 мес)
      // const elem30 = document.getElementById('rec463282955')
      // elem30.styles.display = 'none'
      // const elem36 = document.getElementById('rec463282956')
      // elem36.styles.display = 'none'

      // (для 9-12 мес)
      // const elem30 = document.getElementById('rec464432577')
      // elem30.styles.display = 'none'
      // const elem36 = document.getElementById('rec464432578')
      // elem36.styles.display = 'none'

      // (для 0-12 мес)
      const elem30 = document.getElementById('rec468149588')
      elem30.style.display = 'none'
      const elem36 = document.getElementById('rec468149589')
      elem36.style.display = 'none'
    }
  },
  data: () => ({

  })
}
</script>

<style >
       #rec439391078, #rec439517814  {
         background: linear-gradient(134deg, rgb(252, 252, 252) 0%, rgb(227, 240, 255) 40%, rgb(232, 194, 255) 80%);
       }
</style>
