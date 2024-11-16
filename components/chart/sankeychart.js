import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const SankeyChart = () => {
  const option = {
    series: {
      type: "sankey",
      layout: "none",
      emphasis: {
        focus: "adjacency",
      },
      levels: [{
        depth: 0,
        itemStyle: {
            color: '#fbb4ae'
        },
        lineStyle: {
            color: 'source',
            opacity: 0.6
        }
    }, {
        depth: 1,
        itemStyle: {
            color: '#b3cde3'
        },
        lineStyle: {
            color: 'source',
            opacity: 0.6
        }
    },],
      nodeWidth: 15,
      left: "18%",
      bottom: "10%",
      top: "10%",
      right: "10%",
      data: [
        {
          name: "Known Threats\n1150",
          itemStyle: {
            color: "#577096",
            shadowColor: "#BDE2FF",
          },
          lineStyle: {
            color: 'source',
            opacity: 0.6
        },
          label: {
            show: true,
            position: "left",
            color: "#FFF",
          },
          labelLayout: {
            fontSize: "8px",
          },
        },
        {
          name: "(Threat Hunting)\nUnknown Threats\n25",
          itemStyle: {
            color: "#577096",
          },
          lineStyle: {
            color: 'source',
            opacity: 0.6
        },
          label: {
            show: true,
            position: "left",
            color: "#FFF",
          },
        },
        {
          name: "Medium\n 265",
          itemStyle: {
            color: "#1B458D",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
          label: {
            show: true,
            position: "right",
            color: "#FFF",
          },
        },
        {
          name: "Critical\n 115",
          itemStyle: {
            color: "#620F0F",
          },
          lineStyle: {
            color: 'source',
            opacity: 0.6
        },
          label: {
            show: true,
            position: "right",
            color: "#FFF",
          },
        },
        {
          name: "High\n455",
          itemStyle: {
            color: "#DB306F",
          },
          lineStyle: {
            color: 'source',
            opacity: 0.6
        },
          label: {
            show: true,
            position: "right",
            color: "#FFF",
          },
        },
        {
          name: "Firewall 250",
          itemStyle: {
            color: "#BDE2FF",
            borderColor: "",
          },
          lineStyle: {
            color: "source",
            opacity: 0.9,
          },
          label: {
            show: true,
            position: "left",
            color: "#FFF",
          },
        },
        {
          name: "Data 250",
          itemStyle: {
            color: "#FCE38B",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
          label: {
            show: true,
            position: "left",
            color: "#FFF",
          },
        },
        {
          name: "Endpoint 250",
          itemStyle: {
            color: "#D67309",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
          label: {
            show: true,
            position: "left",
            color: "#FFF",
          },
        },
        {
          name: "Network 275",
          itemStyle: {
            color: "#FDF6B2",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
          label: {
            show: true,
            position: "left",
            color: "#FFF",
          },
        },
        {
          name: "Cloud 250",
          itemStyle: {
            color: "#3696FB",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
          label: {
            show: true,
            position: "left",
            color: "#FFF",
          },
        },
        {
          name: "Low\n 140",
          itemStyle: {
            color: "#046C4E",
          },
          lineStyle: {
            color: "source",
            opacity: 0.6,
          },
          label: {
            show: true,
            position: "right",
            color: "#FFF",
          },
        },
      ],

      links: [
        {
          source: "(Threat Hunting)\nUnknown Threats\n25",
          target: "Data 250",
          value: 1,
        },
        {
          source: "Firewall 250",
          target: "Medium\n 265",
          value: 1,
        },
        {
          source: "Known Threats\n1150",
          target: "Firewall 250",
          value: 2,
        },
        {
          source: "Known Threats\n1150",
          target: "Data 250",
          value: 2,
        },
        {
          source: "Known Threats\n1150",
          target: "Endpoint 250",
          value: 2,
        },
        {
          source: "Known Threats\n1150",
          target: "Network 275",
          value: 2,
        },
        {
          source: "Known Threats\n1150",
          target: "Cloud 250",
          value: 2,
        },
        {
          source: "(Threat Hunting)\nUnknown Threats\n25",
          target: "Critical\n 115",
          value: 1,
        },
        {
          source: "(Threat Hunting)\nUnknown Threats\n25",
          target: "Low\n 140",
          value: 1,
        },
        {
          source: "Data 250",
          target: "Low\n 140",
          value: 1,
        },
        {
          source: "Endpoint 250",
          target: "Low\n 140",
          value: 1,
        },
        {
          source: "Network 275",
          target: "Low\n 140",
          value: 1,
        },
        {
          source: "Cloud 250",
          target: "Low\n 140",
          value: 1,
        },
        {
          source: "Cloud 250",
          target: "Critical\n 115",
          value: 1,
        },
        {
          source: "Network 275",
          target: "Critical\n 115",
          value: 1,
        },
        {
          source: "Endpoint 250",
          target: "Critical\n 115",
          value: 1,
        },
        {
          source: "Data 250",
          target: "Critical\n 115",
          value: 1,
        },
        {
          source: "Firewall 250",
          target: "Critical\n 115",
          value: 1,
        },
        {
          source: "Firewall 250",
          target: "Medium\n 265",
          value: 1,
        },
        {
          source: "Data 250",
          target: "Medium\n 265",
          value: 1,
        },
        {
          source: "Endpoint 250",
          target: "Medium\n 265",
          value: 1,
        },
        {
          source: "Network 275",
          target: "Medium\n 265",
          value: 1,
        },
        {
          source: "Cloud 250",
          target: "Medium\n 265",
          value: 1,
        },
        {
          source: "Firewall 250",
          target: "High\n455",
          value: 1,
        },
        {
          source: "Data 250",
          target: "High\n455",
          value: 1,
        },
        {
          source: "Endpoint 250",
          target: "High\n455",
          value: 1,
        },
        {
          source: "Network 275",
          target: "High\n455",
          value: 1,
        },
        {
          source: "Cloud 250",
          target: "High\n455",
          value: 1,
        },
        {
          source: "Medium\n 2656",
          target: "High\n455",
          value: 1,
        },
      ],
    },
  };
  return (
    <div>
      <ReactEcharts
        echarts={echarts}
        option={option}
        style={{ width: "100%", height: "250%" }}
      />
    </div>
  );
};

export default SankeyChart;
