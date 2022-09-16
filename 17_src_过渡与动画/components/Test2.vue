<template>
  <div>
    <button @click="switchDisplay">显示/隐藏</button>
    <transition-group name="peggi" appear>
      <h1 key="n1" ref="content" v-show="!isShow">你好啊！</h1>
      <h1 key="n2" ref="content" v-show="isShow">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
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

.peggi-enter-active,
.peggi-leave-active {
  transition: 0.5s linear;
}

/* 进入的起点、离开的终点 */
.peggi-enter,
.peggi-leave-to {
  transform: translateX(-100%);
}
/* 进入的终点、离开的起点 */
.peggi-enter-to,
.peggi-leave {
  transform: translateX(0);
}
</style>