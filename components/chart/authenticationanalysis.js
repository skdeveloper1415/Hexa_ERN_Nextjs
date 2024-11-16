import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
// import { useTheme } from 'next-themes';

export default function Authenticationanalysis({ data, legend, grid,color,color2,name1,name2 }) {
    // const { systemTheme, theme, setTheme } = useTheme();

    // const currentTheme = theme === 'system' ? systemTheme : theme;
    const authenticationanalysis = {
        legend: legend,
        grid: grid,
        xAxis: {
            min:0,
            max:60,
            show: true,
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    // color: currentTheme == "dark" ? "#ffffff26" : null,
                    color: "#344054",
                },
                // show: currentTheme == "dark" ? false : true
            },

            nameTextStyle: {
                color: "#344054",
                // color: currentTheme == "dark" ? "#ffff" : "#344054"
            },
            axisLabel: {
                // interval: 0,
                // color: currentTheme == "dark" ? "#C8CBD0" : '#344054',
                fontSize: 8,
                fontWeight: 400,
                // color: "#C8CBD0",

            }
        },
        yAxis: [{
            maxInterval: 2,
            type: 'category',
            data: data.labels,

            lineStyle: {
                type: 'dashed',
                // color: currentTheme == "dark" ? "#ffffff26" : null,
                color: "#fff",
            },
           

            axisTick: {
                show: false,
            },

            axisLabel: {
                // inside: true,
                // color: '#fff',
                // padding:30
                // textStyle: {
                //     color: "#4F4F4F",
                //     fontSize: 10,
                //     fontWeight: 400
                // }

            },
            nameTextStyle: {
                color: '#D1D5DB'
                // color: currentTheme == "dark" ? "#ffff" : '#344054',
            },
            axisLabel: {
                color: '#D1D5DB',
                // color: currentTheme == "dark" ? "#C8CBD0" : '#344054',
                fontSize: 10
            },
            // z: 10
        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff",
            },
        },
        ],
        series: [
            {
                name: name1,
                type: 'bar',
                stack: 'total',

                itemStyle: {
                    normal: {
                        color: color,

                    }
                },
                label: {
                    show: false,
                    position: 'insideRight',
                    formatter: '{c}%',
                    padding: 8,
                    textStyle: {
                        color: "black",
                        fontSize: 10,
                        fontWeight: 500
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.values1
            },
            {
                name: name2,
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    normal: {
                        color: color2,
                        borderRadius: [0, 8, 8, 0],
                    }
                },
                avoidLabelOverlap: false,
                // label: {
                //     show: false,
                //     position: 'insideRight',
                //     formatter: '{c}%',
                //     textStyle: {
                //         // color: "#344054",
                //         // fontSize: 10,
                //         fontWeight: 400,
                //         padding: 0
                //     }
                // },
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'right',
                    color: "#FFFF",
                    fontWeight: 500,
                    fontSize: 10,
                  },
                // label: {
                //     show: true,
                //     color: "#D1D5DB",
                //     position:'right',
                //      formatter: function(params) {
                //     var characters = ['4 incident', '1 incident', '2 incident', '4 incident', '1 incident', '1 incident'];
                  
                //     return characters[params.dataIndex];
                //   }
                //   },
                data: data.values2
            },
        ]
    };

    return (
        < >
            <ReactEcharts
                echarts={echarts}
                option={authenticationanalysis}
                opts={{ renderer: 'svg' }}
                style={{ width: '100%', height: '100%' }}
            />
        </>
    );
}