<template>
  <el-container class="data-show-container">
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="data-show-header"
        mode="horizontal"
        background-color="#545c64"
      >
        <el-row>
          <el-col :span="3" :offset="1">
            <a
              class="header-logo"
              href="/SdgPlatform"
              rel="noopener noreferrer"
            >
              <div></div>
            </a>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>

    <el-main>
      <el-row class="data-show-content">
        <el-col :span="6" :offset="1">
          <div class="data-show-sider">
            <el-tabs class="data-show-sider-tabs" type="card">
              <el-tab-pane label="Data Sets" class="data-show-sider-tab">
                <el-tree
                  :data="mapServiceTreeData"
                  show-checkbox
                  node-key="mid"
                  children="children"
                  label="label"
                  default-expand-all="true"
                  @check="handleTreeNodeCheck"
                ></el-tree>
              </el-tab-pane>

              <el-tab-pane label="Search Criteria" class="data-show-sider-tab"
                >Search Criteria</el-tab-pane
              >
            </el-tabs>

            <div class="data-show-sider-footer">
              <el-row style="height:100%; align-items:center" type="flex" justify="space-around">
                <el-col :span="6"><el-button type="primary" plain>中国</el-button></el-col>
                <el-col :span="6"><el-button type="primary" plain>长三角</el-button></el-col>
                <el-col :span="6"><el-button type="primary" plain>福建</el-button></el-col>
                <el-col :span="6"><el-button type="primary" plain>宜兴</el-button></el-col>
              </el-row>
            </div>
          </div>
        </el-col>

        <el-col id="data-show-map" :span="15" :offset="1"> </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { DataShowMap } from "../../utils/map";
import { getDataShowMapRequest } from "./mock/index";

export default {
  name: "index",
  data() {
    return {
      mapServiceTreeData: {},
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
    this.mapInit();
    this.mapServiceTreeData = getDataShowMapRequest();
  },
  beforeDestroy() {
    this.mapObj && this.mapObj.destroy();
  },
};
</script>

<style scoped>
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
.data-show-content > div {
  height: 100%;
}

.header-logo {
  display: block;
  height: 100%;
  background: url("../../assets/picture/logo.png") no-repeat scroll left center;
  background-size: auto 35px;
}

.data-show-sider {
  background-color: rgba(255, 255, 255, 0.6);
  position: relative;
}

.el-tree {
  background-color: rgba(255, 255, 255, 0);
}

.data-show-sider-tab {
  padding: 0px 20px;
}

.data-show-sider-footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 4rem;
  text-align: center;
}

.data-show-content {
  padding: 30px 20px;
}
</style>