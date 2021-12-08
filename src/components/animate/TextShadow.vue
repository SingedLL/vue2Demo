<template>
 <div class="text-shadow">
    <ul class="all">
      <li><span data-text="L">L</span></li>
      <li><span data-text="E">E</span></li>
      <li><span data-text="M">M</span></li>
      <li><span data-text="O">O</span></li>
      <li><span data-text="N">N</span></li>
    </ul>
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

<style scoped>
.text-shadow {
  position: relative;
  width: 100%;
  height: 400px;
  margin: 0 auto;
}
.all {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  margin: 100px auto;
  background: #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.all li {
  width: 120px;
  text-align: center;
  font-size: 120px;
  color: aquamarine;
  font-weight: bold;
}
.all li span {
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.all li span::before, .all li span::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: left top;
  transition: 0.5s;
}
.all li span::before {
  color: #fff;
  z-index: 2;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.all li span::after {
  color: rgba(0, 0, 0, 0.1);
  z-index: -1;
}
.all li span:hover::before {
  transform: rotateY(45deg);
}
.all li span:hover::after {
  transform: skewY(30deg);
}
</style>
