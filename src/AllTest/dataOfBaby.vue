<template>
  <v-container style="background-color: whitesmoke" class="mx-auto">
    <v-row class="justify-center text-center">
      <v-col
        cols="11"
        md="6"
      >
        <h4 class="text-center font-weight-bold">
          Данные ребенка
        </h4>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex" v-if="babyName === null">
      <v-col cols="11" md="6" class="d-flex-column justify-center mx-auto profile-correct-center text-center">
        <div>
          Прошу ввести имя ребенка
        </div>
        <button class="btn btn-orange-tip mt-2" @click="dialogBaby = true">
          Ввести имя
        </button>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex" v-if="babyName !== null">
      <v-col cols="11" md="6" class="d-inline-flex profile-correct" @click="dialogBaby = true">
        <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
        <div>
          Имя вашего ребенка:
        </div>
        <div class="ml-4">
          {{ babyNameCalc }}
        </div>
      </v-col>
    </v-row>
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
              <button class="btn btn-rec-green">
                записать
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--    Имя ребенка финал-->
    <v-row class="justify-center d-flex" v-if="babyBirthday === null">
      <v-col cols="11" md="6" class="d-flex-column justify-center mx-auto profile-correct-center text-center">
        <div>
          Прошу ввести ДР ребенка
        </div>
        <button class="btn btn-orange-tip mt-2" @click="dialogBirthday = true">
          Ввести дату
        </button>
      </v-col>
    </v-row>
    <v-row class="justify-center d-flex" v-if="babyBirthday !== null">
      <v-col cols="11" md="6" class="d-inline-flex profile-correct" @click="dialogBirthday = true">
        <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
        <div>
          Дата рождения ребенка:
        </div>
        <div class="ml-4">
          {{ babyBirthdayCalc }}
        </div>
      </v-col>
    </v-row>
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
              <button class="btn btn-rec-green">
                записать
              </button>
            </div>
          </Form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--    ДР ребенка финал-->
    <v-row class="justify-center d-flex mb-4" v-if="babyBirthday !== null">
      <v-col cols="11" md="6" class="d-inline-flex profile-correct">
        <svg-icon type="mdi" :path="babyFaceOutline" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
        <div>
          Полное количество месяцев:
        </div>
        <div class="ml-4">
          {{ babyMonthsCalc }}
        </div>
      </v-col>
    </v-row>
    <!--    месяц ребенка финал-->
    <div v-if="shouldDisplay" class="mb-6">
      <v-row class="justify-center d-flex" v-if="genderBaby !== null">
        <v-col cols="11" md="6" class="d-inline-flex profile-correct" @click="dialogGender = true">
          <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
          <div>
            Пол ребенка:
          </div>
          <div class="ml-4">
            {{ gender }}
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex" v-if="genderBaby === null">
        <v-col cols="11" md="6" class="d-flex-column justify-center mx-auto profile-correct-center text-center">
          <div>
            Прошу ввести пол ребенка
          </div>
          <button class="btn btn-orange-tip mt-2" @click="dialogGender = true">
            Ввести пол
          </button>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialogGender"
        width="auto"
      >
        <v-card>
          <v-card-text class="d-flex justify-center text-center">
            <Form @submit="botRegisterGender" :validation-schema="schemaGender" v-slot="{ errors }">
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
                <button class="btn btn-rec-green">
                  записать
                </button>
              </div>
            </Form>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!--  пол ребенка финал-->
      <v-row class="justify-center d-flex" v-if="weekBaby === null">
        <v-col cols="11" md="6" class="d-flex-column justify-center mx-auto profile-correct-center text-center">
          <div>
            На какой неделе родился малыш?
          </div>
          <button class="btn btn-orange-tip mt-2" @click="dialogWeek = true">
            Ввести неделю
          </button>
        </v-col>
      </v-row>
      <v-row class="justify-center d-flex mb-4" v-if="weekBaby !== null">
        <v-col cols="11" md="6" class="d-inline-flex profile-correct" @click="dialogWeek = true">
          <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
          <div>
            Неделя, на которой родился малыш:
          </div>
          <div class="ml-4">
            {{ weekBirthday }}
          </div>
        </v-col>
      </v-row>
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
                <button class="btn btn-rec-green">
                  записать
                </button>
              </div>
            </Form>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!--  неделя рождения ребенка финал-->
      <div v-if="showPsy">

        <v-row class="justify-center d-flex" v-if="weightNowBaby !== null">
          <v-col cols="11" md="6" class="d-inline-flex profile-correct" @click="dialogWeight = true">
            <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
            <div>
              Вес ребенка в настоящее время:
            </div>
            <div class="ml-4">
              {{ weightNowCalc }} грамм
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex" v-if="weightNowBaby === null">
          <v-col cols="11" md="6" class="d-flex-column justify-center mx-auto profile-correct-center text-center">
            <div>
              Введите вес ребенка в настоящее время (в граммах)
            </div>
            <button class="btn btn-orange-tip mt-2" @click="dialogWeight = true">
              Ввести вес
            </button>
          </v-col>
        </v-row>
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
                  <button class="btn btn-rec-green">
                    записать
                  </button>
                </div>
              </Form>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!--  вес ребека ребенка при рождении финал-->
        <v-row class="justify-center d-flex pb-md-12 pb-sm-2" v-if="growthNowBaby !== null">
          <v-col cols="11" md="6" class="d-inline-flex profile-correct" @click="dialogGrowth = true">
            <svg-icon type="mdi" :path="noteEdit" class="mr-3" size="22px" style="cursor: pointer"></svg-icon>
            <div>
              Рост ребенка в настоящее время:
            </div>
            <div class="ml-4">
              {{ growthNowBaby }} см.
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center d-flex pb-md-12 pb-sm-2" v-if="growthNowBaby === null">
          <v-col cols="11" md="6" class="d-flex-column justify-center mx-auto profile-correct-center text-center">
            <div>
              Введите рост ребенка в настоящее время (в см.)
            </div>
            <button class="btn btn-orange-tip mt-2" @click="dialogGrowth = true">
              Ввести рост
            </button>
          </v-col>
        </v-row>
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
                  <button class="btn btn-rec-green">
                    записать
                  </button>
                </div>
              </Form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mdiAccountDetails, mdiAccountEdit, mdiNoteEdit, mdiBabyFaceOutline } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import * as yup from 'yup'
