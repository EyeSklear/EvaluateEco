import "leaflet/dist/leaflet.css"
import $L from "leaflet";

const createMap = (divId, options) => {
  let map = $L.map(divId, options);
  return map;
};

const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options);
  tileLayer.addTo(map);
  return tileLayer;
};


/*------------------------
* 生态文明数据展示系统——地图
--------------------------*/
export class DataShowMap {
  constructor(mapContainer) {
    const osm = $L.tileLayer(
      '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© OpenStreetMap contributors',
      }
    );
    this.map = createMap(mapContainer, {
      layers: osm,
      minZoom: 4,
      zoom: 4,
      center: [35.42, 102.05],
      maxBounds:$L.latLngBounds($L.latLng(-90, -160), $L.latLng(90, 200)),
    });
  }

  /* 
   * newBaseMap: 新的底图url
   * isWMS: 是不是WMS服务，不是的话为WMTS服务
   * function: 根据新的底图url切换底图
   */
  changeBaseMap(newBaseMap, isWMS = true) {
    console.log(isWMS);

  }

  // 组件销毁时调用，否则可能导致刷新空白等错误
  destroy() {
    this.map && this.map.remove();
  }
}

export default {
  createMap,
  createTileLayer
};