<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="handelCheck(todoObj.id)"/>
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      <input v-show="todoObj.isEdit"
       type="text" :value="todoObj.title"
       @blur="handleBlur(todoObj,$event)"
       ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDel(todoObj.id)">删除</button>
    <button v-show="!todoObj.isEdit" class="btn btn-edit" @click="handleEdit(todoObj)">编辑</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name:'Item',
  props:['todoObj'],
  methods:{
    handelCheck(id){
      //通知app组件将对应的todo对象的done值进行取反
      this.$bus.$emit('checkTodo',id)
    },
    handleDel(id){
      //通知app组件将对应的todo对象进行删除
      if(confirm('确定删除？')){
        // this.$bus.$emit('delTodo',id)
        //触发事件
        PubSub.publish('delTodo',id)
      }
    },
    handleEdit(todoObj){
      //isEdit该属性添加过一次就会存在，不需要每次点击都添加
      if(todoObj.hasOwnProperty('isEdit')){
        todoObj.isEdit = true
      }else{
        //设置当前的状态是 编辑中
        this.$set(todoObj,'isEdit',true)
      }
      //$nextTick该函数会在下一次DOM更新结束后执行其指定的回调
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点的回调函数
    handleBlur(todoObj,e){ 
      // PubSub.publish('editTodo',todoObj.id,e.target.value)
      todoObj.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空！')
      this.$bus.$emit('editTodo',todoObj.id,e.target.value)
      
    }
  }
}
</script>

<style scoped>
/*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }

</style>