<template>
  <div class="wrapper center">
        <div class="box"
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
        >
            <router-link :to="'/blog/' + post.slug">
                <article class="media">
                <figure class= "image" :style="figure_background_color_style">
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
                    <p class="post_summary">{{ post.summary }}</p>
                    <p class="read_more">Read more</p>
                </figure> 
                </article>
                <h2 class="post_title">{{ post.title }}</h2>                
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
            posts: <any>[],
            figure_background_color: <string>'black',
            doit: <number>0                           
        }
    },
    computed: {
        figure_background_color_style(): any {
            return {
                background: this.figure_background_color
            }
        }
    },    
    methods: {
      getPosts() {
        this.$store.commit('deny_back_to_top')
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
            this.$store.commit('allow_back_to_top')
        })
      },
      hide_black_background() {
          this.figure_background_color  = 'white'
          clearTimeout(this.doit)
          this.doit = setTimeout(() =>{this.figure_background_color  = 'black'}, 500)
      }
    },    
    created() {
      this.getPosts()
      window.addEventListener('resize',this.hide_black_background)
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
    position: relative;
    margin: 0;
    opacity: 1;
    border-radius: 10px;
    width: auto;
    height: 15vw;
    overflow: hidden;
    /* background: black; */
}

img {
    position: absolute;
    lefT: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    width: auto;
    height: 15vw;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;    
}

.wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 20vw 20vw 20vw;
    grid-column-gap: 5vw;
    grid-row-gap: 5vh;
    justify-items: center;
    /* border: 2px solid #2B9DFF; */
}

.center {
    margin: 0;
    position: absolute;
    /* margin-top: calc(250px - 30vh); */
    left: 50%;
    transform: translate(-50%);
}

.post_title {
    color: #fdb027;
    text-align: left;
    font-size: 17px;
    font-family: Montserrat;
}

.post_summary {
    font-family: Montserrat;
    position: absolute;
    text-align: left;
    font-size: 12px;
    color: white;
    top: 0;
    left: 10px;
    right: 10px;
    /* transform: translate(-50%, -50%); */
    opacity: 0;
    -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out; 
}

.read_more {
    font-family: Montserrat;
    position: absolute;
    text-align: right;
    font-size: 12px;
    color: white;
    bottom: 0;
    right: 10px;
    /* left: 10px;
    right: 10px; */
    /* transform: translate(-50%, -50%); */
    opacity: 0;
    -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out; 
}

.image:hover .post_summary{
    opacity: 1;
}

.image:hover .read_more{
    opacity: 1;
}

.read_more:hover {
    font-size: 13px;    
}

.image:hover img {
    opacity: 0.6
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

    .image {
        width: 30vw;
        height: 25vw;
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

@media (max-width: 600px) {
    .box {
        color: #fff;
        border-radius: 10px;
        width: 50vw;
    }

    .image {
        width: 50vw;
        height: 40vw;
    }    

    img {
        border-radius: 10px;
        width: 50vw;
        height: 40vw;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 50vw;
        grid-row-gap: 5vh;
        justify-items: center;
    }        
}
</style>