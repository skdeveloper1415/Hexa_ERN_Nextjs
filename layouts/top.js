import React, { useState, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Top({ ...pageProps }) {
  const notificatio = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const [pageTitle, setPageTitle] = useState("Security Operations");
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const pathname = usePathname();
  const isLinkActive = (href) => {
    return pathname === href;
  };

  console.log("pathname", pathname);
  return (
    <header className="sticky top-0 z-[3]">
      <div
        className={`${
          pageProps.topTab
            ? "3xl:min-h-[4.27vw] min-h-[82px] pb-[12px] 3xl:pb-[0.625vw]"
            : "3xl:min-h-[5.96vw] min-h-[114px] pb-[44px] 3xl:pb-[2.299vw]"
        } bg-[#111928] flex flex-wrap gap-2 items-center justify-between pt-[16px] 3xl:pt-[0.833vw] pb-[16px] 3xl:pb-[0.833vw] pr-[32px] 3xl:pr-[1.667vw] pl-[118px] 3xl:pl-[128px] `}
      >
        <div className="">
          {/* <div className="flex flex-wrap items-center gap-3 text-[12px] 3xl:text-[0.625vw] text-[#FFF] mb-1 3xl:mb-[0.208vw]">
            <div className="cursor-pointer">Home</div>
            {pageProps.parentPageName?.map((elm) => {
              return (
                <>
                  <i className="k12stag-arrow-open-down text-[8px] 3xl:text-[0.417vw] -rotate-90"></i>
                  <a href={pageProps.parentPageName[0] === "My Project" || pageProps.parentPageName[0] === "My Projects" ? `/myprojects` : ''} className="cursor-pointer">{elm}</a>
                </>
              );
            })}

            {pageProps.pageName && (
              <>
                <i className="k12stag-arrow-open-down text-[8px] 3xl:text-[0.417vw] -rotate-90"></i>
                <div className="text-[#FFF]">{pageProps.pageName}</div>
              </>
            )}
          </div> */}
          <div
            className={`text-[#FFF] 3xl:text-[1.250vw] text-[24px] font-semibold leading-7`}
          >
            {pageProps.pageTitle}
          </div>
        </div>
        <div className="flex">
          {isLinkActive("/analysis") ||
          isLinkActive("/analysis/peergroup") ||
          isLinkActive("/analysis/drilldown") ||
          isLinkActive("/analysis/correlation") ? (
            
                <div className="flex flex-wrap gap-[15px] 3xl:gap-[0.781vw] bg-[#1F2A37] p-[8px] 3xl:p-[0.417vw] rounded-xl">
                  
                    <Link
                      href="/analysis"
                      className={`${
                        isLinkActive("/analysis")
                          ? "TabActive"
                          : "bg-transparent text-[#FFF]"
                      } flex items-start justify-center font-normal text-[10px] xl:text-[12px] 3xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[0.729vw] px-[14px] rounded-[12px] cursor-pointer`}
                    >
                      Cross Dimensional Analysis
                    </Link>
                  
                    <Link
                      href="/analysis/peergroup"
                      className={`${
                        isLinkActive("/analysis/peergroup")
                          ? "TabActive"
                          : "bg-transparent text-[#FFF]"
                      } flex items-start justify-center font-normal text-[10px] xl:text-[12px] 3xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[0.729vw] px-[14px] rounded-[12px] cursor-pointer`}
                    >
                      Peer Group Analysis
                    </Link>
                  
                    <Link
                      href="/analysis/drilldown"
                      className={`${
                        isLinkActive("/analysis/drilldown")
                          ? "TabActive"
                          : "bg-transparent text-[#FFF]"
                      } flex items-start justify-center font-normal text-[10px] xl:text-[12px] 3xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[0.729vw] px-[14px] rounded-[12px] cursor-pointer`}
                    >
                      Drilldown Analysis
                    </Link>
                  
                    <Link
                      href="/analysis/correlation"
                      className={`flex items-center justify-center font-normal text-[10px] xl:text-[12px] 3xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[0.729vw] px-[14px] rounded-[12px] cursor-pointer ${
                        isLinkActive("/analysis/correlation")
                          ? "TabActive"
                          : "bg-transparent text-[#FFF]"
                      }`}
                    >
                      Correlation Analysis
                    </Link>
                  
                </div>
            
          ) : null}
        </div>
        <div className="flex items-center flex-wrap gap-[30px] 3xl:gap-[1.563vw]">
          <div className="3xl:p-[0.625vw] relative cursor-pointer">
            <div className="bg-[#D92D20] rounded-full h-1.5 w-1.5 absolute 3xl:top-1 3xl:right-1 -top-[6px] -right-0"></div>
            <Image
              src={"/assets/images/search-normal.svg"}
              width={24}
              height={28}
              alt="Search"
            />
          </div>
          <div className="3xl:p-[0.625vw] relative cursor-pointer">
            <div className="bg-[#D92D20] rounded-full h-1.5 w-1.5 absolute 3xl:top-1 3xl:right-1 -top-[6px] -right-0"></div>
            <Image
              src={"/assets/images/messages.svg"}
              width={24}
              height={28}
              alt="Notification"
            />
          </div>
          <div className="3xl:p-[0.625vw] relative cursor-pointer">
            <div className="bg-[#D92D20] rounded-full h-1.5 w-1.5 absolute 3xl:top-1 3xl:right-1 -top-[6px] -right-0"></div>
            <Image
              src={"/assets/images/notificatio-bell.svg"}
              width={24}
              height={28}
              alt="Notification"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
