import Vue from 'vue'
import App from './App.vue'
//引入插件
import VueResource from 'vue-resource'

Vue.config.productionTip = false

//使用插件
Vue.use(VueResource)

new Vue({
  render:h=>h(App),
  beforeCreate() {
    Vue.prototype.$bus = this//安装全局事件总线
  },
}).$mount('#app')