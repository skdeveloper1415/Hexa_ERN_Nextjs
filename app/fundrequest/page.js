"use client";
import React, { useState } from "react";
import Layout from "../../layouts/pagelayout";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import FilterComponent from "../../components/filtercomponent/page";
import ChartWrapper from "../../components/chartwrapper";
import ReactEcharts from "echarts-for-react";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

export default function FundRequest() {
  const [activeTab, setActiveTab] = useState(0);
  const [pageTitle, setPageTitle] = useState("Fund Request");

  const FRNStatus = {
    legend: {
      show: true,
      bottom: 0,
      itemHeight: 8,
      itemWidth: 8,
      textStyle: {
        color: "#FFFFFF",
        fontSize: 10,
      },
    },
    grid: {
      top: "5%",
      bottom: "12%",
      right: "2%",
      left: "2%",
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
            color: "#4B5563",
          },
        },
        axisLabel: {
          color: "#E5E7EB",
        },
      },
      {
        type: "category",

        data: [
          {
            value: "90%",

            textStyle: {
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "#057A55",
              padding: [8, 20, 8, 20],
              borderRadius: [6, 6, 6, 6],
              width: 40,
            },
          },
          {
            value: "83%",
            textStyle: {
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "#057A55",
              padding: [8, 20, 8, 20],
              borderRadius: [6, 6, 6, 6],
              width: 40,
            },
          },
          {
            value: "85%",
            textStyle: {
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "#057A55",
              padding: [8, 20, 8, 20],
              borderRadius: [6, 6, 6, 6],
              width: 40,
            },
          },
          {
            value: "71%",
            textStyle: {
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "#B24F0B",
              padding: [8, 20, 8, 20],
              borderRadius: [6, 6, 6, 6],
              width: 40,
            },
          },
          {
            value: "64%",
            textStyle: {
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "#B24F0B",
              padding: [8, 20, 8, 20],
              borderRadius: [6, 6, 6, 6],
              width: 40,
            },
          },
        ],
        axisTick: { show: false },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#4B5563",
          },
        },
        axisLabel: {
          color: "#E5E7EB",
        },
        offset: -40,
      },
    ],
    yAxis: {
      type: "value",
      max: 160,
      min: 0,
      interval: 20,
      axisLabel: {
        color: "#E5E7EB",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#374151",
        },
        show: true,
      },
    },
    series: [
      {
        name: "FRN Applications",
        data: [110, 85, 70, 78, 120],
        type: "bar",
        color: "#801B40",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
        },
      },
      {
        name: "Certified",
        data: [65, 72, 50, 38, 78],
        type: "bar",
        color: "#F7AAD1",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
        },
      },
    ],
  };

  const FRNoverview = {
    legend: {
      show: false,
      bottom: 0,
      itemHeight: 8,
      itemWidth: 8,
      textStyle: {
        color: "#FFFFFF",
        fontSize: 10,
      },
    },
    grid: {
      top: "10%",
      bottom: "0%",
      right: "2%",
      left: "2%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Internet Access and/or\ntelecommunications",
          "Data Transmission and/or\nInternet Access",
          "Basic Maintenance of\nInternal Connections",
          "Internal Connections",
          "Managed Internal\nBroadband Services",
        ],
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#4B5563",
          },
        },
        axisLabel: {
          color: "#E5E7EB",
          fontSize: 9,
          interval: -10,
          lineHeight: 14,
        },
      },
    ],
    yAxis: {
      type: "value",
      max: 160,
      min: 0,
      interval: 20,
      axisLabel: {
        color: "#E5E7EB",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#374151",
        },
        show: true,
      },
    },
    series: [
      {
        name: "FRN Applications",
        data: [100, 120, 135, 140, 140],
        type: "bar",
        color: "#1B4EB2",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
        },
      },
      {
        name: "Certified",
        data: [90, 100, 110, 100, 90],
        type: "bar",
        color: "#B24F0B",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
        },
      },
      {
        name: "FRN Cancelled",
        data: [10, 20, 25, 40, 50],
        type: "bar",
        color: "#A9B9D0",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
        },
      },
    ],
  };
  const FRNProcessing = {
    legend: {
      show: false,
      bottom: 0,
      itemHeight: 8,
      itemWidth: 8,
      textStyle: {
        color: "#FFFFFF",
        fontSize: 10,
      },
    },
    grid: {
      top: "5%",
      bottom: "5%",
      right: "2%",
      left: "2%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "value",
        max: 16,
        min: 0,
        interval: 2,
        axisTick: { show: false },
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: "#E5E7EB",
        },
        splitLine: {
          lineStyle: {
            color: "#2B3B4F",
          },
          show: true,
        },
      },
    ],
    yAxis: {
      type: "category",
      data: ["0-2", "2-4", "4-6", ">6"],
      axisLabel: {
        color: "#E5E7EB",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#374151",
        },
        show: false,
      },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    series: [
      {
        name: "FRN Applications",
        data: [9, 11, 13, 15, 140],
        type: "bar",
        color: "#354998",
        itemStyle: {
          borderRadius: [0, 8, 8, 0],
        },
        label: {
          show: true,
          position: "outside",
          color: "#E5E7EB",
        },
      },
    ],
  };

  const AllowableContract = {
    legend: {
      show: true,
      bottom: 0,
      left: "10%",
      itemHeight: 8,
      itemWidth: 8,
      icon: "roundRect",
      textStyle: {
        color: "#FFFFFF",
        fontSize: 10,
      },
    },
    grid: {
      top: "5%",
      bottom: "15%",
      right: "2%",
      left: "2%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: ["20%", "20%"],
      data: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      axisLabel: {
        color: "#E5E7EB",
        fontSize: 11,
        fontWeight: 400,
      },
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: {
        lineStyle: {
          color: "#374151",
        },
        show: true,
      },
    },
    yAxis: {
      type: "value",
      max: 900,
      min: 0,
      interval: 100,
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#374151",
        },
        show: false,
      },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    series: [
      {
        name: "0 - 7 days",
        data: [700, 709, 720, 750, 769, 781, 764, 767],
        type: "line",
        color: "#354998",
        areaStyle: {
          color: "#42536D",
          opacity: 1,
        },
        label: {
          show: true,
          position: "outside",
          color: "#fff",
          fontWeight: 400,
          fontSize: 12,
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
      },
      {
        name: "7 - 14 days",
        data: [231, 245, 320, 320, 320, 320, 320, 325],
        type: "line",
        color: "#3D65C9",
        areaStyle: {
          color: "#5986D8",
          opacity: 1,
        },
        label: {
          show: true,
          position: "outside",
          color: "#fff",
          fontWeight: 400,
          fontSize: 12,
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
      },

      {
        name: "14 - 21 days",
        data: [175, 203, 211, 224, 234, 249, 224, 225],
        type: "line",
        color: "#79A5E1",
        areaStyle: {
          color: "#3D65C9",
          opacity: 1,
        },
        label: {
          show: true,
          position: "outside",
          color: "#374151",
          fontWeight: 400,
          fontSize: 12,
        },
        lineStyle: {
          width: 0,
        },
        symbolSize: 0,
      },

      {
        name: "21 - 28 days",
        data: [84, 92, 94, 99, 108, 109, 102, 104],
        type: "line",
        color: "#6480AB",
        areaStyle: {
          color: "#354998",
          opacity: 1,
        },
        label: {
          show: true,
          position: "outside",
          color: "#FFF",
          fontWeight: 400,
          fontSize: 12,
        },
        lineStyle: {
          width: 2,
          color: "#354998",
        },
        symbolSize: 0,
      },
      {
        name: "Total Requests",
        data: [700, 709, 720, 750, 769, 781, 764, 767],
        type: "line",
        color: "#D62C72",
        label: {
          show: true,
          position: "outside",
          color: "#FFF",
          fontWeight: 500,
          fontSize: 12,
        },
        lineStyle: {
          width: 2,
          color: "#D62C72",
        },
        symbolSize: 0,
      },
    ],
  };

  // Array of card data with tags, severity, and icons
  const cardData = [
    {
      title: "FRN Applications",
      subTitle: "$100K",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80k",
    },
    {
      title: "FRN Commitments",
      subTitle: "$50k",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80k",
    },
    {
      title: "FRN Rejected",
      subTitle: "$10k",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80k",
    },
    {
      title: "FRN In Progress",
      subTitle: "$40k",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80k",
    },
    {
      title: "BEAR",
      subTitle: "$50K",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80k",
    },
    {
      title: "SPI",
      subTitle: "$50K",
      content: "25% LY VAR",
      icon: "hex-rate-arrow-up",
      LY: "LY $80k",
    },
  ];
  return (
    <Layout
      topTab={true}
      pageTitle={pageTitle}
      parentPageName={["Fund Request"]}
    >
      <FilterComponent />
      <div className="mt-[24px]">
        <div className="grid md:grid-cols-3 2xl:grid-cols-6 gap-4">
          {/*col*/}
          {cardData.map((data, index) => (
            <div key={index} className="p-m-2">
              <Card className="card_spacing card_ui_fundrq">
                <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] boxshadow02 backdrop-blur-[7.5px] p-4 space-y-2 rounded-2xl">
                  <div className="flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7">
                    <div>{data.title}</div>
                    <div>{data.subTitle}</div>
                  </div>
                  <div className="border-t border-[rgba(255,255,255,0.15)] pt-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="opacity-60 text-white text-xs font-medium leading-normal">
                        {data.LY}
                      </div>
                      <div className="flex items-center gap-2">
                        <i
                          className={`text-[#069564] text-xs ${data.icon}`}
                        ></i>
                        <span className="text-white text-[10px] font-medium leading-normal opacity-60">
                          {data.content}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="grid lg:grid-cols-2 gap-4">
          {/*col*/}
          <div className="bg-[#111928] rounded-2xl p-4">
            <ChartWrapper
              title={"FRN Status"}
              eyeIcon={true}
              infoIcon={true}
              Highlights={true}
              avgValue={true}
              data={
                <>
                  <div className="w-full h-[300px] 3xl:h-[15.625vw]">
                    <ReactEcharts
                      option={FRNStatus}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </>
              }
            />
          </div>
          {/*col*/}
          <div className="bg-[#111928] rounded-2xl p-4">
            <ChartWrapper
              title={"FRN Overview by Service Category"}
              eyeIcon={true}
              infoIcon={true}
              Highlights={true}
              avgValue={true}
              data={
                <>
                  <div className="w-full h-[180px] xl:h-[200px] 3xl:h-[10.938vw]">
                    <ReactEcharts
                      option={FRNoverview}
                      style={{ height: "100%", width: "100%" }}
                    />
                    <div className="grid grid-cols-5 gap-3  ">
                       <div className=" col-span-2">
                       <div className="content-center   grid grid-cols-3 relative mt-[8px] xl:mt-[0.417vw] 3xl:mt-[0.417vw]">
                          <div className="w-[1px] h-[10px] bg-slate-600 absolute bottom-0 3xl:bottom-0 2xl:bottom-[3px] lg:bottom-0 xl:bottom-1 left-0"></div>
                          <div className="h-[0.052vw] bg-slate-600 flex text-center  mt-[14px] xl:mt-[0.729vw] 3xl:mt-[0.729vw]"></div>
                          <div className="text-[#fff] text-center text-[10px]">
                            {" "}
                            Category 1
                          </div>
                          <div className="h-[0.052vw] bg-slate-600 text-center mt-[14px] xl:mt-[0.729vw] 3xl:mt-[0.729vw]">
                            <div className="w-[1px] h-[10px] bg-slate-600 absolute bottom-0 3xl:bottom-0 2xl:bottom-[3px] lg:bottom-0 xl:bottom-1 right-0"></div>
                          </div>
                        </div>
                       </div>

                       <div className="col-span-3">
                       <div className="  grid grid-cols-3 relative mt-[8px] xl:mt-[0.417vw] 3xl:mt-[0.417vw]">
                          <div className="w-[1px] h-[10px] bg-slate-600 absolute bottom-0 3xl:bottom-0 2xl:bottom-[3px] lg:bottom-0 xl:bottom-1 left-0"></div>
                          <div className="h-[0.052vw] bg-slate-600 flex text-center mt-[14px] xl:mt-[0.729vw] 3xl:mt-[0.729vw]"></div>
                          <div className="text-[#fff] text-center text-[10px]">
                            {" "}
                            Category 2
                          </div>
                          <div className="h-[0.052vw] bg-slate-600 text-center mt-[14px] xl:mt-[0.729vw] 3xl:mt-[0.729vw]">
                            <div className="w-[1px] h-[10px] bg-slate-600 absolute bottom-0 3xl:bottom-0 2xl:bottom-[3px] lg:bottom-0 xl:bottom-1 right-0"></div>
                          </div>
                        </div>
                       </div>

                    </div>
                    <div className="h-[0.052vw] bg-slate-600 text-center mt-[24px] lg:mt-[1.042vw] xl:mt-[1.042vw] "></div>
                    <div className="flex justify-center gap-4 mt-[20px] xl:mt-[1.042vw] 3xl:mt-[1.042vw]">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#1B4EB2] rounded-[2px]"></div>
                        <div className="text-[#fff] text-[10px] xl:text-[0.677vw]  3xl:text-[0.677vw] pl-[4px]">
                          FRN Applications
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#D67309] rounded-[2px]"></div>
                        <div className="text-[#fff] text-[10px] xl:text-[0.677vw]  3xl:text-[0.677vw] pl-[4px]">
                          FRN Certified
                        </div>
                      </div>
                      <div className="flex  items-center gap-1">
                        <div className="w-2 h-2 bg-[#A9B9D0] rounded-[2px]"></div>
                        <div className="text-[#fff] text-[10px]  xl:text-[0.677vw]  3xl:text-[0.677vw] pl-[4px]">
                          {" "}
                          FRN Cancelled
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
            />
          </div>
          {/*col*/}
          <div className="bg-[#111928] rounded-2xl p-4">
            <ChartWrapper
              title={"Allowable Contract Date"}
              eyeIcon={true}
              infoIcon={true}
              Highlights={true}
              avgValue={true}
              data={
                <>
                  <div className="w-full h-[300px] 3xl:h-[15.625vw]">
                    <ReactEcharts
                      option={AllowableContract}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </>
              }
            />
          </div>
          {/*col*/}
          <div className="bg-[#111928] rounded-2xl p-4">
            <ChartWrapper
              title={"FRN Processing Time (Weeks)"}
              eyeIcon={true}
              infoIcon={true}
              Highlights={true}
              avgValue={true}
              data={
                <>
                  <div className="w-full h-[300px] 3xl:h-[15.625vw]">
                    <ReactEcharts
                      option={FRNProcessing}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
