"use client";
import React, { useState } from "react";
import Layout from "../../layouts/pagelayout";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import FilterComponent from "../../components/filtercomponent/page";
import ChartWrapper from "../../components/chartwrapper";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import Link from "next/link";

export default function ServicesDisbursements() {
  const [activeTab, setActiveTab] = useState(0);
  const [pageTitle, setPageTitle] = useState("Services & Disbursements");

  // eChart
  const committedDisbursement = {
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
      top: "15%",
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
        offset: 8,
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
        name: "Committed ($K)",
        data: [20, 58, 26, 78, 17],
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
          formatter: "{c}",
          fontSize: 10,
        },
      },
      {
        name: "Disbursed ($K)",
        data: [115, 95, 75, 140, 85],
        type: "line",
        color: "#B24F0B",
        symbolSize: 26,
        symbol: "circle",
        lineStyle: {
          width: 1,
        },
        label: {
          show: true,
          position: "inside",
          color: "white",
          formatter: "{c}",
          fontSize: 10,
        },
      },
    ],
  };

  // echart
  const discountRate = {
    legend: {
        show: false,
        bottom:0,
        itemHeight:8,
        itemWidth:8,
        textStyle: {
            color: "#FFFFFF",
            fontSize:10,
        }
      },
      grid: {
        top:'10%',
        bottom:'0%',
        right:'2%',
        left:'2%',
        containLabel: true
      },
      xAxis:[
         {
        type: 'category',
        data: ['Internet Access and/or telecommunications', 'Data Transmission and/or Internet Access', 'Basic Maintenance of Internal Connections', 'Internal Connections', 'Managed Internal Broadband Services'],
        axisTick:{show:false,},
        axisLine: {
          show: true,
          lineStyle: {
            color: "#4B5563"
          }
        },
        axisLabel: {
          color: "#E5E7EB",
          fontSize: 8,
          width: 100, //fixed number of pixels
        overflow: 'breakAll', // or 'break' to continue in a new line
        interval: 0,
        },
      }
    ],
      yAxis: {
        type: 'value',
        max:160,
        min:0,
        interval:20,
        axisLabel: {
          color: "#E5E7EB",
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#374151"
          },
          show: true,
          formatter: "{c}%",
        }
      },
      series: [
        {
          name:'Max',
          data: [120, 120, 120, 120, 120],
          type: 'bar',
          color:'#1B4EB2',
          itemStyle: {
            borderRadius:[4, 4, 0, 0]
          },
          label:{
            show:true,
            formatter: "{c}%",
            fontSize: 10,
            position: "insideTop"
          }
        },
        {
          name:'Avg',
          data: [80, 70, 80, 70, 80],
          type: 'bar',
          color:'#B24F0B',

                itemStyle: {
            borderRadius:[4, 4, 0, 0]
          },
          label:{
            show:true,
            formatter: "{c}%",
            fontSize: 10,
            position: "insideTop"
          }
        },
        {
          name:'Min',
          data: [30, 30, 40, 30, 50],
          type: 'bar',
          color:'#A9B9D0',

                itemStyle: {
            borderRadius:[4, 4, 0, 0]
          },
          label:{
            show:true,
            formatter: "{c}%",
            fontSize: 10,
            position: "insideTop"
          }
        }
      ]
};

// echart
const entityShare ={
  legend: {
    show: true,
    bottom:0,
    itemHeight:8,
    itemWidth:8,
    textStyle: {
        color: "#FFFFFF",
        fontSize:10,
    }
  },
  grid: {
    top:'12%',
    bottom:'12%',
    right:'5%',
    left:'2%',
    containLabel: true
  },
  xAxis:[
     {
    type: 'value',
    max:120,
    min:0,
    interval:20,
    axisTick:{show:false,},
    axisLine: {
      show: false,
    },
    axisLabel: {
      color: "#E5E7EB"
    },
    splitLine: {
      lineStyle: {
        color: "#2B3B4F"
      },
      show: true
    },
  },

],
  yAxis: [{
    type: 'category',
    data: ['2019', '2020', '2021', '2022', '2023'],
    axisLabel: {
      color: "#E5E7EB"
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "#374151"
      },
      show: false
    },
    axisTick:{show:false},
    axisLine:{show:false}
  },
  {
    type: "category",
    data: [
      {
        value: "65%",
        textStyle: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "#B24F0B",
          padding: [6, 20, 6, 20],
          borderRadius: [6, 6, 6, 6],

        },
      },
      {
        value: "56%",
        textStyle: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "#B24F0B",
          padding: [6, 20, 6, 20],
          borderRadius: [6, 6, 6, 6],

        },
      },
      {
        value: "45%",
        textStyle: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "#057A55",
          padding: [6, 20, 6, 20],
          borderRadius: [6, 6, 6, 6],

        },
      },
      {
        value: "20%",
        textStyle: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "#057A55",
          padding: [6, 20, 6, 20],
          borderRadius: [6, 6, 6, 6],

        },
      },
      {
        value: "33%",
        textStyle: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "#057A55",
          padding: [6, 20, 6, 20],
          borderRadius: [6, 6, 6, 6],

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
    offset: -25,
  },
],
  series: [
    {
      name:'Entity Share',
      data: [50, 40, 76, 50, 47],
      type: 'bar',
      color:'#3B59BA',
      itemStyle: {
        borderRadius:[0, 8, 8, 0]
      },
      label:{
        show:true,
        position:'outside',
        color:'#E5E7EB',
      }
    },
    {
      name:'Discounted Invoice Value',
      data: [90, 98, 106, 100, 90],
      type: 'bar',
      color:'#B91D58',
      itemStyle: {
        borderRadius:[0, 8, 8, 0]
      },
      label:{
        show:true,
        position:'outside',
        color:'#E5E7EB',
      }
    }
  ]
 };

