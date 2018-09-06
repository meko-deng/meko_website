import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/simple_store'
import '../assets/app.css'
import './assets/main_logo.css'
import './assets/pages/page_header_animation.css'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})