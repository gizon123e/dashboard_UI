import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Sun",
    deposit: 4000,
    withdraw: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    deposit: 3000,
    withdraw: 1398,
    amt: 2210,
  },
  {
    name: "Tues",
    deposit: 2000,
    withdraw: 2800,
    amt: 2290,
  },
  {
    name: "Wed",
    deposit: 2780,
    withdraw: 3908,
    amt: 2000,
  },
  {
    name: "Thurs",
    deposit: 1890,
    withdraw: 4800,
    amt: 2181,
  },
  {
    name: "Fri",
    deposit: 2390,
    withdraw: 3800,
    amt: 2500,
  },
  {
    name: "Sat",
    deposit: 3490,
    withdraw: 4300,
    amt: 2100,
  },
];
const WeeklyActivity = () => {
  return (
    <>
      <div className="w-[50vw] h-[367px] flex flex-col justify-between max-[1100px]:h-[300px] max-[600px]:w-[95vw] max-[600px]:h-auto">
        <h1 className="font-semibold text-[22px] max-[1100px]:text-[15px]">
          Weekly Activity
        </h1>
        <div className="h-[300px]">
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                verticalAlign={"top"}
                align={"right"}
                iconType={"circle"}
                margin={{ right: 20 }}
              />
              <Bar dataKey="withdraw" fill="#16DBCC" />
              <Bar dataKey="deposit" fill="#1814F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};
export default WeeklyActivity;
