import * as echarts from "echarts";
import {getGreenData, getMultiBarData, getMultiPieData, getSingleBarData} from "@/views/EvaluateTheme/js/getData";


export const initChart = (chartData,dom) =>{

    let myChart = echarts.init(document.getElementById(dom),'hxy_theme');
    myChart.setOption(chartData);
    window.addEventListener('resize',()=>{
        myChart.resize();
    })
    return myChart;

};

export const drawChart = (province) => {
    console.log(province)
    initChart(getGreenData(province),"greenDevelop");
    initChart(getMultiBarData(province,1),"bar-item1");
    initChart(getMultiBarData(province,2),"bar-item2");
    initChart(getMultiBarData(province,3),"bar-item3");
    initChart(getMultiBarData(province,4),"bar-item4");
    initChart(getMultiBarData(province,5),"bar-item5");
    initChart(getMultiBarData(province,6),"bar-item6");
    initChart(getMultiPieData(province,1),"pie-item1");
    initChart(getMultiPieData(province,2),"pie-item2");
    initChart(getMultiPieData(province,3),"pie-item3");
    initChart(getMultiPieData(province,4),"pie-item4");
    initChart(getMultiPieData(province,5),"pie-item5");
    initChart(getMultiPieData(province,"legend"),"pie-item-legend");
    if(province == "AnHui")
        initChart(getSingleBarData(province),"single-bar")
}


