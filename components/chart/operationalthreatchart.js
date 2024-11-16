import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function OperationalThreatChart() {
  const  option = {
    title:{
      left:'center',
      text:"2020",
      textStyle: {
        color: '#fff', // Set the color to white
        fontSize:10
      }
    },
    legend:{
      show: true,
      bottom: "10",
      left: "20",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        // color: currentTheme == "dark" ? '#ffff' : '#344054',
        color: "#E5E7EB",
        fontSize: 10,
      },
    },
    grid: {     
      top: "10%",     
      left: "8%",    
      right: "5%",  
      bottom: "20%",  
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
          max:2000,
          interval:200,
          splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  color: "#374151",
                },
              },
            axisLine:{
              show:true
            } 
        },
        series: [
          {
            name:"Non Critical",
            data: [1500,1400, 1200, 1200, 1800, 1300, 1500,1200,1300,1400,1600,1200 ],
            type: 'bar',
            stack:"total",
             itemStyle: {
              color: "#1861DD",
              borderRadius: [0, 0, 0, 0]
            },
              
          },
          {
            name:"Critical",
            data: [200, 500, 500, 600, 850, 800, 450,800,400,800,280,600 ],
            type: 'bar',
            stack:"total",

             itemStyle: {
              color: "#90D1FF",
              borderRadius: [10, 10, 0, 0]
            },
              
          },
          {
            name:"Detection  Rate ",
            type: 'line',
            data: [200, 500, 500, 600, 850, 800, 450,800,400,800,280,600],
            color:'#ff4081',
          },
            {
            name:"Prevention Rate",
            type: 'line',
            data: [1300,1400, 1200, 1500, 1500, 1400, 1700,1200,1300,1600,1600,1200 ],
            color:'#F2980E',
          },
        //    {
        //     type: 'line',
        //     data: [60, 60, 59, 58, 58, 60, 61,60,61,61,60,61],
        //     color:'#057A55',
        //   },
        //   {
        //     type: 'line',
        //     data: [78, 78, 77, 76, 76, 78, 79,78,79,79,77,78],
        //     color:'#1B458D',
        //   },
          
        ]
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
