import api from './api'

const plugins = [
  api
]

// MyPlugin.install = function (Vue, options) {
//   Vue.globalmethod = function () {
//     console.log('全局方法')
//   }

//   Vue.directive('my-direative', {
//     bind () {
//       console.log('指令绑定成功')
//     }
//   })

//   Vue.mixin({
//     created () {
//       console.log('created in plugin')
//     }
//   })

//   Vue.prototype.$myMethod = function () {
//     console.log('实例方法')
//   }
// }

export default {
  install (Vue, options) {
    plugins.forEach(plugin => {
      Vue.use(plugin)
    })
  }
}
