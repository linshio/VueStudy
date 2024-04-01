<template>
  <div>
    <Student name="az" sex="man" :age="22"></Student>
    <hr>
    <Student name="ha" sex="man" :age="33"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name:'App',
  components:{
    Student
  }
}
</script>

<style>

</style>