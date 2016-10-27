// src/vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/logger'

Vue.use(Vuex)
// Vue.config.debug = true
// const debug = process.env.NODE_ENV !== 'production'

// 导入各个模块的初始状态和 mutations
import index from './modules/index'
export default new Vuex.Store({
    // 组合各个模块
  modules: {
    index
  }
    // strict: debug,
    // moddlewares: debug ? [createLogger()] : []
})
