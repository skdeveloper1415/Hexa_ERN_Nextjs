import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "echarts";
import { useTheme } from "next-themes";

export const DrillDownChart = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const drillDownCharts = {
    series: [
      {
        type: "tree",
        symbol: "rect",
        emphasis: false,
        data: [
          {
            name: (() => {
              return "FRN Count\n100";
            })(),
            
            label: {
              show: true,
              position: [40, 0],
              padding: 20,
              color: "#FFF",
              fontSize: "14",
              align:"center",
              fontWeight: "500",
              lineHeight: 20,
              emphasis: false,
              backgroundColor: {
                image: '/assets/images/drilldownchart/drilldown-label1-bg.png'
              },
              width:100,
              height:70,
              verticalAlign: "middle",
              borderRadius: 8,             
            },
            itemStyle: {
              color: "#309DC1",
              borderColor: "#256D85",
              emphasis: false,
              borderRadius: 3,
            },
            children: [
              {
                lineStyle: {
                  width: 20,
                  color: "#1570EF",
                },
                label: {
                    show: true,
                  fontSize: "14",
                  fontWeight: "500",
                  lineHeight: 20,
                  align:'center',
                  color: "#FFFF",
                  backgroundColor: {
                    image: '/assets/images/drilldownchart/drilldown-label2-bg.png'
                  },
                  width:70,
                  height:40,
                  borderRadius: 8,
                  padding: 20,
                },
                itemStyle: {
                  color: "#4E456D",
                  borderColor: "#312C49",
                  borderRadius: 8,
                },
                name: "Current\n60",
                children: [
                  {
                    name: (() => {
                      return "Category1\n20";
                    })(),
                    lineStyle: {
                      width: 20,
                      color: "#213554",
                    },
                    label: {
                        show: true,
                        position: [10, -30],
                  fontSize: "14",
                  fontWeight: "500",
                  lineHeight: 20,
                  align: "center",
                  color: "#D1D5DB",
                  backgroundColor: {
                    image: '/assets/images/drilldownchart/drilldown-label3-bg.png'
                  },
                  width:80,
                  height:40,
                  borderRadius: 8,
                  padding: 20,
                    },
                    itemStyle: {
                      color: "#F7F7FB",
                      borderColor: "#E0E0EF",
                    },
                  },

                  {
                    name: "Category 2\n40",
                    children: [
                      {
                        name: (() => {
                          return "Basic Maintenance Of\nInternal Connections\n10";
                        })(),
                        lineStyle: {
                          width: 20,
                          color: "#213554",
                        },
                        label: {
                            show: true,
                            position: [10, -30],
                      fontSize: "14",
                      fontWeight: "500",
                      lineHeight: 20,
                      align: "center",
                      color: "#D1D5DB",
                      backgroundColor: {
                        image: '/assets/images/drilldownchart/drilldown-label3-bg.png'
                      },
                      width:150,
                      height:40,
                      borderRadius: 8,
                      padding: 20,
                        },
                        itemStyle: {
                          color: "#F7F7FB",
                          borderColor: "#E0E0EF",
                        },
                      },
    
                      {
                        name: "Internal Connections\n20",
                        children: [
                          {
                            name: (() => {
                              return "Certified\n10";
                            })(),
                            lineStyle: {
                              width: 20,
                              color: "#213554",
                            },
                            label: {
                                show: true,
                                position: [10, -30],
                          fontSize: "14",
                          fontWeight: "500",
                          lineHeight: 20,
                          align: "center",
                          color: "#D1D5DB",
                          backgroundColor: {
                            image: '/assets/images/drilldownchart/drilldown-label3-bg.png'
                          },
                          width:80,
                          height:40,
                          borderRadius: 8,
                          padding: 20,
                            },
                            itemStyle: {
                              color: "#F7F7FB",
                              borderColor: "#E0E0EF",
                            },
                          },
        
                          {
                            name: (() => {
                              return "Cancelled\n10";
                            })(),
                            lineStyle: {
                              width: 20,
                              color: "#213554",
                            },
                            label: {
                                show: true,
                                position: [10, -30],
                          fontSize: "14",
                          fontWeight: "500",
                          lineHeight: 20,
                          align: "center",
                          color: "#D1D5DB",
                          backgroundColor: {
                            image: '/assets/images/drilldownchart/drilldown-label3-bg.png'
                          },
                          width:80,
                          height:40,
                          borderRadius: 8,
                          padding: 20,
                            },
                            itemStyle: {
                              color: "#F7F7FB",
                              borderColor: "#E0E0EF",
                            },
                          },
                        ],
                        lineStyle: {
                          width: 20,
                          color: "#1570EF",
                        },
                        label: {
                        show: true,
                        fontSize: "14",
                        fontWeight: "500",
                        lineHeight: 20,
                        align:'center',
                        color: "#FFFF",
                        backgroundColor: {
                          image: '/assets/images/drilldownchart/drilldown-label2-bg.png'
                        },
                        width:150,
                        height:40,
                        borderRadius: 8,
                        padding: 20,
                        },
                        itemStyle: {
                          color: "#F7F7FB",
                          borderColor: "#E0E0EF",
                        },
                      },
    
                      {
                        name: (() => {
                          return "Managed Internal\nBroadband Services\n10";
                        })(),
                        lineStyle: {
                          width: 20,
                          color: "#213554",
                        },
                        label: {
                            show: true,
                            position: [10, -30],
                      fontSize: "14",
                      fontWeight: "500",
                      lineHeight: 20,
                      align: "center",
                      color: "#D1D5DB",
                      backgroundColor: {
                        image: '/assets/images/drilldownchart/drilldown-label3-bg.png'
                      },
                      width:150,
                      height:40,
                      borderRadius: 8,
                      padding: 20,
                        },
                        itemStyle: {
                          color: "#F7F7FB",
                          borderColor: "#E0E0EF",
                        },
                      },
                    ],
                    lineStyle: {
                      width: 20,
                      color: "#1570EF",
                    },
                    label: {
                    show: true,
                    fontSize: "14",
                    fontWeight: "500",
                    lineHeight: 20,
                    align:'center',
                    color: "#FFFF",
                    backgroundColor: {
                      image: '/assets/images/drilldownchart/drilldown-label2-bg.png'
                    },
                    width:80,
                    height:40,
                    borderRadius: 8,
                    padding: 20,
                    },
                    itemStyle: {
                      color: "#F7F7FB",
                      borderColor: "#E0E0EF",
                    },
                  },
                ],
              },        
              {
                name: (() => {
                  return "Original\n40";
                })(),
                lineStyle: {
                  width: 20,
                  color: "#213554",
                },
                label: {
                    show: true,
                    position: [10, -30],
                  fontSize: "14",
                  fontWeight: "500",
                  lineHeight: 20,
                  align: "center",
                  color: "#D1D5DB",
                  backgroundColor: {
                    image: '/assets/images/drilldownchart/drilldown-label3-bg.png'
                  },
                  width:80,
                  height:40,
                  borderRadius: 8,
                  padding: 20,
                },
                itemStyle: {
                  color: "#F7F7FB",
                  borderColor: "#E0E0EF",
                },
              },
            ],
          },
        ],
        itemStyle: {
          emphasis: {
            emphasis: false,
          },
        },
        label: {
          position: "right",
          color: "#fff",
          lineHeight: 15,
          color: "#363A44",
        },
        lineStyle: {
          width: 30,
          color: "#fff",
        },

        height: "100%",
        top: "10",
        left: "60",
        bottom: "0",

        on: {
          click: function (params) {
            var node = params.data;
            if (node.symbolSize === 0) {
              node.symbolSize = 70;
              if (node.children) {
                node.children.forEach(function (child) {
                  child.symbolSize = 50;
                });
              }
            } else {
              node.symbolSize = 0;
              if (node.children) {
                node.children.forEach(function (child) {
                  child.symbolSize = 0;
                });
              }
            }
            myChart.setOption(option);
          },
        },
        
        width: "80%",
        height:"100%",
        left:'7%',
        right:"0",
        top: "5%",
        bottom:"10%",
      },
      
    ],
  };

  return (
    <>
    <div>
      <ReactEcharts
        option={drillDownCharts}
        style={{ width: "100%", height:"clamp(700px, 90vw, 90vh)" }}
      />
    </div>
    </>
  );
};
