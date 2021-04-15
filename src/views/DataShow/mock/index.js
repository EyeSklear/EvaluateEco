const MAP_SERVICES = [{
  mid: '0',
  label: 'Layer',
  children: [{
    mid: '0-1',
    label: '连云港港口工程规划-方案1',
    type: 'wms',
    service: {
      url:'http://localhost:8888/geoserver/NHRI/wms',
      layers: "NHRI:1",
      format: 'image/png',
      transparent: true
    }
  },{
    mid: '0-2',
    label: '连云港港口工程规划-方案2',
    type: 'wms',
    service: {
      url:'http://localhost:8888/geoserver/NHRI/wms',
      layers: "NHRI:1",
      format: 'image/png',
      transparent: true
    }
  },{
    mid: '0-3',
    label: '连云港港口工程规划-方案3',
    type: 'wms',
    service: {
      url:'http://localhost:8888/geoserver/NHRI/wms',
      layers: "NHRI:1",
      format: 'image/png',
      transparent: true
    }
  }]
}];

export const getDataShowMapRequest = () => {
  return MAP_SERVICES;
}

