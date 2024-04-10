//该文件用户创建vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
//使用vuex插件
Vue.use(Vuex)
//准备actions--用于响应组件中的动作
const actions = {
  addOdd(context,value){
    if(context.state.sum%2){
      context.commit('ADD',value)
    }
    console.log(context);
  },
  addWait(context,value){
    setTimeout(() => {
      context.commit('ADD',value)
    }, 500);
  }
}
//准备mutations--用于操作数据(state)
const mutations = {
  ADD(state,value){
    state.sum += value
  },
  SUB(state,value){
    state.sum-=value
  },
  ADD_PERSON(state,value){
    state.personList.unshift(value)
  }
}
//准备state--用于存储数据
const state = {
  sum:0,//总和数字
  school:'az',
  subject:'kao',
  personList:[
    {id:'001',name:'张三'}
  ]
}

//用于将state中的数据进行加工处理
const getters = {
  bigSum(state){
    //将数据进行加工
    return state.sum*10
  }
}
//创建并暴露store
export default new Vuex.Store({
  actions:actions,
  mutations,
  state:state,
  getters
})