(function(){
    var chartDom = document.querySelector('.bar .chart');
    var myChart = echarts.init(chartDom);
    window.addEventListener = function() {
      myChart.resize();
    }
    var option;
    option = {
      //点击阴影
      tooltip:{
        trigger:'axis',
        axisPointer:{
          type:"shadow"
        }
      },
        xAxis: {
            type: 'category',
            data: ['旅游行业','教育行业','游戏行业','医疗行业','电商行业','社交行业','金融行业'],
            // 修改刻度相关样式
            axisLabel:{
              color:"rgba(255,255,255,.6)",
              fontSize:'11'
            },
            // 不显示x坐标轴样式   
            axisLine:{
              show:false  
            }

        },
        yAxis: {
            type: 'value',
            axisLabel:{
              color:"rgba(255,255,255,.6)",
              fontSize:12
            },
            // 修改y轴坐标
            axisLine:{
              show:true,
              lineStyle:{
                color:"rgba(255,255,255,.1)",
                width:2
              }
            },
            splitLine:{
              color:"rgba(255,255,255,.6)"
            }
        },
        series: [
            {
                data: [500, 700, 1200, 800, 1500, 200, 900],
                type: 'bar',
                barWidth:'35%',
                itemStyle:{
                  //柱子圆角
                  barBorderRadius:5
                },
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ],
        gird:{
            top:'0%',
            left:'10px',
            right:'0%',
            bottom:'0%',
            containLabel:true
        }
    };
    
    option && myChart.setOption(option);
})();
(function(){
    var chartDom = document.querySelector('.bar2 .chart');
    var myChart = echarts.init(chartDom);
    window.addEventListener = function() {
        myChart.resize();
      }
    option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      option && myChart.setOption(option);
})();
// (function(){

// var chartDom = document.querySelector('.line .chart')
// var myChart = echarts.init(chartDom);
// var option;

// option = {
//   title: {
//     text: ''
//   },
//   tooltip: {
//     trigger: 'axis'
//   },
//   legend: {
//     data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
//   },
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true
//   },
//   toolbox: {
//     feature: {
//       saveAsImage: {}
//     }
//   },
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       name: 'Email',
//       type: 'line',
//       stack: 'Total',
//       data: [120, 132, 101, 134, 90, 230, 210]
//     },
//     {
//       name: 'Union Ads',
//       type: 'line',
//       stack: 'Total',
//       data: [220, 182, 191, 234, 290, 330, 310]
//     },
//     {
//       name: 'Video Ads',
//       type: 'line',
//       stack: 'Total',
//       data: [150, 232, 201, 154, 190, 330, 410]
//     },
//     {
//       name: 'Direct',
//       type: 'line',
//       stack: 'Total',
//       data: [320, 332, 301, 334, 390, 330, 320]
//     },
//     {
//       name: 'Search Engine',
//       type: 'line',
//       stack: 'Total',
//       data: [820, 932, 901, 934, 1290, 1330, 1320]
//     }
//   ]
// };

// option && myChart.setOption(option);

// })();
// (function(){

//   var chartDom = document.querySelector('.line2 .chart')
//   var myChart = echarts.init(chartDom);
//   var option;
  
//   option = {
//     xAxis: {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//       type: 'value'
//     },
//     series: [
//       {
//         data: [150, 230, 224, 218, 135, 147, 260],
//         type: 'line'
//       }
//     ]
//   };
  
//   option && myChart.setOption(option);
  
//   })();
//   (function(){

//     var chartDom = document.querySelector('.pie .chart')
//     var myChart = echarts.init(chartDom);
//     var option;
//     option = {
//       tooltip: {
//         trigger: 'item'
//       },
//       legend: {
//         top: '5%',
//         left: 'center'
//       },
//       series: [
//         {
//           name: 'Access From',
//           type: 'pie',
//           radius: ['40%', '70%'],
//           avoidLabelOverlap: false,
//           label: {
//             show: false,
//             position: 'center'
//           },
//           emphasis: {
//             label: {
//               show: true,
//               fontSize: '40',
//               fontWeight: 'bold'
//             }
//           },
//           labelLine: {
//             show: false
//           },
//           data: [
//             { value: 1048, name: 'Search Engine' },
//             { value: 735, name: 'Direct' },
//             { value: 580, name: 'Email' },
//             { value: 484, name: 'Union Ads' },
//             { value: 300, name: 'Video Ads' }
//           ]
//         }
//       ]
//     };
    
//     option && myChart.setOption(option);
    
//     })();

//   (function(){

//       var chartDom = document.querySelector('.pie2 .chart')
//       var myChart = echarts.init(chartDom,null);
//       var option;
//       option = {
//         legend: {
//           top: 'bottom'
//         },
//         toolbox: {
//           show: true,
//           feature: {
//             mark: { show: true },
//             dataView: { show: true, readOnly: false },
//             restore: { show: true },
//             saveAsImage: { show: true }
//           }
//         },
//         series: [
//           {
//             name: 'Nightingale Chart',
//             type: 'pie',
//             radius: ['10%', '10%'],
//             center: ['50%', '50%'],
//             roseType: 'area',
//             itemStyle: {
//               borderRadius: 8
//             },
//             data: [
//               { value: 40, name: 'rose 1' },
//               { value: 38, name: 'rose 2' },
//               { value: 32, name: 'rose 3' },
//               { value: 30, name: 'rose 4' },
//               { value: 28, name: 'rose 5' },
//               { value: 26, name: 'rose 6' },
//               { value: 22, name: 'rose 7' },
//               { value: 18, name: 'rose 8' }
//             ]
//           }
//         ]
//       };
      
//       option && myChart.setOption(option);
      
//       })();
  




