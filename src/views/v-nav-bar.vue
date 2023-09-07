<template>
  <template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-main">
      <div class="container main-nav-bar">
        <img :src="require('@/assets/img/logo.png')" class="logo-1mg">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <b-collapse id="navbarNav" class="collapse navbar-collapse" :is-nav="true">
          <ul class="navbar-nav nav-bat-menu">
           12121212
          </ul>
        </b-collapse>
      </div>
    </nav>
  </template>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo'
      },
      {
        title: 'Bar',
        value: 'bar'
      },
      {
        title: 'Fizz',
        value: 'fizz'
      },
      {
        title: 'Buzz',
        value: 'buzz'
      }
    ]
  }),
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
<style lang="scss" scoped>
@media (max-width: 767.98px) {
  .navbar-nav.nav-bat-menu {
    flex-direction: column;
  }
  .navbar-toggler {
    order: -1;
  }
  .navbar-collapse {
    width: 100%;
  }
}
.transform {
  transition: all 0.3s ease-out;
}

.transform:hover {
  transform: scale(1.3);
}
.nav-image {
  cursor: pointer;
}
.main-name {
  margin-top: 29px;
  font-size: 24px;
  font-weight: 500;
}
.router-input {
  text-decoration: none;
}
.border {
  border-left: 2px solid #fff;
}
.avatar-sidebar {
  margin-top: 62px;
}
.side-bar {
  background-color: #3d498c;
}
</style>
