<template>
  <div class="container">
    <div class="profile-mod">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center">
          <h4 class="title-user">
            Регистрация в Боте "Рассылка ДЗ"
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
          <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
            <div class="d-inline-flex all-size-font justify-center" style="width: 100%; margin: auto">
              <div class="size-5-left">
                №№
              </div>
              <div class="size-20-name">
                Имя пользователя
              </div>
              <div class="size-10-bd" >
               chatId
              </div>
              <div class="size-20">
                Дата регистрации
              </div>
            </div>
          </v-col>
        </v-row>
      <div v-for="(item, key) in allUsers" :key="key" >
        <v-row class="justify-center d-flex">
          <v-col cols="12"  class="justify-center d-flex" style="flex-direction: column">
            <div class="d-inline-flex all-size-font justify-center" style="width: 100%; margin: auto" @click="openDialog(item.chatId)">
              <div class="size-5-left pointer" :class="colorLight(key)">
                {{key+1}}
              </div>
              <div class="size-20-name pointer" :class="colorLight(key)">
                {{item.name }}
              </div>
              <div class="size-10-bd pointer" :class="colorLight(key)">
                {{item.chatId}}
              </div>
              <div class="size-20 pointer" :class="colorLight(key)">
                {{item.created}}
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="auto"
        >
          <v-card>
            <v-card-text>
                  <div class="d-inline-flex all-size-font justify-center" style="width: 100%; margin: auto">
                    <div class="size-20 mx-6">
                      <h4>
                        {{oneUser.real_name_telegram}}
                      </h4>
                    </div>
                    <div class="size-20-name mx-6">
                      <h4>
                        {{oneUser.email_telegram}}
                      </h4>
                    </div>
                    <div class="size-20 mx-6" >
                      <h4>
                        {{oneUser.createdAt}}
                      </h4>
                    </div>
                  </div>
             {{oneUser}}
            </v-card-text>
            <v-card-actions>
              <v-btn color="#4464A3" block @click="dialog = false">Закрыть</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
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
      this.$store.dispatch('auth/allUsersBotHw', user).then(
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
    colorLight (key) {
      return key % 2 === 1 ? '' : 'colorLight'
    },
    openDialog (id) {
      this.dialog = !this.dialog
      const data = {
        admin: this.currentUser.email,
        chatId: id
      }
      this.$store.dispatch('auth/getOneUsersBotHw', data).then(
        (res) => {
          this.oneUser = res
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
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.push('/login')
    } else {
      this.getAllDataFromHelen(this.currentUser.email)
    }
  }
}
</script>

<style scoped>

</style>
