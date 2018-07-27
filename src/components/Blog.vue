<template>
  <div class="wrapper center">
        <div class="box"
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
        >
            <router-link :to="'/blog/' + post.slug">
                <article class="media">
                <figure class= "image">
                    <img
                    v-if="post.featured_image"
                    :src="post.featured_image"
                    alt=""
                    >
                    <img
                    v-else
                    src="http://via.placeholder.com/250x250"
                    alt=""
                    >
                </figure>
                </article>
                <h2>{{ post.title }}</h2>
                <p>{{ post.summary }}</p>                 
            </router-link>      
        </div>
  </div>
<!-- <div class="wrapper">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
  <div class="box">8</div>
  <div class="box">9</div>
  <div class="box">10</div>
  <div class="box">11</div>
</div>   -->
</template>

<script lang="ts">
import Vue from 'vue'
import Butter from 'buttercms'

export const butter = Butter('3de9eb70ae75166369d82f5404fd6f95476cd46d')


export default Vue.extend({
    name: 'blog-home',    
    data() {
        return{
            page_title: 'Blog',
            posts: []            
        }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
          this.posts = res.data.data
          console.log(this.posts)
        })
      }
    },    
    created() {
      this.getPosts()
    }
})
</script>

<style lang="css" scoped>
.box {
    /* border: 2px solid #444; */
    color: #fff;
    border-radius: 10px;
    /* padding: 20px; */
    width: 20vw;
}

.image {
    margin: 0;
}

img {
    border-radius: 10px;
    width: 20vw;
    height: 15vw;
}
/* .box:nth-child(even) {
  background-color: #ccc;
  color: #000;
} */

.wrapper {
    display: grid;
    grid-template-columns: 20vw 20vw 20vw;
    /* grid-template-rows: 50px 50px; */
    grid-column-gap: 5vw;
    grid-row-gap: 5vh;
    justify-items: center;
}

.center {
    margin: 0;
    position: absolute;
    margin-top: calc(250px - 30vh);
    left: 50%;
    transform: translate(-50%);
}

h2 {
    color: #707070;
    text-align: center;
    font-family: Montserrat;
}

a {
    text-decoration: none;
}
</style>