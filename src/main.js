import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'

export const bus = new Vue();



Vue.config.productionTip = false

Vue.use(VueRouter)



new Vue({
  render: h => h(App),
}).$mount('#app')
