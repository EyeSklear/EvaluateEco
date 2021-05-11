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
        <el-col :span="7" :offset="1">
          <div class="theme-data-show-sider">
            <el-tabs class="data-show-sider-tabs">
              <el-tab-pane label="绿色发展指标体系" class="data-show-sider-tab ">

                <div id="table1" style="height: 100%;">
<!--                  <div class="warp-title " style="background-image: linear-gradient(180deg, #87ceeb, #d8f0fa)">-->
<!--                    <ul class="item text-center no-padding table-font" >-->
<!--                      <li class="textcenter">-->
<!--                        <span class="YiJi" >一级指标</span>-->
<!--                        <span class="XuHao">序号</span>-->
<!--                        <span class="ErJi ">二级指标</span>-->
<!--                      </li>-->
<!--                    </ul>-->
<!--                  </div>-->
                  <!-- 表格滚动区 -->
<!--                  <div class="no-padding">-->
<!--&lt;!&ndash;                    <vue-seamless-scroll :style="{height: 1000 + 'px' }" :data="listData1"&ndash;&gt;-->
<!--&lt;!&ndash;                                         :class-option="defaultOption" class="warp-content">&ndash;&gt;-->
<!--                      <ul class="item text-center no-padding table-font textcenter" >-->
<!--                        <li v-for="item in listData1" :key="item" class="scroll-li" style="height: 50px;line-height: 20px;padding: 10px 0 0"-->
<!--                        >-->
<!--                          <span class="YiJi"  v-text="item.YiJi"></span>-->
<!--                          <span class="XuHao" v-text="item.XuHao"></span>-->
<!--                          <span class="ErJi" v-text="item.ErJi"></span>-->
<!--                        </li>-->
<!--                      </ul>-->
<!--&lt;!&ndash;                    </vue-seamless-scroll>&ndash;&gt;-->
<!--                  </div>-->
                  <el-table class="theme-data-show-table"
                            :data="listData1"
                            :span-method="arraySpanMethod"
                            border
                  >
                    <el-table-column
                        width="120"
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



              </el-tab-pane>
              <el-tab-pane label="美丽中国建设评估指标体系" class="data-show-sider-tab ">

                <div id="table2" style="height: 100%" >
                  <el-table class="theme-data-show-table"
                            :data="listData2"
                            :span-method="arraySpanMethod"
                            border
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




              </el-tab-pane>

            </el-tabs>

            <div class="theme-data-show-sider-footer">
              <el-row
                  style="height: 100%; align-items: center"
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

        <el-col class="theme-data-show-map-wrapper" :span="14" :offset="1">
          <div id="theme-data-show-map"></div>
        </el-col>
      </el-row>
    </el-main>

    <el-footer class="theme-data-show-footer" style="height: 20px">
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
import {DataShowMap} from "@/views/EvaluateTheme/js/map";

export default {
  name: "index",
  data() {
    return {
      mapServiceTreeData: {},
      currentYear: new Date().getFullYear(),
      listData1: [],
      listData2: [],
      needMergeArr1: ['YiJi'],
      needMergeArr2: ['PingGu'],
      rowMergeArrs1: {},
      rowMergeArrs2: {},
    }
  },
  components: { //组件

  },
  computed: {

    // defaultOption () {
    //   return {
    //     step: 0.2, // 数值越大速度滚动越快
    //     limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
    //     hoverStop: true, // 是否开启鼠标悬停stop
    //     direction: 1, // 0向下 1向上 2向左 3向右
    //     openWatch: true, // 开启数据实时监控刷新dom
    //     singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
    //     singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
    //     waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
    //   }
    // }

  },
  methods: {
    mapInit() {
      this.mapObj = new DataShowMap("theme-data-show-map");
      this.mapObj.AddHomeGeo();
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
  },
  mounted() {
    document.title = "政府生态文明建设年度评价专题展示系统";
    this.mapInit();

    this.initListData();
    this.rowMergeArrs1 = this.rowMergeHandle(this.needMergeArr1, this.listData1);
    this.rowMergeArrs2 = this.rowMergeHandle(this.needMergeArr2, this.listData2);
  },
  beforeDestroy() {
    this.mapObj && this.mapObj.destroy();
  },
};
</script>

<style>

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

.no-padding{
  padding: 0;
  margin: 5px 0 5px;

}
.item{
  cursor: default;
}


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
.PingGu{
width: 100px;
}
.JuTi{
  width: 300px;
}
.warp-title {
  overflow: hidden;
}
/*ul {*/
/*  list-style: none;*/
/*  padding: 0;*/
/*  margin: 0 auto;*/
/*}*/
/*li {*/
/*  height: 20px;*/
/*  line-height: 30px;*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-items: center;*/
/*  font-size: 1rem;*/
/*}*/


.warp-content {
  overflow: hidden;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
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

.el-header,
.el-main {
  padding: 0;
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
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 100% 100%;
}

#theme-data-show-map {
  height: 95%;
  width: 95%;
}

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
}

.el-tree {
  background-color: rgba(255, 255, 255, 0);
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
  background-image: linear-gradient(180deg, #87ceebbb, #fce8d1aa);
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
  height: 4rem;
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