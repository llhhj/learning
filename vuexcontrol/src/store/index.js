import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user   //小store,包含store的state、mutations、actions,分模块
  },
  getters
})
