<template>
     <div class="parent2">
        <div style="grid-area: 2 / 2 / 3 / 4;">
            <h1 class="AnalyzeTitle">生态文明评估系统</h1>
            <p class="AnalyzeIntroduce">面向科学分析的生态文明评估系统平台</p>
        </div>
        <div style="grid-area: 3 / 2 / 4 / 4;">
            <el-button type="primary" style="margin-left:5px;margin-top: 50px">
                <router-link to="/SdgPlatform/EvaluateAnalyze/Analyze" class="ButtonTitle">
                    生态文明体系
                </router-link>
            </el-button>
            <el-button type="primary" style="margin-left:25px;margin-top: 50px">
                <router-link to="/SdgPlatform/EvaluateAnalyze/System" class="ButtonTitle">
                    生态文明分析
                </router-link>
            </el-button>
        </div>
        <div style="grid-area:3/6/1/4">
            <div class="AnalyzeCardStyle">
                <h1 class="AnalyzeTitle2">面向SDGs的美丽中国内涵与指标体系</h1>
                <p class="AnalyzePara">美丽中国建设是实现生态文明和全面建设小康社会的必由之路,更是构建人类命运共同体的新目标和美好愿景。
                    <br/>（1）美丽中国是一个由自然生态子系统与社会经济子系统组成的"人地关系地域系统";
                    <br/>（2）美丽中国内涵可解构为天蓝、地绿、水清、人和4个维度;
                    <br/>（3）构建了包含12个具体目标、43个具体评价指标的面向SDGs的"美丽中国"评价指标体系。
                </p>
            </div>
        </div>
        <div style="grid-area:3/8/1/6">
            <div class="AnalyzeCardStyle">
                <h1 class="AnalyzeTitle2">长江中下游平原“美丽中国”全景评价指标体系</h1>
                <p class="AnalyzePara">中国在落实可持续发展目标,建设"美丽中国"的过程中,既面临难得的机遇,也面临艰巨的挑战。科学系统评价我国典型区域"美丽中国"建设,识别"美丽中国"建设面临的关键问题,是当前"美丽中国"建设的重要方向。研究成果将为我国重点区域"美丽中国"建设和社会经济可持续发展提供科学依据及决策支持。 </p>
            </div>
        </div>
        <div style="grid-area:5/6/3/4">
            <div class="AnalyzeCardStyle">
                <h1 class="AnalyzeTitle2">典型城市群（长三角）的市域生态文明水平评估研究</h1>
                <p class="AnalyzePara">为评估和反映我国生态文明发展水平,结合联合国2030年可持续发展议程和国家生态文明建设目标,构建了以环境质量改善为核心的生态文明发展指标体系。基于市域评估单元,采用双目标渐进赋分,评估了京津冀、长三角和珠三角三个城市群的生态文明发展水平。城市生态文明发展水平评估,揭示其生态文明建设的短板,为城市提升生态文明发展水平指明了方向。 </p>
            </div>
        </div>
        <div style="grid-area:5/8/3/6">
            <div class="AnalyzeCardStyle">
                <h1 class="AnalyzeTitle2">长江经济带狭义绿色发展水平评估指标体系</h1>
                <p class="AnalyzePara">长江经济带干流水环境生态综合治理长久以来一直是十分重要的研究课题，也是建设美丽中国生态文明的重要组成部分。长江经济带狭义绿色发展水平评估指标体系通过五项指标水清、地绿、天蓝、业新和人和来构建一套社会环境经济为一体的绿色评估指标体系</p>
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
        font-size: 1.10rem;
        font-weight: 500;
        line-height: 1.2;
        font-family: "Oswald-Bold";
        text-align: center;
        padding-top: 30px;
    }
    .AnalyzePara{
        color: #ffffff;
        font-size: 1.05rem;
        font-weight: 500;
        line-height: 1.2;
        font-family: "Oswald-Bold";
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        line-height: 25px;

    }
    .AnalyzeCardStyle{
        margin-top: 55px;
        margin-left: 40px;
        width: 75%;
        height: 75%;
        background-color: hsla(0, 0%, 100%, 0.2);/*背景框*/
        overflow: hidden;
    }
    .ButtonTitle {
        margin-top: 10px;
        font-size: 22px;
        font-weight: 500;
        color:#ffffff;
        text-decoration: none;
    }
</style>