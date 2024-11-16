import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function BarChartWithGradiant({borderRadius=[12, 12, 0, 0], barWidth,grid,legend,yAxisLabel,xAxisLabel,min,interval,max,gradientColor,label, data,axisline,yAxisName,yAxisNameLocation,yAxisNameGap,nameTextStyle,name1}) {

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
            name: yAxisName,
            nameLocation: yAxisNameLocation,
            nameGap: yAxisNameGap,
            nameTextStyle: nameTextStyle,
            type: 'value',
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
            axisLine:axisline,

        },
        series: [
            {
                name:name1,
                data: data.values,
                type: 'bar',
                itemStyle: {
                    color: gradientColor,
                    borderRadius: borderRadius
                },
                label: label,
                barWidth:barWidth,
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