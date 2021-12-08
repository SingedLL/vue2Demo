<!--
  非模块化的vuex使用语法一共有8个，分为属性调用类型的4个， 函数映射类型的4个
  操作vuex可以在视图中直接进行（不要写this）, 也可以在js中执行
  1.
-->
<template>
  <div>
    <h1>非模块化</h1>
    <hr />
    <!--state的使用 在js中获取： this.$store.state.count -->
    <div>{{$store.state.count}}</div>
    <hr />

    <!--mutations中方法的调用-->
    <div><button @click="add"></button></div>
    <hr />

    <!--actions中方法的调用-->
    <div>{{$store.state.username}}</div>
    <div><button @click="setAsync"></button></div>
     <hr />

     <!--getter中方法的调用-->
    <div>{{$store.getters.isAdult}}</div>
    <div><button @click="ageIsAdult"></button></div>
  </div>
</template>

<script>
// 按需导入映射函数
const { mapState, mapMutations, mapActions, mapGetters } = window.vuex
// 映射类型函数分类
// 1. mapState，mapGetters 需要在计算属性中展开，然后自动映射成当前vue实例的属性
// 2. mapMutations，mapActions  需要在方法中展开， 然后自动映射成当前vue实例的方法
export default {
  methods: {
    ...mapMutations(['addCount', 'setAge']),
    ...mapActions(['setUsername']),
    getCount () {

    },
    add () {
      // 通过属性形式进行调用“commit”
      // 参数1: 具体的mutations中的函数名
      // 参数2: 对应的方法的第二个形参数据 （可选）
      // this.$store.commit('addCount')
      // this.$store.commit('setAge', 28)

      // 通过映射函数来使用
      this.addCount()
      this.setAge(28)
    },
    setAsync () {
      // 通过属性形式进行调用“dispatch”
      // this.$store.dispatch('setUsername', 'Hello')

      // 通过映射函数来使用
      this.setUsername('Hello')
    },
    ageIsAdult () {
      // 通过属性形式进行调用“getters”
      console.log(this.$store.getters.isAdult)
      // 通过映射函数来使用
      console.log(this.isAdult)
    }
  },
  computed: {
    // ...mapState(['count']),
    // ...mapGetters(['isAdult'])

    ...mapState('users', ['count', 'age']),
    ...mapGetters(['users/isAdult'])
  }
}
</script>
