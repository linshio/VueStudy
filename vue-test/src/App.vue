<template>
  <div id="root">
    <button @click="getStudents()">获取学生的信息</button>
    <button @click="getCars()">获取汽车的信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'App',
  methods: {
    getStudents(){
      axios.get('http://localhost:8080/student/students').then(
        response => {
          if(response.status===200)
            console.log('请求成功，返回的数据为==>',response.data);
        },
        error => {
          console.log('请求失败，错误的信息为==>',error.message);
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/car/cars').then(
        response=>{
          console.log('请求成功，返回的数据为==>',response.data);
        },
        error=>{
          console.log('请求失败，错误的信息为==>',error.message);
        }
      )
    }
  },
}
</script>