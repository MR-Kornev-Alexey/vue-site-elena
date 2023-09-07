<template>
  <div class="">
    <v-row class="justify-center d-flex" style="background-color: #3d498c">
      <v-col cols="11" class="d-flex justify-center text-center">
        <h4 class="title-user text-white">
          Профиль {{ currentUser.email }}
        </h4>
      </v-col>
    </v-row>
    <div class="">
      <v-row class="justify-center d-flex text-center mt-2">
        <v-col cols="11" class="d-flex justify-center" style="flex-direction: column">
          <div class="text-center my-4">
            <router-link :to="'/user'">
              <v-btn class="btn-green">
                Перейти в ЛК
              </v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex ">
        <v-col cols="11" md="5" class="d-flex  ">
          <h4 class="d-inline-flex small-profile">
            <svg-icon type="mdi" :path="accountDetails" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
            <div class="profile-bold">
              Ваш username:
            </div>
            <div class="ml-4">
              {{ currentUser.username }}
            </div>
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex ">
        <v-col cols="11" md="5" class="d-flex">
          <h4 class="d-inline-flex small-profile">
            <svg-icon type="mdi" :path="accountDetails" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
            <div class="profile-bold">
              Ваш Email:
            </div>
            <div class="ml-4">
              {{ currentUser.email }}
            </div>
          </h4>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex">
        <v-col cols="11" md="5" class="d-flex  ">
          <h4 class="d-inline-flex small-profile">
            <svg-icon type="mdi" :path="accountDetails" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
            <div class="profile-bold">
              Ваши права:
            </div>
            <div class="ml-4">
              {{ statusUser(currentUser.roles[0]) }}
            </div>
          </h4>
        </v-col>
      </v-row>
      <div v-if="!showHelenBot">
        <v-row class="justify-center d-flex" v-if="nameUser === 'data-not-entered'">
          <v-col cols="11" md="5" class="d-flex-column justify-center mx-auto">
            <h4 class="small-profile">
              <div>
                Прошу ввести Ваши имя и фамилию
              </div>
            </h4>
            <div class="mx-auto d-flex justify-center">
              <button class="btn btn-green-tip  btn-block mx-auto" @click="dialogName = true">
                Ввести имя
              </button>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="nameUser !== 'data-not-entered'">
          <v-col cols="11" md="5" class="d-flex ">
            <h4 class="d-inline-flex small-profile" @click="dialogName = true">
              <svg-icon type="mdi" :path="path" class="mr-3" size="22px"></svg-icon>
              <div class="profile-bold">
                Ваше имя в HelenBot:
              </div>
              <div class="ml-4">
                {{ nameUser }}
              </div>
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="babyName === null">
          <v-col cols="11" md="5" class="d-flex-column justify-center mx-auto">
            <h4 class="small-profile">
              <div>
                Прошу ввести имя ребенка
              </div>
            </h4>
            <div class="mx-auto d-flex justify-center">
              <button class="btn btn-green-tip  btn-block mx-auto" @click="dialogBaby = true">
                Ввести имя
              </button>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="babyName !== null" @click="dialogBaby = true">
          <v-col cols="11" md="5" class="d-flex ">
            <h4 class="d-inline-flex small-profile">
              <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
              <div class="profile-bold">
                Имя вашего ребенка:
              </div>
              <div class="ml-4">
                {{ babyNameCalc }}
              </div>
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="babyBirthday === null">
          <v-col cols="11" md="5" class="d-flex-column justify-center mx-auto">
            <h4 class="small-profile">
              <div>
                Прошу ввести ДР ребенка
              </div>
            </h4>
            <div class="mx-auto d-flex justify-center">
              <button class="btn btn-green-tip  btn-block mx-auto" @click="dialogBirthday = true">
                Ввести дату
              </button>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="babyBirthday !== null">
          <v-col cols="11" md="5" class="d-flex">
            <h4 class="d-inline-flex small-profile" @click="dialogBirthday = true">
              <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
              <div class="profile-bold">
                Дата рождения ребенка:
              </div>
              <div class="ml-3">
                {{ babyBirthdayCalc }}
              </div>
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="location !== null">
          <v-col cols="11" md="5" class="d-flex" @click="dialogLocation = true">
            <h4 class="d-inline-flex small-profile">
              <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
              <div class="profile-bold">
                Ваше место жительства:
              </div>
              <div class="ml-3">
                {{ locationCalc }}
              </div>
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="location === null">
          <v-col cols="11" md="5" class="d-flex-column justify-center mx-auto">
            <h4 class="small-profile">
              <div>
                Прошу ввести место жительства
              </div>
            </h4>
            <div class="mx-auto d-flex justify-center">
              <button class="btn btn-green-tip  btn-block mx-auto" @click="dialogLocation = true">
                Ввести МЖ
              </button>
            </div>
          </v-col>
        </v-row>
        <div v-if="currentMonth <=12">
          <v-row class="justify-center d-flex">
            <v-col cols="11" md="5" class="d-flex">
              <h4 class="d-inline-flex small-profile">
                <div class="profile-italic">
                  Дополнитeльные данные для тестирования<br>ребенка от 0 до 12 месяцев
                </div>
              </h4>
            </v-col>
          </v-row>

        <v-row class="justify-center d-flex" v-if="genderBaby !== null">
          <v-col cols="11" md="5" class="d-flex" @click="dialogGender = true">
            <h4 class="d-inline-flex small-profile">
              <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
              <div class="profile-bold">
                Пол ребенка:
              </div>
              <div class="ml-3">
                {{ gender }}
              </div>
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="genderBaby === null">
          <v-col cols="11" md="5" class="d-flex-column justify-center mx-auto">
            <h4 class="small-profile">
              <div>
                Прошу ввести пол ребенка
              </div>
            </h4>
            <div class="mx-auto d-flex justify-center">
              <button class="btn btn-green-tip  btn-block mx-auto" @click="dialogGender = true">
                Ввести
              </button>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="weekBaby !== null">
          <v-col cols="11" md="5" class="d-flex" @click="dialogWeek = true">
            <h4 class="d-inline-flex small-profile">
              <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
              <div class="profile-bold">
                Неделя, на которой родился малыш:
              </div>
              <div class="ml-3">
                {{ weekBirthday }} нед.
              </div>
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="weekBaby === null">
          <v-col cols="11" md="5" class="d-flex-column justify-center mx-auto">
            <h4 class="small-profile">
              <div>
                На какой неделе родился малыш?
              </div>
            </h4>
            <div class="mx-auto d-flex justify-center">
              <button class="btn btn-green-tip  btn-block mx-auto" @click="dialogWeek= true">
                Ввести
              </button>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="weightNowBaby !== null">
          <v-col cols="11" md="5" class="d-flex" @click="dialogWeight = true">
            <h4 class="d-inline-flex small-profile">
              <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
              <div class="profile-bold">
                Вес ребенка в настоящее время:
              </div>
              <div class="ml-3">
                {{ weightNowCalc }} грамм
              </div>
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="weightNowBaby === null">
          <v-col cols="11" md="5" class="d-flex-column justify-center mx-auto">
            <h4 class="small-profile">
              <div>
                Введите вес ребенка в настоящее время (в граммах)
              </div>
            </h4>
            <div class="mx-auto d-flex justify-center">
              <button class="btn btn-green-tip  btn-block mx-auto" @click="dialogWeight = true">
                Ввести
              </button>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex pb-md-12 pb-sm-2" v-if="growthNowBaby !== null">
          <v-col cols="11" md="5" class="d-flex" @click="dialogGrowth = true">
            <h4 class="d-inline-flex small-profile">
              <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
              <div class="profile-bold">
               Рост ребенка в настоящее время:
              </div>
              <div class="ml-3">
                {{ growthNowBaby }} см.
              </div>
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex pb-md-12 pb-sm-2" v-if="growthNowBaby === null">
          <v-col cols="11" md="5" class="d-flex-column justify-center mx-auto">
            <h4 class="small-profile">
              <div>
                Введите рост ребенка в настоящее время (в см.)
              </div>
            </h4>
            <div class="mx-auto d-flex justify-center">
              <button class="btn btn-green-tip  btn-block mx-auto" @click="dialogGrowth= true">
                Ввести
              </button>
            </div>
          </v-col>
        </v-row>
        </div>
      </div>

    </div>
    <div v-if="showHelenBot">
      <v-row class="justify-center d-flex" style="background-color: #3d498c; ">
        <v-col cols="12" md="auto" class="d-flex justify-center ">
          <img :src="require('@/assets/img/books.png')" alt="books" style="height: 28px">
          <h4 class="text-white ml-4 h4-helen">
            Вы не зарегистрированы в HelenBot
          </h4>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center mx-auto mt-6">
        <v-col class="d-flex justify-center mx-auto" md="8">
          <div class="mx-auto">
            <p>Для полноформатной работы в системе перейдите в HelenBot для окончательной регистрации (Шаг 2)</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center mx-auto mb-4">
        <v-col class="d-flex justify-center mx-auto" md="8">
          <div class="mx-auto">
            <a href="https://t.me/mrk_new_bot/start">
              <button class="btn btn-green-tip  btn-block">
                Перейти в HelenBot
              </button>
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-dialog
      v-model="dialogName"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <Form @submit="botRegisterName" :validation-schema="schemaName">
            <div class="form-group">
              <label for="realName"><p>Введите ваши имя и фамилию</p></label>
              <Field name="realName" type="text" class="form-control"/>
              <ErrorMessage name="realName" class="error-feedback"
                            style="color: #b93151; font-size: 12px; font-style: italic;"/>
            </div>
            <div class="form-group text-center mt-4">
              <button class="btn btn-pay btn-block" :disabled="loading"
                      style=" background-color: #156434; color: whitesmoke">
                            <span
                              v-show="loading"
                              class="spinner-border spinner-border-sm"
                            ></span>
                ввести
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogBaby"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <Form @submit="botRegisterBaby" :validation-schema="schemaBabyName">
            <div class="form-group">
              <label for="babyName"><p>Введите имя ребенка</p></label>
              <Field name="babyName" type="text" class="form-control"/>
              <ErrorMessage name="babyName" class="error-feedback"
                            style="color: #b93151; font-size: 12px; font-style: italic;"/>
            </div>
            <div class="form-group text-center mt-4">
              <button class="btn btn-pay btn-block" style=" background-color: #156434; color: whitesmoke">
                ввести
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogBirthday"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <Form @submit="botRegisterBDay" :validation-schema="schemaBirthday">
            <div class="form-group">
              <label for="babyBirthday"><p>Введите дату рождения ребенка</p>
                <p style="color: #03622c; font-size: 12px; font-style: italic;">ДР в формате ДД-ММ-ГГГГ</p></label>
              <Field name="babyBirthday" type="text" class="form-control"/>
              <ErrorMessage name="babyBirthday" class="error-feedback"
                            style="color: #b93151; font-size: 12px; font-style: italic;"/>
            </div>
            <div class="form-group text-center mt-4">
              <button class="btn btn-pay btn-block" style=" background-color: #156434; color: whitesmoke">
                ввести
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogLocation"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <Form @submit="botRegisterGeo" :validation-schema="schemaLocation">
            <div class="form-group">
              <label for="babyLocation"><p>Введите место жительства</p></label>
              <Field name="babyLocation" type="text" class="form-control"/>
              <ErrorMessage name="babyLocation" class="error-feedback"
                            style="color: #b93151; font-size: 12px; font-style: italic;"/>
            </div>
            <div class="form-group text-center mt-4">
              <button class="btn btn-pay btn-block" style=" background-color: #156434; color: whitesmoke">
                ввести
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogWeek"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <Form @submit="botRegisterWeek" :validation-schema="schemaWeek">
            <div class="form-group">
              <label for="babyWeek"><p>Введите неделю</p></label>
              <Field name="babyWeek" type="text" class="form-control"/>
              <ErrorMessage name="babyWeek" class="error-feedback"
                            style="color: #b93151; font-size: 12px; font-style: italic;"/>
            </div>
            <div class="form-group text-center mt-4">
              <button class="btn btn-pay btn-block" style=" background-color: #156434; color: whitesmoke">
                ввести
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogWeight"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <Form @submit="botRegisterWeight" :validation-schema="schemaWeight">
            <div class="form-group">
              <label for="babyWeight"><p>Введите вес в граммах</p></label>
              <Field name="babyWeight" type="text" class="form-control"/>
              <ErrorMessage name="babyWeight" class="error-feedback"
                            style="color: #b93151; font-size: 12px; font-style: italic;"/>
            </div>
            <div class="form-group text-center mt-4">
              <button class="btn btn-pay btn-block" style=" background-color: #156434; color: whitesmoke">
                записать
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogGrowth"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <Form @submit="botRegisterGrowth" :validation-schema="schemaGrowth">
            <div class="form-group">
              <label for="babyGrowth"><p>Введите рост в см.</p></label>
              <Field name="babyGrowth" type="text" class="form-control"/>
              <ErrorMessage name="babyGrowth" class="error-feedback"
                            style="color: #b93151; font-size: 12px; font-style: italic;"/>
            </div>
            <div class="form-group text-center mt-4">
              <button class="btn btn-pay btn-block" style=" background-color: #156434; color: whitesmoke">
                записать
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogGender"
      width="auto"
    >
      <v-card>
        <v-card-text class="d-flex justify-center text-center">
          <Form   @submit="onSubmit"  :validation-schema="schemaGender" v-slot="{ errors }">
            <div class="form-group my-4">
              <div class="form-check">
                <Field
                  name="genderBaby"
                  type="radio"
                  id="male"
                  value="boy"
                  class="form-check-input"
                  :class="{ 'is-invalid': errors.genderBaby }"
                />
                <label for="male" class="form-check-label">Мальчик</label>
              </div>
              <div class="form-check">
                <Field
                  name="genderBaby"
                  type="radio"
                  id="female"
                  value="girl"
                  class="form-check-input"
                  :class="{ 'is-invalid': errors.genderBaby }"
                />
                <label for="female" class="form-check-label">Девочка</label>
              </div>
              <ErrorMessage name="genderBaby" class="error-feedback"
                            style="color: #b93151; font-size: 12px; font-style: italic;"/>
            </div>
            <div class="form-group">
              <button
                class="btn btn-pay btn-block"
                style="background-color: #156434; color: whitesmoke"
              >
                Ввести
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Footer from './Footer'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccountEdit, mdiAccountDetails, mdiNoteEdit } from '@mdi/js'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Footer,
    SvgIcon
  },
  name: 'v-profile',
  methods: {
    botRegisterGrowth (values) {
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
      const data = {
        growth: values.babyGrowth,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterGrowth', data).then(
        (res) => {
          // console.log(res)
          this.message = res
          this.dialogGrowth = !this.dialogGrowth
          this.growthNowBaby = res.data.data.growth_now
          this.messageReturn = res
          // this.successful = true
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    },
    botRegisterWeight (values) {
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
      const data = {
        weight: values.babyWeight,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterWeight', data).then(
        (res) => {
          // console.log(res)
          this.message = res
          this.dialogWeight = !this.dialogWeight
          this.weightNowBaby = res.data.data.weight_now
          this.messageReturn = res
          // this.successful = true
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    },
    botRegisterWeek (values) {
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
      const data = {
        week: values.babyWeek,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterWeek', data).then(
        (res) => {
          // console.log(res)
          this.message = res
          this.dialogWeek = !this.dialogWeek
          this.weekBaby = res.data.data.baby_week
          this.messageReturn = res
          // this.successful = true
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    },
    onSubmit (values) {
      // display form values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
      const data = {
        gender: values.genderBaby,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterGender', data).then(
        (res) => {
          // console.log(res)
          this.message = res
          this.dialogGender = !this.dialogGender
          this.genderBaby = res.data.data.gender
          this.messageReturn = res
          // this.successful = true
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    },
    botRegisterGeo (user) {
      console.log(user)
      const data = {
        location: user.babyLocation,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterGeo', data).then(
        (res) => {
          console.log(res)
          this.message = res
          this.dialogLocation = !this.dialogLocation
          this.location = res.data.data.location
          this.messageReturn = res
          // this.successful = true
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    },
    botRegisterBDay (user) {
      console.log(user)
      const data = {
        birthday_telegram: user.babyBirthday,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterBDay', data).then(
        (res) => {
          console.log(res)
          this.message = res
          this.dialogBirthday = !this.dialogBirthday
          this.babyBirthday = res.data.data.birthday_telegram
          this.messageReturn = res
          // this.successful = true
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    },
    botRegisterBaby (user) {
      console.log(user)
      const data = {
        baby_name_telegram: user.babyName,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterBabyName', data).then(
        (res) => {
          console.log(res)
          this.message = res
          this.dialogBaby = !this.dialogBaby
          this.babyName = res.data.data.baby_name_telegram
          this.messageReturn = res
          // this.successful = true
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    },
    botRegisterName (user) {
      // console.log(user)
      const data = {
        real_name_telegram: user.realName,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterName', data).then(
        (res) => {
          console.log(res)
          this.message = res
          this.dialogName = !this.dialogName
          this.loading = false
          this.nameUser = res.data.data.real_name_telegram
          this.messageReturn = res
          // this.successful = true
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
    },
    statusUser (data) {
      console.log(data)
      if (data === 'ROLE_USER') {
        return 'Пользователь'
      }
      if (data === 'ROLE_ADMIN') {
        return 'Администратор'
      }
      if (data === 'ROLE_MODERATOR') {
        return 'Модератор'
      }
    },
    getDataFromTelegram (user) {
      this.$store.dispatch('auth/loginTelegram', user).then(
        (res) => {
          if (res) {
            this.fromServer = res
            this.showHelenBot = !res.find
            this.nameUser = res.data.real_name_telegram
          }
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
    getDataFromUserTable (user) {
      this.$store.dispatch('auth/loginUserTable', user).then(
        (res) => {
          if (res) {
            this.userTable = res
            this.genderBaby = res.data.gender
            this.babyName = res.data.baby_name_telegram
            this.babyBirthday = res.data.birthday_telegram
            this.location = res.data.location
            this.weekBaby = res.data.baby_week
            this.weightNowBaby = res.data.weight_now
            this.growthNowBaby = res.data.growth_now
          }
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
    const schemaBabyName = yup.object().shape({
      babyName: yup
        .string()
        .required('Ввод имени обязателен')
        .max(20, 'Максимально 20 знаков!')
    })
    const schemaName = yup.object().shape({
      realName: yup
        .string()
        .required('Ввод имени обязателен')
        .max(20, 'Максимально 20 знаков!')
    })
    const schemaLocation = yup.object().shape({
      babyLocation: yup
        .string()
        .max(20, 'Максимально 20 знаков!')
    })
    const schemaGender = yup.object().shape({
      genderBaby: yup
        .string()
        .required('Выберите вариант')
    })
    const schemaWeight = yup.object().shape({
      babyWeight: yup
        .string()
        .required('поле обязательно для заполнения')
        .matches(/^(?:[2-9]\d{3}|1\d{4}|20000)$/, 'ввод от 2000 до 20000 грамм')
    })
    const schemaGrowth = yup.object().shape({
      babyGrowth: yup
        .string()
        .required('поле обязательно для заполнения')
        .matches(/^(?:[4-9]\d|1[0-4]\d|150)$/, 'ввод от 40 до 150 см.')
    })
    const schemaWeek = yup.object().shape({
      babyWeek: yup
        .string()
        .required('поле обязательно для заполнения')
        .matches(/^(3[0-9]|[4][0-2])$/, 'число от 30 до 42')
    })
    const schemaBirthday = yup.object().shape({
      babyBirthday: yup
        .string()
        .required('Ввод даты рождения ребенка обязателен')
        .matches(/^(0[1-9]|[1-2]\d|3[01])-(0[1-9]|1[0-2])-20(21|22|23)$/, 'неверный формат даты, введите ДР в формате ДД-ММ-ГГГГ')
    })
    return {
      schemaGender,
      schemaWeek,
      schemaWeight,
      schemaGrowth,
      genders: null,
      nameUser: null,
      babyName: null,
      babyBirthday: null,
      location: null,
      render: 0,
      message: null,
      showHelenBot: false,
      messageReturn: null,
      commonHelen: false,
      fromServer: null,
      userTable: null,
      dialogName: false,
      dialogBaby: false,
      dialogBirthday: false,
      dialogLocation: false,
      dialogGender: false,
      dialogWeek: false,
      dialogWeight: false,
      dialogGrowth: false,
      loading: false,
      genderBaby: null,
      weekBaby: null,
      weightNowBaby: null,
      growthNowBaby: null,
      path: mdiAccountEdit,
      accountDetails: mdiAccountDetails,
      noteEdit: mdiNoteEdit,
      schemaName,
      schemaBabyName,
      schemaBirthday,
      schemaLocation
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    telegramUser () {
      return this.$store.state.auth.telegramUser
    },
    currentMonth () {
      return this.$store.state.auth.currentMonthNew
    },
    locationCalc () {
      if (this.location === null) {
        return 'данные не введены'
      } else {
        return this.location
      }
    },
    babyBirthdayCalc () {
      if (this.babyBirthday === null) {
        return 'данные не введены'
      } else {
        return this.babyBirthday
      }
    },
    babyNameCalc () {
      if (this.babyName === null) {
        return 'данные не введены'
      } else {
        return this.babyName
      }
    },
    weightNowCalc () {
      if (this.weightNowBaby === null) {
        return 'данные не введены'
      } else {
        return this.weightNowBaby
      }
    },
    weekBirthday () {
      if (this.weekBaby === null) {
        return 'данные не введены'
      } else {
        return this.weekBaby
      }
    },
    gender () {
      if (this.genderBaby === 'boy') {
        return 'Мальчик'
      } else if (this.genderBaby === 'girl') {
        return 'Девочка'
      } else {
        return 'данные не введены'
      }
    }
  },
  mounted () {
    this.getDataFromUserTable(this.currentUser.email)
    this.getDataFromTelegram(this.currentUser.email)
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>
