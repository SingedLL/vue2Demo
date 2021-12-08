<template>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000"
    @change="changeTab">
    <van-tabbar-item>
      <van-icon name="chat-o" slot='icon'></van-icon>
      <span>电影</span>
    </van-tabbar-item>
    <van-tabbar-item icon="search">影院</van-tabbar-item>
    <van-tabbar-item icon="friends-o">资讯</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      url: ['films/nowPlaying', '/cinemas', '/news', '/center']
    }
  },
  created () {
    // 获取路由信息
    const path = this.$route.path
    const index = this.url.indexOf(path)
    this.active = index > -1 ? index : 0
  },
  methods: {
    changeTab (index) {
      this.$router.push(this.url[index])
    }
  }
}
</script>

<style scoped>
</style>
