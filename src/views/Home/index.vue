<template>
    <div class="parent background">
       <div class="divTitle">
           <h1 class="heading-8">生态文明建设与评估专题</h1>
           <h1 class="heading-8">可视化分析系统</h1>
           <div class="text-span-3">可持续发展目标呼吁所有国家行动起来，在促进经济繁荣的同时保护地球。目标指出，消除贫困必须与 一系列战略齐头并进，包括促进经济增长
               ，解决教育、卫生、社会保护和就业机会的 社会需求，遏制气候变化和保护环境。本网站针对可持续发展目标建立可视化系统,直观的将可持续发展目标分析结果呈现出来。
           </div>
       </div>
       <div class="divPicture">
           <el-image
                   style="width: 240px; height: 240px "
                   :src="earthurl"
                   :fit="full"
           ></el-image>
       </div>
        <div class="div7">
            <router-link to="/SdgPlatform/DataShow" class="heading-2">
               <el-row style="text-align:center">
                   <el-image class="Zoom"
                        style="width: 220px; height: 220px;margin-top: 0px"
                        :src="datashowurl"
                        :fit="cover"></el-image>
               </el-row>
                <el-row style="text-align:center">
                    <br>
                    生态文明数据展示系统
                </el-row>
            </router-link>
        </div>
        <div class="div8" >
            <router-link to="/SdgPlatform/EvaluateTheme" class="heading-2">
               <el-row style="text-align:center">
                   <el-image class="Zoom"
                        style="width: 220px; height: 220px;margin-top: 30px"
                        :src="evaluatethemeurl"
                        :fit="cover"
                        ></el-image>
               </el-row>
               <el-row style="margin-bottom: 10px;text-align:center">
                政府生态文明考核评估<br>专题展示系统
               </el-row>
            </router-link>
        </div>
        <div class="div9">
            <router-link to="/SdgPlatform/EvaluateAnalyze" class="heading-2">
                <el-row style="text-align:center">
                     <el-image class="Zoom"
                        style="width: 220px; height: 220px "
                        :src="evaluateanalyzeurl"
                        :fit="cover"></el-image>
                </el-row>
                <el-row style="text-align:center">
                    生态文明评估分析系统
                </el-row>
            </router-link>
        </div>
        <div class="div10">
            <router-link to="/SdgPlatform/SDGsAnalyze" class="heading-2">
                <el-row style="text-align:center">
                    <el-image class="Zoom"
                        style="width: 220px; height: 220px;margin-top: 20px"
                        :src="sdgsanalyzeurl"
                        :fit="cover"></el-image>
                </el-row>
                <el-row style="text-align: center">
                面向联合国SDGs评估及进展<br>分析系统
               </el-row>
            </router-link>
        </div>
    </div>
</template>



<script>

    export default {
        name: "index",
        data(){
            return{
                earthurl:require('../../assets/picture/earth.png'),
                datashowurl:require('../../assets/picture/数据展示2.png'),
                evaluatethemeurl:require('../../assets/picture/评估展示2.png'),
                evaluateanalyzeurl:require('../../assets/picture/数据分析2.png'),
                sdgsanalyzeurl:require('../../assets/picture/SDGs2.png')
            }
        },
        methods:{

        }
    }

</script>

<style scoped src="../../assets/css/designwiz.webflow.82884a821.css"></style>
<style scoped>
@import "../../assets/css/Grid.css";
.divTitle{
    grid-area: 1/2/2/5;
}
.divPicture{
    grid-area: 1/5/2/6;
    text-align: center;
}
.Zoom:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>