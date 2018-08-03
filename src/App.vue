<template>
  <div>
    <header-component class="header_component_class" v-on:finishedLoading="set_fadeIn()"></header-component>
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
        clientHeightComputed: <number>0,
        router_height: <number>0,
        header_height: <number>0,
      }
  },
  computed: {
    height_style(): any {
      return {
        // top: `calc(50vh + ${this.clientHeightComputed}px)`,
        top:`calc(${this.header_height}px + ${this.router_height}px + 20vh)`
      }
    }
  },
  methods: {
    set_fadeIn() {
      this.play_fadeIn = true
      console.log('set_fadeIn was called')
    },
    get_clientHeight() {
      this.router_height = document.getElementsByClassName('router_element')[0].clientHeight
      this.header_height = document.getElementsByClassName('header_component_class')[0].clientHeight
      console.log(`height style: ${this.height_style['top']}`)
    }
  },
  updated: function () {
    this.render_footer = true;
    // this.clientHeight = document.getElementsByClassName('router_element')[0].clientHeight
    // console.log(this.clientHeight)
  },
  created: function() {
    window.addEventListener('resize',this.get_clientHeight)
    this.get_clientHeight()
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
}
</style>