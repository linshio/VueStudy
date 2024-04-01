<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">button</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from './components/School.vue'
/**
 * ref属性：
 *  1.被用来给元素或者子组件注册引用信息（id的替代者）
 *  2.应用在html标签上获取的是真实的Dom元素，应用在组件标签上的是组件的实例对象 vc
 *  3.使用方式：
 *    打标识：在标签上打上==>ref="xxx"
 *    获取：this.$refs.xxx 
 * 
 *  
*/
export default {
  name:'App',
  components:{School},
  data() {
    return {
      msg:'Hello'
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title)//真实的DOM元素
      console.log(this.$refs.sch);//School组件的实例对象 vc
    }
  }
}
</script>

<style>

</style>