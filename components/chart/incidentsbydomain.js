import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Incidentsbydomain() {
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
          right: 20,
          bottom: 35,
          top: 20,
          containLabel: true,
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
            data: ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", 'Sat'],
    
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
            max: 90,
            interval: 10,
            axisLabel: {
              color: "#E5E7EB",
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
          },
        ],
    
        series: [
          {
            name: "Indentity",
            type: "bar",
           
            
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
            data: [25, 10, 10, 25,25,25,25],
          },
    
          {
            name: "Endpoint",
            type: "bar",
            stack: "Ad",
            itemStyle: {
              borderRadius: [0, 0, 0, 0],
              color: "#D62C72",
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: [15, 20, 20, 15,20,20,20],
          },
          
           {
            name: "Network",
            type: "bar",
            stack: "Ad",
            itemStyle: {
              borderRadius: [0, 0, 0, 0],
              color: "#E74D94",
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: [15, 20, 22, 15,20,20,40],
          },
    
          {
            name: "Data",
            type: "bar",
            stack: "Ad",
            itemStyle: {
              borderRadius: [8, 8, 0, 0],
              color: "#F076B2",
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: [9, 9, 7, 7,4,4,3],
          },
          
          
        ],
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
