<template>
  <el-container class="theme-data-show-container">
    <el-header>
      <el-menu
          :default-active="activeIndex"
          class="theme-data-show-header"
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

          <el-col :span="18" :offset="1">
            <h1 class="theme-data-show-header-banner">政府生态文明建设年度评价专题展示系统</h1>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>

    <el-main>
      <el-row class="theme-data-show-content">
        <el-col :span="7" style="margin-left: 1%" >
          <div class="theme-data-show-sider">
            <el-tabs class="data-show-sider-tabs" style="padding: 1% 2% 1%;" id="themeTabs">
              <el-tab-pane label="指标数据" class="theme-data-show-sider-tab ">
                <el-carousel  direction="horizontal" :autoplay="false" :interval="5000"  :height="WinHeight+'px'" style="width: 100%;padding-bottom: 1%;overflow-y: hidden">
                  <el-carousel-item >

                    <el-scrollbar style="height: 98%"  wrap-style="overflow-x:hidden">
                      <div class="tableTitle" >
                        <span class="tableTitle_ad"></span>
                        <span class="tableTitle_bg">绿色发展指标体系</span>
                      </div>
                    <div id="table1" style="height: 100%" >
                      <el-table :data="listData1"
                                :span-method="arraySpanMethod"
                                class="theme-data-show-table"
                                style="cursor: pointer"
                                :header-cell-style="{color:'#333',fontWeight:1300}"
                                border
                      >
                        <el-table-column
                            width="150"
                            prop="YiJi"
                            label="一级指标">
                        </el-table-column>
                        <el-table-column
                            width="50"
                            prop="XuHao"
                            label="序号">
                        </el-table-column>
                        <el-table-column
                            prop="ErJi"
                            label="二级指标">
                        </el-table-column>

                      </el-table>

                    </div>
                    </el-scrollbar>
                  </el-carousel-item>
                  <el-carousel-item style="height: 98%">
                    <el-scrollbar style="height: 100%"  wrap-style="overflow-x:hidden">
                      <div class="tableTitle" >
                        <span class="tableTitle_ad"></span>
                        <span class="tableTitle_bg">美丽中国建设评估指标体系</span>
                      </div>
                    <div id="table2"  >
                      <el-table class="theme-data-show-table"
                                :data="listData2"
                                :span-method="arraySpanMethod"
                                border
                                style="cursor: pointer"
                                :header-cell-style="{color:'#333',fontWeight:1300}"
                      >
                        <el-table-column
                            width="80"
                            prop="PingGu"
                            label="评估指标">
                        </el-table-column>
                        <el-table-column
                            width="50"
                            prop="XuHao"
                            label="序号">
                        </el-table-column>
                        <el-table-column
                            prop="JuTi"
                            label="具体指标">
                        </el-table-column>

                      </el-table>
                      <!--                  <div class="warp-title " style="background-image: linear-gradient(180deg, #87ceeb, #d8f0fa)">-->
                      <!--                    <ul class="item text-center no-padding table-font" >-->
                      <!--                      <li class="textcenter">-->
                      <!--                        <span class="PingGu" >一级指标</span>-->
                      <!--                        <span class="XuHao">序号</span>-->
                      <!--                        <span class="JuTi ">二级指标</span>-->
                      <!--                      </li>-->
                      <!--                    </ul>-->
                      <!--                  </div>-->
                      <!--                  &lt;!&ndash; 表格滚动区 &ndash;&gt;-->
                      <!--                  <div class="no-padding">-->
                      <!--&lt;!&ndash;                    <vue-seamless-scroll :style="{height: 1000 + 'px' }" :data="listData2"&ndash;&gt;-->
                      <!--&lt;!&ndash;                                         :class-option="defaultOption" class="warp-content">&ndash;&gt;-->
                      <!--                      <ul class="item text-center no-padding table-font textcenter" >-->
                      <!--                        <li v-for="item in listData2" :key="item" class="scroll-li" style="height: 50px;line-height: 20px;padding: 10px 0 0"-->
                      <!--                        >-->
                      <!--                          <span class="PingGu"  v-text="item.PingGu"></span>-->
                      <!--                          <span class="XuHao" v-text="item.XuHao"></span>-->
                      <!--                          <span class="JuTi" v-text="item.JuTi"></span>-->
                      <!--                        </li>-->
                      <!--                      </ul>-->
                      <!--&lt;!&ndash;                    </vue-seamless-scroll>&ndash;&gt;-->
                      <!--                  </div>-->

                    </div>
                    </el-scrollbar>

                  </el-carousel-item>
                </el-carousel>

              </el-tab-pane>
              <el-tab-pane label="数据集" class="theme-data-show-sider-tab data-show-sider-dataset" >
                <el-input
                    placeholder="搜索数据图层"
                    v-model="layerSearchString"
                    @input="handleLayerSearch"
                    clearable
                    class="theme-data-show-sider-search-wrapper"
                >
                </el-input>
                <el-tree
                    :data="mapServiceTreeData"
                    :check-strictly="true"
                    show-checkbox
                    node-key="mid"
                    children="children"
                    label="label"
                    @check="handleTreeNodeCheck"
                    :filter-node-method="layerTreeFilter"
                    ref="layerTree"
                ></el-tree>
              </el-tab-pane>
              <el-tab-pane label="指标计算器" class="data-show-sider-tab ">
              </el-tab-pane>

            </el-tabs>

            <div class="theme-data-show-sider-footer">
              <el-row
                  style="height: 100%; align-items: center;"
                  type="flex"
                  justify="space-around"
              >
                <el-col :span="6"
                >
                  <router-link to="/SdgPlatform/EvaluateTheme/ThemeZJ" ><el-button id="ZJ-btn" type="primary" plain>
                  浙江</el-button>
                </router-link></el-col
                >
                <el-col :span="6"
                ><router-link to="/SdgPlatform/EvaluateTheme/ThemeAH" class="btn-title"><el-button  id="AH-btn" type="primary" plain>
                  安徽</el-button>
                </router-link></el-col
                >
                <el-col :span="6"
                ><router-link to="/SdgPlatform/EvaluateTheme/ThemeFJ" class="btn-title"><el-button  id="FJ-btn" type="primary" plain>
                  福建</el-button>
                </router-link></el-col
                >
              </el-row>
            </div>
          </div>
        </el-col>

        <el-col class="theme-data-show-map-wrapper" :span="16" style="margin-left: 2%">
          <div class="theme-cesium-scenemode-wrapper">
            <el-select
                v-model="selectedCesiumSceneModes"
                size="mini"
                @change="handleSceneModeBtnClick"
                :disabled="isCesiumSceneModesDisable"
                class="theme-cesium-scenemode"
                popper-class="theme-cesium-scenemode-popper"
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
          <div id="theme-data-show-cesium-map"></div>
        </el-col>
      </el-row>
    </el-main>

    <el-footer class="theme-data-show-footer" style="height: 22px;font-size: smaller">
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

