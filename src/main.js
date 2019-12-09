import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import global css file
import './assets/_global.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
