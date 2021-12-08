const users = {
  namespaced: true, // 开启命名空间
  state: {
    count: 0,
    username: 'Lemon',
    age: 18
  },
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
  actions: {
    setUsername (context, userName) {
      setTimeout(() => {
        // 调用mutations中的方法进行修改
        // context 等同于在单文件组件中的this.$store
        context.commit('setUsername', 'Carry')
      }, 2000)
    }
  },
  getters: {
    isAdult (state) {
      return state.age >= 18 ? '成年' : '未成年'
    }
  }
}

export default users
