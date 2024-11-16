import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function VerticalBarChart({ data, xAxisName, xAxisNamePosition, xAxisNameGap, yAxisName, yAxisNamePosition, yAxisNameGap, legend, grid, color1, color2, color3, color4, color5, lenght,minvalue,intervalvalue,maxvalue }) {

    const myarray = [
  
        {
          type: 'bar',
          itemStyle: {
            borderRadius: [6, 6, 0, 0],
          },
        //   label: {
        //     show: true,
        //     position: 'insideTop',
        //     color:"#fff",
        //     fontSize:9,
        //   },
          color: color1,
        
          barGap: "10%"
        },
        {
          type: 'bar',
          barGap: "10%",
          itemStyle: {
            borderRadius: [6, 6, 0, 0],
          },
        //   label: {
        //     show: true,
        //     position: 'insideTop',
        //     color:"#fff",
        //     fontSize:9,
        //   },
          color: color2
        },
        {
          type: 'bar',
          barGap: "10%",
          itemStyle: {
            borderRadius: [6, 6, 0, 0],
          },
        //   label: {
        //     show: true,
        //     position: 'insideTop',
        //     color:"#fff",
        //     fontSize:9,
        //   },
          color: color3
        },
      ]

    const multiplebarChart = {
        legend: legend,
        grid: grid,
        tooltip: {},
        dataset: {
          dimensions: data.labels,
          source: data.values
        },
        xAxis: {
          type: 'category',
          axisTick: { show: false },
          labels: {
            // show: true,
            // position: 'outside',
            formatter: '{c}'
          },
          axisTick: { show: false },
          nameTextStyle: {
            color:"#344054"
          },
          axisLabel: {
            interval: 0,
            color:'#828891',
            ontSize: 11,
            fontWeight: 400
    
          },
    
          name: xAxisName,
          nameLocation: xAxisNamePosition,
          nameGap: xAxisNameGap,
          axisLine: {
            lineStyle: {
              color:'#374151',
            }
          },
         
        },
    
        yAxis: {
            type: 'value',
            name: "Frequency",
            nameLocation: "center", 
            nameGap: 20, 
            nameTextStyle: {
              color:"#E5E7EB",
              fontSize: 8, 
            },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color:"#374151",
          }
          },
          
        //   name: yAxisName,
        //   nameLocation: yAxisNamePosition,
        //   nameGap: yAxisNameGap,
          axisLabel: {
            color: '#e5e7eb',
            fontSize: 8
          },
        //   nameTextStyle: {
        //     color:'#344054',
        //   },
          axisLine: {
            lineStyle: {
              color:'#374151',
            }
          },
        

             min:minvalue,
                interval:intervalvalue,
                max:maxvalue,
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: myarray
      };
    return (
        <ReactEcharts
            option={multiplebarChart}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}