import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import axios from 'axios'
import Cookies from 'js-cookie'
import 'iview/dist/styles/iview.css'
import './assets/style.css'

Vue.prototype.$http = axios
Vue.prototype.domain = 'http://127.0.0.1:4001'
Vue.use(iView)
// axios.interceptors.request.use((config) => {
//   // 请求前
//   config.headers.Authorization = `token ${Cookies.get('userToken')}`
//   // console.log(config.headers)
//   return config
// }, (err) => {
//   console.log('err')
//   return Promise.reject(err)
// })
router.beforeEach((to, from, next) => {
  store.state.token = Cookies.get('userToken')
  if (to.meta.requireAuth) {
    const token = store.state.token
    if (token && token !== 'null') {
      // Bearer是JWT的认证头部信息
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
