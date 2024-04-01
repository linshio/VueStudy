<template>
  <div class="demo">
    <h2 v-text="msg"></h2>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      msg:'School Model',    
      name:'azSchool',
      address:'qwer'
    }
  }
}
</script>

<style scoped>
  .demo{
    background-color: aqua;
  }
</style>