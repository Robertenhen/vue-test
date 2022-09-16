<template>
  <div class="container">
    <Category title="游戏">
      <template scope="robert">
        <ul>
          <li v-for="(game, index) in robert.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li style="color:red" v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "MyApp",
  components: { Category },
};
</script>

<style lang="less">
.container {
  display: flex;
  justify-content: space-around;
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
}

.foot {
  display: flex;
  justify-content: space-around;
}
</style>