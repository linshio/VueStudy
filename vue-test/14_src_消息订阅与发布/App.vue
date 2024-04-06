<template>
  <div class="app">
    <h2>{{ msg }} </h2>
    <School></School>
    <Student></Student>
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
  }
}
</script>

<style>
  .app{
    background-color:burlywood;
  }
</style>