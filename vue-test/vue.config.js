const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,//关闭语法检查
  transpileDependencies: true,
  //开启代理服务器(方式一)
  // devServer:{
  //   proxy: 'http://localhost:5000'
  // }
  //开启代理服务器(方式二) 可以配置多个代理
  devServer:{
    proxy: {
      '/student':{ //匹配所有以/student开头的请求路径
        target: 'http://localhost:5000', //代理目标的真实路径
        pathRewrite:{'^/student':''},
        changeOrigin:true //是否假装一下真实的服务器地址
      },
      '/car':{ //匹配所有以/car开头的请求路径
        target: 'http://localhost:5001', //代理目标的真实路径
        pathRewrite:{'^/car':''}
      }
    }
  }
})
