<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:['todos'],
  computed:{
    doneTotal(){
      //庸俗写法
      // let i = 0
      // this.todos.forEach(todo => {
      //   if(todo.done){
      //     i++
      //   }
      // });
      // return i
      //优雅写法 reduce该函数会将最后一次的值作为方法的返回值返回出去
      return this.todos.reduce((pre,current)=> pre + (current.done?1:0),0)
    },
    total(){
      return this.todos.length
    },
    isAll:{
      get(){
        return this.doneTotal===this.total && this.total>0
      },
      set(value){
        // this.checkAllTodo(value);
        this.$emit('checkAllTodo',value)
      }
    }
  },
  methods:{
    // checkAll(e){
    //   //调用App中的全选或者取消全选
    //   this.checkAllTodo(e.target.checked);
    // }
    clearAll(){
      // this.clearAllTodo()
      this.$emit('clearAllTodo')
    }
  }
}
</script>

<style scoped>
/*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>