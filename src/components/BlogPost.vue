<template>
  <div id="blog-post" class="fade_in center">
    <!-- <button v-on:click="displayModal()">Click me</button> -->
    <!-- <h1 class="montserrat">{{ post.data.title }}</h1> -->
    <!-- <h4 class="montserrat">{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4> -->
    <div v-html="post.data.body" class="montserrat"></div>

    <!-- <router-link
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
    </router-link> -->
    <br>
    <div class="credits">
      Blog Powered by 
      <br>
      <a href="https://buttercms.com"><img height="20" src="../assets/butter_cms.png"></a>
    </div>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue'
import Butter from 'buttercms'

export const butter = Butter('3de9eb70ae75166369d82f5404fd6f95476cd46d')

export default Vue.extend({
    name: 'blog-post',
    data() {
      return {
        post: {},
        cursorPost: <boolean>false
      }
    },
    methods: {
      getPost() {
        this.$store.commit('deny_back_to_top')
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            this.post = res.data
            this.$store.commit('allow_back_to_top')
            setTimeout(() => {
              this.apply_click_to_img()
            },1)
          }).catch((res) => {
            console.log(res)
          })
      },
      displayModal(img_source):any {
        console.log('calling displayModal')
        this.$store.commit('show_lightbox')
        this.$store.commit('set_lightbox_img', {
          img_src: img_source})
      },
      apply_click_to_img() {
        let images = document.getElementsByClassName('montserrat')[0].getElementsByTagName('IMG')
        for (let i=0; i<images.length; i++) {
          images[i].addEventListener("click", () => {
            this.displayModal(images[i].getAttribute('src'))});
        }
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
.credits {
  font-family: Montserrat, sans-serif;
  font-size: 10px;
}

.center {
    margin: 0;
    width: 60%;
    position: absolute;
    /* margin-top: calc(250px - 30vh); */
    left: 50%;
    transform: translate(-50%);
}

@media (max-width:550px) {
  .center {
    width: 80%
  }
}

div {
    font-size: 15px
}

h1 {
    font-size: 20px
}

.montserrat {
  font-family: Montserrat;
}

.montserrat >>> img {
  display: block;
  height: auto;
  max-width:100%;
  transition: 0.3s; 
}

.montserrat >>> img:hover {
  cursor: -moz-zoom-in; 
  cursor: -webkit-zoom-in; 
  cursor: zoom-in;  
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
      width: 100%;
  }
}

@media only screen and (max-width: 850px) {
  .montserrat >>> h1 {
    font-size: 18px;
  }

  .montserrat >>> h2 {
    font-size: 16px;
  }
}
</style>
