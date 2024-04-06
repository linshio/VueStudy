<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name:'School',
  data() {
    return {    
      name:'azSchool',
      address:'qwer'
    }
  },
  mounted(){
    // this.$bus.$on('hello',(data)=>{console.log('school ====>',data);})
    //订阅消息
    // this.pubId = pubsub.subscribe('hello',function(name,data){
    //   //此时的this会没有值
    //   console.log(this);
    //   console.log('hello is done,the functionName ==>',name);
    //   console.log('hello is done,the data ==>',data);
    // })
    //订阅消息
    this.pubId = pubsub.subscribe('hello',(name,data)=>{
      //此时的this为vc
      console.log(this);
      console.log('hello is done,the functionName ==>',name);
      console.log('hello is done,the data ==>',data);
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    //等到组件销毁的时候应该取消订阅
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style scoped>
  .demo{
    background-color: aqua;
  }
</style>