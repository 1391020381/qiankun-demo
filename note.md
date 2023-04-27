
* 在主系统的初始化的时候，会传入 一些参数 props 
* 在子系统的初始化的时候,会缓存主系统传入的 props 比如 主系统router
# 各系统间的通信

## 跨系统页面的跳转
* 在主应用注册的过程中,会通过  props 把 主应用的 router实例 传递过出。
1. 主应用到子应用 使用 主应用的router push到对应的 activeRule
2. 子系统 到主系统   通过传递过来的 router 来跳转
3. 子应用 到 子应用  通过  传递的 trouter 来跳转
4. 系统内部 通过自己的router 来跳转。



# qiankun  vite
* vite-plugin-qiankun 