import {getHomeTable} from "@/views/EvaluateTheme/js/getData";
import {ThemeMapShow} from "../js/cesium";
import {getMapServices} from "../js/getData";

export default {
  name: "index",
  data() {
    return {
      selectedCesiumSceneModes: "3D",
      isCesiumSceneModesDisable: false,
      mapServiceTreeData: {},
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
      currentYear: new Date().getFullYear(),
      listData1: [],
      listData2: [],
      needMergeArr1: ['YiJi'],
      needMergeArr2: ['PingGu'],
      rowMergeArrs1: {},
      rowMergeArrs2: {},
      WinHeight:'',
      //tree
      layerSearchString: "",
      datatest:{}
    }
  },

  methods: {

    mapInit() {
      this.cesiumMapObj = new ThemeMapShow("theme-data-show-cesium-map");
    },
    mapDestroy() {
      this.cesiumMapObj && this.cesiumMapObj.destroy();
    },

    initListData(){
      let listData = getHomeTable();
      this.listData1 = listData.绿色;
      this.listData2 = listData.美丽;
    },
    arraySpanMethod({column, rowIndex}) {
      // 把需要循环的列名加入
      if (column.property === 'YiJi')
        return this.mergeAction1('YiJi', rowIndex, column);
      if (column.property === 'PingGu')
        return this.mergeAction2('PingGu', rowIndex, column);
    },

    mergeAction1(val, rowIndex) {
      let _row = this.rowMergeArrs1[val].rowArr[rowIndex];
      let _col = _row > 0 ? 1 : 0;
      return [_row, _col];
    },
    mergeAction2(val, rowIndex) {
      let _row = this.rowMergeArrs2[val].rowArr[rowIndex];
      let _col = _row > 0 ? 1 : 0;
      return [_row, _col];
    },
    rowMergeHandle(arr, data) {
      if (!Array.isArray(arr) && !arr.length) return false;
      if (!Array.isArray(data) && !data.length) return false;
      let needMerge = {};
      arr.forEach(i => {
        needMerge[i] = {
          rowArr: [],
          rowMergeNum: 0
        };
        data.forEach((item, index) => {
          if (index === 0) {
            needMerge[i].rowArr.push(1);
            needMerge[i].rowMergeNum = 0;
          } else {
            if (item[i] === data[index - 1][i]) {
              needMerge[i].rowArr[needMerge[i].rowMergeNum] += 1;
              needMerge[i].rowArr.push(0);
            } else {
              needMerge[i].rowArr.push(1);
              needMerge[i].rowMergeNum = index;
            }
          }
        });
      });
      return needMerge;
    },

    setWinHeight(){
      //走马灯
      this.WinHeight = (document.getElementById("themeTabs").offsetHeight)*0.92;
    },
    //tree
    handleTreeNodeCheck(rawLayerAttr, treeCheckState) {
      const isShow = treeCheckState.checkedKeys.includes(rawLayerAttr.mid);
      this.cesiumMapObj.toggleLayerShow(
          rawLayerAttr.mid,
          rawLayerAttr.service,
          isShow
      );
    },
    handleSceneModeBtnClick(e) {
      this.isCesiumSceneModesDisable = true;
      this.cesiumMapObj.changeSceneMode(e).then(() => {
        this.isCesiumSceneModesDisable = false;
        // this.cesiumMapObj.flyHome(2);
      });
    },
    handleSearchInputKeyPress(e){
      console.log(e);

    },
    handleLayerSearch(){
      this.$refs.layerTree.filter(this.layerSearchString);
    },
    layerTreeFilter(value, data, node) {
      if (!value) return true;
      if(data.label.indexOf(value)!== -1) return true;
      else{
        while(node.level>1){
          if(node.parent.data.label.indexOf(value)!== -1) return true;
          node = node.parent;
        }
      }
      return false;
    },
  },
  mounted() {
    document.title = "政府生态文明建设年度评价专题展示系统";
    this.mapInit();
    this.initListData();
    //走马灯
    this.setWinHeight();
    window.addEventListener('resize',()=>{
      this.setWinHeight()
    },false);
    //tree
    this.mapServiceTreeData = getMapServices();
    //表格
    this.rowMergeArrs1 = this.rowMergeHandle(this.needMergeArr1, this.listData1);
    this.rowMergeArrs2 = this.rowMergeHandle(this.needMergeArr2, this.listData2);
  },
  beforeDestroy() {
    this.mapDestroy();
  },
};
</script>

