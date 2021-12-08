<template>
  <div class="box">
    <!-- <CountDown1/>
    <CountDown/> -->
    <!-- <CardAnimate/> -->
    <!-- <Rocket/> -->
    <!-- <ButtonColorful/> -->
    <!-- <TextColorful/> -->
    <!-- <Cards/>-->
    <!-- <PictureFlip/> -->
    <!-- <Bg/> -->
    <!-- <ButtonDazzle/> -->
    <!-- <ExpandBar/> -->
    <!-- <PhotoCube/> -->
    <!-- <PhotoCards/> -->
    <!-- <RotateCard/> -->
    <!-- <Card/>-->
    <TextShadow/>
  </div>
</template>

<script>
// import CardAnimate from '../../components/animate/CardAnimate.vue'
// import PhotoCube from '../../components/animate/PhotoCube.vue'
// import Rocket from '../../components/animate/Rocket.vue'
// import ButtonColorful from '../../components/animate/ButtonColorful.vue'
// import TextColorful from '../../components/animate/TextColorful.vue'
// import Cards from '../../components/animate/Cards.vue'
// import PictureFlip from '../../components/animate/PictureFlip.vue'
// import Bg from '../../components/animate/Bg.vue'
// import ButtonDazzle from '../../components/animate/ButtonDazzle.vue'
// import ExpandBar from '../../components/animate/ExpandBar.vue'
// import PhotoCards from '../../components/animate/PhotoCards.vue'
// import RotateCard from '../../components/animate/RotateCard.vue'
// import Card from '../../components/animate/Card.vue'
import TextShadow from '../../components/animate/TextShadow.vue'
// import CountDown from '../../components/animate/CountDown.vue'
// import CountDown1 from '../../components/animate/CountDown1.vue'

export default {
  components: {
    // CountDown1,
    // CountDown,
    // CardAnimate,
    // PhotoCube, // 立方体图片
    // Rocket,
    // ButtonColorful,
    // TextColorful,
    // Cards,
    // PictureFlip,
    // Bg,
    // ButtonDazzle,
    // ExpandBar,
    // PhotoCards,
    // RotateCard, // 3D旋转卡片
    // Card, // 玻璃态卡片特效
    TextShadow
  },
  created () {
    console.log('L__res', this.$api)
    this.$api.getUser().then((res) => {
      console.log('L__res', res)
    })

    const a = { name: 'lemon', age: 18 }
    console.log('L__', a?.height)
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(#99f, #f99)
}

</style>
