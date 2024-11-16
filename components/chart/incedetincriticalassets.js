import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Incidentscriticalassets({data,color1,color2}) {
    const option = {
        tooltip: { trigger: "axis" },
        legend: {
          show: true,
          bottom: 0,
          left: 20,
          itemWidth: 8,
          itemHeight: 8,
          borderRadius: [4, 4, 0, 0],
          textStyle: {
            color: "#E5E7EB",
            fontSize: 12,
          },
        },
        grid: {
          left: 20,
          right: 10,
          bottom: 30,
          top: 0,
          containLabel: true,
        },
        xAxis: [
           {
            type: "value",
            // name: "No. of Tickets",
            nameLocation: "center",
            nameGap: 40,
            nameTextStyle: {
              color: "#6C768B",
              fontSize: 12,
            },
            min: 0,
            max: 6,
            interval: 2,
            axisLabel: {
              color: "#6C768B",
              fontSize: 10,
              formatter: "{value}",
            },
            axisLine: {
              show: true,
              lineStyle: { color:  "#374151" },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "#374151",
              },
            },
          }
        ],
        yAxis: [
         
          {
            type: "category",
          
            nameLocation: "center", 
            nameGap: 40,
            nameTextStyle: {
              color: "#84878D", 
              fontSize: 12,
    
            },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
              color:  "#fff",
              fontSize: 13,
    
            },
            data: [" Website", "Database \nServers", "Application\n Servers", "Customer\n Information"],
    
          },
        ],
    
        series: [
          {
            name: "Endstate",
            type: "bar",
            barWidth: 40,
            
            stack: "Ad",
            itemStyle: {
              color: color1,
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data:data.value1,
          },
    
          {
            name: "Unresolved",
            type: "bar",
            stack: "Ad",
            itemStyle: {
              borderRadius: [0, 10, 10, 0],
              color: color2,
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: data.value2,
          },
          
        ],
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
