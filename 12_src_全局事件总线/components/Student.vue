<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <!-- 把学生名字传给School组件 -->
    <button @click="sendStudentName">把学生名传给School组件</button>
  </div>
</template>

<script>

export default {
  name: "MyStudent",
  data() {
    return {
      name: "赵云",
      sex: '男',
    };
  },
  mounted() {
    // console.log('Student', this.x);
  },
  methods: {
    sendStudentName() { 
      // 触发事件总线上的hello事件
      this.$bus.$emit('hello', this.name)
    }
  },
};
</script>

<style scoped>
.student{
  background-color: orange;
  padding: 5px;
}

</style>
