<template>
  <div class="container">
    <div class="title">
      <h1>Hello word</h1>
    </div>
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img class="role" src="../../assets/iris.png" alt=""/>
          <h3>人物</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>dnjkscndskcndjksncdskncdjksnbcdskbvhdsbjvdsvdsnvdmsvdjsnvjdsvbdsbvdskvbdsbvndjskvbdsjvndskvndnsvbdksbvds</p>
        </div>
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

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.title {
  width: 200px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.title h1 {
  background: linear-gradient(to right, #cc95c0, #b899b1, #b6a4b2, #b9b9b9);
  // 让字体跟背景色融合
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 30px;
  font-size: 36px;
  font-weight: 800;
}
.card {
  width: 300px;
  height: 250px;
}
.content {
  opacity: 0.2;
  transition: 0.75s;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.card .face.face1 .content .role {
  width: 300px;
  height: 250px;
}
.card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  transform: translateY(100px);
  transition: 0.75s;
}
.card:hover .face.face1 {
  transform: translateY(0px);
  transition: 0.75s;
}
.card .face.face2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
  transition: 0.75s;
  background: linear-gradient(to right, #232526, #414346);
}
.card:hover .face.face2 {
  transform: translateY(0);
  transition: 0.75s;
}
p {
  color: white;
  font-size: 12px;
  width: 300px;
  text-align: center;
  word-break: break-word;
}

</style>
