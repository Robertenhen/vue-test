<template>
  <div class="schoolCls">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'MySchool',
  data() {
    return {
      name: '尚硅谷',
      address: '北京.昌平'
    }
  },
}
</script>

<style>
  .schoolCls {
    background-color: gray;
  }
</style>