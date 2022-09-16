// 改文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about', // 一级路由
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news', // 二级路由
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              name:'detail',
              path: 'detail',
              component: Detail,
            }
          ]
        }
      ]
    },
   
  ]
});