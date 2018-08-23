<template>
    <header class="header">
        <div class="img imgStatic"><main-logo-small v-if="logoTrue.main"></main-logo-small>
                                    <projects-logo v-if="logoTrue.project"></projects-logo>
                                    <blogs-logo v-if="logoTrue.blog"></blogs-logo>
                                    <aboutme-logo v-if="logoTrue.aboutme"></aboutme-logo>
                                    <resume-logo v-if="logoTrue.resume"></resume-logo>
                                    <!-- <test v-else></test> -->
        </div>
        <div class="h1_name"><h1 font>MEKO D.</h1></div>
        <div class="logo_links">
            <a href="https://www.instagram.com/md_aw/?hl=en" target="_blank"><insta></insta></a>
            <a href="https://github.com/MekoDeng94" target="_blank"><github></github></a>
            <a href="https://codepen.io/MekoDeng" target="_blank"><codepen></codepen></a>
            <!-- LINKEDIN -->
        </div>
        <div class="h2_name"><h2>developper in progress</h2></div>
        <div class='nav nav-side'>
            <a class='nav-link' href='#'><router-link @click.native="addClass(), setLogoTrue('project')" to='/Projects'>PROJECTS</router-link></a>
            <a class='nav-link' href='#'><router-link @click.native="addClass(), setLogoTrue('blog')" to='/Blog'>BLOG</router-link></a>
            <a class='nav-link' href='#'><router-link @click.native="addClass(), setLogoTrue('aboutme')" to='/Aboutme'>ABOUT ME</router-link></a>
            <a class='nav-link' href='#'><router-link @click.native="addClass(), setLogoTrue('resume')" to='/Resume'>RESUME</router-link></a>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'
import mainLogo from '../assets/main_logo.svg'
import mainLogoSmall from '../assets/main_logo_small.svg'
import insta from '../assets/instagram_logo.svg'
import facebook from '../assets/facebook_logo.svg'
import github from '../assets/github_logo.svg'
import codepen from '../assets/codepenio_logo.svg'

import test from '../assets/pages/test.svg'
import projectsLogo from '../assets/pages/projects.svg'
import blogsLogo from '../assets/pages/blogs.svg'
import aboutmeLogo from '../assets/pages/aboutme.svg'
import resumeLogo from '../assets/pages/resume.svg'

