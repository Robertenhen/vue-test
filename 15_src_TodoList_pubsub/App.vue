<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter :todos="todos" @checkAll="checkAll" @clearDone="clearDone" />
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import {deleteTopicName} from './config/consts';
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "MyApp",
  data() {
    return {
      // 本地存储的todos项为空时返回[]空数组
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  mounted() {
    // this.$bus.$on("deleteTodo", (id) => {
    //   if (confirm("确定删除吗？")) {
    //     this.todos = this.todos.filter((t) => t.id !== id);
    //   }
    // });
    this.token = PubSub.subscribe(deleteTopicName, (msgName, data) => { 
      if (confirm("确定删除吗？")) {
        this.todos = this.todos.filter((t) => t.id !== data);
      }
    });
  },
  beforeDestroy() { 
    // this.$bus.$off('deleteTodo');
    PubSub.unsubscribe(this.token);
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 全选或者取消全选
    checkAll(allChecked) {
      this.todos.forEach((todo) => {
        todo.done = allChecked;
      });
    },
    // 清除所有已完成的todo
    clearDone() {
      if (confirm("清除所有已完成的任务吗?")) {
        this.todos = this.todos.filter((t) => !t.done);
      }
    },
  },
  watch: {
    todos: {
      // 深度监视todos属性
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  components: { MyHeader, MyList, MyFooter },
};
</script>

<style lang="less">
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>