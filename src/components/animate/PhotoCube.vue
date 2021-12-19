<template>
  <div class="photo-cube">
    <div class="photos">
      <!--内部立方体-->
      <div class="in-item in-front">
        <img class="in-img" src="../../assets/tq1.jpeg" />
      </div>
      <div class="in-item in-back">
        <img class="in-img" src="../../assets/tq2.jpeg" />
      </div>
      <div class="in-item in-left">
        <img class="in-img" src="../../assets/tq3.jpeg" />
      </div>
      <div class="in-item in-right">
        <img class="in-img" src="../../assets/tq4.jpeg" />
      </div>
      <div class="in-item in-top">
        <img class="in-img" src="../../assets/tq5.jpeg" />
      </div>
      <div class="in-item in-bottom">
        <img class="in-img" src="../../assets/tq6.jpeg" />
      </div>

      <!--外部立方体-->
      <div class="out-item out-front">
        <img class="out-img" src="../../assets/tq1.jpeg" />
      </div>
      <div class="out-item out-back">
        <img class="out-img" src="../../assets/tq2.jpeg" />
      </div>
      <div class="out-item out-left">
        <img class="out-img" src="../../assets/tq3.jpeg" />
      </div>
      <div class="out-item out-right">
        <img class="out-img" src="../../assets/tq4.jpeg" />
      </div>
      <div class="out-item out-top">
        <img class="out-img" src="../../assets/tq5.jpeg" />
      </div>
      <div class="out-item out-bottom">
        <img class="out-img" src="../../assets/tq6.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {},
  mounted () {}
}
</script>

<style scoped>
.photo-cube {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.photos .in-item {
  display: block;
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  position: absolute;
  top: 50px;
  left: 50px;
}
.photos {
  margin: 80px auto;
  width: 200px;
  height: 200px;
  animation: rotate 20s infinite;

  /** */
  transform-style: preserve-3d;
  animation-timing-function: linear;
}
.in-img {
  width: 100px;
  height: 100px;
}
.in-front {
  transform: translateZ(50px);
}
.in-back {
  transform: translateZ(-50px);
}
.in-left {
  transform: rotateX(90deg) translateZ(50px);
}
.in-right {
  transform: rotateX(-90deg) translateZ(50px);
}
.in-top {
  transform: rotateY(90deg) translateZ(50px);
}
.in-bottom {
  transform: rotateY(-90deg) translateZ(50px);
}
@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

/**外部立方体样式 */
.photos .out-item {
  display: block;
  width: 200px;
  height: 200px;
  background-color: aquamarine;
  position: absolute;
  transition: all 0.6s;
}
.out-img {
  width: 200px;
  height: 200px;
}
.out-front {
  transform: translateZ(100px);
}
.out-back {
  transform: translateZ(-100px);
}
.out-left {
  transform: rotateX(90deg) translateZ(100px);
}
.out-right {
  transform: rotateX(-90deg) translateZ(100px);
}
.out-top {
  transform: rotateY(90deg) translateZ(100px);
}
.out-bottom {
  transform: rotateY(-90deg) translateZ(100px);
}

.photos:hover .out-front {
  transform: translateZ(200px);
}
.photos:hover .out-back {
  transform: translateZ(-200px);
}
.photos:hover .out-left {
  transform: rotateX(90deg) translateZ(200px);
}
.photos:hover .out-right {
  transform: rotateX(-90deg) translateZ(200px);
}
.photos:hover .out-top {
  transform: rotateY(90deg) translateZ(200px);
}
.photos:hover .out-bottom {
  transform: rotateY(-90deg) translateZ(200px);
}
</style>
