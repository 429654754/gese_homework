/**
 * Created by 海峰 on 2017/7/17.
 */
import Index from '@/components/Index'
import Work from '@/components/Work'
export default [//导出路由配置
  {
    path:'/Index',
    name:'index',
    component:Index
  },
  {
    path:'/Work',
    name:'work',
    component:Work
  },
  {path:'*',redirect:'/Work'}//设置默认指向
]
