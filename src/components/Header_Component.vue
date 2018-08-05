<template>
    <header class="header">
        <div class="img"><img src="../assets/shibuff.png"></div>
        <div class="h1_name"><h1 font>MEKO D.</h1></div>
        <div class="h2_name"><h2>developper in progress</h2></div>
        <div class='nav nav-center'>
            <a class='nav-link' href='#'><router-link @click.native="addClass()" to='/Projects'>PROJECTS</router-link></a>
            <a class='nav-link' href='#'><router-link @click.native="addClass()" to='/Blog'>BLOGS</router-link></a>
            <a class='nav-link' href='#'><router-link @click.native="addClass()" to='/Aboutme'>ABOUT ME</router-link></a>
            <a class='nav-link' href='#'><router-link @click.native="addClass()" to='/Resume'>RESUME</router-link></a>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return{
        }
    },
    methods:{
        addClass(){
            //if the active classes haven't been added already
            if (document.querySelector('.navActive') == null) {
                this.add_newClasses()
                this.emit_finished()
            } else {
                console.log('classes already exist!')
            }
        },
        add_newClasses() {
            let header = document.getElementsByClassName('header')[0]
            let image = document.getElementsByClassName('img')[0]
            let h1 = document.getElementsByClassName('h1_name')[0]
            let h2 = document.getElementsByClassName('h2_name')[0]
            let nav = document.getElementsByClassName('nav')[0]

            if (window.innerWidth < 900) {
                nav.classList.add('navActive_small')
            } else {
                nav.classList.add('navActive')
            }
            header.classList.add('headerActive')
            image.classList.add('imgActive')
            h1.classList.add('h1Active')
            h2.classList.add('h2Active')
        },
        emit_finished() {
            setTimeout (() => {
                this.$emit("finishedLoading")
                console.log('finished_loading')
            }, 2000)
        }
    }
})
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.header {
    height: 93vh;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    /* border: 2px solid #2B9DFF; */
    border-radius: 6px;
    transition: all .2s ease-in;
}

img {
    border-radius: 50%; 
    display: block;
    margin: 0 auto;
    height: 35vh;   
}

.img {
    position: absolute;
    left: 0;
    top: 20%;
    width: 100%;
    text-align: center;
    /* border: 2px solid rgb(255, 43, 43); */
}
h1 {
    display: block;
}
.h1_name {
    position: absolute;
    left: 0;
    top: calc(20% + 35vh);
    width: 100%;
    /* border: 2px solid rgb(255, 43, 43); */
}

.h2_name {
    position: absolute;
    left: 0;
    top: calc(20% + 35vh + 27px);
    width: 100%;
    /* border: 2px solid #2B9DFF;    */
}

.nav {
    position: absolute;
    left: 0;
    top: calc(20% + 35vh + 70px);  
    width: 100%;
    /* border: 2px solid rgb(255, 43, 43);    */
    text-align: center; 
}

h1, h2{
    position: relative;
    margin: 0;
    text-align: center;
    vertical-align: middle;
    font-family: Montserrat, sans-serif;
    color: #707070;
}

h1 {
    font-size: 27px;
    font-weight: bold;
}

h2 {
    font-size: 13px;
    font-weight: 400;
}

/* @font-face{
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css?family=Montserrat')    
} */

a {
    text-decoration: none; 
    font-family: Montserrat, sans-serif;
    color: #bbbbbb; 
    padding: 5px;
}

a:hover {
    color: #707070; 
}
.headerActive {
    /* position: relative; */
    animation: move_header_up 2.2s forwards 0s ease;
    /* height: 20vh; */
}

.imgActive {
    animation: img_animation 2.2s forwards 0s ease;
}

.h1Active {
    animation: h1_animation 2.2s forwards 0.4s ease;
}

.h2Active {
    animation: h2_animation 1s forwards 0s ease;
}

.navActive {
    animation: nav_animation 2.2s forwards 0.5s ease;
}
.navActive_small {
    animation: nav_animation_small 2.2s forwards 0.5s ease;
}
/* ------ KEYFRAMES ------ */
@keyframes move_header_up {
    from{height: 93vh}
    to{
        height: 30vh;
        }    
}

@keyframes img_animation{
    from{}
    to{
        transform: translateY(-35%) scale(0.5);
        }
}

@keyframes h1_animation{
    from{}
    to{
        top: 15vh;
        transform: translateY(5vh) scale(0.7);
        }
}

@keyframes h2_animation{
    from{}
    to{
        opacity: 0;
        }
}

@keyframes nav_animation{
    0%{opacity: 1}
    30%{
        opacity: 0;
    }
    49% {
        left: 0%
    }
    50% {
        top: 0%;
        left: calc(100vw - 100%);
        text-align: right;
        opacity: 0;
    }
    100%{
        top: 5%;
        left: calc(100vw - 100%);
        opacity: 1;
        transform: translateY(0vh) scale(0.8);
        text-align: right;
        }
}

@keyframes nav_animation_small{
    0%{opacity: 1}
    100%{
        /* top: 30vh;
        left: calc(100vw - 100%); */
        top: 25vh;
        opacity: 1;
        transform: scale(0.8);
        text-align: center;
    }
}
</style>