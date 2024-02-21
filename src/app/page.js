"use client";
import TopNavbar from "./components/top-navbar/top-navbar";
import MyCard from "./components/my-cards/my-cards";
import RecentTransaction from "./components/recent-transaction/recent-transaction";
import WeeklyActivity from "./components/weekly-activity/weekly-activity";
import SideNavbar from "./components/side-navbar/side-navbar";
import ExpenseStatistic from "./components/expense-statistic/expense-statistic";
import QuickTrasnfer from "./components/quick-transfer/quick-transfer";
import BalanceHistory from "./components/balance-history/balance-history";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

export default function Home() {
  const [dropdown, setDropDown] = useState(false);
  return (
    <>
      <TopNavbar
        icon={IoMenuSharp}
        onClick={() => setDropDown((prevState) => !prevState)}
      ></TopNavbar>
      <SideNavbar page="dashboard" dropdown={dropdown}></SideNavbar>
      <div
        className="ml-[17vw] flex flex-col max-[600px]:m-0 
      "
      >
        <div className="inline-flex max-[1100px]:justify-around max-[600px]:flex max-[600px]:flex-col">
          <MyCard></MyCard>
          <RecentTransaction className="ml-10 max-[600px]:ml-5"></RecentTransaction>
        </div>
        <div className="mt-5 inline-flex max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center w-screen">
          <WeeklyActivity></WeeklyActivity>
          <ExpenseStatistic className="ml-10 max-[600px]:m-0"></ExpenseStatistic>
        </div>
        <div class="mt-5 inline-flex w-screen max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center">
          <QuickTrasnfer></QuickTrasnfer>
          <BalanceHistory className="ml-10 max-[600px]:ml-0 max-[600px]:mt-5"></BalanceHistory>
        </div>
      </div>
    </>
  );
}
