<template>
  <div>
    <v-row>
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6">
        <h2 class="h2-lending-new mx-auto" style="">Как подключится к системе?</h2>
      </v-col>
    </v-row>
    <v-row style="z-index: 224">
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6" style="z-index: 300">
        <h3 class="h3-lending-new mx-auto" >Инструкция</h3>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8" cols="11">
        <div class="mx-auto">
          <p>Приветствеуем вас в нашем комьюнити</p>
          <p>В системе функционируют данный <strong>сервер</strong> и два бота  <strong>"HelenBot"</strong> и бот  <strong>"Рассылка от Елены..."</strong>, каждый из которых предназначен для разных целей</p>
          <p>Для успешной работы вам необходимо сделать несколько шагов</p>
          <p class="step my-2"><strong >1 шаг:</strong> Регистрация на сервере</p>
          <p><strong>Сервер</strong> содержит Личный кабинет (ЛК), обеспечивает доступ к Web-приложениям, позволяет
            менять данные.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex-column justify-center mx-auto" md="6" cols="11">
        <div class="mx-auto">
          <h3 class="h3-lending-new mx-auto mt-6" >Итак, переходим по ссылке на  <a href="/register"> страницу регистрации</a></h3>
          <a href="/register">
              <v-img :src="require('@/assets/img/landing/instruction/img2.png')" alt="main"
                 class=""></v-img></a>
        </div>
        <h5 class="h3-lending-new mx-auto" >Регистрируемся.<br>Важно, емейл должен сопадать с емейлом в HelenBot</h5>
        <h3 class="h3-lending-new mx-auto mt-6" >Заходим в  <a href="/login">Личный кабинет</a></h3>
        <a href="/login">
          <v-img :src="require('@/assets/img/landing/instruction/img3.png')" alt="main"
                 class=""></v-img></a>
        <h3 class="h3-lending-new mx-auto mt-6" >В Личном кабинете у вас будет доступ k приложениям</h3>
        <a href="/login">
          <v-img :src="require('@/assets/img/landing/instruction/img5.png')" alt="main"
                 class=""></v-img></a>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8" cols="11">
        <div class="mx-auto">
          <p class="step my-2"><strong >2 шаг:</strong> Регистрация в HelenBot</p>
          <h3 class="h3-lending-new mx-auto mt-6" >Переходим в <a href="https://t.me/mrk_new_bot">HelenBot</a></h3>
          <a href="https://t.me/mrk_new_bot">
            <v-img :src="require('@/assets/img/landing/instruction/img6.png')" alt="main"
                   class=""></v-img></a>
            <p><strong>HelenBot</strong> предназначен для выдачи информационных материалов, решения текущих задач и
            общей
            информационной рассылки, он обеспечивает обратную связь, то есть пользователи могут взаимодействовать с ним,
            получать дополнительную информацию.
          </p>
          <p>
            <strong>N.B.</strong> Email на данном сервере и в HelenBot должны быть синхронизированы.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8" cols="11">
        <div class="mx-auto">
          <p class="step my-2"><strong>3 шаг:</strong> СТАРТ  в боте "Рассылка от Елены Корневой"</p>
          <h3 class="h3-lending-new mx-auto mt-6" >Переходим в <a href="https://t.me/helen_root_bot">"Рассылка от Елены Корневой"</a></h3>
          <a href="https://t.me/helen_root_bot">
            <v-img :src="require('@/assets/img/landing/instruction/img7.png')" alt="main"
                   class=""></v-img></a>
            <p><strong>Бот "Рассылка..."</strong> предназначен только для рассылки домашних заданий (ДЗ) и теоретических материалов.
            Обратной связи нет - только получение писем. Рекомендован, если вы планируете получать ДЗ и другие материалы.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row style="z-index: 224">
      <v-col cols="11"
             md="auto"
             class="justify-center d-flex-column text-center mx-auto mt-md-6" style="z-index: 300">
        <h3 class="h3-lending-new mx-auto" >Остались вопросы</h3>
      </v-col>
    </v-row>
    <v-row class="d-flex-column justify-center" >
      <v-col cols="11" md="6" class="d-flex justify-center">
        <a href="https://wa.me/4917625187846?text=Здравствуйте..." style="text-decoration: none" target="_blank">
          <v-btn class="btn-dream-landing text-center" style="z-index: 300">
            <img :src="require('@/assets/img/social/icon-8.png')" alt="whatsUpp" class="noMoneyIcon"> Написать
          </v-btn>
        </a>
      </v-col>
      <v-col cols="11" md="6" class="d-flex justify-center">
        <a href="https://t.me/mrk_service" style="text-decoration: none" target="_blank">
          <v-btn class="btn-landing-blue text-center" style="z-index: 300">
            <img :src="require('@/assets/img/social/icon-2.png')" alt="whatsUpp" class="noMoneyIcon"> Написать
          </v-btn>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'InstructionCommon'
}
</script>

<style scoped>
.step {
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
}

</style>
