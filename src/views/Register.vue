<template>
  <div class="col-md-12 block-register">
    <v-row class="d-flex justify-center mx-auto mt-6">
      <v-col class="d-flex justify-center mx-auto" md="8" cols="11">
        <div class="mx-auto">
          <p>Приветствеуем вас в нашем комьюнити</p>
          <p>В системе функционируют данный сервер и HelenBot, каждый из которых предназначен для разных целей</p>
          <p>Для успешной работы вам необходимо сделать несколько шагов</p>
          <p><strong>1 шаг:</strong> Регистрация на сервере (форма ввода ниже)
            <br/><strong>Сервер</strong> содержит Личный кабинет (ЛК), обеспечивает доступ к Web-приложениям, позволяет
            менять данные.
          </p>
          <p><strong>2 шаг:</strong> Регистрация в HelenBot
            <br/><strong>HelenBot</strong> предназначен для выдачи информационных материалов, решения текущих задач и
            общей
            информационной рассылки, он обеспечивает обратную связь, то есть пользователи могут взаимодействовать с ним,
            получать дополнительную информацию.
          </p>
          <p><strong>3 шаг:</strong> СТАРТ  в Bot "Рассылка ДЗ от Елены..."
            <br/><strong>Bot "Рассылка..."</strong> предназначен только для рассылки домашних заданий (ДЗ) и теоретических материалов.
            Обратной связи нет - только получение писем. Рекомендован, если вы планируете получать ДЗ и другие материалы.
          </p>
          <p>
            <strong>N.B.</strong> Email на данном сервере и в HelenBot должны быть синхронизированы.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto mb-4">
      <v-col class="d-flex justify-center mx-auto" md="5" cols="11">
        <div class="mx-auto">
            <button class="btn btn-green-tip  btn-block" @click="weGetBaby">
              Регистрация,<br>если уже ребенок родился
            </button>
          </div>
      </v-col>
      <v-col class="d-flex justify-center mx-auto" md="5" cols="11">
        <div class="mx-auto">
            <button class="btn btn-green-tip  btn-block" @click="weWaitBaby">
              Регистрация,<br>если Вы ждете кроху
            </button>
        </div>
      </v-col>
    </v-row>
    <div class="card card-container" v-if="getBaby">
      <Form @submit="handleRegisterGet" :validation-schema="schema">
        <div v-if="!successful">
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
          <div class="form-group form-register">
              <label for="realName"><p>Введите Ваши Имя и Фамилию</p></label>
              <Field name="realName" type="text" class="form-control"/>
              <ErrorMessage name="realName" class="error-feedback"/>
            </div>
            <div class="form-group form-register">
              <label for="baby"><p>Введите имя ребенка</p></label>
              <Field name="baby" type="text" class="form-control"/>
              <ErrorMessage name="baby" class="error-feedback"/>
            </div>
            <div class="form-group form-register">
              <label for="birthday"><p>Введите дату рождения ребенка</p>
                <string class="tips-input">введите формате ДД-ММ-ГГГГ</string>
              </label>
              <Field name="birthday" type="text" class="form-control" pattern="\d{2}-\d{2}-\d{4}"/>
              <ErrorMessage name="birthday" class="error-feedback"/>
            </div>
            <div class="form-group form-register ">
              <label for="location"><p>Введите место жительства</p></label>
              <Field name="location" type="text" class="form-control"/>
              <ErrorMessage name="location" class="error-feedback"/>
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
    <div class="card card-container" v-if="waitBaby">
      <Form @submit="handleRegisterWait" :validation-schema="schemaWait">
        <div v-if="!successful">
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
          <div class="form-group form-register">
            <label for="realName"><p>Введите Ваши Имя и Фамилию</p></label>
            <Field name="realName" type="text" class="form-control"/>
            <ErrorMessage name="realName" class="error-feedback"/>
          </div>
          <div class="form-group form-register ">
            <label for="location"><p>Введите место жительства</p></label>
            <Field name="location" type="text" class="form-control"/>
            <ErrorMessage name="location" class="error-feedback"/>
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
    <Footer />
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
        .max(40, 'Must be maximum 40 characters!'),
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
        .matches(/^(0[1-9]|[1-2]\d|3[01])-(0[1-9]|1[0-2])-20(20|21|22|23)$/, 'неверный формат даты, введите ДР в формате ДД-ММ-ГГГГ')
    })

    return {
      successful: false,
      loading: false,
      message: '',
      access: false,
      getBaby: false,
      waitBaby: false,
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
    handleRegisterGet (user) {
      const data = {
        username: user.username,
        email: user.email,
        password: user.password,
        real_name_telegram: user.realName,
        baby_name_telegram: user.baby,
        birthday_telegram: user.birthday,
        location: user.location
      }
      this.handleRegister(data)
    },
    handleRegisterWait (user) {
      const data = {
        username: user.username,
        email: user.email,
        password: user.password,
        real_name_telegram: user.realName,
        baby_name_telegram: 'wait-baby',
        birthday_telegram: 'wait-baby',
        location: user.location
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
