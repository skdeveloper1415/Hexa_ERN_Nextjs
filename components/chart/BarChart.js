import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function BarChart({borderRadius, barWidth,grid,legend,yAxisLabel,xAxisLabel,min,interval,max,Barname,label, data, BarColor,yaxisLine }) {

    const options = {
        legend:legend,
        grid:grid,
        xAxis: {
            type: 'category',
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
            type: 'value',
            min: min,
            max: max,
            interval: interval,
            axisLabel: yAxisLabel,
            axisLine: yaxisLine,
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "#374151",
                },
            },

        },
        series: [
            {
                name:Barname,
                data: data.values,
                type: 'bar',
                itemStyle: {
                    color: BarColor,
                    borderRadius: borderRadius
                },
                label: label,
                barWidth:barWidth,
            },
        ]
    };

    return (
        <ReactEcharts
            echarts={echarts}
            option={options}
            style={{ width: '100%', height: '100%' }}
        />
    )
};