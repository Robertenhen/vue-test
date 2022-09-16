// 人员管理相关的配置
import axios from 'axios';
import { nanoid } from 'nanoid';

export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) { 
      console.log('调用了addPersonWang方法');
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value);
      } else { 
        alert('该用户不姓王，无法添加');
      }
    },
    addPersonServer(context) { 
      // 练习：带网络请求的action
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          context.commit('ADD_PERSON', { id:nanoid(), name: response.data})
         },
        err => {  
          alert(err.message);
        }
      );
    }
  },
  mutations: {
    ADD_PERSON(state, p) {
      state.personList.unshift(p);
    }
  },
  state: {
    personList: [
      { id: '001', name: '张三' },
      { id: '002', name: '李四' },
      { id: '003', name: '王五' },
    ]
  },
  getters: {
    firstPersonName(state) { 
      return state.personList[0]?.name;
    }
  }
};