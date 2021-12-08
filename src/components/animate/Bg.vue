<template>
  <div class="bg-box">
    <div class="bg1">
      <h1>1</h1>
    </div>
    <div class="bg2">
      <h1>2</h1>
    </div>
    <div class="bg3">
      <h1>3</h1>
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
.bg-box {
  width: 100%;
  height: 100%;
}
h1 {
  font-family: sans-serif;
  font-size: 50px;
  color: white;
  margin: 0px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.bg1 {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/tq1.jpeg');
  background-size: cover;
  display: table;
  background-attachment: fixed;
}
.bg2 {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/iris.png');
  background-size: cover;
  display: table;
  background-attachment: fixed;
}
.bg3 {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/tq2.jpeg');
  background-size: cover;
  display: table;
  background-attachment: fixed;
}
</style>
