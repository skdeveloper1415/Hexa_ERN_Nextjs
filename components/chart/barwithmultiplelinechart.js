import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Barwithmultiplelinechart({title,bardata,bardataXaxis,grid,yaxisName,minintervelLeft, maxintervelLeft, leftintervel,  minintervelRight, maxintervelRight, rightintervel,yaxisNameright,axisLabelLeft,axisLabelRight,splitLineleft,splitLineRight,xaxisLabel,legend}) {
  const  option = {
    legend:legend,
    title:{
        left:'40%',
        text:title,
        textStyle: {
          color: '#fff', 
          fontSize:10
        }
      },
     
       grid: grid,  
      xAxis: {
        type: 'category',
        data: bardataXaxis,
         axisTick:{
              show:false
            },
            
            axisLabel: xaxisLabel,
      },
      yAxis:[
        {
            type: 'value',
              name: yaxisName, 
             nameLocation: "center",
             nameGap: 25, 
             axisLabel: axisLabelLeft, 
             nameTextStyle: {
               color: "#84878D", 
               fontSize: 8, 
     
             },
             
             
            min:minintervelLeft,
            max:maxintervelLeft,
            interval:leftintervel,
            splitLine: splitLineleft,
                // axisLabel: {
                //     formatter: '{value}'
                //   }
                 
            
          },
           {
        type: 'value',
          name: yaxisNameright, 
         nameLocation: "center",
         nameGap: 20, 
         nameTextStyle: {
           color: "#84878D", 
           fontSize: 8, 
 
         },
        min: minintervelRight,
        max: maxintervelRight,
        interval:rightintervel,
        splitLine: splitLineRight,
        axisLabel: axisLabelRight,  
            
      }
      ]
      
      
      
      ,
      series: [
        {
          data: bardata,
          
          type: 'bar',
          name:"Incident Count",
           itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [
                { offset: 0, color: '#1570EF' },     
                { offset: 1, color: '#162B55' }     
              ]
            ),
            borderRadius: [6, 6, 0, 0]
          },
            
        },
        {
          type: 'line',
          name:'Median Mean Time to Acknowledge (MTTA)',
          data: [11,10,8,10,8,11,10,9,11,10,11,9],
          color:'#ff4081',
        },
          {
          type: 'line',
          name:"Median Mean Time Between Failures (MTBF)",
          data: [41,41,39,41,40,39,41,40,39,40,41,40],
          color:'#F2980E',
        },
         {
          type: 'line',
          name:"Median Mean Time to Resolve (MTTR)",
          data: [61,61,60,61,60,61,60,61,59,60,61,59],
          color:'#057A55',
        },
        {
          type: 'line',
          name:"Incident Count",

          data: [79,79,77,78,77,79,78,77,79,77,78,77],
          color:'#1B458D',
        },
        
      ]
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
