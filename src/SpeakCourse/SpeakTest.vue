<template>
  <div class="pb-16">
   <SpeakHeader class="mb-6"/>
    <v-row class="justify-center text-center flex-column pb-16" v-for="(item, key) in allTestes" :key="key">
      <v-col
        class="mx-auto py-4"
        cols="11"
        md="6"
      >
        <h5 class="my-2 ">
          {{item.title}}
        </h5>
        <img  class="img-test" :src="require('@/assets/img/test.png')" @click="openTest(item.link)">
      </v-col>
    </v-row>
<!--    {{dataCurrentDay}}-->
    <SpeakFooter/>
  </div>
</template>

<script>
import SpeakHeader from './SpeakHeader'
import SpeakFooter from './SpeakFooter'

export default {
  name: 'SpeakVideo',
  components: {
    SpeakHeader,
    SpeakFooter
  },
  methods: {
    openTest (link) {
      this.$router.push(link)
    }
  },
  data: () => ({
    dataUseFromApi: [],
    allTestes: [
      {
        title: 'Оцените  речевое развитие ребенка',
        link: 'test/testOne'
      },
      {
        title: 'Влияние беременности, родов и послеродового периода  на речевое развитие',
        link: 'test/testTwo'
      },
      {
        title: 'Мини диагностика',
        link: 'test/testThree'
      },
      {
        title: 'Роль слуха в развитии речи',
        link: 'test/testFour'
      },
      {
        title: 'Словарный запас ребенка',
        link: 'test/testFive'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
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
