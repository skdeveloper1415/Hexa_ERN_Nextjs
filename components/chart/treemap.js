import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function TreeMapChart({data,borderColor}) {

    const options = {
        tooltip: {
          show: true, // Set to true to display the tooltip
          trigger: "item", // Trigger the tooltip when hovering over an item
          formatter: "{b}: {c}", // Customize the tooltip content, {b} represents the name, and {c} represents the value
          // You can customize other tooltip properties as needed
        },
        legend: {
          show: false,
          bottom: "0",
          left: "",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#222222",
          },
        },
        series: [
          {
            type: "treemap",
            width: "100%",
            height: "100%",
            itemStyle: {
              borderColor: borderColor,
              borderWidth: 2
            },
            breadcrumb: {
              show: false,
            },
            label: {
              show: true,
              position: "insideBottomLeft", // Set the label position inside the node
             //  align: "center",
             //  overflow: "breakAll",
              
             //  rich: {
             //    larger: {
             //      fontSize: 12,
             //      color: "#ffffff",
             //      lineHeight: 15
             //    },
             //    normal: {
             //      fontSize: 12,
             //      color: "#363A44",
             //      fontWeight: 600,
                  
             //    },
             //  },
             //  formatter: "\n{larger|{b}}",
            },
            data: data,
          },
        ],
      };
    

    return (
        <ReactEcharts
            echarts={echarts}
            option={options}
            style={{ width: '100%', height: '100%' }}
        />
    )
};