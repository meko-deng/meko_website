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
        <!-- <div class='nav nav-side nav-default'>
            <a class='nav-link' href='#'><router-link @click.native="addClass(), setLogoTrue('project')" to='/Projects'>PROJECTS</router-link></a>
            <br class="separator">
            <a class='nav-link' href='#'><router-link @click.native="addClass(), setLogoTrue('blog')" to='/Blog'>BLOG</router-link></a>
            <br class="separator">
            <a class='nav-link' href='#'><router-link @click.native="addClass(), setLogoTrue('aboutme')" to='/Aboutme'>ABOUT ME</router-link></a>
            <br class="separator">
            <a class='nav-link' href='#'><router-link @click.native="addClass(), setLogoTrue('resume')" to='/Resume'>RESUME</router-link></a>
        </div> -->
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
            //could use VueX (will the states be shared accross different tabs?)
            logoTrue: <Object> {
                'main': true,
                'project': false,
                'blog': false,
                'aboutme': false,
                'resume': false
            },
            main: <boolean>true,
            header: <any>"",
            image: <any>"",
            h1: <any>"",
            h2: <any>"",
            nav: <any>"",
            logos: <any>"",
            break: <any>"",
        }
    },
    components: {
        insta, facebook, github, codepen, mainLogo, mainLogoSmall, test, projectsLogo, blogsLogo, aboutmeLogo, resumeLogo
    },
    methods:{
        addClass(){
            //if the active classes haven't been added already
            if (document.querySelector('.h2Active') == null && document.querySelector('.header_top') == null) {
                this.add_newClasses()
                this.emit_finished(true)
                setTimeout(() => {
                    console.log('removing separators')
                    this.remove_separators()
                }, 800) 
            } else {
                this.$emit('reloadBackToTop')
            }        
        },
        remove_separators() {
            let breaker = document.getElementsByClassName('separator')

            while (breaker[0]) {
                this.nav.removeChild(breaker[0])
            }
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
        apply_topClasses() {
            this.header.classList.add('header_top')
            this.image.classList.add('imgStatic_top')
            this.h1.classList.add('h1_name_top')
            this.h2.classList.add('h2_name_top')
            this.logos.classList.add('logo_links_top')
            this.nav.classList.add('nav-side_top')

            this.emit_finished(false)
        },
        add_newClasses() {
            if (window.innerWidth < 1060) {
                this.nav.classList.add('navActive_small')
                this.logos.classList.add('logo_linksActive_small')
                this.image.classList.add('imgActive_small')
                this.h1.classList.add('h1Active_small')
            } else {
                this.nav.classList.add('navActive')
                this.image.classList.add('imgActive')
                this.logos.classList.add('logo_linksActive')
                this.h1.classList.add('h1Active')
            }
            this.header.classList.add('headerActive')
            this.h2.classList.add('h2Active')

            this.image.classList.remove('imgStatic')
        },
        emit_finished(delay:boolean) {
            if (delay) {
                setTimeout (() => {
                    this.$emit('finishedLoading')
                    console.log('finished_loading')
                }, 2000)
            } else {
                console.log('here')
                this.$emit('finishedLoading')
            }
        },
        adjust_clientWidth() {
            //do this for big and small, and for smashing the screen (remove elements until minimum)
            if (window.innerWidth < 1060) {
                // this.remove_separators()
                let bigActive = document.getElementsByClassName('big-nav')
                let navActive = document.getElementsByClassName('navActive')
                if (bigActive.length > 0) {
                    this.nav.classList.add('small-nav')
                    this.nav.classList.remove('big-nav')
                    
                    this.image.classList.add('small-img')
                    this.image.classList.remove('big-img')

                    this.logos.classList.add('small-logo_links')
                    this.logos.classList.remove('big-logo_links') 

                    this.h1.classList.add('small-h1')
                    this.h1.classList.remove('big-h1') 

                } else if (navActive.length > 0) {
                    this.nav.classList.add('small-nav')
                    this.nav.classList.remove('nav-side')
                    this.nav.classList.remove('navActive')
                    
                    this.image.classList.add('small-img')
                    this.image.classList.remove('imgActive')

                    this.logos.classList.add('small-logo_links')
                    this.logos.classList.remove('logo_linksActive')

                    this.h1.classList.add('small-h1')
                    this.h1.classList.remove('h1Active')
                }
            } else {
                let smallActive = document.getElementsByClassName('small-nav')
                let smallnavActive = document.getElementsByClassName('navActive_small')
                if (smallActive.length > 0) {
                    this.nav.classList.add('big-nav')
                    this.nav.classList.remove('small-nav')

                    this.image.classList.add('big-img')
                    this.image.classList.remove('small-img') 

                    this.logos.classList.add('big-logo_links')
                    this.logos.classList.remove('small-logo_links') 

                    this.h1.classList.add('big-h1')
                    this.h1.classList.remove('small-h1') 
                                
                } else if (smallnavActive.length > 0) {
                    this.nav.classList.add('big-nav')
                    this.nav.classList.remove('nav-side')
                    this.nav.classList.remove('navActive_small')

                    this.image.classList.add('big-img')
                    this.image.classList.remove('imgActive_small')

                    this.logos.classList.add('big-logo_links')
                    this.logos.classList.remove('logo_linksActive_small') 

                    this.h1.classList.add('big-h1')
                    this.h1.classList.remove('h1Active_small')                                     
                }
            }
        }
    },
    created: function() {
        window.addEventListener('resize',this.adjust_clientWidth)
    },
    mounted: function() {
        this.header = document.getElementsByClassName('header')[0]
        this.image = document.getElementsByClassName('img')[0]
        this.h1 = document.getElementsByClassName('h1_name')[0]
        this.h2 = document.getElementsByClassName('h2_name')[0]
        this.nav = document.getElementsByClassName('nav')[0]
        this.logos = document.getElementsByClassName('logo_links')[0]  

        //put this into store eventually
        if (window.location.hash != "#/") {
            this.remove_separators()
            if (window.location.hash == "#/Projects") {
                this.setLogoTrue('project')
            } else if (window.location.hash.includes("#/Blog") || window.location.hash.includes("#/blog")) {
                this.setLogoTrue('blog')
            } else if (window.location.hash == "#/Aboutme") {
                this.setLogoTrue('aboutme')
            } else if (window.location.hash == "#/Resume") {
                this.setLogoTrue('resume')
            }

            this.apply_topClasses()
        }
    }
})
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.header {
    height: 95vh;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    border-radius: 6px;
    transition: all .2s ease-in;
    overflow-x: hidden;
    overflow-y: hidden;
}

