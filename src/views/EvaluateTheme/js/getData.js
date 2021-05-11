import themeData from "../../../../public/theme_data/themeData.json"
// import bar from "element-ui/packages/scrollbar/src/bar";

export const getProvince=(province) =>{

    switch (province) {
        case "ZheJiang" :
            return themeData.ZheJiang;

        case "AnHui" :
            return themeData.AnHui;
        case "FuJian" :
             return themeData.FuJian;
        default :
            return null;
    }

}

export const getGreenData = (province) =>{


    let greenData = getProvince(province).GreenData;
    let option = {
        //  backgroundColor: "#00265f",
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        grid: {
            left: "0%",
            top:"20px",
            right: "0%",
            bottom: "0",
            width:"100%",
            height:"90%",
            // position: "bottom",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: greenData.x_data,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2,
                    type: "solid"
                },
            },

            axisTick: {
                show: false,
            },
            axisLabel:  {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "15",
                },
            },
        }],
        yAxis: [{
            type: "value",
            max : greenData.y_max,
            min : greenData.y_min,
            splitNumber : greenData.y_split,
            axisLabel: {
                //formatter: "{value} %"
                show:true,
                textStyle: {
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "15",
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 2,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [
            {
                type: "bar",
                data: greenData.series_data,
                barWidth:"35%", //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "top",
                            color:"#CDCDCD"
                        },
                        color:"#2f89cf",
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }

        ]
    };
    return option;
}

export const getMultiBarData = (province , num ) =>{


    let multiBarData = getProvince(province).MultiBarData;
    let barData ;

    switch (num) {
        case 1 :
            barData = multiBarData[0];
            break;
        case 2 :
            barData = multiBarData[1];
            break;
        case 3 :
            barData = multiBarData[2];
            break;
        case 4 :
            barData = multiBarData[3];
            break;
        case 5 :
            barData = multiBarData[4];
            break;
        case 6 :
            barData = multiBarData[5];
            break;
        default :
            return null;
    }


    return {
        //  backgroundColor: "#00265f",
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        grid: {
            left: "2%",
            top: "10px",
            right: "0%",
            bottom: "0",
            width: "90%",
            height: "90%",
            // position: "bottom",
            containLabel: true
        },
        yAxis: [{
            type: "category",
            data: barData.y_data,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "15",
                },
            },
        }],
        xAxis: [{
            type: "value",
            max: barData.x_max,
            min: barData.x_min,
            splitNumber: barData.x_split,
            axisLabel: {
                //formatter: "{value} %"
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "15",
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 2,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [
            {
                type: "bar",
                data: barData.series_data,
                barWidth: "35%", //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "right",
                            color: "#CDCDCD"
                        },
                        color: barData.color,
                        opacity: 1,
                        barBorderRadius: 3,
                    }
                }
            }
        ]
    };

}

export const getMultiPieData = (province , num) =>{

    let radius = ["35%","100%"];
    let name = ["资源利用指数", "环境治理指数", "环境质量指数", "生态保护指数", "增长质量指数", "绿色生活指数"];
    let multiPieData = getProvince(province).MultiPieData;
    let singlePieData;


    switch (num) {
        case 1 :
            singlePieData = multiPieData[0];
            break;
        case 2 :
            singlePieData = multiPieData[1];
            break;
        case 3 :
            singlePieData = multiPieData[2];
            break;
        case 4 :
            singlePieData = multiPieData[3];
            break;
        case 5 :
            singlePieData = multiPieData[4];
            break;
        case "legend" :
            return {

                legend: {
                    left: "center",
                    top: "bottom",
                    data: name,
                    textStyle:{
                        color:"#d2d2d2",
                    }
                },

                series: [
                    {
                        name: name,
                        type: "pie",
                        data: [
                            {name: "资源利用指数"},
                            {name: "环境治理指数"},
                            {name: "环境质量指数"},
                            {name: "生态保护指数"},
                            {name: "增长质量指数"},
                            {name: "绿色生活指数"},
                        ]
                    },
                ]
            };
    }

  let  option = {

      // legend: {
      //     left: "center",
      //     top: "bottom",
      //     data: name,
      //     textStyle:{
      //         color:"#d2d2d2",
      //     }
      // },
      tooltip: {
          trigger: "axis",
          axisPointer: {
              type: "shadow"
          }
      },
      title: {
          text: singlePieData.name,
          left: 'center',
          top:"center",
          textStyle :{
              color:"rgba(255,255,255,.6)",
              fontWeight:"normal"
          }

      },
      series: [
          {
              name: name,
              type: "pie",
              radius: radius,
              center: "center",
              top:"3%",
              roseType: "radius",
              itemStyle: {
                  borderRadius: 5,
                  normal: {
                      label: {
                          show: true,
                          position: "inner",
                          formatter: "{c} "
                      }
                  }
              },
              label: {
                  show:false
              },
              emphasis: {
                  label: {
                      show: true
                  }
              },
              data: [
                  {value: singlePieData.value[0], name: "资源利用指数"},
                  {value: singlePieData.value[1], name: "环境治理指数"},
                  {value: singlePieData.value[2], name: "环境质量指数"},
                  {value: singlePieData.value[3], name: "生态保护指数"},
                  {value: singlePieData.value[4], name: "增长质量指数"},
                  {value: singlePieData.value[5], name: "绿色生活指数"},
              ]
          },
      ]
  };


    return option;
}

export const getSingleBarData = () =>{

    let y_data,series_data,x_max,x_min,x_split;
    y_data = ["合肥","淮北","亳州","宿州","蚌埠","阜阳","淮南","滁州","六安","马鞍山","芜湖","宣城","铜陵","池州","安庆","黄山"]
    series_data  = ["84.52","87.18","88.46","84.06","88.58","83.76","80.35","91.08","92.51","87.57","89.57","91.55","90.58","93.25","87.41","95.72"];
    x_min = 80;
    x_max = 100;
    x_split = 2;

    let option  = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "0",
            width: "85%",
            height: "98%",
            containLabel: true
        },
        yAxis: {
            type: 'category',
            data: y_data,
            axisTick :{
                show:false
            },
            axisLabel: {
                interval: 0,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "15",
                },
            },
        },
        xAxis: {
            type: "value",
            max: x_max,
            min: x_min,
            splitNumber: x_split,
            axisLabel: {
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "15",
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 2,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            }
        },
        series: [{
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: "right",
                        color: "#CDCDCD"
                    }
                }
            },
            data: series_data,
            type: 'scatter',
        }]
    }
    return option;
}

export const getHomeTable = () =>{

    return themeData.Home;

}
