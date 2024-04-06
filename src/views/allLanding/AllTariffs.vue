<template>
  <div>
    <v-row class="d-flex justify-center text-center " style="margin: 0; padding: 0">
      <v-col
        cols="12"
        md="5"
        class="d-flex justify-center text-center"
      >
        <h2 class="h2-lending">Наши тарифы</h2>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center text-center">
      <v-col
        cols="11"
        md="auto"
        class="d-flex-column justify-center text-center"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="align-end text-white"
            height="240"
            src="../../assets/img/landing/cards-pattern-1.png"
            cover
          >
            <v-card-title style=" font-family: 'Pattaya', sans-serif; font-size: 48px; padding-bottom: 14px">V.I.P.
            </v-card-title>
          </v-img>
          <v-card-text class="text-left pl-8 ">
            <h6 style="font-weight: bold; ">всего три места</h6>
            <ul class="ul-tariff">
              <li>все опции тарифа "Все и сразу"</li>
              <li>персональный план прохождения интенсива</li>
              <li>индивидуальное сопровождение и консультации автором курса</li>
            </ul>
            <div class="text-center price-money" >
              39 900 рублей
            </div>
          </v-card-text>
          <v-card-actions class="d-flex justify-center text-center pb-4">
            <a href="https://payform.ru/rv3OEYy/" style="text-decoration: none" target="_blank">
              <v-btn class="btn-dream-landing-pay">
                Купить
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="11"
        md="auto"
        class="d-flex-column justify-center text-center"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="align-end text-white"
            height="240"
            src="../../assets/img/landing/cards-pattern-1.png"
            cover
          >
            <v-card-title style=" font-family: 'Pattaya', sans-serif; font-size: 48px; padding-bottom: 14px">Все и
              сразу
            </v-card-title>
          </v-img>
          <v-card-text class="text-left pl-8 ">
            <p style="font-weight: bold"> В состав входит:</p>
            <ul class="ul-tariff">
              <li>бессрочный доступ ко всем материалам курса&nbsp;</li>
              <li>пошаговая стратегия запуска речи</li>
              <li>5 тестов для оценки речевого развития</li>
              <li>более 30 видео по ключевым направлениям речевого развития ребенка</li>
              <li>более 150 практических заданий для ежедневной самостоятельной работы</li>
              <li>4 живых вебинара с возможностьью зажать вопросы и получить разбор</li>
              <li>конспекты и другие дополнительные материалы</li>
              <li>комфортный формат получения информации&nbsp;</li>
              <li>доступ к рассылочному чат-боту</li>
            </ul>
            <p style="font-weight: bold">только для данного тарифа:</p>
            <ul class="ul-tariff">
              <li>регулярная обратная связь от куратора и автора курса</li>
              <li>возможность получить ответы по всем возникающим вопросам</li>
              <li>персональные рекомендации по выполнению практических заданий</li>
              <li>поддержка в групповом чате</li>
              <li>творческий речевой подарок от команды по окончанию курса</li>
            </ul>
            <div class="text-center price-old" >
              15 900 рублей
            </div>
            <div class="text-center price-money" >
              12 900 рублей
            </div>
          </v-card-text>
          <v-card-actions class="d-flex justify-center text-center pb-4">
                          <a href="https://payform.ru/3q3OELH/" style="text-decoration: none" target="_blank">
                            <v-btn class="btn-dream-landing-pay">
                             Купить
                            </v-btn>
                          </a>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="11"
        md="auto"
        class="d-flex-column justify-center text-center"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="align-end text-white"
            height="240"
            src="../../assets/img/landing/cards-pattern-1.png"
            cover
          >
            <v-card-title style=" font-family: 'Pattaya', sans-serif; font-size: 48px; padding-bottom: 14px">Я сама
            </v-card-title>
          </v-img>
          <v-card-text class="text-left pl-8">
            <p style="font-weight: bold"> В состав входит:</p>
            <ul class="ul-tariff">
              <li>бессрочный доступ ко всем материалам курса&nbsp;</li>
              <li>пошаговая стратегия запуска речи</li>
              <li>5 тестов для оценки речевого развития</li>
              <li>более 30 видео по ключевым направлениям речевого развития ребенка</li>
              <li>более 150 практических заданий для ежедневной самостоятельной работы</li>
              <li>4 живых вебинара</li>
              <li>конспекты и другие дополнительные материалы</li>
              <li>комфортный формат получения информации&nbsp;</li>
              <li>доступ к рассылочному чат-боту</li>
            </ul>
            <div class="text-center price-old" >
              9 900 рублей
            </div>
            <div class="text-center price-money" >
             7 900 рублей
            </div>
          </v-card-text>
          <v-card-actions class="d-flex justify-center text-center pb-4">
            <a href="https://payform.ru/qf3OEHD/" target="_blank" style="text-decoration: none">
              <v-btn class="btn-dream-landing-pay">
                Купить
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AllTariffs',
  props: {
    numberLanding: {
      default: 1
    }
  }
}
</script>

<style scoped>

</style>
