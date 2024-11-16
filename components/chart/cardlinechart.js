import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Cardlinechart({Gradientcolor,linecolor}) {
    const option = {      
        legend: { show: false },       
        tooltip: {         
          formatter: function (params) {        
            return '$76,2M ';             }     
            },      
            grid: {     
              top: "0%",     
              left: "3%",    
              right: "3%",  
              bottom: "75%",  
              containLabel: true, 
              
            },  
              
              xAxis: {            
                type: "category",      
                boundaryGap: false,   
                splitLine: {          
                  show: false,        
                  lineStyle: { color: "rgba(255,255,255,0.14)" },             }, 
                  axisLine: { show: false },  
                  axisTick: { show: false },
                   axisLabel: { show: false },  
                  data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],   
                  },  
                  
                  
                  yAxis: {          
                    type: "value",  
                    splitLine: { show: false },     
                    axisLabel: { show: false },         },  
                    color: "#96BF0D",  
                    
                    series: [
                      { data: [50, 100, 60, 90, 70, 70, 70,70,110,60,110,70],       
                    name: "Approved", 
                    type: "line",
                    symbolSize: 0, 
                    symbol: "circle", 
                    itemStyle: { color: "#FACA15" }, 
                    lineStyle: { color: linecolor, width: 2 }, 
                    areaStyle: {
                      color: Gradientcolor},},
                        
                        
                        
                        
                          ,],  
                          };
  return (
    <div>
         <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
    </div>
  )
}

