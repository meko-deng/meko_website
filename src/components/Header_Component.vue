<template>
    <div class="container centered">
        <img src="../assets/shibuff.png">
        <h1 font>MEKO D.</h1>
        <h2>developper in progress</h2>
        <div class='nav nav-center'>
            <a class='nav-link' href='#'><router-link to='/Projects'>PROJECTS</router-link></a>
            <a class='nav-link' href='#'><router-link to='/Blog'>BLOGS</router-link></a>
            <a class='nav-link' href='#'><router-link to='/Aboutme'>ABOUT ME</router-link></a>
            <a class='nav-link' href='#'><router-link to='/Resume'>RESUME</router-link></a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import shibuffplaceholder from '../assets/shibuff.png'

export default Vue.extend({
    data() {
        return{
        }
    }
})
</script>

<style lang="css" scoped>
.container {
    border: 2px solid #2B9DFF;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    overflow: auto;
}

.centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.centered-items {
    margin-top: calc(100% - 50px)
}

h1, h2{
    position: relative;
    margin: 0;
    text-align: center;
    vertical-align: middle;
    font-family: Montserrat;
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

@font-face{
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css?family=Montserrat')    
}

img {
    position: relative;
    vertical-align: middle;
    display: block;
    margin: 0 auto;
    height: 300px;
    border-radius: 50%;    
}

.nav-center {
    margin: 40px;
    text-align: center;
}

a {
    text-decoration: none; 
    font-family: Montserrat;
    color: #bbbbbb; 
    padding: 5px;
}

a:hover {
    color: #707070; 
}

@keyframes move_up {
    0% {
        transform: translate(0,0)
    }
    100% {
        transform: translate(0, calc(100% - 100vh)) scale(0.5)
    }
}

@keyframes moving_up {
    0% {
        transform: translateY(0)
    }
    100% {
        transform: translateY(-475%) scale(0.7)
    }    
}

@keyframes fade_away {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}

@keyframes nav_move {
    0%{
        /* transform: translateY(0) translateX(0)         */
    }
    100% {
        /* transform: translateY(-500%) translateX(50%)     */
    }
}
.animation img {
    animation: move_up 3s forwards 0s ease;
}

/* .animation h2 {
    animation: fade_away 2s forwards 1s ease;
}

.animation h1 {
    animation: moving_up 3s forwards 3s ease;
} */
</style>