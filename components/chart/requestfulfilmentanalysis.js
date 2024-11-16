import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function Requestfulfilmentanalysis({data,gradientColor,gradientColor1}) {
   const option = {
        legend: {
          data: ["Request", "Fulfilled", "Avg. Fulfilment Time (In Hrs)"],
          bottom: "0%",
          left:"3%",
          width: "70%",
           itemHeight: 10,
          itemWidth: 10,
          itemGap: 8,
          textStyle: {
            color: "#6C768B",
            fontSize: 12,
          },
        },
        grid: {
            top: '5%',
            bottom: '10%',
            left: "3%",
            right: "3%",
        //   bottom: "10%",
        //   top:"3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          axisTick: {
            show: false
          },
          data: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]
        },
        yAxis: [{
          type: "value",
          min:0,
          max:60,
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#4B5563",
            }
          },
           axisLine: {
            show: true
          },
        },
        {
          type: "value",
          min:0,
          max:9,
          interval:1,
          splitLine: {
            show:false,
            lineStyle: {
              show:false,
              // type: "dashed",
              // color: "#4B5563",
            }
          },
           axisLine: {
            show: false,
          },
        },
      ],
        series: [
          {
          name: "Request",
          type: "bar",
           barGap: "0%",
            color:gradientColor,
           label: {
                          show: true,
                          position: 'inside top',
                          padding: [8,0,0,2],
                          textStyle: {
                              color: "white",
                              fontSize: 10,
                              fontWeight: 500
                          }
                      },
          data: data.val1
         
        }, {
          name: "Fulfilled",
          type: "bar",
           barGap: "0%",
            color:gradientColor1,
            label: {
                          show: true,
                          position: 'inside top',
                         padding: [8,0,0,2],
                          textStyle: {
                              color: "white",
                              fontSize: 10,
                              fontWeight: 500
                          }
                      },
          data: data.val2
        }, {
          name: "Avg. Fulfilment Time (In Hrs)",
          type: "line",
          symbol: 'none',
           barGap: "0%",
            color:['#768FB5'],
          data: data.val3
        }]
      }
  return (
    <ReactEcharts
        echarts={echarts}
        option={option}
        style={{ width: '100%', height: '100%' }}
    />
  )
}
