import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
// import { useTheme } from 'next-themes';

export default function StackedHorizontalBarChart({ data, legend, grid }) {
    // const { systemTheme, theme, setTheme } = useTheme();

    // const currentTheme = theme === 'system' ? systemTheme : theme;
    const stackedHorizontalBarChart = {
        legend: legend,
        grid: grid,
        xAxis: {
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
                name: 'Patch Available',
                type: 'bar',
                stack: 'total',

                itemStyle: {
                    normal: {
                        color: '#D62C72',

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
                name: 'Patch  Unavailable',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    normal: {
                        color: '#F076B2',
                        borderRadius: [0, 8, 8, 0],
                    }
                },
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'insideRight',
                    formatter: '{c}%',
                    textStyle: {
                        // color: "#344054",
                        // fontSize: 10,
                        fontWeight: 400,
                        padding: 0
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.values2
            },
        ]
    };

    return (
        < >
            <ReactEcharts
                echarts={echarts}
                option={stackedHorizontalBarChart}
                // opts={{ renderer: 'svg' }}
                style={{ height: "90%", width: '100%' }}
            />
        </>
    );
}