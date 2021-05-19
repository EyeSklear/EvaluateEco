<template>
    <el-container style="width: 100%;height: 100%;background-color: #ffffff">
        <el-col class="data-show-map-wrapper">
            <div id="data-show-map">
                <div class="leaflet-control">
                    <el-checkbox-group v-model="GeoJsonGroup" class="leaflet-right map-select">
                        <el-checkbox-button    @change="CheckBoxclickMap" v-for="Select in SelectOp" :label="Select" :key="Select">{{Select}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
            </div>
        </el-col>
    </el-container>
</template>

<script>
    import {AnalyzeMap} from "../../js/AnalyzeMap";
    import ChinaData from "../../../../../public/JsonAnalyze/ChinaData.json"
    import CountryData from "../../../../../public/JsonAnalyze/CountryData.json"
    import Global from "../../views/Globel/Global";

    const SelectOptions = ['世界', '国家', '省份','清除'];
    export default {
        name: "SystemMap",
        data(){
            return{
                GeoJsonGroup:['世界'],
                SelectOp: SelectOptions,
            }
        },
        methods:{
            mapInit(){
                this.mapobj=new AnalyzeMap("data-show-map");
            },
            CheckBoxclickMap(){
                if(this.GeoJsonGroup=='世界'){
                    //切换选项重置数组
                    Global.MapClickName.length=0;
                    this.mapobj.RemoveJson();
                    this.mapobj.AddGeoJson(CountryData.world);
                }
                if(this.GeoJsonGroup=='国家'){
                    //切换选项重置数组
                    Global.MapClickName.length=0;
                    this.mapobj.RemoveJson();
                    this.mapobj.AddGeoJson(ChinaData.china);
                }
                if(this.GeoJsonGroup=='清除'){
                    //切换选项重置数组
                    Global.MapClickName.length=0;
                    this.mapobj.RemoveJson();
                }
            }
        },

        mounted() {
            this.mapInit();

        },
        beforeDestroy() {
            this.mapobj && this.mapobj.destroy();
        },
    }
</script>

<style scoped>
    .data-show-map-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        background-size: 100% 100%;
    }
    #data-show-map {
        height: 95%;
        width: 97%;
        position: relative;
    }

    .map-select{
        position: fixed;
        padding-top: 40px;
        padding-right: 50px;
    }
</style>