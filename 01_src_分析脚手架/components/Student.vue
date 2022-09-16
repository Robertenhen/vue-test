<template>
  <div class="demo2">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="showName">点我输出姓名</button>
  </div>
</template>

<script>
export default {
  name:'MyStudent',
  data() {
    return {
      name: "陈语欣",
      age: 3,
    };
  },
  methods: {
    showName() {
      console.log(this.name);
    },
  },
};
</script>

<style>
.demo2 {
  background-color: green;
}
</style>
