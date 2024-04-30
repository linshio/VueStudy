<template>
  <ul>
    <li :style="{ opacity }">Welcome Study Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1
    }
  },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01
  //     if(this.opacity<=0) this.opacity =1
  //   }, 16);
  // },
  // beforeDestroy(){
  //   console.log("news is dead");
  //   clearInterval(this.timer)
  // }
  //激活
  activated() {
    console.log('news is activated');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16);
  },
  //失活
  deactivated() {
    console.log('news is deactivated');
    clearInterval(this.timer)
  },
}
</script>

<style lang="scss" scoped></style>