<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input ref="kw"
        type="text"
        placeholder="enter the name you search"
        @keyup.enter="searchList"
      />&nbsp;
      <button @click="searchList">Search</button>
    </div>
  </section>
</template>

<script>
import {searchTopicName} from '../configs/consts'

export default {
  name: "MySearch",
  data() { 
    return {
      keyword: 'robert'
    }
  },
  methods: {
    searchList() { 
      console.log('搜索的名称是', this.$refs.kw.value);
      const keyword = this.$refs.kw.value;
      this.$bus.$emit(searchTopicName, keyword);
    }
  }
};
</script>

<style>
</style>