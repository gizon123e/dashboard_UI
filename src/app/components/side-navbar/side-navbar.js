import { AiFillHome, AiOutlineTransaction } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import React from "react";

export default function SideNavbar(page) {
  return (
    <>
      <div
        className={`w-[17vw] h-fit flex flex-col fixed left-0 max-[600px]:Z-30 max-[600px]:w-[200px] max-[600px]:absolute bg-white 
      ${page.dropdown ? "flex" : "hidden"}`}
      >
        <div className="w-[76%] h-[60px] inline-flex items-center">
          <div
            className={`sign w-[6px] h-full rounded-r-xl ${
              page.page === "dashboard" ? "bg-[#2D60FF]" : "bg-none"
            } w-[3px] max-[600px]:w-[6px]`}
          ></div>
          <AiFillHome className="text-[#2D60FF] size-[25px] mr-4 ml-5 max-[1100px]:mr-0 max-[1100px]:ml-2" />
          <a
            href="/"
            className={`text-[18px] ${
              page.page === "dashboard" ? "text-[#2D60FF]" : "text-none"
            } max-[1100px]:text-[10px] max-[1100px]:ml-2 max-[600px]:text-[15px]`}
          >
            Dashboard
          </a>
        </div>
        <div className="w-[76%] h-[60px] inline-flex items-center">
          <div
            className={`sign w-[6px] h-full rounded-r-xl ${
              page.page === "transactions" ? "bg-[#2D60FF]" : "bg-none"
            } w-[3px] max-[600px]:w-[6px]`}
          ></div>
          <AiOutlineTransaction className="text-[#2D60FF] size-[25px] mr-4 ml-5 max-[1100px]:mr-0 max-[1100px]:ml-2" />
          <a
            href="/"
            className={`text-[18px] ${
              page.page === "transactions" ? "text-[#2D60FF]" : "text-none"
            } max-[1100px]:text-[10px] max-[1100px]:ml-2 max-[600px]:text-[15px]`}
          >
            Transactions
          </a>
        </div>
        <div className="w-[76%] h-[60px] inline-flex items-center">
          <div
            className={`sign w-[6px] h-full rounded-r-xl ${
              page.page === "accounts" ? "bg-[#2D60FF]" : "bg-none"
            } w-[3px] max-[600px]:w-[6px]`}
          ></div>
          <MdAccountCircle className="text-[#2D60FF] size-[25px] mr-4 ml-5 max-[1100px]:mr-0 max-[1100px]:ml-2" />
          <a
            href="/"
            className={`text-[18px] ${
              page.page === "accounts" ? "text-[#2D60FF]" : "text-none"
            } max-[1100px]:text-[10px] max-[1100px]:ml-2 max-[600px]:text-[15px]`}
          >
            Accounts
          </a>
        </div>
        <div className="w-[76%] h-[60px] inline-flex items-center">
          <div
            className={`sign w-[6px] h-full rounded-r-xl ${
              page.page === "investments" ? "bg-[#2D60FF]" : "bg-none"
            } w-[3px] max-[600px]:w-[6px]`}
          ></div>
          <FaHandHoldingDollar className="text-[#2D60FF] size-[25px] mr-4 ml-5 max-[1100px]:mr-0 max-[1100px]:ml-2" />
          <a
            href="/"
            className={`text-[18px] ${
              page.page === "investments" ? "text-[#2D60FF]" : "text-none"
            } max-[1100px]:text-[10px] max-[1100px]:ml-2 max-[600px]:text-[15px]`}
          >
            Investments
          </a>
        </div>
        <div className="w-[76%] h-[60px] inline-flex items-center">
          <div
            className={`sign w-[6px] h-full rounded-r-xl ${
              page.page === "settings" ? "bg-[#2D60FF]" : "bg-none"
            } w-[3px] max-[600px]:w-[6px]`}
          ></div>
          <CiSettings className="text-[#2D60FF] size-[25px] mr-4 ml-5 max-[1100px]:mr-0 max-[1100px]:ml-2" />
          <a
            href="/"
            className={`text-[18px] ${
              page.page === "settings" ? "text-[#2D60FF]" : "text-none"
            } max-[1100px]:text-[10px] max-[1100px]:ml-2 max-[600px]:text-[15px]`}
          >
            Settings
          </a>
        </div>
      </div>
    </>
  );
}
