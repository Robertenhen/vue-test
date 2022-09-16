<template>
  <div class="todo-header">
    <input ref="title" type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"
     />
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "MyHeader",
  data() { 
    return {
      title:''
    }
  },
  methods: {
    add() { 
      const title = this.$refs.title.value;
      // 检验数据
      if (!title.trim()) {
        alert('输入不能为空！');
        return;
      }

      // 将用户的输入包装成一个todo对象
      const todoObj = {
        id: nanoid(),
        title,
        done: false
      }
      // 通知App组件去添加一个对象
      this.$emit('addTodo', todoObj)
      this.$refs.title.value = '';
    }
  },
};
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>