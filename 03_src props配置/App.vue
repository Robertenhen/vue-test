<template>
  <div>
    <Student name="张三" sex="男" :age="18" />
    

  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'

export default {
  name: 'MyApp',
  components: { Student }
}
</script>

<style>

</style>