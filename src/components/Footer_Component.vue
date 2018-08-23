<template>
    <footer class="footerSection" v-if="back_to_top">
        <h1 v-on:click="topFunction()">BACK TO TOP</h1>
        <br>
        <div class='credits'> Blog Powered by </div> <a href="https://buttercms.com"><img height="25" src="../assets/butter_cms.png"></a>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import buttercmslogo from '../assets/butter_cms.png'

export default Vue.extend({   
    data() {
        return{        
        }
    },
    components: {
        buttercmslogo
    },
    computed: {
		back_to_top():boolean{
			return this.$store.state.main.back_to_top
		},            
    },
    methods: {
        topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera            
        }
    },    
    created() {
    }
})
</script>

<style lang="css" scoped>
.footerSection {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    font-family: Montserrat, sans-serif;
    color: #bbbbbb; 
    font-size: 90%;
    font-weight: 400;
}

h1:hover {
    color: #707070; 
}

.credits {
    font-family: Montserrat, sans-serif;
    font-size: 70%;
    color: #bbbbbb; 
    margin-bottom: 5px;
}

</style>