//  echart
const invoiceProcessingTime ={
  legend: {
    show: false,
  },
  grid: {
    top:'12%',
    bottom:'2%',
    right:'3%',
    left:'3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: ['20%', '20%'],
    data: ['$0-500', '$500-2K', '$2K-$5K', '>$5K'],
    axisLabel:{
      color:'#E5E7EB',
      fontSize:11,
      fontWeight:400,
    },
    axisTick:{show:false,},
    axisLine: {show: false,},
    splitLine: { show: false},
  },
  yAxis: {
    type: 'value',
    max:16,
    min:0,
    interval:2,
    splitLine: {
    lineStyle: {
    type: "dashed",
    color: "#374151"
    },
    show: false
    },
    axisLabel:{
      color:'#E5E7EB',
      fontSize:10,

    },
    axisTick:{show:false},
    axisLine:{show:false},
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
      name:'14 - 21 days',
      data: [4, 9, 10, 14],
      type: 'line',
      color:'#1570EF',
      areaStyle: {
      color: "#1570EF",
      opacity: 1
      },
      label:{
        show:true,
        position:'outside',
        color:'#FFF',
        fontWeight:600,
        fontSize:12,
        backgroundColor: "#1570EF",
      borderRadius: [100],
      width: 30,
      height: 30,
      borderColor: "#1F2A37",
      borderWidth: 3,
      position: "insideBottom",
      lineHeight: 30,
      offset: [0, 10]
      },
      lineStyle: {
        width: 0
      },
      symbolSize: 0,
    },

  ]
 };



  return (
    <Layout
      topTab={true}
      pageTitle={pageTitle}
      parentPageName={["Services & Disbursements"]}
    >
      <FilterComponent />
      <div className="mt-[24px]">
        <div className="grid md:grid-cols-3 2xl:grid-cols-6 gap-4">
          {/*col*/}
          <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] boxshadow02 backdrop-blur-[7.5px] p-4 space-y-2 rounded-2xl">
            <div className="flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7">
              <div>Invoices Raised</div>
              <div>$100K</div>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.15)] pt-1">
              <div className="flex items-center justify-between gap-2">
                <div className="opacity-60 text-white text-xs font-medium leading-normal">
                  LY $80k
                </div>
                <div className="flex items-center gap-2">
                  <i className="hex-rate-arrow-up text-[#069564] text-[10px] 3xl:text-[0.521vw]"></i>
                  <span className="text-white text-[10px] font-medium leading-normal opacity-60">
                    25% LY VAR
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*col*/}
          <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] boxshadow02 backdrop-blur-[7.5px] p-4 space-y-2 rounded-2xl">
            <div className="flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7">
              <div>Invoices Approved</div>
              <div>$100K</div>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.15)] pt-1">
              <div className="flex items-center justify-between gap-2">
                <div className="opacity-60 text-white text-xs font-medium leading-normal">
                  LY $80k
                </div>
                <div className="flex items-center gap-2">
                  <i className="hex-rate-arrow-up text-[#069564] text-[10px] 3xl:text-[0.521vw]"></i>
                  <span className="text-white text-[10px] font-medium leading-normal opacity-60">
                    25% LY VAR
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*col*/}
          <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] boxshadow02 backdrop-blur-[7.5px] p-4 space-y-2 rounded-2xl">
            <div className="flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7">
              <div>Invoices Rejected</div>
              <div>$100K</div>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.15)] pt-1">
              <div className="flex items-center justify-between gap-2">
                <div className="opacity-60 text-white text-xs font-medium leading-normal">
                  LY $80k
                </div>
                <div className="flex items-center gap-2">
                  <i className="hex-rate-arrow-up text-[#069564] text-[10px] 3xl:text-[0.521vw]"></i>
                  <span className="text-white text-[10px] font-medium leading-normal opacity-60">
                    25% LY VAR
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*col*/}
          {/*col*/}
          <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] boxshadow02 backdrop-blur-[7.5px] p-4 space-y-2 rounded-2xl">
            <div className="flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7">
              <div>Invoices In Progress</div>
              <div>$100K</div>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.15)] pt-1">
              <div className="flex items-center justify-between gap-2">
                <div className="opacity-60 text-white text-xs font-medium leading-normal">
                  LY $80k
                </div>
                <div className="flex items-center gap-2">
                  <i className="hex-rate-arrow-up text-[#069564] text-[10px] 3xl:text-[0.521vw]"></i>
                  <span className="text-white text-[10px] font-medium leading-normal opacity-60">
                    25% LY VAR
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*col*/}
          <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] boxshadow02 backdrop-blur-[7.5px] p-4 space-y-2 rounded-2xl">
            <div className="flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7">
              <div>BEAR</div>
              <div>$100K</div>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.15)] pt-1">
              <div className="flex items-center justify-between gap-2">
                <div className="opacity-60 text-white text-xs font-medium leading-normal">
                  LY $80k
                </div>
                <div className="flex items-center gap-2">
                  <i className="hex-rate-arrow-up text-[#069564] text-[10px] 3xl:text-[0.521vw]"></i>
                  <span className="text-white text-[10px] font-medium leading-normal opacity-60">
                    25% LY VAR
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*col*/}
          <div className="bg-[rgba(17,25,40,0.60)] border border-[#4B5563] boxshadow02 backdrop-blur-[7.5px] p-4 space-y-2 rounded-2xl">
            <div className="flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7">
              <div>SPI</div>
              <div>$100K</div>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.15)] pt-1">
              <div className="flex items-center justify-between gap-2">
                <div className="opacity-60 text-white text-xs font-medium leading-normal">
                  LY $80k
                </div>
                <div className="flex items-center gap-2">
                  <i className="hex-rate-arrow-up text-[#069564] text-[10px] 3xl:text-[0.521vw]"></i>
                  <span className="text-white text-[10px] font-medium leading-normal opacity-60">
                    25% LY VAR
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*col*/}
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="grid lg:grid-cols-2 gap-4">
          {/*col*/}
          <div className="bg-[#111928] rounded-2xl p-4">
            <ChartWrapper
              title={"Committed Vs. Disbursement Amount Trend"}
              eyeIcon={true}
              infoIcon={true}
              Highlights={true}
              avgValue={true}
              data={
                <>
                  <div className="w-full h-[250px]">
                    <ReactEcharts
                      option={committedDisbursement}
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
              title={"Discount Rate"}
              eyeIcon={true}
              infoIcon={true}
              Highlights={true}
              avgValue={true}
              data={
                <>
                  <div className="w-full  h-[200px] xl:h-[170px] 3xl:h-[8.854vw]">
                    <ReactEcharts
                      option={discountRate}
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
                    <div className="h-[0.052vw] bg-slate-600 text-center mt-[24px] lg:mt-[1.042vw] xl:mt-[1.042vw] 3xl:mt-[1.042vw]"></div>
                    <div className="flex justify-center gap-4 mt-[20px] xl:mt-[1.042vw] 3xl:mt-[0.521vw] ">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#1B4EB2] rounded-[2px]"></div>
                        <div className="text-[#fff] text-[10px] xl:text-[0.677vw]  3xl:text-[0.677vw] pl-[4px]">
                        Max
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#D67309] rounded-[2px]"></div>
                        <div className="text-[#fff] text-[10px] xl:text-[0.677vw]  3xl:text-[0.677vw] pl-[4px]">
                        Avg
                        </div>
                      </div>
                      <div className="flex  items-center gap-1">
                        <div className="w-2 h-2 bg-[#A9B9D0] rounded-[2px]"></div>
                        <div className="text-[#fff] text-[10px]  xl:text-[0.677vw]  3xl:text-[0.677vw] pl-[4px]">
                          {" "}
                          Min
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
              title={"Entity Share on Discounted Value ($K)"}
              eyeIcon={true}
              infoIcon={true}
              Highlights={true}
              avgValue={true}
              data={
                <>
                  <div className="w-full h-[250px]">
                    <ReactEcharts
                      option={entityShare}
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
              title={"Invoice Processing Time"}
              eyeIcon={true}
              infoIcon={true}
              Highlights={true}
              avgValue={true}
              data={
                <>
                  <div className="w-full h-[250px]">
                    <ReactEcharts
                      option={invoiceProcessingTime}
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
