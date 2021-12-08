<template>
  <div class="photo-cards">
    <div class="cards">
      <div class="card1" style="--img:1" >
        <img class="img1" src="../../assets/altlas.jpg"/>
      </div>
      <div class="card2" style="--img:2" >
        <img class="img2" src="../../assets/amenowuzume.jpg"/>
      </div>
      <div class="card3" style="--img:3" >
        <img class="img3" src="../../assets/frigg.jpg"/>
      </div>
      <div class="card4" style="--img:4" >
        <img class="img4" src="../../assets/mimir.jpg"/>
      </div>
      <div class="card5" style="--img:5" >
        <img class="img5" src="../../assets/njor.jpg"/>
      </div>
      <div class="card6" style="--img:6" >
        <img class="img6" src="../../assets/tagitsuhime.jpg"/>
      </div>
      <div class="card7" style="--img:7" >
        <img class="img7" src="../../assets/iris.png"/>
      </div>
      <div class="card8" style="--img:8" >
        <img class="img8" src="../../assets/lapetus.jpg"/>
      </div>
      <div class="card9" style="--img:9" >
        <img class="img9" src="../../assets/njor.jpg"/>
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
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
/* .photo-cards {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
} */
.photo-cards {
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translate(-50%, -50%);
  width: 210px;
  perspective: 1000px;
  padding-top: 80px;
}
.cards {
  width: 100%;
  transform-style: preserve-3d;
  animation: roll 20s infinite linear;
}
.cards:hover {
  animation-play-state: paused;
}
.cards div {
  width: 100%;
  position: absolute;
  float: right;
  transform: rotateY(calc(40deg * var(--img) - 40deg)) translateZ(300px);
}
.cards div img {
  width: 100%;
  filter: grayscale(0.5);
  transition: 0.5s linear;
}
.cards div img:hover {
  filter: grayscale(0);
  transform: scale(1.2);
}

@keyframes roll {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

</style>
