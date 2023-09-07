<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary nav-main" >
    <div class="container main-nav-bar">
<!--      <a class="navbar-brand" href="/">Педиатр онлайн</a>-->
      <img
        :src="require('@/assets/img/logo.png')"
        class="logo-1mg"
      >
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav-bat-menu">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">
              <svg-icon type="mdi" :path="path1" :size="24"></svg-icon>
             <div>
               Главная
             </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/courses" class="nav-link">
              <svg-icon type="mdi" :path="path3" :size="24"></svg-icon>
              <div>
                Курсы
              </div>
            </router-link>
          </li>
          <li class="nav-item" >
            <router-link to="/advice" class="nav-link">
              <svg-icon type="mdi" :path="path4" :size="24"></svg-icon>
              <div>
                Услуги
              </div>
            </router-link>
          </li>
          <li class="nav-item" >
            <router-link to="/about" class="nav-link">
              <svg-icon type="mdi" :path="path2" :size="24"></svg-icon>
              <div>
                Обо мне
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="currentUser" to="/user" class="nav-link">
              <svg-icon type="mdi" :path="path5" :size="24"></svg-icon>
              <div>
               Личный кабинет
              </div>
            </router-link>
          </li>
          <li v-if="showAdminBoard" class="nav-item">
            <router-link to="/admin" class="nav-link">
              <svg-icon type="mdi" :path="path7" :size="24"></svg-icon>
              <div>
                Кабинет администратора
              </div>
            </router-link>
          </li>
          <li v-if="showModeratorBoard" class="nav-item">
            <router-link to="/mod" class="nav-link">
              <svg-icon type="mdi" :path="path8" :size="24"></svg-icon>
              <div>
                Кабинет модератора
              </div>
            </router-link>
          </li>
          <li class="nav-item" v-if="!currentUser">
            <router-link to="/register" class="nav-link">
              <svg-icon type="mdi" :path="accountPlus" :size="24"></svg-icon>
              <div>
                Регистрация
              </div>
            </router-link>
          </li>
          <li class="nav-item" v-if="!currentUser">
            <router-link to="/login" class="nav-link">
              <svg-icon type="mdi" :path="login" :size="24"></svg-icon>
              <div>
                Войти
              </div>
            </router-link>
          </li>
          <li class="nav-item" v-if="currentUser" style="cursor: pointer">
            <a class="nav-link" @click.prevent="logOut">
              <svg-icon type="mdi" :path="logout" :size="24"></svg-icon>
              <div>
                Выйти
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLoginVariant, mdiFolderAccountOutline, mdiLogoutVariant, mdiAccountPlus, mdiAccountBoxOutline, mdiHomeVariant, mdiMonitorAccount, mdiHumanMaleFemaleChild, mdiAccountEdit, mdiAccountTie, mdiAccountStarOutline } from '@mdi/js'
export default {
  name: 'v-navbar',
  components: {
    SvgIcon
  },
  data: () => ({
    content: '',
    loading: false,
    message: '',
    showLogo: false,
    isScrolling: false,
    path1: mdiHomeVariant,
    path2: mdiAccountBoxOutline,
    path3: mdiMonitorAccount,
    path4: mdiHumanMaleFemaleChild,
    path5: mdiFolderAccountOutline,
    path6: mdiAccountEdit,
    path7: mdiAccountTie,
    path8: mdiAccountStarOutline,
    logout: mdiLogoutVariant,
    login: mdiLoginVariant,
    accountPlus: mdiAccountPlus
  }),
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    },
    showAdminBoard () {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN')
      }
      return false
    },
    showModeratorBoard () {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR')
      }
      return false
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
    onScroll () {
      const offset = window.pageYOffset
      this.isScrolling = offset > 50
      this.showLogo = offset > 200
    }
  }
}
</script>
<style lang="scss">
 .banner {
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   z-index: 99999;
   bottom: 126px;
   left: 13px;
   position: fixed;
   padding: 10px 20px;
   background-color: #8cb4fc;
   border-radius: 16px;
   a {
     text-decoration: none;
   }
 }
.logo-1mg {
  height: 30px;
}
.nav-link{
  color: #2F3550;
}

</style>
