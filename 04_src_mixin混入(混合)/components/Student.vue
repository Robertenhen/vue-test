<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>{{x}}</h2>
    <h2>{{y}}</h2>
  </div>
</template>

<script>
// import {mixin, mixin2} from '../mixin'

export default {
  name: "MyStudent",
  data() {
    return {
      name: "赵云",
      sex: '男',
      x: 666
    };
  },
  mounted() {
    console.log('吃了么');
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