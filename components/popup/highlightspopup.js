import React, { use, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { ScrollPanel } from 'primereact/scrollpanel';
import Link from "next/link";

const HighlightsSidebar = (props) => {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const year = [{ name: "2024" }, { name: "2023" }, { name: "2022" }];
    const duration = [{ name: "Today" }, { name: "tommorrow" }];
    const type = [{ name: "All" }, { name: "March" }, { name: "April" }];

  return (
    <div>
      <Sidebar
        visible={props.visible}
        position="right"
        className="custmSidebar rounded-l-xl w-[100vw] lg:w-[100vw] xl:w-[80vw] 3xl:w-[70vw]"
        onHide={() => props.onHide(false)}
        blockScroll={true}
      >
        <div className='space-y-[16px]'>
            <div className='space-y-[20px] pt-5 px-5'>
            <div className="flex items-center justify-between">
                <div className="text-[#F2F2F5] text-xl font-semibold leading-5">Highlights</div>
                <div><Link href={''} className="bg-[#1F2A37] rounded-lg py-2 px-3 text-white text-xs font-normal leading-[18px]">See More Details</Link></div>
            </div>
            <div className="text-[#9EA3AA] text-sm font-normal leading-6 -tracking-[0.32px]">
                <p>Student 1Y Retention is progressing well with <span className="text-[#069564]">12%</span> growth in Fall 2022-23 compared to Fall 2021-22</p>
            </div>
            </div>
            <div className="bg-[#1F2A37] px-5">
                <div className='py-2 flex items-center gap-4'>
                {/*col*/}
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#111928]">
                <span className="text-[#6C768B] text-[10px] font-normal truncate">
                Select Year
                </span>
                <div className="FilterDropdown">
                <Dropdown
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.value)}
                options={year}
                optionLabel="name"
                placeholder="2024"
                className="min-w-[80px] bg-[#111928] placeholder:text-[#FFF] text-[#FFF]"
                panelClassName="customFilter"
                style={{border: "1px solid #111928"}}
                />
                </div>
                </div>
                {/*col*/}
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#111928]">
                <span className="text-[#6C768B] text-[10px] font-normal truncate">
                View By
                </span>
                <div className="FilterDropdown">
                <Dropdown
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.value)}
                options={year}
                optionLabel="name"
                placeholder="City"
                className="min-w-[80px] bg-[#111928] placeholder:text-[#FFF] text-[#FFF]"
                panelClassName="customFilter"
                style={{border: "1px solid #111928"}}
                />
                </div>
                </div>
                {/*col*/}
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[110px] hover:max-w-[140px] ease-in duration-300 overflow-hidden bg-[#111928]">
                <span className="text-[#6C768B] text-[10px] font-normal truncate">
                Urban/Rural
                </span>
                <div className="FilterDropdown">
                <Dropdown
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.value)}
                options={year}
                optionLabel="name"
                placeholder="All"
                className="min-w-[80px] bg-[#111928] placeholder:text-[#FFF] text-[#FFF] cust_d_icon"
                panelClassName="customFilter"
                style={{border: "1px solid #111928"}}
                />
                </div>
                </div>
                {/*col*/}
                <div className="flex">
                <Link href={''} className="bg-[#1A56DB] text-[#F2F2F5] text-sm font-medium leading-5 rounded-tl rounded-bl px-2.5 h-[40px] flex items-center">All</Link>
                <Link href={''} className="bg-[#111928] text-[#9EA3AA] text-sm font-medium leading-5 h-[40px] px-2.5 flex items-center hover:bg-[#1A56DB] hover:text-[#F2F2F5] transition ease-in-out delay-150 duration-300">In Window</Link>
                <Link href={''} className="bg-[#111928] text-[#9EA3AA] text-sm font-medium leading-5 h-[40px] px-2.5 flex items-center rounded-tr rounded-br hover:bg-[#1A56DB] hover:text-[#F2F2F5] transition ease-in-out delay-150 duration-300">Outside Window</Link>
                </div>
                {/*col*/}
                <div className="border-r border-[rgba(255,255,255,0.20)] flex">
                <Link href={''} className="bg-[#1A56DB] text-[#F2F2F5] text-sm font-medium leading-5 rounded-tl rounded-bl px-2.5 h-[40px] flex items-center">Count</Link>
                <Link href={''} className="bg-[#111928] text-[#9EA3AA] text-sm font-medium leading-5 h-[40px] px-2.5 flex items-center hover:bg-[#1A56DB] hover:text-[#F2F2F5] transition ease-in-out delay-150 duration-300">Amount</Link>
                </div>
                </div>
            </div>
            <div className='px-4'>
            {/*row*/}
            <ScrollPanel style={{ width: '100%', height: 'clamp(320px, 33.542vw, 730px)' }} className="custombar2">
            <table class="table-auto w-full table_ui">
            <thead>
            <tr>
            <th align="left">City</th>
            <th align="left" colSpan={2}>Service Category</th>
            <th align="center" className="w-[118px]">FRN Applications</th>
            <th align="center" className="w-[118px]">Certified</th>
            <th align="center" className="w-[118px]">Cancelled</th>
            <th align="center" className="w-[118px]">Success Rate</th>
            </tr>
            </thead>
            <tbody>
            {/*city 1*/}
            <tr>
            <td rowSpan={6}>City 1</td>
            <td rowSpan={2}>Category 1</td>
            <td>Internet Access And/Or Telecom</td>
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
            <td>Internet Access And/Or Telecom</td>
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
            <td rowSpan={4}>Category 2</td>
            <td>Data Transmission And/Or Internet</td>
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
            <td>Basic Maintenance of Internal Connections</td>
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
            <td>Internal Connections</td>
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
            <td>Internet Access And/Or Telecom</td>
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
            {/*city 2*/}
            <tr>
            <td rowSpan={6}>City 2</td>
            <td rowSpan={2}>Category 1</td>
            <td>Internet Access And/Or Telecom</td>
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
            <td>Internet Access And/Or Telecom</td>
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
            <td rowSpan={4}>Category 2</td>
            <td>Data Transmission And/Or Internet</td>
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
            <td>Basic Maintenance of Internal Connections</td>
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
            <td>Internal Connections</td>
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
            <td>Internet Access And/Or Telecom</td>
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
            {/*city 2*/}
            {/*city 3*/}
            <tr>
            <td rowSpan={6}>City 3</td>
            <td rowSpan={2}>Category 1</td>
            <td>Internet Access And/Or Telecom</td>
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
            <td>Internet Access And/Or Telecom</td>
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
            <td rowSpan={4}>Category 2</td>
            <td>Data Transmission And/Or Internet</td>
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
            <td>Basic Maintenance of Internal Connections</td>
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
            <td>Internal Connections</td>
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
            <td>Internet Access And/Or Telecom</td>
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
            {/*city 3*/}
            </tbody>
            </table>
            </ScrollPanel>
            </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default HighlightsSidebar;
