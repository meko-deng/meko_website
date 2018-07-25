<template>
  <div class = "full-width center-content">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import HeaderComponent from './components/Header_Component'

  export default{
    name: 'App',
    components: {
      HeaderComponent
    }
  }
</script>

<style>
</style>