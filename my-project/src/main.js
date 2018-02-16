// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
import Home from './components/Home'
import Instructions from './components/Instructions'
import Updates from './components/Updates'

const routes = [
  { path: '/', component: Home },
  { path: '/Instructions', component: Instructions },
  { path: '/Updates', component: Updates },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
