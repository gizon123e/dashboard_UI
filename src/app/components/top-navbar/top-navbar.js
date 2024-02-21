"use client";
import Image from "next/image";
import logo from "./images/Logo.png";
import Profile from "./images/isal.png";
import { CiSearch, CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function TopNavbar({ icon: Icon, onClick }) {
  return (
    <>
      <div className="w-full inline-flex h-[100px] justify-evenly items-center">
        <Icon size={"36px"} className="min-[600px]:hidden" onClick={onClick} />
        <a href="/" className="max-[600px]:hidden">
          <Image
            src={logo}
            alt={""}
            className="object-contain hover:cursor-pointer w-[18vw] "
          ></Image>
        </a>
        <div className="w-[53%] h-[40px] inline-flex justify-between max-[600px]:flex max-[600px]:flex-col max-[600px]:abosulte max-[600px]:h-auto">
          <h2 className="Capitalize font-semibold text-[25px] text-black">
            Overview
          </h2>
          <div className="inline-flex w-[255px] h-[40px] items-center max-[600px]:w-[80%]">
            <CiSearch className="size-[25px]" />
            <input
              type="text"
              placeholder="Search For Something"
              className="ml-2"
            />
          </div>
        </div>
        <div className="w-[170px] h-[45px] inline-flex items-center justify-evenly max-[600px]:size-auto">
          <CiSettings className="size-[25px] cursor-pointer max-[600px]:hidden" />
          <IoMdNotificationsOutline
            className="size-[25px] cursor-pointer max-[600px]:hidden"
            style={{ color: "#FE5C73" }}
          />
          <Image
            src={Profile}
            alt={""}
            className="size-[45px] object-cover rounded-full cursor-pointer"
          ></Image>
        </div>
      </div>
    </>
  );
}
