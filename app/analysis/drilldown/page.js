"use client";
import React, { useState } from 'react'
import Layout from '../../../layouts/pagelayout'
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Dropdown } from "primereact/dropdown";
import FilterComponent from '../../../components/filtercomponent/page';
import Link from 'next/link';
import { DrillDownChart } from './drilldownchart';

export default function FundRequest() {
    const [activeTab, setActiveTab] = useState(0)
    const [pageTitle, setPageTitle] = useState("Fund Request");
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <Layout topTab={true} pageTitle={pageTitle} parentPageName={["Fund Request"]}>
        <FilterComponent />
        <div className='grid grid-cols-12 gap-8 3xl:gap-[2.969vw] 3xl:mt-[0.833vw] mt-4'>
      {/**col-span-2***/}
      <div className='col-span-12 xl:col-span-3'>
      <div className='bg-[rgba(17,25,40,0.65)] border border-[#374151] rounded-2xl 3xl:rounded-[0.833vw] box-shadow01 p-4 space-y-4 3xl:space-y-[0.833vw] h-full'>
      <div>
        <div className='3xl:space-y-[1.042vw] xl:space-y-5 mt-2 3xl:mt-[0.417vw] max-xl:grid max-xs:grid-cols-1 max-xl:grid-cols-4 max-md:grid-cols-2 max-xl:gap-5 max-xl:items-end'>
          {/**col**/}
          <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
          <label htmlFor="username" className='text-white text-sm font-medium leading-5 3xl:text-[0.729vw] 3xl:leading-[1.042vw]'>Select School</label>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Asset Management" className="w-full custDropdown h-10 3xl:h-[2.188vw]" panelClassName="custom-dropdown-panel" />
          </div>
          {/**col**/}
          <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
          <label htmlFor="username" className='text-white text-sm font-medium leading-5 3xl:text-[0.729vw] 3xl:leading-[1.042vw]'>Module</label>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="IT Asset Security" className="w-full custDropdown h-10 3xl:h-[2.188vw]" panelClassName="custom-dropdown-panel" />
          </div>
          {/**col**/}
          <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
          <label htmlFor="username" className='text-white text-sm font-medium leading-5 3xl:text-[0.729vw] 3xl:leading-[1.042vw]'>Metric</label>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Patch Status" className="w-full custDropdown h-10 3xl:h-[2.188vw]" panelClassName="custom-dropdown-panel" />
          </div>
          {/**col**/}
          <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
          <label htmlFor="username" className='text-white text-sm font-medium leading-5 3xl:text-[0.729vw] 3xl:leading-[1.042vw]'>Level 1</label>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Criticality" className="w-full custDropdown h-10 3xl:h-[2.188vw]" panelClassName="custom-dropdown-panel" />
          </div>
          {/**col**/}
          <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
          <label htmlFor="username" className='text-white text-sm font-medium leading-5 3xl:text-[0.729vw] 3xl:leading-[1.042vw]'>Level 2</label>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Asset Type" className="w-full custDropdown h-10 3xl:h-[2.188vw]" panelClassName="custom-dropdown-panel" />
          </div>
          {/**col**/}
          <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
          <label htmlFor="username" className='text-white text-sm font-medium leading-5 3xl:text-[0.729vw] 3xl:leading-[1.042vw]'>Level 3</label>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Aging" className="w-full custDropdown h-10 3xl:h-[2.188vw]" panelClassName="custom-dropdown-panel" />
          </div>
          {/**col**/}
          <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
          <label htmlFor="username" className='text-white text-sm font-medium leading-5 3xl:text-[0.729vw] 3xl:leading-[1.042vw]'>Level 4</label>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Patch Status" className="w-full custDropdown h-10 3xl:h-[2.188vw]" panelClassName="custom-dropdown-panel" />
          </div>
          {/**col**/}
          <div className='3xl:py-[0.833vw] xl:py-4 flex items-center justify-center'>
            <Link href={''} className='text-[#E5E7EB] text-sm font-medium leading-[18px] 3xl:text-[0.729vw] 3xl:leading-[0.938vw] inline-flex items-center justify-center gap-2 3xl:gap-[0.417vw] bg-[#1570EF] border border-[#1570EF] rounded 3xl:rounded-[0.208vw] px-3 py-2'><i className='hex-rate-plus text-xs 3xl:text-[0.625vw]'></i><span>Add Level</span></Link>
          </div>
        </div>
      </div>
      </div>
      </div>
      {/**col-span-10***/}
      <div className='col-span-9'>
        <div className='bg-[#111928] p-5 rounded-lg'>
            <div className='text-[#F2F2F5] text-base font-medium leading-5'>Drill down Analysis</div>
        <DrillDownChart />
        <div className='bg-[#263040] 3xl:rounded-[0.417vw] rounded-lg py-1.5 3xl:py-[0.313vw] px-4 3xl:px-[0.833vw] inline-flex flex-col mt-10 3xl:mt-[2.083vw]'>
            <div className='text-[#E0E3E9] text-xs font-normal leading-[18px] opacity-70'>Choose Dimensions</div>
            <div className='3xl:py-[0.417vw] py-2 text-left flex flex-wrap items-center gap-[14px] 3xl:gap-[0.729vw]'>
            <div className='3xl:space-y-[0.208vw] space-y-1'>
                <div className='text-[#D1D5DB] text-sm font-normal leading-[18px] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Module</div>
                <div className='text-[#E5E7EB] text-sm font-medium leading-[18xp] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Applications & Approval</div>
              </div>
              <div className='text-[#6C768B] text-sm 3xl:text-[0.729vw]'><i className='hex-rate-arrow-right'></i></div>
              <div className='3xl:space-y-[0.208vw] space-y-1'>
                <div className='text-[#D1D5DB] text-sm font-normal leading-[18px] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Metrics</div>
                <div className='text-[#E5E7EB] text-sm font-medium leading-[18xp] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>FRN Count</div>
              </div>
              <div className='text-[#6C768B] text-sm 3xl:text-[0.729vw]'><i className='hex-rate-arrow-right'></i></div>
              <div className='3xl:space-y-[0.208vw] space-y-1'>
                <div className='text-[#D1D5DB] text-sm font-normal leading-[18px] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Level 1</div>
                <div className='text-[#E5E7EB] text-sm font-medium leading-[18xp] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Criticality</div>
              </div>
              <div className='text-[#6C768B] text-sm 3xl:text-[0.729vw]'><i className='hex-rate-arrow-right'></i></div>
              <div className='3xl:space-y-[0.208vw] space-y-1'>
                <div className='text-[#D1D5DB] text-sm font-normal leading-[18px] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Level 2</div>
                <div className='text-[#E5E7EB] text-sm font-medium leading-[18xp] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Asset Type</div>
              </div>
              <div className='text-[#6C768B] text-sm 3xl:text-[0.729vw]'><i className='hex-rate-arrow-right'></i></div>
              <div className='3xl:space-y-[0.208vw] space-y-1'>
                <div className='text-[#D1D5DB] text-sm font-normal leading-[18px] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Level 3</div>
                <div className='text-[#E5E7EB] text-sm font-medium leading-[18xp] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Aging</div>
              </div>
              <div className='text-[#6C768B] text-sm 3xl:text-[0.729vw]'><i className='hex-rate-arrow-right'></i></div>
              <div className='3xl:space-y-[0.208vw] space-y-1'>
                <div className='text-[#D1D5DB] text-sm font-normal leading-[18px] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Level 4</div>
                <div className='text-[#E5E7EB] text-sm font-medium leading-[18xp] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]'>Patch Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Layout>
    )
}
