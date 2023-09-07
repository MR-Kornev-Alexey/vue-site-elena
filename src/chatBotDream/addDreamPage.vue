<template>
  <v-container>
    <DreamHeader/>
    <v-row class="justify-center text-center mt-6">
      <v-col
        cols="12"
        md="auto"
      >
        <h3>Ответы на вопросы</h3>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center"
           v-for="(n,key) in arrayOfFAQ"
           :key="key"
           @click="selectOfFAQ(key)" >
      <v-col             cols="12"
                         md="auto"
                         class="justify-center text-center">

        <div>
          <v-btn class="btn-dream-faq">
            <p>
              {{ n.title }}
            </p>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center text-center" >
      <v-col
        cols="12"
        md="auto"
      >
        <v-btn class="btn-dream-faq" >
          <p>
            <a href="http://116.202.181.94/pdf/twins.pdf" style="color: #333333; text-transform: uppercase; text-decoration: none;">
              Укладываение близнецов</a>
          </p>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-6">
      <v-col cols="11" md="6" class="d-flex justify-center">
        <router-link to="/firstDreamPage" class="nav-link">
        <v-btn  class="btn-dream-back"  >
          Назад
        </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <popUpVideo :visible="showVideo" :inLink="linkVideo" :inTitle="titleVideo" />
  </v-container>
</template>

<script>
import DreamHeader from './DreamHeader'
import popUpVideo from '@/chatBotDream/popUp/popUpVideo'
export default {
  name: 'addDreamPage',
  components: {
    DreamHeader,
    popUpVideo
  },
  methods: {
    selectOfFAQ (index) {
      this.showVideo = !this.showVideo
      this.titleVideo = this.arrayOfFAQ[index].title
      this.linkVideo = 'https://www.youtube.com/embed/' + this.arrayOfFAQ[index].link + '?rel'
    },
    goToTwin () {
      window.location.href = 'http://116.202.181.94/pdf/twins.pdf'
    }
  },
  data: () => ({
    showVideo: false,
    linkVideo: '',
    titleVideo: '',
    arrayOfFAQ: [
      {
        text: 'Стресс и привязанность при плаче',
        title: 'Стресс и привязанность при плаче',
        link: 'jgOurBQPyeA'
      },
      {
        text: 'Обязательная поддержка родных ',
        title: 'обязательная поддержка родных',
        link: 'hMh48kvR2Cc'
      },
      {
        text: 'Нужна ли пустышка при засыпании',
        title: 'Ассоциация на пустышку',
        link: 'CKrJC3Mraqo'
      },
      {
        text: 'Как успокоится маме',
        title: 'как успокоится маме',
        link: 'PZNCYyJAgmQ'
      },
      {
        text: 'Пеленание ребенка',
        title: 'пеленание ребенка',
        link: 'WyMx1dK2twU'
      },
      {
        text: 'Рвота при засыпании',
        title: 'рвота при засыпании',
        link: 'WC3B2AliqXA'
      },
      {
        text: 'Раскачивается во время засыпания',
        title: 'Раскачивание во время засыпания ',
        link: '3SxJac3J7p8'
      },
      {
        text: 'Сосание пальчика при засыпании',
        title: 'сосание пальчика ',
        link: 'l4eRF7nKa_0'
      },
      {
        text: 'Никогда не сдавайся',
        title: 'я сдалась',
        link: 'P8QZkYbQyDw'
      }
    ]
  })
}
</script>

<style scoped>

</style>
