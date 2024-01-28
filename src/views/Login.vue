<template>
  <div class="col-md-12 block-register">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="username">Username</label>
          <i class="tip-login">
            N.B. Username - это не email, как правило
          </i>
          <Field name="username" type="text" class="form-control"/>
          <ErrorMessage name="username" class="error-feedback"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control"/>
          <ErrorMessage name="password" class="error-feedback"/>
        </div>

        <div class="form-group text-center">
          <button class="btn btn-pay  btn-block mt-4" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Войти в ЛК</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
      <div class="mx-auto">
        <router-link to="/register">
          <button class="btn btn-registration  btn-block mt-4">
            <span>Регистрация</span>
          </button>
        </router-link>
      </div>
    </div>
    <Footer class="footer-down"/>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import Footer from './Footer'

export default {
  name: 'v-login',
  components: {
    Form,
    Field,
    ErrorMessage,
    Footer
  },
  data () {
    const schema = yup.object().shape({
      username: yup.string().required('Ввод Username обязателен!'),
      password: yup.string().required('Ввод Password обязателен!')
    })

    return {
      loading: false,
      message: '',
      schema
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    handleLogin (user) {
      this.loading = true
      this.$store.dispatch('auth/login', user).then(
        () => {
          this.loading = false
          this.$router.push('/profile')
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

.btn-registration {
  width: 220px;
  background-color: #156434;
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
  padding: 40px 40px;
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
  font-size: 12px;
}
</style>
