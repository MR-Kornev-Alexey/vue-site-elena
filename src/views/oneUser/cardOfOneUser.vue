<template>
  <div class="container ">
    <div class="profile-mod pb-8 ">
      <v-row class="justify-center d-flex">
        <v-col cols="11" class="d-flex justify-center" v-if="profileUser !== null">
          <h4>
            Пользователь: {{ profileUser.name }} | {{ profileUser.email }}
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" v-if="profileUser === null">
        <v-col cols="11" class="d-flex justify-center">
          <h4>
            Данные не загружены. Зайдите заново в кабинт модератора и выберите пользовтеля.
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex " v-if="profileUser !== null" >
        <v-col cols="11" class="d-flex justify-center">
          <h3 style="text-transform: uppercase">Доступы к сервисам</h3>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" v-if="profileUser !== null">
        <v-col cols="11" class="d-flex justify-center" style="flex-direction: column">
          <div class="d-inline-flex all-size-font justify-center" style="width: 100%; margin: auto">
            <div class="size-20 colorGreenAccess">
              Наименование
            </div>
            <div class="size-20">
              Доступ
            </div>
            <div class="size-20">
              Действие
            </div>
          </div>
          <div class="d-inline-flex all-size-font justify-center" style="width: 100%; margin: auto" v-for="(item,key) in courses" :key="key">
            <div class="size-20" :class="colorLight(key)" >
              {{ item.title }}
            </div>
            <div class="size-20" :class="colorLight(key)">
              {{ checkAccess (item.index)  }}
            </div>
            <div class="size-20" :class="colorLight(key)" style="cursor: pointer">
              <svg-icon type="mdi" :path="pencil" :size="20" @click="changeAccess(item.index)" ></svg-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    {{ newDatUser }}
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccountEdit, mdiClose, mdiNoteEditOutline } from '@mdi/js'

export default {
  name: 'cardOfOneUser',
  components: {
    SvgIcon
  },
  methods: {
    colorLight (key) {
      return key % 2 === 1 ? '' : 'colorLight'
    },
    checkAccess (index) {
      // alert(index)
      if (this.newDatUser[index]) {
        return 'Открыт'
      } else {
        return 'Закрыт'
      }
    },
    changeClass (index) {
      if (this.newDatUser[index]) {
        return 'colorGreen'
      } else {
        return 'colorRed'
      }
    },
    changeAccess (index) {
      const data = {
        index: index,
        mail: this.profileUser.email
      }
      this.$store.dispatch('auth/changeAccess', data).then(
        (res) => {
          this.newDatUser = res
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
  data: function () {
    return {
      path6: mdiClose,
      edit: mdiAccountEdit,
      pencil: mdiNoteEditOutline,
      newDatUser: null,
      courses: [
        {
          title: 'Общий доступ',
          index: 'access_all'
        },
        {
          title: 'ЧАТБОТ по сну',
          index: 'access_dream'
        },
        {
          title: 'Рассылка ДЗ',
          index: 'assess_homeworks'
        },
        {
          title: 'Вебинары по развитию',
          index: 'access_webinars'
        },
        {
          title: 'Курс по эмоциям',
          index: 'access_speak'
        },
        {
          title: 'Курс по речевому развитию',
          index: 'access_emo'
        }
      ]
    }
  },
  // { "chatId": 1763113011,
  // "name_telegram": "Sanechka_Alex",
  // "role_telegram": "user",
  // "first_name_telegram": "Александра",
  // "last_name_telegram": null,
  // "baby_name_telegram": "Степан",
  // "birthday_telegram": "10-08-2022",
  // "pay_telegram": 0,
  // "real_name_telegram": "Александра Александрова",
  // "email_telegram": "Sanechkad91@yandex.ru",
  // "location": "Мурманск",
  // "source": "new",
  // "assess_homeworks": false,
  // "access_webinars": true,
  // "choice_webinar": "[0,0,0,0,1,0,0,0,0,1]",
  // "access_all": true,
  // "access_dev_0_12": false,
  // "access_dev_1_3": false,
  // "access_emo": false,
  // "choice_emo": "[0,0,0,0,0,0]",
  // "access_speak": false,
  // "access_dream": false,
  // "intensive": "no",
  // "createdAt": "2023-05-03T05:41:26.000Z",
  // "updatedAt": "2023-05-03T05:42:14.000Z" }
  //
  mounted () {
    if (this.profileUser === null) {
      this.$router.push('/allUsers')
    } else {
      this.$store.dispatch('auth/oneUserTelegram', this.profileUser.email).then(
        (res) => {
          this.newDatUser = res
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
    profileUser () {
      return this.$store.state.auth.userOne
    },
    gotDataUser () {
      return this.$store.state.auth.allDataOneUser
    }
  }
}
</script>

<style scoped>

</style>
