<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">测试一下go</button>
  </div>
</template>

<script>
export default {
  name: "MyBanner",
  methods: {
    back() { 
      this.$router.back();
    },
    forward() { 
      this.$router.forward();
    },
    test() { 
      // 整数为前进  负数为后退
      this.$router.go(-2);
    }
  }
};
</script>

<style>
</style>