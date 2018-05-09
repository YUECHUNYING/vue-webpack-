/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import h5text from './modules/h5text/h5text';
import userinfo from './modules/userinfo/userinfo';
Vue.use(Vuex);
// 创建 store 实例
export default new Vuex.Store({
    modules:{
        h5text,
        userinfo
    }
});