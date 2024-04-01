<template>
  <div>
    <h2 v-text="msg"></h2>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>

/**
 *mixin（混入）功能：可以把多个组件共用的配置提取成一个混入对象
使用方式：
  一、定义混入：
    {
      data(){...},
      methods:{...}
      ...
    }

  二、使用混入
    1）全局混入 Vue.mixin(xxx)
    2）局部混入：mixins:['xxx'] 
 * 
 */
// import { hunhe } from '../mixin'
export default {
  name:'Student',
  data() {
    return {
      msg:'Student Model',
      name:'az',
      sex:'man'
    }
  },
  // mixins:[hunhe]
}
</script>

<style>

</style>