<template>
  <div>
    <h1 v-text="msg" ref="title" id="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方DOM元素</button>
    <School ref="sch" id="schN"></School>
  </div>
</template>

<script>
// 引入School组件
import School from './components/school'

export default {
  name: 'MyApp',
  components: { School },
  data() {
    return {
      msg:'欢迎学习vue'
    }
  },
  methods: {
    showDOM() { 
      console.log(this.$refs.title);// 真实DOM元素
      console.log(document.getElementById('title'));// 真实DOM元素
      console.log(this.$refs.btn);  // 真实DOM元素
      console.log(this.$refs.sch);  // School组件的实例对象(vc)
      console.log(document.getElementById('schN'));
    }
  }
}
</script>

<style>

</style>