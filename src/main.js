import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { FontAwesomeIcon } from './plugins/font-awesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-material-design-icons/styles.css'
import './assets/styles/general.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import FutureSlider from 'vue-future-slider'
import 'vue-future-slider/dist/vue-future-slider.css'

const vuetify = createVuetify({
  components,
  directives
})

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .use(FutureSlider)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('free-solid-svg-icons', faHatWizard)
  .component('fontawesome-svg-core', library)
  .mount('#app')
