import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import { Button } from "primereact/button";
import "simplebar-react/dist/simplebar.min.css";
import { usePathname, useRouter } from "next/navigation";
// import { GetSingleValueFromResponse } from "../components/helper/commonfunction";
import { Tooltip } from "primereact/tooltip";
import { toast } from "react-toastify";
import "../styles/globals.css";

export default function Left(props) {
  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);
  const [isToggledSecond, setIsToggledSecond] = useState(false);
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [JoinedDate, setJoinedDate] = useState("");

  const pathname = usePathname();
  const isLinkActive = (href) => {
    return pathname === href;
  };

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };

  const toggleClassSecond = () => {
    setIsToggledSecond(!isToggledSecond);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
    toast.success("Logged-out successfully");
  };

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    const userProfile = localStorage.getItem("UserImage");
    setUserProfile(userProfile);
    // let JoinedDate = GetSingleValueFromResponse(userDetails, "created_at");
    setJoinedDate(JoinedDate);
    // let firstName = GetSingleValueFromResponse(userDetails, "first_name");
    // let lastName = GetSingleValueFromResponse(userDetails, "last_name");
    // setUserName(firstName + ' ' + lastName)

    if (pathname.includes("/masterconfiguration")) {
      setIsToggledSecond(true);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 z-[9] max-md:h-full left-menu-sec">
        <div className="w-[96px] hover:w-[328px] bg-[#1A212D] left-menu-h py-5 xl:py-[1.04vw] px-5 border-r border-[#2B3B4F] overflow-hidden max-md:h-full ">
          <div className="relative h-full">
            <div className="logo-block h-[89px] mb-[16px]">
              <div
                className="logo_icon flex justify-center"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src="/assets/images/left-menu-icons/logo-icon.svg"
                  width={26}
                  height={40}
                  alt="logo icon"
                />
              </div>
              <div className="logo min-w-[200px] xl:min-w-[10vw]">
                <Link href="/" className="block text-center w-[188px]">
                  <div className="flex gap-[8px] 3xl:gap-[0.4vw]">
                    
                    <Image
                      src="/assets/images/left-menu-icons/logo.svg"
                      width={188}
                      height={24}
                      className="w-[188px]"
                      alt="logo icon"
                    />
                  </div>
                </Link>
              </div>
              <div
                className="lock_icon mt-4"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
              >
                <i className="leftmenu-lock px-5 xl:px-[1.04vw]"></i>
              </div>
              <div className="logo min-w-[150px] mt-4 mr-[15px] border-b-2 border-[#2B3B4F] text-right relative">
                <i className="hex-rate-unlock absolute -top-[10px] 3xl:-top-[0.521vw] -right-[25px] 3xl:-right-[1.302vw] text-[#4B5563] text-[18px] 3xl:text-[0.938vw]"></i>
              </div>
            </div>

            <SimpleBar>
              <div data-simplebar>
                <div className="visible lg:hidden"></div>
                <ul className="left-menu h-full">
                  <li
                    className={`${
                      isLinkActive("/snapshotview") ? "active" : ""
                    } ico-eye`}
                  >
                    <Link href="/snapshotview">
                      <span>Snapshot View</span>
                    </Link>
                  </li>
                  <li
                    className={`${
                      isLinkActive("/fundrequest") ? "active" : ""
                    } ico-fund`}
                  >
                    <Link href="/fundrequest">
                      <span>Fund Request</span>
                    </Link>
                  </li>
                  <li
                    className={`${
                      isLinkActive("/servicesdisbursements") ? "active" : ""
                    } ico-sd`}
                  >
                    <Link href="/servicesdisbursements">
                      <span>Services & Disbursements</span>
                    </Link>
                  </li>
                  
                  <li
                    className={`${
                      isLinkActive("/analysis") ? "active" : ""
                    } ico-analysis`}
                  >
                    <Link href="/analysis">
                      <span>Analysis</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </SimpleBar>
            <div className="absolute left-0 right-0 bottom-0">
              <ul className="left-menu hoverNone">
                <li className="settings">
                  <Link href="">
                    <span>Settings</span>
                  </Link>
                </li>
                <li className="dark-mode">
                  <Link href="">
                    <span>Dark Theme</span>
                  </Link>
                </li>
                <li className="userProfile relative mt-[24px] xl:mt-[1.250vw] -ml-[3px]">
                  <div className="flex items-center">
                    <div className="userPic ml-2">
                      <Image
                        src="/assets/images/left-menu-icons/profile.svg"
                        width={48}
                        height={48}
                        alt="profile"
                      />
                    </div>
                    <div className="flex items-center">
                      <Link href="">
                        <span className="text-[#E5E7EB] text-[16px] xl:text-[0.833vw] font-semibold block">
                          Jese Leos
                        </span>
                        <span className="text-[#D1D5DB] text-[14px] xl:text-[0.729vw] block">
                          Joined in August 2014
                        </span>
                      </Link>
                      <div className="">
                        <Tooltip
                          target=".curmlog_btn"
                          position="top"
                          style={{ color: "white" }}
                          content="Logout"
                        />
                        <Button onClick={handleLogout} className="curmlog_btn">
                          <Image
                            src="/assets/images/left-menu-icons/logout.svg"
                            width={24}
                            height={24}
                            alt=""
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
