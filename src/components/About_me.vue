<template>
    <div class="no-overflow" style="top: 0">
        <img class="background" height="800px" src="../assets/me_drawing.jpg">
        <div class="center block">
            <h1>Hi there! I'm Meko</h1>
            <h2>I consider myself a passionate illustrator, an avid developer and an occasional storyteller</h2>
            I deeply stand by the belief that growth stems from the process of learning and it is this belief that drives me to constantly push myself 
            out of my comfort zone - because I believe that we learn the most when we're not in our element.
            <br>
            <br>
            <br>
            <h2> Coding </h2>
            My journey to the path of becoming a developer started with web development through a memorable internship
            experience. Though I am still in the early stages of this journey, everyday, I strive to broaden my knowledge and improve on
            areas where I'm lacking.
            <br>
            <br>
            <br>
            <h2> Illustrating </h2>
            Art runs through my veins, illustrating helps me express myself and share bits and part of me with all of you (the world). I like
            to add a little touch of my creativity in what I create - it's the cherry on the cake!
            <br>
            <br>
            <br>
            <h2> Miscellaneous </h2>
            Besides Coding and Drawing, I enjoy physical exercise such as - running, bouldering, badminton, skateboarding, volleyball etc... 
            There's nothing like spending a nice day out in the open before sundown. Nightime and dawn are the best times where creativity kicks 
            in in the coding cave.
            <br>
            <br>
            <br>
            If there is anything you would like to share, please feel free to contact me!
            <br>
            <br>
            All illustrations/ animations on this website stemmed from my imagination. I used VueJs, HTML, CSS, ButterCMS and SVG. If you notice any weird behaviors, please let me know!
            <br>
            <br>
            <br>
            <br>
            <h1>Contact Me!</h1>
            <strong>E-mail:</strong> deng.meko@gmail.com
            <br>
            <br>
            <a href="https://drive.google.com/uc?export=download&id=1Pb8mbqcoconBaYgqVlpaU6IsrtXBZt3I"><i class="fa fa-download" ></i></a> Download my Resume!
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    created: function() {
        this.$store.commit('allow_back_to_top')
    }
})
</script>

<style scoped>
.fa-download {
    color:#2a82c1;
    transform: scale(1.2)
}
.no-overflow {
    -webkit-transform: translate3d(0,0,0) !important;
    transform: translate3d(0,0,0) !important;
    top:0 !important;
    overflow-x: hidden !important;
}

.center {
    margin-left: 20vw;
    margin-right: 40vw;
}

.block{
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;  
    margin-left: 15vw;
    margin-right: 35vw;  
    z-index: 1 !important;
}

div {
    font-family: Montserrat;
    font-size: 14px
}

h1 {
    font-size: 20px
}

h2 {
    font-size: 18px
}

/* br {
    display: block;
    margin: 50px;
    line-height:22px;
} */

.background {
    position: absolute;
    right: 0vw;
    z-index: -1;
    /* display: block; */
    /* top: 50vh; */
    /* z-index: -1; */
    /* opacity: 0.8; */
}

@media (max-width: 1060px) {
    .center {
        margin-left: 20vw;
        margin-right: 20vw;
    }

    .block{
        background: rgba(255, 255, 255, 0.7);
        border-radius: 10px;  
        margin-left: 15vw;
        margin-right: 15vw;  
    }    
}

@media (max-width: 615px) {
    .no-overflow {
        position: relative;
        top:0 !important;
        overflow-x: hidden !important;
    }    
    .center {
        margin-left: 7vw;
        margin-right: 7vw;
    }

    .block{
        background: rgba(255, 255, 255, 0.7);
        border-radius: 10px;  
        margin-left: 2vw;
        margin-right: 2vw;  
    }   
    .background {
        right: -150px;
    } 
}

</style>