<style scoped>

@media (max-width: 1900px) {
  .table-font {
    font-size: .4rem;
  }
  li {
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 0.4rem;
  }
}

@media (min-width: 1900px){
  li {
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
  }

}
@media screen and (max-width: 1640px) {
  .table-font{
    font-size: 8px;
  }
  li {
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 0.4rem;
  }

}


ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
/* --------------------------
   表格标题
 ---------------------------*/
.tableTitle{
  margin:0 0 10px 12px;
  height: 30px;
}
.tableTitle_ad{
  float: left;
  width: 5px;
  height: 30px;
  background: rgb(64,158,255);
}
.tableTitle_bg{
  float: left;
  height: 30px;
  padding: 0 30px 0 15px;
  margin-left: 5px;
  font-size: 16px;
  line-height: 30px;
  color: #2f2f2f;
  background: linear-gradient(90deg, rgba(64,158,255, 0.50),rgba(64,158,255,.03));
}
/* --------------------------
   树仅叶子节点渲染checkbox
 ---------------------------*/
.data-show-sider-dataset .is-leaf + .el-checkbox .el-checkbox__inner {
  display: inline-block;
}
.data-show-sider-dataset .el-checkbox .el-checkbox__inner {
  display: none;
}
/* --------------------------
        树节点展开箭头
 ---------------------------*/
