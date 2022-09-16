<template>
  <div>
    <h2 :style="{opacity}">欢迎学习Vue</h2>
    <ul>
      <li>news001 <input ref="mm" type="text"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyNews",
  data() { 
    return {
      opacity:'.4'
    }
  },
  /* beforeDestroy() { 
    console.log('News组件即将被销毁了');
    clearInterval(this.timerId);
  }, */
  /* mounted() {
    this.timerId = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) { 
        this.opacity = 1;
      }
    }, 16);
  } */
  activated() { 
    this.timerId = setInterval(() => {
      // console.log('News组件被激活了');
      this.opacity -= 0.01;
      if (this.opacity <= 0) { 
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() { 
    console.log('News组件失活了');
    clearInterval(this.timerId);
  }
};
</script>

<style>
</style>