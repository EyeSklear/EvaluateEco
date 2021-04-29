import "leaflet/dist/leaflet.css"
import $L from "leaflet";
import {DataShowMap} from "../../../utils/map";
import ChinaData from "../../../../public/JsonAnalyze/ChinaData.json"



export class AnalyzeMap extends DataShowMap{
     //向图层上添加中国Geojson
     AddGeoJson(){
           let myStyle = {
                 "color": "#49494b",
                 "weight": 3,
                 "opacity": 0.8,
           };

           $L.geoJSON(ChinaData.china,{
                style:myStyle,
           }).addTo(this.map);
     }
     //点击图层触发事件


}