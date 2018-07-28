<template>
  <div>
    <header-component v-on:finishedLoading="set_fadeIn()"></header-component>
    <router-view :class="{'noshow': true,'fadein': play_fadeIn}"></router-view>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import HeaderComponent from './components/Header_Component.vue'

export default Vue.extend({
  name: 'app',
  data() {
      return{
        play_fadeIn: <boolean>false
      }
  },
  methods: {
    set_fadeIn() {
      this.play_fadeIn = true
      console.log('set_fadeIn was called')
    }
  },   
  components: {
    HeaderComponent
  }
})
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