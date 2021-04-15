// import * as echarts from "echarts";

export const getGreenData = (type) =>{

    var x_data = [];
    var series_data = [];
    var y_max,y_min,y_split;
    switch (type) {
        case 1 :
            x_data = ['杭州', '金华', '丽水', '湖州', '绍兴', '温州', '台州','衢州','舟山','宁波','嘉兴'];
            series_data = [80.57, 80.56, 80.49, 80.43, 80.17, 80.13, 79.98,79.69,79.63,78.96,77.7];
            y_max = 81;
            y_min = 76;
            y_split = 5;
            break;
        case 2 :
            return null;
        case 3 :
            return null;
        default :
            return null;

    }
    let option = {
        //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top:'20px',
            right: '0%',
            bottom: '0',
            width:'100%',
            height:'90%',
            // position: 'bottom',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: x_data,
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
                    fontSize: '15',
                },
            },
        }],
        yAxis: [{
            type: 'value',
            max : y_max,
            min : y_min,
            splitNumber : y_split,
            axisLabel: {
                //formatter: '{value} %'
                show:true,
                textStyle: {
                    color: "rgba(255,255,255,0.6)",
                    fontSize: '15',
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
                type: 'bar',
                data: series_data,
                barWidth:'35%', //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            color:'#CDCDCD'
                        },
                        color:'#2f89cf',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }

        ]
    };
    return option;
}

export const getMultiBarData = (type) =>{

    var y_data = [];
    var series_data = [];
    var x_max , x_min , x_split , color;

    switch (type) {
        case 11 :
            y_data = ['温州','丽水','湖州','舟山','杭州'];
            series_data  = [81.34,81.41,81.61,81.76,82.89];
            x_min = 81;
            x_max = 83;
            x_split = 2;
            color = '#eba0c3';
            break;
        case 12 :
            y_data = ['衢州','温州','湖州','金华','绍兴'];
            series_data  = [76.9,77.83,77.84,77.98,78.04];
            x_min = 76;
            x_max = 79;
            x_split = 3;
            color = '#a0a7e6';
            break;
        case 13 :
            y_data = ['舟山','湖州','衢州','金华','丽水'];
            series_data  = [90.28,90.49,91.21,91.85,94.57];
            x_min =85;
            x_max = 95;
            x_split = 2;
            color = '#FFA07A';
            break;
        case 14 :
            y_data = ['金华','衢州','杭州','台州','丽水'];
            series_data  = [76.21,76.88,77.05,77.93,79.83];
            x_min = 70;
            x_max = 85;
            x_split = 3;
            color = '#cbb0e3';
            break;
        case 15 :
            y_data = ['温州','宁波','嘉兴','杭州','舟山'];
            series_data  = [73.52,73.94,74.36,77.77,78.14];
            x_min = 70;
            x_max = 80;
            x_split = 2;
            color = '#66CDAA';
            break;
        case 16 :
            y_data = ['杭州','湖州','嘉兴','绍兴','宁波'];
            series_data  = [78.72,78.82,78.86,79.5,79.84];
            x_min = 78;
            x_max = 80;
            x_split = 2;
            color = '#7cb4cc';
            break;



    }
    return {
        //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            top: '10px',
            right: '0%',
            bottom: '0',
            width: '90%',
            height: '90%',
            // position: 'bottom',
            containLabel: true
        },
        yAxis: [{
            type: 'category',
            data: y_data,
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
                    fontSize: '15',
                },
            },
        }],
        xAxis: [{
            type: 'value',
            max: x_max,
            min: x_min,
            splitNumber: x_split,
            axisLabel: {
                //formatter: '{value} %'
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '15',
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
                type: 'bar',
                data: series_data,
                barWidth: '35%', //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'right',
                            color: '#CDCDCD'
                        },
                        color: color,
                        opacity: 1,
                        barBorderRadius: 3,
                    }
                }
            }
        ]
    };

}

