/* jshint esversion: 6 */
import Login from './views/Login.vue';
import NotFound from './views/404.vue';
import Home from './views/Home.vue';
import Main from './views/Main.vue';
import Table from './views/nav1/Table.vue';
import Form from './views/nav1/Form.vue';
import user from './views/nav1/user.vue';
import echarts from './views/charts/echarts.vue';

let routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/404',
        component: NotFound,
    },
    {
        path: '/',
        component: Home,
        name:'导航',
        children: [
            { path: '/main',  name:'首页', component: Main},
            { path: '/table',name:'Table', component: Table},
            { path: '/form',name:'Form', component: Form},
            { path: '/user',name:'User',  component: user},
            { path: '/echarts',name:'Echarts', component: echarts}
        ]
    },
    {
        path: '*',
        redirect: { path: '/404' }
    }
];

export default routes;