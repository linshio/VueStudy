<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="fs">学生性别：{{ sex }}</h2>
    <button @click="sendStudentName()">把学生的名给App</button>
    <button @click="unbind()">解绑az事件</button>
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
      this.$emit('demo')
      // this.$emit('click')
    },
    unbind(){
      //解绑一个自定义事件
      // this.$off('az')
      //解绑多个自定义事件
      // this.$off(['az','demo'])
      //解绑全部的自定义事件
      this.$off()
    }
  }
}
</script>

<style>
  .demo{
    background-color: orange;
  }
</style>