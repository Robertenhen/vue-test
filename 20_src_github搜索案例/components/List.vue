<template>
  <div class="row">
    <!-- 展示用户列表 -->
     <div v-show="userList.length" class="card" v-for="item in userList" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="errMsg">{{errMsg}}</h1>
  </div>
</template>

<script>
import { searchTopicName } from '../configs/consts'
import axios from 'axios';

export default {
  name: "MyList",
  data() { 
    return {
      isFirst: true,
      isLoading: false,
      errMsg:'',
      userList: [],
      url: 'https://api.github.com/search/users?q='
    }
  },
  mounted() {
    this.$bus.$on(searchTopicName, kw => { 
      // 请求中
      this.isFirst = false;
      this.isLoading = true;

      axios.get(this.url + kw).then(
        response => { 
          // 请求后
          console.log(response.data);
          this.userList = response.data.items;
          this.isLoading = false;
        },
        err => { 
          // 请求错误
          console.log(err.message);
          this.isLoading = false;
          this.errMsg = err.message;
          this.userList = [];
        }
      );

    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>