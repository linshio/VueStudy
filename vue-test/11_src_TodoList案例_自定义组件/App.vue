<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader ref="addTodo"></MyHeader>
        <List :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo"></List>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import List from './components/List'
import MyFooter from './components/MyFooter.vue'
export default {
  name:'App',
  components:{MyHeader,List,MyFooter},
  data() {
    return {
      //刚开始没有数据的时候todos为null会报错 后面加上[]防止null报错
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    //添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    //勾选或者取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id){
          todo.done = !todo.done
        }
      })
    },
    //删除对应的对象
    delTodo(id){
      this.todos = this.todos.filter(todo=>todo.id!==id) 
    },
    //全选或者取消全选
    checkAllTodo(done){
      this.todos.forEach(todo => {
        todo.done = done
      });
    },
    //清除已经完成的todo
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch:{
    todos:{
      //开启深度监视
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$refs.addTodo.$on('addTodo',this.addTodo)
  },
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>