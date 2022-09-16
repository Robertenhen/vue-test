//该文件用于创建vuex中最为核心的store对象
// 引入Vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import countOptions from './countOptions'
import personOptions from './personOptions'

Vue.use(Vuex);

// 创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions
  }
});

