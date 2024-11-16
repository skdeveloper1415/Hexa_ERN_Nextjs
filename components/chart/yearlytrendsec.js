import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function YearlytrendSec() {
  const  option = {
    title:{
        left:'40%',
        text:"2021",
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
        data: ['Jan','Feb','Mar','Apr'],
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
            axisLabel:{
              show:false
            }
            
             
        
      },
      series: [
        {
          data: [20,80,20,80 ],
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
          type: 'line',
          data: [11,10,8,10],
          color:'#ff4081',
        },
          {
          type: 'line',
          data: [41,41,39,41],
          color:'#F2980E',
        },
         {
          type: 'line',
          data: [61,61,60,61],
          color:'#057A55',
        },
        {
          type: 'line',
          data: [79,79,77,78],
          color:'#1B458D',
        },
        
      ]
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
