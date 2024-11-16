"use client"
import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Stackbarwithgradient({data,minInterval,maxInterval,intevelValue,}) {
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
            color: "#a7acb3",
            fontSize: 10,
          },
        },
        grid: {
          left: 30,
          right: 20,
          bottom: 40,
          top: 5,
         
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
                show:true,
              color:  "#828891",
              fontSize: 10,
    
            },
            data: ["Acess", "Endpoint", "Network", "Data"],
    
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
            min: minInterval,
            max: maxInterval,
            interval: intevelValue,
            axisLabel: {
              color: "#828891",
              fontSize: 8,
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
            name: "False Negative",
            type: "bar",
            barWidth: 110,
            barGap:"40%",
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
            data: [11, 2, 5, 7],
          },
          {
            name: "False Positive",
            type: "bar",
            barWidth: 110,
            barGap:"40%",
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
            data: [6, 6, 4, 15],
          },
          
          
        ],
      };
  return (
 
        <ReactEcharts option={option} style={{ height: "100%", width: '100%' }}/>
   
  )
}
