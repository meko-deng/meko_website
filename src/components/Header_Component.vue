<template>
    <header :class="header_classes">
        <div :class="image_classes"><main-logo-small v-if="logoTrue.main"></main-logo-small>
                                    <projects-logo v-if="logoTrue.project"></projects-logo>
                                    <blogs-logo v-if="logoTrue.blog"></blogs-logo>
                                    <aboutme-logo v-if="logoTrue.aboutme"></aboutme-logo>
                                    <resume-logo v-if="logoTrue.resume"></resume-logo>
        </div>
        <div :class="h1_classes"><h1 font>MEKO D.</h1></div>
        <div :class="logo_classes">
            <a href="https://www.linkedin.com/in/meko-deng-a13805128/" target="_blank"><i class="fa fa-linkedin" ></i></a>            
            <a href="https://www.instagram.com/md_aw/?hl=en" target="_blank"><i class="fa fa-instagram" ></i></a>
            <a href="https://github.com/MekoDeng94" target="_blank"><i class="fa fa-github-alt" ></i></a>
            <a href="https://codepen.io/MekoDeng" target="_blank"><i class="fa fa-codepen" ></i></a>
        </div>
        <div :class="h2_classes"><h2>developper in progress</h2></div>
        <div :class='nav_classes'>
            <router-link tag="a" @click.native="addClass(), setLogoTrue('project')" to='/Projects'>PROJECTS</router-link>
            <router-link tag="a" @click.native="addClass(), setLogoTrue('blog')" to='/Blog'>BLOG</router-link>
            <router-link tag="a" @click.native="addClass(), setLogoTrue('aboutme')" to='/Aboutme'>ABOUT ME</router-link>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'
