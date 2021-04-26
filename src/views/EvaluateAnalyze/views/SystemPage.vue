<template>
    <div >
        <el-menu style="grid-area: 1/1/1/8"
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
                    <h1 class="data-show-header-banner">生态文明评估分析系统</h1>
                </el-col>
            </el-row>
        </el-menu>
        <div class="parent2">
            <el-table class="tableStyle table-location"
                      :data="SDGsIndex"
                      :span-method="arraySpanMethod"
                      border>
                <el-table-column
                        prop="Target"
                        label="目标层">
                </el-table-column>
                <el-table-column
                        prop="Index"
                        label="指标层">
                </el-table-column>
                <el-table-column
                        prop="Factor"
                        label="因子层">
                </el-table-column>
                <el-table-column
                        prop="FactorLayer"
                        label="因子">
                </el-table-column>
            </el-table>
            <!--  地图显示-->
            <div id="data-show-map1" class="map-location">

            </div>
        </div>

    </div>
</template>

<script>
    import { DataShowMap } from "../../DataShow/map/map";
    export default {
        name: "SystemPage",
        data(){
          return{
              SDGsIndex:[
                  {
                      Target:'生态文明指数',
                      Index:'资源承载',
                      Factor:'土地资源承载力',
                      FactorLayer:'地形起伏度',
                  },{
                      Target:'生态文明指数',
                      Index:'资源承载',
                      Factor: '土地资源承载力',
                      FactorLayer: '耕地面积占比'
                  },{
                      Target:'生态文明指数',
                      Index:'资源承载',
                      Factor:'土地资源承载力',
                      FactorLayer:'土地利用程度'
                  },{
                      Target:'生态文明指数',
                      Index:'资源承载',
                      Factor:'水资源丰度',
                      FactorLayer:'水资源可用量'
                  },{
                      Target:'生态文明指数',
                      Index:'资源承载',
                      Factor:'自然环境危害性',
                      FactorLayer:'气象灾害'
                  },{
                      Target:'生态文明指数',
                      Index:'资源承载',
                      Factor:'自然环境危害性',
                      FactorLayer:'地质灾害'
                  },{
                      Target:'生态文明指数',
                      Index:'环境压力',
                      Factor:'环境污染',
                      FactorLayer:'大气环境污染'
                  },{
                      Target:'生态文明指数',
                      Index:'环境压力',
                      Factor:'环境污染',
                      FactorLayer:'水环境污染'
                  },{
                      Target:'生态文明指数',
                      Index:'环境压力',
                      Factor:'环境污染',
                      FactorLayer:'土壤环境污染'
                  },{
                      Target:'生态文明指数',
                      Index:'环境压力',
                      Factor:'环境保护',
                      FactorLayer:'森林覆盖率'
                  },{
                      Target:'生态文明指数',
                      Index:'环境压力',
                      Factor:'环境保护',
                      FactorLayer:'生物丰富度'
                  },{
                      Target:'生态文明指数',
                      Index:'环境压力',
                      Factor:'环境保护',
                      FactorLayer:'自然保护区面积'
                  },{
                      Target:'生态文明指数',
                      Index:'环境压力',
                      Factor:'环境保护',
                      FactorLayer:'自然保护区面积'
                  },{
                      Target:'生态文明指数',
                      Index:'生态资产',
                      Factor:'自然资源价值',
                      FactorLayer:'有机质生产价值'
                  },{
                      Target:'生态文明指数',
                      Index:'生态资产',
                      Factor:'自然资源价值',
                      FactorLayer:'生态经济产品价值'
                  },{
                      Target:'生态文明指数',
                      Index:'生态资产',
                      Factor:'生态系统服务价值',
                      FactorLayer:'固碳释氧价值'
                  },{
                      Target:'生态文明指数',
                      Index:'生态资产',
                      Factor:'生态系统服务价值',
                      FactorLayer:'涵养水源价值'
                  },{
                      Target:'生态文明指数',
                      Index:'生态资产',
                      Factor:'生态系统服务价值',
                      FactorLayer:'净化空气价值'
                  }
              ],
              needMergeArr: ['Target', 'Index','Factor'],
              rowMergeArrs: {},
              //
          }
        },
        methods:{
            mapInit() {
                this.mapObj = new DataShowMap("data-show-map1");
            },
             // 合拼单元格方法
            arraySpanMethod({column, rowIndex}) {
                // 把需要循环的列名加入
                if (column.property === 'Target')
                    return this.mergeAction('Target', rowIndex, column);
                if (column.property === 'Index')
                    return this.mergeAction('Index', rowIndex, column);
                if (column.property === 'Factor')
                    return this.mergeAction('Factor', rowIndex, column);
            },
            mergeAction(val, rowIndex) {
                let _row = this.rowMergeArrs[val].rowArr[rowIndex];
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
        //挂载前加载地图
        mounted() {
            //加载表格数据


            this.rowMergeArrs = this.rowMergeHandle(this.needMergeArr, this.SDGsIndex);
            this.mapInit();
        },
        //之后销毁地图
        beforeDestroy() {
            this.mapObj && this.mapObj.destroy();
        },
    }
</script>

<style scoped>
    .data-show-header,
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

    .table-location{
        grid-area: 1/1/5/4 ;
        background-color: hsla(0, 0%, 100%, 0.6);
    }

    .map-location{
        grid-area: 1/4/5/8;
        /*margin-top: 10px;*/
        /*margin-bottom: 10px;*/
        /*margin-left: 10px;*/
        /*margin-right: 10px;*/
    }

</style>