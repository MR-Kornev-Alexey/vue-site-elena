<template>
<div>
  <v-row class="justify-center d-flex pt-6">
    <v-col cols="11" md="6" class="d-flex ">
      <h4 class="d-inline-flex small-profile">
        <div class="profile-bold">
          Курс "Материнство"
        </div>
      </h4>
    </v-col>
  </v-row>
  <v-row class="justify-center d-flex pt-6">
    <v-col cols="11" md="6" class="d-flex ">
      <h4 class="d-inline-flex small-profile">
         Привет {{datoFromAPI}}
      </h4>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'newCourse',
  computed: {
    datoFromAPI () {
      return window.Telegram.WebApp?.initDataUnsafe?.user?.username
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}

</style>
<!--{ "initData": "query_id=AAGw7n1AAAAAALDufUBCGcjk&user=%7B%22id%22%3A1081994928%2C%22first_name%22%3A%22%D0%A1%D0%BB%D1%83%D0%B6%D0%B1%D0%B0%20%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B8%22%2C%22last_name%22%3A%22%D0%95%D0%BB%D0%B5%D0%BD%D1%8B%20%D0%9A%D0%BE%D1%80%D0%BD%D0%B5%D0%B2%D0%BE%D0%B9%22%2C%22username%22%3A%22mrk_service%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1695393549&hash=d9c732cfd2b8237d0f86bbfaebf0ad14cf7c18ef88e8f05388c56c48b8c22016", -->
<!--"initDataUnsafe": { "query_id": "AAGw7n1AAAAAALDufUBCGcjk", -->
<!--"user": { "id": 1081994928, "first_name": "Служба Поддержки", "last_name": "Елены Корневой", "username": "mrk_service", "language_code": "ru", "allows_write_to_pm": true }, -->
<!--"auth_date": "1695393549", "hash": "d9c732cfd2b8237d0f86bbfaebf0ad14cf7c18ef88e8f05388c56c48b8c22016" }, -->
<!--"version": "6.9", "platform": "web", "colorScheme": "light", -->
<!--"themeParams": { "bg_color": "#ffffff", "button_color": "#3390ec", "button_text_color": "#ffffff", "hint_color": "#707579", "link_color": "#00488f", "secondary_bg_color": "#f4f4f5", "text_color": "#000000" },-->
<!--"isExpanded": true, "viewportHeight": 639, "viewportStableHeight": 639, "isClosingConfirmationEnabled": false, "headerColor": "#ffffff", "backgroundColor": "#ffffff",-->
<!--"BackButton": { "isVisible": false },-->
<!--"MainButton": { "text": "CONTINUE", "color": "#3390ec", "textColor": "#ffffff", "isVisible": false, "isProgressVisible": false, "isActive": true }, -->
<!--"HapticFeedback": {}, -->
<!--"CloudStorage": {} }-->
