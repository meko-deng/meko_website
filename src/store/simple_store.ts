import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = {
  state: {
    back_to_top: false
  },
  mutations: {
    allow_back_to_top: state => {
        state.back_to_top = true
    },
    deny_back_to_top: state => {
        state.back_to_top = false
    }
  }
}

export const lightbox = {
  state: {
    display_lightbox: false,
    img_src: ""
  },
  mutations: {
    show_lightbox: state => {
      state.display_lightbox = true
    },
    remove_lightbox: state => {
      state.display_lightbox = false
    },
    set_lightbox_img: (state,src) => {
      state.img_src = src.img_src
    }
  }
}

export default new Vuex.Store({
    modules: {
        main: store,
        lightbox: lightbox
      }
})