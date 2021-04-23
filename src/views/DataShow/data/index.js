// import mapServicesJson from './mapServices.json'
// import { genUUID } from '../../../utils/common'
import mapServicesJsonTree from "./mapServicesTree.json"

// export const genMapServices = () => {
//   let flag = false;
//   let level1, level2, level3, dataSet;
//   const mapServicesTree = [];
//   let level1Obj = {}; let level2Obj = {}; let level3Obj = {}; let dataSetObj = {};

//   for (let service of mapServicesJson) {
//     const l1 = service['一级类'];
//     const l2 = service['二级类'];
//     const l3 = service['三级类'];
//     const ds = service['数据集名称'];
//     const dataName = service['英文名称'];

//     if (!flag) {
//       level1 = l1;
//       level2 = l2;
//       level3 = l3;
//       dataSet = ds;
//       dataSetObj = {
//         mid: genUUID(),
//         label: ds,
//         children: [{
//           mid: genUUID(),
//           label: dataName,
//           type: service['服务类型'],
//           service: {
//             url: service['地址'],
//             layers: "0",
//             format: 'image/png',
//             transparent: true
//           }
//         }]
//       };
//       level3Obj = {
//         mid: genUUID(),
//         label: l3,
//         children: []
//       }
//       level2Obj = {
//         mid: genUUID(),
//         label: l2,
//         children: []
//       }
//       level1Obj = {
//         mid: genUUID(),
//         label: l1,
//         children: []
//       }

//       flag = true;
//       continue;
//     }

//     if (ds !== dataSet) {
//       dataSet = ds;
//       level3Obj.children.push(dataSetObj);
//       dataSetObj = {
//         mid: genUUID(),
//         label: ds,
//         children: []
//       };
//     }
//     if (l3 !== level3) {
//       level3 = l3;
//       level2Obj.children.push(level3Obj);
//       level3Obj = {
//         mid: genUUID(),
//         label: l3,
//         children: []
//       };
//     }

//     if (l2 !== level2) {
//       level2 = l2;
//       level1Obj.children.push(level2Obj);
//       level2Obj = {
//         mid: genUUID(),
//         label: l2,
//         children: []
//       };
//     }

//     if (l1 !== level1) {
//       level1 = l1;
//       mapServicesTree.push(level1Obj);
//       level1Obj = {
//         mid: genUUID(),
//         label: l1,
//         children: []
//       };
//     }
//     dataSetObj.children.push({
//       mid: genUUID(),
//       label: dataName,
//       type: service['服务类型'],
//       service: {
//         url: service['地址'],
//         layers: "0",
//         format: 'image/png',
//         transparent: true
//       }
//     });
//   }
//   level3Obj.children.push(dataSetObj);
//   level2Obj.children.push(level3Obj);
//   level1Obj.children.push(level2Obj);

//   mapServicesTree.push(level1Obj);

//   console.log(JSON.stringify(mapServicesTree));
//   return mapServicesTree;
// }

export const getMapServices = () => {
  // return genMapServices();
  return mapServicesJsonTree;
}