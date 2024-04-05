<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {    
      name:'azSchool',
      address:'qwer'
    }
  },
  mounted(){
    this.$bus.$on('hello',(data)=>{console.log('school ====>',data);})
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  },
}
</script>

<style scoped>
  .demo{
    background-color: aqua;
  }
</style>