import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AmapVue from '@amap/amap-vue'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
AmapVue.config.veusion = '2.0'
AmapVue.config.key = '353a37a3af7c679221180d934a3fb597'
Vue.use(AmapVue)
Vue.use(BaiduMap,{
  ak:'lNfsWmrS61GYzsrGwELhFpH5tVzx0pgb'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')