//该文件用于创建vuex中最为核心的store对象
// 引入Vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex);

// 准备actions--用于响应组件中的动作
const actions = {
  addWhenOdd(context, num) {
    if (context.state.total %2 !== 0) {
      context.commit('INCREASE', num);
    }
  },
  addAfterAMinute(context, num) { 
    setTimeout(() => {
      context.commit('INCREASE', num);
    }, 500);
  }

}
// 准备mutations--用于操作数据
const mutations = {
  INCREASE(state, num) {
    // console.log('mutations',a,b);
    console.log('mutaions中的INCREASE被调用了');
    // console.log('INCREASE', num);
    state.total += num;
  },
  DECREASE(state, num) {
    console.log('mutaions中的DECREASE被调用了');
    state.total -= num;
  }
}
// 准备state--用于存储数据
const state = {
  total: 0,// 当前的和
  school: '尚硅谷',
  subject:'前端'
}
// 准备对象getters--用于将state中的数据进行加工
const getters = {
  bigSum() { 
    return state.total * 10;
  }
}


// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});

