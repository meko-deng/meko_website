import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../assets/app.css'
import './assets/main_logo.css'

Vue.config.silent = true

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})