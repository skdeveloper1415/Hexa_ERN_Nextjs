"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import ChartWrapper from "../components/chartwrapper";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "next-themes";
import BarChartWithGradiant from "../components/chart/barchartwithgradiant";


export default function Index() {
  
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  // echart
  const LineChart = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: 0,
      left: 0,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: "#D1D5DB",
      },
    },
    grid: {
      left: "1%",
      right: "1%",
      top: "15%",
      bottom: "12%",
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
  },
  yAxis: {
    type: 'value',
    max:650,
    interval:130,
    axisLabel: {
          show: false,
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
      data: [90, 160, 180, 120, 200],
      type: 'bar',
      color:'#354998',
       label: {
          show: true,
          formatter: "${c}K",
          color: "#E5E7EB",
          position: "inside",
          padding: [4, 4, 4, 4],
          fontSize: '10px'
        },
      itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0.2,
              color: "rgba(21,112,239,0.95)",
            },
            {
              offset: 1,
              color: "#354998",
            },
          ]),
          
      borderRadius: [8, 8, 0, 0]
        },
    },
    {
      name:'FRN Count',
      data: [451, 503, 469, 526, 605],
      type: 'line',
      smooth: true,
      color:'#D62C72',
      label: {
          show: true,
          color: "#D1D5DB",
          position: "top",
          backgroundColor: "#4E0922",
          padding: [4, 4, 4, 4],
          fontSize: '10px'
        },
    }
  ]
  };
  
  const Disbursements ={
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: -4,
      left: '5%',
      itemWidth:8,
      itemHeight:8,
      textStyle: {
        color: "#D1D5DB",
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "5%",
      bottom: "15%",
      containLabel: true,
    },
  xAxis: {
    type: 'category',
    data: ['2019', '2020', '2021', '2022', '2023'],
    splitLine: { show: false },
        axisTick: { show: false },
  },
  yAxis: {
    type: 'value',
    max:300,
    interval:50,
    min:50,
    axisLabel: {
          show: true,
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
      name:'Committed',
      data: [90, 160, 180, 120, 200],
      type: 'bar',
      barWidth:'40%',
      color:'#354998',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          {
            offset: 0.2,
            color: "rgba(21,112,239,0.95)",
          },
          {
            offset: 1,
            color: "#354998",
          },
        ]),
        
    borderRadius: [8, 8, 0, 0]
      },
       label: {
          show: true,
          formatter: "${c}K",
          color: "#E5E7EB",
          position: "inside",
          padding: [4, 4, 4, 4],
          fontSize: '8px'
        },
    },
    {
      name:'Disbursed',
      data: [90, 160, 180, 120, 200],
      type: 'bar',
      barWidth:'40%',
      color:'#801B40',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          {
            offset: 0.2,
            color: "rgba(214,44,114,0.95)",
          },
          {
            offset: 1,
            color: "#801B40",
          },
        ]),
        
    borderRadius: [8, 8, 0, 0]
      },
       label: {
          show: true,
          formatter: "${c}K",
          color: "#E5E7EB",
          position: "inside",
          padding: [4, 4, 4, 4],
          fontSize: '8px'
        },
    },
  ]
  }
  
  return (
    <>
      <Head>
        <title>Welcome to Hexa Erate Dashboard</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden relative min-h-[100vh] py-[18px] xl:py-[1.094vw] px-[30px] xl:px-[3.125vw] main_wrap">
        
        {/* <div className="absolute top-[-335px] md:top-[-435px] lg:top-[-525px] right-[-420px]">
          <Image width="1511" height="1611" src="/assets/images/landing-img.png" alt="Cyber Security 360" />
        </div> */}
        
        <div className="relative">
          
          <div className="text-white lg:max-w-[43.75vw] mb-[32px] xl:mb-[1.667vw]">
            <div className="">
              <Image width="240" height="54" src="/assets/images/landing-logo.svg" alt="Hexalytics" />
            </div>
            <h1 className="text-white text-3xl font-normal leading-normal mt-[100px]">Welcome to <span className='font-bold'>e-Rate</span> Dashboard</h1>
          </div>
          <div className="xl:max-w-[57.917vw] mb-[16px] xl:mb-[0.833vw]">
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[12px] xl:gap-[0.833vw] text-white'>
              {/*col*/}
              <div className="bg-[#111928] rounded-2xl p-4 space-y-[12px]">
                <div className="pb-[8px] border-b border-[rgba(201,211,219,0.25)]">FRN Count</div>
                <div className="flex items-center justify-between text-center">
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Current Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">605</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  <div className="custm_divider"></div>
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Last Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">605</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  {/*col*/}
                </div>
              </div>
              {/*col*/}
              <div className="bg-[#111928] rounded-2xl p-4 space-y-[12px]">
                <div className="pb-[8px] border-b border-[rgba(201,211,219,0.25)]">Total Requested Funds</div>
                <div className="flex items-center justify-between text-center">
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Current Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">$200K</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  <div className="custm_divider"></div>
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Last Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">$120K</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  {/*col*/}
                </div>
              </div>
              {/*col*/}
              <div className="bg-[#111928] rounded-2xl p-4 space-y-[12px]">
                <div className="pb-[8px] border-b border-[rgba(201,211,219,0.25)]">Total Committed</div>
                <div className="flex items-center justify-between text-center">
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Current Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">$150K</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  <div className="custm_divider"></div>
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Last Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">$100K</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  {/*col*/}
                </div>
              </div>
              {/*col*/}
              <div className="bg-[#111928] rounded-2xl p-4 space-y-[12px]">
                <div className="pb-[8px] border-b border-[rgba(201,211,219,0.25)]">Total Disbursed</div>
                <div className="flex items-center justify-between text-center">
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Current Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">$100K</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  <div className="custm_divider"></div>
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Last Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">$75K</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  {/*col*/}
                </div>
              </div>
              {/*col*/}
              <div className="bg-[#111928] rounded-2xl p-4 space-y-[12px]">
                <div className="pb-[8px] border-b border-[rgba(201,211,219,0.25)]">Remaining</div>
                <div className="flex items-center justify-between text-center">
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Current Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">$50K</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  <div className="custm_divider"></div>
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Last Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">$25K</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  {/*col*/}
                </div>
              </div>
              {/*col*/}
              <div className="bg-[#111928] rounded-2xl p-4 space-y-[12px]">
                <div className="pb-[8px] border-b border-[rgba(201,211,219,0.25)]">Utilised %</div>
                <div className="flex items-center justify-between text-center">
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Current Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">67%</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  <div className="custm_divider"></div>
                  {/*col*/}
                  <div className='space-y-[8px] py-1 px-2'>
                    <div className="text-white opacity-60 text-sm font-medium leading-normal">Last Year</div>
                    <div className="text-white text-2xl font-medium leading-normal">75%</div>
                    <div className="text-[#057A55] text-sm font-normal leading-5">15% LP Var</div>
                  </div>
                  {/*col*/}
                </div>
              </div>
            </div>
          </div>
          
          <div className="tileLinearGradient border border-[#374151] flex justify-between items-center text-white rounded-2xl mb-[16px] xl:mb-[0.833vw]">
            <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[1.04vw] px-[20px] xl:px-[1.25vw] py-[10px]">Other Important Facts</p>
            <Link href="/snapshotview" className="yellow_gradient p-[16px] xl:p-[1.04vw] text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[1.04vw] font-bold rounded-r-2xl w-[200px] md:w-[300px] xl:w-[23.854vw] text-center">
              View Dashboard
              <i className="hex-rate-export ml-[14px] xl:ml-[0.833vw]"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[12px] xl:gap-[0.833vw]">
            <div className="box-shadow1 backdrop-sepia-[7.5px] bg-[rgba(17,25,40,0.60)] p-[16px] 3xl:p-[0.833vw] border border-[#4B5563] rounded-[16px] 3xl:rounded-[0.833vw]">
              <ChartWrapper
                  title={"FNR Overview"}
                  ExportIcon={false}
                  eyeIcon={true}
                  tabSection={false}
                  infoIcon={true}
                  bulbIcon={false}
                  downloadIcon={false}
                  graphIcon={false}
                  expand={false}
                  historicalPrice={false}
                  dropdown1={false}
                  avgValue={true}
                  avgValueText={false}                  
                  data={
                    <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] pb-[12px] 3xl:pb-[0.625vw] pt-[20px] 3xl:pt-[1.641vw]">
                      <div className="w-full h-[170px] 3xl:h-[8.854vw]">
                        <ReactEcharts
                          option={LineChart}
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                    </div>
                  }
              />
            </div>
            
            <div className="grid gap-[10px] xl:gap-[0.625vw]">
              <div className="box-shadow1 backdrop-sepia-[7.5px] bg-[rgba(17,25,40,0.60)] p-[16px] 3xl:p-[0.833vw] border border-[#4B5563] rounded-[16px] 3xl:rounded-[0.833vw]">
                <div className={`text-[#E5E7EB] text-[18px] xl:text-[14px] 3xl:text-[0.938vw] font-semibold pb-[2px] flex items-center justify-between`}>
                  <div className="text-[#E5E7EB] text-[16px] font-semibold leading-normal">Training Participations</div>
                  <div className="text-[#FFFFFF] text-[18px] font-bold leading-normal">Total FRN: 605</div>
                </div>
                <div className="bg-[#1F2A37] px-[36px] xl:px-[1.875vw] pt-[10px] xl:pt-[0.625vw] pb-[6px] rounded-[8px] text-white ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[18px] xl:gap-[0.625vw]">
                    <div className="flex items-center flex-col">
                      <p className="flex justify-center items-center text-[14px] 3xl:text-[0.729vw] mb-[2px]">
                        <i className="bg-[#35D294] w-[10px] xl:w-[0.625vw] h-[10px] xl:h-[0.625vw] mr-[4px] rounded-full"></i>
                        Completed
                      </p>
                     <div className="flex items-center gap-3">
                      <div className="text-white text-xl font-bold leading-normal">400</div>
                      <div className="text-white text-sm font-bold leading-normal">32%</div>
                     </div>
                    </div>                  
                    <div className="flex items-center flex-col">
                      <p className="flex justify-center items-center text-[14px] 3xl:text-[0.729vw] mb-[2px]">
                        <i className="bg-[#F8B720] w-[10px] xl:w-[0.625vw] h-[10px] xl:h-[0.625vw] mr-[4px] rounded-full"></i>
                        Category 1
                      </p>
                     <div className="flex items-center gap-3">
                      <div className="text-white text-xl font-bold leading-normal">100</div>
                      <div className="text-white text-sm font-bold leading-normal">25%</div>
                     </div>
                    </div>                   
                    <div className="flex items-center flex-col">
                      <p className="flex justify-center items-center text-[14px] 3xl:text-[0.729vw] mb-[2px]">
                        <i className="bg-[#C81E1E] w-[10px] xl:w-[0.625vw] h-[10px] xl:h-[0.625vw] mr-[4px] rounded-full"></i>
                        Category 2
                      </p>
                     <div className="flex items-center gap-3">
                      <div className="text-white text-xl font-bold leading-normal">300</div>
                      <div className="text-white text-sm font-bold leading-normal">75%</div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-shadow1 backdrop-sepia-[7.5px] bg-[rgba(17,25,40,0.60)] p-[16px] 3xl:p-[0.833vw] border border-[#4B5563] rounded-[16px] 3xl:rounded-[0.833vw]">
              <div className={`text-[#E5E7EB] text-[18px] xl:text-[14px] 3xl:text-[0.938vw] font-semibold pb-[2px] flex items-center justify-between`}>
                  <div className="text-[#E5E7EB] text-[16px] font-semibold leading-normal">Invoice Status</div>
                  <div className="text-[#FFFFFF] text-[18px] font-bold leading-normal">Invoices: 1000</div>
                </div>
                <div className="bg-[#1F2A37] px-[36px] xl:px-[1.875vw] pt-[10px] xl:pt-[0.625vw] pb-[6px] rounded-[8px] text-white ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[18px] xl:gap-[0.625vw]">
                  <div className="flex items-center flex-col">
                      <p className="flex justify-center items-center text-[14px] 3xl:text-[0.729vw] mb-[2px]">
                        <i className="bg-[#35D294] w-[10px] xl:w-[0.625vw] h-[10px] xl:h-[0.625vw] mr-[4px] rounded-full"></i>
                        Approved
                      </p>
                     <div className="flex items-center gap-3">
                      <div className="text-white text-xl font-bold leading-normal">500</div>
                      <div className="text-white text-sm font-bold leading-normal">50%</div>
                     </div>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="flex justify-center items-center text-[14px] 3xl:text-[0.729vw] mb-[2px]">
                        <i className="bg-[#F8B720] w-[10px] xl:w-[0.625vw] h-[10px] xl:h-[0.625vw] mr-[4px] rounded-full"></i>
                        In Progress
                      </p>
                     <div className="flex items-center gap-3">
                      <div className="text-white text-xl font-bold leading-normal">300</div>
                      <div className="text-white text-sm font-bold leading-normal">30%</div>
                     </div>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="flex justify-center items-center text-[14px] 3xl:text-[0.729vw] mb-[2px]">
                        <i className="bg-[#C81E1E] w-[10px] xl:w-[0.625vw] h-[10px] xl:h-[0.625vw] mr-[4px] rounded-full"></i>
                        Rejected
                      </p>
                     <div className="flex items-center gap-3">
                      <div className="text-white text-xl font-bold leading-normal">200</div>
                      <div className="text-white text-sm font-bold leading-normal">20%</div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="box-shadow1 backdrop-sepia-[7.5px] bg-[rgba(17,25,40,0.60)] p-[16px] 3xl:p-[0.833vw] border border-[#4B5563] rounded-[16px] 3xl:rounded-[0.833vw]">
              <ChartWrapper
                title={"Disbursements ($K)"}
                ExportIcon={false}
                eyeIcon={true}
                tabSection={false}
                infoIcon={true}
                bulbIcon={false}
                downloadIcon={false}
                graphIcon={false}
                expand={false}
                historicalPrice={false}
                dropdown1={false}
                avgValue={true}
                avgValueText={false} 
            data={
              <div className="bg-[#1F2A37] rounded-[12px] 3xl:rounded-[0.625vw] pb-[12px] 3xl:pb-[0.625vw] pt-[20px] 3xl:pt-[1.641vw]">
                      <div className="w-full h-[170px] 3xl:h-[8.854vw]">
                        <ReactEcharts
                          option={Disbursements}
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
    </>
  );
}
