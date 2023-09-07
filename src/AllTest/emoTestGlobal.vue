<template>
  <div class="" style="color: #172669;">
    <testHeader :title="titleOut"  :mainLink="mainLink" />
    <commonStartTest @startTestPsy="startTest" class="mt-md-6 mt-lg-6 mt-sm-0"/>
     <Footer class="footer-down"/>
  </div>
</template>

<script>
import Footer from '../views/Footer'
import testHeader from '@/AllTest/TestHeader'
import commonStartTest from '@/AllTest/common/commonStartTest'

export default {
  name: 'developTest',
  components: {
    testHeader,
    commonStartTest,
    Footer
  },
  methods: {
    startTest (index) {
      this.$store.dispatch('allTest/getMonthOfEmoOfTest', ['emo', index, []])
      this.$router.push('/emoTestSecond')
    },
    checkScreenWidth () {
      if (window.innerWidth <= 480) {
        this.footerClass = 'footer'
      } else {
        this.footerClass = 'footer-down'
      }
    }
  },
  data: () => ({
    titleOut: 'Эмоциональное развитие',
    mainLink: '/emoTestGlobal',
    footerClass: 'footer-down'
  }),
  mounted () {
    if (this.currentMonth > 12) {
      this.$router.push('/speakTestMore12')
    }
    this.checkScreenWidth()
    window.addEventListener('resize', this.checkScreenWidth)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.checkScreenWidth)
  }
}
</script>

<style scoped>

</style>
