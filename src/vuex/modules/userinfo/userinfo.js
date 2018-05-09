/* jshint esversion: 6 */
import * as actions from './actions';
import * as getters from './getters';

// 应用初始状态
const state = {
  userInfo:{}
};

// 定义所需的 mutations
const mutations = {
  setUserInfo(state,userInfo){
      state.userInfo = userInfo;
  },
};
export default {
    state,
    getters,
    actions,
    mutations
  };