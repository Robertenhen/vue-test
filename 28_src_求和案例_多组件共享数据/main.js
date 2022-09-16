// 引入Vue
import Vue from 'vue';
// 引入插件
import VueResource from 'vue-resource';
// 引入 App
import App from './App';

import store from './store'


// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(VueResource);

// 创建Vue的vm
const vm = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;//安装全局事件总线
  }
});

console.log(vm);