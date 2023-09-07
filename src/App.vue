<template>
  <div id="app">
    <v-toolbar
      color="#4464A3"
    >
      <v-toolbar-items class="d-flex justify-center text-center">
        <svg-icon type="mdi" :path="menu" @click.stop="drawer = !drawer" class="iconsOpen" size="28px"></svg-icon>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items class="d-flex justify-center text-center">
        <div class="d-flex align-self-center">
          <a href="https://wa.me/4917625187846?text=Здравствуйте..." target="_blank">
            <svg-icon type="mdi" :path="whatsapp" class="iconsOpen" size="26px"></svg-icon>
          </a>
        </div>
      </v-toolbar-items>
      <v-toolbar-items class="d-flex justify-center text-center">
        <router-link to="/user" class="nav-link">
          <svg-icon type="mdi" :path="accountCircle" class="iconsOpen" size="26px"></svg-icon>
        </router-link>
      </v-toolbar-items>
      <v-toolbar-items class="d-flex justify-center text-center">
        <router-link to="/home" class="nav-link mr-2">
          <svg-icon type="mdi" :path="home" class="iconsOpen" size="28px"></svg-icon>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          temporary
          style="background-color: #fffbfd"
        >
          <v-list-item
          >
            <img
              :src="require('@/assets/img/logo.png')"
              class="logo-1mg"
            >
          </v-list-item>
          <v-divider></v-divider>
          <ul class="navbar-nav nav-bat-menu ml-4">
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
            <li class="nav-item">
              <router-link to="/advice" class="nav-link">
                <svg-icon type="mdi" :path="path4" :size="24"></svg-icon>
                <div>
                  Услуги
                </div>
              </router-link>
            </li>
            <li class="nav-item">
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
        </v-navigation-drawer>
        <v-main style="height: 100vh; overflow: auto;">
          <router-view/>
        </v-main>
      </v-layout>
    </v-card>
    <!--    <nav-bar />-->

  </div>
</template>

<script>
// import navBar from './views/Navbar'
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiAccountBoxOutline, mdiAccountEdit, mdiAccountPlus, mdiAccountStarOutline, mdiAccountTie,
  mdiFolderAccountOutline,
  mdiHomeVariant,
  mdiHumanMaleFemaleChild, mdiLoginVariant, mdiLogoutVariant,
  mdiMenu,
  mdiMonitorAccount,
  mdiHomeOutline,
  mdiWhatsapp,
  mdiAccountCircle
} from '@mdi/js'

export default {
  components: {
    SvgIcon
  },
  data () {
    return {
      drawer: false,
      menu: mdiMenu,
      content: '',
      loading: false,
      message: '',
      showLogo: false,
      isScrolling: false,
      whatsapp: mdiWhatsapp,
      home: mdiHomeOutline,
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
      accountPlus: mdiAccountPlus,
      accountCircle: mdiAccountCircle
    }
  },
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
