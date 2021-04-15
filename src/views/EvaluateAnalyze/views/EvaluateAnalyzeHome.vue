<template>
     <div class="parent2">
        <div style="grid-area: 2 / 2 / 3 / 4;">
            <h1 class="AnalyzeTitle">生态文明评估系统</h1>
            <p class="AnalyzeIntroduce">一段介绍</p>
        </div>
        <div style="grid-area: 3 / 2 / 4 / 4;">
            <el-button type="primary" style="margin-left:5px;margin-top: 50px">
                <router-link to="/SdgPlatform/EvaluateAnalyze/Analyze" class="ButtonTitle">
                    生态文明体系
                </router-link>
            </el-button>
            <el-button type="primary" style="margin-left:80px;margin-top: 50px">
                <router-link to="/SdgPlatform/EvaluateAnalyze/System" class="ButtonTitle">
                    生态文明分析
                </router-link>
            </el-button>
        </div>
        <div style="grid-area:3/6/1/4">
            <div class="AnalyzeCardStyle ">
                <h1 class="AnalyzeTitle2">面向SDGs的美丽中国内涵与指标体系</h1>
                <p class="">一段介绍</p>
            </div>
        </div>
        <div style="grid-area:3/8/1/6">
            <div class="AnalyzeCardStyle">
                <h1 class="AnalyzeTitle2">长江中下游平原“美丽中国”全景评价指标体系</h1>
                <p>一段介绍</p>
            </div>
        </div>
        <div style="grid-area:5/6/3/4">
            <div class="AnalyzeCardStyle">
                <h1 class="AnalyzeTitle2">典型城市群（长三角）的市域生态文明水平评估研究</h1>
                <p>一段介绍</p>
            </div>
        </div>
        <div style="grid-area:5/8/3/6">
            <div class="AnalyzeCardStyle">
                <h1 class="AnalyzeTitle2">长江经济带狭义绿色发展水平评估指标体系</h1>
                <p>一段介绍</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EvaluateAnalyzeHome"
    }
</script>

<style scoped>
    .AnalyzeTitle{
        color: #ffffff;
        font-size: 3.75rem;
        font-weight: 500;
        line-height: 1.2;
        font-family: "Oswald-Bold";
    }
    .AnalyzeIntroduce{
        color: #ffffff;
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 1.2;
        font-family: "Oswald-Bold";
    }
    .AnalyzeTitle2{
        color: #ffffff;
        font-size: 1.05rem;
        font-weight: 500;
        line-height: 1.2;
        font-family: "Oswald-Bold";
    }
    .AnalyzeCardStyle{
        margin-top: 55px;
        margin-left: 40px;
        width: 75%;
        height: 75%;
        background-color: hsla(0, 0%, 100%, 0.1);/*背景框*/

    }
    .ButtonTitle {
        margin-top: 10px;
        font-size: 22px;
        font-weight: 500;
        color:#ffffff;
        text-decoration: none;
    }
</style>