import mainLogo from '../assets/main_logo.svg'
import mainLogoSmall from '../assets/main_logo_small.svg'

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
            classes_header: <Object>{
                'header': true,
                'headerActive': false,
                'header_top': false
            },
            classes_image: <Object>{
                'img': true,
                'imgStatic': true,
                'imgStatic_top': false,
                'small-img': false,
                'big-img': false,
                'imgActive': false,
                'imgActive_small': false,
            },
            classes_h1: <Object>{
                'h1_name': true,
                'h1_name_top': false,
                'h1Active_small': false,
                'h1Active': false,
                'small-h1': false,
                'big-h1': false,
            },
            classes_h2: <Object>{
                'h2_name': true,
                'h2Active': false
            },
            classes_logo: <Object>{
                'logo_links': true,
                'logo_links_top': false,
                'logo_linksActive_small': false,
                'logo_linksActive': false,
                'small-logo_links': false,
                'big-logo_links': false,
            },
            classes_nav: <Object>{
                'nav': true,
                'nav-side': true,
                'navActive': false,
                'navActive_small': false,
                'small-nav': false,
                'big-nav': false,
            },
        }
    },
    components: {
        mainLogo, mainLogoSmall, test, projectsLogo, blogsLogo, aboutmeLogo, resumeLogo
    },
    watch: {
        $route: function (to, from ) {
            if (to.fullPath == "/") {
                this.revertToInitialState()
            } else {
                if (!this.classes_nav['navActive']){
                    this.assignProperFormat()
                }
            }
        }
    },
    computed: {
        header_classes():any {
            return {
                'header' : this.classes_header['header'],
                'headerActive' : this.classes_header['headerActive'],
                'header_top' : this.classes_header['header_top']
            }
        },
        image_classes(): any {
            return {
                'img': this.classes_image['img'],
                'imgStatic': this.classes_image['imgStatic'],
                'imgStatic_top': this.classes_image['imgStatic_top'],
                'small-img': this.classes_image['small-img'],
                'big-img': this.classes_image['big-img'],
                'imgActive': this.classes_image['imgActive'],
                'imgActive_small': this.classes_image['imgActive_small']
            }
        },
        h1_classes():any {
            return {
                'h1_name': this.classes_h1['h1_name'],
                'h1_name_top': this.classes_h1['h1_name_top'],
                'h1Active_small': this.classes_h1['h1Active_small'],
                'h1Active': this.classes_h1['h1Active'],
                'small-h1': this.classes_h1['small-h1'],
                'big-h1': this.classes_h1['big-h1'],               
            }
        },
        h2_classes():any {
            return {
                'h2_name': this.classes_h2['h2_name'],
                'h2Active': this.classes_h2['h2Active']
            }
        },
        logo_classes():any {
            return {
                'logo_links': this.classes_logo['logo_links'],
                'logo_links_top': this.classes_logo['logo_links_top'],
                'logo_linksActive_small': this.classes_logo['logo_linksActive_small'],
                'logo_linksActive': this.classes_logo['logo_linksActive'],
                'small-logo_links': this.classes_logo['small-logo_links'],
                'big-logo_links': this.classes_logo['big-logo_links'], 
            }
        },
        nav_classes():any {
            return {
                'nav': this.classes_nav['nav'],
                'nav-side': this.classes_nav['nav-side'],
                'nav-side_top': this.classes_nav['nav-side_top'],
                'navActive': this.classes_nav['navActive'],
                'navActive_small': this.classes_nav['navActive_small'],
                'small-nav': this.classes_nav['small-nav'],
                'big-nav': this.classes_nav['big-nav'],
            }
        },
    },
    methods:{
        addClass(){
            //if the active classes haven't been added already
            if (document.querySelector('.h2Active') == null && document.querySelector('.header_top') == null) {
                this.add_newClasses()
                this.emit_finished(true)
            } else {
                this.$emit('reloadBackToTop')
            }        
        },
        revertToInitialState() {
            let all_classes = [
                this.classes_header, 
                this.classes_image,
                this.classes_h1,
                this.classes_h2,
                this.classes_logo,
                this.classes_nav
                ]
            for (let i=0; i< all_classes.length; i++) {
                for (var key in all_classes[i]) {
                    all_classes[i][key] = false
                }
            }
            this.classes_header['header'] = true
            this.classes_image['img'] = true
            this.classes_image['imgStatic'] = true
            this.classes_h1['h1_name'] = true
            this.classes_h2['h2_name'] = true
            this.classes_logo['logo_links'] = true
            this.classes_nav['nav'] = true
            this.classes_nav['nav-side'] = true

           this.setLogoTrue('main')
           this.$emit('revertToOriginal')
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
            this.classes_header['header_top'] = true
            this.classes_image['imgStatic_top'] = true
            this.classes_h1['h1_name_top'] = true
            this.classes_h2['h2_name_top'] = true
            this.classes_logo['logo_links_top'] = true
            this.classes_nav['nav-side_top'] = true

            this.emit_finished(false)
        },
        add_newClasses() {
            if (window.innerWidth < 1060) {
                this.classes_nav['navActive_small'] = true
                this.classes_logo['logo_linksActive_small'] = true
                this.classes_image['imgActive_small'] = true
                this.classes_h1['h1Active_small'] = true
            } else {
                this.classes_nav['navActive'] = true
                this.classes_image['imgActive'] = true
                this.classes_logo['logo_linksActive'] = true
                this.classes_h1['h1Active'] = true
            }
            this.classes_header['headerActive'] = true
            this.classes_h2['h2Active'] = true

            this.classes_image['imgStatic'] = false
        },
        emit_finished(delay:boolean) {
            if (delay) {
                setTimeout (() => {
                    this.$emit('finishedLoading')
                }, 2000)
            } else {
                this.$emit('finishedLoading')
            }
        },
        adjust_clientWidth() {
            //do this for big and small, and for smashing the screen (remove elements until minimum)
            if (window.innerWidth < 1060) {
                if (this.classes_nav['big-nav']) {
                    this.classes_nav['small-nav'] = true
                    this.classes_nav['big-nav'] = false
                    
                    this.classes_image['small-img'] = true
                    this.classes_image['big-img'] = false

                    this.classes_logo['small-logo_links'] = true
                    this.classes_logo['big-logo_links'] = false

                    this.classes_h1['small-h1'] = true
                    this.classes_h1['big-h1'] = false
                } else if (this.classes_nav['navActive']) {
                    this.classes_nav['small-nav'] = true
                    this.classes_nav['nav-side'] = false
                    this.classes_nav['navActive'] = false
                    
                    this.classes_image['small-img'] = true
                    this.classes_image['imgActive'] = false

                    this.classes_logo['small-logo_links'] = true
                    this.classes_logo['logo_linksActive'] = false

                    this.classes_h1['small-h1'] = true
                    this.classes_h1['h1Active'] = false
                }
            } else {
                if (this.classes_nav['small-nav']) {
                    this.classes_nav['big-nav'] = true
                    this.classes_nav['small-nav'] = false
                    
                    this.classes_image['big-img'] = true
                    this.classes_image['small-img'] = false

                    this.classes_logo['big-logo_links'] = true
                    this.classes_logo['small-logo_links'] = false

                    this.classes_h1['big-h1'] = true
                    this.classes_h1['small-h1'] = false
                                
                } else if (this.classes_nav['navActive_small']) {
                    this.classes_nav['big-nav'] = true
                    this.classes_nav['nav-side'] = false
                    this.classes_nav['navActive_small'] = false
                    
                    this.classes_image['big-img'] = true
                    this.classes_image['imgActive_small'] = false

                    this.classes_logo['big-logo_links'] = true
                    this.classes_logo['logo_linksActive_small'] = false

                    this.classes_h1['big-h1'] = true
                    this.classes_h1['h1Active_small'] = false                                                         
                }
            }
        },
        assignProperFormat() {
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
    },
    created: function() {
        window.addEventListener('resize',this.adjust_clientWidth)
    },
    mounted: function() {
        console.log(`route query: ${this.$route.query}`)

        //put this into store eventually
        if (window.location.hash != "#/") {
            this.assignProperFormat()
        }
    }
})
</script>

