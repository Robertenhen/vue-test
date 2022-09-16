<template>
  <div class="app">
    <h1>{{ msg }}, 学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- 通过父组件给子组件绑定一个自定义事件实现： 子给父传递数据(第一种写法：使用@或者v-on) -->
    <!-- <Student @atguigu.once="getStudentName" /> -->
    <!-- <Student ref="stu" @atguigu="getStudentName" @demo="m1" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现： 子给父传递数据(第二种写法：使用ref) -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
// 引入School组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "MyApp",
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  components: { Student, School },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名:", name);
    },
    getStudentName(name, ...params) {
      console.log("App收到了学生姓名", name, params);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了");
    },
    show() { 
      console.log('123');
    }
  },
  mounted() {
    // 添加钩子hook，绑定atguigu自定义事件
    this.$refs.student.$on("atguigu", this.getStudentName); // 绑定自定义事件
    // this.$refs.student.$once('atguigu', this.getStudentName);// 绑定自定义事件(一次性)

    setTimeout(() => {
      this.$destroy();
    }, 3000);
  },
};
</script>

<style lang="less">
.app {
  background-color: gray;
  color: whitesmoke;
  padding: 5px;
}
</style>