<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>{{n}}</h2>
    <button @click="add">点击增加数字</button>
    <button @click="sendStudentName()">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>

export default {
  name: "MyStudent",
  data() {
    return {
      name: "赵云",
      sex: '男',
      n: 0
    };
  },
  mounted() {
    // this.sendStudentName();
  },
  methods: {
    add() { 
      console.log('add回调被调用了');
      this.n++
      
    },
    sendStudentName() { 
      // 触发Student实例身上的atguigu事件
      this.$emit('atguigu', this.name, 666, 888, 999);
      // this.$emit('click');
    },
    unbind() { 
      // 解绑Student实例身上的atguigu事件(一个)
      this.$off('atguigu');
      // 解绑事件(多个)
      // this.$off(['atguigu', 'demo']);
      // 解绑所有的自定义事件
      // this.$off();
    },
    death() { 
      this.$destroy(); // 销毁了当前Student组件的实例， 销毁后所有Student实例的自定义事件全都失效了。
    }
  }
};
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
