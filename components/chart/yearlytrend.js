import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Yearlytrend() {
  const  option = {
    // legend: {
    //   show: true,
    //   bottom: 0,
    //   left: 20,
    //   top:200,
    //   itemWidth: 8,
    //   itemHeight: 8,
    //   borderRadius: [4, 4, 0, 0],
    //   textStyle: {
    //     color: "#E5E7EB",
    //     fontSize: 12,
    //   },
    // },
    title:{
      left:'center',
      text:"2020",
      textStyle: {
        color: '#E5E7EB', // Set the color to white
        fontSize:10
      }
    },
    grid: {     
      top: "12%",     
      left: "8%",    
      right: "5%",  
      bottom: "10%",  
      },  
        xAxis: {
          type: 'category',
          data: ['Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
          axisTick:{
            show:false
          },
        },
        yAxis: {
          type: 'value',
          min:0,
          max:80,
          interval:20,
          splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  color: "#374151",
                },
              },
            axisLine:{
              show:true
            },
           axisLabel:{
            color:"#E5E7EB"
           }
        },
        series: [
          {
           
            data: [40, 80, 60, 40, 45, 80, 25,80,20,80,20,80 ],
            type: 'bar',
           
             itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [
                  { offset: 0, color: '#1570EF' },     // Start color
                  { offset: 1, color: '#162B55' }      // End color
                ]
              ),
              borderRadius: [8, 8, 0, 0]
            },
              
          },
          {
            // name: "Affected Users",
            type: 'line',
            data: [10, 10, 9, 8, 7, 10, 11,10,11,10,8,10],
            color:'#ff4081',
          },
            {
              // name: "Median Mean Time Between Failures (MTBF)",
            type: 'line',
            data: [40, 40, 39, 38, 38, 40, 41,40,41,41,39,41],
            color:'#F2980E',
          },
           {
            // name: "Median Mean Time to Acknowledge (MTTA)",
            type: 'line',
            data: [60, 60, 59, 58, 58, 60, 61,60,61,61,60,61],
            color:'#057A55',
          },
          {
            // name: "Median Mean Time to Respond (MTTR)",
            type: 'line',
            data: [78, 78, 77, 76, 76, 78, 79,78,79,79,77,78],
            color:'#1B458D',
          },
          {
            // name: "Incident Count",
            type: 'line',
            data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0],
            color:'#1B458D',
          },
          
        ]
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
