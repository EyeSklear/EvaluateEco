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

    //可视化图层数据
    VisualGeoJson(ResultJsonData,IndexName){
        $L.geoJSON(ResultJsonData, {
            style: style,
        }).addTo(this.map);

        function style(feature) {
            return {
                fillColor: getColor(ReturnAttribute(feature,IndexName)),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }
        //分级色彩化
        function ReturnAttribute(feature,indexName){
            let Data=0;
            for (let i=0;i<feature.properties.Table.length;i++){
                if(feature.properties.Table[i].Name==indexName){
                   Data=feature.properties.Table[i].NameData;
                }
            }
            return Data;
        }

        function getColor(d) {
            return d > 1000 ? '#800026' :
                d > 500  ? '#BD0026' :
                    d > 200  ? '#E31A1C' :
                        d > 100  ? '#FC4E2A' :
                            d > 50   ? '#FD8D3C' :
                                d > 20   ? '#FEB24C' :
                                    d > 10   ? '#FED976' :
                                        '#FFEDA0';
        }

    }


}


