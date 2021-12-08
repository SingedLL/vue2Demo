<template>
 <div class="expand-bar-box">
   <input type="checkbox"/>
   <span></span>
   <span></span>
   <ul>
     <li><a href="#"></a>点赞</li>
     <li><a href="#"></a>投币</li>
     <li><a href="#"></a>收藏</li>
     <li><a href="#"></a>关注</li>
     <li><a href="#"></a>分享</li>
   </ul>
 </div>
</template>

<script>
// 伸缩式导航
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
.expand-bar-box, ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.expand-bar-box {
  position: relative;
  padding: 20px;
  border-radius: 50px;
  background-color: #fff;

  /* input {
    width: 40px;
    height: 40px;
    opacity: 0;
  }
  input:checked ~ ul {
    width: 350px;
  }
  input:checked ~ span:nth-child(2) {
    top: calc(50% - 2px);
    transform: rotate(-45deg);
    background-color: #fb7299;
    // 先执行top， 0.3s后再执行transform
    //transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
  }
  input:checked ~ span:nth-child(3) {
    top: calc(50% - 2px);
    transform: rotate(45deg);
    background-color: #fb7299;
    transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
  }
  span {
    position: absolute;
    left: 25px;
    top: calc(50% - 10px);
    width: 30px;
    height: 4px;
    border-radius: 15px;
    background-color: #999;
    pointer-events: none;
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
  }
  span:nth-child(3) {
    top: calc(50% + 6px)
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0;
    white-space: nowrap;
    transition: all 0.5s;

    li {
      list-style: none;
      margin: 0 15px;

      a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: #333;
      }
      a:hover {
        color: #fb7299;
      }
    }
  } */
}
.expand-bar-box input {
  width: 40px;
  height: 40px;
  opacity: 0;
}
.expand-bar-box span {
  position: absolute;
  left: 25px;
  top: calc(50% - 10px);
  width: 30px;
  height: 4px;
  border-radius: 15px;
  background-color: #999;
  pointer-events: none;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
}
.expand-bar-box span:nth-child(3) {
  top: calc(50% + 6px)
}
.expand-bar-box ul {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  white-space: nowrap;
  transition: all 0.5s;
}
.expand-bar-box ul li {
  list-style: none;
  margin: 0 15px;
}
.expand-bar-box ul li a {
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.expand-bar-box ul li a :hover {
  color: #fb7299;
}
.expand-bar-box input:checked ~ ul {
  width: 350px;
}
</style>
