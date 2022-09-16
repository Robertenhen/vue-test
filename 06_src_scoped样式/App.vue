<template>
  <div>
    <div class="title">你好啊
      <h3 class="b">小兔兔</h3>
    </div>
    <Student />
    <hr>
    <School />

  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'
import Student from './components/Student.vue'


export default {
  name: 'MyApp',
  components: { Student, School }
}
</script>

<style lang="less">
  .title {
    background-color: red;
    .b {
      color: skyblue;
    }
  }
</style>