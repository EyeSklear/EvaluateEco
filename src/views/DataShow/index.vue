<template>
  <el-container class="data-show-container">
    <el-header>
      <el-menu
        :default-active="activeIndex"
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
              <el-tab-pane label="Data Sets" class="data-show-sider-tab">
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

              <el-tab-pane label="Search Criteria" class="data-show-sider-tab"
                >Search Criteria</el-tab-pane
              >
            </el-tabs>

            <div class="data-show-sider-footer">
              <el-row
                style="height: 100%; align-items: center"
                type="flex"
                justify="space-around"
              >
                <el-col :span="6"
                  ><el-button type="primary" plain>中国</el-button></el-col
                >
                <el-col :span="6"
                  ><el-button type="primary" plain>长三角</el-button></el-col
                >
                <el-col :span="6"
                  ><el-button type="primary" plain>福建</el-button></el-col
                >
                <el-col :span="6"
                  ><el-button type="primary" plain>宜兴</el-button></el-col
                >
              </el-row>
            </div>
          </div>
        </el-col>

        <el-col class="data-show-map-wrapper" :span="15" :offset="1">
          <div id="data-show-map"></div>
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
import { DataShowMap } from "../../utils/map";
import { getDataShowMapRequest } from "./mock/index";
import { getMapServices } from "./data/index.js";

export default {
  name: "index",
  data() {
    return {
      mapServiceTreeData: {},
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    mapInit() {
      this.mapObj = new DataShowMap("data-show-map");
    },
    handleTreeNodeCheck(rawLayerAttr, treeCheckState) {
      const isShow = treeCheckState.checkedKeys.includes(rawLayerAttr.mid);
      if (rawLayerAttr.children) {
        rawLayerAttr.children.forEach((layer) => {
          this.mapObj.toggleLayerShow(
            layer.mid,
            layer.service,
            isShow,
            layer.type
          );
        });
      } else {
        this.mapObj.toggleLayerShow(
          rawLayerAttr.mid,
          rawLayerAttr.service,
          isShow,
          rawLayerAttr.type
        );
      }
    },
  },
  mounted() {
    document.title = "生态文明数据展示系统";
    this.mapInit();
    this.mapServiceTreeData = getDataShowMapRequest();
    this.mapServiceTreeData = getMapServices();
  },
  beforeDestroy() {
    this.mapObj && this.mapObj.destroy();
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
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 100% 100%;
}

#data-show-map {
  height: 95%;
  width: 95%;
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
  width: 5px;
  background-color: transparent;
}

.data-show-sider-tabs > .el-tabs__content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: linear-gradient(180deg, #87ceebbb, #fce8d1aa);
}

.data-show-sider-tabs > .el-tabs__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgb(0,0,0,0.2);
  background-color: transparent;
  border-radius: 10px;
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
.data-show-sider-tabs .el-tree-node__expand-icon{
  color: #6f8ba9;
}

.data-show-sider-tabs .is-leaf{
  color: transparent; /* 叶子节点的箭头隐藏 */
}

.data-show-sider-footer {
  width: 100%;
  height: 4rem;
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