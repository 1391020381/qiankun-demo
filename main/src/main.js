import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'reactApp',
    entry: '//localhost:7100',
    container: '#reactApp',
    activeRule: '/react'
  },
  {
    name: 'vueApp',
    entry: '//localhost:7101',
    container: '#vueApp',
    activeRule: "/vue",
    props: { a: 1 }
  },
  {
    name: 'onlineApp',
    entry: '//www.jd.com/index.html',
    container: '#onlineApp',
    activeRule: '/online'
  }
]

// 注册应用
registerMicroApps(apps)

// 开启

start()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
