<template>
  <el-container class="sdgs-analysis-container">
    <el-header>
      <el-menu
        class="sdgs-analysis-header"
        mode="horizontal"
        background-color="#001529"
      >
        <el-row>
          <el-col :span="2" :offset="1">
            <a
              class="header-logo"
              href="/SdgPlatform"
              rel="noopener noreferrer"
            >
              <div></div>
            </a>
          </el-col>

          <el-col :span="12" :offset="1">
            <h1 class="sdgs-analysis-header-banner">面向联合国SDGs数据展示系统</h1>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>

    <el-main>
      <el-row class="sdgs-analysis-content">
        <div class="leftSideBar">
          <img class="leftSideBar_topImg" src="../img/sdgsGoals/global-goals.png" @click="showDialog"/>
          <div class="leftSideBar_goalList">
            <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="true" @select="goalSelect">
            
              <el-menu-item index="1">
                <img src="../img/sdgsGoals/E_SDG_Icons-01.jpg"/>
                <span slot="title">NO POVERTY</span>
              </el-menu-item>
              <el-menu-item index="2">
                <img src="../img/sdgsGoals/E_SDG_Icons-02.jpg"/>
                <span slot="title">ZERO HUNGER</span>
              </el-menu-item>
              <el-menu-item index="3">
                <img src="../img/sdgsGoals/E_SDG_Icons-03.jpg"/>
                <span slot="title">GOOD HEALTH AND WELL-BEING</span>
              </el-menu-item>
              <el-menu-item index="4">
                <img src="../img/sdgsGoals/E_SDG_Icons-04.jpg"/>
                <span slot="title">QURLITY EDUCATION</span>
              </el-menu-item>
              <el-menu-item index="5">
                <img src="../img/sdgsGoals/E_SDG_Icons-05.jpg"/>
                <span slot="title">GENDER EQUALITY</span>
              </el-menu-item>
              <el-menu-item index="6">
                <img src="../img/sdgsGoals/E_SDG_Icons-06.jpg"/>
                <span slot="title">CLEAN WATER AND SANITATION</span>
              </el-menu-item>
              <el-menu-item index="7">
                <img src="../img/sdgsGoals/E_SDG_Icons-07.jpg"/>
                <span slot="title">AFFORDABLE AND CLEAN ENERGY</span>
              </el-menu-item>
              <el-menu-item index="8">
                <img src="../img/sdgsGoals/E_SDG_Icons-08.jpg"/>
                <span slot="title">DECENT WORK AND ECONOMIC GROWTH</span>
              </el-menu-item>
              <el-menu-item index="9">
                <img src="../img/sdgsGoals/E_SDG_Icons-09.jpg"/>
                <span slot="title">INDUSTRY, INNOVATION AND INFRASTRUCTURE</span>
              </el-menu-item>
              <el-menu-item index="10">
                <img src="../img/sdgsGoals/E_SDG_Icons-10.jpg"/>
                <span slot="title">REDUCED INEQUALITIES</span>
              </el-menu-item>
              <el-menu-item index="11">
                <img src="../img/sdgsGoals/E_SDG_Icons-11.jpg"/>
                <span slot="title">SUSTAINABLE CITIES AND COMMUNITIES</span>
              </el-menu-item>
              <el-menu-item index="12">
                <img src="../img/sdgsGoals/E_SDG_Icons-12.jpg"/>
                <span slot="title">RESPONSIBLE CONSUMPTION AND PRODUCTION</span>
              </el-menu-item>
              <el-menu-item index="13">
                <img src="../img/sdgsGoals/E_SDG_Icons-13.jpg"/>
                <span slot="title">CLIMATE ACTION</span>
              </el-menu-item>
              <el-menu-item index="14">
                <img src="../img/sdgsGoals/E_SDG_Icons-14.jpg"/>
                <span slot="title">LIFE BELOW WATER</span>
              </el-menu-item>
              <el-menu-item index="15">
                <img src="../img/sdgsGoals/E_SDG_Icons-15.jpg"/>
                <span slot="title">LIFE ON LAND</span>
              </el-menu-item>
              <el-menu-item index="16">
                <img src="../img/sdgsGoals/E_SDG_Icons-16.jpg"/>
                <span slot="title">PEACE, JUSTICE AND STRONG INSTITUTIONS</span>
              </el-menu-item>
              <el-menu-item index="17">
                <img src="../img/sdgsGoals/E_SDG_Icons-17.jpg"/>
                <span slot="title">PARTNERSHIPS FOR THE GOALS</span>
              </el-menu-item>
              
            </el-menu>
          </div>
        </div>

        <div v-if="layerControllerShow" class="layerController">
          <div class="layerController_header">
            <div class="layerController_title" >
              {{currentGoal}}
            </div>
            <div class="layerController_close">
              
              <li class="el-icon-close" @click="closeLayerController"></li>
              
            </div>
            
          </div>
          <div class="layerController_content">
            <div class="layerGroup" v-for="(layerGroup,i) in layerContent" :key="i">
              <div class="groupHeader">{{layerGroup.name}}</div>
              <div class="groupContent">
                <div class="layerItem" v-for="(layer,j) in layerGroup.layerList" :key="j">
                  <el-switch class="layerSwitch"
                    v-model="layer.show"
                    active-color="#049fdb">
                  </el-switch>
                  <div class="layerInfo">
                    <div class="infoHeader">
                      {{layer.name}}
                    </div>
                    <div class="infoContent">
                      {{layer.overview}}
                    </div>
                  </div>
                </div>
              </div>
              <hr v-if="i!=layerContent.length-1"/>
            </div>
          </div>
        </div>

        <div class="cesium-scenemode-wrapper">
          <el-select
            v-model="selectedCesiumSceneModes"
            size="mini"
            @change="handleSceneModeBtnClick"
            :disabled="isCesiumSceneModesDisable"
            class="cesium-scenemode"
            popper-class="cesium-scenemode-popper"
          >
            <el-option
              v-for="item in cesiumSceneModes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span>
                <i v-if="item.value === '2D'" class="el-icon-edit"></i>
                <i
                  v-else-if="item.value === '2.5D'"
                  class="el-icon-share"
                ></i>
                <i v-else class="el-icon-delete"></i>
                {{ item.label }}
              </span>
            </el-option>
          </el-select>
        </div>
        <div id="sdgs-analysis-cesium-map"></div>

      </el-row>
    </el-main>

    <el-dialog title="Chart"
     :visible.sync="dialogTableVisible"
     :modal="false"
     :close-on-click-modal="false"
     @opened="dialogOpenCallback"
     v-dialogDrag>
      <div id="dialogChart" class="dialogChart"></div>
    </el-dialog>

    <el-footer class="sdgs-analysis-footer">
      <span>
        <a
          href="http://geomodeling.njnu.edu.cn//"
          target="__blank"
          rel="noopener noreferrer"
          >Open Geographic Modeling and Simulation</a
        >
        | Copyright © 2011-{{ currentYear }} OpenGMS. All Rights Reserved.
      </span>
    </el-footer>
  </el-container>
