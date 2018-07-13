import Vue from 'vue'
import App from '../../../src/App'

describe('App.test.js', () => {
  let CMP, vm

  beforeEach(() => {
    CMP = Vue.extend(App) // Create a copy of the original component
    vm = new CMP({
      data: { // Replace data value with this fake data
        messages: ['Cat']
      }
    }).$mount() // Instances and mounts the component
  })

  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(['Cat'])
  })
})
