import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function Radarchart(center) {

    const option = {

        tooltip: {},

        legend: {
            data: ["Exploitable", "Unmitigated"],
            textStyle: {
                color: "#E5E7EB",
                fontSize: 10
            },
            left: 10,
            bottom: 0,
            itemWidth: 10,
            itemHeight: 10
        },
        backgroundColor: '#1F2A37',
        radar: {
            center: ['50%', '50%'],
            radius: ["0%", "70%"],
            indicator: [{
                name: "High",
                max: 5
            }, {
                name: "Medium",
                max: 5
            }, {
                name: "Low",
                max: 5
            }, {
                name: "Critical",
                max: 5
            },

            ],


            axisLabel: {
                show: true,
                color: "#a3a3a3",
                fontSize: 10,
            },
            axisName: {
                color: "#bababa",
                fontSize: 10,

            },
            splitLine: {
                lineStyle: {
                    color: "transparent",

                }
            },
            splitArea: {
                show: false
            },


        },

        series: [{

            type: "radar",
            center: center,

            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 1.5, // Set the width of the lines
                    type: "solid",// Set the line type to solid

                }
            },
            data: [

                {
                    // value: [0.7, 2.2, 0.9],
                    value: [2, 5, 4],
                    name: "Exploitable",
                    itemStyle: {
                        // color: "#D62C72"
                        color: "#1570EF"
                    },
                    areaStyle: {
                        opacity: 0.3
                    }
                },
                {
                    value: [0.7, 2.2, 0.9],
                    name: "Unmitigated",
                    itemStyle: {
                        color: "#D62C72"
                    },
                    areaStyle: {
                        opacity: 0.3
                    }
                },
            ],
            colorBy: "data"
        }]
    }

    return (
        <ReactEcharts
            echarts={echarts}
            option={option}
            style={{ width: '100%', height: '100%', paddingTop: "5px", paddingBottom: "5px" }}
        />
    )
}
