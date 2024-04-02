<template>
  <div>
    <Header></Header>
    <List>
      <Item></Item>
    </List>
    <Footer></Footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import List from './components/List'
import MyFooter from './components/MyFooter.vue'
export default {
  name:'App',
  components:{MyHeader,List,MyFooter}
}
</script>

<style>

</style>