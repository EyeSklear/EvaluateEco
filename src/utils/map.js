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
      // zoom: 4,
      // center: [35.42, 102.05],
      zoom: 9,
      center: [34.71, 119.48],
      maxBounds: $L.latLngBounds($L.latLng(-90, -160), $L.latLng(90, 200)),
    });
    this.layers = [];
  }

  /* 
   * layerUrl: 新的底图url
   * isWMS: 是不是WMS服务，不是的话为WMTS服务
   * function: 根据新的底图url切换底图
   */
  toggleLayerShow(layerId, layerService, isShow, layerType) {
    if (isShow) {
      let layer;
      if (layerType === 'wms') {
        layer = $L.tileLayer.wms(layerService.url, {
          layers: layerService.layers,
          format: layerService.format,
          transparent: true,
          zIndex: 99
        });        
      }
      this.layers.push({
        id: layerId,
        layer: layer
      });
      layer.addTo(this.map);
    } else {            
      let index = 0;
      for (const layer of this.layers) {        
        if (layer.id === layerId) {
          this.map.removeLayer(layer.layer);
          this.layers.splice(index, 1);
          break;
        }
        index++;
      }
    }
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