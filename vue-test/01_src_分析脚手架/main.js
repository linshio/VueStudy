/*该文件是整个项目的入口文件*/

//引入vue
import Vue from 'vue'
//引入App组件，他是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

/**
 * 关于不同版本的vue：
 *  1.vue.js与vue.runtime.xxx.js的区别：
 *    1)vue.js是完整的Vue，包含：核心功能+模板解析器。
 *    2)vue.runtime.xxx是运行版的Vue，其中只包含：核心功能，并没有模板解析器。
 * 
 *  2.因为vue.runtime.xxx没有模板解析器，所以不能使用template解析配置项，需要使用
 *    render函数接受到createElement的构造函数去指定具体的内容
 * 
 * 
 */

//创建vue的实例对象--vm
new Vue({
  //将app组件放入容器中
  render: h => h(App)
  // render(createElement){
  //   return createElement('h1','hello')
  // }
  // render:(p)=>{
  //   return p('h1','hello')
  // }
  // render:(p) => p('h1','hello')
}).$mount('#app') //绑定组件
 