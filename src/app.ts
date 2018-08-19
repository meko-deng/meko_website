import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../assets/app.css'
import './assets/main_logo.css'
import './assets/pages/page_header_animation.css'

Vue.config.silent = true

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})