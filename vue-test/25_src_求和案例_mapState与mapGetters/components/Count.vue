<template>
  <div>
    <h1>当前求和为 {{ sum }}</h1>
    <h2>当前加工后的值为 {{ bigSum }}</h2>
    <h3>学校：{{ school }}</h3>
    <h3>主题：{{ subject }}</h3>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数在加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex' 
export default {
  name:'Count',
  data() {
    return {
      n:1,//选择的数字
    }
  },
  computed:{
    //自己写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    // subject(){
    //   return this.$store.state.subject
    // },
    // school(){
    //   return this.$store.state.school
    // },

    //借助mapState生成计算属性，从state中读取数据。（对象的写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //以上对象写法的简写形式 （数组写法）
    ...mapState(['sum','school','subject']),

    // bigSum(){
    //   return this.$store.getters.bigSum
    // },

    //借助mapGetters生成计算属性,从mapGetters中读取数据。(数组写法) 同理也有对象写法
    ...mapGetters(['bigSum'])
  },

  mounted() {
  },
  methods: {
    //加
    increment(){
      // this.$store.dispatch('add',this.n)
      this.$store.commit('ADD',this.n)
    },
    //减
    decrement(){
      this.$store.commit('SUB',this.n)
    },
    //奇数加
    incrementOdd(){
      this.$store.dispatch('addOdd',this.n)
    },
    //等下加
    incrementWait(){
      this.$store.dispatch('addWait',this.n)
    }
  },
}
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>