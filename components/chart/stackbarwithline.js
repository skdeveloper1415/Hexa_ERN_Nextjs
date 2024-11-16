
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";




export default function StackBarwithLine({ legend,grid,symbolType,symbolSizedata,lineData,splitLineTrue,splitLineFalse,axisTick,axisLineFalse,axisLineTrue,intevelValue,maxInterval,minInterval,yminInterval,ymaxInterval,yintevelValue,axisLabelLeft,axisLabelRight,axisLabelX,barColor1,barColor2,lineitemstyle,lineitemstyle1,name1,name2,name3,}) {

    const stackbarwithline = {
    tooltip: { trigger: "axis" },
    legend:legend,
    // legend: {
    //   show: true,
    //   bottom: "bottom",
    //   left: "left",
    //   itemWidth: 10,
    //   itemHeight: 10,
    //   borderRadius: [4, 4, 0, 0],
    //   data:[
    //     { name: 'Critical Vuln. Mitigated',},
    //     { name: 'Critical Vuln. Unmitigated',},
    //     { name: 'Risk Reduction Rate', icon: 'image:///assets/images/line-legend.svg' },
    //   ],
    //   textStyle: {
    //     color:"#6C768B",
    //     fontSize: 12,
    //   },
    // },
    // grid: {
    //   left: "6%",
    //   right: "6%",
    //   bottom: "15%",
    //   top: "3%",
    //   containLabel: true,
    // },
    grid:grid,
    xAxis: [
      {
        type: "category",
        splitLine: splitLineFalse,
        axisTick: axisTick,
        axisLine: axisLineFalse,
        axisLabel: axisLabelX,
        data: ["Jan \n", "Feb \n", "Mar \n", "Apr \n", "May \n", "Jun \n", "Jul \n", "Aug \n", "Sep \n", "Oct \n","Nov \n", "Dec \n",],

    
      },
      {
        
        splitLine: splitLineFalse,
        axisTick: axisTick,
        axisLine: axisLineFalse,
    
      },
    ],
    yAxis: [
      {
    
        axisTick: axisTick,
        min:yminInterval,
        max: ymaxInterval,
        interval: yintevelValue,
        axisLabel:axisLabelLeft,
      
        axisLine: axisLineTrue,
        splitLine: splitLineTrue,
      },
      {
      
        axisTick: axisTick,
        axisLine: axisLineFalse,
        min: minInterval,
        max: maxInterval,
        interval: intevelValue,
        axisLabel:axisLabelRight,
      
        splitLine: splitLineTrue,
      },
    ],
    series: [
      {
        name: name1,
        type: "bar",
        barWidth: 30,
        barGap: "10%",
        stack: "Ad",
        itemStyle: barColor1,
        emphasis: { focus: "series" },
        data: [42, 55, 48, 60,70,70,60,82,60,76,48,60],
      },

      {
        name: name2,
        type: "bar",
        barGap: "10%",
        stack: "Ad",
        itemStyle: barColor2,
     
        emphasis: { focus: "series" },
        data: [10, 10, 17, 10,10,8,5,0,3,4,7,6],
      },

      {
        name: name3,
        type: "line",
        yAxisIndex: 1,
        symbol: symbolType,
        smooth: false,
        symbolSize: symbolSizedata,
        itemStyle: lineitemstyle,
        lineStyle: lineitemstyle1,
        // label:{
        //     show: true,
        //     formatter: '{@[n]} %',
        //     color:'#24262D',
        //     fontSize:10,
        //     backgroundColor: "#EEF8F4",
        //     padding: [4, 4, 4, 4]
        // },
        // itemStyle: { color: "#363A44" },
        data: lineData,
      },
    ],
  };

    return (
        <ReactEcharts
            echarts={echarts}
            option={stackbarwithline}
            style={{ width: '100%', height: '100%' }}
        />
    )
};