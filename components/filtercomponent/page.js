"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Work_Sans } from "next/font/google";
import { Dropdown } from "primereact/dropdown";
import { usePathname, useRouter } from "next/navigation";

const myworksans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
// const router = useRouter();
export default function FilterComponent(props) {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const year = [{ name: "2024" }, { name: "2023" }, { name: "2022" }];
  const duration = [{ name: "Today" }, { name: "tommorrow" }];
  const type = [{ name: "All" }, { name: "March" }, { name: "April" }];
  
  const pathname = usePathname();

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };



  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <div className="w-full min-h-[65px] xl:min-h-[3.65vw] mt-[14px] xl:mt-[0.833vw] bg-[#111928] flex xl:flex-wrap lg:flex-nowrap md:flex-nowrap justify-between rounded-[8px] xl:rounded-[0.417vw] pl-2 xl:pl-[0.833vw] xl:pr-0 pr-2 shadow">
          <div className="flex flex-wrap justify-start items-center gap-1 pt-2 pb-1 xl:py-1">
            <div className=" lg:w-auto w-full">
            <div className="flex flex-wrap lg:flex-nowrap gap-[4px] items-center">
{
pathname ==='/fundrequest'?
<>
<>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
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
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          style={{border: "1px solid #263040"}}
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal">
          City
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal">
          Zipcode
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal truncate">
          Service Category
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal truncate">
          Service Type
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[100px] hover:max-w-[170px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal truncate">
          Rural / Urban
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF] cust_d_icon"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[100px] hover:max-w-[170px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal truncate">
          Recipient Entity Number
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="bg-[#263040] placeholder:text-[#FFF] text-[#FFF] cust_d_icon"
          panelClassName="customFilter"
          />
          </div>
          </div>
          </>

          <div className="border-r border-[rgba(255,255,255,0.20)] flex">
          <Link href={''} className="bg-[#1A56DB] text-[#F2F2F5] text-sm font-medium leading-5 rounded-tl rounded-bl px-2.5 h-[40px] flex items-center">Count</Link>
          <Link href={''} className="bg-[#111928] text-[#F2F2F5] text-sm font-medium leading-5 h-[40px] px-2.5 flex items-center">Amount</Link>
          </div>
</>
: pathname ==='/servicesdisbursements'?
<>
<>
<div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
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
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          style={{border: "1px solid #263040"}}
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal">
          City
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal">
          Zipcode
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal truncate">
          Service Category
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal truncate">
          Service Type
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[100px] hover:max-w-[170px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal truncate">
          Rural / Urban
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF] cust_d_icon"
          panelClassName="customFilter"
          />
          </div>
          </div>
          <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[100px] hover:max-w-[170px] ease-in duration-300 overflow-hidden bg-[#263040]">
          <span className="text-[#6C768B] text-[10px] font-normal truncate">
          Recipient Entity Number
          </span>
          <div className="FilterDropdown">
          <Dropdown
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={type}
          optionLabel="name"
          placeholder="All"
          style={{border: "1px solid #263040"}}
          className="bg-[#263040] placeholder:text-[#FFF] text-[#FFF] cust_d_icon"
          panelClassName="customFilter"
          />
          </div>
          </div>
          </>

          <div className="border-r border-[rgba(255,255,255,0.20)] flex">
          <Link href={''} className="bg-[#1A56DB] text-[#F2F2F5] text-sm font-medium leading-5 rounded-tl rounded-bl px-2.5 h-[40px] flex items-center">Count</Link>
          <Link href={''} className="bg-[#111928] text-[#F2F2F5] text-sm font-medium leading-5 h-[40px] px-2.5 flex items-center">Amount</Link>
          </div>
</>             
: pathname ==='/analysis'?
<>

                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[60px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
                  <span className="text-[#6C768B] text-[10px] font-normal">
                  Year
                  </span>
                  <div className="FilterDropdown">
                    <Dropdown
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.value)}
                      options={year}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[90px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
                      panelClassName="customFilter"
                      style={{border: "1px solid #263040"}}
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[60px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
                  <span className="text-[#6C768B] text-[10px] font-normal">
                  Month
                  </span>
                  <div className="FilterDropdown">
                    <Dropdown
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.value)}
                      options={type}
                      optionLabel="name"
                      placeholder="All"
                      style={{border: "1px solid #263040"}}
                      className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
                      panelClassName="customFilter"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                <div className="text-[#D1D5DB] text-[14px] font-normal px-[12px]">
                  <div className={myworksans.className}>
                    No filter applied yet
                  </div>
                </div>
                <Link
                  href=""
                  className="text-[#FFF] text-[12px] font-medium border border-[#42536D] rounded-[8px] xl:rounded-[0.417vw] px-2 py-1.5"
                  title="Add"
                >
                  Add{" "}
                  <i className="hex-rate-plus ml-1 text-[12px] xl:text-[0.625vw] text-white"></i>
                </Link>
                </div>
               
                
             
</> 
: pathname ==='/analysis/drilldown'?
<>

                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[60px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
                  <span className="text-[#6C768B] text-[10px] font-normal">
                  Year
                  </span>
                  <div className="FilterDropdown">
                    <Dropdown
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.value)}
                      options={duration}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[90px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
                      panelClassName="customFilter"
                      style={{border: "1px solid #263040"}}
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[60px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040]">
                  <span className="text-[#6C768B] text-[10px] font-normal">
                  Month
                  </span>
                  <div className="FilterDropdown">
                    <Dropdown
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.value)}
                      options={type}
                      optionLabel="name"
                      placeholder="All"
                      style={{border: "1px solid #263040"}}
                      className="min-w-[80px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
                      panelClassName="customFilter"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                <div className="text-[#D1D5DB] text-[14px] font-normal px-[12px]">
                  <div className={myworksans.className}>
                    No filter applied yet
                  </div>
                </div>
                <Link
                  href=""
                  className="text-[#FFF] text-[12px] font-medium border border-[#42536D] rounded-[8px] xl:rounded-[0.417vw] px-2 py-1.5"
                  title="Add"
                >
                  Add{" "}
                  <i className="hex-rate-plus ml-1 text-[12px] xl:text-[0.625vw] text-white"></i>
                </Link>
                </div>
               
                
             
