<template>
    <el-container class="data-show" >
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
                        <h1 class="data-show-header-banner">生态文明评估分析系统</h1>
                    </el-col>
                </el-row>
            </el-menu>
        </el-header>
        <el-main class="data-show-main">
              <el-row class="data-show-content">
                  <el-col :span="6" :offset="1">
                       <div class="data-show-sider">
                           <el-table class="tableStyle data-show-table"
                                     :data="SDGsIndex"
                                     :span-method="arraySpanMethod"
                                     :max-height="800"
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
                       </div>
                  </el-col>
                  <el-col class="data-show-map-wrapper" :span="15" :offset="1">
                      <div id="data-show-map"></div>
                  </el-col>
              </el-row>


<!--                     地图显示-->
<!--                   <div id="data-show-map" >-->
<!--                   </div>-->
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
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'营养物质循环价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'土壤保持价值'
                    },{
                        Target:'生态文明指数',
                        Index:'生态资产',
                        Factor:'生态系统服务价值',
                        FactorLayer:'生物多样性'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'净化空气价值'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'经济规模水平'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'产业结构水平'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'财政及社会保障'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'居民生活与消费'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'经济活力',
                        FactorLayer:'科技教育水平'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'基础设施',
                        FactorLayer:'关键交通节点可达性'
                    },{
                        Target:'生态文明指数',
                        Index:'发展能力',
                        Factor:'社会服务',
                        FactorLayer:'公共服务设施便捷度'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳排放',
                        FactorLayer:'能源消耗碳排放'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳排放',
                        FactorLayer:'工业生产过程碳排放'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳排放',
                        FactorLayer:'农业活动碳排放'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳排放',
                        FactorLayer:'生活项目碳排放'
                    },{
                        Target:'生态文明指数',
                        Index:'零碳排放',
                        Factor:'碳吸收',
                        FactorLayer:'生态系统碳吸收量'
                    }
                ],
                currentYear: new Date().getFullYear(),
                needMergeArr: ['Target', 'Index','Factor'],
                rowMergeArrs: {},
                //
            }
        },
        methods:{
            mapInit() {
                this.mapObj = new DataShowMap("data-show-map");
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
            this.mapObj.toggleLayerShowLocal('../data/test.tif')
        },
        //之后销毁地图
        beforeDestroy() {
            this.mapObj && this.mapObj.destroy();
        },
    }
</script>

<style scoped>
    .data-show {
        height: 100%;
        width: 100%;

    }
    .data-show-main{
        height: 95%;
        width: 100%;
    }

    .data-show-header,
    .data-show-map-wrapper,
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

    .data-show-content {
        padding: 30px 20px;
    }

    .data-show-sider {
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .data-show-table{
        height: 95%;
        width: 95%;
        margin-top: 2.5%;
        margin-left: 2.5%;
        margin-bottom: 2.5%;
    }

    .header-logo {
        display: block;
        height: 100%;
        background: url("../../../assets/picture/logo.png") no-repeat scroll left center;
        background-size: auto 35px;
    }

    .data-show-map-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        background-size: 100% 100%;
    }

    .table-location{
        grid-area: 1/1/5/4 ;
        background-color: hsla(0, 0%, 100%, 0.6);
    }

    #data-show-map {
        height: 95%;
        width: 95%;
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

