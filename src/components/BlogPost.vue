<template>
  <div id="blog-post" class="fade_in center">
    <h1 class="montserrat">{{ post.data.title }}</h1>
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

    <div id="myModal" class="modal">

      <span class="close">&times;</span>

      <img class="modal-content" id="img01">

      <div id="caption"></div>   
    </div> 
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
            console.log(this.post)
            this.$store.commit('allow_back_to_top')
          }).catch((res) => {
            console.log(res)
          })
      },
      displayModal() {
        console.log('modal_here')
        var modal = document.getElementById('myModal')
        var modalImg = document.getElementById("img01");
        modal.style.display = "block"
        modalImg.src = this.src
      }
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },    
    created() {
      this.getPost()
      document.getElementsByTagName('img')[0].addEventListener("click",this.displayModal)
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
  width:100%;
  transition: 0.3s; 
}

.montserrat >>> img:hover {
  cursor: -moz-zoom-in; 
  cursor: -webkit-zoom-in; 
  cursor: zoom-in;  
}

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}

.modal-content, #caption { 
    animation-name: zoom;
    animation-duration: 0.6s;
}

@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
    .modal-content {
        width: 100%;
    }
}
</style>
