<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖上一个坑，等待组件的使用者进行填充） -->
    <!-- <slot>其中可以存在默认值1</slot> -->
    <slot :games="games">其中可以存在默认值</slot>
  </div>
</template>

<script>
export default {
  name:'Category',
  props:['title'],
  data() {
    return {
      //游戏
      games:['英雄联盟','大表哥2','元神']
    }
  }
}
</script>

<style>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }

  h3{
    text-align: center;
    background-color: orange;
  }
  
  img{
    width: 100%;
  }
  
</style>