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
        color: "rgba(255,255,255,.6)",
        fontSize: '8'
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
        color: "rgba(255,255,255,.6)",
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
          color: "rgba(255,255,255,.6)",
          fontSize: '11'
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
          color: "#fff",
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
        barWidth: 10,
        // 显示柱内标签
        label: {
          show: true,
          position: 'inside',
          // 标签内容格式
          formatter: "{c}%",
          fontSize: 5,
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
          borderWidth: 3
        },
        // 柱子间距
        barCategoryGap: 50,
        // 柱子宽度
        barWidth: 10,
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
(function () {

  var chartDom = document.querySelector('.line2 .chart')
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  option && myChart.setOption(option);

})();
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

      itemWidth: 10,

      itemHeight: 10,

      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],

      textStyle: {

        color: "rgba(255,255,255,.5)",

        fontSize: "12"

      }

    },

    series: [

      {

        name: "年龄分布",

        type: "pie",

        center: ["50%", "42%"],

        radius: ["40%", "60%"],

        color: [

          "#065aab",

          "#066eab",

          "#0682ab",

          "#0696ab",

          "#06a0ab",

          "#06b4ab",

          "#06c8ab",

          "#06dcab",

          "#06f0ab"

        ],

        label: { show: false },

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



  // 使用刚指定的配置项和数据显示图表。

  myChart.setOption(option);

  window.addEventListener("resize", function () {

    myChart.resize();

  });

})();

// 学习进度柱状图模块


(function () {

  var chartDom = document.querySelector('.pie2 .chart')
  var myChart = echarts.init(chartDom, null);
  var option;
  option = {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: ['10%', '10%'],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

})();





