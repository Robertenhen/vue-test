<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <!-- 把学生名字传给School组件 -->
    <button @click="sendStudentName">把学生名传给School组件</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import { nameTopic } from "../config/const.js";

export default {
  name: "MyStudent",
  data() {
    return {
      name: "赵云",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 发布消息
      PubSub.publish(nameTopic, this.name);
    },
  },
};
</script>

<style scoped>
.student {
  background-color: orange;
  padding: 5px;
}
</style>
