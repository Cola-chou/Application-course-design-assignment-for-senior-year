//bar chart
(function () {
  var chartDom = document.querySelector('.bar .chart');
  var myChart = echarts.init(chartDom);
  window.addEventListener = function () {
    myChart.resize();
  }
  var option;
  option = {
    //点击阴影
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: "shadow"
      }
    },
    xAxis: {
      type: 'category',
      data: ['旅游行业', '教育行业', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
      // 修改刻度相关样式
      axisLabel: {
        color: "#4c9bfd",
        fontSize: '11'
      },
      // 不显示x坐标轴样式   
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },

    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: "#4c9bfd",
        fontSize: 12
      },
      // 修改y轴坐标
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 2
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.6)' // 分割线颜色
        }
      }
    },
    series: [
      {
        data: [500, 700, 1200, 800, 1500, 200, 900],
        type: 'bar',
        barWidth: '35%',
        itemStyle: {
          //柱子圆角
          barBorderRadius: 5
        },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ],
    gird: {
      // top:'0%',
      // left:'10px', 
      // right:'0%',
      // bottom:'0%',
      // containLabel:true
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '0%',
      containLabel: true
    }
  };

  option && myChart.setOption(option);
})();
//bar2 chart 
(function () {
  var chartDom = document.querySelector('.bar2 .chart');
  var myChart = echarts.init(chartDom);
  // 颜色数组
  var myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448',
    '#8b78f6'
  ]
  window.addEventListener = function () {
    myChart.resize();
  }
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '22%',
      right: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      // 隐藏x轴相关信息
      show: false,
      // type: 'value',
      // boundaryGap: [0, 0.01]
    },
    yAxis: [
      {
        // 隐藏y轴刻度
        axisTick: {
          show: false
        },
        // 隐藏y轴线
        axisLine: {
          show: false
        },
        // 修改刻度相关样式
        axisLabel: {
          color: "#4c9bfd",
          fontSize: '13'
        },
        type: 'category',
        // 数据翻转
        inverse: true,
        data: ['HTML', 'CSS3', 'javascript', 'VUE', 'NODE']
      },
      {
        inverse: true,
        data: [702, 350, 610, 793, 664],
        // 隐藏y轴线
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        // 修改刻度相关样式
        axisLabel: {
          color: "#4c9bfd",
          fontSize: 13
        },
      }
    ],
    series: [
      {
        yAxisIndex: 0,
        // name: '2011',
        type: 'bar',

        data: [70, 34, 60, 78, 69],
        itemStyle: {
          barBorderRadius: 20,
          // params 柱子对象
          color: function (params) {
            return myColor[params.dataIndex]
          }
        },
        // 柱子间距
        barCategoryGap: 50,
        // 柱子宽度
        barWidth: 15,
        // 显示柱内标签
        label: {
          show: true,
          position: 'inside',
          // 标签内容格式
          formatter: "{c}%",
          fontSize: 12,
          color: '#fff'
        }
      },
      {
        yAxisIndex: 1,
        // name: '2012',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          barBorderRadius: 15,
          borderWidth: 1
        },
        // 柱子间距
        barCategoryGap: 50,
        // 柱子宽度
        barWidth: 17,
        // 显示柱内标签
      }
    ]
  };
  option && myChart.setOption(option);
})();
// line chart 
(function () {
  // 年份数据
  var yearData = [
    {
      year: '2020', //年份
      data: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230,
          210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213,
          180, 200, 180, 79]
      ]
    },
    {
      year: '2021', //年份
      data: [
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64,
          76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64,
          43, 60, 19, 34]
      ]
    },
  ]
  var chartDom = document.querySelector('.line .chart')
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    color: ['#00f2f1', '#ed3f35'],
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // 若series 对象中存在name值，则legend中不需要data
      // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%'
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      // 显示边框
      show: true,
      // 边框颜色
      borderColor: '#012f4a',
      // 包含刻度文字在内
      containLabel: true
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 坐标轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.6)' // 分割线颜色
        }
      }
    },
    // color:[],
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        // stack: 'Total',
        // data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        data: yearData[0].data[0],
        smooth: true // 折线变平滑
      },
      {
        name: '新增游客',
        type: 'line',
        // stack: 'Total',
        // data: [40, 64, 191, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        data: yearData[0].data[1],
        smooth: true
      }
    ]
  };
  //点击a标签切换功能
  $('.line h2').on('click', 'a', function () {
    // alert(1);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    option && myChart.setOption(option);
  })
  option && myChart.setOption(option);
})();
// line2 chart
(function () {
  var chartDom = document.querySelector('.line2 .chart')
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },

    legend: {
      top: "0%",
      textStyle: {
        color: "#4c9bfd",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true

    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "#4c9bfd",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
        data: [
          "01", "02", "03", "04", "05", "06", "07", "08", "09",
          "11", "12", "13", "14", "15", "16", "17", "18", "19",
          "20", "21", "22", "23", "24", "25", "26", "27", "28",
          "29", "30"

        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "#4c9bfd",
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "播放量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                {
                  offset: 0,
                  // 起始渐变色
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  // 结束渐变色
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30,
          40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30, 60,
          20, 40, 20, 40
        ]
      },
      {
        name: "转发量",
        type: "line",
        smooth: true,
        // 拐点 及其样式
        symbol: "circle",
        symbolSize: 5,
        // 鼠标指向才显示拐点
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [50, 30, 50, 60, 10, 50, 30, 50, 60, 40, 60, 40, 80, 30,
          50, 60, 10, 50, 30, 70, 20, 50, 10, 40, 50, 30, 70, 20, 50,
          10, 40
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// pie chart 
(function () {

  var chartDom = document.querySelector('.pie .chart')
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }

    },

    legend: {
      top: "90%",
      itemWidth: 15,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "#4c9bfd",
        fontSize: "12"
      }
    },

    series: [
      {
        name: "年龄分布",
        type: "pie",
        //  圆在容器中的位置
        center: ["50%", "42%"],
        //  饼形图 内圆和外圆的半径
        radius: ["40%", "60%"],
        color: [
          "#065aab", "#066eab", "#0682ab", "#0696ab",
          "#06a0ab", "#06b4ab", "#06c8ab", "#06dcab",
          "#06f0ab"
        ],
        // 图形上的文字
        label: { show: false },
        // 连接标签文字和饼图的线
        labelLine: { show: false },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// pie2 chart 
(function () {

  var chartDom = document.querySelector('.pie2 .chart')
  var myChart = echarts.init(chartDom, null);
  var option;
  option = {
    legend: {
      top: "90%",
      itemWidth: 15,
      itemHeight: 10,
      textStyle: {
        color: "#4c9bfd",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff", "#60cda0", "#ed8884", "#ff9f7f",
      "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        // 显示模式 radius半径模式 areas面积模式
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "深圳" },
          { value: 42, name: "广东" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          color: '#4c9bfd',
          fontSize: 11
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
// 模拟地图&&飞行路线
// 引入china.js 中国地图
