<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学生名称： {{ studentName }}</h2>
  </div>
</template>

<script>

export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷幅度为方式访问发",
      address: '北京',
      studentName: '张三'
    };
  },
  mounted() {
    // 在事件总线上绑定hello事件
    this.$bus.$on('hello', (data) => { 
      // console.log('我是School组件，收到了数据', data);
      this.studentName = data;
    });
  },
  beforeDestroy() { 
    this.$bus.$off('hello');
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
