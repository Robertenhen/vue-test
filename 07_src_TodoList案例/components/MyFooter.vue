<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input ref="ch" type="checkbox" :checked="allDone" @change="allCheck" /> -->
      <input ref="ch" type="checkbox" v-model="allDone" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAll", "clearDone"],
  computed: {
    doneTotal() {
      return this.todos.reduce((pre, current) => pre + (current.done ? 1: 0), 0);
    },
    total() { 
      return this.todos.length;
    },
    allDone: { 
      get() { return this.doneTotal === this.total && this.total !== 0; },
      set(val) { this.checkAll(val); }
    }
  },
  methods: {
    allCheck() { 
      const allChecked = this.$refs.ch.checked;
      this.checkAll(allChecked);
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>