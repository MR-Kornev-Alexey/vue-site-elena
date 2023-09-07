<template>
  <div class="container ">
    <v-row class="justify-center d-flex" style="background-color: #3d498c">
      <v-col cols="11" class="d-flex justify-center text-center">
        <h4 class="title-user text-white">
          Полная регистрация
        </h4>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8">
        <div class="mx-auto">
          <p>В нашей системе функционируют HelenBot и сервер, каждый из которых предназначен для разных целей:</p>
          <p>Для успешной работы вам необходимо сделать несколько шагов</p><br />
          <p><strong>1 шаг: Регистрация в HelenBot</strong>
            <br/><strong>HelenBot</strong> предназначен для выдачи информационных материалов, решения текущих задач и общей
            информационной рассылки.
            <br/><strong>HelenBot</strong>  обеспечивает обратную связь, то есть пользователи могут взаимодействовать с ним, получать дополнительную информацию.
            <br/> Для синхронизации данных прошу ввести Bаш емейл <strong> {{ currentUser.email }} </strong> в HelenBot.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8">
        <div class="mx-auto">
          <a href="https://t.me/mrk_new_bot/start" target="_blank">
            <button class="btn btn-green-tip  btn-block" @click="checkBaby">
              Перейти в HelenBot
            </button>
          </a>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8">
        <div class="mx-auto">
          <p><strong>2 шаг:  Финальная регистрация на сервере </strong></p>
          <p>После введения email в HelenBot прошу Вас ввести дополнительные данные в вашем профиле:</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8">
        <div class="mx-auto">
          <router-link :to="'/profile'">
            <button class="btn btn-green-tip  btn-block" @click="checkBaby">
              Перейти в профиль
            </button>
          </router-link>
        </div>
      </v-col>
    </v-row>
