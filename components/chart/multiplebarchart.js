import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function MultipleBarchart({ grid, legend, yAxisLabel, xAxisLabel, min, interval, max, barcolor1,barcolor2, borderRadius, label1,label2,axisline,name1,name2, data }) {
    const option = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: "category",
            data: data.label,
            splitLine:{
                show:false,
            },
            axisTick: {
                show: false
            },
            axisLine:{
                lineStyle:{
                color:'#374151'
                }

            },
            axisLabel: xAxisLabel,
        },
        yAxis: {
            type: "value",
            min: min,
            max: max,
            interval: interval,
            axisLabel: yAxisLabel,
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "#374151",
                },
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#374151'
                }
            },
        },
        series: [
            {
                name: name1,
                type: "bar",
                barGap: "10%",
                itemStyle: {
                    borderRadius: borderRadius
                },
                color: barcolor1,
                label: label1,
                data: data.val1

            },
            {
                name: name2,
                type: "bar",
                barGap: "10%",
                itemStyle: {
                    borderRadius: borderRadius
                },
                color: barcolor2,
                label: label2,
                data: data.val2
            }
        ]
    }
    return (
        <ReactEcharts
            echarts={echarts}
            option={option}
            style={{ width: '100%', height: '100%' }}
        />
    )
}
