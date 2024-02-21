import Image from "next/image";
import chip from "./images/Chip_Card.png";
import icon from "./images/icon.png";
import chipBlack from "./images/Chip_Card_Black.png";
import iconBlack from "./images/icon-black.png";

import "./my-cards.css";
import React from "react";
export default function MyCard() {
  return (
    <>
      <div
        className="flex flex-col w-[50vw] h-[282px] justify-between max-[1100px]:h-[208px]
      max-[600px]:w-[550px] max-[600px]:ml-5"
      >
        <div className="w-full inline-flex justify-between h-fit ">
          <h1 className="font-semibold mb-2 text-[18px] max-[1100px]:text-[15px]">
            My Cards
          </h1>
          <a
            className="font-semibold text-[18px] max-[1100px]:text-[15px]"
            href="/"
          >
            See All
          </a>
        </div>
        <div className="w-full inline-flex justify-between h-[83%] max-[1100px]:h-[208px]">
          <div className="card flex flex-col justify-around items-center w-[47%] h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-[20px]">
            <div className="first h-[51px] w-[80%] inline-flex justify-between items-center">
              <div className="flex flex-col text-white text-[20px]">
                <p className="max-[1100px]:text-[11px]">Balance</p>
                <p className="max-[1100px]:text-[16px]">$ 5,756</p>
              </div>
              <Image alt={""} src={chip} className="size-[35px]"></Image>
            </div>
            <div className="second w-[80%] h-[15%] inline-flex justify-between">
              <div className="flex flex-col text-white">
                <p className="uppercase text-[12px] max-[1100px]:text-[10px]">
                  Card Holder
                </p>
                <p className="text-[15px] max-[1100px]:text-[13px]">
                  Gizon Jakituna
                </p>
              </div>
              <div className="flex flex-col text-white">
                <p className="uppercase text-[12px] max-[1100px]:text-[10px]">
                  valid Thru
                </p>
                <p className="text-[15px] max-[1100px]:text-[13px]">11/12</p>
              </div>
            </div>
            <div className="number justify-self-end h-[30%] w-full putih-gradient inline-flex justify-evenly items-center max-[1100px]:h-[51px]">
              <p className="text-[22px] font-semibold text-white max-[1100px]:text-[11px]">
                3778 **** **** 1234
              </p>
              <Image
                src={icon}
                alt={""}
                className="w-[44px] h-[30px] object-contain max-[1100px]:w-[27px]"
              ></Image>
            </div>
          </div>
          <div className="card flex flex-col justify-evenly items-center w-[47%] h-full max-[600px]:hidden">
            <div className="first h-[51px] w-[80%] inline-flex justify-between items-center">
              <div className="flex flex-col text-black text-[20px]">
                <p className="max-[1100px]:text-[11px]">Balance</p>
                <p className="max-[1100px]:text-[16px]">$ 5,756</p>
              </div>
              <Image alt={""} src={chipBlack} className="size-[35px]"></Image>
            </div>
            <div className="second w-[80%] h-[15%] inline-flex justify-between">
              <div className="flex flex-col text-black">
                <p className="uppercase text-[12px] max-[1100px]:text-[10px]">
                  Card Holder
                </p>
                <p className="text-[15px]  max-[1100px]:text-[13px]">
                  Gizon Jakituna
                </p>
              </div>
              <div className="flex flex-col text-black">
                <p className="uppercase text-[12px] max-[1100px]:text-[10px]">
                  valid Thru
                </p>
                <p className="text-[15px] max-[1100px]:text-[13px]">11/12</p>
              </div>
            </div>
            <div className="number h-[30%] w-full putih-gradient inline-flex justify-evenly items-center">
              <p className="text-[22px] font-semibold text-black max-[1100px]:text-[11px]">
                3778 **** **** 1234
              </p>
              <Image
                src={iconBlack}
                alt={""}
                className="w-[44px] h-[30px] object-contain max-[1100px]:w-[27px]"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
