//该文件用户创建vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'

import countConfig from './count'
import personConfig from './person'
//使用vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
  //同名的两种写法
  // dataConfig,
  modules:{
    countAbout:countConfig,
    personAbout:personConfig
  }
})