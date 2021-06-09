<template>
  <el-container class="theme-data-show-container">

    <el-header>
      <el-menu

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
            <h1 class="theme-data-show-header-banner">政府生态文明建设在线评价分析系统</h1>
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
              <el-tab-pane label="指标计算器" class="data-show-sider-tab" >
                <el-button
                @click="openDialog('GD')">
                  打开指标计算器
                </el-button>
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


      <el-drawer
          title="我是标题"
          :visible.sync="drawerVisible"
          direction="ltr"
          :before-close="handleClose"
      size="60%">

        <div id="table3" >
          <el-table class="theme-data-show-table"
                    :data="tableData"
                    :span-method="arraySpanMethod"
                    border
                    style="cursor: pointer;"
                    :header-cell-style="{color:'#333',fontWeight:1300}"
                    header-align="center"
          >
            <el-table-column
                align="center"
                width="210"
                prop="1stIndicators"
                label="一级指标">
            </el-table-column>
            <el-table-column
                align="center"
                width="150"
                prop="2ndIndicators"
                label="二级指标">
            </el-table-column>
            <el-table-column
                align="center"
                prop="unit"
                width="100"
                label="计量单位">
            </el-table-column>
            <el-table-column
                align="center"
                width="100"
                prop="weight"
                label="单项权重">
            </el-table-column>
            <el-table-column
                align="center"
                width="150"
                prop="indexSource"
                label="数据来源">
            </el-table-column>
            <el-table-column
                align="center"
                width="100"
                label="计算">
              <template slot-scope="scope">
                <template v-if="tableData[scope.$index].formula!=''">

                  <el-popover
                    placement="right"
                    width="160"
                    trigger="click"
                    :ref="`popover_${scope.$index}`"
                >
                    <div style="display: flex;flex-direction: column;line-height: 30px;">
                  <template v-for="(item,i) in nowHandleFormula[scope.$index]">

                    <label :key="item.id" >{{ item }}</label>
                    <el-input :key="item.id" v-model="rowInput[i]" size="mini" ></el-input>
                  </template>
                    </div>

                    <svg t="1622793943130"  slot="reference" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2466" width="200" height="200"><path d="M913.066667 857.429333c4.693333 0 8.533333 3.84 8.533333 8.533334v51.2a8.533333 8.533333 0 0 1-8.533333 8.533333H110.933333a8.533333 8.533333 0 0 1-8.533333-8.533333v-51.2c0-4.693333 3.84-8.533333 8.533333-8.533334h802.133334zM773.354667 128.64a35.2 35.2 0 0 1 48.96-0.042667l85.397333 82.517334c13.994667 13.525333 14.357333 35.797333 0.490667 50.154666l-526.272 510.08-135.317334 43.349334a35.2 35.2 0 0 1-44.074666-44.864l44.693333-131.285334z" fill="#1296db" p-id="2467"></path></svg>
                    <div style="text-align: right; margin-top: 5px">
                    <el-button size="mini" type="text" @click="closePopover(scope.$index)">取消</el-button>
                    <el-button type="primary" size="mini" @click="closeHandlePopover(scope.$index)">确定</el-button>
                  </div>
                </el-popover>
              </template>
                <template v-if="tableData[scope.$index].formula==''">
                  <svg t="1623154027376" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1878" width="200" height="200"><path d="M913.066667 857.429333c4.693333 0 8.533333 3.84 8.533333 8.533334v51.2a8.533333 8.533333 0 0 1-8.533333 8.533333H110.933333a8.533333 8.533333 0 0 1-8.533333-8.533333v-51.2c0-4.693333 3.84-8.533333 8.533333-8.533334h802.133334zM773.354667 128.64a35.2 35.2 0 0 1 48.96-0.042667l85.397333 82.517334c13.994667 13.525333 14.357333 35.797333 0.490667 50.154666l-526.272 510.08-135.317334 43.349334a35.2 35.2 0 0 1-44.074666-44.864l44.693333-131.285334z" fill="#717378" p-id="1879"></path></svg>
                </template>
              </template>

            </el-table-column>
            <el-table-column
                align="center"
                width=""
                label="得分(百分制)">
              <template slot-scope="scope">
              <el-input-number v-model="tableNum[scope.row.key-1]" controls-position="right" size="mini" :precision="2" :step="0.1" :min="0" :max="9999" placeholder="0.00"></el-input-number>
              </template>
            </el-table-column>

          </el-table>
          <div style="display: flex;flex-direction: row;justify-content:center;margin-bottom:20px">
          <label>总分：</label>
          <span>{{tatolMarks}}</span>
          </div>
        </div>


      </el-drawer>

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

