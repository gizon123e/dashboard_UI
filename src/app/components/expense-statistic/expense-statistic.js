import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const sum = [12, 19, 23, 15];
const total = sum.reduce((acc, curr) => acc + curr, 0);
const percentages = sum.map((value) => Math.floor((value / total) * 100));

const data = {
  labels: ["Entertainment", "Investment", "Bill Expense", "Others"],
  datasets: [
    {
      label: `% of total`,
      data: percentages,
      backgroundColor: ["#343C6A", "#1814F3", "#a2a1fa", "#fdbc7f"],
      borderColor: ["#343C6A", "#1814F3", "#a2a1fa", "#fdbc7f"],
      borderWidth: 1,
    },
  ],
};

export default function ExpenseStatistic(className) {
  return (
    <>
      <div
        className={`w-[25vw] ${className.className} flex items-center max-[600px]:w-[95vw]`}
      >
        <Pie data={data} className="!w-full !h-auto" />
      </div>
    </>
  );
}
