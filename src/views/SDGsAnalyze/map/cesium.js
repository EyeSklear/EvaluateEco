const Cesium = require('cesium/')

export class DataShowCesium {
  constructor(container) {
    this.layers = []
    this.viewer = new Cesium.Viewer(container, {
      selectionIndicator: false,
      homeButton: false,
      sceneModePicker: false,//是否显示3d 2d切换
      baseLayerPicker: false,//是否显示图层选择控件
      geocoder: false,//是否显示地名查找控件
      navigationHelpButton: false,
      infoBox: false,
      navigationInstructionsInitiallyVisible: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      allowTextureFilterAnisotropic: false,
      contextOptions: {
        webgl: {
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
          failIfMajorPerformanceCaveat: false,
          depth: true,
          stencil: false,
          anialias: false
        }
      },
      targetFrameRate: 60,
      resolutionScale: 1.0,
      orderIndependentTranslucency: false, //false可以去除透明背景时的大气层黑圈
      automaticallyTrackDataSourceClocks: false,
      dataSources: null,
      clock: null,
      terrainShadows: Cesium.ShadowMode.DISABLED,

      // 天地图矢量图层
      imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=050f735ae3f59ad37aacb56801a0bb10",
        layer: "tdtVecBasicLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        show: false
      }),
      // 世界地形
      // terrainProvider: new Cesium.createWorldTerrain({
      //   requestWaterMask: true,
      //   requestVertexNormals: true
      // }),
      // terrainExaggeration: 1.5
    });

    //取消版权信息
    this.viewer._cesiumWidget._creditContainer.style.display = "none"
    // 不显示星空且背景透明
    this.viewer.scene.skyBox.show = false;
    this.viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);

    // 天地图矢量注记图层
    this.viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
      url: "http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=050f735ae3f59ad37aacb56801a0bb10",
      layer: "tdtAnnoLayer",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible"
    }));

    // 设置home在中国
    const ChinaRectangle = Cesium.Rectangle.fromDegrees(73.0, 3.0, 135.0, 53.0);
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = ChinaRectangle;
    this.viewer.camera.flyHome(2);
  }

  toggleLayerShow = (layerId, layerService, isShow) => {
    if (isShow) {
      const layer = this.viewer.imageryLayers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({
        url: layerService.url,
        layers: layerService.layers,
        parameters: {
          service: 'WMS',
          format: layerService.format,
          transparent: true
        }
      }));
      this.layers.push({
        id: layerId,
        layer: layer
      });
    } else {
      let index = 0;
      for (const layer of this.layers) {
        if (layer.id === layerId) {
          this.viewer.imageryLayers.remove(layer.layer, false);
          this.layers.splice(index, 1);
          break;
        }
        index++;
      }
    }
  }

  /* 
   * sceneModeType: 要切换的地图模式
   * function: 异步切换地图模型，返回Promise对象，切换完成触发resolve（切换到3d模式会将视角移动到中国）
   */
  changeSceneMode = (sceneModeType) => {
    if (sceneModeType === '3D') {
      this.viewer.scene.morphTo3D();
    } else if (sceneModeType === '2D') {
      this.viewer.scene.morphTo2D();
    } else {
      this.viewer.scene.morphToColumbusView();
    }
    return new Promise((resolve) => {
      // 判断是否完成模式切换
      const intervalId = setInterval(() => {
        if (this.viewer.scene.mode !== Cesium.SceneMode.MORPHING) {
          window.clearInterval(intervalId);
          // 切换到3d模式会将视角移动到中国
          if (sceneModeType === '3D') {
            this.viewer.camera.flyHome(2);
            setTimeout(resolve, 2000);
          } else {
            resolve();
          }
        }
      }, 500);
    });
  }

  destroy = () => {
    this.viewer.destroy();
    this.viewer = undefined;
  }
}