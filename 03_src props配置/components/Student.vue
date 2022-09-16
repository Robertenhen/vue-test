<template>
  <div>
    <h1 class="title">{{ selfIntroduction }}</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年级：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      selfIntroduction: "我是一个尚硅谷的学生",
      myAge: this.age
    };
  },
  methods: {
    updateAge() { 
      this.myAge++;
    }
  },
  // 简单声明接收
  // props: ['name', 'sex', 'age', 'phone'] 
  // 接收的同时对数据进行类型的限制
  /* props: {
    name: String,
    age: Number,
    sex: String,
  }, */

  // 接收的同时对数据进行类型的限制 + 默认值的指定 + 必要性的限制
  props: {
    name: {
      type: String, // name的类型是字符串
      required: true // name是必要的
    },
    age: {
      type: Number,
      default: 99 // 默认值
    },
    sex: {
      type: String,
      required: true
    }
  }


};
</script>

<style>
.title {
  color: white;
  background-color: skyblue;
}
</style>