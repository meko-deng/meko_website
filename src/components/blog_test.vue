<template>
</template>

<script lang="ts">
import Vue from 'vue'
import Butter from 'buttercms'

export const butter = Butter('3de9eb70ae75166369d82f5404fd6f95476cd46d')


export default Vue.extend({
    data() {
        return{
        }
    },
	mounted: function() {
        butter.post.list({page: 1, page_size: 10}).then(function(response) {
            console.log(response.data)
        })
	}

})
</script>

<style lang="css" scoped>
</style>