.data-show-sider-dataset .el-tree-node__expand-icon {
  color: #6f8ba9;
}

.data-show-sider-dataset .is-leaf {
  color: transparent; /* 叶子节点的箭头隐藏 */
}

.data-show-sider-footer {
  width: 100%;
  height: 3.5rem;
  margin: 8px 0;
  /* padding-bottom: 5px; */
  text-align: center;
}
.btn-title{
  margin-top: 10px;
  color:#ffffff;
  text-decoration: none;
}

.theme-data-show-container {
  height: 100%;
  width: 100%;
  background-color: #fce8d1;
  background-image: linear-gradient(180deg, #87ceeb, #fce8d1);
}

.theme-data-show-sider-search-wrapper{
  margin-bottom: 10px;
}


.theme-data-show-header,
.theme-data-show-sider,
.theme-data-show-content,
.theme-data-show-header div,
.theme-data-show-map-wrapper,
.theme-data-show-content > div {
  height: 100%;
}

.theme-data-show-map-wrapper {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 100% 100%;
}



/* ------------------
    cesium切换2d、3d
--------------------*/
#theme-data-show-cesium-map {
  height: 90%;
  width: 90%;
}

.theme-cesium-scenemode-wrapper {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 999;
}

.theme-cesium-scenemode {
  width: 80px;
}

.theme-cesium-scenemode input {
  background-color: #0000006b;
  border: 1px solid #d0d0d0;
  border-color: #d0d0d0 !important;
  color: #e4e4e4;
  font-weight: 600;
}

.theme-cesium-scenemode .el-input.is-disabled .el-input__inner {
  background-color: #f5f7faa6;
}

.theme-cesium-scenemode input:focus,
.theme-cesium-scenemode input:hover {
  border-color: #e6e6e6 !important;
}
/* ------------------
    cesium切换2d、3d
--------------------*/

.theme-data-show-header-banner {
  font-size: 2rem;
  margin: 0;
  color: white;
  height: 59px;
  line-height: 59px;
}

.header-logo {
  display: block;
  height: 100%;
  background: url("../../../assets/picture/logo.png") no-repeat scroll left center;
  background-size: auto 35px;
}

.theme-data-show-sider {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 10px;
}



.theme-data-show-footer{
  overflow: hidden;
}


/* ------------------
       树的滚动条
--------------------*/

.theme-data-show-table{
  height: 95%;
  width: 95%;
  margin-top: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 2.5%;
}
.theme-data-show-sider-tab{
  height: 100%;
}


.data-show-sider-tabs > .el-tabs__content {
  height: calc(100% - 40px); /* 40px是上面header的高度 */
  overflow: auto;
}

.theme-data-show-sider-tabs > .el-tabs__content::-webkit-scrollbar {
  width: 5px;
  background-color: transparent;
}

.theme-data-show-sider-tabs > .el-tabs__content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #bcccdc;
  /* background-image: linear-gradient(180deg, #87ceebbb, #fce8d1aa); */
}

.theme-data-show-sider-tabs > .el-tabs__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  background-color: transparent;
  border-radius: 10px;
}

/* --------------------------
   树仅叶子节点渲染checkbox
 ---------------------------*/
.theme-data-show-sider-tabs .is-leaf + .el-checkbox .el-checkbox__inner {
  display: inline-block;
}
.theme-data-show-sider-tabs .el-checkbox .el-checkbox__inner {
  display: none;
}

/* --------------------------
        树节点展开箭头
 ---------------------------*/
.theme-data-show-sider-tabs .el-tree-node__expand-icon{
  color: #6f8ba9;
}

.theme-data-show-sider-tabs .is-leaf{
  color: transparent; /* 叶子节点的箭头隐藏 */
}

.theme-data-show-sider-footer {
  width: 100%;
  height: 3rem;
  text-align: center;
}

.theme-data-show-content {
  padding: 30px 20px;
}

.theme-data-show-footer {
  position: relative;
  height: 20px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.6);
}

.theme-data-show-footer > span {
  right: 10px;
  position: absolute;
}

.el-table .is-leaf{
  color: #606266;
}
</style>