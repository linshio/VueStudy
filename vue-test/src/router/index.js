//该应用专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
//创建一个路由器
export default new VueRouter({
  routers:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }
  ]
})