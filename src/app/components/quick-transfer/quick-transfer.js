import { FaTelegramPlane } from "react-icons/fa";

import Image from "next/image";
import Man from "./images/man.jpg";
import Man2 from "./images/man2.jpg";
import woman from "./images/woman.jpg";

export default function QuickTrasnfer() {
  return (
    <>
      <div className="w-[30vw] h-[323px] flex flex-col items-center justify-between max-[1100px]:h-[258px] max-[600px]:w-[95vw]">
        <h2 className="text-[22px] font-semibold self-start max-[1100px]:text-[15px]">
          Quick Transfer
        </h2>
        <div className="w-[70%] h-[40%] inline-flex justify-between">
          <div className="w-[27%] h-full flex flex-col justify-between items-center">
            <Image
              src={Man}
              alt={""}
              className="rounded-full size-[70px] object-cover max-[1100px]:size-[50px] max-[600px]:size-[70px]"
            ></Image>
            <div className="flex flex-col text-center">
              <h2 className="text-[20px] font-semibold max-[1100px]:text-[11px] max-[600px]:text-[15px] max-[600px]:mt-2">
                Gizon
              </h2>
              <h2 className="text-[#718EBF] font-bold max-[1100px]:text-[11px] max-[600px]:text-[15px] max-[600px]:mt-2">
                CEO
              </h2>
            </div>
          </div>
          <div className="w-[27%] h-full flex flex-col justify-between items-center">
            <Image
              src={Man2}
              alt={""}
              className="rounded-full size-[70px] object-cover max-[1100px]:size-[50px] max-[600px]:size-[70px]"
            ></Image>
            <div className="flex flex-col text-center">
              <h2 className="text-[15px] font-semibold max-[1100px]:text-[11px] max-[600px]:text-[15px] max-[600px]:mt-2">
                Jhon Doe
              </h2>
              <h2 className="text-[#718EBF] text-[15px] font-semibold max-[1100px]:text-[11px] max-[600px]:text-[15px] max-[600px]:mt-2">
                Designer
              </h2>
            </div>
          </div>
          <div className="w-[27%] h-full flex flex-col justify-between items-center">
            <Image
              src={woman}
              alt={""}
              className="rounded-full size-[70px] object-cover max-[1100px]:size-[50px] max-[600px]:size-[70px]"
            ></Image>
            <div className="flex flex-col text-center">
              <h2 className="text-[15px] font-semibold max-[1100px]:text-[11px] max-[600px]:text-[15px] max-[600px]:mt-2">
                Iriana
              </h2>
              <h2 className="text-[#718EBF] text-[15px] font-semibold max-[1100px]:text-[11px] max-[600px]:text-[15px] max-[600px]:mt-2">
                Director
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[16%] inline-flex justify-evenly">
          <input type="text" placeholder="Write Amount" className="w-[54%]" />
          <button
            className="w-[32%] h-full rounded-[50px] inline-flex justify-center items-center bg-[#1814F3] 
          text-white max-[1100px]:rounded-[30px] max-[1100px]:w-[90px]"
          >
            <span className="inline-flex items-center text-[16px] max-[1100px]:text-[10px]">
              <p>Send</p>
              <FaTelegramPlane className="ml-4 text-[22px] max-[1100px]:text-[15px] max-[1100px]:ml-2" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
