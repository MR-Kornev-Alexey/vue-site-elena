<template>
  <div class="container">
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <h4 class="title-user">
            Данные по бесплатному курсу "Материнство..."
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" style="border-bottom: 2px solid #44200f">
          <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
            <div class="d-inline-flex all-size-font justify-space-between" style="width: 100%; margin: auto">
              <div style="padding-left: 12px">
                Общее число участников
              </div>
              <div style="padding-right: 12px">
                {{ allUsers.totalParticipants }}
              </div>
            </div>
          </v-col>
        </v-row>
      <v-row class="justify-center d-flex" style="border-bottom: 2px solid #44200f">
        <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
          <div class="d-inline-flex all-size-font justify-space-between" style="width: 100%; margin: auto">
            <div style="padding-left: 12px">
              Прошли первую кнопку
            </div>
            <div style="padding-right: 12px">
              {{ allUsers.first_click}}
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" style="border-bottom: 2px solid #44200f">
        <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
          <div class="d-inline-flex all-size-font justify-space-between" style="width: 100%; margin: auto">
            <div style="padding-left: 12px">
              Прошли вторую кнопку
            </div>
            <div style="padding-right: 12px">
              {{ allUsers.second_click}}
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" style="border-bottom: 2px solid #44200f">
        <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
          <div class="d-inline-flex all-size-font justify-space-between" style="width: 100%; margin: auto">
            <div style="padding-left: 12px">
              Напоминалка 3.1
            </div>
            <div style="padding-right: 12px">
              {{ allUsers.first_click_24 - allUsers.second_click}}
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" style="border-bottom: 2px solid #44200f">
        <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
          <div class="d-inline-flex all-size-font justify-space-between" style="width: 100%; margin: auto">
            <div style="padding-left: 12px">
              Напоминалка 3.2
            </div>
            <div style="padding-right: 12px">
              {{ allUsers.second_click_72 - allUsers.second_click}}
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" >
        <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
          <div class="d-inline-flex all-size-font justify-space-between" style="width: 100%; margin: auto">
            <div style="padding-left: 12px">
              Напоминалка 6.1
            </div>
            <div style="padding-right: 12px">
              {{ allUsers.second_click - allUsers.second_click}}
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" >
        <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
          <v-btn class="btn-advice mt-4 mx-auto" @click="restart">
            Перегрузить
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showAllForBotHW',
  components: {
  },
  data: function () {
    return {
      loading: false,
      message: '',
      dialog: false,
      allUsers: [],
      oneUser: ''
    }
  },
  methods: {
    getAllDataFromHelen (user) {
      this.loading = true
      this.$store.dispatch('auth/allUsersMotherHood', user).then(
        (res) => {
          this.allUsers = res
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
    },
    restart () {
      this.getAllDataFromHelen({ user: this.currentUser.email })
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.push('/login')
    } else {
      this.getAllDataFromHelen({ user: this.currentUser.email })
    }
  }
}
</script>

<style scoped>

</style>
