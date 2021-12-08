<template>
  <div class="box">
    <Button/>
    <BorderButton/>
  </div>
</template>

<script>
import Button from '../../components/animate1/Button.vue'
import BorderButton from '../../components/animate1/BorderButton.vue'

export default {
  components: {
    Button,
    BorderButton
  }
}
</script>

<style scoped>
.box {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
