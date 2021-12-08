<template>
 <div class="picture-box">
    <div class="one">
      <img src="../../assets/tq1.jpeg"/>
    </div>
    <div class="two">
      <img src="../../assets/tq2.jpeg"/>
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
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.picture-box {
  position: relative;
  width: 300px;
  height: 500px;
  margin: 100px auto;

  .one, .two {
    position: absolute;
    left: 0;
    right: 0;
    width: 300px;
    height: 500px;
    border: 1px solid rgb(63, 63, 167);
    border-radius: 10px;
    transition: transform 1s;
    backface-visibility: hidden; //背面不可见
    img {
      width: 300px;
      border-radius: 10px;
    }
  }
  .one {
    transform: rotateY(-180deg);
  }
  .two {
    transform: rotateY(0deg);
  }
}
.picture-box:hover .one {
  transform: rotateY(0deg)
}
.picture-box:hover .two {
  transform: rotateY(180deg)
}
</style>
