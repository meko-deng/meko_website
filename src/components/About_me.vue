<template>
    <div class="no-overflow">
        <img class="background" height="800px" src="../assets/me_drawing.jpg">
        <div class="center block">
            <h1>Hi there! I'm Meko</h1>
            <h2>I consider myself a passionate illustrator, avid developer and occasional storyteller</h2>
            I deeply stand by the belief that growth stems from the process of learning and this belief is what motivates
            me to do the things that I do.
            <!-- My goal is to inspire others to learn and grow through sharing -->
            <br>
            <br>
            <br>
            <br>
            <h2> Coding </h2>
            My journey to the path of becoming a developer started with web development through a memorable internship
            experience. Though I am still in the early stages of this journey, everyday, I am driven to learn more and improve on
            areas where I'm lacking.
            <br>
            <h2> Illustrating </h2>
            Art runs through my veins, illustrating helps me express myself and share bits and part of me with all of you.
            <br>
            <br>
            <br>
            <br>
            If there is anything you would like to share, anything interesting you think I could take a look at, please feel
            free to contact me!
            <br>
            <br>
            All illustrations/ animations on this website was designed by me. I used VueJs, HTML, CSS, ButterCMS and SVG to create
            the website. If you notice any weird behaviors, please let me know!
            <br>
            <br>
            <br>
            <br>
            <h1>Contact Me!</h1>
            <strong>E-mail:</strong> mekodeng94@gmail.com
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>
.no-overflow {
    overflow-x: hidden
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
    /* display: block; */
    /* top: 50vh; */
    z-index: -1;
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
    .background {
        position: absolute;
        right: -150px;
        z-index: -1;
    }     
}

</style>


