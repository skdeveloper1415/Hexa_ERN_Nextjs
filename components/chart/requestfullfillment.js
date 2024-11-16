"use client"
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

function Requestfullfillment({
    labelShow, data, grid, yAxisName, yAxisNameGap, yAxisNamePosition, areaStyle, color1, fillcolor, lineColor, lineType, xAxisName, xAxisNameGap, xAxisNamePosition, borderColor, name1, legend }) {
    const options = {
        tooltip: {
            trigger: 'axis'
        },
        legend: legend,
        xAxis: {

            name: "",

            nameLocation: "center",
            nameGap: xAxisNameGap,
            nameGap: 30,
            type: 'category',
            data: data.labels,
            nameTextStyle: {
                color: "#84878D",
                fontWeight: 600,
                fontSize: 12,
            },
            label: {
                show: true // show labels for all data points
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                  color: "#374151",
                },
          
            },
            axisLabel: {
                interval: 0,
                fontSize: 11,
                color: '#D1D5DB',
                fontWeight: 400
            },
        },
        grid: grid,
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: "#374151",

                }
            },
            min: 0,
            max: 100,
            interval: 20,
            name: "",
            nameLocation: "center",
            nameGap: xAxisNameGap,
            nameGap: 50,
            nameTextStyle: {
                color:"#E5E7EB",

                fontWeight: 400,
                fontSize: 8,
            },

            axisLabel: {
                color: "#E5E7EB",
                fontSize: 11,
                fontWeight: 400,
                formatter: '{value}',
            },
            axisLine: {
                show: true,
                lineStyle: {
                  color: "#374151",
                },
          
            },
        },
        series: [
            {
                name: name1,
                data: data.values,
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                symbol: 'circle',
                symbolSize: 10,
                smooth: true,
                label: {
                    show: labelShow,
                    fontSize: 12,
                    position: 'outside',
                    formatter: '{c}',
                    textStyle: {
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 400,
                        backgroundColor: "#162B55",
                        padding: [5, 10, 5, 10],
                        borderRadius: [2, 2, 2, 2],
                        // marginTop:"20px",
                    }
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(21 112 239 / 50%)'


                        },
                        {
                            offset: 1,
                            color: 'rgb(255 255 255 / 0%)'

                        }
                    ])
                },
                lineStyle: {
                    color: lineColor[0],
                    width: 2,
                    type: lineType,
                    itemStyle: {
                        // borderColor: borderColor,
                        borderWidth: 2
                    },
                },
                itemStyle: {
                    color: fillcolor[0],
                    borderWidth: 1,
                    // borderColor: borderColor,
                }

            },

        ]
    };
  return (
    <>
    <div className='h-[300px] w-[500px] bg-[#192331]' >
    <ReactEcharts
                    echarts={echarts}
                    option={options}
                    opts={{ renderer: 'svg' }}
                    style={{ width: '100%', height: '100%' }}
                />
    </div>
  
    </>
  )
}

export default Requestfullfillment