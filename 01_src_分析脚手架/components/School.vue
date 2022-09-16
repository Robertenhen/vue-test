<template>
  <div class="demo">
    <h2>{{ schoolName }}</h2>
    <h2>{{ schoolAddress }}</h2>
    <button @click="showName">点我输出x</button>
  </div>
</template>

<script>
export default {
  name:'MySchool',
  data() {
    return {
      schoolName: "尚硅谷",
      schoolAddress: "北京东城区",
    };
  },
  methods: {
    showName() {
      console.log(this.schoolName);
    },
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>
