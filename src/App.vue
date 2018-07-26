<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import HeaderComponent from './components/Header_Component.vue'

  export default{
    name: 'app',
    components: {
      HeaderComponent
    }
  }
</script>

<style lang="css">
html { margin-left: calc(100vw - 100%); }
/* #app {
  overflow-y: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>