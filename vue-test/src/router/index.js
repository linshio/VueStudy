//该应用专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About.vue' 
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'
//创建并暴露一个路由器
const router =  new VueRouter({
  routes:[
    {
      name:'guanyu',
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'message',
          component:Message,
          children:[ 
            {
              name:'xiangqing',
              path:'detail/:id/:title',
              // path:'detail',
              component:Detail,
              //props的第一种用法，值为对象，该对象中所有的k v都会以props的形式传给Detail组件
              // props:{
              //   a:1,
              //   b:'hello'
              // }

              //props的第二种写法，值为bolean，若该值为真，就会把该路由组件中收到的所有params参数，以props的形式传给Detail组件
              // props:true
              
              //props的第三种写法，直接返回一个回调函数
              props($route){
                return {
                  id:$route.params.id,
                  title:$route.params.title
                }
              } 
            }
          ]

        },
        {
          path:'news',
          component:News
        }
      ]
    }
  ]
}) 

//全局前置路由守卫----每次路由切换之前会被调用
//初始化的时候会被调用
//在每一次路由切换之前都会帮助我调用这个函数
router.beforeEach((to,from,next)=>{
  console.log('to ==> ',to);
  console.log('from ==> ',from);
  console.log('next ==> ',next);
})

export default router