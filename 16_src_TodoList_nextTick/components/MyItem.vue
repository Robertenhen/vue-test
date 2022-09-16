<template>
  <li :id="todo.id">
    <label>
      <input type="checkbox" v-model="todoObj.done" />
      <input
        ref="editTextbox"
        @blur="handleBlur(todoObj)"
        type="text"
        :value="todoObj.title"
        v-show="todoObj.isEdit"
      />
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
    </label>

    <button class="btn btn-danger" @click="deleteTodo_Item">删除</button>
    <button
      v-show="!todoObj.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todoObj)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import PubSub from "pubsub-js";
import { deleteTopicName, editTopicName } from "../config/consts";

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
      // this.$bus.$emit('deleteTodo', this.todo.id);
      PubSub.publish(deleteTopicName, this.todoObj.id);
    },
    handleEdit(todoObj) {
      // todoObj.isEdit = true;
      if (todoObj.hasOwnProperty("isEdit")) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, "isEdit", true);
      }

      // 在下一次DOM更新结束后执行其指定的回调
      this.$nextTick(function () {
        // 编辑框获取焦点
        this.$refs.editTextbox.focus();
      });
    },
    handleBlur(todoObj) {
      this.$set(todoObj, "isEdit", false);
      // 修改App组件里的数据
      if (!this.$refs.editTextbox.value.trim()) {
        return alert("输入不能为空！");
      }
      todoObj.title = this.$refs.editTextbox.value.trim();
      this.$bus.$emit(editTopicName, this.todoObj);
    },
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