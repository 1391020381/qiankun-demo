import { initGlobalState } from 'qiankun'
import Vue from 'vue'
const initialState = Vue.observable({
  user: {}
})
const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev))

  for (const key in newState) {
    initialState[key] = newState[key]
  }
})
// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部
  return key ? initialState[key] : initialState
}

export default actions
