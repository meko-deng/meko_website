import Vue from 'vue'
import Router from 'vue-router'
import Projects from '../components/Projects.vue'
import Blog from '../components/Blog.vue'
import Aboutme from '../components/About_me.vue'
import Resume from '../components/Resume.vue'
import BlogPost from '../components/BlogPost.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/blog/',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
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
