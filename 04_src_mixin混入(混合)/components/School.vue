<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <span>{{x}}</span>
    <span>{{y}}</span>
  </div>
</template>

<script>
// import { mixin, mixin2 } from '../mixin'

export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: '北京'
    };
  },
  // mixins:[mixin, mixin2]  

};
</script>

<style>
.title {
  color: white;
  background-color: skyblue;
}
</style>