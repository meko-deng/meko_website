import Vue from 'vue'
import Router from 'vue-router'
import WelcomePageComponent from '../components/Welcome_Page_Component.vue'
import MessageList from '../components/MessageList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome_Page_Componentt',
      component: WelcomePageComponent
    },
    {
      path: '/MessageList',
      name: 'MessageList',
      component: MessageList
    }
  ]
})
