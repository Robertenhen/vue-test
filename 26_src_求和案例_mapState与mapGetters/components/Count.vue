<template>
  <div>
    <h2>当前求和为: {{ total }}</h2>
    <h3>当前求和放大10倍为: {{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "MyCount",
  data() {
    return {
      num: 1, // 用户选择的数字
    };
  },
  computed: {
    //程序员手动获取计算属性
    /* total() {
      return this.$store.state.total;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    }, */
    //借助mapState生成计算属性，从state中读取数据。(对象写法)
    // ...mapState({ total: "total", school: "school", subject: "subject" }),
    //借助mapState生成计算属性，从state中读取数据。(数组写法)
    ...mapState(["total", "school", "subject"]),
    //借助mapGetters生成计算属性，从getters中读取数据。(对象写法)
    // ...mapGetters({bigSum:'bigSum'}),
    //借助mapGetters生成计算属性，从getters中读取数据。(数组写法)
...mapGetters(["bigSum"]),
...mapActions['addWhenOdd', 'addAfterAMinute'],
    ...mapMutations['INCREASE', 'DECREASE']
  },
  mounted() {},
  methods: {
    add() {
      this.$store.commit("INCREASE", this.num);
    },
    minus() {
      this.$store.commit("DECREASE", this.num);
    },
    addWhenOdd() {
      this.$store.dispatch("addWhenOdd", this.num);
    },
    addAfterAMinute() {
      this.$store.dispatch("addAfterAMinute", this.num);
    },
  },
};
</script>

<style lang="less" scoped>
button {
  margin: 5px;
}
</style>