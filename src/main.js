// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { AlertPlugin } from 'vux'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(AlertPlugin)
Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */

if (navigator.platform.toLowerCase() === 'win32' || navigator.platform.toLowerCase() === 'unix' || navigator.platform.toLowerCase() === 'darwin'){
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app-box')
} else {
  document.addEventListener('deviceready', () => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app-box')
  }, false)
}