</template>

<script>
import { DataShowCesium } from "../map/cesium";
import '../js/directives.js';
import { initChart } from '../js/charts.js';


export default {
  name: "index",
  data() {
    return {

      dialogTableVisible: false,
      goals:[
        "NO POVERTY",
        "ZERO HUNGER",
        "GOOD HEALTH AND WELL-BEING",
        "QURLITY EDUCATION",
        "GENDER EQUALITY",
        "CLEAN WATER AND SANITATION",
        "AFFORDABLE AND CLEAN ENERGY",
        "DECENT WORK AND ECONOMIC GROWTH",
        "INDUSTRY, INNOVATION AND INFRASTRUCTURE",
        "REDUCED INEQUALITIES",
        "SUSTAINABLE CITIES AND COMMUNITIES",
        "RESPONSIBLE CONSUMPTION AND PRODUCTION",
        "CLIMATE ACTION",
        "LIFE BELOW WATER",
        "LIFE ON LAND",
        "PEACE, JUSTICE AND STRONG INSTITUTIONS",
        "PARTNERSHIPS FOR THE GOALS",
      ],
      layerContent:[
        {
          name:"Group 1",
          layerList:[
            {
              name:"layer1",
              show:false,
              overview:"layer overview layer overview layer overview layer overview layer overview",
            },
            {
              name:"layer1",
              show:false,
              overview:"layer overview",
            },
            {
              name:"layer1",
              show:false,
              overview:"layer overview",
            },
            {
              name:"layer1",
              show:false,
              overview:"layer overview",
            }
          ]
        },
        {
          name:"森林砍伐警报",
          layerList:[
            {
              name:"滥伐警报（GLAD）",
              show:false,
              overview:"每周，30m，热带，UMD/GLAD",
            },
            {
              name:"Deforestation alerts (GLAD-S2)",
              show:false,
              overview:"every 5 days, 10m, Amazon Basin, UMD/GLAD",
            },
            {
              name:"森林砍伐警报 (RADD)",
              show:false,
              overview:"每 6 至 12 天，10m，选择国家或地区，WUR",
            },
            {
              name:"layer1",
              show:false,
              overview:"layer overview",
            },
            {
              name:"layer1",
              show:false,
              overview:"layer overview",
            },
            {
              name:"layer1",
              show:false,
              overview:"layer overview",
            }
          ]
        },
        
      ],
      currentGoal:"",
      layerControllerShow: false,
      mapServiceTreeData: [],
      currentYear: new Date().getFullYear(),
      cesiumSceneModes: [
        {
          value: "3D",
          label: "3D",
        },
        {
          value: "2D",
          label: "2D",
        },
        {
          value: "2.5D",
          label: "2.5D",
        },
      ],
      selectedCesiumSceneModes: "3D",
      isCesiumSceneModesDisable: false,
    };
  },
  methods: {
    mapInit() {
      this.cesiumMapObj = new DataShowCesium("sdgs-analysis-cesium-map");
    },
    mapDestroy() {
      this.cesiumMapObj && this.cesiumMapObj.destroy();
    },
    goalSelect(index) {
      this.currentGoal = this.goals[index-1];
      this.layerControllerShow = true;
    },
    closeLayerController(){
      this.layerControllerShow = false;
    },
    showDialog(){
      this.dialogTableVisible = true;
    },
    dialogOpenCallback(){
      let option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {focus: 'data'},
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
      };

      let myChart = initChart(option,"dialogChart");

      myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
      });
    },
    handleSceneModeBtnClick(e) {
      this.isCesiumSceneModesDisable = true;
      this.cesiumMapObj.changeSceneMode(e).then(() => {
        this.isCesiumSceneModesDisable = false;
      });
    },
  },
  mounted() {
    document.title = "面向联合国SDGs数据展示系统";
    this.mapInit();
  },
  beforeDestroy() {
    this.mapDestroy();
  },
};
</script>

<style>
@import "../css/sdgsAnalysisGlobel.css";
</style>