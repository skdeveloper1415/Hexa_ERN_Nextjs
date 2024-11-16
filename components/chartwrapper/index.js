"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { OverlayPanel } from 'primereact/overlaypanel';
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import ReactFullscreen from 'react-easyfullscreen';
// import ExcelDownloader from '../exportn/ExcelDownloader';
// import PdfDownloader from '../exportn/PdfDownloader';
import { Dropdown } from "primereact/dropdown";
import { Tab, Tabs, TabList } from 'react-tabs';
import Image from 'next/image';
import HighlightsSidebar from '../../components/popup/highlightspopup';


export default function ChartWrapper(props) {
  //Sidebar //
  const [Highlightspopup, setHighlightspopup] = useState(false);

  const [visible, setVisible] = useState(false);
  const [infoIcon, setInfoIcon] = useState(props.infoIcon);
  const [infoIconCircle, setinfoIconCircle] = useState(props.infoIconCircle);
  const [dropdown2, setDropdown2] = useState(props.dropdown2);
  const [dropdown1, setDropdown1] = useState(props.dropdown1);
  const [bulbIcon, setBulbIcon] = useState(props.bulbIcon);
  const [ExportIcon, setExportIcon] = useState(props.ExportIcon);
  const [graphIcon, setGraphIcon] = useState(props.graphIcon);
  const [downloadIcon, setDownloadIcon] = useState(props.downloadIcon);
  const [eyeIcon, setEyeIcon] = useState(props.eyeIcon);
  const [Highlights, setHighlights] = useState(props.Highlights);
  const [rightTasb, setrightTasb] = useState(props.rightTasb);
  const [assetSecurityTabs, setassetSecurityTabs] = useState(props.assetSecurityTabs);
  const [avgValue, setAvgValue] = useState(props.avgValue);
  


  const op = useRef(null);
  const Bots = useRef();
  const handleClick = (e) => {
    document.querySelector('body').classList.toggle('echartHeight');
  }

  //Print Function
  const handlePrintBots = useReactToPrint({
    content: () => Bots.current,
  });

  const { formatDownloadedData = [], formatFileName = 'Demo', isDetailedExport = false, disablepdf = false, title = 'abc', subtitle = 'abc', placeholder1 = 'Dimention', placeholder2 = 'Dimention2', data = [] } = props;

  const headers = [
    { label: "First Name", key: "id" },
    { label: "Last Name", key: "name" },
    { label: "Email", key: "value" },
    { label: "Age", key: "age" }
  ];

  const csvReport = {
    data: formatDownloadedData,
    headers: headers,
    filename: `${formatFileName}.csv`
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
  ];
  const price = [
    { name: "US $", code: "NY" },
    { name: "IND", code: "RM" },
  ];

  const [drodownlonValueClick, setDroDownvalueClick] = useState(false)
  const dropwonClick = (e) => {

    if (e === "dropwonClick") {
      document.querySelector('body').classList.add('expandDiv')
      setDroDownvalueClick(false)
    } else if (e === "bodyclick" && drodownlonValueClick) {
      document.querySelector('body').classList.remove('expandDiv')
      setDroDownvalueClick(false)

    }
  }

  const Insights = useRef(null);
  const info = useRef(null);

  return (
    <div onClick={() => dropwonClick("bodyclick")}>
      <ReactFullscreen>
        {({ ref, onToggle, onExit }) => (
          <div ref={ref} className=' h-full fullScreen'>
              <div className=''>
                <div className={`${props.gridSystem === true ? 'grid grid-cols-12' : 'flex flex-wrap'} items-center justify-between border-b border-[#2B3B4F] pb-2`}>
                  <div className={`${props.gridSystem === true ? props.leftCols : null} flex items-center 3xl:gap-[0.625vw] gap-[12px]`}>
                    {/* <div><i className='asetsmng-folder text-[20px] 3xl:text-[1.042vw]'></i></div> */}
                   {/* <div className='text-white'>hi</div> */}
                   {
                      infoIconCircle == true ?
                        <Link href='' className='leading-none'><i className='cyber-info-circle text-[14px] 3xl:text-[0.94vw] align-top text-[#E5E7EB]' title='Add proper title here'></i></Link>
                        : null
                    }
                    <div className={`text-[#E5E7EB] text-[18px] xl:text-[14px] 3xl:text-[0.838vw] font-semibold  ${props.text}`}>
                      <p>{props.title}</p>
                    </div>
                    <div className={`text-[#6C768B] text-[14px] 3xl:text-[0.729vw] font-normal  ${props.text}`}><p>{props.subtitle}</p></div>
                  </div>
                  <div className={`${props.gridSystem === true ? props.rightCols : null} optionbtn flex wrapper_icons items-center gap-2 3xl:gap-[0.833vw] text-[#6C768B]`}>
                   
                  {/* {
                      rightTasb === true ?
                        <div className='custTabs'>
                            <TabList>
                              <Tab>{props.tabname1}</Tab>
                              <Tab>{props.tabname2}</Tab>
                              {props.tabname3 && props.tabname3 ?
                              <Tab>{props.tabname3}</Tab>
                              : null
                              }
                               {props.tabname4 && props.tabname4 ?
                              <Tab>{props.tabname4}</Tab>
                              : null
                              }
                            </TabList>
                        </div> 
                        : null
                    } */}
                          
                          {
                      dropdown2 == true ?
                      <Dropdown
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder={`${props.placeholder2 && props.placeholder2 ? props.placeholder2 : '1 Year'}`}
                      className={`w-[170px] 3xl:w-[8.854vw] max-w-[170px] 3xl:max-w-[8.854vw] custmDropdown custmDropdownBgColor custleading h-[32px] 3xl:h-[1.667vw] ${props.dropdownWidth}`}
                    />
                        : null
                    }
                    {
                      dropdown1 == true ?
                      <Dropdown
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder={`${props.placeholder1 && props.placeholder1 ? props.placeholder1 : '1 Year'}`}
                      className={`w-[130px] 3xl:w-[6.771vw] max-w-[130px] 3xl:max-w-[6.771vw] custmDropdown custmDropdownBgColor custleading h-[32px] 3xl:h-[1.667vw] ${props.dropdownWidth}`}
                    />
                        
                        : null
                    }
                                  
                    
                    {
                      graphIcon == true ?
                        <Link href='' className='leading-none'><i className='asetsmng-linechart-outline text-[14px] 3xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                        : null
                    }
                    {
                      downloadIcon == true ?
                        <Link href='' className='leading-none'><i className='asetsmng-lamp text-[14px] 3xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                        : null
                    }
                    {
                      bulbIcon == true ?
                        <Link href='' className='leading-none'><i className='asetsmng-download text-[14px] 3xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                        : null
                    }
                    {
                      props.maximizeIcon == true ?
                        <Link href=''
                          className='leading-none'
                          onClick={() => {
                            onToggle();
                          }}
                        >
                          <i onClick={handleClick} className='redingtonHR-pluse text-[14px] 3xl:text-[0.94vw] align-top'></i></Link>
                        : null
                    }
                    {
                      eyeIcon == true ?
                      <>
                        <div className='bg-[#1F2A37] p-1.5 rounded cursor-pointer' onClick={(e) => Insights.current.toggle(e)}><Image src="/assets/images/lamp-charge.svg" width={20} height={20} alt='' /></div>
                        <OverlayPanel ref={Insights} className='overlayPanel_spacing_0 Insights_bg_wrap'>
                        <div className='w-[400px] py-4 px-5'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1 text-[#E0E3E9] text-xs font-light leading-normal'><Image src="/assets/images/lamp-charge.svg" width={20} height={20} alt='' /><span>Insights</span></div>
                            <div className='text-[#E0E3E9] text-xs font-light leading-normal underline'>more</div>
                          </div>
                          <div className='mt-[20px]'>
                            <div className='space-y-[9px] text-[#F2F2F5] text-xs font-light leading-[18px]'>
                              <p>1. Average FRN count has increased from 2 to 4 per entity since 2021</p>
                              <p>2. Average requested amount shows an increase of 39% YoY with the highest requested amount being 50% in 2022. </p>
                            </div>
                          </div>
                        </div>
                        </OverlayPanel>
                      </>
                        : null
                    }
                    
                    {
                      infoIcon == true ?
                      <>
                        <div className='leading-none bg-[#1F2A37] rounded p-1.5 cursor-pointer text-[18px] text-[#E5E7EB] opacity-60' onClick={(e) => info.current.toggle(e)}><i className='hex-rate-info-circle ' title='Add proper title here'></i></div>
                        <OverlayPanel ref={info} className='overlayPanel_spacing_0'>
                        <div className='w-[400px] border border-[#374151] rounded-lg'>
                          <div className='bg-[#1F2A37] boxshadow01 py-4 px-5 rounded-tl-lg rounded-tr-lg'>
                            <div className='text-[#E0E3E9] text-xs font-normal leading-normal'>Data Source:</div>
                            <div className='text-[#E0E3E9] text-sm font-medium leading-normal'>opendata.usac.org</div>
                          </div>
                          <div className='bg-[#111928] rounded-bl-lg rounded-br-lg py-4 px-5'>
                            <div className='text-[#E0E3E9] text-xs font-normal flex items-center gap-1'>
                              <i className='hex-rate-msg text-[#D67309] text-sm'></i><span>Notes to be considered</span>
                            </div>
                            <div className='text-[#F2F2F5] text-sm font-light leading-normal]'>
                              <p>1. Axis details:  X Axis = Year , Y Axis = Count of FRN’s</p>
                              <p>2. Definition: FRN = Funding Request Number (Unique number to identify applications by entities)</p>
                            </div>
                          </div>
                        </div>
                        </OverlayPanel>
                      </>
                        : null
                    }
                    {
                      Highlights == true ?
                      <>
                        <div className='leading-none bg-[#1F2A37] rounded p-1.5 cursor-pointer text-[18px] text-[#E5E7EB] opacity-60' onClick={() => setHighlightspopup(true)}><i className='hex-rate-search-zoom-in' title='Add proper title here'></i></div>
                      </>
                        : null
                    }
                    {
                      ExportIcon == true ?
                        <div>
                          <div className="card flex">
                            <button onClick={(e) => op.current.toggle(e)}>
                              <div className="cursor-pointer text-center flex items-center justify-center leading-none bg-[#1F2A37] rounded-md py-2.5 px-1.5 3xl:py-[0.521vw] 3xl:px-[0.417vw]">
                                <i className='cyber-dots-horizontal text-[#E5E7EB] text-[2.5px] 3xl:text-[0.156vw] text-center' title='Click here for multiple option'></i>
                              </div>

                            </button>

                            <OverlayPanel ref={op} className="custOverlay">
                              <div className='flex flex-col text-left gap-y-2 wrapperOption text-[14px] 3xl:text-[0.730vw] text-[#E5E7EB] bg-[#1F2A37] py-2 px-2 rounded-lg'>
                                <button className='flex gap-2 items-center hover:text-[#1570EF] ease-linear duration-200' href='' onClick={() => { handlePrintBots(); onExit(); }}>
                                  <i className='pi pi-print '></i>
                                  <span>Print to pdf</span>
                                </button>
                                <button className='flex gap-2 items-center hover:text-[#1570EF] ease-linear duration-200'>
                                  <i className='pi pi-download '></i>
                                  <CSVLink {...csvReport}>Export to CSV</CSVLink>
                                </button>
                                {/* <div className='flex gap-2 items-center cursor-pointer hover:text-[#1570EF] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <ExcelDownloader data={formatDownloadedData} />
                              </div> */}
                                {/* <div className='flex gap-2 items-center cursor-pointer hover:text-[#1570EF] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <PdfDownloader
                                  title={formatFileName}
                                  isDetailedExport={isDetailedExport}
                                  data={formatDownloadedData}
                                  id={props.id}
                                /></div> */}
                              </div>
                            </OverlayPanel>
                          </div>
                        </div>
                        : null
                    }
                    {
                  	  avgValue == true ? 
                  	  <div className='text-[#E5E7EB] text-base 3xl:text-[1.25vw] font-semibold'>{props.avgValueText}</div> :
                  	  null
                  	}
                  </div>
                </div>


              </div>
              <div className="">
                <div className='grid grid-cols-1 wrapper_icons center-content'>
                  <div ref={Bots}>
                    {props.data}
                  </div>
                </div>
              </div>
          </div>
        )}
      </ReactFullscreen>
      <HighlightsSidebar visible={Highlightspopup}
        onHide={() => {setHighlightspopup(false)}} />
    </div>
  )
}