</> 
: pathname ==='/analysis/peergroup'?
<>
<div>
  <Link href={''} className="bg-[#1A56DB] text-white py-1 px-2.5 text-xs font-medium leading-5 rounded-tl-[4px] rounded-bl-[4px]">All</Link>
  <Link href={''} className="bg-[#1F2A37] text-white py-1 px-2.5 text-xs font-medium leading-5 ">Category</Link>
  <Link href={''} className="bg-[#1F2A37] text-white py-1 px-2.5 text-xs font-medium leading-5 rounded-tr-[4px] rounded-br-[4px] hover:bg-[#1A56DB] hover:text-white transition ease-in-out delay-150 duration-300">Category2</Link>
</div>
</>
: pathname ==='/analysis/correlation'?
<>
<div>
  <Link href={''} className="bg-[#1A56DB] text-white py-1 px-2.5 text-xs font-medium leading-5 rounded-tl-[4px] rounded-bl-[4px]">All</Link>
  <Link href={''} className="bg-[#1F2A37] text-white py-1 px-2.5 text-xs font-medium leading-5 ">Category</Link>
  <Link href={''} className="bg-[#1F2A37] text-white py-1 px-2.5 text-xs font-medium leading-5 rounded-tr-[4px] rounded-br-[4px] hover:bg-[#1A56DB] hover:text-white transition ease-in-out delay-150 duration-300">Category2</Link>
</div>
</>
:
<>
</>

}



                
              </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-[4px] items-center">
          

          {/* <div className="text-[#D1D5DB] text-[14px] font-normal px-[12px]">
          <div className={myworksans.className}>
          No filter applied yet
          </div>
          </div>
          <Link
          href=""
          className="text-[#FFF] text-[12px] font-medium border border-[#42536D] rounded-[8px] xl:rounded-[0.417vw] px-2 py-1.5"
          title="Add"
          >
          Add{" "}
          <i className="hex-rate-plus ml-1 text-[12px] xl:text-[0.625vw] text-white"></i>
          </Link> */}
          </div>
            </div>

            {/* <div className="text-[#9CA1AB] text-[14px] font-normal px-[12px] dark:text-[#B3B9C6]">
              <div className={myworksans.className}>No filter applied yet</div>
            </div>
            <Link
              href=""
              className="text-[#24262D] text-[12px] font-medium border border-[#ECEFF3] rounded-[8px] xl:rounded-[0.417vw] px-2 py-1.5 dark:text-white dark:border-[#363A44] hover:bg-[#F5F6F8] dark:hover:text-[black] dark:bg-[#24262D] dark:hover:bg-[#c3c3c6] "
              title="Add"
            >
              Add <i className="redingtonHR-pluse ml-1"></i>
            </Link> */}
          </div>
          <div className="flex xl:justify-end gap-2 xl:py-0 pt-1 pb-2 xl:w-auto w-full">
            <Link
              href=""
              className="p-2 xl:text-end text-center self-center xl:w-auto w-1/2 group"
              title="Applied Filters"
            >
               <i className="hex-rate-arrow-left-line text-[12px] xl:text-[0.625vw] text-[#D1D5DB]"></i>
              <div className="text-[#D1D5DB] text-[12px] xl:text-[0.625vw] font-normal leading-tight">
                <div className={myworksans.className}>
                  Applied <br /> Filters
                </div>
              </div>
            </Link>
            {/* <div className=" flex items-center justify-center">
              <Link
                href={""}
                onClick={(e) => handleApplyFilter()}
                className="flex items-center justify-center cursor-pointer text-[#fff]   dark:border-[#374151] font-normal xl:text-[0.729vw] text-xs bg-[#AF1E27] border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg h-8 "
              >
                <span>Apply Filters</span>
              </Link>
            </div> */}
            <div className="rounded-r-[8px] xl:rounded-r-[0.417vw] flex items-center justify-center gap-2 px-[12px] xl:px-[0.833vw] py-[8px] xl:py-[0.730vw] bg-[#1b2532] xl:w-auto w-1/2 cursor-pointer border border-[#1b2532] ease-linear duration-200">
              <i className="hex-rate-filter-search text-white text-[16px] xl:text-[1.25vw]"></i>
              <span className="text-[#FFF] text-[12px] xl:text-[0.625vw] font-normal leading-tight">
                <div className={myworksans.className}>
                  All <br /> Filters
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
