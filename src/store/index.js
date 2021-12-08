import users from './users'
import goods from './goods'
// window.Vue.use(window.vuex)
export default new window.Vuex.Store({
  // 数据源的属性对象
  state: {
    count: 0,
    username: 'Lemon',
    age: 18
  },
  // 存放修改数据源的方法（同步）
  // 形参: 1. state对象， 表示默认的数据源
  // 形参: 2. (可选参数) 标识数据修改的方式
  mutations: {
    addCount (state) {
      state.count++
    },
    setAge (state, age) {
      state.age = age
    },
    // 新建修改用户名的方法供actions中调用
    setUsername (state, username) {
      state.username = username
    }
  },
  // 存放修改数据源的方法 (异步)
  // 至少需要一个形参， 最多两个形参
  // 形参: 1. context上下文对象， 表示仓库对象
  // 形参: 2. (可选参数) 标识数据修改的方式
  // actions里的方法其实并不是最终修改数据的方法， 在actions中， 最终是调用mutations中的方法进行修改数据
  actions: {
    setUsername (context, userName) {
      setTimeout(() => {
        // 调用mutations中的方法进行修改
        // context 等同于在单文件组件中的this.$store
        context.commit('setUsername', 'Carry')
      }, 2000)
    }
  },
  // 用于加工处理数据, (类似于filter对象)
  getters: {
    isAdult (state) {
      return state.age >= 18 ? '成年' : '未成年'
    }
  },
  // 用于实现vuex的模块化
  modules: {
    users,
    goods
  }
})
