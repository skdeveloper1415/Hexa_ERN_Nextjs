import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function LineChartWithGradiant({ grid, legend, yAxisLabel, xAxisLabel, min, interval, max, name, areaStyle, label, symbolSize,yAxisName,yAxisNameLocation,yAxisNameGap,nameTextStyle,lineStyle,itemStyle, data ,smoothLine=true,name2,linecolor1,linecolor2,lineshow=true,xAxiscolor="#374151"}) {

    const options = {
        tooltip: { trigger: "axis" },
        legend: legend,
        grid: grid,
        xAxis: [
            {
                type: "category",
                splitLine: { show: false },
                axisTick: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: {
                     
                        color:xAxiscolor
                    },
                },

                axisLabel: xAxisLabel,
                data: data.label,
               
            },
        
        ],
        yAxis: [
            {
                name: yAxisName,
                nameLocation: yAxisNameLocation,
                nameGap: yAxisNameGap,
                nameTextStyle: nameTextStyle,
                type: "value",
                min: min,
                max: max,
                interval: interval,
                axisLabel: yAxisLabel,
                axisLine: {
                    show: lineshow,
                    lineStyle: {
                        color: "#374151",
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: "#374151",
                    },
                },
            },
            {
                type: "value",
                type: "value",
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        series: [
            {
                name: name,
                data: data.value1,
                type: "line",
                smooth: smoothLine,
                symbol: "circle", // Set the symbol to circle
                symbolSize: symbolSize, // Adjust the symbol size
                itemStyle: itemStyle,
                lineStyle: lineStyle,
                label: label,
                areaStyle: areaStyle,
                color: linecolor1,
                lineStyle: {
                    width: 2 // Adjust the thickness here
                  }
            },
            {
                name: name2,
                data: data.value2,
                type: "line",
                smooth: smoothLine,
                symbol: "circle", // Set the symbol to circle
                symbolSize: symbolSize, // Adjust the symbol size
                itemStyle: itemStyle,
                lineStyle: lineStyle,
                label: {
                    show: true,
                    fontSize: 10,
                    color: "white",
                    position: "bottom",
                    formatter: "{c}",
                    backgroundColor: "#162B55",
                    padding: [4, 4, 4, 4],
                },
                color: linecolor2,
                lineStyle: {
                    width: 2 // Adjust the thickness here
                },
            },
        ],
    };

    return (
        <ReactEcharts
            echarts={echarts}
            option={options}
            style={{ width: '100%', height: '100%' }}
        />
    )
};