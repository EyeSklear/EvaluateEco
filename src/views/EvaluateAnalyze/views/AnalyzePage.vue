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
                        </el-tab-pane>
                        <el-tab-pane label="典型城市群（长三角）的市域生态文明水平评估研究">
                        </el-tab-pane>
                        <el-tab-pane label="长江经济带狭义绿色发展水平评估指标体系">
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
                needMergeArr: ['维度', '具体目标','评价指标'],
            }
        },
        methods:{
            initListData(){
                this.SDGListA=GetTableData();
            },

        },
        mounted() {
            //加载表格数据
            this.initListData();
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