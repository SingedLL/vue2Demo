<template>
  <div class="rocketBox">
    <div class="rocket">
      <img src="../../assets/rocket.jpeg"/>
    </div>
    <i v-for="item in lines" :key="item.key" :style="item.style"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lines: this.setLines()
    }
  },
  created () {

  },
  mounted () {
    this.setLines()
  },
  methods: {
    setLines () {
      const num = 60 // 光线的总数
      const arr = []
      for (let i = 0; i < num; i++) {
        const height = this.random(30, 100)
        const left = this.random(1, 500)
        const animationDuration = this.random(5, 30) / 10 // 0.5 ~ 3
        arr.push({
          key: i,
          style: `height:${height}px; left:${left}px; animationDuration:${animationDuration}s`
        })
        // // 创建i元素
        // const iDom = document.createElement('i')
        // // 设置样式
        // iDom.style.height = this.random(30, 100) + 'px'
        // iDom.style.left = this.random(1, 500) + 'px'
        // // 随机动画的周期
        // iDom.style.animationDuration = this.random(5, 30) / 10 + 's'// 0.5 ~ 3
        // // 将i插入到box中
        // document.querySelector('.rocketBox').appendChild(iDom)
      }
      return arr
    },
    random (m, n) {
      return Math.ceil(Math.random() * (n - m + 1)) + m - 1
    }
  }
}
</script>

<style scoped lang="scss">
.rocketBox {
  width: 500px;
  height: 500px;
  background: rgb(83, 83, 241);
  display: flex;
  justify-content: center;
  align-items: center;

  .rocket {
    position: relative;
    animation: shake 0.2s  linear infinite;

    img {
      width: 100px;
    }
  }
  .rocket::after {
    content: '';
    width: 10px;
    height: 150px;
    background: linear-gradient(rgb(40, 150, 194), transparent);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -150px;
  }
}
.rocketBox i {
    width: 1px;
    height: 20px; /*30-100 */
    position: absolute;
    left: 20px; /*1-100% */
    top: 0px;
    background: #fff;
    animation: lines 10s linear infinite;
    background: #fff;
    color: #fff;
  }
@keyframes shake {
  0%, 100% {
    transform: translateY(-2px)
  }
  50% {
    transform: translateY(2px)
  }
}

@keyframes lines {
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(500px)
  }
}
</style>
