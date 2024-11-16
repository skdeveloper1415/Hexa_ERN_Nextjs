import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function HorizontalBarChartWithGradiant({ grid,legend,yAxisLabel,xAxisLabel,min,interval,max,gradientColor,label, data }) {

    const options = {
        legend:{legend},
        grid:grid,
        yAxis: {
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
            axisLabel: yAxisLabel,
        },
        xAxis: {
            type: 'value',
            min: min,
            max: max,
            interval: interval,
            axisLabel: xAxisLabel,
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
                data: data.values,
                type: 'bar',
                itemStyle: {
                    color: gradientColor,
                    borderRadius: [0, 8, 8, 0]
                },
                label: label,
            }
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