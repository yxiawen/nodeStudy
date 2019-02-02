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
Vue.prototype.Cookies = Cookies
Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
