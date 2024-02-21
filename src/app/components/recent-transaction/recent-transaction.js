import React from "react";
import { LuWallet2 } from "react-icons/lu";
import { PiPaypalLogo } from "react-icons/pi";
import { RiExchangeDollarFill } from "react-icons/ri";

export default function RecentTransaction(className) {
  return (
    <>
      <div
        className={`w-[25vw] h-[282px] flex flex-col ${className.className} max-[1100px]:h-[208px] max-[600px]:w-[95vw] max-[600px]:mt-5`}
      >
        <h1 className="font-semibold text-[22px] max-[1100px]:text-[15px]">
          Recent Transaction
        </h1>
        <div className="w-full h-[83%] flex flex-col items-center justify-evenly">
          <div className="w-[86%] inline-flex items-center max-[1100px]:justify-between">
            <div className="size-[55px] rounded-full bg-[#FFF5D9] flex items-center justify-center max-[1100px]:size-[44px]">
              <LuWallet2 className="size-[28px] text-[#FFBB38] max-[1100px]:size-[22px]" />
            </div>
            <div className="flex flex-col h-full justify-between ml-5">
              <h2 className="font-medium text-[16px] max-[1100px]:text-[10px] max-[600px]:text-[13px]">
                Deposit From My Card
              </h2>
              <h2 className="text-[#718EBF] max-[1100px]:text-[9px] max-[600px]:text-[13px]">
                28 January 2024
              </h2>
            </div>
            <h2 className="text-[16px] font-medium text-[#FF4B4A] ml-auto max-[1100px]:text-[11px] max-[600px]:text-[13px]">
              -$850
            </h2>
          </div>
          <div className="w-[86%] inline-flex items-center">
            <div className="size-[55px] rounded-full bg-[#E7EDFF] flex items-center justify-center max-[1100px]:size-[44px]">
              <PiPaypalLogo className="size-[28px] text-[#396AFF] max-[1100px]:size-[22px]" />
            </div>
            <div className="flex flex-col h-full justify-between ml-5">
              <h2 className="font-medium text-[16px] max-[1100px]:text-[10px] max-[600px]:text-[13px]">
                Deposit Paypal
              </h2>
              <h2 className="text-[#718EBF] max-[1100px]:text-[9px] max-[600px]:text-[13px]">
                27 January 2024
              </h2>
            </div>
            <h2 className="text-[16px] font-medium text-[#41D4A8] ml-auto max-[1100px]:text-[11px] max-[600px]:text-[13px]">
              +$1.850
            </h2>
          </div>
          <div className="w-[86%] inline-flex items-center">
            <div className="size-[55px] rounded-full bg-[#DCFAF8] flex items-center justify-center max-[1100px]:size-[44px]">
              <RiExchangeDollarFill className="size-[28px] text-[#16DBCC] max-[1100px]:size-[22px]" />
            </div>
            <div className="flex flex-col h-full justify-between ml-5">
              <h2 className="font-medium text-[16px] max-[1100px]:text-[10px] max-[600px]:text-[13px]">
                Jhon Doe
              </h2>
              <h2 className="text-[#718EBF] max-[1100px]:text-[9px] max-[600px]:text-[13px]">
                26 January 2024
              </h2>
            </div>
            <h2 className="text-[16px] font-medium text-[#41D4A8] ml-auto max-[1100px]:text-[11px] max-[600px]:text-[13px]">
              +$650
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
