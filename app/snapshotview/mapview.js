"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const MapContainer = dynamic(() => import("react-leaflet").then(module => module.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(module => module.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(module => module.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(module => module.Popup), { ssr: false });

export default function Page() {
  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
    },
    {
      geocode: [48.85, 2.3522],
    },
    {
      geocode: [48.87, 2.37],
    },
    {
      geocode: [48.86, 2.37],
    },
    {
      geocode: [48.84, 2.37],
    },
  ];

  const customIcon = new Icon({
    iconUrl: "../assets/images/yellow.png",
    iconSize: [48, 48]
  });

  const customIcon2 = new Icon({
    iconUrl: "../assets/images/pink.png",
    iconSize: [48, 48]
  })

  const customIcon3 = new Icon({
    iconUrl: "../assets/images/blue.png",
    iconSize: [48, 48]
  })

  const customIcon4 = new Icon({
    iconUrl: "../assets/images/gray.png",
    iconSize: [48, 48]
  })

  const customIcon5 = new Icon({
    iconUrl: "../assets/images/green.png",
    iconSize: [48, 48]
  })

  // icon={customIcon}

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0">
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker,index) => (
          <Marker key="" position={marker.geocode} 
          icon={index == 0 ? customIcon : index == 1 ?  customIcon2 : index == 2 ? customIcon3 : index== 3 ? customIcon4 : customIcon5 }>
            <Popup>
              <div className="bg-[#1F2A37]">
                <div className="mb-[8px] 3xl:mb-[0.417vw] relative">
                  <Image
                    src={"/assets/images/mapImg.png"}
                    width={"202"}
                    height={"88"}
                    className="rounded-[16px] 3xl:rounded-[0.833vw] w-full"
                    alt=""
                  />
                  <div className="absolute bottom-[3px] 3xl:bottom-[0.156vw] left-0 right-0">
                    <div className="text-[#E0E3E9] text-[12px] 3xl:text-[0.625vw] font-bold flex items-center justify-center">
                      <i className="hex-rate-circule-fill border border-[#4F6484] rounded-full mr-1 text-[6px] 3xl:text-[0.313vw]"></i>{" "}
                      School ABC
                    </div>
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#374151] pb-[8px] 3xl:pb-[0.417vw] mb-[8px] 3xl:mb-[0.417vw]">
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-light">
                    FRN Count
                  </div>
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-semibold">
                    06
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#374151] pb-[8px] 3xl:pb-[0.417vw] mb-[8px] 3xl:mb-[0.417vw]">
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-light">
                    FRN Amount
                  </div>
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-semibold">
                    $20K
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#374151] pb-[8px] 3xl:pb-[0.417vw] mb-[8px] 3xl:mb-[0.417vw]">
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-light">
                    Committed
                  </div>
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-semibold">
                    $15K
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#374151] pb-[8px] 3xl:pb-[0.417vw] mb-[8px] 3xl:mb-[0.417vw]">
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-light">
                    Disbursed
                  </div>
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-semibold">
                    $12K
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#374151] pb-[8px] 3xl:pb-[0.417vw] mb-[8px] 3xl:mb-[0.417vw]">
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-light">
                    Remaining
                  </div>
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-semibold">
                    $3K
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#374151] pb-[8px] 3xl:pb-[0.417vw] mb-[8px] 3xl:mb-[0.417vw]">
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-light">
                    Utilised %
                  </div>
                  <div className="text-[14px] 3xl:text-[0.729vw] text-[#E0E3E9] font-semibold">
                    $80%
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
