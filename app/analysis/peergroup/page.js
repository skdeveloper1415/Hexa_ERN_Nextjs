"use client";
import React, { useState } from "react";
import Layout from "../../../layouts/pagelayout";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import FilterComponent from "../../../components/filtercomponent/page";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import ChartWrapper from "../../../components/chartwrapper";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

export default function FundRequest() {
  const [activeTab, setActiveTab] = useState(0);
  const [pageTitle, setPageTitle] = useState("Analysis");
  const [date, setDate] = useState(null);
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

  // Array of card data with tags, severity, and icons
  const cardData = [
    {
      title: "FRN Count",
      subTitle: "100",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY 80",
    },
    {
      title: "Certified FRN Count ",
      subTitle: "75",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY 80",
    },
    {
      title: "Cancelled FRN Count",
      subTitle: "25",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY 35",
    },

    {
      title: "Success Rate",
      subTitle: "75%",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY 70%",
    },
    {
      title: "FRN Requested Amt",
      subTitle: "$100K",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80K",
    },
    {
      title: "Commited",
      subTitle: "$75K",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80K",
    },
    {
      title: "Disbursed",
      subTitle: "$60K",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $60K",
    },
    {
      title: "Remaning",
      subTitle: "$15K",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $15K",
    },
    {
      title: "FRN Requested Amt",
      subTitle: "$100K",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80K",
    },
  ];

  // echart
  const asonlinechart = {
    legend: {
      show: false,
    },
    grid: {
      top: "8%",
      bottom: "8%",
      right: "3%",
      left: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["2019", "2020", "2010", "2022", "2023"],
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#374151",
          },
        },
        axisLabel: {
          color: "#E5E7EB",
        },
      },
    ],
    yAxis: {
      type: "value",
      axisLabel: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#374151",
        },
        show: true,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        name: "ABC School",
        data: [30, 25, 20, 30, 40],
        type: "line",
        color: "#D67309",
        symbolSize: 26,
        symbol: "circle",
        lineStyle: {
          width: 1,
        },
        label: {
          show: true,
          position: "inside",
          color: "white",
          formatter: "{c}%",
          fontSize: 10,
        },
      },
      {
        name: "Lowest",
        data: [63, 58, 45, 58, 65],
        type: "line",
        color: "#768FB5",
        symbolSize: 26,
        symbol: "circle",
        lineStyle: {
          width: 1,
        },
        label: {
          show: true,
          position: "inside",
          color: "white",
          formatter: "{c}%",
          fontSize: 10,
        },
      },
      {
        name: "Average",
        data: [75, 75, 70, 75, 75],
        type: "line",
        color: "#1570EF",
        symbolSize: 26,
        symbol: "circle",
        lineStyle: {
          width: 1,
        },
        label: {
          show: true,
          position: "inside",
          color: "white",
          formatter: "{c}%",
          fontSize: 10,
        },
      },
      {
        name: "Highest",
        data: [95, 90, 90, 90, 90],
        type: "line",
        color: "#D62C72",
        symbolSize: 26,
        symbol: "circle",
        lineStyle: {
          width: 1,
        },
        label: {
          show: true,
          position: "inside",
          color: "white",
          formatter: "{c}%",
          fontSize: 10,
        },
      },
    ],
  };

  // echart
  const asonbarchart = {
    tooltip: { trigger: "axis" },
    legend: {
      show: false,
    },
    grid: {
      left: "1%",
      right: "1%",
      top: "15%",
      bottom: "8%",
      containLabel: true,
    },
  xAxis: {
    type: 'category',
    data: ['SD1', 'SD2', 'SD3', 'SD4', 'SD5', 'XYUSD'],
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
    max:100,
    min:0,
    interval:10,
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
      name:'FRN Amount ($)',
      data: [80, 90, {
        value: 60,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0.1,
              color: "rgba(78,9,34,0.95)",
            },
            {
              offset: 1,
              color: "rgba(214,44,114,1)",
            },
          ]),

      borderRadius: [8, 8, 0, 0]
        },
      }, {
        value: 66,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0.1,
              color: "rgba(78,9,34,0.95)",
            },
            {
              offset: 1,
              color: "rgba(214,44,114,1)",
            },
          ]),

      borderRadius: [8, 8, 0, 0]
        },
      }, {
        value: 75,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0.1,
              color: "rgba(68,25,4,0.95)",
            },
            {
              offset: 1,
              color: "rgba(212,115,9,1)",
            },
          ]),

      borderRadius: [8, 8, 0, 0]
        },
      }, {
        value: 75,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0.1,
              color: "rgba(68,25,4,0.95)",
            },
            {
              offset: 1,
              color: "rgba(212,115,9,1)",
            },
          ]),

      borderRadius: [8, 8, 0, 0]
        },
      },],
      type: 'bar',
      color:'#354998',
      barWidth: 60,
       label: {
          show: true,
          formatter: "{c}",
          color: "#E5E7EB",
          position: "insideTop",
          padding: [4, 4, 4, 4],
          fontSize: '10px'
        },
      itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0.1,
              color: "rgba(2,44,33,0.95)",
            },
            {
              offset: 1,
              color: "rgba(6,149,100,1)",
            },
          ]),

      borderRadius: [8, 8, 0, 0]
        },
    },
    {
      name:'FRN Count',
      data: [80, 80, 80, 80, 80, 80],
      type: 'line',
      smooth: true,
      symbol: "none",
      color:'#D67309',
      label: {
          show: false,
        },
    }
  ]
  };

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const handleCardClick = (index) => {
    setActiveCardIndex(index);
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
          <div className="col-span-12 xl:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-5">
              {cardData.map((data, index) => (
                <div key={index} className="p-m-2">
                  <Card
                    className={
                      activeCardIndex === index
                        ? "card_spacing active_card_ui cursor-pointer"
                        : "card_ui card_spacing cursor-pointer"
                    }
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="">
                      <div className="flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7">
                        <div>
                          <h1>{data.title}</h1>
                        </div>
                        <div>
                          <h3>{data.subTitle}</h3>
                        </div>
                      </div>
                      <div className="border-t border-[rgba(255,255,255,0.15)] pt-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="opacity-60 text-white text-xs font-medium leading-normal">
                            <p>{data.LY}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <i
                              className={`text-[#069564] text-xs ${data.icon}`}
                            ></i>
                            <span className="text-white text-[10px] font-medium leading-normal opacity-60">
                              <p>{data.content}</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            <div className="mt-[20px] 3xl:mt-[1.25vw] bg-[rgba(17,25,40,0.60)] rounded-[16px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]">
              <div className="flex items-center justify-between border-b border-[rgba(243,240,231,0.20)] pb-[16px] 3xl:pb-[0.833vw]">
                <div className="text-[#F2F2F5] text-[16px] 3xl:text-[0.833vw] font-medium">
                  As on 23
                </div>
                <div className="col flex items-center gap-[16px] 3xl:gap-[0.833vw]">
                  <div className="text-[14px] 3xl:text-[0.729vw] text-white">
                    View by:
                  </div>
                  <div>
                    <Dropdown
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="All"
                      className="w-full custDropdown padd-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[16px] 3xl:mt-[0.833vw]">
                <div className="flex items-center gap-[15px] 3xl:gap-[1.875vw]">
                  <div className="col space-y-[16px] 3xl:space-y-[0.833vw]">
                    <div className="text-white text-[16px] 3xl:text-[0.833vw] font-semibold">
                      Overall
                    </div>
                    <div className="flex items-center gap-[18px] 3xl:gap-[0.938vw]">
                      <div className="border border-[#4B5563] px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw] rounded-[6px] 3xl:rounded-[0.313vw] leading-none">
                        <div className="text-white text-[14px] 3xl:text-[0.729vw]">
                          Highest
                          <span className="ml-[16px] 3xl:ml-[0.833vw]">90</span>
                          <span className="ml-[4px] 3xl:ml-[0.208vw] text-[#11B87C]">
                            5%
                          </span>
                        </div>
                      </div>
                      <div className="border border-[#4B5563] px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw] rounded-[6px] 3xl:rounded-[0.313vw] leading-none">
                        <div className="text-white text-[14px] 3xl:text-[0.729vw]">
                          Highest
                          <span className="ml-[16px] 3xl:ml-[0.833vw]">90</span>
                          <span className="ml-[4px] 3xl:ml-[0.208vw] text-[#11B87C]">
                            5%
                          </span>
                        </div>
                      </div>
                      <div className="border border-[#4B5563] px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw] rounded-[6px] 3xl:rounded-[0.313vw] leading-none">
                        <div className="text-white text-[14px] 3xl:text-[0.729vw]">
                          Highest
                          <span className="ml-[16px] 3xl:ml-[0.833vw]">90</span>
                          <span className="ml-[4px] 3xl:ml-[0.208vw] text-[#11B87C]">
                            5%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col space-y-[16px] 3xl:space-y-[0.833vw] pl-[0] lg:pl-[15px] 3xl:pl-[1.875vw] border-l border-[#374151]">
                    <div className="text-white text-[16px] 3xl:text-[0.833vw] font-semibold">
                      School District Variance
                    </div>
                    <div className="flex items-center gap-[18px] 3xl:gap-[0.938vw]">
                      <div className="border border-[#4B5563] px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw] rounded-[6px] 3xl:rounded-[0.313vw] leading-none">
                        <div className="text-white text-[14px] 3xl:text-[0.729vw]">
                          Highest
                          <span className="ml-[16px] 3xl:ml-[0.833vw]">90</span>
                          <span className="ml-[4px] 3xl:ml-[0.208vw] text-[#11B87C]">
                            5%
                          </span>
                        </div>
                      </div>
                      <div className="border border-[#4B5563] px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw] rounded-[6px] 3xl:rounded-[0.313vw] leading-none">
                        <div className="text-white text-[14px] 3xl:text-[0.729vw]">
                          Highest
                          <span className="ml-[16px] 3xl:ml-[0.833vw]">90</span>
                          <span className="ml-[4px] 3xl:ml-[0.208vw] text-[#11B87C]">
                            5%
                          </span>
                        </div>
                      </div>
                      <div className="border border-[#4B5563] px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw] rounded-[6px] 3xl:rounded-[0.313vw] leading-none">
                        <div className="text-white text-[14px] 3xl:text-[0.729vw]">
                          Highest
                          <span className="ml-[16px] 3xl:ml-[0.833vw]">90</span>
                          <span className="ml-[4px] 3xl:ml-[0.208vw] text-[#11B87C]">
                            5%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* echart row */}
                {activeCardIndex === 0 &&
                <div className="chartOne">
                  <div className="col">
                    <ChartWrapper
                      data={
                        <>
                          <div className="w-full h-[258px] 3xl:h-[13.438vw]">
                            <ReactEcharts
                              option={asonlinechart}
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                        </>
                      }
                    />
                  </div>
                  <div className="flex items-center justify-center gap-[30px] lg:gap-[50px] 3xl:gap-[6.25vw]">
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] pt-[8px] 3xl:pt-[0.417vw] pr-[8px] 3xl:pr-[0.417vw] bdr-top bgColor1">
                      SD1
                    </div>
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] pt-[8px] 3xl:pt-[0.417vw] pr-[8px] 3xl:pr-[0.417vw] bdr-top bgColor2">
                      SD2
                    </div>
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] pt-[8px] 3xl:pt-[0.417vw] pr-[8px] 3xl:pr-[0.417vw] bdr-top bgColor3">
                      SD3
                    </div>
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] pt-[8px] 3xl:pt-[0.417vw] pr-[8px] 3xl:pr-[0.417vw] bdr-top bgColor4">
                      SD4
                    </div>
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] pt-[8px] 3xl:pt-[0.417vw] pr-[8px] 3xl:pr-[0.417vw] bdr-top bgColor5">
                      SD5
                    </div>
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] pt-[8px] 3xl:pt-[0.417vw] pr-[8px] 3xl:pr-[0.417vw] bdr-top bgColor6">
                      XYUSD
                    </div>
                  </div>
                </div>
                }
                {/* echart row */}
                {activeCardIndex === 1 &&
                <div className="chartOne">
                  <div className="col">
                  <ChartWrapper
                  data={
                    <div className="w-full h-[368px] 3xl:h-[19.167vw]">
                        <ReactEcharts
                          option={asonbarchart}
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                  }
              />
                  </div>
                  <div className="flex items-center justify-center gap-[30px] lg:gap-[50px] 3xl:gap-[6.25vw]">
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] pt-[8px] 3xl:pt-[0.417vw] bdr-top bgColor6">
                      FRN
                    </div>
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] pt-[8px] 3xl:pt-[0.417vw] bdr-top bgColor4">
                      Average
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