import {getHomeTable,getGDTable} from "@/views/EvaluateTheme/js/getData";
import {ThemeMapShow} from "../js/cesium";
import {getMapServices} from "../js/getData";
import {handle} from "@/views/EvaluateTheme/js/tableUtils";

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
      datatest:{},
    //  指标计算器
      drawerVisible:false,
      popVisible:false,
      needMergeArr3: ['1stIndicators'],
      rowMergeArrsGD:{},
      tableData:[],
      tableNum:[],
      nowHandleFormula:[],
      rowInput:[],

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
      if (column.property === '1stIndicators')
        return this.mergeAction3('1stIndicators', rowIndex, column);
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
    mergeAction3(val, rowIndex) {
      let _row = this.rowMergeArrsGD[val].rowArr[rowIndex];
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
  //  指标计算器
    handleClose(done){
      this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(() => {});
    },
    openDialog(type){
      if(type == 'GD'){
        this.drawerVisible = true;
        this.tableData = getGDTable();
        if(this.rowMergeArrsGD.length==undefined){
          this.tableNum = new Array(this.tableData.length).fill(0)
          this.handleFormula();
          this.rowMergeArrsGD = this.rowMergeHandle(this.needMergeArr3, this.tableData);
        }
      }
      else{
        this.tableData = getGDTable();
        this.rowMergeArrsGD = this.rowMergeHandle(this.needMergeArr3, this.tableData);
      }
    },
    allNum(){
      console.log(this.tableNum)
      console.log(eval(this.tableNum.join("+")))
    },
    handleFormula(){
      var j=0,arr;
      for(var i = 0;i<this.tableData.length;++i){
        // if(this.tableData[i].formula!=""){
          arr = this.tableData[i].formula.replaceAll(/[`~!@#$%^&*()_\-+=<>?:"{}|/,.;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”       【】、；‘’，。、^\d+$]/g,",");
          this.nowHandleFormula[j++] = arr.split(',')
        // }
      }
      for (i = 0;i<this.nowHandleFormula.length;i++) {
        for(j = 0;j<this.nowHandleFormula[i].length;j++){
          if (this.nowHandleFormula[i][j] == '' || this.nowHandleFormula[i][j] == null || typeof (this.nowHandleFormula[i][j]) == undefined) {
            this.nowHandleFormula[i].splice(j, 1);
            j = j - 1;
          }
        }

      }
    },
    closePopover(index){
      eval("this.$refs.popover_"+index+".doClose()")
      this.rowInput.splice(0)
    },
    closeHandlePopover(index){
     eval("this.$refs.popover_"+index+".doClose()");
     let formulaLength = this.nowHandleFormula[index].length;
     let formulaArr = this.tableData[index].formula;
     for(let i= 0;i<formulaLength;i++){
       formulaArr = formulaArr.replace(this.nowHandleFormula[index][i],this.rowInput[i]);
     }
     this.tableNum.splice(index,1,handle(formulaArr))
     this.rowInput.splice(0)

    }
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
  computed:{
    tatolMarks:function () {
      var totalMarks = 0;
      for(var i = 0;i<this.tableNum.length;++i){
        totalMarks+=this.tableNum[i]*this.tableData[i].weight/100;
      }
      return totalMarks.toFixed(2);
    }
  },
  beforeDestroy() {
    this.mapDestroy();
  },
};
</script>

<style scoped>


/deep/ .el-drawer.ltr{
  overflow: auto;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

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