/* jshint esversion: 6 */
import babelpolyfill from 'babel-polyfill';
import Vue from 'vue';
import animate from 'animate.css';

import App from './App';
import ElementUI from 'element-ui';
import './assets/theme/theme-blue/index.css';
import VueRouter from 'vue-router';
import store from './vuex/store';
import Vuex from 'vuex';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import routes from './routes';
import baseUrl from './webconf';
import {
  getUserInfo
} from './api/api';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
// import VuexUndoRedo from 'vuex-undo-redo';
import VueDraggableResizable from 'vue-draggable-resizable';
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
// Vue.use(VuexUndoRedo);
Vue.component('vue-draggable-resizable', VueDraggableResizable);
NProgress.configure({
  showSpinner: false
});

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path == '/login') {
    localStorage.removeItem('accessToken');
  }
  let accessToken = localStorage.getItem('accessToken');
  if (!accessToken && to.path != '/login') {
    next({
      path: '/login'
    });
  } else {
    next();
  }
});

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  baseUrl: baseUrl,
  //components: { App }
  render: h => h(App),
  created: function ()  {
    getUserInfo().then(data => {
      this.$store.dispatch('setUserInfo',data.data);
    }).catch(error => {
     
    });
  }
}).$mount('#app');