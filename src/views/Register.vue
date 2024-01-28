<template>
  <div class="col-md-12 block-register">
    <v-row class="d-flex justify-center mx-auto mt-6 text-center">
      <v-col class="d-flex-column justify-center mx-auto" md="8" cols="11">
        <div class="mx-auto">
          <h4>Приветствуем Вас в нашем комьюнити</h4>
          <p> Для начала Вам надо синхронизировать Ваш емейл с HelenBot.</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6" v-if="showCheck">
      <v-col class="d-flex-column justify-center mx-auto" md="8" cols="11">
        <div class="card card-container">
          <Form @submit="handleCheckEmail" :validation-schema="schema">
            <div>
              <div class="form-group form-register">
                <label for="email">Введите Ваш email</label>
                <Field name="email" type="email" class="form-control"/>
                <ErrorMessage name="email" class="error-feedback"/>
              </div>
               <div class="form-group text-center mt-4">
                <button class="btn btn-pay btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
                  Проверить
                </button>
              </div>
            </div>
          </Form>
          <div
            v-if="messageCheck"
            class="alert mt-4"
            :class="result ? 'alert-success' : 'alert-danger'"
          >
            {{ messageCheck }}
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex-column justify-center mx-auto text-center" md="8" cols="11">
        <div class="mx-auto mb-6">
          <p> Если Вы это еще не сделали, то пожалуйта перейдите в HelenBot и стартуйте в нем</p>
        </div>

        <div class="mx-auto">
          <a href="https://t.me/mrk_new_bot">
            <button class="btn btn-green-tip  btn-block" @click="weGetBaby">
              Helenbot
            </button>
          </a>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex-column justify-center mx-auto text-center" md="8" cols="11">
        <div class="mx-auto mb-6">
          <p>Или пройдите регистрацию ниже </p>
        </div>
      </v-col>
    </v-row>
    <div class="card card-container">
      <Form @submit="handleRegisterWait" :validation-schema="schemaWait">
        <div>
          <div class="form-group form-register">
            <label for="username">Создайте Ваш username</label>
            <Field name="username" type="text" class="form-control"/>
            <ErrorMessage name="username" class="error-feedback"/>
          </div>
          <div class="form-group form-register">
            <label for="email">Введите Ваш email</label>
            <Field name="email" type="email" class="form-control"/>
            <ErrorMessage name="email" class="error-feedback"/>
          </div>
          <div class="form-group form-register">
            <label for="password">Придумайте пароль</label>
            <Field name="password" type="password" class="form-control"/>
            <ErrorMessage name="password" class="error-feedback"/>
          </div>
          <div class="form-group text-center mt-4">
            <button class="btn btn-pay btn-block" :disabled="loading || !access">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Регистрация
            </button>
          </div>
        </div>
      </Form>
      <v-row class="d-flex justify-center text-center">
        <v-col
          cols="12" md="auto"
          class="d-flex justify-center"
        >
          <label class="checkbox">
            <input type="checkbox" v-model="access" hide-details/>
            <span style="font-size: 12px"> Я соглашаюсь с обработкой персональных данных</span>
          </label>
        </v-col>
      </v-row>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'v-register',
  components: {
    Form,
    Field,
    ErrorMessage,
    Footer
  },
  data () {
    const schemaWait = yup.object().shape({
      username: yup
        .string()
        .required('Ввод Username обязателен!')
        .min(3, '')
        .max(16, 'Максимально 16 знаков!')
        .matches(/^[a-zA-Z@]+$/, 'Username может содержать только латиницу и без пробелов')
        .trim(),
      email: yup
        .string()
        .required('Ввод Email обязателен')
        .email('Email is invalid!')
        .max(30, 'Must be maximum 30 characters!'),
      password: yup
        .string()
        .required('Ввод password обязателен')
        .min(6, 'Прошу ввести более 6 знаков!')
        .max(40, 'Must be maximum 40 characters!')
    })

    const schema = yup.object().shape({
      email: yup
        .string()
        .required('Ввод Email обязателен')
        .email('Email is invalid!')
        .max(30, 'Must be maximum 30 characters!')
    })

    return {
      successful: false,
      result: false,
      loading: false,
      message: '',
      messageCheck: '',
      access: false,
      getBaby: false,
      waitBaby: false,
      showCheck: true,
      schema,
      schemaWait
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted () {
    if (this.loggedIn) {
      this.$router.push('/profile')
    }
  },
  methods: {
    weWaitBaby () {
      this.getBaby = false
      this.waitBaby = true
    },
    weGetBaby () {
      this.getBaby = true
      this.waitBaby = false
    },
    handleCheckEmail (user) {
      const data = {
        email: user.email
      }
      console.log(data)
      this.messageCheck = ''
      this.successful = false
      this.loading = true
      this.$store.dispatch('auth/checkEmailRegister', user).then(
        (res) => {
          this.messageCheck = res.data
          this.result = res.result
          this.loading = false
          setTimeout(() => {
            this.showCheck = false
          }, 8000)
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
    },
    handleRegisterWait (user) {
      const data = {
        username: user.username,
        email: user.email,
        password: user.password
      }
      this.handleRegister(data)
    },
    handleRegister (user) {
      this.message = ''
      this.successful = false
      this.loading = true
      this.$store.dispatch('auth/register', user).then(
        (data) => {
          this.message = data.message
          this.successful = true
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
  max-width: 350px !important;
  padding: 20px 20px;
  border-radius: 16px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 20px auto;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
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
  font-size: 12px;
}

</style>
