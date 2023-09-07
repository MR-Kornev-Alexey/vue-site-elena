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
            src="../../assets/img/landing/cards-pattern-2.png"
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
              <li>участие в конкурсах и творческих заданиях</li>
              <li>трансформация родительских творческих и лидерских способностей</li>
              <li>ваш малыш сможет стать звездой своего первого видеоклипа</li>
              <li>творческий речевой подарок от команды по окончанию курса</li>
              <li>ориентировочный старт - октябрь 2023 года </li>
              <li>Вы можете сделать предзапись и мы Вас внесем в лист ожидания</li>
            </ul>
          </v-card-text>
          <v-card-actions class="d-flex justify-center text-center pb-4">
                          <a href="https://t.me/superHelenBot?start=start" style="text-decoration: none" target="_blank">
                            <v-btn class="btn-dream-landing-pay">
                              Предзапись
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
              <li>конспекты и другие дополнительные материалы</li>
              <li>комфортный формат получения информации&nbsp;</li>
              <li>доступ к рассылочному чат-боту</li>
            </ul>
            <div class="text-center price-money" >
             9.900 рублей
            </div>
          </v-card-text>
          <v-card-actions class="d-flex justify-center text-center pb-4">
            <a href="https://payform.ru/3f2CPf4/" target="_blank" style="text-decoration: none">
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