@media (max-height:550px) {
    .header {
        overflow-y: auto
    }
}

img {
    border-radius: 50%; 
    display: block;
    margin: 0 auto;
    height: 30vh;   
}

.img {
    position: absolute;
    left: 0;
    top: 35vh;
    width: 100%;
    text-align: center;
    transform: scale(5.3);
}

.small-img {
    position: absolute;
    top: 40px;
    transform: scale(1.5);
}

.big-img {
    position: absolute;
    top: 57px;
    transform: scale(1.5);
}

h1 {
    display: block;
}

.h1_name {
    position: absolute;
    left: -15vw;
    top: 30vh;
    width: 100%;
}

.small-h1 {
    left: 0vw;
    transform: scale(0.7);    
    top: 158px;
}

.big-h1 {
    left: 0vw;
    transform: scale(0.7);
    top: 175px;
}

.h2_name {
    position: absolute;
    left: -15vw;
    top: calc(30vh + 27px);
    width: 100%;
}

.nav {
    position: absolute;
}

.nav-oneLine {
    display: none;
}

.small-nav {
    width: 100%;
    top: 210px;
    left: 0;
    text-align: center;
}

.big-nav {
    top: 5%;
    left: -2vw;
    opacity: 1;
    width: 100%; 
    text-align: right;
}

.logo_links {
    position: absolute;
    left: -15vw;
    top: calc(30vh + 27px + 30px);
    width: 100%;
    text-align: center;
    transform: scale(0.4);
}

.small-logo_links {
    top: 185px;
    left: 0vw;
    transform: scale(0.3);
}

.big-logo_links {
    left: 0vw;
    top: 185px;
    transform: scale(0.3);
}

