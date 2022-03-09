import Vue from 'vue'
import App from './App-test.vue'

//Vue.config.productionTip = false

new Vue({
  created: function () {
    // `this` points to the vm instance
    console.log('created stage')
  },
  mounted: function () {
    // `this` points to the vm instance
    console.log('mounted stage')
  },
  updated: function () {
    // `this` points to the vm instance
    console.log('updated stage')
  },
  destroyed: function () {
    // `this` points to the vm instance
    console.log('destroyed stage')
  },
  render: h => h(App),
}).$mount('#app')
