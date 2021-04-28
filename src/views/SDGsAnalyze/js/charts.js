import * as echarts from "echarts";

export const initChart = (chartData,dom) =>{

    let myChart = echarts.init(document.getElementById(dom),'hxy_theme');
    myChart.setOption(chartData);
    window.addEventListener('resize',()=>{
        myChart.resize();
    })
    return myChart;

};