<style lang="css" scoped>

/*------ links ------*/
.fa{
    font-size: 50px
}

.fa-instagram:hover {
    animation: moveUp 0.5s forwards 0s ease;
    color: #d63d70
}

.fa-github-alt:hover {
    animation: moveUp 0.5s forwards 0s ease;
    color: #000000   
}

.fa-codepen:hover {
    animation: moveUp 0.5s forwards 0s ease;
    color:#15bdff
}

.fa-linkedin:hover {
    animation: moveUp 0.5s forwards 0s ease;
    color:#0076b4
}

@keyframes moveUp {
    0% {
        transform: translate(0);
    }
    100% {
        transform: translate(0, -10px);
    }
}

.logo_links a {
    color: #5f5f5f;
}

.logo_links a:hover {
    opacity: 1;
}

@import url('https://fonts.googleapis.com/css?family=Montserrat');
.header {
    height: 95vh;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    border-radius: 6px;
    transition: all .2s ease-in;
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

.small-nav {
    width: 100%;
    top: 210px;
    left: 0;
    text-align: center;
    font-weight:bold;    
}

.big-nav {
    top: 5%;
    left: -2vw;
    opacity: 1;
    width: 100%; 
    text-align: right;
    font-weight:bold;      
}

.logo_links {
    position: absolute;
    left: -15vw;
    top: calc(30vh + 27px + 30px);
    width: 100%;
    text-align: center;
    transform: scale(0.4);
    overflow: visible;
}

.small-logo_links {
    top: 190px;
    left: 0vw;
    transform: scale(0.3);
}

.big-logo_links {
    left: 0vw;
    top: 190px;
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
    font-weight:bold;  
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
    top: 190px ;
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
    font-weight:bold;     
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
        top: 190px;
        left: 0vw;
        transform: scale(0.3);
    }
}

@keyframes logo_links_animation_small{
    from{}
    to{
        top: 174px;
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
        left: 20vw;
        top: calc(30vh + 27px + 30px + 65px);
        text-align: center;
        font-size: 15px;           
    }
    49% {
        width: 120px; 
        left: 0%;
        font-size: 15px;
        font-weight:normal;
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
        font-weight: bold;
        }
}

@keyframes nav_animation_small{
    0%{opacity: 0;
        font-weight:normal;}
    80%{opacity: 0;
    font-weight:bold;}
    100%{
        opacity: 1;
        top: 210px;
        left: 0;
        width: 100%;
        text-align: center;
        font-weight:bold;
    }
}


@media (max-width: 1060px) {
    .header {
        overflow: visible;
        /* overflow-x: hidden;
        overflow-y: auto; */
    }

    .imgStatic {
        position: absolute;
        left: -50px;
        top: calc(10vh + 27px + 13px + 90px);
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
        top: 10vh;
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
        top: calc(10vh + 27px);
        width: 100%;
        /* border: 2px solid #2B9DFF;    */
    }  

    .logo_links {
        position: absolute;
        left: 0;
        top: calc(10vh + 27px + 13px + 90px + 250px);
        width: 100%;
        text-align: center;
        transform: scale(0.4);
    }

    .small-logo_links {
        transform: scale(0.3);
        top: 174px;
    }

    .logo_links_top {
        transform: scale(0.3);
        top: 174px;
    }

    .nav-side {
        position: absolute;
        left: 0;
        top: calc(10vh + 27px + 13px + 90px + 290px);
        width: 100%; 
        text-align: center;   
    }

    .nav-side .nav-link a {
        font-size: 12px ;
    }

    .nav-side_top {
        left: 0;
        top: 210px;
        font-weight:bold;          
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