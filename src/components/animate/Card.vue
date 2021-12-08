<template>
 <div class="card">
    <div class="imgBx">
      <img src="../../assets/tq1.jpeg"/>
    </div>
    <div class="content">
      <div class="details">
        <h2>LemonLiu<br>
          <span>Programer</span>
        </h2>
        <ul class="sci">
          <li><a herf="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a herf="#"><i class="fab fa-twitter"></i></a></li>
          <li><a herf="#"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a herf="#"><i class="fab fa-instagram"></i></a></li>
      </ul>
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

<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  margin: 0 auto;
}
.imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  transform: translateY(30px) scale(0.5);
  transform-origin: top;
}
.imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
}
.content .details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: ce
}
.content .details h2 {
  color: #444;
  font-size: 1.2em;
  font-weight: 500;
}
.content .details h2 span {
  font-size: 0.8em;
  color: #03a9f4;
  font-weight: 400;
}
.sci {
  position: relative;
  display: flex;
  margin-top: 5px;
}
.sci li {
  list-style: none;
  margin: 4px;
}
.sci li a {
  width: 45px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: transparent;
  font-size: 1.25em;
  color: #444;
  text-decoration: none;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}
.sci li a:hover {
  background: #03a9f4;
  color: white;
}
</style>
