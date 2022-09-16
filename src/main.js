// 引入Vue
import Vue from 'vue';

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DatePicker } from 'element-ui'


// 引入 App
import App from './App';

// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 引用ElemntUI插件
// Vue.use(ElementUI);

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 创建Vue的vm
const vm = new Vue({
  el: '#app',
  render: h => h(App)
});

console.log('vm', vm);