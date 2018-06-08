import Vue from "../node_modules/vue/dist/vue.js"
//import Vue from 'vue' //单独这样  只引入runtime-only的方式   需要在webpack.config.js中配置resolve:{
//    alias:{"vue$":"vue/dist/vue.js"  //修改Vue被导入时候包的路径}}

//注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);


//注册路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//按需导入Mint-UI组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import '../libs/mui/css/mui.css'
import '../libs/mui/css/icons-extra.css'
import '../libs/mui/fonts/mui-icons-extra.ttf'


import router from './router.js'

import app from "./app.vue"



new Vue({
	el: '#app',
	// render:function(create){create(App)} //es5的写法
	render: c => c(app),
	router
});