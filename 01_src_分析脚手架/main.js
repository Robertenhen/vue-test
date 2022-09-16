/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false;

/* 
    关于不同版本的Vue:

      1.vue.js与vue.runtime.xxx.js的区别：
        (1).vue.js是完整版本的Vue，包含：核心功能(瓷砖)+模板解析器(工人)
        (2).vue.runtime.xxx.js是运行版本的Vue，只包含核心功能，没有模板解析器。

      2.因为vue.runtime,xxx,js没有模板解析器，所以不能使用template配置项，需要使用
      render函数接收到的createElement函数去指定具体内容。

*/

// 创建Vue实例对象---vm
/* new Vue({
  el: '#app',
  // 下面这行代码一会解释，完成了这个功能：将App组件放入容器中
  render: h => h(App),
}) */

let person = { name: 'tome', age: 18 };
console.log(person);

function Extend(params) {
  
}


new Vue({
  el: '#app',
  // template:`<h2>你好啊</h2>`,
  // components: {App}
  render: h => h(App)
})
