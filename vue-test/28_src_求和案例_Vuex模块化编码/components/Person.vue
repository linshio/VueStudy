<template>
  <div>
    <h1>人员列表</h1>
    <h3>count组件的值为{{ sum }}</h3>
    <h4>列表中第一个人的姓名是：{{ firstPersonName }}</h4>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addLiang">添加一个姓梁的</button>
    <button @click="addUnKnow">添加一个随机的</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex' 
import { nanoid } from 'nanoid'
export default {
  name:'Person',
  data() {
    return {
      name:''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personAbout.personList
    },
     ...mapState('countAbout',['sum']),
    //  ...mapState('personAbout',['personList'])
    
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods: {
    add(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('personAbout/ADD_PERSON',personObj)
      this.name=''
    },
    addLiang(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.dispatch('personAbout/addPersonLiang',personObj)
      this.name=''
    },
    addUnKnow(){
      this.$store.dispatch('personAbout/addPersonServer')
    }
  },
}
</script>

<style>
</style>