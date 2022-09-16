<template>
  <div>
    <button @click="switchDisplay">显示/隐藏</button>
    <transition-group 
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__heartBeat"
      leave-active-class="animate__rollOut"
      >
      <h1 key="n1" ref="content" v-show="!isShow">你好啊！</h1>
      <h1 key="n2" ref="content" v-show="isShow">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "MyTest2",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    switchDisplay() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
  color: white;
}
</style>