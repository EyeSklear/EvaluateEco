import mapServicesJson from './mapServices.json'
import level3Id from './level3.json'
import mapServicesTree from "./mapServicesTree.json"

// num传入的数字，n需要的字符长度
function PrefixInteger(num, n) {
  return (Array(n).join(0) + num).slice(-n);
}

// export const getMapServices = () => {
export const genMapServices = () => {
  const level3Map = {};
  for (let item of level3Id) {
    level3Map[item['三级类']] = item['编号'].toString();
  }

  let flag = false;
  let level1, level2, level3, dataSet;
  const mapServicesTree = [];
  let level1Obj = {}; let level2Obj = {}; let level3Obj = {}; let dataSetObj = {};

  let dsId = 1;
  let dataId = 1;
  for (let service of mapServicesJson) {
    const l1 = service['一级类']; const l1Id = l1.match(/（(.+?)）/)[1];
    const l2 = service['二级类']; const l2Id = l2.match(/（(.+?)）/)[1];
    const l3 = service['三级类']; const l3Id = level3Map[service['三级类']];
    const ds = service['数据集名称']; 
    const dataName = service['数据名称'];
    if (!flag) {
      level1 = l1;
      level2 = l2;
      level3 = l3;
      dataSet = ds;
      dataSetObj = {
        mid: l3Id + PrefixInteger(2, dsId) + PrefixInteger(2, dataId),
        label: ds,
        children: []
      };
      level3Obj = {
        mid: l3Id + PrefixInteger(2, dsId),
        label: l3,
        children: [dataSetObj]
      }
      level2Obj = {
        mid: l2Id,
        label: l2,
        children: []
      }
      level1Obj = {
        mid: l1Id,
        label: l1,
        children: []
      }

      flag = true;
      continue;
    }

    // if(l1 !== level1){
    //   level1 = l1;
    //   mapServicesTree.push(level1Obj);
    //   level1Obj = {
    //     mid: l1Id,
    //     label: l1,
    //     children: []
    //   };
    //   dsId = 0;dataId=0;
    // }
    // if(l2 !== level2){
    //   level2 = l2;
    //   level1Obj.children.push(level2Obj);
    //   level2Obj= {
    //     mid: l2Id,
    //     label: l2,
    //     children: []
    //   };
    //   dsId = 0;dataId=0;
    // }
    // if(l3 !== level3){
    //   level3 = l3;
    //   level2Obj.children.push(level3Obj);
    //   level3Obj= {
    //     mid: l3Id,
    //     label: l3,
    //     children: []
    //   };
    //   dsId = 0;dataId=0;
    // }
    // if(ds !== dataSet){
    //   dataSet = ds;
    //   level3Obj.children.push(dataSetObj);
    //   dsId++;
    //   dataSetObj= {
    //     mid: l3Id + PrefixInteger(2, dsId),
    //     label: ds,
    //     children: []
    //   };
    //   dataId=0;
    // }
    if(service['数据类型'] === 'wms'){
      dataId++;
      dataSetObj.children.push({
        mid: l3Id + PrefixInteger(2, dsId)+ PrefixInteger(2, dataId),
        label: dataName,
        type:service['数据类型'],
        service: {
          url:service['url'],
          layers: "0",
          format: 'image/png',
          transparent: true
        }
      })
    }

    if(ds !== dataSet){
      dataSet = ds;
      level3Obj.children.push(dataSetObj);
      dsId++;
      dataSetObj= {
        mid: l3Id + PrefixInteger(2, dsId),
        label: ds,
        children: []
      };
      dataId=0;
    }

    if(l3 !== level3){
      level3 = l3;
      level2Obj.children.push(level3Obj);
      level3Obj= {
        mid: l3Id,
        label: l3,
        children: []
      };
      dsId = 0;dataId=0;
    }

    if(l2 !== level2){
      level2 = l2;
      level1Obj.children.push(level2Obj);
      level2Obj= {
        mid: l2Id,
        label: l2,
        children: []
      };
      dsId = 0;dataId=0;
    }

    if(l1 !== level1){
      level1 = l1;
      mapServicesTree.push(level1Obj);
      level1Obj = {
        mid: l1Id,
        label: l1,
        children: []
      };
      dsId = 0;dataId=0;
    }
    
  }
  
  mapServicesTree.push(level1Obj);

  console.log(JSON.stringify(mapServicesTree));
  return mapServicesTree;
}

export const getMapServices = () => {
  genMapServices();
  return mapServicesTree;
}