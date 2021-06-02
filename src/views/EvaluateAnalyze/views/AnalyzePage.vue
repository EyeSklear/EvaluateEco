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
                <div class="data-show-excel ">
                    <el-tabs style="height: 100%;width: 100%" >
                        <el-tab-pane label="面向SDGs的美丽中国内涵与指标体系" class="AnalyzeTitle" >
                            <el-table class="tableStyle data-show-table"
                                      :data="SDGListA"
                                      :span-method="arraySpanMethod1"
                                      max-height="700"
                                      border>
                                <el-table-column
                                        prop="维度"
                                        label="维度">
                                </el-table-column>
                                <el-table-column
                                        prop="具体目标"
                                        label="具体目标">
                                </el-table-column>
                                <el-table-column
                                        prop="评价指标"
                                        label="评价指标">
                                </el-table-column>
                                <el-table-column
                                        prop="指标解释"
                                        label="指标解释">
                                </el-table-column>
                                <el-table-column
                                        prop="指标来源"
                                        label="指标来源">
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="长江中下游平原“美丽中国”全景评价指标体系">
                            <el-table class="tableStyle data-show-table"
                                      :data="SDGListB"
                                      :span-method="arraySpanMethod2"
                                      max-height="700"
                                      border>
                                <el-table-column
                                        prop="目标"
                                        label="目标">
                                </el-table-column>
                                <el-table-column
                                        prop="具体目标"
                                        label="具体目标">
                                </el-table-column>
                                <el-table-column
                                        prop="具体指标"
                                        label="具体指标">
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="典型城市群（长三角）的市域生态文明水平评估体系">
                            <el-table class="tableStyle data-show-table"
                                      :data="SDGListC"
                                      :span-method="arraySpanMethod3"
                                      max-height="700"
                                      border>
                                <el-table-column
                                        prop="序号"
                                        label="序号">
                                </el-table-column>
                                <el-table-column
                                        prop="领域"
                                        label="领域">
                                </el-table-column>
                                <el-table-column
                                        prop="指数"
                                        label="指数">
                                </el-table-column>
                                <el-table-column
                                         prop="指标"
                                         label="指标">
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="长江经济带狭义绿色发展水平评估指标体系">
                            <el-table class="tableStyle data-show-table"
                                      :data="SDGListD"
                                      :span-method="arraySpanMethod4"
                                      max-height="700"
                                      border>
                                <el-table-column
                                        prop="一级指标"
                                        label="一级指标">
                                </el-table-column>
                                <el-table-column
                                        prop="二级指标"
                                        label="二级指标">
                                </el-table-column>
                                <el-table-column
                                        prop="评价因子"
                                        label="评价因子">
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-row>
        </el-main>

        <el-footer class="data-show-footer" style="height: 20px">
            <span>
               <a
                href="http://geomodeling.njnu.edu.cn//"
                target="__blank"
                rel="noopener noreferrer"
                  >Open Geographic Modeling and Simulation</a>
                | Copyright © 2011-{{ currentYear }} OpenGMS. All Rights Reserved.
      </span>
        </el-footer>
    </el-container>

</template>

<script>
    import {GetTableData} from "@/views/EvaluateAnalyze/js/getData"
    export default {
        name: "AnalyzePage",
        data(){
            return{
                currentYear: new Date().getFullYear(),

                SDGListA:[],
                needMergeArr1: ['维度', '具体目标','评价指标'],
                rowMergeArrs1: {},
                SDGListB:[],
                needMergeArr2: ['目标', '具体目标'],
                rowMergeArrs2: {},
                SDGListC:[],
                needMergeArr3: ['领域', '指数'],
                rowMergeArrs3: {},
                SDGListD:[],
                needMergeArr4: ['一级指标', '二级指标'],
                rowMergeArrs4: {},
            }
        },
        methods:{
            initListData(){
                this.SDGListA=GetTableData("ListA");
                this.SDGListB=GetTableData("ListB");
                this.SDGListC=GetTableData("ListC");
                this.SDGListD=GetTableData("ListD");
            },
            arraySpanMethod1({column, rowIndex,}) {
                // 把需要循环的列名加入
                if (column.property === '维度')
                    return this.mergeAction1('维度', rowIndex);
                if (column.property === '具体目标')
                    return this.mergeAction1('具体目标', rowIndex);
                if (column.property === '评价指标')
                    return this.mergeAction1('评价指标', rowIndex);
            },
            arraySpanMethod2({column, rowIndex,}) {
                // 把需要循环的列名加入
                if (column.property === '目标')
                    return this.mergeAction2('目标', rowIndex);
                if (column.property === '具体目标')
                    return this.mergeAction2('具体目标', rowIndex);
            },
            arraySpanMethod3({column, rowIndex,}) {
                // 把需要循环的列名加入
                if (column.property === '领域')
                    return this.mergeAction3('领域', rowIndex);
                if (column.property === '指数')
                    return this.mergeAction3('指数', rowIndex);
            },
            arraySpanMethod4({column, rowIndex,}) {
                // 把需要循环的列名加入
                if (column.property === '一级指标')
                    return this.mergeAction4('一级指标', rowIndex);
                if (column.property === '二级指标')
                    return this.mergeAction4('二级指标', rowIndex);
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
                let _row = this.rowMergeArrs3[val].rowArr[rowIndex];
                let _col = _row > 0 ? 1 : 0;
                return [_row, _col];
            },
            mergeAction4(val, rowIndex) {
                let _row = this.rowMergeArrs4[val].rowArr[rowIndex];
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
            this.initListData();
            this.rowMergeArrs1=this.rowMergeHandle(this.needMergeArr1,this.SDGListA);
            this.rowMergeArrs2=this.rowMergeHandle(this.needMergeArr2,this.SDGListB);
            this.rowMergeArrs3=this.rowMergeHandle(this.needMergeArr3,this.SDGListC);
            this.rowMergeArrs4=this.rowMergeHandle(this.needMergeArr4,this.SDGListD);
        }
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

    data-show,
    data-show-main,
    .data-show-content > div {
        height: 100%;
    }

    .data-show-content {
        padding: 30px 20px;
    }

    .data-show-excel {
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .AnalyzeTitle{
        color: #ffffff;
        font-size: 1.10rem;
        font-weight: 500;
        line-height: 1.2;
        font-family: "Oswald-Bold";

    }

    .data-show-table{
        height: 95%;
        width: 95%;
        margin-left: 2.5%;
        margin-bottom: 2.5%;
    }

    /deep/.el-tabs__item {
        padding: 0 20px;
        height: 40px;
        box-sizing: border-box;
        display: inline-block;
        list-style: none;
        font-size: 15px;
        font-weight: 500;
        margin-left: 2px;
        color: #ffffff;
       }

    /deep/.el_tabs_content{
        height: 100%;
    }



</style>