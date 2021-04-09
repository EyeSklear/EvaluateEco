import Vue from 'vue'
import VueRouter from  'vue-router'


import DataShow from '../views/DataShow/index'
import EvaluateAnalyze from '../views/EvaluateAnalyze/index'
import EvaluateTheme from '../views/EvaluateTheme/index'
import SDGsAnalyze from '../views/SDGsAnalyze/index'
import Home from '../views/Home/index'

const Path='/sdgplaform'

//1.注入插件
Vue.use(VueRouter)

//2.定义路由
const routes=[
    {
        path:'/',
        redirect:Path
    },
  //添加映射关系
    {
        path:Path,
        component:Home
    },
    {
        path:Path+'/DataShow',
        component:DataShow
     },
    {
        path:Path+'/EvaluateAnalyze',
        component:EvaluateAnalyze
    },
    {
        path:Path+'/EvaluateTheme',
        component:EvaluateTheme
    },
    {
        path:Path+'/SDGsAnalyze',
        component:SDGsAnalyze
    }
]

//3.创建router实例

const router=new VueRouter({
   routes
})

//4.导出router实例
export default router
