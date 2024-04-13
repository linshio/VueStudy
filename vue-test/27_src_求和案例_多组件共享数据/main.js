import Vue from 'vue'
import App from './App.vue'
import Store from './store/index.js'
Vue.config.productionTip = false


new Vue({
  render:h=>h(App),
  store:Store,
  beforeCreate() {
    Vue.prototype.$bus = this//安装全局事件总线
    
  },
}).$mount('#app')