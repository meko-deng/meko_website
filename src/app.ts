import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'
import store from './store/simple_store'
import '../assets/app.css'
import './assets/main_logo.css'
import './assets/pages/page_header_animation.css'

Vue.use(VueAnalytics, {
  id: 'UA-125473579-1',
  router,
  checkDuplicatedScript:true
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})