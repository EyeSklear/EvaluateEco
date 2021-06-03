import Vue from 'vue'
import VueRouter from  'vue-router'


import DataShow from '../views/DataShow/index'
import EvaluateAnalyze from '../views/EvaluateAnalyze/index'
import EvaluateAnalyzeHome from "../views/EvaluateAnalyze/views/EvaluateAnalyzeHome";
import EvaluateAnalyzePage from '../views/EvaluateAnalyze/views/AnalyzePage'
import EvaluateAnalyzeSystem from '../views/EvaluateAnalyze/views/SystemPage'
// import EvaluateAnalyzeSystemIntroduce from '../views/EvaluateAnalyze/views/SystemPageComponent/SystemIntroduce'
import EvaluateAnalyzeSystemMap from '../views/EvaluateAnalyze/views/SystemPageComponent/SystemMap'
import EvaluateAnalyzeSystemTable from '../views/EvaluateAnalyze/views/SystemPageComponent/SystemTable'
import EvaluateAnalyzeSystemVisual from '../views/EvaluateAnalyze/views/SystemPageComponent/SystemViusal'
import EvaluateTheme from '../views/EvaluateTheme/index'
import ThemeHome from '../views/EvaluateTheme/pages/themeHome'
import ThemeZJ from '../views/EvaluateTheme/pages/themeZJ'
import ThemeAH from '../views/EvaluateTheme/pages/themeAH'
import ThemeFJ from '../views/EvaluateTheme/pages/themeFJ'
import SDGsAnalyze from '../views/SDGsAnalyze/index'
import SDGsHome from '../views/SDGsAnalyze/pages/SDGsHome'
import SDGsDisplay from '../views/SDGsAnalyze/pages/SDGsDisplay'
import SDGsEvaluate from '../views/SDGsAnalyze/pages/SDGsEvaluate'
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
            component:EvaluateAnalyzeSystem,
            redirect:Path+'/EvaluateAnalyze/System/Map',
            children:[
            //     {
            //     path:'Introduce',
            //     component:EvaluateAnalyzeSystemIntroduce,
            // },
                {
                path:'Map',
                component:EvaluateAnalyzeSystemMap,
            },{
                path:'Table',
                component:EvaluateAnalyzeSystemTable,
            },{
                path:'Visual',
                component:EvaluateAnalyzeSystemVisual,
            }]
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
        component:SDGsAnalyze,
        redirect:Path+'/SDGsAnalyze/Home',
        children: [{
            path:'Home',
            component:SDGsHome
        },{
            path:'Display',
            component:SDGsDisplay,
        },{
            path:'Evaluate',
            component:SDGsEvaluate,
        }
        ]
    }
]

//3.创建router实例

const router=new VueRouter({
   routes
})

//4.导出router实例
export default router
