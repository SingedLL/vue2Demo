<template>
  <div div class="film-detail">
    <div class="title">
      <span class="name">{{filmInfo.name}}</span>
      <!-- <img :src="filmInfo.poster" width="100%" alt=""/> -->
      <!-- 图片懒加载 -->
      <img v-lazy="filmInfo.poster" width="100%" alt=""/>
      <span>上映时间：{{filmInfo.premiereAt | parseTime}}</span>
      <span>简介：{{filmInfo.synopsis}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      filmInfo: {}
    }
  },
  created () {
  },
  filters: {
    parseTime (timestamps) {
      return moment(timestamps * 1000).format('YYYY-MM-DD HH:mm')
    }
  }
}
</script>

<style scoped lang="scss">
  .title {
    display: flex;
    flex-direction: column;
    margin: 16px;
    .name {
      text-align: center;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 10px;
    }
    span {
      display: block;
      margin-top: 12px;
    }
  }
</style>