export default Vue.extend({
    data() {
        return{
            //could use VueX
            logoTrue: <Object> {
                'main': true,
                'project': false,
                'blog': false,
                'aboutme': false,
                'resume': false
            },
            main: <boolean>true
        }
    },
    components: {
        insta, facebook, github, codepen, mainLogo, mainLogoSmall, test, projectsLogo, blogsLogo, aboutmeLogo, resumeLogo
    },
    // computed: {
    //     big(): any {
    //         return(window.innerWidth > 1000)
    //     }
    // },
    methods:{
        addClass(){
            //if the active classes haven't been added already
            if (document.querySelector('.navActive') == null) {
                this.add_newClasses()
                this.emit_finished()
            } else {
                console.log('classes already exist!')
                this.$emit('reloadBackToTop')
            }
            // this.add_newClasses()
            // this.emit_finished()  
            // this.$emit('reloadBackToTop')          
        },
        setLogoTrue(target) {
            for (var key in this.logoTrue) {
                if (this.logoTrue.hasOwnProperty(key)) {
                    if (key == target) {
                        this.logoTrue[key] = true
                    } else {
                        this.logoTrue[key] = false
                    }
                }
            }
            console.log(this.logoTrue)
        },
        add_newClasses() {
            let header = document.getElementsByClassName('header')[0]
            let image = document.getElementsByClassName('img')[0]
            let h1 = document.getElementsByClassName('h1_name')[0]
            let h2 = document.getElementsByClassName('h2_name')[0]
            let nav = document.getElementsByClassName('nav')[0]
            let logos = document.getElementsByClassName('logo_links')[0]

            if (window.innerWidth < 1060) {
                nav.classList.add('navActive_small')
                image.classList.add('imgActive_small')
            } else {
                nav.classList.add('navActive')
                image.classList.add('imgActive')
            }
            logos.classList.add('logo_linksActive')
            header.classList.add('headerActive')
            h1.classList.add('h1Active')
            h2.classList.add('h2Active')

            image.classList.remove('imgStatic')
        },
        emit_finished() {
            setTimeout (() => {
                this.$emit('finishedLoading')
                console.log('finished_loading')
            }, 2000)
        },
        adjust_clientWidth() {
            let header = document.getElementsByClassName('header')[0]
            let image = document.getElementsByClassName('img')[0]
            let nav = document.getElementsByClassName('nav')[0]
            
            //do this for big and small, and for smashing the screen (remove elements until minimum)
            if (window.innerWidth < 1060) {
                let bigActive = document.getElementsByClassName('big-nav')
                let navActive = document.getElementsByClassName('navActive')
                if (bigActive.length > 0) {
                    nav.classList.add('small-nav')
                    nav.classList.remove('big-nav')
                    
                    image.classList.add('small-img')
                    image.classList.remove('big-img')

                } else if (navActive.length > 0) {
                    nav.classList.add('small-nav')
                    nav.classList.remove('nav-side')
                    nav.classList.remove('navActive')
                    
                    image.classList.add('small-img')
                    image.classList.remove('imgActive')
                }
            } else {
                console.log('in else')
                let smallActive = document.getElementsByClassName('small-nav')
                let smallnavActive = document.getElementsByClassName('navActive_small')
                if (smallActive.length > 0) {
                    nav.classList.add('big-nav')
                    nav.classList.remove('small-nav')

                    image.classList.add('big-img')
                    image.classList.remove('small-img')                     
                                
                } else if (smallnavActive.length > 0) {
                    nav.classList.add('big-nav')
                    nav.classList.remove('nav-side')
                    nav.classList.remove('navActive_small')

                    image.classList.add('big-img')
                    image.classList.remove('imgActive_small')                    
                }
            }
        }
    },
    created: function() {
        window.addEventListener('resize',this.adjust_clientWidth)
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
    overflow: hidden;
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
    top: 40%;
    width: 100%;
    text-align: center;
    /* height: 50vh; */
    transform: scale(5.5);
    /* border: 2px solid rgb(255, 43, 43); */
}

.small-img {
    position: absolute;
    top: 9vh;
    transform: scale(1.5);
}

.big-img {
    position: absolute;
    top: 10vh;
    transform: scale(1.5);
}

h1 {
    display: block;
}

.h1_name {
    position: absolute;
    left: -15vw;
    top: calc(20% + 14vh);
    width: 100%;
    /* border: 2px solid rgb(255, 43, 43); */
}

.h2_name {
    position: absolute;
    left: -15vw;
    top: calc(20% + 14vh + 27px);
    width: 100%;
    /* border: 2px solid #2B9DFF;    */
}

.nav {
    position: absolute;
}

.small-nav {
    width: 100%;
    top: 0vh;
    transform: scale(0.8);
    text-align: center;
}

.big-nav {
    top: 5%;
    left: calc(100vw - 100%);
    width: 100%; 
    transform: scale(0.8);
    text-align: right;
}

/* .nav-center {
    top: calc(20% + 39vh + 150px);  
    width: 100%;
    text-align: center;    
} */

.nav-side {
    position: absolute;
    left: 29.25vw;
    top: 53vh;
    width: 10%; 
    text-align: center;   
}

.logo_links {
    position: absolute;
    left: -15vw;
    top: 42vh;
    width: 100%;
    text-align: center;
    transform: scale(0.4);
}

.logo_links a {
    opacity: 0.5;
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

.logo_links a:hover {
    opacity: 1;
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

.logo_linksActive {
    animation: logo_links_animation 2.2s forwards 0.4s ease
}

.navActive {
    animation: nav_animation 2.2s forwards 0.5s ease;
}

.navActive_small {
    animation: nav_animation_small 2.2s forwards 0.5s ease;
}

.imgActive_small {
    animation: img_animation_small 2.2s forwards 0s ease;
}

/* ------ KEYFRAMES ------ */
@keyframes move_header_up {
    from{height: 93vh}
    to{
        height: 40vh;
        }    
}

@keyframes img_animation{
    0%{opacity: 0}
    40%{opacity: 0}
    100%{
        opacity: 1;
        top: 10vh;
        transform:scale(1.5);
        }
}

@keyframes img_animation_small{
    0%{opacity: 0}
    40%{opacity: 0}
    100%{
        top: 9vh;
        transform: scale(1.5);
        }
}

@keyframes h1_animation{
    from{}
    to{
        top: 25vh;
        left: 0vw;
        transform: translateY(5vh) scale(0.7);
        }
}

@keyframes h2_animation{
    from{}
    to{
        opacity: 0;
        }
}

@keyframes logo_links_animation{
    from{}
    to{
        top: calc(25vh + 10px);
        left: 0vw;
        transform: translateY(5vh) scale(0.3);
    }
}

@keyframes nav_animation{
    0%{opacity: 1;
        position: absolute;
        left: 29.25vw;
        top: 53vh;
        width: 10%; 
        text-align: center;   
    }
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
        width: 100%; 
        transform: translateY(0vh) scale(0.8);
        text-align: right;
        }
}

@keyframes nav_animation_small{
    0%{opacity: 1}
    100%{
        top: 0;
        opacity: 1;
        transform: scale(0.8);
        text-align: center;
    }
}

@media (max-width: 1060px) {
    .imgStatic {
        position: absolute;
        left: -5vw;
        top: calc(2vh + 27px + 13px + 15vh);
        width: 100%;
        text-align: center;
        transform: scale(3.5);  
    }

    .h1_name {
        position: absolute;
        left: 0;
        top: 2vh;
        width: 100%;
        /* border: 2px solid rgb(255, 43, 43); */
    }
    .h2_name {
        position: absolute;
        left: 0;
        top: calc(2vh + 27px);
        width: 100%;
        /* border: 2px solid #2B9DFF;    */
    }  

    .logo_links {
        position: absolute;
        left: 0;
        top: calc(2vh + 27px + 13px + 15vh + 250px);
        width: 100%;
        text-align: center;
        transform: scale(0.4);
    }  

    .nav-side {
        position: absolute;
        left: 0;
        top: calc(2vh + 27px + 13px + 15vh + 290px);
        width: 100%; 
        text-align: center;   
    }       
}
</style>