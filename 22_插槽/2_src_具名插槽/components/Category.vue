<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 定义一个插槽(挖个坑，等着组件的使用者进行填充) -->
    <slot name="center">我是默认值，当组件的使用者没有传递具体结构时，我会出现1</slot>
    <slot name="footer">我是默认值，当组件的使用者没有传递具体结构时，我会出现2</slot>
  </div>
</template>

<script>
export default {
  name: 'MyCategory',
  data() { 
    return {

    }
  },
  props:['title', 'list']
}
</script>

<style lang="less" scoped>
.category {
  background-color: skyblue;
  color: white;
  width: 200px;
  height: 300px;
  h3 {
    text-align: center;
    background-color: orange;
  }
}
</style>