<template>
  <div class="container">
    <category title="游戏">
      <template scope="az">
        <ul>
          <li v-for="(game,index) in az.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </category>
    <category title="游戏">
      <template slot-scope="az">
        <ol>
          <li style="color:red" v-for="(game,index) in az.games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </category>
    <category title="游戏">
      <template scope="{games}">
        <h4 v-for="(game,index) in games" :key="index">{{ game }}</h4>
      </template>
    </category>
  </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
  name:'App',
  components:{Category},
}
</script>

<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
</style>
 