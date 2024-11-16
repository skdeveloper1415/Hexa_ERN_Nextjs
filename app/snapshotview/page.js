"use client";
import React, { useState } from "react";
import Layout from "../../layouts/pagelayout";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Calendar } from "primereact/calendar";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ChartWrapper from "../../components/chartwrapper";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
// import Mapview from '../snapshotview/mapview';
import dynamic from 'next/dynamic';

const Mapview = dynamic(() => import('../snapshotview/mapview'), {
  ssr: false
});



export default function SnapshotView() {
  const [pageTitle, setPageTitle] = useState("Snapshot View");
  const [date, setDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Fund Request", code: "NY" },
    { name: "Services & disbursements", code: "RM" },

  ];
  const categories = [
    { name: "All", key: "A", className: "w-auto" },
    {
      name: "Funded",
      key: "F",
      className: "bg-[#6FE6B3] filtershadow1 border border-[#075E43]",
    },
    {
      name: "Rejected",
      key: "R",
      className: "bg-[#F7AAD1] filtershadow2 border border-[#991B4A]",
    },
    {
      name: "In Progress",
      key: "I",
      className: "bg-[#FACE4F] filtershadow3 border border-[#903D10]",
    },
    {
      name: "Not Applied",
      key: "N",
      className: "bg-[#DBE1EA] filtershadow4 border border-[#4F6484]",
    },
    {
      name: "Applied through School District",
      key: "At",
      className: "bg-[#79A5E1] filtershadow5 border border-[#354998]",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [selectedCategory1, setSelectedCategory1] = useState(categories[0]);
  const categories1 = [
    { name: "Count", key: "C" },
    { name: "Amount", key: "A" },
  ];

  // echart
  const CategoryOne = {
    legend: {
      show: true,
      bottom: 0,
      left: "2%",
      itemHeight: 8,
      itemWidth: 8,
      textStyle: {
        color: "#FFFFFF",
        fontSize: 10,
      },
    },
    grid: {
      top: "8%",
      bottom: "12%",
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
      {
        type: "category",
        data: [
          {
            value: "80%",
            textStyle: {
              color: "#E5E7EB",
              padding: [0, 0, 25, 0],
            },
          },
          {
            value: "50%",
            textStyle: {
              color: "#E5E7EB",
              padding: [0, 0, 25, 0],
            },
          },
          {
            value: "60%",
            textStyle: {
              color: "#E5E7EB",
              padding: [0, 0, 25, 0],
            },
          },
          {
            value: "75%",
            textStyle: {
              color: "#E5E7EB",
              padding: [0, 0, 25, 0],
            },
          },
          {
            value: "80%",
            textStyle: {
              color: "#E5E7EB",
              padding: [0, 0, 25, 0],
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
        offset: -15,
      },
    ],
    yAxis: {
      type: "value",
      max: 500,
      min: 0,
      interval: 100,
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
      axisLine: {
        show: true,
        lineStyle: {
          color: "#374151",
        },
      },
    },
    series: [
      {
        name: "Certified",
        data: [400, 200, 300, 300, 400],
        type: "bar",
        stack: "total",
        barWidth: "75%",
        color: "#79A5E1",
        label: {
          show: true,
        },
      },
      {
        name: "Cancelled",
        data: [100, 200, 200, 100, 100],
        type: "bar",
        stack: "total",
        barWidth: "75%",
        color: "#354998",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
        },
      },
    ],
  };

  // echart
  const FRNCertified = {
    legend: {
      show: true,
      bottom: 0,
      left: "2%",
      itemHeight: 8,
      itemWidth: 8,
      textStyle: {
        color: "#FFFFFF",
        fontSize: 10,
      },
    },
    grid: {
      top: "8%",
      bottom: "12%",
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
          width: 1
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
          width: 1
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
          width: 1
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
          width: 1
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


  return (
    <Layout
      topTab={true}
      pageTitle={pageTitle}
      parentPageName={["Snapshot View"]}
    >
      <Mapview />

      <div className="mt-[24px] 3xl:mt-[1.25vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[15px] 3xl:gap-[1.25vw] z-[2] relative">
          <div className="col">
            <div className="rounded-[16px] 3xl:rounded-[0.833vw] p-[14px] 3xl:p-[0.833vw] bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 filter">
              <div className="text-[#F2F2F5] text-[16px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">
                Schools Applied
              </div>
              <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] px-[16px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] mt-[16px] 3xl:mt-[0.833vw]">
                <div className="flex justify-between">
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      95
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN Value
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      $200k
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rounded-[16px] 3xl:rounded-[0.833vw] p-[14px] 3xl:p-[0.833vw] bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 filter">
              <div className="text-[#F2F2F5] text-[16px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">
                Avg. FRN/School
              </div>
              <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] px-[16px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] mt-[16px] 3xl:mt-[0.833vw]">
                <div className="flex justify-between">
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      04
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN Value
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      $75k
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rounded-[16px] 3xl:rounded-[0.833vw] p-[14px] 3xl:p-[0.833vw] bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 filter">
              <div className="text-[#F2F2F5] text-[16px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">
                Funded FRN
              </div>
              <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] px-[16px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] mt-[16px] 3xl:mt-[0.833vw]">
                <div className="flex justify-between">
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      60
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN Value
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      $100k
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rounded-[16px] 3xl:rounded-[0.833vw] p-[14px] 3xl:p-[0.833vw] bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 filter">
              <div className="text-[#F2F2F5] text-[16px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">
                Non Funded FRN
              </div>
              <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] px-[16px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] mt-[16px] 3xl:mt-[0.833vw]">
                <div className="flex justify-between">
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      35
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN Value
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      $100k
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rounded-[16px] 3xl:rounded-[0.833vw] p-[14px] 3xl:p-[0.833vw] bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 filter">
              <div className="text-[#F2F2F5] text-[16px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">
                Success Rate
              </div>
              <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] px-[16px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] mt-[16px] 3xl:mt-[0.833vw]">
                <div className="flex justify-between">
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      68%
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] font-light">
                      FRN Value
                    </div>
                    <div className="text-[18px] 3xl:text-[0.938vw] font-semibold text-white">
                      50%
                      <span className="text-[#9EA3AA] text-[12px] 3xl:text-[0.625vw] ml-1">
                        5%
                        <span className="text-[#069564] ml-1">
                          <i className="hex-rate-arrow-up"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className="relative mt-[24px] 3xl:mt-[1.25vw]">
            <div className="absolute left-0 top-0 z-[2]">
            <div className="w-full max-w-[301px]">
              <div className="rounded-[16px] 3xl:rounded-[0.833vw] px-[14px] 3xl:px-[0.833vw] pt-[14px] 3xl:pt-[0.833vw] bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 filter h-full pb-[300px]">
                <div className="flex items-center justify-between">
                  <div className="text-[#F2F2F5] text-[16px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">
                    Map Filter
                  </div>
                  <div className="col">
                    <i className="hex-rate-sidebar-left text-white text-[18px] 3xl:text-[0.938vw]"></i>
                  </div>
                </div>
                <div className="mt-[24px] 3xl:mt-[1.25vw]">
                  <div className="space-y-[24px] 3xl:space-y-[1.25vw]">
                    <div className="col">
                      <label
                        htmlFor="username"
                        className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] mb-[8px] block"
                      >
                        Select Year
                      </label>
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        view="year"
                        dateFormat="yy"
                        className="w-full custCalendar"
                      />
                    </div>
                    <div className="col">
                      <Image
                        src={"/assets/iamges/divider-map-filter.png"}
                        width={"301"}
                        height={"2"}
                        alt=""
                      />
                    </div>
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
                    <div className="col">
                      <label
                        htmlFor="username"
                        className="text-[#E0E3E9] text-[14px] 3xl:text-[0.729vw] mb-[8px] block"
                      >
                        Select Funding Status
                      </label>
                      <div className="flex flex-col gap-[16px] 3xl:gap-[0.833vw]">
                        {categories.map((category) => {
                          return (
                            <div
                              key={category.key}
                              className="flex items-start gap-[8px] 3xl:gap-[0.417vw]"
                            >
                              <RadioButton
                                inputId={category.key}
                                name="category"
                                value={category}
                                onChange={(e) => setSelectedCategory(e.value)}
                                checked={selectedCategory.key === category.key}
                                className="custRadioButton"
                              />
                              <label htmlFor={category.key}>
                                <span
                                  className={`${category.className} w-[12px] 3xl:w-[0.625vw] h-[12px] 3xl:h-[0.625vw] rounded-full inline-block mr-[8px] 3xl:mr-[0.417vw]`}
                                ></span>
                                <span className="text-[#E0E3E9] text-[12px] 3xl:text-[0.729vw]">
                                  {category.name}
                                </span>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="absolute right-0 top-0 z-[2]">
              <div className="w-full max-w-[530px]">
              <div className="rounded-[8px] 3xl:rounded-[0.417vw] p-[14px] 3xl:p-[0.833vw] bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 filter">
                <Tabs>
                  <div className="bg-[#111928] rounded-[8px] 3xl:rounded-[0.417vw] box-shadow2 py-[18px] 3xl:py-[0.938vw] px-[12px] 3xl:px-[0.625vw]">
                    <div className="flex items-center gap-[34px] 3xl:gap-[1.771vw]">
                      <div className="flex items-center gap-[16px] 3xl:gap-[0.833vw]">
                        {categories1.map((category) => {
                          return (
                            <div
                              key={category.key}
                              className="flex items-start gap-[8px] 3xl:gap-[0.417vw]"
                            >
                              <RadioButton
                                inputId={category.key}
                                name="category"
                                value={category}
                                onChange={(e) => setSelectedCategory(e.value)}
                                checked={selectedCategory.key === category.key}
                                className="custRadioButton"
                              />
                              <label htmlFor={category.key}>
                                <span className="text-[#E0E3E9] text-[12px] 3xl:text-[0.729vw]">
                                  {category.name}
                                </span>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <div className="custTabList tabBg1">
                        <TabList>
                          <Tab>Category 1</Tab>
                          <Tab>Category 2</Tab>
                        </TabList>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <TabPanel>
                    <div className="mt-[24px] 3xl:mt-[1.25vw] space-y-[24px] 3xl:space-y-[1.25vw]">
                      <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 p-[16px] 3xl:p-[0.833vw] filter rounded-[16px] 3xl:rounded-[0.833vw]">
                        <Tabs>
                          <div className="">
                            <ChartWrapper
                              title={"Invoice Trend"}
                              eyeIcon={true}
                              infoIcon={true}
                              avgValue={true}
                              data={
                                <>
                                  <Tabs>
                                    <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] p-[8px] 3xl:p-[0.417vw]">
                                      <div className="custTabList tabBg2">
                                        <TabList>
                                          <Tab>Pre Discount</Tab>
                                          <Tab>Post Discount</Tab>
                                          <Tab>Applicant Share</Tab>
                                        </TabList>
                                      </div>
                                    </div>

                                    <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw]">
                                      <TabPanel>
                                        <div className="w-full h-[258px] mt-[16px] 3xl:mt-[0.833vw]">
                                          <ReactEcharts
                                            option={CategoryOne}
                                            style={{
                                              height: "100%",
                                              width: "100%",
                                            }}
                                          />
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="w-full h-[258px] mt-[16px] 3xl:mt-[0.833vw]">
                                          <ReactEcharts
                                            option={CategoryOne}
                                            style={{
                                              height: "100%",
                                              width: "100%",
                                            }}
                                          />
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="w-full h-[258px] mt-[16px] 3xl:mt-[0.833vw]">
                                          <ReactEcharts
                                            option={CategoryOne}
                                            style={{
                                              height: "100%",
                                              width: "100%",
                                            }}
                                          />
                                        </div>
                                      </TabPanel>
                                    </div>
                                  </Tabs>
                                </>
                              }
                            />
                          </div>
                        </Tabs>
                      </div>
                      <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 p-[16px] 3xl:p-[0.833vw] filter rounded-[16px] 3xl:rounded-[0.833vw]">
                        <div>
                          <ChartWrapper
                            title={"Invoice Approval Analysis"}
                            eyeIcon={true}
                            infoIcon={true}
                            avgValue={true}
                            data={
                              <>
                                <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw]">
                                  <div className="w-full h-[258px]">
                                    <ReactEcharts
                                      option={FRNCertified}
                                      style={{ height: "100%", width: "100%" }}
                                    />
                                  </div>
                                </div>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-[24px] 3xl:mt-[1.25vw] space-y-[24px] 3xl:space-y-[1.25vw]">
                      <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 p-[16px] 3xl:p-[0.833vw] filter rounded-[16px] 3xl:rounded-[0.833vw]">
                        <Tabs>
                          <div className="">
                            <ChartWrapper
                              title={"Invoice Trend 2"}
                              eyeIcon={true}
                              infoIcon={true}
                              avgValue={true}
                              data={
                                <>
                                  <Tabs>
                                    <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] p-[8px] 3xl:p-[0.417vw]">
                                      <div className="custTabList tabBg2">
                                        <TabList>
                                          <Tab>Pre Discount</Tab>
                                          <Tab>Post Discount</Tab>
                                          <Tab>Applicant Share</Tab>
                                        </TabList>
                                      </div>
                                    </div>

                                    <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw]">
                                      <TabPanel>
                                        <div className="w-full h-[258px] mt-[16px] 3xl:mt-[0.833vw]">
                                          <ReactEcharts
                                            option={CategoryOne}
                                            style={{
                                              height: "100%",
                                              width: "100%",
                                            }}
                                          />
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="w-full h-[258px] mt-[16px] 3xl:mt-[0.833vw]">
                                          <ReactEcharts
                                            option={CategoryOne}
                                            style={{
                                              height: "100%",
                                              width: "100%",
                                            }}
                                          />
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="w-full h-[258px] mt-[16px] 3xl:mt-[0.833vw]">
                                          <ReactEcharts
                                            option={CategoryOne}
                                            style={{
                                              height: "100%",
                                              width: "100%",
                                            }}
                                          />
                                        </div>
                                      </TabPanel>
                                    </div>
                                  </Tabs>
                                </>
                              }
                            />
                          </div>
                        </Tabs>
                      </div>
                      <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] box-shadow1 p-[16px] 3xl:p-[0.833vw] filter rounded-[16px] 3xl:rounded-[0.833vw]">
                        <div>
                          <ChartWrapper
                            title={"Invoice Approval Analysis 2"}
                            eyeIcon={true}
                            infoIcon={true}
                            avgValue={true}
                            data={
                              <>
                                <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw]">
                                  <div className="w-full h-[258px]">
                                    <ReactEcharts
                                      option={FRNCertified}
                                      style={{ height: "100%", width: "100%" }}
                                    />
                                  </div>
                                </div>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
              </div>

            </div>
            </div>


      </div>
    </Layout>
  );
}