.nav-side {
    position: relative;
    left: calc(50% - 15vw - 60px);
    top: calc(30vh + 27px + 30px + 65px);
    width: 120px; 
    text-align: center;   
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

a {
    text-decoration: none; 
    font-family: Montserrat, sans-serif;
    color: #bbbbbb; 
    padding: 5px;
}

.small-nav .nav-link a {
    font-size: 12px !important;
}

.big-nav .nav-link a {
    font-size: 15px !important;
}

.nav-side_top .nav-link a {
    font-size: 15px;
}

.logo_links a:hover {
    opacity: 1;
}

a:hover {
    color: #707070; 
}
.headerActive {
    animation: move_header_up 2.2s forwards 0s ease;
}

.imgActive {
    animation: img_animation 2.2s forwards 0s ease;
}

.h1Active {
    animation: h1_animation 2.2s forwards 0.4s ease;
}

.h1Active_small {
    animation: h1_animation_small 2.2s forwards 0.4s ease;
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

.logo_linksActive_small {
    animation: logo_links_animation_small 2.2s forwards 0.4s ease
}

.imgActive_small {
    animation: img_animation_small 2.2s forwards 0s ease;
}

/* ------ static header activated ------ */
.header_top {
    height: 240px;
    overflow: visible
}

.imgStatic_top {
    left: 0 !important ;
    top: 57px;
    transform:scale(1.5) !important;    
}

.h1_name_top {
    top: 175px;
    left: 0vw !important;
    transform: scale(0.7) !important;
}

.h2_name_top {
    opacity: 0;
}

.logo_links_top {
    top: 185px ;
    left: 0vw !important;
    transform: scale(0.3) !important;    
}

.nav-side_top {
    top: 5%;
    left: -2vw;
    opacity: 1 ;
    width: 100% !important; 
    transform: translateY(0vh) ;
    text-align: right;    
}

/* ------ KEYFRAMES ------ */
@keyframes move_header_up {
    from{height: 95vh}
    to{
        height: 240px;
        overflow: visible
        }    
}

@keyframes img_animation{
    0%{opacity: 0}
    40%{opacity: 0}
    100%{
        opacity: 1;
        top: 57px;
        transform:scale(1.5);
        }
}

@keyframes img_animation_small{
    0%{opacity: 0}
    40%{opacity: 0}
    100%{
        top: 40px;
        transform: scale(1.5);
        }
}

@keyframes h1_animation{
    from{}
    to{
        top: 175px;
        left: 0vw;
        transform: scale(0.7);
        }
}

@keyframes h1_animation_small{
    from{}
    to{
        top: 158px;
        left: 0vw;
        transform: scale(0.7);
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
        top: 185px;
        left: 0vw;
        transform: scale(0.3);
    }
}

@keyframes logo_links_animation_small{
    from{}
    to{
        top: 167px;
        left: 0vw;
        transform: scale(0.3);
    }
}

@keyframes nav_animation{
    0%{ 
        opacity: 1;
        position: relative;
        left: calc(50% - 15vw - 60px);
        top: calc(30vh + 27px + 30px + 65px);
        width: 120px; 
        text-align: center;
    }
    30%{
        opacity: 0;
        position: absolute;
        left: 29.25vw;
        top: 53vh;
        text-align: center;
        font-size: 15px;           
    }
    49% {
        width: 120px; 
        left: 0%;
        font-size: 15px;
    }
    50% {
        top: 0%;
        left: calc(100vw - 100%);
        text-align: right;
        width: 100%; 
        opacity: 0;
    }
    100%{
        top: 5%;
        left: -2vw;
        opacity: 1;
        width: 100%; 
        transform: translateY(0vh);
        text-align: right;
        font-size: 15px;
        }
}

@keyframes nav_animation_small{
    0%{opacity: 0}
    80%{opacity: 0}
    100%{
        opacity: 1;
        top: 210px;
        left: 0;
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 1060px) {
    .header {
        overflow-x: hidden;
        overflow-y: auto;
    }

    .imgStatic {
        position: absolute;
        left: -50px;
        top: calc(10px + 27px + 13px + 90px);
        width: 100%;
        /* text-align: center; */
        transform: scale(3.5);  
    }

    .imgStatic_top {
        top: 40px;
    }

    .h1_name {
        position: absolute;
        left: 0;
        top: 10px;
        width: 100%;
        /* border: 2px solid rgb(255, 43, 43); */
    }

    .small-h1 {
        left: 0vw;
        transform: scale(0.7);         
        top: 158px;
    }

    .h1_name_top {
        top: 158px;
    }

    .h2_name {
        position: absolute;
        left: 0;
        top: calc(10px + 27px);
        width: 100%;
        /* border: 2px solid #2B9DFF;    */
    }  

    .logo_links {
        position: absolute;
        left: 0;
        top: calc(10px + 27px + 13px + 90px + 250px);
        width: 100%;
        text-align: center;
        transform: scale(0.4);
    }

    .small-logo_links {
        transform: scale(0.3);
        top: 167px;
    }

    .logo_links_top {
        transform: scale(0.3);
        top: 167px;
    }

    .nav-side {
        position: absolute;
        left: 0;
        top: calc(10px + 27px + 13px + 90px + 290px);
        width: 100%; 
        text-align: center;   
    }

    .nav-side .nav-link a {
        font-size: 12px ;
    }

    .nav-side_top {
        left: 0;
        top: 210px;
    } 

    .nav-side_top .nav-link a {
        font-size: 12px;
    }    
}

@media (max-width: 440px) {
    /* .nav-link a {
        font-size: 12px;
    } */
}
</style>