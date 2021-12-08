// import Vue from 'vue'
import VueLazyload from 'vue-lazyload' // 懒加载
// import 'vant/lib/index.less' // 引入vant样式

import MyPlugin from '@/plugins'

import App from './App.vue'
import router from './router'
import store from './store'

window.Vue.use(MyPlugin)
window.Vue.use(VueLazyload, {
  loading: '@/assets/logo.png'
})
// 通过 CDN 引入时不会自动注册 Lazyload 组件
window.Vue.use(window.vant.Lazyload)
window.Vue.config.productionTip = false

new window.Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
