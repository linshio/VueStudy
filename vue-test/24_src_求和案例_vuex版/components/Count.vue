<template>
  <div>
    <h1>当前求和为 {{ $store.state.sum }}</h1>
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
export default {
  name:'Count',
  data() {
    return {
      n:1,//选择的数字
    }
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