<template>
 <div class="box">
   <div class="leves">
     <div class="leve one">
       <div class="title">One</div>
       <div class="content">One Content</div>
     </div>
     <div class="leve two">
       <div class="title">One</div>
       <div class="content">One Content</div>
     </div>
     <div class="leve three">
       <div class="title">One</div>
       <div class="content">One Content</div>
     </div>
     <div class="leve four">
       <div class="title">One</div>
       <div class="content">One Content</div>
     </div>
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
.box {
  position: relative;
  width: 100%;
  .leves {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -140px;
    transform-style: preserve-3d;
    user-select: none;

    .leve {
      position: relative;
      width: 200px;
      height: 140px;
      border-radius: 12px;
      color: pink;
      cursor: pointer;
      transform: rotateX(45deg) rotateY(-15deg) rotate(45deg);
      /* level($bgColor, $startColor, $endColor, $boxColor, $z-index) {
        margin-top: -70px;
        background-color: $bgColor;
        background-color: linear-gradient(135deg, $startColor,  $endColor);
        box-shadow: 20px 20px 60px rgba(#223254, 0.5), 1px 1px 0px 1px $boxColor;
        z-index: $z-index;
        opacity: 0.9;
      } */
    }
    .leve:hover {
      transform: rotateX(30deg) rotateY(-15deg) rotate(30deg) translate(-25px, 50px);
      opacity: 0.6;
    }
    .leve:hover:after {
      transform: translateX(100%);
      transition: all 1.2s ease-in-out;
    }
    .leve::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      background-image: linear-gradient(60deg, rgba(white, 0) 20%, rgba(white, 0.1), rgba(white, 0) 80%)
    }
    .one {
      margin-top: -70px;
      background-color: #8063e1;
      background-color: linear-gradient(135deg, #bd7be8,  #8063e1);
      box-shadow: 20px 20px 60px rgba(#223254, 0.5), 1px 1px 0px 1px #8063e1;
      z-index: 4;
      opacity: 0.9;
    }
    .two {
      margin-top: -70px;
      background-color: #3f58e3;
      background-color: linear-gradient(135deg, #7f94fc,  #3f58e3);
      box-shadow: 20px 20px 60px rgba(#223254, 0.5), 1px 1px 0px 1px #3f58e3;
      z-index: 3;
      opacity: 0.9;
    }
    .three {
      margin-top: -70px;
      background-color: #2c6fd1;
      background-color: linear-gradient(135deg, #21bbfe,  #2c6fd1);
      box-shadow: 20px 20px 60px rgba(#223254, 0.5), 1px 1px 0px 1px #2c6fd1;
      z-index: 2;
      opacity: 0.9;
    }
    .four {
      margin-top: -70px;
      background-color: #352f64;
      background-color: linear-gradient(135deg, #415197,  #352f64);
      box-shadow: 20px 20px 60px rgba(#223254, 0.5), 1px 1px 0px 1px #352f64;
      z-index: 1;
      opacity: 0.9;
    }

    .title {
      position: absolute;
      top: 20px;
      left: 15px;
      font-size: 26px;
      font-weight: bold;
    }
    .content {
      position: absolute;
      font-weight: 700;
      bottom: 15px;
      left: 15px;
      font-size: 16px;
    }
  }
}
</style>
