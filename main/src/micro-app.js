import store from './store'
const microApps = [
  {
    name: 'sub-vue',
    entry: '//localhost:7777/',
    activeRule: '/sub-vue',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-vue' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    }
  },
  {
    name: 'sub-react',
    entry: '//localhost:7788/',
    activeRule: '/sub-react',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-react'
    }
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport',
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})
export default apps
