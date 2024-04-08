<template>
  <div class="container">
    <category title="美食">
      <img slot="center" src="../public/az.jpg" alt="">
      <a slot="footer" href="#">更多美食</a>
    </category>
    <category title="游戏">
      <ul slot="center">
        <li v-for="(game,index) in games" :key="index">{{ game }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">更多街机</a>
        <a href="#">更多游戏</a>
      </div>
    </category>
    <category title="电影" >
      <ul slot="center">
        <li v-for="(film,index) in films" :key="index">{{ film }}</li>
      </ul>
      <template v-slot:footer>
        <div class="foot">
          <a href="#">更多电影</a>
          <a href="#">更多电影</a>
        </div>
        <h4>hello</h4>
      </template>
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
  methods:{

  }
}
</script>

<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
</style>
 