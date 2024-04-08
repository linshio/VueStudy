<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyWord" type="text" placeholder="enter the name you search"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name:'Search',
  data() {
    return {
      keyWord:''
    }
  },
  methods: {
    searchUsers(){
      //在请求之前更新List的数据
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response=>{
          // console.log('success,data==>',response.data.items);
          // this.$bus.$emit('getUsers',response.data.items)
          //在请求成功之后更新List的数据
          this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
        },
        error=>{
          console.log('error ==>',error.message);
          //在请求发生错误是更新List的数据
          this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
        }
      )
    }
  },
}
</script>

<style>

</style>