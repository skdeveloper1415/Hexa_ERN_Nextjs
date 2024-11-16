"use client";
import React, { useState } from "react";
import Layout from "../../../layouts/pagelayout";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import FilterComponent from "../../../components/filtercomponent/page";
import { Dropdown } from "primereact/dropdown";
import ChartWrapper from "../../../components/chartwrapper";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

export default function FundRequest() {
  const [activeTab, setActiveTab] = useState(0);
  const [pageTitle, setPageTitle] = useState("Fund Request");
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectTrend, setSelectTrend] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const trend = [
    { name: "Trend", code: "NY" },
    { name: "Current Year", code: "RM" },

    ];
  // echart
  const FRNCount = {
    tooltip: { trigger: "axis" },
    legend: {
      show: false,
    },
    color: ['#1570EF'],
    grid: {
      left: "6%",
      right: "1%",
      top: "15%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["0", "5", "10", "15", "20", "25"],
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#374151",
        },
      },
      axisTick: { show: true },
      name: "METRIC 1: FRN Count", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 40, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: "#E5E7EB", // Set title text color
          fontSize: 10, // Set title font size
        },
      axisLine: {
        show: true,
        lineStyle: {
            color: "#374151",
          },
      },
      axisLabel: {
        show: true,
        color: "#E5E7EB",
        fontSize: 11,
      },
    },
    yAxis: {
      type: "value",
      max: 600,
      min: 0,
      interval: 100,
      name: "Metric 2: FRN Committed Value", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 50, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: "#E5E7EB", // Set title text color
          fontSize: 10, // Set title font size
        },
      axisLabel: {
        show: true,
        color: "#E5E7EB",
        fontSize: 11,
      },
      axisLine: {
        show: true,
        lineStyle: {
            color: "#374151",
          },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#374151",
        },
      },
    },
    series: [
      {
        symbolSize: 20,
      data: [
        [2.02, 100.04],
        [1.07, 200.95],
        [3.02, 450.04],
        [0.07, 300.95],
        [2.02, 350.04],
        [0.07, 350.95],
        [0.02, 170.04],
        [1.07, 280.95],
        [2.02, 500.04],
        [1.07, 480.95],
        [2.02, 380.04],
        [4.07, 450.95],

      ],
      type: 'scatter',
      colorBy: "data",
      itemStyle: {
        shadowBlur: 15,
        shadowColor: "#1570EF"
      }
      },

    ],
  };

  // echart
  const asonbarchartred = {
    tooltip: { trigger: "axis" },
    legend: {
        show: true,
        bottom: "2%",
        left: "3%",
        itemHeight: 8,
        itemWidth: 8,
        textStyle: {
          color: "#FFFFFF",
          fontSize: 10,
        },
      },
    grid: {
      left: "3%",
      right: "3%",
      top: "10%",
      bottom: "8%",
      containLabel: true,
    },
  xAxis: {
    type: 'category',
    data: ['2019', '2020', '2021', '2022', '2023'],
    splitLine: { show: false },
        axisTick: { show: false },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: "#E5E7EB",
          fontSize: 11
        },
  },
  yAxis: {
    type: 'value',
    max:450,
    min:0,
    interval:50,
    axisLabel: {
          show: true,
          color: "#E5E7EB",
          fontSize: 11
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#374151",
          },
      },
  },
  series: [
    {
      name:'FRN Count',
      data: [ 400, 200, 260, 260, 160, ],
      type: 'bar',
      color:'#354998',
      barWidth: "90%",
       label: {
          show: false,
        },
      itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0.1,
              color: "rgba(78,9,34,0.95)",
            },
            {
              offset: 1,
              color: "rgba(231,77,148,1)",
            },
          ]),

      borderRadius: [8, 8, 0, 0]
        },
    },
  ]
  };

  // echart
  const asonbarchartblue = {
    tooltip: { trigger: "axis" },
    legend: {
        show: true,
        bottom: "2%",
        left: "3%",
        itemHeight: 8,
        itemWidth: 8,
        textStyle: {
          color: "#FFFFFF",
          fontSize: 10,
        },
      },
    grid: {
      left: "3%",
      right: "3%",
      top: "10%",
      bottom: "8%",
      containLabel: true,
    },
  xAxis: {
    type: 'category',
    data: ['2019', '2020', '2021', '2022', '2023'],
    splitLine: { show: false },
        axisTick: { show: false },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: "#E5E7EB",
          fontSize: 11
        },
  },
  yAxis: {
    type: 'value',
    max:450,
    min:0,
    interval:50,
    axisLabel: {
          show: true,
          color: "#E5E7EB",
          fontSize: 11
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#374151",
          },
      },
  },
  series: [
    {
      name:'FRN Committed Value ($K)',
      data: [ 100, 250, 350, 150, 300 ],
      type: 'bar',
      color:'#354998',
      barWidth: "90%",
       label: {
          show: false,
        },
      itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0.1,
              color: "rgba(33,41,74,0.95)",
            },
            {
              offset: 1,
              color: "rgba(89,134,216,1)",
            },
          ]),

      borderRadius: [8, 8, 0, 0]
        },
    },
  ]
  };
  return (
    <Layout
      topTab={true}
      pageTitle={pageTitle}
      parentPageName={["Fund Request"]}
    >
      <FilterComponent />
      <div className="mt-[24px] 3xl:mt-[1.25vw]">
        <div className="grid grid-cols-12 gap-[15px] 3xl:gap-[1.25vw]">
          <div className="col-span-12 xl:col-span-3">
            <div className="bg-[rgba(17,25,40,0.60)] backdrop-blur-[7.5px] boxshadow02 border border-[#4B5563] p-4 rounded-2xl space-y-[20px] max-xl:grid max-xl:grid-cols-3 max-xl:gap-4 max-md:grid-cols-1 h-full">
              <div className="col">
                <label
                  htmlFor="username"
                  className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] mb-[8px] block"
                >
                  Select Module
                </label>
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Fund Request"
                  className="w-full custDropdown"
                />
              </div>
              <div className="rounded-lg border border-[#374151] p-3 space-y-[16px]">
                <div className="text-[#E0E3E9] text-sm font-medium leading-5">
                  Select Dimension 1
                </div>
                <div className="col">
                  <label
                    htmlFor="username"
                    className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] mb-[8px] block"
                  >
                    View by
                  </label>
                  <Dropdown
                    value={selectTrend}
                    onChange={(e) => setSelectTrend(e.value)}
                    options={trend}
                    optionLabel="name"
                    placeholder="Trend"
                    className="w-full custDropdown"
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="username"
                    className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] mb-[8px] block"
                  >
                    Select &#60;Cluster&#62;
                  </label>
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Fund Request"
                    className="w-full custDropdown"
                  />
                </div>
              </div>
              <div className="rounded-lg border border-[#374151] p-3 space-y-[16px]">
                <div className="text-[#E0E3E9] text-sm font-medium leading-5">
                  Select Dimension 2
                </div>
                <div className="col">
                  <label
                    htmlFor="username"
                    className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] mb-[8px] block"
                  >
                    View by
                  </label>
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Fund Request"
                    className="w-full custDropdown"
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="username"
                    className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] mb-[8px] block"
                  >
                    Select &#60;Cluster&#62;
                  </label>
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Fund Request"
                    className="w-full custDropdown"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-9 space-y-[24px] 3xl:space-y-[1.25vw]">
            <div className="bg-[rgba(17,25,40,0.60)] backdrop-blur-[7.5px] boxshadow02 border border-[#4B5563] p-4 rounded-2xl space-y-[20px] max-xl:grid max-xl:grid-cols-3 max-xl:gap-4 max-md:grid-cols-1">
                <div className="col">
              <ChartWrapper
                title={"FRN Count"}
                data={
                  <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] mt-[16px] 3xl:mt-[0.833vw]">
                    <div className="w-full h-[600px]">
                      <ReactEcharts
                        option={FRNCount}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </div>
                }
              />
              </div>
            </div>
            <div className="bg-[rgba(17,25,40,0.60)] backdrop-blur-[7.5px] boxshadow02 border border-[#4B5563] p-4 rounded-2xl space-y-[20px] max-xl:grid max-xl:grid-cols-3 max-xl:gap-4 max-md:grid-cols-1">
            <div className="col">
              <ChartWrapper
                title={"FRN Count"}
                data={
                  <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] mt-[16px] 3xl:mt-[0.833vw]">
                    <div className="w-full h-[368px] 3xl:h-[19.167vw]">
                      <ReactEcharts
                        option={asonbarchartred}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </div>
                }
              />
              </div>
            </div>
            <div className="bg-[rgba(17,25,40,0.60)] backdrop-blur-[7.5px] boxshadow02 border border-[#4B5563] p-4 rounded-2xl space-y-[20px] max-xl:grid max-xl:grid-cols-3 max-xl:gap-4 max-md:grid-cols-1">
            <div className="col">
              <ChartWrapper
                title={"FRN Committed Value ($K)"}
                data={
                  <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] mt-[16px] 3xl:mt-[0.833vw]">
                    <div className="w-full h-[368px] 3xl:h-[19.167vw]">
                      <ReactEcharts
                        option={asonbarchartblue}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </div>
                }
              />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
