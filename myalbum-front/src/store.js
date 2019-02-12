import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: null
  },
  mutations: {
    Login(state, token) {
      state.isLogin = true
      state.token = token
      Cookies.set('userToken', token)
    },
    Logout(state, token) {
      state.isLogin = false
      state.token = token
    }
  },
  actions: {

  }
})
