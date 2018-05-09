/* jshint esversion: 6 */
import * as actions from './actions';
import * as getters from './getters';

// 应用初始状态
const state = {
  txtInfo: {}
};

// 定义所需的 mutations
const mutations = {
  setTxtInfo(state, txtInfo) {
    state.txtInfo = txtInfo;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};