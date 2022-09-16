<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "MyAbout",
  mounted() {},
  // beforeDestroy() {
  //   console.log('About组件即将被销毁');
  // }

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About--beforeRouteEnter", to, from);
    var school = localStorage.getItem("school");
    if (to.meta.isAuth) {
      // 判断是否需要鉴权
      if (school !== "atguigu") {
        alert("学校名不对，无权限查看");
        return;
      }
    }

    next();
  },

  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) { 
    console.log("About--beforeRouteLeave", to, from);
    next();
  }
};
</script>
