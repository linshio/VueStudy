//人员信息配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
  namespaced:true,
  actions:{
    //添加的只能是性梁的
    addPersonLiang(context,value){
      if(value.name.indexOf('梁')===0){
        context.commit('ADD_PERSON',value)
      }else{
        alert('添加的只能是姓梁的')
      }
    },
    addPersonServer(context){
      axios.get('http://localhost:8888/uuid').then(
        response=>{
          context.commit('ADD_PERSON',{id:nanoid,name:response.data})
        },
        error =>{
          alert(error.message)
        }
      )
    }
  },
  mutations:{
    ADD_PERSON(state,value){
      state.personList.unshift(value)
    }
  },
  state:{
    personList:[
      {id:'001',name:'张三'}
    ]
  },
  //获取到第一个人的名字
  getters:{
    firstPersonName(state){
      return state.personList[0].name
    }
  }
}