<template>
  <div class="container">
    <category title="美食">
      <img src="../public/az.jpg" alt="">
    </category>
    <category title="游戏">
      <ul>
        <li v-for="(game,index) in games" :key="index">{{ game }}</li>
      </ul>
    </category>
    <category title="电影" >
      <ul>
        <li v-for="(film,index) in films" :key="index">{{ film }}</li>
      </ul>
    </category>
  </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
  name:'App',
  components:{Category},
  data() {
    return {
      //美食
      foods:['火锅','烧烤','牛排'],
      //游戏
      games:['英雄联盟','大表哥2','元神'],
      //电影
      films:['教父','拆弹专家','尚硅谷']
    }
  },
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
 