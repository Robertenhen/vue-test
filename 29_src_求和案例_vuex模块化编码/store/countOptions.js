// 求和相关的配置
export default {
  namespaced:true,
  actions: {
    addWhenOdd(context, num) {
      if (context.state.total % 2 !== 0) {
        context.commit('INCREASE', num);
      }
    },
    addAfterAMinute(context, num) {
      setTimeout(() => {
        context.commit('INCREASE', num);
      }, 500);
    }
  },
  mutations: {
    INCREASE(state, num) {
      console.log('mutaions中的INCREASE被调用了');
      state.total += num;
    },
    DECREASE(state, num) {
      console.log('mutaions中的DECREASE被调用了');
      state.total -= num;
    },
  },
  state: {
    total: 0,// 当前的和
    school: '尚硅谷',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.total * 10;
    }
  }
};