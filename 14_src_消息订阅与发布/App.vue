<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <Student />
    <School />

  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'
import Student from './components/Student.vue'


export default {
  name: 'MyApp',
  data() { 
    return {
      msg:'你好啊'
    }
  },
  components: { Student, School },
  methods: {
  }
}
</script>

<style lang="less">
  .app {
    background-color: gray;
  }
</style>