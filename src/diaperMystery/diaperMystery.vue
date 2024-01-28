<template>
<div>
  <v-row class="row-blue d-flex justify-center text-center pt-4">
    <v-col
      cols="11" md="8"
    >
      <v-img
        :src="require('@/assets/img/emo/icon-emo.png')"
        style="max-height: 300px"
      >
        <div class="sorry">Сожалею</div>
      </v-img>

    </v-col>
  </v-row>
  <v-row class="row-blue d-flex justify-center text-center pt-4">
    <v-col
      cols="11" md="7"
    >
      <h3 class="">Новое Web - приложение "Тайна подгузника" на данном сайте пока в разработке.</h3>
      <p>Работающее Web - приложение можно найти на <strong>старом сайте.</strong></p>
      <v-row class="row-blue d-flex justify-center text-center pt-4">
        <v-col
          cols="11" md="7"
        >
          <a href="http://elenakorneva.ru/members/login" target="_blank">
            <v-btn class="btn-dream-next mx-auto">
              <p>
                перейти
              </p>
            </v-btn>
          </a>
        </v-col>
      </v-row>
      <v-row class="row-blue d-flex justify-center text-center pt-4">
        <v-col
          cols="12" md="7"
        >
          <p >Если у вас на получается открыть Web - приложение, то прошу Вас обратиться в <strong>поддержку.</strong></p>
        </v-col>
      </v-row>

      <v-row class="row-blue d-flex justify-center text-center pt-4">
        <v-col
          cols="11" md="7"
        >
          <a href="https://t.me/mrk_service" target="_blank">
            <v-btn class="btn-dream-next mx-auto">
              <p>
                обратиться
              </p>
            </v-btn>
          </a>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'diaperMystery'
}
</script>

<style lang="scss" scoped>
.sorry {
  color: #f11616;
  padding-top: 150px;
  justify-items: center;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}

</style>
