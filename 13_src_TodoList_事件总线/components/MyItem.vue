<template>
  <li :id="todo.id">
    <label>
      <input type="checkbox" v-model="todoObj.done" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo_Item">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  data() {
    return {
      todoObj: this.todo,
    };
  },
  // 声明接收todo对象 props只读，不可修改
  props: ["todo"],
  methods: {
    deleteTodo_Item() { 
      this.$bus.$emit('deleteTodo', this.todo.id);
    }
  },
};
</script>

<style scoped lang="less">
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: orange;
  button {
    display: block;
  }
}


</style>