<template>
  <div class="container">
    <div class="profile" >
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <h4 class="title-user">
            Кабинет модератора
          </h4>
        </v-col>
      </v-row>
    </div>
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
        label: 'Курс "Речевое развитие"',
        link: '/showSpeakCourse'
      },
      {
        label: '"Эмоциональное развитие"',
        link: '/showEmoCourse'
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
