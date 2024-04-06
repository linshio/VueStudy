<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendNameForSchool">把学生名给school组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name:'Student',
  data() {
    return {
      name:'az',
      sex:'man'
    }
  },
  methods:{
    sendNameForSchool(){
      // this.$bus.$emit('hello',this.name)
      //发送消息
      pubsub.publish('hello',666)
    }
  }
}
</script>

<style scoped>
  .demo{
    background-color: orange;
  }
</style>