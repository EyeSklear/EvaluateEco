import {initChart} from "@/views/EvaluateTheme/js/CreateChart";
import {getGreenData,getMultiBarData,getMultiPieData} from "@/views/EvaluateTheme/js/getData";
// import * as echarts from "echarts";

// 引入基本模板
// let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')



export default {
    name: 'hello',
    data() {
    },
    mounted() {
        this.drawChart();
    },
    methods: {
        drawChart() {
            console.log(getGreenData(1))
            initChart(getGreenData(1),"greenDevelop");
            initChart(getMultiBarData(11),"bar-item1");
            initChart(getMultiBarData(12),"bar-item2");
            initChart(getMultiBarData(13),"bar-item3");
            initChart(getMultiBarData(14),"bar-item4");
            initChart(getMultiBarData(15),"bar-item5");
            initChart(getMultiBarData(16),"bar-item6");
            initChart(getMultiPieData(11),"pie-item")


        }
    }
}

