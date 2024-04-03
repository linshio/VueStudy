<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现；子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <hr>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <!-- 第一种写法 使用v-on或者@az-->
    <!-- <Student v-on:az="getStudentName"></Student> -->
    <!-- 上面这行代码的简写形式 -->
    <!-- <Student @az="getStudentName"></Student> -->
    <!-- 第二种写法 使用ref-->
    <Student ref="student"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
  name:'App',
  components:{Student,School},
  data() {
    return {
      msg:'hello'
    }
  },
  methods: {
    getSchoolName(name){
      console.log('App收到了学校的名字为：',name);
    },
    getStudentName(name){
      console.log('App收到了学生的名字为：',name);
    },
  },
  mounted() {
      //绑定自定义事件 
      // this.$refs.student.$on('az',this.getStudentName)
      //只能点击触发一次
      this.$refs.student.$once('az',this.getStudentName)
  }
}
</script>

<style>
  .app{
    background-color:burlywood;
  }
</style>