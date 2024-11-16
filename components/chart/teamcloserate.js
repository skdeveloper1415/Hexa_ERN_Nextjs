import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Teamcloserate({data}) {
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
          left: 30,
          right: 0,
          bottom: 50,
          top: 20,
         
        },
        xAxis: [
          {
            type: "category",
            // name: "Ages", // Add the common title for the x-axis here
            nameLocation: "center", // Set the position of the x-axis name to the center
            nameGap: 40, // Adjust the gap between the x-axis name and the axis
            nameTextStyle: {
              color: "#84878D", // Set title text color
              fontSize: 12, // Set title font size
    
            },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
             
              fontSize: 12,
    
            },
            data: ["Member1", "Member2", "Member3", "Member4","Member5"],
    
          },
        ],
        yAxis: [
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
            max: 25,
            interval: 5,
            axisLabel: {
              color:'#E5E7EB',
              fontSize: 12,
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
          },
        ],
    
        series: [
          {
            name: "Assigned",
            type: "bar",
            // barWidth: 116,
            
            stack: "Ad",
            itemStyle: {
              color: "#991B4A",
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: [10, 2, 10, 9.5,11],
          },
          {
            name: "Closed",
            type: "bar",
            // barWidth: 116,
            stack: "Ad",
            itemStyle: {
              borderRadius: [10, 10, 0, 0],
              color: "#F076B2",
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: [6, 9, 5, 6,10],
          },
          
          
        ],
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
