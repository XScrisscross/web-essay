import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // mutations中无法执行异步函数
  // 只有mutation才有权限修改
  mutations: {
    add (state, val) {
      state.count += val
    },
    des (state, val) {
      state.count -= val
    }
  },
  // action 用于处理异步函数
  actions: {
    addAsync (context, val) {
      setTimeout(() => {
        // 触发mutations中的函数
        // context.commit('add', 10)
        context.commit('add', val)
      }, 2000)
    },
    subAsync (context, val) {
      setTimeout(() => {
        context.commit('des', val)
      }, 2000)
    }
  },
  getters: {
    showNum (state) {
      return '当前值' + state.count
    }
  }
})
