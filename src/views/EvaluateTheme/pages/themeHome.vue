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

          <el-col :span="20" :offset="1">
            <h1 class="data-show-header-banner">政府生态文明建设年度评价专题展示系统
            </h1>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>

    <el-main>
      <el-row class="data-show-content">
        <el-col :span="7" :offset="1">
          <div class="data-show-sider">
            <div style="height: 100%">
              <el-tabs class="data-show-sider-tabs" type="card" >
                <el-tab-pane label="Data Sets" class="data-show-sider-tab" >

                  <div id="table1" style="height: 50%">
                    <div class="warp-title" style="background-image: linear-gradient(180deg, #87ceeb, #d8f0fa)">
                      <ul class="item text-center" style="height: 30px">
                        <li class="textcenter">
                          <span class="YiJi" >一级指标</span>
                          <span class="XuHao">序号</span>
                          <span class="ErJi ">二级指标</span>
                        </li>
                      </ul>
                    </div>
                    <!-- 表格滚动区 -->
                    <div>
                      <vue-seamless-scroll :style="{height: this.scrollHeight + 'px' }" :data="listData"
                                           :class-option="defaultOption" class="warp-content">
                        <ul class="item text-center">
                          <li v-for="item in listData" :key="item" class="scroll-li textcenter"
                          >
                            <span class="YiJi"  v-text="item.YiJi"></span>
                            <span class="XuHao" v-text="item.XuHao"></span>
                            <span class="ErJi" v-text="item.ErJi"></span>
                          </li>
                        </ul>
                      </vue-seamless-scroll>
                    </div>
                  </div>

                  <div id="table2" style="height: 50%">
                    <div class="warp-title" style="background-image: linear-gradient(180deg, #87ceeb, #d8f0fa)">
                      <ul class="item text-center" style="height: 30px">
                        <li class="textcenter">
                          <span class="YiJi" >一级指标</span>
                          <span class="XuHao">序号</span>
                          <span class="ErJi ">二级指标</span>
                        </li>
                      </ul>
                    </div>
                    <!-- 表格滚动区 -->
                    <div>
                      <vue-seamless-scroll :style="{height: this.scrollHeight + 'px' }" :data="listData"
                                           :class-option="defaultOption" class="warp-content">
                        <ul class="item text-center">
                          <li v-for="item in listData" :key="item" class="scroll-li textcenter"
                          >
                            <span class="YiJi"  v-text="item.YiJi"></span>
                            <span class="XuHao" v-text="item.XuHao"></span>
                            <span class="ErJi" v-text="item.ErJi"></span>
                          </li>
                        </ul>
                      </vue-seamless-scroll>
                    </div>
                  </div>




                </el-tab-pane>

                <el-tab-pane label="Search Criteria" class="data-show-sider-tab"
                >Search Criteria</el-tab-pane
                >
              </el-tabs>
            </div>


            <div class="data-show-sider-footer" style="height: 10%">
              <el-row style="height:100%; align-items:center" type="flex" justify="space-around">
                <el-col :span="6"><el-button type="primary" class="link-btn">
                  <router-link to="/SdgPlatform/EvaluateTheme/ThemeZJ" class="btn-title">
                    浙江
                  </router-link>
                </el-button></el-col>
                <el-col :span="6"><el-button type="primary"  class="link-btn">
                  <router-link to="/SdgPlatform/EvaluateTheme/ThemeAH" class="btn-title">
                    安徽
                  </router-link>
                </el-button></el-col>
                <el-col :span="6"><el-button type="primary"  class="link-btn">
                  <router-link to="/SdgPlatform/EvaluateTheme/ThemeFJ" class="btn-title">
                    福建
                  </router-link>
                </el-button></el-col>



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

import {DataShowMap} from "@/utils/map";
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: "Home",
  data() {
    return {

      scrollHeight:250,
      listData: [{
        YiJi: '资源利用（权数=29.3%）',
        XuHao: '1',
        ErJi: '能源消费总量'
      },
        {
          YiJi: '资源利用（权数=29.3%）',
          XuHao: '2',
          ErJi: '单位GDP能源消耗降低'
        },
        {
          YiJi: '环境治理（权数=16.5%）',
          XuHao: '15',
          ErJi: '化学需氧量排放总量减少'
        },{
          YiJi: '资源利用（权数=29.3%）',
          XuHao: '1',
          ErJi: '能源消费总量'
        },
        {
          YiJi: '资源利用（权数=29.3%）',
          XuHao: '2',
          ErJi: '单位GDP能源消耗降低'
        },
        {
          YiJi: '环境治理（权数=16.5%）',
          XuHao: '15',
          ErJi: '化学需氧量排放总量减少'
        }],



  }

  },
  components: { //组件
    vueSeamlessScroll
  },
  computed: {

    defaultOption () {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }

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
    document.title = "生态文明数据展示系统"
    this.mapInit();
  },
  beforeDestroy() {
    this.mapObj && this.mapObj.destroy();
  },
};
</script>

<style scoped>

.textcenter{
  text-align: center;
}
.scroll-li{
  border-bottom: rgba(122,197,205,0.5) 1px solid
}
.YiJi,.ErJi{
  width: 200px;
}
.XuHao{
  width: 50px;

}
.warp-title {
  overflow: hidden;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
li {
  height: 20px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
}


.warp-content {
  overflow: hidden;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
li {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}

.btn-title{
  margin-top: 10px;
  color:#ffffff;
  text-decoration: none;
}

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

.data-show-header-banner{
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