<template>
<div>
  <v-row>
    <v-col cols="11"
           md="auto"
           class="justify-center d-flex text-center mx-auto">
      <h2 class="h2-title-second pb-3">Как это работает</h2>
    </v-col>
  </v-row>
  <v-row justify="center" class="start-menu" v-on:click="show0 = !show0">
    <v-col      cols="11"
                md="0"
                align-self="center"
                style="margin: auto "
                class="text-center"
    >               <button  class="text-instagram">
     Запись на консультацию
    </button>
    </v-col>
  </v-row>
  <transition name="fade">
    <v-row class="d-flex justify-center" v-if="show0">
      <v-col      cols="11"
                  md="6"
                  align-self="center"
                  class="text-center"
      >
        <div class="mb-6 d-flex justify-center pt-3">
          <p class="align-self-center d-flex">
            Вы отправляете запрос на аудит в Службу поддержки.
            </p>
        </div>
      </v-col>
    </v-row>
  </transition>
</div>
</template>

<script>
export default {
  name: 'orderOfWork',
  data () {
    return {
      show0: false
    }
  }
}
</script>

<style scoped>

</style>
