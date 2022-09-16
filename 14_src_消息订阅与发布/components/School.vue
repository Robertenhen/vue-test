<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学生名称： {{ studentName }}</h2>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import { nameTopic } from "../config/const.js";

export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷幅度为方式访问发",
      address: '北京',
      studentName: '张三',
      token: null
    };
  },
  mounted() {
    // 订阅消息
    this.token = PubSub.subscribe(nameTopic, (msgName, data) => { 
      this.studentName = data;
    });
  },
  beforeDestroy() {
    // 取消订阅 
    PubSub.unsubscribe(this.token);
  }
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}


</style>
