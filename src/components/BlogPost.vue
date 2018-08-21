<template>
  <div id="blog-post" class="fade_in center">
    <h1 class="montserrat">{{ post.data.title }}</h1>
    <!-- <h4 class="montserrat">{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4> -->
    <div v-html="post.data.body" class="montserrat"></div>

    <router-link
      v-if="post.meta.previous_post"
      :to="/blog/ + post.meta.previous_post.slug"
      class="button"
    >
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link
      v-if="post.meta.next_post"
      :to="/blog/ + post.meta.next_post.slug"
      class="button"
    >
      {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>
<script>

import Vue from 'vue'
import Butter from 'buttercms'

export const butter = Butter('3de9eb70ae75166369d82f5404fd6f95476cd46d')


export default Vue.extend({
    name: 'blog-post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        this.$store.commit('deny_back_to_top')
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            this.post = res.data
            this.$store.commit('allow_back_to_top')
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },    
    created() {
      this.getPost()
    }
  })
</script>

<style lang="css" scoped>

.center {
    margin: 0;
    width: 60%;
    position: absolute;
    /* margin-top: calc(250px - 30vh); */
    left: 50%;
    transform: translate(-50%);
}

div {
    font-size: 12px
}

h1 {
    font-size: 20px
}

.montserrat {
  font-family: Montserrat;
}

</style>
