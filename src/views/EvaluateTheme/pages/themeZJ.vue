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

            <div id="pie-item-title" class="pie-item-title text-center"><h4 class="chart-title" style="text-align: center">Top5 城市</h4></div>
            <div id="pie-item1"  class="pie-item1 pie-item "></div>
            <div id="pie-item2"  class="pie-item2 pie-item "></div>
            <div id="pie-item3"  class="pie-item3 pie-item "></div>
            <div id="pie-item4"  class="pie-item4 pie-item "></div>
            <div id="pie-item5"  class="pie-item5 pie-item "></div>
            <div id="pie-item-legend" class="pie-item-legend pie-item"></div>

<!--          <div class="multiPie-panel">-->
<!--            <div class="chart-header"><h4 class="chart-title multiChart-title">TOP5城市</h4></div>-->
<!--            <div id="pie-item" class="pie-item pie-item1"></div>-->
<!--          </div>-->
        </div>
      </div>

    </div>
  </div>

  <!--  </div>-->

</template>

<script>
import { DataShowMap } from "@/utils/map";
import {drawChart} from "@/views/EvaluateTheme/js/CreateChart";
// import axios from "axios";


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
    document.title = this.province+'省生态文明建设年度评价专题展示系统'
    drawChart(this.require);
    this.mapInit();
  },
  beforeDestroy() {
    this.mapObj && this.mapObj.destroy();

  },
  methods: {

    mapInit() {
      this.mapObj = new DataShowMap("map-show");
    },
  }
}



</script>

<style scoped>
@import "../css/themeGlobel.css";
</style>