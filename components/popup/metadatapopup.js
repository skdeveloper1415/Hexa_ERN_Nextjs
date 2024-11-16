import React, { use, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { ScrollPanel } from "primereact/scrollpanel";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const MetaDataPopup = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectLocation, setSelectLocation] = useState("");
  const [participant, setParticipant] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [datetime12h, setDateTime12h] = useState(null);
  const [datetime12, setDateTime12] = useState(null);
  const products = [
    {
      code: "Unsolicited Emails ",
      type: "Spam",
      name: "MISP",
      category: "IP",
      quantity: 10.0,
      value:"192.168.4.12",
      info:"Last Observed Date",
      target:"Europe, Canda, US",
    },
    {
      code: "Unsolicited Emails ",
      type: "Phishing",
      name: "MISP",
      category: "FQDN",
      quantity: 10.0,
      value:"abuse.ch",
      info:"Alias - isc.sans.edu",
      target:"Any",

    },
    {
      code: "Malicious Capabilities",
      type: "Malware",
      name: "VirusTotal",
      category: "File",
      quantity: 10.0,
      value:"Emotet",
      info:"SHA256 String value",
      target:"US",

    },
    {
      code: "Information Gathering ",
      type: "Social Eng. Internal",
      name: "FB Threat Exchg",
      category: "IP",
      quantity: 10.0,
      value:"192.168.4.15",
      info:"First Observed Date",
      target:"Any",
    },
  ];

  return (
    <div>
      <Sidebar
        visible={props.visible}
        // style={{ width: "90vw" }}
        position="right"
        className="sidebarwidth custmSidebar rounded-l-xl w-[100vw] lg:w-[100vw] xl:w-[80vw] 3xl:w-[70vw]"
        onHide={() => props.onHide(false)}
        blockScroll={true}
      >
        <div className="bg-[#111928] h-full">
          <div className="flex flex-col items-start justify-start xl:px-[1.25vw] px-6 xl:pt-[1.25vw] pt-[24px] xl:pb-[1.25vw] pb-[24px] gap-[12px] xl:gap-[0.625vw] 3xl:gap-[0.625vw]">
            <div onClick={() => props.onHide(false)}>
              <i className="cyber-sidebar-right text-[#E5E7EB]"></i>
            </div>
            <div className="text-[#FFF] text-[20px] xl:text-[21px] 3xl:text-[1.25vw] font-semibold xl:leading-[1.563vw] leading-6 ">
              View Metadata
            </div>
            <div className="text-[#D1D5DB] text-[12px] xl:text-[14px] 3xl:text-[0.833vw] font-medium xl:leading-[1.563vw] leading-6 ">
              Tactical
            </div>
          </div>
          <div
            className="pt-[16px] xl:pt-[0.833vw] 3xl:pt-[0.833vw] pb-[32px] 3xl:pb-[1.6667] xl:px-[2.266vw] px-[43.5px] h-[80%]"
            style={{ backgroundColor: "rgba(17, 25, 40, 0.69)" }}
          >
            <div className="flex flex-col w-full border border-[#4B5563] rounded-2xl gap-[16px] 3xl:gap-[0.833vw]">
              <div className="flex gap-[8px] 3xl:gap-[0.417vw] pl-[16px] 3xl:pl-[0.833vw] pt-[16px] 3xl:pt-[0.833vw] w-full">
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[120px] ease-in duration-300 overflow-hidden bg-[#263040] ">
                  <span className="text-[#84878D] text-[10px] font-normal w-full">
                    Threat Category
                  </span>
                  <div className="FilterDropdown">
                    <InputText
                      value={description}
                      onChange={(e) => setDescription(e.value)}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[120px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040] ">
                  <span className="text-[#84878D] text-[10px] font-normal">
                    Threat Type
                  </span>
                  <div className="FilterDropdown">
                    <InputText
                      value={selectLocation}
                      onChange={(e) => setSelectLocation(e.value)}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[120px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[100px] ease-in duration-300 overflow-hidden bg-[#263040] ">
                  <span className="text-[#84878D] text-[10px] font-normal">
                    IOC Type
                  </span>
                  <div className="FilterDropdown">
                    <InputText
                      value={participant}
                      onChange={(e) => setParticipant(e.value)}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[120px] bg-[#263040] placeholder:text-[#FFF] text-[#FFF]"
                    />
                  </div>
                </div>
              </div>
              <div className="custTable mx-[16px] 3xl:mx-[0.833vw] mb-[16px] 3xl:mb-[0.833vw]">
                <DataTable scrollable className="tableMenu Metadata" value={products}>
                  <Column
                    field="code"
                    header="Threat Category"
                    style={{ minWidth: "9rem" }}
                  ></Column>
                  <Column
                    field="type"
                    header="Threat Type"
                    style={{ minWidth: "6rem" }}
                  ></Column>
                  <Column
                    field="name"
                    header="Source"
                    style={{ minWidth: "6rem" }}
                  ></Column>
                  <Column
                    field="category"
                    header="IOC Type"
                    style={{ minWidth: "9rem" }}
                  ></Column>
                  <Column
                    field="value"
                    header="ID / Name /Value"
                    style={{ minWidth: "9rem" }}
                  ></Column>
                  <Column
                    field="value"
                    header="Associated"
                    style={{ minWidth: "3rem" }}
                  ></Column>
                  <Column
                    field=""
                    header="Date & Time"
                    style={{ minWidth: "8rem" }}
                  ></Column>
                  <Column
                    field="info"
                    header="Additional Info"
                    style={{ minWidth: "8rem" }}
                  ></Column>
                  <Column
                    field="quantity"
                    header="Risk Score"
                    style={{ minWidth: "6rem" }}
                  ></Column>
                  <Column
                    field="target"
                    header="Target Geolocation"
                    style={{ minWidth: "9rem" }}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
          <div className="bg-[#111928] sticky bottom-0 z-50 p-[24px] xl:p-[1.25vw] 3xl:p-[1.25vw] flex justify-end items-center gap-[16px] xl:gap-[0.833vw] 3xl:gap-[0.833vw]">
            <div
              onClick={() => props.onHide(false)}
              className="inline-block border border-[#457B9D] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] bg-[#111928] text-[#E5E7EB] text-[14px] 3xl:text-[0.833vw] xl:text-[16px] font-normal rounded-[8px] 3xl:rounded-[0.417vw] cursor-pointer"
            >
              Close
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default MetaDataPopup;
