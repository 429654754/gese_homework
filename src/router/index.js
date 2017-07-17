/**
 * Created by 海峰 on 2017/7/16.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerConfig'

Vue.use(VueRouter);//将VueRouter添加到Vue上去。

export default new VueRouter({
    mode: 'history',//切换路径模式，变成history模式，也就是去掉#
    scrollBehavior: () => ({ y:0 }),//滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes
})
