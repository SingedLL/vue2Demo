<template>
  <div class="now-playing">
    <van-pull-refresh
      v-model="refreshing"
      pulling-text="下拉刷新"
      @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-card
          @click="goDetail(item.filmId)"
          v-for="item in filmList"
          :key="item.filmId"
        >
        <!-- num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg" -->
          <template #thumb>
            <img :src="item.poster" width='66' alt=""/>
          </template>
          <template #title>
            <div class="title">{{item.name}}</div>
          </template>
          <template #desc>
            <div class="desc">
              <span>评分：{{item.grade}}</span>
              <span>主演: {{item.director}}</span>
              <span>{{item.nation}} |  {{item.runtime}}</span>
            </div>
          </template>
          <template #tags>
            <van-tag plain type="danger" size="large">购票</van-tag>
          </template>
        </van-card>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filmList: [],
      pageNum: 1,
      loading: false,
      refreshing: false,
      finished: false
    }
  },
  created () {
    // this.onLoad()
  },
  filters: {
    // 处理演员数据
    parseActors (actors) {
      let str = ''
      if (actors) {
        actors.forEach(el => {
          str += el.name + ' '
        })
      } else {
        str = '暂无主演'
      }
      return str
    }
  },
  methods: {
    onLoad () {
    },
    onRefresh () {
      this.pageNum = 1
      this.refreshing = true
      this.finished = false
      this.onLoad()
    },
    goDetail (filmId) {
      this.$router.push('/film/' + filmId)
    }
  }
}
</script>

<style scoped lang="scss">
  .now-playing {
    margin-bottom: 60px
  }
  .desc {
    span {
      display: block;
    }
  }
</style>
