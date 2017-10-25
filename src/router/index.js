/**
 * Created by 海峰 on 2017/7/16.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'//首页
import Work from '../components/Work'//需要跳转的页面 给组件重新命名
import About from '../components/About'
import Contact from '../components/Contact'
import Recruit from '../components/Recruit'
import Station from '../components/Station'
import workMore from '../components/workMore'

Vue.use(Router);//将Router添加到Vue上去。

export default new Router({
  routes: [
    { path: '/', redirect: '/Index' },
    {//首页
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {//需要跳转的页面
      path:'/Work',
      name:'Work',
      component: Work//组件名字
    },
    {//需要跳转的页面
      path:'/About',
      name:'About',
      component: About//组件名字
    },
    {//需要跳转的页面
      path:'/Recruit',
      name:'Recruit',
      component: Recruit//组件名字
    },
    {//需要跳转的页面
      path:'/Contact',
      name:'Contact',
      component: Contact//组件名字
    },
    {//需要跳转的页面
      path:'/Station',
      name:'Station',
      component: Station//组件名字
    },
    {//需要跳转的页面
      path:'/workMore',
      name:'workMore',
      component: workMore//组件名字
    }
  ]
})
