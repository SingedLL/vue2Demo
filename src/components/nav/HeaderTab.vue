<template>
  <div :class="{sticky: isSticky}">
    <van-tabs
      v-model="activeName"
      title-active-color="red"
      line-width="60px"
      line-height="1.5px"
      @click="onClick">
        <van-tab title="正在热映" name="0"></van-tab>
        <van-tab title="即将上映" name="1"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 0,
      url: ['/films/nowPlaying', '/films/comingSoon'],
      isSticky: false
    }
  },
  created () {
    // 获取路由信息
    const path = this.$route.path
    const index = this.url.indexOf(path)
    this.activeName = index > -1 ? index : 0
  },
  methods: {
    onClick (name, title) {
      this.$router.push(this.url[name])
    }
  },
  mounted () {
    // 挂载完毕后获取滚动条的高度
    addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop >= 200) {
        // 固定顶部导航
        this.isSticky = true
      } else {
        // 不固定顶部导航
        this.isSticky = false
      }
    })
  }
}
</script>

<style scoped lang="scss">
  //顶部吸顶的样式
  .sticky {
    position: fixed;
    z-index: 999;
    width: 100%;
  }
</style>
