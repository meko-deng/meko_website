import Vue from 'vue'
import Router from 'vue-router'
import Projects from '../components/Projects.vue'
import Blog from '../components/Blog.vue'
import Aboutme from '../components/About_me.vue'
import Resume from '../components/Resume.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Aboutme',
      name: 'Aboutme',
      component: Aboutme
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
