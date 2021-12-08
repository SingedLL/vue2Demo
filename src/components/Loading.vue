<template>
  <van-overlay
    :show="show"
    z-index=100
  >
    <van-loading text-color="#0094ff" :vertical="true">
      {{txt}}
    </van-loading>
  </van-overlay>
</template>

<script>

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    txt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
  .van-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
