import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const StatAreaChart = () => {
  const data = [
    {
      name: "Mon.",
      uv: 270,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tue.",
      uv: 300,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Wed.",
      uv: 200,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Thur.",
      uv: 278,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Fri.",
      uv: 189,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sat.",
      uv: 239,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sun.",
      uv: 339,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ContainerShadow className={" !pb-10  !px-2 sm:!px-[34px]"}>
      <h2 className=" font-semibold text-lg mb-[42px] text-[#121528]/60">
        Total Visits<span className="text-[#121528]"> - 130</span>
      </h2>
      <div className={" h-[250px]"}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 20,
              left: -10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFDFA3" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFDFA3" stopOpacity={0} />
              </linearGradient>
              {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient> */}
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis axisLine={true} tickLine={true} dataKey="name" />
            <YAxis tickLine={false} />
            <Tooltip />
            {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" /> */}
            <Area type="monotone" dataKey="uv" stroke="#F9B32E" strokeWidth={3} fillOpacity={3} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ContainerShadow>
  );
};

export default StatAreaChart;
