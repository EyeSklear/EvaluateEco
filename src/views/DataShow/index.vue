<template>
  <el-container class="data-show-container">
    <el-header>
      <el-menu
        class="data-show-header"
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

          <el-col :span="6" :offset="1">
            <h1 class="data-show-header-banner">生态文明数据展示系统</h1>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>

    <el-main>
      <el-row class="data-show-content">
        <el-col :span="6" :offset="1">
          <div class="data-show-sider">
            <el-tabs class="data-show-sider-tabs">
              <el-tab-pane label="数据集" class="data-show-sider-tab">
                <el-tree
                  :data="mapServiceTreeData"
                  :check-strictly="true"
                  show-checkbox
                  node-key="mid"
                  children="children"
                  label="label"
                  @check="handleTreeNodeCheck"
                ></el-tree>
              </el-tab-pane>

              <el-tab-pane label="搜索图层" class="data-show-sider-tab"
                >Search Criteria</el-tab-pane
              >
            </el-tabs>

            <div class="data-show-sider-footer">
              <el-row
                style="height: 100%; align-items: center"
                type="flex"
                justify="space-around"
              >
                <el-col
                  v-for="item in siderFooterButtionAttribute"
                  :span="6"
                  :key="item.link"
                >
                  <el-button
                    type="primary"
                    plain
                    @click="() => handleFooterButtonClick(item.link)"
                  >
                    {{ item.label }}
                  </el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>

        <el-col class="data-show-map-wrapper" :span="15" :offset="1">
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
          <div id="data-show-cesium-map"></div>
        </el-col>
      </el-row>
    </el-main>

    <el-footer class="data-show-footer" style="height: 20px">
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
import { DataShowCesium } from "./map/cesium";
import { getMapServices } from "./data/index.js";

export default {
  name: "index",
  data() {
    return {
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
      siderFooterButtionAttribute: [
        {
          label: "中国",
          link:
            "http://nnu.geodata.cn:8008/data/datadetails.html?dataguid=8214154672221&docid=3",
        },
        {
          label: "长三角",
          link:
            "http://nnu.geodata.cn:8008/data/datadetails.html?dataguid=89578017548232&docid=2",
        },
        {
          label: "福建",
          link:
            "http://nnu.geodata.cn:8008/data/datadetails.html?dataguid=265499879970727&docid=4",
        },
        {
          label: "宜兴",
          link:
            "http://nnu.geodata.cn:8008/data/datadetails.html?dataguid=38994508946408&docid=27",
        },
      ],
    };
  },
  methods: {
    mapInit() {
      this.cesiumMapObj = new DataShowCesium("data-show-cesium-map");
    },
    mapDestroy() {
      this.cesiumMapObj && this.cesiumMapObj.destroy();
    },
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
      });
    },
    handleFooterButtonClick(link) {
      window.open(link);
    },
  },
  mounted() {
    document.title = "生态文明数据展示系统";
    this.mapInit();
    this.mapServiceTreeData = getMapServices();
  },
  beforeDestroy() {
    this.mapDestroy();
  },
};
</script>

<style>
.data-show-container {
  height: 100%;
  width: 100%;
  background-color: #fce8d1;
  background-image: linear-gradient(180deg, #87ceeb, #fce8d1);
}

.el-header,
.el-main {
  padding: 0;
}

.data-show-header,
.data-show-sider,
.data-show-content,
.data-show-header div,
.data-show-map-wrapper,
.data-show-content > div {
  height: 100%;
}

.data-show-map-wrapper {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 100% 100%;
}

#data-show-cesium-map {
  height: 95%;
  width: 95%;
}

/* ------------------
    cesium切换2d、3d
--------------------*/
.cesium-scenemode-wrapper {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 999;
}

.cesium-scenemode {
  width: 80px;
}

.cesium-scenemode input {
  background-color: #0000006b;
  border: 1px solid #d0d0d0;
  border-color: #d0d0d0 !important;
  color: #e4e4e4;
  font-weight: 600;
}

.cesium-scenemode .el-input.is-disabled .el-input__inner {
  background-color: #f5f7faa6;
}

.cesium-scenemode input:focus,
.cesium-scenemode input:hover {
  border-color: #e6e6e6 !important;
}

/* 下拉菜单样式 */
.cesium-scenemode-popper {
  background-color: #0000006b;
  border: 1px solid #727272;
}

.cesium-scenemode-popper .el-select-dropdown__item {
  color: #e4e4e4;
}

.cesium-scenemode-popper .hover {
  color: #383b42;
  font-weight: 550;
  background-color: #ffffff6b;
}

.cesium-scenemode-popper .selected {
  color: #409eff;
  font-weight: 800;
}

.data-show-header-banner {
  font-size: 2rem;
  margin: 0;
  color: white;
  height: 59px;
  line-height: 59px;
}

.header-logo {
  display: block;
  height: 100%;
  background: url("../../assets/picture/logo.png") no-repeat scroll left center;
  background-size: auto 35px;
}

.data-show-sider {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
}

.el-tree {
  background-color: rgba(255, 255, 255, 0);
}

.data-show-sider-tabs {
  height: calc(100% - 4rem); /* 4rem是下面footer的高度 */
  margin-bottom: 5px;
  padding: 5px 20px;
  flex: 1 auto;
}

/* ------------------
       树的滚动条
--------------------*/
.data-show-sider-tabs > .el-tabs__content {
  height: calc(100% - 40px); /* 40px是上面header的高度 */
  overflow: auto;
}

.data-show-sider-tabs > .el-tabs__content::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: transparent;
}

.data-show-sider-tabs > .el-tabs__content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #bcccdc;
  /* background-image: linear-gradient(180deg, #87ceebbb, #fce8d1aa); */
}

.data-show-sider-tabs > .el-tabs__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgb(0, 0, 0, 0.2);
  background-color: transparent;
  border-radius: 10px;
}
/* 横向滚动条 */
.data-show-sider-tabs .el-tree-node {
  min-width: 100%; /* 设置min-width使较短的node占满整行 */
  width: fit-content;
}
/* --------------------------
   树仅叶子节点渲染checkbox
 ---------------------------*/
.data-show-sider-tabs .is-leaf + .el-checkbox .el-checkbox__inner {
  display: inline-block;
}
.data-show-sider-tabs .el-checkbox .el-checkbox__inner {
  display: none;
}

/* --------------------------
        树节点展开箭头
 ---------------------------*/
.data-show-sider-tabs .el-tree-node__expand-icon {
  color: #6f8ba9;
}

.data-show-sider-tabs .is-leaf {
  color: transparent; /* 叶子节点的箭头隐藏 */
}

.data-show-sider-footer {
  width: 100%;
  height: 3.5rem;
  margin: 8px 0;
  /* padding-bottom: 5px; */
  text-align: center;
}

.data-show-content {
  padding: 30px 20px;
}

.data-show-footer {
  position: relative;
  height: 20px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.6);
}

.data-show-footer > span {
  right: 10px;
  position: absolute;
}
</style>