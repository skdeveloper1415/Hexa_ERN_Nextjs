import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function Piechartitype({radius, center,label,data,color,borderRadius=15,legend,title}) {

    const options = {
      title: title,
      legend:legend,
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: radius,
            center:center,
            avoidLabelOverlap: false,
            padAngle: 4,
            itemStyle: {
              borderRadius: borderRadius
            },
            label: label,
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: 13,
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: data,
             color: color,
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