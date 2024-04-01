// 插件
//   功能：用户增强Vue
//   本质：包含install方法的一个对象，install的第一个参数是Vue，
//         第二个以后的参数为插件使用者传递的数据。
//   定义插件：
//   对象.install = function(Vue,options){
//     //1.添加全局过滤器

//     //2.添加全局指令

//     //3.配置全局混入

//     //4.添加实例方法
//     Vue.prototype.$myMethod = function(){...}
//     Vue.prototype.$myProperty = xxxx
//   }
//   使用插件：Vue.use()
export default{
  install(Vue){
    //这个函数的参数为Vue的构造函数
    console.log(Vue)
  }
}