import { ErrorMessage, Field, Form } from 'vee-validate'

export default {
  name: 'dataOfBaby',
  components: {
    Form,
    Field,
    ErrorMessage,
    SvgIcon
  },
  async created () {
    await this.getDataFromUserTable(this.currentUser.email)
    this.showPsy = this.$store.state.allTest.checkPsy
  },
  methods: {
    async getDataFromUserTable (email) {
      // Replace this with your actual server data loading logic
      this.$store.dispatch('auth/loginUserTable', email).then(
        (res) => {
          if (res) {
            this.userTable = res.data
            this.genderBaby = res.data.gender
            this.babyName = res.data.baby_name_telegram
            this.babyBirthday = res.data.birthday_telegram
            this.weekBaby = res.data.baby_week
            this.weightNowBaby = res.data.weight_now
            this.growthNowBaby = res.data.growth_now

            // Now compute newBirthdate and other logic
            const newBirthdate = this.convertBirthdate(res.data.birthday_telegram)
            const today = new Date()

            const months = (today.getFullYear() - newBirthdate.getFullYear()) * 12 + today.getMonth() - newBirthdate.getMonth()
            const isTodayBeforeOrOnBirthday = today.getDate() <= newBirthdate.getDate()

            if (isTodayBeforeOrOnBirthday) {
              const newFrom = new Date(today.getFullYear(), today.getMonth(), newBirthdate.getDate())

              if (today < newFrom && today.getMonth() === newFrom.getMonth() && today.getFullYear() % 4 !== 0) {
                this.shouldDisplay = months <= 12 // 13 - 1
              } else {
                this.shouldDisplay = months <= 13
              }
            } else {
              this.shouldDisplay = months <= 13
            }
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
          window.location.reload()
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
      const data = {
        week: values.babyWeek,
        email: this.currentUser.email
      }
      this.$store.dispatch('auth/botRegisterWeek', data).then(
        (res) => {
          this.message = res
          this.dialogWeek = !this.dialogWeek
          this.weekBaby = res.data.data.baby_week
          this.messageReturn = res
          window.location.reload()
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
    botRegisterGender (values) {
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
          window.location.reload()
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
          window.location.reload()
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
          window.location.reload()
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
    convertBirthdate (date) {
      const oldDay = Number(date.substring(0, 2))
      const oldMonth = Number(date.substring(3, 5))
      const oldYear = Number(date.substring(6))
      return new Date(oldYear, oldMonth - 1, oldDay)
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    telegramUser () {
      return this.$store.state.auth.telegramUser
    },
    locationCalc () {
      if (this.location === null) {
        return 'данные не введены'
      } else {
        return this.location
      }
    },
    babyMonthsCalc () {
      const newBirthdate = this.convertBirthdate(this.babyBirthday)
      const today = new Date()
      let months = (today.getFullYear() - newBirthdate.getFullYear()) * 12 + today.getMonth() - newBirthdate.getMonth()
      if (today.getDate() < newBirthdate.getDate()) {
        const newFrom = new Date(today.getFullYear(), today.getMonth(), newBirthdate.getDate())
        if (today < newFrom && today.getMonth() === newFrom.getMonth() && today.getFullYear() % 4 !== 0) {
          months--
        }
      }
      return months
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
      shouldDisplay: false,
      showPsy: false,
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
      babyFaceOutline: mdiBabyFaceOutline,
      noteEdit: mdiNoteEdit,
      schemaName,
      schemaBabyName,
      schemaBirthday,
      schemaLocation
    }
  }
}
</script>

<style scoped lang="scss">
.profile-correct {
  font-size: 22px;
  text-align: left;
  cursor: pointer;
}

.profile-correct-center {
  font-size: 22px;
  text-align: left;
  cursor: pointer;
}

.btn-rec-green {
  width: 220px;
  background-color: #156434;
  color: whitesmoke;
  border-radius: 16px;
  padding: 7px;
  text-transform: uppercase;
  font-size: 14px;

  .v-btn__content {
    color: whitesmoke
  }
}

.btn-orange-tip {
  width: 220px;
  background-color: #ff7835;
  border-radius: 16px;
  padding: 7px;
  color: #0e0e0e;
  text-transform: uppercase;
  font-size: 14px;

  .v-btn__content {
    color: #0e0e0e;
  }
}

@media (max-width: 1600px) {
  .profile-correct {
    font-size: 20px;
    text-align: left;
    cursor: pointer;
  }
  .profile-correct-center {
    font-size: 20px;
    text-align: left;
    cursor: pointer;
  }
}

@media (max-width: 1280px) {
  .profile-correct {
    font-size: 20px;
    text-align: left;
    cursor: pointer;
  }
  .profile-correct-center {
    font-size: 20px;
    text-align: left;
    cursor: pointer;
  }
}

@media (max-width: 1024px) {
  .profile-correct {
    font-size: 18px;
    text-align: left;
    cursor: pointer;
  }
  .profile-correct-center {
    font-size: 18px;
    text-align: left;
    cursor: pointer;
  }
}

@media (max-width: 600px) {
  .profile-correct {
    font-size: 16px;
    text-align: left;
    cursor: pointer;
  }
  .profile-correct-center {
    font-size: 16px;
    text-align: left;
    cursor: pointer;
  }
}

@media (max-width: 480px) {
  .profile-correct {
    font-size: 15px;
    text-align: left;
    cursor: pointer;
  }
  .profile-correct-center {
    font-size: 15px;
    text-align: left;
    cursor: pointer;
  }
}

@media (max-width: 390px) {
  .profile-correct {
    font-size: 14px;
    text-align: left;
    cursor: pointer;
  }
  .profile-correct-center {
    font-size: 14px;
    text-align: left;
    cursor: pointer;
  }
}

@media (max-width: 360px) {
  .profile-correct {
    font-size: 13px;
    text-align: left;
    cursor: pointer;
  }
  .profile-correct-center {
    font-size: 13px;
    text-align: left;
    cursor: pointer;
  }
}

@media (max-width: 320px) {
  .profile-correct {
    font-size: 12px;
    text-align: left;
    cursor: pointer;
  }
  .profile-correct-center {
    font-size: 12px;
    text-align: left;
    cursor: pointer;
  }
}
</style>
