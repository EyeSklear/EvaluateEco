import Vue from 'vue'
import VueRouter from  'vue-router'


import DataShow from '../views/DataShow/index'
import EvaluateAnalyze from '../views/EvaluateAnalyze/index'
import EvaluateAnalyzeHome from "../views/EvaluateAnalyze/views/EvaluateAnalyzeHome";
import EvaluateAnalyzePage from '../views/EvaluateAnalyze/views/AnalyzePage'
import EvaluateAnalyzeSystem from '../views/EvaluateAnalyze/views/SystemPage'
import EvaluateTheme from '../views/EvaluateTheme/index'
import ThemeHome from '../views/EvaluateTheme/pages/themeHome'
import ThemeZJ from '../views/EvaluateTheme/pages/themeZJ'
import ThemeAH from '../views/EvaluateTheme/pages/themeAH'
import ThemeFJ from '../views/EvaluateTheme/pages/themeFJ'
import SDGsAnalyze from '../views/SDGsAnalyze/index'
import Home from '../views/Home/index'

const Path='/SdgPlatform'

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
        component:EvaluateAnalyze,
        redirect:Path+'/EvaluateAnalyze/Home',
        children:[{
            path:'Home',
            component:EvaluateAnalyzeHome
        },{
            path:'System',
            component: EvaluateAnalyzeSystem
        },{
            path:'Analyze',
            component:EvaluateAnalyzePage
        }]
    },
    {
        path:Path+'/EvaluateTheme',
        component:EvaluateTheme,
        redirect:Path+'/EvaluateTheme/Home',
        children: [{
            path:'Home',
            component:ThemeHome
        },{
            path:'ThemeZJ',
            component:ThemeZJ
        },{
            path:'ThemeAH',
            component:ThemeAH

        },{
            path:'ThemeFJ',
            component:ThemeFJ

        }]
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
