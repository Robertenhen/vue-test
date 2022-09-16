<template>
  <div>
    <button @click="switchDisplay">显示/隐藏</button>
    <transition name="peggi" appear>
       <h1 ref="content" v-show="isShow" >你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  data() { 
    return {
      isShow: true
    }
  },
  methods: {
    switchDisplay() {
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style scoped>
  h1 {
    background-color: orange;
    color: white;
  }

  .peggi-enter-active {
    animation: atguigu 1s linear;
  }
  .peggi-leave-active {
    animation: atguigu 1s reverse linear;
  }

  @keyframes atguigu {
    from {
      transform: translateX(-100%)
    }
    to {
      transform: translateX(0px);
    }
  } 


</style>