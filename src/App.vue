<template>
  <div>
    <img-modal v-if="displayLightbox"></img-modal>
    <header-component class="header_component_class" 
                      v-on:finishedLoading="set_fadeIn()"
                      v-on:reloadBackToTop="change_clientHeight()"></header-component>
    <router-view :style="router_height_style" :class="{'noshow': true, 'fadein': play_fadeIn, 'router_element': true}"></router-view>
    <footer-component :style="height_style" class="footer_element" v-if="showReload"></footer-component>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import HeaderComponent from './components/Header_Component.vue'
import FooterComponent from './components/Footer_Component.vue'
import imgModal from './components/img_Modal.vue'

export default Vue.extend({
  name: 'app',
  data() {
      return{
        play_fadeIn: <boolean>false,
        showReload: <boolean>false,
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
    },
    router_height_style(): any {
      return {
        top:`calc(${this.header_height}px + 20px)`
      }
    },
		back_to_top():boolean{
			return this.$store.state.main.back_to_top
    },
    displayLightbox(): boolean {
      return this.$store.state.lightbox.display_lightbox
    }         
  },
  components: {
    HeaderComponent, FooterComponent, imgModal
  },
  watch: {
    back_to_top: {
      handler: function() {
        this.change_clientHeight()
      }
    }
  },
  methods: {
    set_fadeIn() {
      this.play_fadeIn = true
      this.get_clientHeight()
    },
    //50 seems like a good time to let component render, then have the back to top set to the bottom..
    //otherwise back to top would render in the middle of the page
    //have it look for when the height changes, don't set a timeout because it would depend on internet speed
    change_clientHeight() {
      // console.log('reload back to top refresh called')
      if (this.back_to_top){
        console.log('back to top is true')
        this.showReload = false
        setTimeout(() => {
          this.get_clientHeight()
        },500)
      }
    },
    get_clientHeight() {
      this.showReload = false
      if (this.play_fadeIn) {
        // console.log('changing')
        this.router_height = document.getElementsByClassName('router_element')[0].clientHeight
        this.header_height = document.getElementsByClassName('header_component_class')[0].clientHeight
        this.showReload = true
      }
      // console.log(`height style: ${this.height_style['top']}`)
    }
  },
  updated: function () {
    this.render_footer = true;
    // this.clientHeight = document.getElementsByClassName('router_element')[0].clientHeight
    // console.log(this.clientHeight)
  },
  created: function() {
    // window.addEventListener('resize',this.get_clientHeight)
  },
  mounted: function() {
    window.addEventListener('resize',this.get_clientHeight)
  }
})
</script>

<style lang="css">
html { margin-left: calc(100vw - 100%); }

div {
  overflow: hidden;
}

.footer_element {
  position: absolute;
  width: 99%;
  left: 0;
  bottom: 0;
  height: 100px;
}

.header_component_class {
  overflow-x:hidden;
  overflow-y: auto;
}

@media (max-width: 1060px) {
  .header_component_class {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>