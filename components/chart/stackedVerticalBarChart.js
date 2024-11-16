

import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
// import { useTheme } from 'next-themes';

export default function StackedVerticalBarChart({ data, barColor, grid, barWidth, legends, barcolor, yAxisName, yAxisNameGap, yAxisNamePosition, name1, name2,
    xAxisName, name3, xAxisNameGap, xAxisNamePosition, name4 }) {
    // const { systemTheme, theme, setTheme } = useTheme();

    // const currentTheme = theme === 'system' ? systemTheme : theme;
    //   const DarkMode = useSelector((state) => state.global.DarkMode); 
    const options = {

        legend: legends,
        // grid:{
        //   top:"0%",
        //   left:"0"
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                let tar;
                if (params[1] && params[1].value !== '-') {
                    tar = params[1];
                } else {
                    tar = params[2];
                }
                return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        grid: {
            left: '2%',
            right: '0%',
            bottom: '10%',
            top: "13%",
            containLabel: true
        },
        xAxis: {

            name: xAxisName,
            nameLocation: xAxisNamePosition,
            nameGap: xAxisNameGap,
            type: 'category',
            data: data.labels,
            nameTextStyle: {
                color: '#344054',
            },
            label: {
                show: false, // show labels for all data points
                fontSize: 8
            },
            axisTick: { show: false },
            data: data.labels,
            nameTextStyle: {
                // color: currentTheme == "dark" ? "#ffff" : "#344054"
                color: "#344054",
            },
            axisLabel: {

                interval: 0,
                // color: currentTheme == "dark" ? "#C8CBD0" : '#344054',
                color: '#D1D5DB',
                fontSize: 10,
                fontWeight: 400

            }



        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 14,
            interval: 2,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    // color: currentTheme == "dark" ? "#ffffff26" : 
                    color: "#344054",
                }
            },
            axisLine: {
                show: true,
                color: "#D1D5DB",
            },
            name: yAxisName,
            nameLocation: yAxisNamePosition,
            nameGap: yAxisNameGap,
            nameTextStyle: {
                // color: currentTheme == "dark" ? "#ffff" : '#344054',
                color: '#344054',
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10,
                // color: currentTheme == "dark" ? "#C8CBD0" : '#344054',
                // color: '#344054',
            },

        },
        series: [
            {
                name: name1,
                type: 'bar',
                stack: 'Total',
                silent: true,
                itemStyle: {
                    // borderColor: 'transparent',
                    color: "#B24F0B",
                    // color: 'transparent'
                },
                // emphasis: {
                //     itemStyle: {
                //         borderColor: 'transparent',
                //         color: 'transparent'
                //     }
                // },
                label: {
                    show: false,
                    position: 'inside'
                },
                data: data.values1
            },
            {
                name: name2,
                type: 'bar',
                stack: 'Total',
                itemStyle: {
                    color: "#F2980E",
                    borderRadius: [12, 12, 0, 0],
                },
                label: {
                    show: false,
                    position: 'inside'
                },
                data: data.values2
            },
            {
                name: name3,
                type: 'bar',
                stack: 'Total',
                itemStyle: {
                    // borderColor: 'transparent',
                    color: "#B24F0B",
                    // color: 'transparent'
                },
                label: {
                    show: true,
                    position: 'inside'
                },
                data: data.values3
            },
            {
                name: name4,
                type: 'line',
                // stack: 'Total',
                // Symbol:'line',
                itemStyle: {
                    // borderColor: 'transparent',
                    color: "#F87403",
                    // color: 'transparent'
                },
                label: {
                    show: true,
                    position: 'inside'
                },
                data: data.linevalue
            }
        ]
    };


    return (
        <ReactEcharts
            echarts={echarts}
            option={options}
            // opts={{ renderer: 'svg' }}
            style={{ height: "100%", width: '100%' }}
        />
    );
}
