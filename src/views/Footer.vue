<template>
  <div style=" background-color: #8672a4">
    <v-row class="d-flex justify-center text-center footer" style="margin: 0; padding: 0;">
      <v-col
        md="12"
      >
        <div v-for="(item,key) in icons " :key="key" class="social-line">
          <a :href="item.link">
            <img :src="item.icons" :alt="item.alt" class="icons-img">
          </a>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="start-menu" v-on:click="show = !show">
      <v-col      cols="11"
                  md="0"
                  align-self="center"
                  style="margin: auto "
                  class="text-center"
      >               <button  class="text-rec">
        Реквизиты
      </button>
      </v-col>
    </v-row>
    <transition name="fade">
      <v-row class="d-flex justify-center" v-if="show">
        <v-col      cols="11"
                    md="6"
                    align-self="center"
                    style="margin: auto "
                    class="text-center"
        >
          <v-row class="justify-center text-center ">
            <v-col
              cols="6"
              md="6"
              class="d-flex justify-center text-center reset-link"
            >
              <router-link to="/home" class="">
                Реквизиты
              </router-link>
            </v-col>
            <v-col
              cols="6"
              md="6"
              class="d-flex justify-center text-center reset-link"
            >
              <router-link to="/#" class="">
                Контакты
              </router-link>
            </v-col>
            <v-row class="justify-center text-center">
              <v-col
                cols="11"
                md="6"
                class="d-flex justify-center text-center reset-link"
              >
                <router-link to="/#" class="">
                  Пользовательское соглашение
                </router-link>
              </v-col>

              <v-col
                cols="11"
                md="6"
                class="d-flex justify-center text-center reset-link"
              >
                <router-link to="/#" class="">
                  Политика конфидициальности
                </router-link>
              </v-col>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </transition>

    <v-row class="d-flex justify-center text-center">
      <v-col
        cols="11"
      >
        <p class="all-rights text-white">({{currentMonth}}) 2020 - 2023 ©Mrk Digital. All rights reserved.</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'v-Footer',
  async created () {
    await this.getDataFromUserTable(this.currentUser.email)
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    convertBirthdate (date) {
      const oldDay = Number(date.substring(0, 2))
      const oldMonth = Number(date.substring(3, 5))
      const oldYear = Number(date.substring(6))
      return new Date(oldYear, oldMonth - 1, oldDay)
    },
    babyMonthsCalc () {
      if (this.dataOfTableUser.data.birthday_telegram !== null) {
        const newBirthdate = this.convertBirthdate(this.dataOfTableUser.data.birthday_telegram)
        const today = new Date()
        let months = (today.getFullYear() - newBirthdate.getFullYear()) * 12 + today.getMonth() - newBirthdate.getMonth()
        if (today.getDate() < newBirthdate.getDate()) {
          const newFrom = new Date(today.getFullYear(), today.getMonth(), newBirthdate.getDate())
          if (today < newFrom && today.getMonth() === newFrom.getMonth() && today.getFullYear() % 4 !== 0) {
            months--
          }
        }
        return months
      } else {
        return null
      }
    },
    async getDataFromUserTable (email) {
      try {
        const res = await this.$store.dispatch('auth/loginUserTable', email)

        if (res) {
          const newBirthdate = this.convertBirthdate(res.data.birthday_telegram)
          const today = new Date()

          this.currentMonth = (today.getFullYear() - newBirthdate.getFullYear()) * 12 + today.getMonth() - newBirthdate.getMonth()
          const isTodayBeforeOrOnBirthday = today.getDate() <= newBirthdate.getDate()

          if (isTodayBeforeOrOnBirthday) {
            const newFrom = new Date(today.getFullYear(), today.getMonth(), newBirthdate.getDate())
            if (today < newFrom && today.getMonth() === newFrom.getMonth() && today.getFullYear() % 4 !== 0) {
              this.shouldDisplay = this.currentMonth <= 12
              this.currentMonth--
            } else {
              this.shouldDisplay = this.currentMonth <= 13
            }
          } else {
            this.shouldDisplay = this.currentMonth <= 13
          }
          await this.$store.dispatch('auth/setCurrentMonth', this.currentMonth)
        }
      } catch (error) {
        this.loading = false
        this.shouldDisplay = false
        this.currentMonth = null
        this.message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
      }
    }
  },
  data: () => ({
    show: false,
    shouldDisplay: false,
    currentMonth: null,
    icons: [
      {
        icons: require('@/assets/img/social/icon-1.png'),
        link: 'https://www.instagram.com/elena_korneva_doctor',
        alt: 'Instagram'
      },
      {
        icons: require('@/assets/img/social/icon-2.png'),
        link: 'https://t.me/korneva_elena',
        alt: 'Telegram'
      },
      {
        icons: require('@/assets/img/social/icon-3.png'),
        link: 'https://www.tiktok.com/@korneva_elena_doc',
        alt: 'TikTok'
      },
      {
        icons: require('@/assets/img/social/icon-4.png'),
        link: 'https://vk.com/elena_korneva_doc',
        alt: 'В контакте'
      },
      {
        icons: require('@/assets/img/social/icon-5.png'),
        link: 'https://www.youtube.com/channel/UCnVyih3gnBiLo2yAnpy0p7Q',
        alt: 'Youtube'
      },
      {
        icons: require('@/assets/img/social/icon-6.png'),
        link: 'https://zen.yandex.ru/id/6223086bb136fc79c0c3e6a8',
        alt: 'Янлекс Дзен'
      },
      {
        icons: require('@/assets/img/social/icon-7.png'),
        link: 'https://ok.ru/group/55339097260056',
        alt: 'Одноклассники'
      },
      {
        icons: require('@/assets/img/social/icon-8.png'),
        link: 'https://wa.me/4917625187846?text=Здравствуйте...',
        alt: 'WhatsUp'
      }
    ],
    texts: [
      'Реквизиты',
      'Политика конфидициальности',
      'Пользовательское соглашение',
      'Контакты'
    ]
  })
}
</script>

<style lang="scss">
.footer {
  background-color: #8672a4;
  padding-top: 22px;
}

.all-rights {
  color: white;
  padding: 0;
  margin: 0;
  font-size: 12px;

  a {
    text-decoration: none;
  }
}

.icons-img {
  height: 32px;
  margin: 0 3px;
}

.social-line {
  display: inline-block;
}

@media screen and (max-width: 320px) {
  .icons-img {
    height: 22px;
    margin: 0 3px;
  }
}

</style>
