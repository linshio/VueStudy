<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="fs">学生性别：{{ sex }}</h2>
    <button @click="sendStudentName()">把学生的名给App</button>
  </div>
</template>

<script>

export default {
  name:'Student',
  data() {
    return {
      name:'az',
      sex:'man'
    }
  },
  methods:{
    sendStudentName(){
      //触发Student组件身上的az事件
      this.$emit('az',this.name)
    }
  }
}
</script>

<style>
  .demo{
    background-color: orange;
  }
</style>