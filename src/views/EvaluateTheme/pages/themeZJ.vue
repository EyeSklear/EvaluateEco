<template>

  <div class="container">
    <button  class="backBtn" >
      <router-link to="/SdgPlatform/EvaluateTheme/" class="btn-title">
        <i class="el-icon-back" style="color: #2f89cf"></i>
      </router-link>

    </button>

    <header id="header-panel">
      <h3 class="header-title">{{province}}省生态文明建设年度评价专题展示系统
      </h3>
    </header>

    <div id="content-panel">

      <div class="card-panel row11">
        <div class="card" >
          <div class="chart-header"><h4 class="chart-title multiChart-title">2016年{{province}}省生态文明建设年度考核结果</h4></div>
          <div id="map-show" class="map-panel">

          </div>
        </div>
      </div>

      <div class="card-panel row12">
        <div class="multi-bar card ">
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">资源利用指数</h4></div>
            <div id="bar-item1" class="bar-item bar-item1"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">环境治理指数</h4></div>
            <div id="bar-item2" class="bar-item bar-item2"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">环境质量指数</h4></div>
            <div id="bar-item3" class="bar-item bar-item3"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">生态保护指数</h4></div>
            <div id="bar-item4" class="bar-item bar-item4"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">增长质量指数</h4></div>
            <div id="bar-item5" class="bar-item bar-item5"></div>

          </div>
          <div class="chart-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">绿色生活指数</h4></div>
            <div id="bar-item6" class="bar-item bar-item6"></div>

          </div>
        </div>
      </div>

      <div class="card-panel row21">
        <div class="card">
          <div class="chart-panel ">
            <div class="chart-header">
              <h4 class="chart-title">绿色发展指数</h4>
            </div>
            <div class="chart-area" id="greenDevelop"></div>
          </div>
        </div>
      </div>

      <div class="card-panel row22">
        <div class="multi-pie card">
          <div class="multiPie-panel">
            <div class="chart-header"><h4 class="chart-title multiChart-title">TOP5城市</h4></div>
            <div id="pie-item" class="pie-item pie-item1"></div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!--  </div>-->

</template>

<script>
import {getGreenData,getMultiBarData,getMultiPieData} from "@/views/EvaluateTheme/js/getData";
import { DataShowMap } from "@/utils/map";
import * as echarts from "echarts";
import axios from "axios";

// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: "themeZJ",
  data() {
    return{
      province :'浙江',
      require:'ZheJiang',
      chartData:{}
    }
  },
  mounted() {
    this.drawChart();
    this.mapInit();
    this.initData();
  },
  beforeDestroy() {
    this.mapObj && this.mapObj.destroy();
    this.myChart && this.myChart.destroy();
  },
  methods: {
    drawChart() {
      this.initChart(getGreenData(1),"greenDevelop");
      this.initChart(getMultiBarData(11),"bar-item1");
      this.initChart(getMultiBarData(12),"bar-item2");
      this.initChart(getMultiBarData(13),"bar-item3");
      this.initChart(getMultiBarData(14),"bar-item4");
      this.initChart(getMultiBarData(15),"bar-item5");
      this.initChart(getMultiBarData(16),"bar-item6");
      this.initChart(getMultiPieData(11),"pie-item");
    },
    mapInit() {
      this.mapObj = new DataShowMap("map-show");
    },
    initChart(chartData,dom) {
      this.myChart = echarts.init(document.getElementById(dom),'hxy_theme');
      this.myChart.setOption(chartData);
      window.addEventListener('resize',()=>{
        this.myChart.resize();
      })
    },
    initData(){
      if(this.province==null||this.province==''){
        this.$message.error('加载错误，请联系管理员');
      }
      else{
        axios.get('/json/theme_data/'+this.require+'.json').then(response=>(this.chartData=response.data));
        console.log(this.chartData.toString())
      }
    }
  }
}



</script>

<style scoped>
@import "../css/themeGlobel.css";
</style>