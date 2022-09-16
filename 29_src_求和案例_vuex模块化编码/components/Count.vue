<template>
  <div>
    <h2>当前求和为: {{ total }}</h2>
    <h3>当前求和放大10倍为: {{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red">Person组价的总人数是： {{ personList.length }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="INCREASE(num)">+</button>
    <button @click="DECREASE(num)">-</button>
    <button @click="addWhenOdd(num)">当前求和为奇数再加</button>
    <button @click="addAfterAMinute(num)">等一会再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "MyCount",
  data() {
    return {
      num: 1, // 用户选择的数字
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据。(数组写法)
    ...mapState("countAbout", ["total", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    /****************************************************************/
    //借助mapGetters生成计算属性，从getters中读取数据。(数组写法)
    ...mapGetters("countAbout",["bigSum"]),
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    ...mapMutations("countAbout",["INCREASE", "DECREASE"]),
    /*****************************************************/
    ...mapActions("countAbout",["addWhenOdd", "addAfterAMinute"]),
  },
};
</script>

<style lang="less" scoped>
button {
  margin: 5px;
}
</style>