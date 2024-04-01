<template>
  <div>
    <h2 v-text="msg"></h2>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
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
  },
  methods:{
    showName(){
      alert(this.name)
    }
  }
}
</script>

<style>

</style>