<!--    <v-row class="d-flex justify-center mx-auto mt-6" v-if="!babyWaiting">-->
<!--      <v-col class="d-flex justify-center mx-auto" md="8">-->
<!--        <div class="mx-auto">-->
<!--          <button class="btn btn-green-tip  btn-block" @click="checkBaby">-->
<!--            Если вы ждете ребенка-->
<!--          </button>-->
<!--        </div>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--    <v-row class="d-flex justify-center mx-auto mt-6" v-if="babyWaiting">-->
<!--      <v-col class="d-flex justify-center mx-auto" md="8">-->
<!--        <div class="mx-auto">-->
<!--          <button class="btn btn-green-tip  btn-block" @click="checkBaby">-->
<!--            У вас есть ребенок-->
<!--          </button>-->
<!--        </div>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--    <v-row v-if="!babyWaiting" class="mb-4">-->
<!--      <div class="col-md-6 block-register mx-auto">-->
<!--        <div class="card card-container mx-auto">-->
<!--          <Form @submit="botRegisterYes" :validation-schema="schema1">-->
<!--            <div v-if="!successful">-->
<!--              <div class="form-group">-->
<!--                <label for="realName"><p>Введите ваши имя и фамилию</p></label>-->
<!--                <Field name="realName" type="text" class="form-control"/>-->
<!--                <ErrorMessage name="realName" class="error-feedback"/>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <label for="baby"><p>Введите имя ребенка</p></label>-->
<!--                <Field name="baby" type="text" class="form-control"/>-->
<!--                <ErrorMessage name="baby" class="error-feedback"/>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <label for="birthday"><p>Введите дату рождения ребенка</p><br>-->
<!--                  <string class="tips-input">введите формате ДД-ММ-ГГГГ</string>-->
<!--                </label>-->
<!--                <Field name="birthday" type="text" class="form-control" pattern="\d{2}-\d{2}-\d{4}"/>-->
<!--                <ErrorMessage name="birthday" class="error-feedback"/>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <label for="location"><p>Введите место жительства</p></label>-->
<!--                <Field name="location" type="text" class="form-control"/>-->
<!--                <ErrorMessage name="location" class="error-feedback"/>-->
<!--              </div>-->
<!--              <div class="form-group text-center mt-4">-->
<!--                <button class="btn btn-pay btn-block" :disabled="loading">-->
<!--              <span-->
<!--                v-show="loading"-->
<!--                class="spinner-border spinner-border-sm"-->
<!--              ></span>-->
<!--                  Регистрация-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </Form>-->
<!--          <div class="mt-2"     v-if="messageReturn">-->
<!--            <p>-->
<!--              {{ messageReturn }}-->
<!--            </p>-->
<!--          </div>-->
<!--          <div-->
<!--            v-if="message"-->
<!--            class="alert"-->
<!--            :class="successful ? 'alert-success' : 'alert-danger'"-->
<!--          >-->
<!--            {{ message }}-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-row>-->
<!--    <v-row v-if="babyWaiting" class="mb-4">-->
<!--      <div class="col-md-6 block-register mx-auto">-->
<!--        <div class="card card-container mx-auto">-->
<!--          <Form @submit="botRegisterNo" :validation-schema="schema2">-->
<!--            <div v-if="!successful">-->
<!--              <div class="form-group">-->
<!--                <label for="realName"><p>Введите ваши имя и фамилию</p></label>-->
<!--                <Field name="realName" type="text" class="form-control"/>-->
<!--                <ErrorMessage name="realName" class="error-feedback"/>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <label for="location"><p>Введите место жительства</p></label>-->
<!--                <Field name="location" type="text" class="form-control"/>-->
<!--                <ErrorMessage name="location" class="error-feedback"/>-->
<!--              </div>-->
<!--              <div class="form-group text-center mt-4">-->
<!--                <button class="btn btn-pay btn-block" :disabled="loading">-->
<!--              <span-->
<!--                v-show="loading"-->
<!--                class="spinner-border spinner-border-sm"-->
<!--              ></span>-->
<!--                  Регистрация-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </Form>-->
<!--          <div class="mt-2"     v-if="messageReturn">-->
<!--            <p>-->
<!--              {{ messageReturn }}-->
<!--            </p>-->
<!--          </div>-->
<!--          <div-->
<!--            v-if="message"-->
<!--            class="alert"-->
<!--            :class="successful ? 'alert-success' : 'alert-danger'"-->
<!--          >-->
<!--            {{ message }}-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-row>-->
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-start mx-auto" md="8">
        <div class="mx-auto">
          <p><strong>3 шаг: Регистрация в боте "Рассылка от Елены Корневой"</strong><br/>Этот бот осуществляет ежедневную рассылку домашних
            заданий по развитию ребенка и теоретических материалов.<br/>Он функционирует без обратной связи, то есть
            пользователи могут получать информацию, но не могут взаимодействовать с ботом или задавать вопросы.</p>
          <br/>
          <p>Такая разделенная структура позволяет эффективно предоставлять информацию и решения пользователю в
            соответствии с их потребностями и предпочтениями.</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8">
        <div class="mx-auto">
          <a href="https://t.me/helen_root_bot/start" target="_blank">
            <button class="btn btn-green-tip  btn-block" @click="checkBaby">
              Перейти в "Рассылки"
            </button>
          </a>
        </div>
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer'
// import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'v-register',
  components: {
    // Form,
    // Field,
    // ErrorMessage,
    Footer
  },
  data () {
    const schema1 = yup.object().shape({
      realName: yup
        .string()
        .required('Ввод имени обязателен')
        .max(20, 'Максимально 20 знаков!'),
      baby: yup
        .string()
        .required('Ввод имени ребенка обязателен')
        .max(16, 'Максимально 16 знаков!'),
      birthday: yup
        .string()
        .required('Ввод даты рождения ребенка обязателен')
        .matches(/^(0[1-9]|[1-2]\d|3[01])-(0[1-9]|1[0-2])-20(21|22|23)$/, 'неверный формат даты, введите ДР в формате ДД-ММ-ГГГГ')
    })
    const schema2 = yup.object().shape({
      realName: yup
        .string()
        .required('Ввод имени обязателен')
        .max(20, 'Максимально 20 знаков!'),
      baby: yup
        .string()
        .required('Ввод имени ребенка обязателен')
        .max(16, 'Максимально 16 знаков!'),
      birthday: yup
        .string()
        .matches(/^\d{2}-\d{2}-\d{4}$/, 'неверный формат даты, введите ДР в формате ДД-ММ-ГГГГ')
    })

    return {
      babyWaiting: false,
      successful: false,
      loading: false,
      message: '',
      messageReturn: '',
      babyName: 'wait',
      birthday: 'wait',
      location: '',
      realName: '',
      email: '',
      schema1,
      schema2
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    },
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    // if (this.loggedIn) {
    //   this.$router.push('/profile')
    // }
  },
  methods: {
    checkBaby () {
      this.babyWaiting = !this.babyWaiting
    },
    botRegisterYes (user) {
      this.message = ''
      this.successful = false
      this.loading = true
      console.log(user)
      const data = {
        real_name_telegram: user.realName,
        baby_name_telegram: user.baby,
        birthday_telegram: user.birthday,
        location: user.location,
        email: this.currentUser.email
      }
      this.sendDataToApi(data)
    },
    botRegisterNo (user) {
      this.message = ''
      this.successful = false
      this.loading = true
      const data = {
        real_name_telegram: user.realName,
        baby_name_telegram: 'wait',
        birthday_telegram: 'wait',
        location: user.location,
        email: this.currentUser.email
      }
      console.log(user)
      this.sendDataToApi(data)
      // https://t.me/YourTelegramBot?start=param1_value&param2=param2_value&param3=param3_value
    },
    sendDataToApi (data) {
      this.$store.dispatch('auth/botRegister', data).then(
        (data) => {
          this.message = data.message
          this.messageReturn = data
          // this.successful = true
          this.loading = false
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
          this.loading = false
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.footer-down {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.tips-input {
  font-size: 10px;
  font-style: italic;
  color: #3d498c;
}

.btn-green-tip {
  width: 220px;
  background-color: #156434;
  border-radius: 16px;
  padding: 6px;
  color: #EFF7FF;

  .v-btn__content {
    color: white;
  }
}

.btn-pay {
  width: 220px;
  background-color: #4464a3;
  border-radius: 16px;
  padding: 6px;
  color: #EFF7FF;

  .v-btn__content {
    color: white;
  }
}

label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 96% !important;
  padding: 20px 20px;
  border-radius: 16px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
  font-size: 10px;
  font-style: italic;
}
</style>
