import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    year: "Jul",
    First_Acc: 4000,
    Sec_Acc: 2400,
  },
  {
    year: "Aug",
    First_Acc: 3000,
    Sec_Acc: 1398,
  },
  {
    year: "Sep",
    First_Acc: 2000,
    Sec_Acc: 9800,
  },
  {
    year: "Nov",
    First_Acc: 2780,
    Sec_Acc: 3908,
  },
  {
    year: "Dec",
    First_Acc: 1890,
    Sec_Acc: 4800,
  },
  {
    year: "Jan",
    First_Acc: 2390,
    Sec_Acc: 3800,
  },
  {
    year: "Feb",
    First_Acc: 3490,
    Sec_Acc: 4300,
  },
];
export default function BalanceHistory(className) {
  return (
    <>
      <div
        class={`w-[45vw] h-[fit] flex-col justify-between ${className.className} max-[600px]:w-[95vw]`}
      >
        <h2 className="text-[22px] font-semibold max-[1100px]:text-[15px]">
          Balance History
        </h2>
        <div className="w-full h-[320px] m-5">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16DBCC" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#16DBCC" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1814F3" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#1814F3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="First_Acc"
                stroke="#16DBCC"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="Sec_Acc"
                stroke="#1814F3"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
