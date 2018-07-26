<template>
<div class="center">
    <br>
    <br>
    <br>
    <div class="animate">Boom</div>
    <div class="animate_bitch">Bitch</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return{
        }
    }
})
</script>

<style lang="css" scoped>
.center {
    position: relative;
    width: 100%;
    text-align: center;
}

@keyframes animate_boom {
    0%{
        opacity: 0;
        transform: scale(1)
    }
    20% {
        opacity: 1;
        transform: scale(2)
    }
    50% {
        transform: scale(1)
    }
    100% {
        transform: scale(1);
        opacity: 1
    }
}
.animate {
    opacity: 0;
    animation: animate_boom 3s forwards 6s ease
}

@keyframes animate_bitch{
    0%{
        opacity: 0
    }
    100%{
        opacity: 1
    }
}

.animate_bitch{
    opacity: 0;
    animation: animate_bitch 2s forwards 8s ease
}
</style>