<template>
  <div class="container">
    <div>
      <div class="profile-mod">
        <v-row class="justify-center d-flex">
          <v-col cols="11" class="d-flex justify-center">
            <h4 class="">
              Выберите задачу
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex">
          <v-col cols="11" class="d-flex justify-center" style="flex-direction: column">
            <div v-for="(item, key) in items" :key="key" class="mx-auto">
              <router-link :to="item.link" class="nav-link">
                <div class="btn-mod">
                  <div>
                    {{ item.label}}
                  </div>
                </div>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </div>
      <strong>telegramUser:</strong>
      {{ telegramUser }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-profile',
  data: () => ({
    items: [
      {
        label: 'Статус доступа клиентов',
        link: '/allUsers'
      },
      {
        label: 'Растим звезду 1.0',
        link: '/star1_0'
      },
      {
        label: 'Растим звезду 3.0',
        link: '/star3_0'
      },
      {
        label: 'Курс "Речевое развитие"',
        link: '/showSpeakCourse'
      },
      {
        label: '"Эмоциональное развитие"',
        link: '/showEmoCourse'
      },
      {
        label: '"Эмоциональное развитие 3.0"',
        link: '/showEmoCourse3'
      },
      {
        label: 'Отправка информационных писем',
        link: '/allUsersInfo'
      },
      {
        label: 'Просмотр текущего ДЗ',
        link: '/showHW'
      },
      {
        label: 'Просмотр окончания рассылки ДЗ',
        link: '/showEndingAllUsersOfSending'
      },
      {
        label: 'Просмотр бота ДЗ',
        link: '/showAllForBot'
      },
      {
        label: 'Статистика по бесплатниому курсу',
        link: '/showAllMotherHood'
      }
    ]
  }
  ),
  methods: {
    getDataFromTelegram (user) {
      this.loading = true
      this.$store.dispatch('auth/loginTelegram', user).then(
        () => {
          // this.$router.push('/profile')
        },
        (error) => {
          this.loading = false
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    telegramUser () {
      return this.$store.state.auth.telegramUser
    }
  },
  mounted () {
    this.getDataFromTelegram(this.currentUser.email)
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>
