import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function HorizontalBarchartNew({gradientColor,data,label,grid,title}) {
    const option = {
        title:{
           text: title,
           top: 'bottom',
           left: 'center',
           textStyle: {
           color: '#fff', // Set the color to white
           fontSize: 12 // Set the font size to 18 pixels
         }
         },
        grid:grid,
       xAxis: {
         min:0,
         max:222,
         type: 'value',
        splitLine: { show: true,
          lineStyle:{
            type: "dashed",       
            color:'#374151'
            } },
         axisLabel:{show:false}
       },
       yAxis: {
        
          type: 'category',
         data: data.label,
         axisTick: { show: false },
         axisLine: { show: false },
         axisLabel: {
          textStyle: {
              color: '#D1D5DB', // Change color here
              fontSize:14
          }
      }
         
       },
       series: [
         {
           data: [222, 88, 136, 222, 88, 88],
           type: 'bar',
           itemStyle: {
                   borderRadius: [10, 10, 10, 10],
                   color: gradientColor
                   
                 },
                 
                  label: label ,
         }
       ]
     };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
