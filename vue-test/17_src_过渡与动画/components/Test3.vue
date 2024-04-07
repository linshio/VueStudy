<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__bounceOutUp">
      <h1 v-show="!isShow" key="1">hello</h1>
      <h1 v-show="isShow" key="2">world</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name:'Test3',
  data() {
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  

</style>