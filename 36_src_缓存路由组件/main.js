// 引入Vue
import Vue from 'vue';
// 引入 App
import App from './App';
// 引入 vue-router插件
import VueRouter from 'vue-router';
// 引入路由器
import router from './router'


// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 使用vue-router插件
Vue.use(VueRouter);

// 创建Vue的vm
const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
});

console.log('vm', vm);