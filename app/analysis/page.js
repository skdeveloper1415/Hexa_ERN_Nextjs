"use client";
import React, { useState } from 'react'
import Layout from '../../layouts/pagelayout'
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import FilterComponent from '../../components/filtercomponent/page';
import { Dropdown } from "primereact/dropdown";
import { Card } from 'primereact/card';
import { ScrollPanel } from 'primereact/scrollpanel';

export default function Analysis() {
    const [activeTab, setActiveTab] = useState(0)
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
      title: 'FRN Count',
      subTitle: '100',
      content: '25% LY VAR',
      icon: 'hex-rate-arrow-up',
      LY:'LY 80'
    },
    {
        title: 'Certified FRN Count ',
        subTitle: '75',
        content: '25% LY VAR',
        icon: 'hex-rate-arrow-up',
        LY:'LY 50'
    },
    {
      title: 'Cancelled FRN Count',
      subTitle: '35',
      content: '25% LY VAR',
      icon: 'hex-rate-arrow-up',
      LY:'LY 35'
    },
    {
      title: 'Success Rate',
      subTitle: '75%',
      content: '25% LY VAR',
      icon: 'hex-rate-arrow-up',
      LY:'LY 70%'
    },
    {
      title: 'FRN Requested Amt',
      subTitle: '$100K',
      content: '25% LY VAR',
      icon: 'hex-rate-arrow-up',
      LY:'LY $80K'
    },

    {
        title: 'Commited',
        subTitle: '$75K',
        content: '25% LY VAR',
        icon: 'hex-rate-arrow-up',
        LY:'LY $80K'
      },
      {
        title: 'Disbursed',
        subTitle: '$60K',
        content: '25% LY VAR',
        icon: 'hex-rate-arrow-up',
        LY:'LY $60K'
      },
      {
        title: 'Remaning',
        subTitle: '$15K',
        content: '25% LY VAR',
        icon: 'hex-rate-arrow-up',
        LY:'LY $15K'
      },
      {
        title: 'FRN Requested Amt',
        subTitle: '$100K',
        content: '25% LY VAR',
        icon: 'hex-rate-arrow-up',
        LY:'LY $80K'
      }
  ]

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };
    return (
        <Layout topTab={true} pageTitle={pageTitle} parentPageName={["Fund Request"]}>
        <FilterComponent />
        <div className="mt-[24px] 3xl:mt-[1.25vw]">
          <div className="grid grid-cols-12 gap-[15px] 3xl:gap-[1.25vw]">
            <div className='col-span-12 xl:col-span-3'>
            <div className='bg-[rgba(17,25,40,0.60)] backdrop-blur-[7.5px] boxshadow02 border border-[#4B5563] p-4 rounded-2xl space-y-[20px] max-xl:grid max-xl:grid-cols-3 max-xl:gap-4 max-md:grid-cols-1 h-full'>
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
            <div className='rounded-lg border border-[#374151] p-3 space-y-[16px]'>
            <div className='text-[#E0E3E9] text-sm font-medium leading-5'>Select Dimension 1</div>
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
            <div className='rounded-lg border border-[#374151] p-3 space-y-[16px]'>
            <div className='text-[#E0E3E9] text-sm font-medium leading-5'>Select Dimension 2</div>
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
            <div className='col-span-12 xl:col-span-9'>
                <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-5'>
                {cardData.map((data, index) => (
                <div key={index} className="p-m-2">
                <Card className={activeCardIndex === index ? 'card_spacing active_card_ui cursor-pointer' : 'card_ui card_spacing cursor-pointer'}  onClick={() => handleCardClick(index)}>
                <div className="">
                <div className='flex items-center justify-between text-[#F2F2F5] text-sm font-semibold leading-7'>
                <div><h1>{data.title}</h1></div>
                <div><h3>{data.subTitle}</h3></div>
                </div>
                <div className='border-t border-[rgba(255,255,255,0.15)] pt-1'>
                <div className='flex items-center justify-between gap-2'>
                <div className='opacity-60 text-white text-xs font-medium leading-normal'><p>{data.LY}</p></div>
                <div className='flex items-center gap-2'>
                  <i className={`text-[#069564] text-xs ${data.icon}`}></i>
                  <span className='text-white text-[10px] font-medium leading-normal opacity-60'><p>{data.content}</p></span>
                </div>
                </div>
                </div>
                </div>
                </Card>
                </div>
                ))}
                </div>
                <div className='mt-[20px]'>
                <div className='border border-[#42536D] rounded-2xl p-[0.1px] bg-[#42536D]'>
                <ScrollPanel style={{ width: '100%', height: 'clamp(320px, 33.542vw, 730px)' }} className="custombar2">
            <table class="table-auto w-full table_ui_second">
            <thead>
            <tr>
            <th align="center" rowSpan={3}>School</th>
            <th align="center"   colSpan={6}>Dimension 2</th>
            </tr>
            <tr>
            <th align="center" colSpan={2}>Category 1</th>
            <th align="center" colSpan={2}>Category 2</th>
            <th align="center" colSpan={2}>Total</th>
            </tr>
            <tr>
            <th align="center">CY</th>
            <th align="center">LY</th>
            <th align="center">CY</th>
            <th align="center">LY</th>
            <th align="center">CY</th>
            <th align="center">LY</th>
            </tr>
            </thead>
            <tbody>
            {/*city 1*/}
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 1</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 2</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 3</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 4</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 5</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            {/* <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 6</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr> */}
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 6</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 7</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 8</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 9</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 10</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 11</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 12</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 13</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 14</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 15</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 16</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            <tr>
            <td><div className='text-[#E5E7EB] text-sm font-semibold leading-normal'>School 17</div></td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>100</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>20</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-down-line text-[#FFB5A5]"></i><span>12%</span></div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-between">
                    <div className="text-[#9EA3AA] text-sm font-semibold leading-normal"><p>80%</p></div>
                    <div className="flex items-center gap-2 text-white text-xs font-medium leading-normal"><i className="hex-rate-arrow-up text-[#069564]"></i><span>12%</span></div>
                </div>
            </td>
            </tr>
            {/*city 1*/}
            </tbody>
            </table>
            </ScrollPanel>
            </div>
                </div>
            </div>
          </div>
        </div>
        </Layout>
    )
}
