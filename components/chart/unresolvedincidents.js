import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function UnresolvedIncidients({data,color1,color2}) {
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
          left: 17,
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
            max: 3,
            interval: 1,
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
            data: [" Website", "Database \n\nServers", "Application\n\n Servers", "Customer \n\nInformation"],
    
          },
        ],
    
        series: [
          {
            name: "Unassigned",
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
            name: "Inprogress",
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
          {
            name: "Pending",
            type: "bar",
            itemStyle: {
                color: "#42536D",
            },
            data: [0, 0, 0, 0], 
            showSymbol: false,
            emphasis: { focus: "series" },
        },
          
          
        ],
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
