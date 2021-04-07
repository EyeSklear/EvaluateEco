import Vue from 'vue'
import VueRouter from  'vue-router'


import GetData from '../components/GetData'
import Map from '../components/Map'
import home from  '../components/home'

//1.注入插件
Vue.use(VueRouter)

//2.定义路由
const routes=[
    {
        path:'/',
        redirect:'/home'
    },
  //添加映射关系
    {
        path:'/GetData',
        component:GetData
     },
    {
        path:'/map',
        component:Map
    },
    {
        path:'/home',
        component:home
    }
]

//3.创建router实例

const router=new VueRouter({
   routes
})

//4.导出router实例
export default router
