import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from "./router/index.js"



Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
