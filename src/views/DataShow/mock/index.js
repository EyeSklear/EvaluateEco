const MAP_SERVICES = [{
  mid: '0',
  label: 'Layer',
  children: [
    {
    mid: '0-4',
    label: '全球30m数字高程数据产品(ASTER GDEM V2数据)',
    type: 'wms',
    service: {
      url:'http://172.21.252.151:6080/arcgis/services/10102Geomorphology/Global30mASTERGDEMDataV2/ImageServer/WMSServer',
      layers: "0",
      format: 'image/png',
      transparent: true
    }
  }
]
}, {
  mid: '0',
  label: 'Layer',
  children: [
    {
    mid: '0-4',
    label: '全球30m数字高程数据产品(ASTER GDEM V2数据)',
    type: 'wms',
    service: {
      url:'http://172.21.252.151:6080/arcgis/services/10102Geomorphology/Global30mASTERGDEMDataV2/ImageServer/WMSServer',
      layers: "0",
      format: 'image/png',
      transparent: true
    }
  }
]
}];

export const getDataShowMapRequest = () => {
  return MAP_SERVICES;
}

