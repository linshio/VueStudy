<template>
  <div class="demo">
    <h2 v-text="msg"></h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="fs">学生性别：{{ sex }}</h2>
  </div>
</template>

<script>

export default {
  name:'Student',
  data() {
    return {
      msg:'Student Model',
      name:'az',
      sex:'man'
    }
  }
}
</script>

<style lang="less">
  .demo{
    background-color: orange;
    .fs{
      font-size: 60px;
    }
  }
</style>