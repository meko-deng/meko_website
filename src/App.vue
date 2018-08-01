<template>
  <div>
    <header-component v-on:finishedLoading="set_fadeIn()"></header-component>
    <router-view :class="{'noshow': true,'fadein': play_fadeIn, 'router_element': true}"></router-view>
    <footer-component :style="height_style" class="footer_element" v-if="play_fadeIn"></footer-component>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import HeaderComponent from './components/Header_Component.vue'
import FooterComponent from './components/Footer_Component.vue'

export default Vue.extend({
  name: 'app',
  data() {
      return{
        play_fadeIn: <boolean>false,
        render_footer: <boolean>false,
        // clientHeight: <any>'',
      }
  },
  computed: {
    height_style(): any {
      return {
        top: `calc(30vh + ${this.clientHeightComputed}px)`,
      }
    },
    clientHeightComputed(): any {
      return (document.getElementsByClassName('router_element')[0].clientHeight)
    }
  },
  methods: {
    set_fadeIn() {
      this.play_fadeIn = true
      console.log('set_fadeIn was called')
    }
  },
  updated: function () {
    this.render_footer = true;
    // this.clientHeight = document.getElementsByClassName('router_element')[0].clientHeight
    // console.log(this.clientHeight)
  },
  components: {
    HeaderComponent, FooterComponent
  }
})
</script>

<style lang="css">
html { margin-left: calc(100vw - 100%); }

.footer_element {
  position: absolute;
  width: 99%;
  left: 0;
  bottom: 0;
  height: 100px;
  /* border: 2px solid rgb(255, 43, 43);    */
}

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