export const getMultiPieData = (type) =>{
    let name,radius;
    let center_arr = [[],
                      ['10%', '45%'],
                      ['30%', '45%'],
                      ['50%', '45%'],
                      ['70%', '45%'],
                      ['90%', '45%']]
    radius = ['20%','75%'];


    switch (type) {
        case 11 :
            name = ['资源利用指数', '环境治理指数', '环境质量指数', '生态保护指数', '增长质量指数', '绿色生活指数'];

    }
  let  option = {
      // title: {
      //     text: '南丁格尔玫瑰图',
      //     subtext: '纯属虚构',
      //     left: 'center'
      // },
      // tooltip: {
      //     trigger: 'item',
      //     formatter: '{a} <br/>{b} : {c} ({d}%)'
      // },
      legend: {
          left: 'center',
          top: 'bottom',
          data: name,
          textStyle:{
              color:"#d2d2d2",
          }

      },
      series: [
          {
              name: '半径模式',
              type: 'pie',
              radius: radius,
              center: center_arr[1],
              roseType: 'radius',
              itemStyle: {
                  borderRadius: 5,
                  normal: {
                      label: {
                          show: true,
                          position: 'inner',
                          formatter: '{c} '
                      }
                  }
              },
              label: {
                  show: false
              },
              emphasis: {
                  label: {
                      show: false
                  }
              },
              data: [
                  {value: 82.89, name: '资源利用指数'},
                  {value: 74.9, name: '环境治理指数'},
                  {value: 87.68, name: '环境质量指数'},
                  {value: 77.05, name: '生态保护指数'},
                  {value: 77.77, name: '增长质量指数'},
                  {value: 78.72, name: '绿色生活指数'},

              ]
          },
          {
              name: '半径模式',
              type: 'pie',
              radius: radius,
              center: center_arr[2],
              roseType: 'radius',
              itemStyle: {
                  borderRadius: 5,
                  normal: {
                      label: {
                          show: true,
                          position: 'inner',
                          formatter: '{c} '
                      }
                  }
              },
              label: {
                  show: false
              },
              emphasis: {
                  label: {
                      show: false
                  }
              },
              data: [
                  {value: 82.89, name: '资源利用指数'},
                  {value: 74.9, name: '环境治理指数'},
                  {value: 87.68, name: '环境质量指数'},
                  {value: 77.05, name: '生态保护指数'},
                  {value: 77.77, name: '增长质量指数'},
                  {value: 78.72, name: '绿色生活指数'},

              ]
          },
          {
              name: '半径模式',
              type: 'pie',
              radius: radius,
              center: center_arr[3],
              roseType: 'radius',
              itemStyle: {
                  borderRadius: 5,
                  normal: {
                      label: {
                          show: true,
                          position: 'inner',
                          formatter: '{c} '
                      }
                  }
              },
              label: {
                  show: false
              },
              emphasis: {
                  label: {
                      show: false
                  }
              },
              data: [
                  {value: 82.89, name: '资源利用指数'},
                  {value: 74.9, name: '环境治理指数'},
                  {value: 87.68, name: '环境质量指数'},
                  {value: 77.05, name: '生态保护指数'},
                  {value: 77.77, name: '增长质量指数'},
                  {value: 78.72, name: '绿色生活指数'},

              ]
          },
          {
              name: '半径模式',
              type: 'pie',
              radius: radius,
              center: center_arr[4],
              roseType: 'radius',
              itemStyle: {
                  borderRadius: 5,
                  normal: {
                      label: {
                          show: true,
                          position: 'inner',
                          formatter: '{c} '
                      }
                  }
              },
              label: {
                  show: false
              },
              emphasis: {
                  label: {
                      show: false
                  }
              },
              data: [
                  {value: 82.89, name: '资源利用指数'},
                  {value: 74.9, name: '环境治理指数'},
                  {value: 87.68, name: '环境质量指数'},
                  {value: 77.05, name: '生态保护指数'},
                  {value: 77.77, name: '增长质量指数'},
                  {value: 78.72, name: '绿色生活指数'},

              ]
          },
          {
              name: '半径模式',
              type: 'pie',
              radius: radius,
              center: center_arr[5],
              roseType: 'radius',
              itemStyle: {
                  borderRadius: 5,
                  normal: {
                      label: {
                          show: true,
                          position: 'inner',
                          formatter: '{c} '
                      }
                  }
              },
              label: {
                  show: false
              },
              emphasis: {
                  label: {
                      show: false
                  }
              },
              data: [
                  {value: 82.89, name: '资源利用指数'},
                  {value: 74.9, name: '环境治理指数'},
                  {value: 87.68, name: '环境质量指数'},
                  {value: 77.05, name: '生态保护指数'},
                  {value: 77.77, name: '增长质量指数'},
                  {value: 78.72, name: '绿色生活指数'},

              ]
          },
      ]
  };
    return option;
}
