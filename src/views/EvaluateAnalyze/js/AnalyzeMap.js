import "leaflet/dist/leaflet.css"
import $L from "leaflet";
import {DataShowMap} from "../../../utils/map";
import Global from "../views/Globel/Global";



export class AnalyzeMap extends DataShowMap {
    //向图层上添加中国Geojson



    layerGroups = new $L.FeatureGroup().addTo(this.map);



    //添加矢量数据
    AddGeoJson(JsonData) {
        let myStyle = {
            "color": "#49494b",
            "weight": 3,
            "opacity": 0.8,
        };

        var Json=$L.geoJSON(JsonData, {
            style: myStyle,
            onEachFeature:onEachFeature,

        })

        function onEachFeature(feature, layer) {
            layer.on({
                click: ClickFeature,
            });
        }
        // function resetHighlight(e) {
        //     Json.resetStyle(e.target);
        //     Global.MapClickName.length=Global.MapClickName.length-1;
        // }

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });

            if (!$L.Browser.ie && !$L.Browser.opera && !$L.Browser.edge) {
                layer.bringToFront();

            }
        }
        function ClickFeature(e) {
            if(JudgeFunction(e.target.feature.properties.name)){
                Json.resetStyle(e.target);
                Global.MapClickName.length=Global.MapClickName.length-1;
            }else{
                highlightFeature(e)
                Global.MapClickName[Global.MapClickName.length]=e.target.feature.properties.name;
                for(let i=0;i<Global.MapClickName.length;i++){
                    console.log(Global.MapClickName[i]);
                }
            }
        }
        this.layerGroups.addLayer(Json);

        //判断这个Name是否在数组中
        function JudgeFunction(JsonName){
            var state=0;
            for(let i=0;i<Global.MapClickName.length;i++){
                if(Global.MapClickName[i]==JsonName){
                    state=1;
                }
            }
            return state;
        }
    }

    //清除图层
    RemoveJson(){
        this.layerGroups.clearLayers();
    }



}


