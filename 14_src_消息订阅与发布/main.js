// 引入Vue
import Vue from 'vue'
// 引入 App
import App from './App'

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 创建Vue的vm
new Vue({
  el: '#app',
  render: h => h(App)
})