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
                <h2 class="post_title">{{ post.title }}</h2>
                <p class="post_summary">{{ post.summary }}</p>                 
            </router-link>      
        </div>
  </div>
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
            posts: <any>[]           
        }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
            let data = res.data.data
            for (let i =0; i<res.data.data.length; i++){
                let category = data[i].categories[0].name
                if (category == 'project'){
                    this.posts.push(data[i])
                }
            }
        //   this.posts = res.data.data
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
    color: #fff;
    border-radius: 10px;
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

.wrapper {
    display: grid;
    grid-template-columns: 20vw 20vw 20vw;
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

.post_title {
    color: #fdb027;
    text-align: center;
    font-family: Montserrat;
}

.post_summary {
    font-family: Montserrat;
    text-align: center;
    font-size: 15px
}

a {
    text-decoration: none;
}

@media (max-width: 900px) {
    .box {
        color: #fff;
        border-radius: 10px;
        width: 30vw;
    }    

    img {
        border-radius: 10px;
        width: 30vw;
        height: 25vw;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 30vw 30vw;
        grid-column-gap: 5vw;
        grid-row-gap: 5vh;
        justify-items: center;
    }    
}
</style>