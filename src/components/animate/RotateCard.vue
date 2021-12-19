<template>
  <div class="rotate-card-box">
    <div class="front">
      <div class="content">
        <p>Hello Taoqi</p>
        <span>Angel Cat</span>
      </div>
    </div>
    <div class="back">
      <div class="content">
        <p>Hello Lemon</p>
        <span>Programmer</span>
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
.rotate-card-box {
  position: relative;
  height: 400px;
  width: 290px;
  /**开启3D */
  perspective: 1000px;
  transform-style: preserve-3d;
}
.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /**开启3D */
  perspective: 1000px;
  transform-style: preserve-3d;
  /**3D模式下隐藏所有翻转的信息 */
  backface-visibility: hidden;

  /* transform: rotateY(60deg); */
  transition: transform 0.7s ease-in-out;
}
.front {
  background-image: linear-gradient(
      to right,
      rgb(68, 0, 255),
      rgb(108, 87, 167)
    ),
    url('../../assets/tq1.jpeg');
}
.back {
  background-image: linear-gradient(
      to right,
      rgb(32, 211, 235),
      rgb(119, 192, 235)
    ),
    url('../../assets/tq2.jpeg');
  /**翻转 翻转后 默认隐藏 */
  transform: rotateY(180deg);
}
.content {
  /**文字与背景分离 */
  transform: translateZ(160px);
}
.rotate-card-box:hover .front {
  /**前面的图层翻转到后端， 并且隐藏掉*/
  transform: rotateY(-180deg);
}
.rotate-card-box:hover .back {
  /**后面的图层翻转到前端 */
  transform: rotateY(0deg);
}
</style>
