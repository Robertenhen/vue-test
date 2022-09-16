// 引入Vue
import Vue from 'vue'
// 引入 App
import App from './App'

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 创建Vue的vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;//安装全局事件总线
  }
})