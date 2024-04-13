//数据处理配置
export default{
  namespaced:true,
  actions:{
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
  },
  mutations:{
    ADD(state,value){
      state.sum += value
    },
    SUB(state,value){
      state.sum-=value
    }
  },
  state:{
    sum:0,//总和数字
    school:'az',
    subject:'kao'
  },
  getters:{
    bigSum(state){
      //将数据进行加工
      return state.sum*10
    }
  }
}