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

export default new Vuex.Store({
    modules: {
        main: store
      }
})

// export const modal_store = {
//     namespaced: true,
//     state:{
//         modals:{
//             detail: false,
//             confirm: false,
//             delete: false,
//             add: false,
//             refresh: {
//                 on: false,
//                 mode: ""
//             },
//             modification: false,
//         }
//     },
//     mutations:{
//         view: (state, variables) => {
//             if (variables.modalType == 'detail') {
//                 state.modals.detail = variables.show
//             } else if (variables.modalType == 'delete') {
//                 state.modals.delete = variables.show
//             } else if (variables.modalType == 'add') {
//                 state.modals.add = variables.show
//             } else if (variables.modalType == 'confirm') {
//                 state.modals.confirm = variables.show
//             } else if (variables.modalType == 'refresh') {
//                 state.modals.refresh.on = variables.show
//                 state.modals.refresh.mode = variables.refresh_mode
//             } else if (variables.modalType == 'modification') {
//                 state.modals.modification = variables.show
//             }
//         }
//     }
// }

// export const notification_store = {
//     namespaced: true,
//     state:{
//         notification: {
//             on: false,
//             title: "",
//             text: "",
//             type: "",
//             group: "",
//             duration: 3000
//         }
//     },
//     mutations:{
//         viewnotification: (state, show) => {
//             state.notification.on = show
//         },
//         setnotification: (state, notification) => {
//             state.notification.title = notification.title,
//             state.notification.text = notification.text,
//             state.notification.group = notification.group,
//             state.notification.type = notification.group
//             state.notification.duration = notification.duration
//         }
//     },
// }

// export const newPLR_store = {
//     namespaced: true,
//     state: {
//         project: "",
//         language: "",
//         runtype: "",
//         batchChange: false,
//     },
//     mutations: {
//         setPLR: (state, meta) => {
//             state.project = meta.project,
//             state.language = meta.language,
//             state.runtype = meta.runtype
//             state.batchChange = meta.batchChange
//         },
//         resetPLR: state => {
//             state.project = "",
//             state.language = "",
//             state.runtype = "",
//             state.batchChange = false;
//         }
//     }
// }

// export default new Vuex.Store({
//     modules: {
//         ms: modal_store,
//         ns: notification_store,
//         newPLR: newPLR_store
//       }
// })