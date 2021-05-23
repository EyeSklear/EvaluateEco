<template>
    <el-container style="width: 100%;height: 100%;background-color: #ffffff">
        <el-col class="data-show-map-wrapper">
            <div id="data-show-map">
                <div class="leaflet-control map-select">
                    <el-row class="leaflet-right map-select" >
                        <h2>指标选择</h2>
                        <el-select v-model="MapIndex" placeholder="请选择">
                            <el-option
                                    v-for="item in IndexList"
                                    :key="item.Name"
                                    :label="item.Name"
                                    :value="item.Name">
                            </el-option>
                        </el-select>
                        <el-button @click="RadioClickMap" style="margin-left: 10px" type="primary" >确定</el-button>
                    </el-row>
                </div>

            </div>
        </el-col>
    </el-container>
</template>

<script>
    import {AnalyzeMap} from "../../js/AnalyzeMap";
    import {GetResultJson,JudgeSelectJson} from "../../js/getData";
    import Global from "../../views/Globel/Global";

    export default {
        name: "SystemViusal",
        data(){
            return{
                VisualOption:"",
                //指标选择页面
                MapIndex:"",
                IndexList:"",
            }
        },
        methods: {
            mapInit() {
                this.mapobj = new AnalyzeMap("data-show-map");
            },
            RadioClickMap(){
                console.log("进入");
                for(let i=0;i<Global.MapClickName.length;i++){
                    JudgeSelectJson(Global.MapClickName[i],this.IndexList);
                }
                this.mapobj.VisualGeoJson(Global.VisualJson,this.MapIndex);
                console.log("完成");
            },
        },
        mounted() {
            this.mapInit();
            this.IndexList=GetResultJson();
        },
        beforeDestroy() {
            this.mapobj && this.mapobj.destroy();
        },
    }

</script>

<style scoped>
    #data-show-map {
        height: 95%;
        width: 97%;
        position: relative;
    }

    .map-select{
        position: fixed;
        padding-top: 10px;
        padding-right: 50px;
    }

</style>