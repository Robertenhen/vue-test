<template>
  <div>
    <h2>当前求和为: {{ total }}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="addWhenOdd">当前求和为奇数再加</button>
    <button @click="addAfterAMinute">等一会再加</button>
  </div>
</template>

<script>
export default {
  name: "MyCount",
  data() {
    return {
      num: 1,// 用户选择的数字
      total: 0,// 当前的和
    };
  },
  methods: {
    add() {
      this.total += this.num;
    },
    minus() {
      this.total -= this.num;
    },
    addWhenOdd() {
      if (this.total % 2 === 0) {
        return;
      }
      this.total += this.num;
    },
    addAfterAMinute() {
      setTimeout(() => {
        this.total += this.num;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
button {
  margin: 5px;
}
</style>