<template>
 <div class="box">
   <div class="content">
     <img src="../../assets/twitter.png"/>
     <p>Twitter</p>
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
.content {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#f00, rgba(0,0,0,0.5));
  /* url('../../assets/twitter.png'); */
  position: relative;
  background-blend-mode: multiply;
  animation: animateBgColor 5s linear infinite;

  img {
    position: relative;
    width: 200px;
    height: 200px;
    z-index: 1;
  }

  p {
    position: relative;
    color: #fff;
    font-size: 14px;
    display: inline-block;
    text-shadow: 0 10px 10px #000;
    box-shadow: 10px 0 0 #fff;
    overflow: hidden;
    animation: textTyping 5s steps(7) infinite;
  }
}
.content::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(rgba(255, 0, 0, 0.75), transparent, transparent);
  border-radius: 50%;
}
.content::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(rgba(255, 0, 0, 0.75), transparent, transparent);
  border-radius: 50%;
}

@keyframes textTyping {
  0%, 90%, 100% {
    width: 0px;
  }
  30%, 60% {
    width: 80px;
  }
}

@keyframes animateBgColor {
  0% {
    filter: hue-rotate(0deg)
  }
  100% {
    filter: hue-rotate(360deg)
  }
}

</style>
