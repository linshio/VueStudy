<template>
  <div>
    <h1>当前求和为 {{ sum }}</h1>
    <h2>当前加工后的值为 {{ bigSum }}</h2>
    <h3>学校：{{ school }}</h3>
    <h3>主题：{{ subject }}</h3>
    <h4>下方组件的总人数为：{{ personList.length }}</h4>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数在加</button>
    <button @click="incrementWait(n)">等一等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex' 
export default {
  name:'Count',
  data() {
    return {
      n:1,//选择的数字
    }
  },
  computed:{

    //借助mapState生成计算属性，从state中读取数据。（对象的写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //以上对象写法的简写形式 （数组写法）
    ...mapState(['sum','school','subject','personList']),

    //借助mapGetters生成计算属性,从mapGetters中读取数据。(数组写法) 同理也有对象写法
    ...mapGetters(['bigSum'])
  },

  mounted() {
  },
  methods: {
    // //加
    // increment(){
    //   this.$store.commit('ADD',this.n)
    // },
    // //减
    // decrement(){
    //   this.$store.commit('SUB',this.n)
    // },

    //使用mapMutations对以上的代码进行重写 能够生成对应的方法，
    //方法中会调用commit去联系mutations（对象写法）
    ...mapMutations({increment:'ADD',decrement:'SUB'}),

    //使用mapMutations对以上的代码进行重写 能够生成对应的方法，
    //方法中会调用commit去联系mutations（数组写法）
    // ...mapMutations(['ADD','SUB']),
    
    
    // //奇数加
    // incrementOdd(){
    //   this.$store.dispatch('addOdd',this.n)
    // },
    // //等下加
    // incrementWait(){
    //   this.$store.dispatch('addWait',this.n)
    // }
    //使用mapActions对以上的代码进行重写 能够生成对应的方法，
    //方法中会调用dispatch去联系actions（对象写法）
    ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),

    //使用mapActions对以上的代码进行重写 能够生成对应的方法，
    //方法中会调用dispatch去联系actions（对象写法）
    // ...mapActions(['addOdd','addWait'])
  },
}
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>