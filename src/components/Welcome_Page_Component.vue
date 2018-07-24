<template>
    <div class="container centered">
        <img src="../assets/shibuff.png">
        <h1 font>MEKO D.</h1>
        <h2>developper in progress</h2>
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
    width: 479px; 
    height: 369px;
    overflow: auto;
}

.centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

h1, h2{
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
    display: block;
    margin: 0 auto;
    height: 50%;
    border-radius: 50%;
}
</style>