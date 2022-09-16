<template>
  <div class="category">
    <h3>{{ title }}</h3>
    
    <slot :games='games'></slot>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
  props: ["title", "list"],
};
</script>

<style lang="less" scoped>
.category {
  background-color: skyblue;
  color: white;
  width: 200px;
  height: 300px;
  h3 {
    text-align: center;
    background-color: orange;
  }
}
</style>