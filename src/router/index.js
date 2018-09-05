import Vue from 'vue'
import Router from 'vue-router'
import Projects from '../components/Projects.vue'
import Blog from '../components/Blog.vue'
import Aboutme from '../components/About_me.vue'
import Resume from '../components/Resume.vue'
import BlogPost from '../components/BlogPost.vue'

Vue.use(Router)
Vue.config.silent = true

export default new Router({
  routes: [
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:slug',
      name: 'Blog-post',
      component: BlogPost
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
