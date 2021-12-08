import API from '@/api/index'

export default {
  install (Vue, options) {
    Vue.prototype.$api = API
  }
}
