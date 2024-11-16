import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

function pieChart2({ radius, center, label, data, color }) {


    const options = {

        // color: ["#BDE2FF", "#1570EF",],
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     top: '34%',
        //     left: '90%',
        //     right: '25%',
        //     bottom: '20%',
        //     // orient: 'vertical',

        //     itemWidth: 6,
        //     itemHeight: 44,
        //     borderRadius: 10,
        //     textStyle: {
        //         color: "#fff",
        //         fontSize: 12
        //     },
        // },
        series: [
            {

                type: 'pie',
                radius: radius,
                center: center,

                // radius: ['0%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 14,
                    borderColor: '#1F2A37',
                    borderWidth: 5
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                // data: [
                //     { value: 948, name: "Application \n\n70%" },

                //     { value: 450, name: "OS\n\n30%" }
                // ]

                data: data,
                color: color,
            }
        ]
    };
    return (
        <>
            <ReactEcharts
                echarts={echarts}
                option={options}
                // opts={{ renderer: 'svg' }}
                style={{ width: '100%', height: '100%' }}
            />
        </>
    )
}

export default pieChart2
