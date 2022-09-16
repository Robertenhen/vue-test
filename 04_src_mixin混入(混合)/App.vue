<template>
  <div>
    <Student />
    <hr>
    <School />

  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'MyApp',
  components: { Student, School }
}
</script>

<style>

</style>