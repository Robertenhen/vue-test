<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  // mounted() {
  //   console.log("Home组件挂载完毕", this);
  //   window.homeRoute = this.$route;
  //   window.homeRouter = this.$router;
  // },
  // beforeDestroy() {
  //   console.log("Home组件即将被销毁");
  // },
};
</script>