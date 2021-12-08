<template>
  <div class="count-down-box">
    <div class="content">
      <div class="item">3</div>
      <div class="item">2</div>
      <div class="item">1</div>
      <div class="item">GO</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.count-down-box {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.content {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  margin-top: -150px;
  left: 50%;
  margin-left: -150px;
}
.content .item {
  color: purple;
  font-size: 180px;
  font-weight: bold;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  animation: ani 1s;
}
.content .item:nth-child(2) {
  animation-delay: 1s;
}
.content .item:nth-child(3) {
  animation-delay: 2s;
}
.content .item:nth-child(4) {
  animation-delay: 3s;
}
@keyframes ani {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(2);
  }
}
</style>
