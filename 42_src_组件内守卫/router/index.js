// 改文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about', // 一级路由
      component: About,
      meta: {
        title: '关于',
        isAuth: true
      }
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: {
        title:'主页'
      },
      children: [
        {
          name:'xinwen',
          path: 'news', // 二级路由
          component: News,
          meta: {
            isAuth: true,
            title:'新闻'
          },
          // 独享路由守卫
         /*  beforeEnter: (to, from, next) => {
            
            if (to.meta.isAuth) { // 判断是否需要鉴权
              if (localStorage.getItem('school') !== 'atguigu') {
                alert('学校名不对，无权限查看');
                return;
              }
            }
            next();
          } */
        },
        {
          name:'xiaoxi',
          path: 'message',
          component: Message,
          meta: {
            isAuth: true,
            title:'消息'
          },
          children: [
            {
              name:'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,
              meta: {
                isAuth: true,
                title:'详情'
              },
              // props的第一种写法：值为对象。该对象中的所有key-value都会以props的形式传递给Detail组件。
              // props:{a:1, b:'hello'}

              // props的第二种写法：值为布尔值。若布尔值微为真，就会把该路由组件收到的所有params参数，以props的形式传递给Detail组件。
              // props: true

              // props的第三种写法：值为函数。
              props($route) { 
                return {
                  id: $route.params.id,
                  title: $route.params.title
                }
              }

            }
          ]
        }
      ]
    },
   
  ]
});

// 全局前置路由守卫--初始化的时候被调用，每次路由切换之前被调用
/* router.beforeEach((to, from, next) => { 
  console.log('前置路由守卫', to, from);
 
  var school = localStorage.getItem('school');
  if (to.meta.isAuth) { // 判断是否需要鉴权
    if (school !== 'atguigu') {
      alert('学校名不对，无权限查看');
      return;
    }
  }

  next();
}); */

// 全局后置路由守卫--初始化的时候被调用，每次路由切换之后被调用
/* router.afterEach((to, from) => { 
  console.log('后置路由守卫', to, from);
  document.title = to.meta.title || '硅谷系统';
}); */

export default router;