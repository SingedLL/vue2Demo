<template>
  <div class="dazzle-box">
    <a href="">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      按钮1
    </a>
    <a href="">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      按钮2
    </a>
    <a href="">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      按钮3
    </a>
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
.dazzle-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    position: relative;
    padding: 25px 30px;
    color: #03e9f4;
    text-decoration: none;
    letter-spacing: 4px;
    text-transform: uppercase;
    overflow: hidden;
    margin: 40px;
    //倒影
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

    &:hover {
      color: #050801;
      background-color: #03e9f4;
      box-shadow: 0 0 5px #03e9f4,0 0 25px #03e9f4,0 0 50px #03e9f4,0 0 200px #03e9f4;
    }

    &:nth-of-type(1) {
      filter: hue-rotate(290deg)
    }
    &:nth-of-type(3) {
      filter: hue-rotate(160deg)
    }

    span {
      position: absolute;

      &:nth-child(1) {
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, transparent, #03e9f4);
        top: 0;
        left: -100%;
        animation: animate1 1s linear infinite;
        animation-delay: 0s;

        @keyframes animate1 {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 100%;
          }
        }
      }
      &:nth-child(2) {
        width: 2px;
        height: 100%;
        background: linear-gradient(to bottom, transparent, #03e9f4);
        top: -100%;
        right: 0;
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;

        @keyframes animate2 {
          0% {
            top: -100%;
          }
          50%, 100% {
            top: 100%;
          }
        }
      }
      &:nth-child(3) {
        width: 100%;
        height: 2px;
        background: linear-gradient(to left, transparent, #03e9f4);
        right: -100%;
        bottom: 0;
        animation: animate3 1s linear infinite;
        animation-delay: 0.5s;

        @keyframes animate3 {
          0% {
            right: -100%;
          }
          50%, 100% {
            right: 100%;
          }
        }
      }
      &:nth-child(4) {
        width: 2px;
        height: 100%;
        background: linear-gradient(to top, transparent, #03e9f4);
        bottom: -100%;
        left: 0;
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;

        @keyframes animate4 {
          0% {
            bottom: -100%;
          }
          50%, 100% {
            bottom: 100%;
          }
        }
      }
    }
  }
}
</style>
