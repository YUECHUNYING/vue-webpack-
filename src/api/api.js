/* jshint esversion: 6 */

import axios from 'axios';
// import qs from 'qs';
import routes from '../routes';
import baseUrl from '../webconf';
let base = '';

axios.defaults.baseURL = baseUrl.ApiServer;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

//请求拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.accessToken) {
            config.headers.Authorization = `Bearer ${localStorage.accessToken}`;
        }
        // if (config.method=="post"){
        //     config.data = qs.parse(config.data);
        // }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

//响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    //token失效重新发送请求
                    localStorage.removeItem("accessToken");
                    break;
                case 412:
                    //token短期失效后自动将服务器返回新的token更新
                    localStorage.accessToken = error.response.headers.Authorization;
                    break;
            }
        }
        return Promise.reject(error);
        // return Promise.reject(error.response.data);
    });

export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
};

export const tokenApi = (params, headers) => {
    return axios({
        method: 'post',
        url: `${base}/Token`,
        data: params,
        headers: headers
    });
};
export const getValCode = (params) => {
    return axios.get(`${base}/api/vcode/get`, {
        params: params
    });
};


export const getUserInfo = () => {
    return axios.get(`${base}/api/Account/UserInfo`);
};

export const getUserListPage = (params,page) => {
    return axios({
        method: 'post',
        url: `${baseUrl.weixinApiUrl}/api/User/GetFans/wx661027a15bacbed8/${page}/20`,
        data: params
    });
};